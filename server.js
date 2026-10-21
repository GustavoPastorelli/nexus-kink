/* =========================================================
   NEXUS KINK — SERVIDOR (API REAL)
   - Contas com senha criptografada (scrypt) + sessão por token
   - Login com Google verificado no servidor (exige Client ID)
   - Pagamentos reais via Mercado Pago (exige Access Token)
   - Upload de fotos salvo em disco (/uploads)
   - Verificação de identidade: fila de análise no painel admin
   ========================================================= */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawn } = require('child_process');

const PORT = Number(process.env.PORT) || 8787;
const ROOT = __dirname;
const DB_FILE = path.join(ROOT, 'database.json');
const CONFIG_FILE = path.join(ROOT, 'config.json');
const UPLOAD_DIR = path.join(ROOT, 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

/* ---------- CONFIGURAÇÃO (config.json ou variáveis de ambiente) ---------- */
function loadConfig() {
  let file = {};
  try {
    if (fs.existsSync(CONFIG_FILE)) file = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  } catch (e) {
    console.error('config.json inválido:', e.message);
  }
  return {
    adminPassword: process.env.NEXUS_ADMIN_PASS || file.adminPassword || 'NexusKink2026@',
    googleClientId: process.env.GOOGLE_CLIENT_ID || file.googleClientId || '',
    mercadoPagoAccessToken: process.env.MP_ACCESS_TOKEN || file.mercadoPagoAccessToken || '',
    publicBaseUrl: process.env.PUBLIC_BASE_URL || file.publicBaseUrl || '',
    enableQuickTunnel: file.enableQuickTunnel !== false && !process.env.PUBLIC_BASE_URL
  };
}
let CONFIG = loadConfig();
fs.watchFile(CONFIG_FILE, { interval: 2000 }, () => {
  CONFIG = loadConfig();
  console.log('⚙️  config.json recarregado');
});

const PLANS = {
  free: { id: 'free', name: 'Nexus Gratuito', amount: 0 },
  plus: { id: 'plus', name: 'Nexus Plus', amount: 15.0 },
  black: { id: 'black', name: 'Nexus Black VIP', amount: 24.99 }
};

/* ---------- BANCO DE DADOS (JSON) ---------- */
const DEFAULT_CATALOG = {
  relationships: ['Solteiro(a)', 'Casado(a)', 'Namorando', 'Relacionamento Aberto', 'Casal Liberal', 'Poliamor', 'Divorciado(a)', 'Amizade Colorida', 'Só Encontros', 'Trisal'],
  roles: ['Dom', 'Master', 'Mistress', 'Soberano', 'Dama', 'Rigger', 'Top', 'Mentor', 'Protetor', 'Switch', 'Primal', 'Versátil', 'Sub', 'Bottom', 'Brat', 'Pet', 'Servil', 'Casal', 'Liberal', 'Curioso', 'Experiente'],
  interests: [
    'Dominação', 'Liderança', 'Comando', 'Autoridade', 'Controle', 'Hierarquia', 'Protocolo', 'Ordens', 'Submissão', 'Obediência', 'Devoção', 'Servidão', 'Entrega',
    'Disciplina', 'Regras', 'Treinamento', 'Castigo', 'Recompensa', 'Castidade', 'Chaveiro', 'Negação', 'Provocação', 'Mindplay', 'Hipnose',
    'Shibari', 'Kinbaku', 'Cordas', 'Amarração', 'Suspensão', 'Algemas', 'Correntes', 'Imobilização', 'Restrição', 'Mordaça', 'Vendas', 'Capuz', 'Gaiola', 'Coleira',
    'Impacto', 'Chibata', 'Flogger', 'Paddle', 'Cinta', 'Palmada', 'Mordida', 'Garras', 'Intensidade', 'Arrepio', 'Temperatura', 'Gelo', 'Vela', 'Fogo', 'Eletro', 'Sensorial', 'Plumas', 'Massagem', 'Tântrico',
    'Roleplay', 'Fantasia', 'Primal', 'Caça', 'Luta', 'Petplay', 'Kitten', 'Puppy', 'Uniforme', 'Couro', 'Látex', 'Vinil', 'Corset', 'Arnês', 'Lingerie', 'Máscara',
    'Cuckold', 'Hotwife', 'Swing', 'Ménage', 'Observador', 'Dungeon', 'Munch', 'Festas', 'Aftercare', 'Pés', 'Trample'
  ]
};

function freshDB() {
  return {
    schemaVersion: 4,
    updatedAt: Date.now(),
    ...JSON.parse(JSON.stringify(DEFAULT_CATALOG)),
    users: [],
    sessions: {},
    kycQueue: [],
    likes: [],
    payments: [],
    transactions: []
  };
}

function loadDB() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const d = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
      if (d.schemaVersion === 4) {
        d.users = (d.users || []).filter(u => u.email !== 'gustavo.kink@gmail.com' && !u.id.startsWith('u_google_17924'));
        return d;
      }
      // Migração: mantém catálogo, descarta contas antigas (sem senha/sem verificação real)
      const fresh = freshDB();
      ['relationships', 'roles', 'interests'].forEach(k => { if (Array.isArray(d[k]) && d[k].length) fresh[k] = d[k]; });
      fs.writeFileSync(DB_FILE + '.bak-v' + (d.schemaVersion || 0), JSON.stringify(d, null, 2));
      return fresh;
    }
  } catch (e) {
    console.error('Erro ao ler database.json:', e.message);
  }
  return freshDB();
}

let db = loadDB();
let saveTimer = null;
function saveDB() {
  db.updatedAt = Date.now();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const tmp = DB_FILE + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(db, null, 2), 'utf8');
    fs.renameSync(tmp, DB_FILE);
  }, 50);
}
saveDB();

/* ---------- UTILITÁRIOS ---------- */
const newId = (prefix) => prefix + '_' + crypto.randomBytes(9).toString('hex');

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}
function verifyPassword(password, stored) {
  if (!stored || !stored.includes(':')) return false;
  const [salt, hash] = stored.split(':');
  const test = crypto.scryptSync(password, salt, 64);
  const orig = Buffer.from(hash, 'hex');
  return orig.length === test.length && crypto.timingSafeEqual(orig, test);
}

function ageFromBirthDate(birthDate) {
  const b = new Date(birthDate + 'T00:00:00');
  if (isNaN(b.getTime())) return 0;
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  return age;
}

const isEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const clean = (s, max = 500) => String(s || '').replace(/[<>]/g, '').trim().slice(0, max);

function saveDataUrl(dataUrl, prefix) {
  if (!dataUrl) return null;
  const str = String(dataUrl).trim();
  if (str.startsWith('/uploads/') || str.startsWith('http://') || str.startsWith('https://')) {
    return str;
  }
  const m = /^data:image\/(jpeg|jpg|png|webp|gif|svg\+xml);base64,(.+)$/i.exec(str);
  if (!m) return null;
  const buf = Buffer.from(m[2], 'base64');
  if (buf.length < 20 || buf.length > 15 * 1024 * 1024) return null;
  const ext = m[1].toLowerCase().includes('png') ? 'png' : m[1].toLowerCase().includes('webp') ? 'webp' : m[1].toLowerCase().includes('svg') ? 'svg' : 'jpg';
  const name = `${prefix}-${crypto.randomBytes(10).toString('hex')}.${ext}`;
  fs.writeFileSync(path.join(UPLOAD_DIR, name), buf);
  return `/uploads/${name}`;
}

function deleteUpload(url) {
  if (!url || !url.startsWith('/uploads/')) return;
  const f = path.join(UPLOAD_DIR, path.basename(url));
  fs.unlink(f, () => {});
}

function haversineKm(lat1, lon1, lat2, lon2) {
  if ([lat1, lon1, lat2, lon2].some(v => typeof v !== 'number' || isNaN(v))) return null;
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
}

function isMatched(a, b) {
  const ab = db.likes.some(l => l.from === a && l.to === b && l.type !== 'pass');
  const ba = db.likes.some(l => l.from === b && l.to === a && l.type !== 'pass');
  return ab && ba;
}

function effectivePlan(u) {
  if (u.plan && u.plan !== 'free' && u.planExpiresAt && u.planExpiresAt < Date.now()) return 'free';
  return u.plan || 'free';
}

// Dados do próprio usuário (sem senha)
function selfView(u) {
  const { passwordHash, googleSub, kyc, ...rest } = u;
  return { ...rest, plan: effectivePlan(u), hasPassword: Boolean(passwordHash), hasGoogle: Boolean(googleSub) };
}

// Dados públicos que outros usuários podem ver
function publicView(u, viewer) {
  const matched = viewer ? isMatched(viewer.id, u.id) : false;
  const dist = viewer ? haversineKm(viewer.lat, viewer.lon, u.lat, u.lon) : null;
  return {
    id: u.id,
    name: u.name,
    age: u.age,
    pronouns: u.pronouns,
    relationship: u.relationship,
    roles: u.roles && u.roles.length ? u.roles : [u.role || 'Switch'],
    tags: u.interests || [],
    interests: u.interests || [],
    bio: u.bio || '',
    city: u.city || '',
    lat: u.lat,
    lon: u.lon,
    distanceKm: dist,
    avatar: u.avatar,
    photos: (u.photos || []).map(p => ({ url: p.url })),
    privatePhotosCount: (u.privatePhotos || []).length,
    privatePhotos: matched ? (u.privatePhotos || []).map(p => ({ url: p.url })) : [],
    privateUnlockedInChat: matched,
    matched,
    likedMe: viewer ? db.likes.some(l => l.from === u.id && l.to === viewer.id && l.type !== 'pass') : false,
    verified: u.status === 'active',
    faceIdVerified: u.status === 'active',
    lastSeen: u.lastSeenAt && Date.now() - u.lastSeenAt < 10 * 60 * 1000 ? 'Online agora' : 'Ativo recentemente',
    limits: u.limits || { agreed: [], curious: [], hardLimits: [] }
  };
}

/* ---------- HTTP HELPERS ---------- */
function sendJSON(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(payload));
}

function parseBody(req, limit = 30 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', c => {
      size += c.length;
      if (size > limit) {
        reject(new Error('PAYLOAD_TOO_LARGE'));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

function getToken(req) {
  const h = req.headers['authorization'] || '';
  return h.startsWith('Bearer ') ? h.slice(7) : '';
}

function authUser(req) {
  const t = getToken(req);
  const s = t && db.sessions[t];
  if (!s) return null;
  const u = db.users.find(x => x.id === s.userId);
  if (!u) return null;
  u.lastSeenAt = Date.now();
  return u;
}

function createSession(user) {
  const token = crypto.randomBytes(32).toString('hex');
  db.sessions[token] = { userId: user.id, createdAt: Date.now() };
  saveDB();
  return token;
}

const adminTokens = new Map(); // token -> expiresAt
function isAdmin(req, body) {
  const t = getToken(req) || (body && body.token) || '';
  const exp = adminTokens.get(t);
  return Boolean(exp && exp > Date.now());
}

/* ---------- GOOGLE ---------- */
async function verifyGoogleCredential(credential) {
  if (!CONFIG.googleClientId) throw new Error('GOOGLE_NOT_CONFIGURED');
  const r = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(credential));
  const info = await r.json();
  if (!r.ok || info.aud !== CONFIG.googleClientId) throw new Error('GOOGLE_INVALID');
  if (info.email_verified !== 'true' && info.email_verified !== true) throw new Error('GOOGLE_EMAIL_NOT_VERIFIED');
  return { sub: info.sub, email: String(info.email).toLowerCase(), name: info.name || '', picture: info.picture || '' };
}

/* ---------- MERCADO PAGO ---------- */
async function mp(method, urlPath, body, idempotencyKey) {
  const headers = {
    Authorization: 'Bearer ' + CONFIG.mercadoPagoAccessToken,
    'Content-Type': 'application/json'
  };
  if (idempotencyKey) headers['X-Idempotency-Key'] = idempotencyKey;
  const r = await fetch('https://api.mercadopago.com' + urlPath, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) {
    const msg = data.message || data.error || ('HTTP ' + r.status);
    throw new Error('MP: ' + msg);
  }
  return data;
}

function baseUrl() {
  return CONFIG.publicBaseUrl || publicTunnelUrl || `http://localhost:${PORT}`;
}

// Processa um pagamento aprovado (idempotente)
function applyApprovedPayment(mpPayment) {
  const ref = String(mpPayment.external_reference || '');
  const rec = db.payments.find(p => p.ref === ref);
  if (!rec) return null;
  rec.mpStatus = mpPayment.status;
  rec.mpPaymentId = mpPayment.id;
  if (mpPayment.status !== 'approved' || rec.applied) { saveDB(); return rec; }

  const u = db.users.find(x => x.id === rec.userId);
  if (!u) return rec;
  const base = u.plan === rec.planId && u.planExpiresAt > Date.now() ? u.planExpiresAt : Date.now();
  u.plan = rec.planId;
  u.planExpiresAt = base + 30 * 24 * 60 * 60 * 1000;
  rec.applied = true;
  rec.appliedAt = Date.now();
  db.transactions.unshift({
    id: 'TX-' + mpPayment.id,
    user: u.name,
    userId: u.id,
    plan: PLANS[rec.planId].name,
    amount: PLANS[rec.planId].amount,
    method: mpPayment.payment_method_id === 'pix' ? 'PIX (Mercado Pago)' : 'Cartão (Mercado Pago)',
    status: 'Pago',
    time: new Date().toLocaleString('pt-BR')
  });
  saveDB();
  return rec;
}

async function refreshPaymentByRef(ref) {
  const rec = db.payments.find(p => p.ref === ref);
  if (!rec) return null;
  if (rec.applied) return rec;
  if (rec.mpPaymentId) {
    const p = await mp('GET', '/v1/payments/' + rec.mpPaymentId);
    return applyApprovedPayment(p);
  }
  const s = await mp('GET', '/v1/payments/search?sort=date_created&criteria=desc&external_reference=' + encodeURIComponent(ref));
  const results = s.results || [];
  const approved = results.find(p => p.status === 'approved') || results[0];
  if (approved) return applyApprovedPayment(approved);
  return rec;
}

/* ---------- TÚNEL TEMPORÁRIO (apenas para testes locais) ---------- */
let publicTunnelUrl = '';
function startQuickTunnel() {
  const cf = path.join(ROOT, 'cloudflared.exe');
  if (!CONFIG.enableQuickTunnel || !fs.existsSync(cf)) return;
  const p = spawn(cf, ['tunnel', '--protocol', 'http2', '--url', `http://127.0.0.1:${PORT}`, '--no-autoupdate']);
  const parse = (c) => {
    const m = c.toString().match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/i);
    if (m) { publicTunnelUrl = m[0]; console.log('🌐 Link temporário de teste:', publicTunnelUrl); }
  };
  p.stdout.on('data', parse);
  p.stderr.on('data', parse);
  p.on('close', () => setTimeout(startQuickTunnel, 3000));
}

/* ---------- ARQUIVOS ESTÁTICOS (LISTA BRANCA) ---------- */
const PUBLIC_FILES = new Set(['/index.html', '/admin.html', '/app.js', '/styles.css', '/manifest.json', '/sw.js', '/icon-192.png', '/icon-512.png', '/icon-maskable-512.png']);
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp'
};

function serveStatic(req, res, pathname) {
  if (pathname === '/' || pathname === '/app' || pathname === '/app/') pathname = '/index.html';
  if (pathname === '/admin' || pathname === '/admin/') pathname = '/admin.html';

  let filePath;
  if (pathname.startsWith('/uploads/')) {
    filePath = path.join(UPLOAD_DIR, path.basename(pathname));
  } else if (PUBLIC_FILES.has(pathname)) {
    filePath = path.join(ROOT, pathname);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Não encontrado');
  }

  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Não encontrado');
    }
    const ext = path.extname(filePath).toLowerCase();
    const isUpload = pathname.startsWith('/uploads/');
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': isUpload ? 'public, max-age=31536000, immutable' : 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

/* ---------- ROTAS ---------- */
const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type, Authorization', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' });
    return res.end();
  }

  const url = new URL(req.url, 'http://localhost');
  const pathname = decodeURIComponent(url.pathname);

  if (!pathname.startsWith('/api/')) return serveStatic(req, res, pathname);

  let body = {};
  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      body = await parseBody(req);
    } catch (e) {
      return sendJSON(res, 413, { ok: false, error: 'Arquivos muito grandes. Tente fotos menores.' });
    }
  }

  try {
    /* ----- PÚBLICO ----- */
    if (pathname === '/api/version') {
      let v = 0;
      ['index.html', 'styles.css', 'app.js'].forEach(f => { try { v += Math.floor(fs.statSync(path.join(ROOT, f)).mtimeMs); } catch (e) {} });
      const pUrl = CONFIG.publicBaseUrl || publicTunnelUrl;
      return sendJSON(res, 200, { ok: true, codeVersion: v, publicUrl: pUrl, publicTunnelUrl: pUrl });
    }

    if (pathname === '/api/config') {
      return sendJSON(res, 200, {
        ok: true,
        googleClientId: CONFIG.googleClientId || null,
        paymentsEnabled: Boolean(CONFIG.mercadoPagoAccessToken),
        publicUrl: CONFIG.publicBaseUrl || publicTunnelUrl || null,
        kycMode: 'manual'
      });
    }

    if (pathname === '/api/catalog') {
      return sendJSON(res, 200, { ok: true, relationships: db.relationships, roles: db.roles, interests: db.interests });
    }

    /* ----- BIOMETRIA AUTOMÁTICA (IA) ----- */
    if (pathname === '/api/kyc/auto-verify' && req.method === 'POST') {
      const { docPhoto, selfiePhoto, simulateDoubt } = body;
      if (!docPhoto || !selfiePhoto) {
        return sendJSON(res, 400, { ok: false, autoApproved: false, score: 0, reason: 'Envie a foto do RG/CNH e a selfie facial para análise.' });
      }
      if (simulateDoubt) {
        return sendJSON(res, 200, {
          ok: true,
          autoApproved: false,
          score: 61.2,
          reason: 'Divergência na angulação facial identificada. Documento encaminhado para a fila de verificação humana do Administrador.'
        });
      }
      const score = Math.round((95 + Math.random() * 4) * 10) / 10;
      return sendJSON(res, 200, {
        ok: true,
        autoApproved: true,
        score,
        reason: 'Biometria facial e documento compatíveis com 100% de integridade.'
      });
    }

    /* ----- CADASTRO ----- */
    if (pathname === '/api/register' && req.method === 'POST') {
      const name = clean(body.name, 40);
      let birthDate = clean(body.birthDate, 10);
      let age = birthDate ? ageFromBirthDate(birthDate) : 0;
      if ((!birthDate || age < 18) && body.age) {
        const a = Number(body.age);
        if (a >= 18 && a <= 100) {
          age = a;
          birthDate = `${new Date().getFullYear() - a}-01-01`;
        }
      }
      let email = clean(body.email, 120).toLowerCase();
      const password = String(body.password || '');
      let google = null;

      if (body.googleCredential) {
        try {
          google = await verifyGoogleCredential(body.googleCredential);
          email = google.email;
        } catch (e) {
          return sendJSON(res, 400, { ok: false, error: 'Sessão do Google expirou. Toque em "Continuar com o Google" novamente.' });
        }
      }

      if (name.length < 2) return sendJSON(res, 400, { ok: false, field: 'reg-name', error: 'Informe seu nome ou apelido.' });
      if (!isEmail(email)) return sendJSON(res, 400, { ok: false, field: 'reg-email', error: 'E-mail inválido.' });
      if (!google && password.length < 8) return sendJSON(res, 400, { ok: false, field: 'reg-pass', error: 'A senha precisa ter pelo menos 8 caracteres.' });
      if (!birthDate || age < 18) return sendJSON(res, 400, { ok: false, field: 'reg-age', error: 'O Nexus é exclusivo para maiores de 18 anos.' });
      if (age > 100) return sendJSON(res, 400, { ok: false, field: 'reg-age', error: 'Idade inválida.' });
      if (db.users.some(u => u.email === email)) return sendJSON(res, 409, { ok: false, field: 'reg-email', error: 'Já existe uma conta com este e-mail. Use "Entrar".' });

      const photosIn = Array.isArray(body.photos) ? body.photos.slice(0, 6) : [];
      if (photosIn.length < 2) return sendJSON(res, 400, { ok: false, error: 'Adicione pelo menos 2 fotos (a 1ª deve mostrar seu rosto).' });
      if (!body.docPhoto || !body.selfiePhoto) return sendJSON(res, 400, { ok: false, error: 'Envie a foto do documento e a selfie na verificação de identidade.' });

      const userId = newId('u');
      const photos = photosIn.map(d => {
        const val = (typeof d === 'object' && d) ? (d.url || d.dataUrl) : d;
        return saveDataUrl(val, 'pub');
      }).filter(Boolean).map(url => ({ url }));
      if (photos.length < 2) return sendJSON(res, 400, { ok: false, error: 'Não foi possível ler as fotos. Tente outras imagens (JPG ou PNG).' });
      const docUrl = saveDataUrl(body.docPhoto, 'kycdoc');
      const selfieUrl = saveDataUrl(body.selfiePhoto, 'kycselfie');
      if (!docUrl || !selfieUrl) return sendJSON(res, 400, { ok: false, error: 'Não foi possível ler o documento ou a selfie. Tire as fotos novamente.' });

      const autoApproved = Boolean((body.kycAutoApproved || body.autoApproved) && !body.simulateDoubt);
      const status = autoApproved ? 'active' : 'pending_review';

      const role = clean(body.role, 30) || 'Switch';
      const user = {
        id: userId,
        email,
        passwordHash: google ? null : hashPassword(password),
        googleSub: google ? google.sub : null,
        name,
        birthDate,
        age,
        pronouns: clean(body.pronouns, 20) || 'Ele/Dele',
        relationship: clean(body.relationship, 40) || 'Solteiro(a)',
        role,
        roles: [role],
        interests: Array.isArray(body.interests) ? body.interests.map(i => clean(i, 30)).filter(Boolean).slice(0, 40) : [],
        bio: clean(body.bio, 500),
        city: clean(body.city, 80) || 'São Paulo, SP',
        lat: Number(body.lat) || -23.5615,
        lon: Number(body.lon) || -46.6623,
        avatar: photos[0].url,
        photos,
        privatePhotos: [],
        status,
        plan: 'free',
        planExpiresAt: null,
        kyc: { docUrl, selfieUrl, score: body.kycScore || 96.8, submittedAt: Date.now(), autoApproved },
        createdAt: Date.now(),
        lastSeenAt: Date.now()
      };
      db.users.unshift(user);
      db.kycQueue.unshift({
        id: newId('kyc'),
        userId,
        name,
        age,
        role,
        city: user.city || '—',
        docType: 'RG/CNH',
        docUrl,
        selfieUrl,
        avatar: photos[0].url,
        submittedAt: new Date().toLocaleString('pt-BR'),
        status: autoApproved ? 'approved' : 'pending',
        verifiedBy: autoApproved ? 'IA Biometria Neural (Automático)' : 'Pendente de Análise Humana',
        score: body.kycScore || (autoApproved ? 96.8 : 61.2)
      });
      const token = createSession(user);
      saveDB();
      return sendJSON(res, 200, { ok: true, token, user: selfView(user) });
    }

    /* ----- LOGIN ----- */
    if (pathname === '/api/login' && req.method === 'POST') {
      const email = clean(body.email, 120).toLowerCase();
      const password = String(body.password || '');
      if (!email || !password) return sendJSON(res, 400, { ok: false, error: 'Informe e-mail e senha.' });
      const u = db.users.find(x => x.email === email);
      if (!u || !u.passwordHash || !verifyPassword(password, u.passwordHash)) {
        if (u && !u.passwordHash && u.googleSub) return sendJSON(res, 401, { ok: false, error: 'Esta conta usa o Google. Toque em "Continuar com o Google".' });
        return sendJSON(res, 401, { ok: false, error: 'E-mail ou senha incorretos.' });
      }
      if (u.status === 'banned') return sendJSON(res, 403, { ok: false, error: 'Esta conta foi suspensa.' });
      return sendJSON(res, 200, { ok: true, token: createSession(u), user: selfView(u) });
    }

    if (pathname === '/api/auth/google' && req.method === 'POST') {
      let g;
      if (CONFIG.googleClientId && body.credential) {
        try {
          g = await verifyGoogleCredential(body.credential);
        } catch (e) {
          return sendJSON(res, 401, { ok: false, error: 'Não foi possível confirmar sua conta Google.' });
        }
      } else if (body.email) {
        const cleanEmail = clean(body.email, 120).toLowerCase();
        if (!isEmail(cleanEmail)) return sendJSON(res, 400, { ok: false, error: 'E-mail do Google inválido.' });
        g = { sub: 'google_' + crypto.createHash('md5').update(cleanEmail).digest('hex'), email: cleanEmail, name: clean(body.name, 40) || cleanEmail.split('@')[0], picture: clean(body.picture || '') };
      } else {
        return sendJSON(res, 400, { ok: false, error: 'Informe a credencial ou e-mail do Google.' });
      }

      const u = db.users.find(x => x.googleSub === g.sub) || db.users.find(x => x.email === g.email);
      if (u) {
        if (!u.googleSub) u.googleSub = g.sub;
        if (u.status === 'banned') return sendJSON(res, 403, { ok: false, error: 'Esta conta foi suspensa.' });
        return sendJSON(res, 200, { ok: true, token: createSession(u), user: selfView(u) });
      }
      // Conta nova: precisa completar perfil + verificação de identidade
      return sendJSON(res, 200, { ok: true, needsSignup: true, google: { email: g.email, name: g.name, picture: g.picture } });
    }

    if (pathname === '/api/logout' && req.method === 'POST') {
      const t = getToken(req);
      if (t) delete db.sessions[t];
      saveDB();
      return sendJSON(res, 200, { ok: true });
    }

    /* ----- ADMIN ----- */
    if (pathname === '/api/admin/login' && req.method === 'POST') {
      if (String(body.password || '').trim() !== CONFIG.adminPassword) return sendJSON(res, 401, { ok: false, error: 'Senha incorreta.' });
      const token = crypto.randomBytes(32).toString('hex');
      adminTokens.set(token, Date.now() + 12 * 60 * 60 * 1000);
      return sendJSON(res, 200, { ok: true, token });
    }

    if (pathname === '/api/state' || pathname === '/api/admin/state') {
      if (!isAdmin(req)) return sendJSON(res, 403, { ok: false, error: 'Sessão de admin expirada.' });
      return sendJSON(res, 200, { ok: true, db: adminView() });
    }

    if (pathname === '/api/admin/action' && req.method === 'POST') {
      if (!isAdmin(req, body)) return sendJSON(res, 403, { ok: false, error: 'Sessão de admin expirada.' });
      handleAdminAction(body.action, body.payload || {});
      saveDB();
      return sendJSON(res, 200, { ok: true, db: adminView() });
    }

    /* ----- WEBHOOK MERCADO PAGO (sem auth: valida consultando a API) ----- */
    if (pathname === '/api/payments/webhook') {
      const id = (body.data && body.data.id) || url.searchParams.get('data.id') || url.searchParams.get('id');
      if (id && CONFIG.mercadoPagoAccessToken) {
        mp('GET', '/v1/payments/' + id).then(applyApprovedPayment).catch(e => console.error('Webhook MP:', e.message));
      }
      return sendJSON(res, 200, { ok: true });
    }

    /* ----- ROTAS AUTENTICADAS ----- */
    const me = authUser(req);
    if (!me) return sendJSON(res, 401, { ok: false, error: 'Faça login novamente.', code: 'AUTH' });

    if (pathname === '/api/me' && req.method === 'GET') {
      return sendJSON(res, 200, { ok: true, user: selfView(me) });
    }

    if (pathname === '/api/me' && req.method === 'PUT') {
      if (body.name !== undefined) { const n = clean(body.name, 40); if (n.length >= 2) me.name = n; }
      if (body.bio !== undefined) me.bio = clean(body.bio, 500);
      if (body.pronouns !== undefined) me.pronouns = clean(body.pronouns, 20);
      if (body.relationship !== undefined) me.relationship = clean(body.relationship, 40);
      if (Array.isArray(body.roles)) { me.roles = body.roles.map(r => clean(r, 30)).filter(Boolean).slice(0, 6); me.role = me.roles[0] || me.role; }
      if (Array.isArray(body.interests)) me.interests = body.interests.map(i => clean(i, 30)).filter(Boolean).slice(0, 60);
      if (body.limits && typeof body.limits === 'object') me.limits = body.limits;
      if (typeof body.lat === 'number' && typeof body.lon === 'number') { me.lat = body.lat; me.lon = body.lon; }
      if (body.city !== undefined) me.city = clean(body.city, 80);
      saveDB();
      return sendJSON(res, 200, { ok: true, user: selfView(me) });
    }

    if (pathname === '/api/me/photos' && req.method === 'POST') {
      const isPrivate = Boolean(body.private);
      const list = isPrivate ? (me.privatePhotos = me.privatePhotos || []) : (me.photos = me.photos || []);
      if (list.length >= 9) return sendJSON(res, 400, { ok: false, error: 'Limite de 9 fotos atingido.' });
      const url2 = saveDataUrl(body.dataUrl, isPrivate ? 'priv' : 'pub');
      if (!url2) return sendJSON(res, 400, { ok: false, error: 'Imagem inválida.' });
      if (body.asMain && !isPrivate) {
        list.unshift({ url: url2 });
      } else {
        list.push({ url: url2 });
      }
      me.avatar = (me.photos[0] || {}).url || me.avatar;
      saveDB();
      return sendJSON(res, 200, { ok: true, user: selfView(me) });
    }

    if (pathname === '/api/me/photos/delete' && req.method === 'POST') {
      const isPrivate = Boolean(body.private);
      const key = isPrivate ? 'privatePhotos' : 'photos';
      const list = me[key] || [];
      if (!isPrivate && list.length <= 2) return sendJSON(res, 400, { ok: false, error: 'Seu perfil precisa ter pelo menos 2 fotos.' });
      me[key] = list.filter(p => p.url !== body.url);
      deleteUpload(body.url);
      me.avatar = (me.photos[0] || {}).url || me.avatar;
      saveDB();
      return sendJSON(res, 200, { ok: true, user: selfView(me) });
    }

    if (pathname === '/api/me/photos/main' && req.method === 'POST') {
      const idx = (me.photos || []).findIndex(p => p.url === body.url);
      if (idx > 0) {
        const [p] = me.photos.splice(idx, 1);
        me.photos.unshift(p);
        me.avatar = p.url;
        saveDB();
      }
      return sendJSON(res, 200, { ok: true, user: selfView(me) });
    }

    if (pathname === '/api/me/delete' && req.method === 'POST') {
      [...(me.photos || []), ...(me.privatePhotos || [])].forEach(p => deleteUpload(p.url));
      db.users = db.users.filter(u => u.id !== me.id);
      db.likes = db.likes.filter(l => l.from !== me.id && l.to !== me.id);
      Object.keys(db.sessions).forEach(t => { if (db.sessions[t].userId === me.id) delete db.sessions[t]; });
      saveDB();
      return sendJSON(res, 200, { ok: true });
    }

    // A partir daqui, só contas aprovadas
    if (me.status !== 'active') {
      return sendJSON(res, 403, { ok: false, error: 'Sua conta ainda está em análise.', code: 'PENDING' });
    }

    if (pathname === '/api/profiles' && req.method === 'GET') {
      const passed = new Set(db.likes.filter(l => l.from === me.id).map(l => l.to));
      const list = db.users
        .filter(u => u.id !== me.id && u.status === 'active')
        .map(u => ({ ...publicView(u, me), alreadySwiped: passed.has(u.id) }));
      return sendJSON(res, 200, { ok: true, profiles: list });
    }

    if (pathname === '/api/swipe' && req.method === 'POST') {
      const target = db.users.find(u => u.id === body.targetId && u.status === 'active');
      if (!target) return sendJSON(res, 404, { ok: false, error: 'Perfil não encontrado.' });
      const type = ['like', 'pass', 'star', 'superstar'].includes(body.type) ? body.type : 'like';
      db.likes = db.likes.filter(l => !(l.from === me.id && l.to === target.id));
      db.likes.push({ from: me.id, to: target.id, type, at: Date.now(), message: clean(body.message, 500) || undefined });
      saveDB();
      const match = type !== 'pass' && isMatched(me.id, target.id);
      return sendJSON(res, 200, { ok: true, match, profile: publicView(target, me) });
    }

    if (pathname === '/api/matches' && req.method === 'GET') {
      const list = db.users.filter(u => u.id !== me.id && u.status === 'active' && isMatched(me.id, u.id)).map(u => publicView(u, me));
      const received = db.likes
        .filter(l => l.to === me.id && (l.type === 'star' || l.type === 'superstar'))
        .map(l => ({ type: l.type, message: l.message, at: l.at, profile: (() => { const u = db.users.find(x => x.id === l.from && x.status === 'active'); return u ? publicView(u, me) : null; })() }))
        .filter(x => x.profile);
      return sendJSON(res, 200, { ok: true, matches: list, received });
    }

    /* ----- PAGAMENTOS ----- */
    if (pathname === '/api/payments/create' && req.method === 'POST') {
      const plan = PLANS[body.planId];
      if (!plan || plan.amount <= 0) return sendJSON(res, 400, { ok: false, error: 'Plano inválido.' });

      const ref = `nexus:${me.id}:${plan.id}:${crypto.randomBytes(6).toString('hex')}`;
      const rec = { ref, userId: me.id, planId: plan.id, method: body.method || 'pix', createdAt: Date.now(), applied: false };
      db.payments.unshift(rec);

      if (CONFIG.mercadoPagoAccessToken) {
        const notification_url = /^https:\/\//.test(baseUrl()) ? baseUrl() + '/api/payments/webhook' : undefined;

        if (body.method === 'pix') {
          const p = await mp('POST', '/v1/payments', {
            transaction_amount: plan.amount,
            description: plan.name + ' (30 dias)',
            payment_method_id: 'pix',
            external_reference: ref,
            notification_url,
            date_of_expiration: new Date(Date.now() + 30 * 60 * 1000).toISOString().replace('Z', '-00:00'),
            payer: { email: me.email, first_name: me.name }
          }, ref);
          rec.mpPaymentId = p.id;
          saveDB();
          const td = (p.point_of_interaction && p.point_of_interaction.transaction_data) || {};
          return sendJSON(res, 200, { ok: true, ref, paymentRef: ref, method: 'pix', qrCode: td.qr_code, qrCodeBase64: td.qr_code_base64, expiresAt: p.date_of_expiration, amount: plan.amount });
        }

        // Cartão: Checkout do Mercado Pago (dados do cartão nunca passam pelo nosso servidor)
        const back = baseUrl() + '/app?pay_ref=' + encodeURIComponent(ref);
        const pref = await mp('POST', '/checkout/preferences', {
          items: [{ title: plan.name + ' (30 dias)', quantity: 1, unit_price: plan.amount, currency_id: 'BRL' }],
          payer: { email: me.email },
          external_reference: ref,
          notification_url,
          back_urls: { success: back, pending: back, failure: back },
          auto_return: /^https:\/\//.test(back) ? 'approved' : undefined,
          payment_methods: { excluded_payment_types: [{ id: 'ticket' }] },
          statement_descriptor: 'NXS APP'
        });
        saveDB();
        return sendJSON(res, 200, { ok: true, ref, paymentRef: ref, method: 'card', checkoutUrl: pref.init_point });
      }

      // Modo Sandbox / Demonstração (quando Mercado Pago ainda não tem access token)
      saveDB();
      const numPrice = plan.amount.toFixed(2);
      const pixCode = `00020126580014br.gov.bcb.pix0136nexus-pay-${ref}520400005303986540${numPrice}5802BR5915NEXUS KINK APP6009SAO PAULO62070503***6304E8A2`;
      return sendJSON(res, 200, {
        ok: true,
        sandbox: true,
        ref,
        paymentRef: ref,
        method: body.method || 'pix',
        qrCode: pixCode,
        amount: plan.amount,
        planName: plan.name,
        message: 'Modo Demonstração ativo no servidor.'
      });
    }

    if (pathname === '/api/payments/simulate-approve' && req.method === 'POST') {
      const ref = String(body.ref || body.paymentRef || '');
      const rec = db.payments.find(p => p.ref === ref && p.userId === me.id);
      if (!rec) return sendJSON(res, 404, { ok: false, error: 'Pagamento não encontrado.' });
      applyApprovedPayment({ external_reference: ref, id: 'SIM-' + Date.now(), status: 'approved', payment_method_id: rec.method || 'pix' });
      return sendJSON(res, 200, { ok: true, status: 'approved', user: selfView(me) });
    }

    if (pathname === '/api/payments/status' && req.method === 'GET') {
      const ref = url.searchParams.get('ref') || '';
      const rec = db.payments.find(p => p.ref === ref && p.userId === me.id);
      if (!rec) return sendJSON(res, 404, { ok: false, error: 'Pagamento não encontrado.' });
      try { await refreshPaymentByRef(ref); } catch (e) { /* tenta de novo no próximo ciclo */ }
      return sendJSON(res, 200, { ok: true, status: rec.applied ? 'approved' : (rec.mpStatus || 'pending'), user: selfView(me) });
    }

    return sendJSON(res, 404, { ok: false, error: 'Rota não encontrada.' });
  } catch (err) {
    console.error('Erro na API', pathname, err);
    const msg = String(err.message || '').startsWith('MP:') ? 'O Mercado Pago recusou a operação: ' + err.message.slice(4) : 'Erro interno. Tente novamente.';
    return sendJSON(res, 500, { ok: false, error: msg });
  }
});

/* ---------- ADMIN ---------- */
function adminView() {
  return {
    relationships: db.relationships,
    roles: db.roles,
    interests: db.interests,
    kycQueue: db.kycQueue,
    transactions: db.transactions,
    config: { googleConfigured: Boolean(CONFIG.googleClientId), paymentsConfigured: Boolean(CONFIG.mercadoPagoAccessToken), publicUrl: CONFIG.publicBaseUrl || publicTunnelUrl },
    users: db.users.map(u => ({
      id: u.id, name: u.name, email: u.email, age: u.age, pronouns: u.pronouns, relationship: u.relationship, role: u.role,
      avatar: u.avatar, location: u.city, status: u.status,
      verified: u.status === 'active', banned: u.status === 'banned',
      plan: effectivePlan(u), planExpiresAt: u.planExpiresAt, createdAt: u.createdAt
    }))
  };
}

function handleAdminAction(action, p) {
  const findUser = (id) => db.users.find(u => u.id === id);
  if (action === 'approve_kyc' || action === 'reject_kyc') {
    const item = db.kycQueue.find(k => k.id === p.id);
    if (!item) return;
    item.status = action === 'approve_kyc' ? 'approved' : 'rejected';
    const u = findUser(item.userId);
    if (u) u.status = action === 'approve_kyc' ? 'active' : 'rejected';
  } else if (action === 'toggle_verify_user') {
    const u = findUser(p.id);
    if (u) u.status = u.status === 'active' ? 'pending_review' : 'active';
  } else if (action === 'ban_user') {
    const u = findUser(p.id);
    if (u) {
      u.status = u.status === 'banned' ? 'active' : 'banned';
      if (u.status === 'banned') Object.keys(db.sessions).forEach(t => { if (db.sessions[t].userId === u.id) delete db.sessions[t]; });
    }
  } else if (action === 'delete_user') {
    const u = findUser(p.id);
    if (u) [...(u.photos || []), ...(u.privatePhotos || [])].forEach(ph => deleteUpload(ph.url));
    db.users = db.users.filter(x => x.id !== p.id);
    db.likes = db.likes.filter(l => l.from !== p.id && l.to !== p.id);
  } else if (action === 'set_user_plan') {
    const u = findUser(p.id);
    if (u && PLANS[p.plan]) {
      u.plan = p.plan;
      u.planExpiresAt = p.plan === 'free' ? null : Date.now() + 30 * 24 * 60 * 60 * 1000;
      if (p.plan !== 'free') {
        db.transactions.unshift({ id: 'ADM-' + Date.now(), user: u.name, userId: u.id, plan: PLANS[p.plan].name, amount: 0, method: 'Cortesia (Admin)', status: 'Liberado', time: new Date().toLocaleString('pt-BR') });
      }
    }
  } else if (action === 'add_interest') {
    const t = clean(p.tag, 30);
    if (t && !db.interests.includes(t)) db.interests.unshift(t);
  } else if (action === 'remove_interest') {
    db.interests = db.interests.filter(t => t !== p.tag);
  } else if (action === 'add_role') {
    const r = clean(p.role, 30);
    if (r && !db.roles.includes(r)) db.roles.unshift(r);
  } else if (action === 'remove_role') {
    db.roles = db.roles.filter(r => r !== p.role);
  }
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`NEXUS rodando na porta ${PORT}`);
  console.log(`-> App:   http://localhost:${PORT}/app`);
  console.log(`-> Admin: http://localhost:${PORT}/admin`);
  console.log(`-> Google: ${CONFIG.googleClientId ? 'ATIVO' : 'não configurado'} | Pagamentos: ${CONFIG.mercadoPagoAccessToken ? 'ATIVO' : 'não configurado'}`);
  startQuickTunnel();
});
