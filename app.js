const RELATIONSHIP_CATALOG = [
  'Solteiro(a)',
  'Casado(a)',
  'Namorando',
  'Relacionamento Aberto',
  'Casal Liberal',
  'Poliamor',
  'Divorciado(a)',
  'Amizade Colorida',
  'Só Encontros',
  'Trisal'
];

const ROLE_CATALOG = [
  'Dom',
  'Master',
  'Mistress',
  'Soberano',
  'Dama',
  'Rigger',
  'Top',
  'Mentor',
  'Protetor',
  'Switch',
  'Primal',
  'Versátil',
  'Sub',
  'Bottom',
  'Brat',
  'Pet',
  'Servil',
  'Casal',
  'Liberal',
  'Curioso',
  'Experiente'
];

const INTEREST_CATALOG = [
  // Dominação, Comando & Poder
  'Dominação',
  'Liderança',
  'Comando',
  'Autoridade',
  'Controle',
  'Hierarquia',
  'Protocolo',
  'Ordens',
  'Submissão',
  'Obediência',
  'Devoção',
  'Servidão',
  'Entrega',
  // Disciplina, Treinamento & Mental
  'Disciplina',
  'Regras',
  'Treinamento',
  'Castigo',
  'Recompensa',
  'Castidade',
  'Chaveiro',
  'Negação',
  'Provocação',
  'Mindplay',
  'Hipnose',
  // Amarração, Cordas & Restrição
  'Shibari',
  'Kinbaku',
  'Cordas',
  'Amarração',
  'Suspensão',
  'Algemas',
  'Correntes',
  'Imobilização',
  'Restrição',
  'Mordaça',
  'Vendas',
  'Capuz',
  'Gaiola',
  'Coleira',
  // Impacto, Intensidade & Sensorial
  'Impacto',
  'Chibata',
  'Flogger',
  'Paddle',
  'Cinta',
  'Palmada',
  'Mordida',
  'Garras',
  'Intensidade',
  'Arrepio',
  'Temperatura',
  'Gelo',
  'Vela',
  'Fogo',
  'Eletro',
  'Sensorial',
  'Plumas',
  'Massagem',
  'Tântrico',
  // Roleplay, Primal & Estética
  'Roleplay',
  'Fantasia',
  'Primal',
  'Caça',
  'Luta',
  'Petplay',
  'Kitten',
  'Puppy',
  'Uniforme',
  'Couro',
  'Látex',
  'Vinil',
  'Corset',
  'Arnês',
  'Lingerie',
  'Máscara',
  // Casais, Comunidade & Outros
  'Cuckold',
  'Hotwife',
  'Swing',
  'Ménage',
  'Observador',
  'Dungeon',
  'Munch',
  'Festas',
  'Aftercare',
  'Pés',
  'Trample'
];

const PLANS_CATALOG = {
  free: {
    id: 'free',
    name: 'Nexus Gratuito',
    badge: 'FREE',
    price: 'R$ 0',
    likesPerDay: 10,
    starsPerDay: 1,
    superstarsPerDay: 0,
    hasStreetRadar: false,
    hasAISearch: false,
    perks: [
      '📍 Distância aproximada do último acesso (Gratuito)',
      '♥ 10 curtidas diárias + 1 Estrela de demonstração',
      '💬 Chat liberado após Match mútuo',
      '📸 Mínimo 2 fotos + Selo de Identidade Real'
    ]
  },
  plus: {
    id: 'plus',
    name: 'Nexus Plus',
    badge: 'PLUS',
    price: 'R$ 15,00 / mês',
    likesPerDay: 20,
    starsPerDay: 5,
    superstarsPerDay: 1,
    hasStreetRadar: true,
    hasAISearch: true,
    perks: [
      '⭐ 5 Estrelas / dia (Você vai para 1º da lista da pessoa)',
      '♥ 20 Curtidas por dia',
      '🌟 1 Superestrela / dia (Mande mensagem direta sem precisar de Match!)',
      '⚡ Radar "Passaram pela mesma rua 20 vezes" desbloqueado',
      '✦ Busca por Desejo com IA habilitada'
    ]
  },
  black: {
    id: 'black',
    name: 'Nexus Black VIP',
    badge: 'BLACK',
    price: 'R$ 24,99 / mês',
    likesPerDay: 40,
    starsPerDay: 15,
    superstarsPerDay: 3,
    hasStreetRadar: true,
    hasAISearch: true,
    perks: [
      '⭐ 15 Estrelas / dia (Prioridade máxima no topo da fila)',
      '♥ 40 Curtidas diárias',
      '🌟 3 Superestrelas / dia (Mensagem direta instantânea)',
      '⚡ Radar Detalhado de Rua (Quantas vezes cruzaram + rua exata)',
      '🧠 Motor de IA Semântico Ilimitado + Acesso prioritário a Álbuns'
    ]
  }
};

const DEFAULT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
];

// Perfis de demonstração (usados apenas sob demanda para testes)
const DEMO_PROFILES_CATALOG = [
  {
    id: 'p1',
    name: 'Valentina',
    age: 29,
    relationship: 'Solteiro(a)',
    city: 'São Paulo • Jardins',
    distanceKm: 3,
    lastSeen: 'Online agora',
    crossedPathsCount: 20,
    crossedStreet: 'Rua Oscar Freire • Jardins',
    verified: true,
    faceIdVerified: true,
    willMatchOnLike: true,
    roles: ['Dom', 'Mistress'],
    archetype: 'Dom • Mistress',
    compatibility: 97,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
        label: '1ª Foto'
      },
      {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        label: '2ª Foto'
      },
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        label: '3ª Foto'
      }
    ],
    privatePhotos: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
        caption: 'Ensaio Autoral em Estúdio • 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
        caption: 'Coleção Estética & Couro • 2'
      }
    ],
    privateUnlockedInChat: true,
    bio: 'Apaixonada por dinâmica de comando, psicologia da confiança, estética minimalista e conexões com diálogo transparente antes e depois de qualquer experiência.',
    promptQuestion: 'O que me conquista logo no primeiro encontro:',
    promptAnswer: 'Clareza sobre o que deseja viver, respeito aos limites e uma boa taça de vinho conversando sem pressa.',
    tags: [
      'Dominação',
      'Comando',
      'Protocolo',
      'Disciplina',
      'Mindplay',
      'Impacto',
      'Chibata',
      'Couro',
      'Aftercare'
    ],
    keywords: ['dom', 'mistress', 'dominacao', 'comando', 'protocolo', 'disciplina', 'impacto', 'couro', 'solteira'],
    limits: {
      agreed: ['Dominação', 'Protocolo', 'Disciplina', 'Impacto', 'Aftercare'],
      curious: ['Hipnose', 'Dungeon'],
      hardLimits: ['Falta de Transparência', 'Encontros sem Conversa Prévia']
    }
  },
  {
    id: 'p2',
    name: 'Rafael',
    age: 33,
    relationship: 'Solteiro(a)',
    city: 'São Paulo • Pinheiros',
    distanceKm: 6,
    lastSeen: 'Online há 14 min',
    crossedPathsCount: 12,
    crossedStreet: 'Rua dos Pinheiros • Pinheiros',
    verified: true,
    faceIdVerified: true,
    willMatchOnLike: true,
    roles: ['Rigger', 'Dom', 'Master'],
    archetype: 'Rigger • Master',
    compatibility: 94,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
        label: '1ª Foto'
      },
      {
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
        label: '2ª Foto'
      },
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
        label: '3ª Foto'
      }
    ],
    privatePhotos: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
        caption: 'Série Geométrica em Cordas • Estúdio'
      },
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        caption: 'Bastidores Exposição Pinheiros'
      }
    ],
    privateUnlockedInChat: true,
    bio: 'Instrutor de arte com cordas orientais (Shibari & Kinbaku), suspensão técnica e organizador de encontros educativos em São Paulo.',
    promptQuestion: 'Minha definição de sintonia:',
    promptAnswer: 'Respiração alinhada, confiança mútua e atenção total aos pequenos sinais.',
    tags: [
      'Shibari',
      'Kinbaku',
      'Cordas',
      'Suspensão',
      'Imobilização',
      'Vendas',
      'Sensorial',
      'Temperatura',
      'Aftercare'
    ],
    keywords: ['shibari', 'kinbaku', 'cordas', 'suspensao', 'rigger', 'dom', 'master', 'vendas', 'sensorial', 'solteiro'],
    limits: {
      agreed: ['Shibari', 'Kinbaku', 'Suspensão', 'Sensorial', 'Aftercare'],
      curious: ['Eletro'],
      hardLimits: ['Pressa', 'Desrespeito ao Protocolo']
    }
  },
  {
    id: 'p3',
    name: 'Clara',
    age: 26,
    relationship: 'Namorando',
    city: 'São Paulo • Vila Madalena',
    distanceKm: 4,
    lastSeen: 'Online agora',
    crossedPathsCount: 16,
    crossedStreet: 'Av. Paulista • Bela Vista',
    verified: true,
    faceIdVerified: true,
    willMatchOnLike: true,
    roles: ['Switch', 'Sub', 'Brat'],
    archetype: 'Switch • Sub',
    compatibility: 95,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        label: '1ª Foto'
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
        label: '2ª Foto'
      }
    ],
    privatePhotos: [
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
        caption: 'Ensaio • P&B'
      },
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
        caption: 'Noite de Jazz & Lounge'
      }
    ],
    privateUnlockedInChat: false,
    bio: 'Em relacionamento aberto/liberal, busco sintonia mental, jogos de provocação, restrição leve e experiências sensoriais guiadas.',
    promptQuestion: 'Meu programa ideal de sexta à noite:',
    promptAnswer: 'Jantar intimista, jazz ao vivo e uma conversa onde a gente esquece de olhar o relógio.',
    tags: [
      'Submissão',
      'Algemas',
      'Vendas',
      'Provocação',
      'Roleplay',
      'Palmada',
      'Sensorial',
      'Gelo',
      'Aftercare'
    ],
    keywords: ['sub', 'switch', 'algemas', 'vendas', 'provocacao', 'roleplay', 'sensorial', 'namorando'],
    limits: {
      agreed: ['Submissão', 'Algemas', 'Roleplay', 'Aftercare'],
      curious: ['Shibari', 'Vela'],
      hardLimits: ['Falta de Empatia', 'Exposição Pública']
    }
  },
  {
    id: 'p4',
    name: 'Lucas & Maya',
    age: 31,
    relationship: 'Casal Liberal',
    city: 'São Paulo • Moema',
    distanceKm: 9,
    lastSeen: 'Online há 1h',
    crossedPathsCount: 5,
    crossedStreet: 'Parque Ibirapuera • Portão 7',
    verified: true,
    faceIdVerified: true,
    willMatchOnLike: false,
    roles: ['Casal', 'Switch', 'Liberal'],
    archetype: 'Casal • Switch',
    compatibility: 90,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
        label: '1ª Foto'
      },
      {
        url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
        label: '2ª Foto'
      }
    ],
    privatePhotos: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        caption: 'Viagem & Festa Exclusiva'
      }
    ],
    privateUnlockedInChat: false,
    bio: 'Casal casado/liberal em sintonia buscando novas amizades na comunidade, festas temáticas, lounges privados e experiências a três.',
    promptQuestion: 'O que mais valorizamos na comunidade:',
    promptAnswer: 'Discrição, etiqueta impecável e pessoas que sabem conversar com leveza.',
    tags: [
      'Swing',
      'Ménage',
      'Cuckold',
      'Hotwife',
      'Roleplay',
      'Festas',
      'Munch',
      'Sensorial',
      'Aftercare'
    ],
    keywords: ['casal', 'casado', 'swing', 'menage', 'cuckold', 'hotwife', 'switch', 'festas'],
    limits: {
      agreed: ['Swing', 'Ménage', 'Cuckold', 'Festas', 'Sensorial'],
      curious: ['Dungeon'],
      hardLimits: ['Perfis não verificados']
    }
  },
  {
    id: 'p5',
    name: 'Helena',
    age: 30,
    relationship: 'Relacionamento Aberto',
    city: 'São Paulo • Itaim',
    distanceKm: 5,
    lastSeen: 'Online agora',
    crossedPathsCount: 23,
    crossedStreet: 'Rua Amauri • Itaim Bibi',
    verified: true,
    faceIdVerified: true,
    willMatchOnLike: true,
    roles: ['Switch', 'Primal', 'Dom'],
    archetype: 'Switch • Primal',
    compatibility: 92,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
        label: '1ª Foto'
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
        label: '2ª Foto'
      }
    ],
    privatePhotos: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
        caption: 'Ensaio Editorial Privado • Itaim'
      },
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
        caption: 'Sessão Sensorial & Luzes'
      }
    ],
    privateUnlockedInChat: true,
    bio: 'Arquiteta, fã de dinâmica Primal, impacto, estética em couro/látex e experiências sensoriais intensas com presença e química.',
    promptQuestion: 'Um desejo que quero explorar:',
    promptAnswer: 'Sessões intensas de impacto, temperatura e trilha sonora imersiva.',
    tags: [
      'Primal',
      'Impacto',
      'Flogger',
      'Paddle',
      'Temperatura',
      'Vela',
      'Couro',
      'Látex',
      'Corset'
    ],
    keywords: ['primal', 'impacto', 'flogger', 'paddle', 'switch', 'temperatura', 'couro', 'latex', 'aberto'],
    limits: {
      agreed: ['Primal', 'Impacto', 'Flogger', 'Temperatura', 'Aftercare'],
      curious: ['Suspensão'],
      hardLimits: ['Comunicação Ríspida']
    }
  }
];

// Inicialmente vazio: sem contas fakes. Perfis reais são criados pelo usuário e sincronizados do servidor.
const INITIAL_PROFILES = [];

const QUICK_INTENTS = [
  'Dom / Master • Comando & Protocolo',
  'Shibari, Cordas & Suspensão',
  'Impacto, Flogger & Sensorial',
  'Casal Liberal • Swing & Ménage',
  'Solteiro(a) • Perto de mim'
];

const INITIAL_STORIES = [
  {
    id: 's1',
    user: 'Valentina',
    avatar: DEFAULT_AVATARS[0],
    mediaUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    mediaType: 'image',
    liked: false,
    text: '“A verdadeira intensidade nasce onde existe segurança absoluta e escuta ativa.” — Nos vemos no encontro de sexta nos Jardins.'
  },
  {
    id: 's2',
    user: 'Rafael',
    avatar: DEFAULT_AVATARS[1],
    mediaUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80',
    mediaType: 'image',
    liked: false,
    text: 'Bastidores do workshop de Shibari / Kinbaku de hoje em Pinheiros. Obrigado aos 18 membros verificados!'
  },
  {
    id: 's3',
    user: 'Clara',
    avatar: DEFAULT_AVATARS[2],
    mediaUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    mediaType: 'image',
    liked: false,
    text: 'Noite de jazz, conversa profunda e sintonia na Vila Madalena. Quem mais vai no encontro cultural sábado?'
  },
  {
    id: 's4',
    user: 'Helena',
    avatar: DEFAULT_AVATARS[4],
    mediaUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80',
    mediaType: 'image',
    liked: false,
    text: 'Playlist nova para sessões sensoriais disponível no grupo de Arte & Atmosfera.'
  },
  {
    id: 's5',
    user: 'Lucas & Maya',
    avatar: DEFAULT_AVATARS[3],
    mediaUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
    mediaType: 'image',
    liked: false,
    text: 'Reservamos mesa no Lounge de Moema hoje às 21h. Amigos verificados são super bem-vindos!'
  }
];

const INITIAL_REELS = [
  {
    id: 'r1',
    author: '@valentina.nexus',
    avatar: DEFAULT_AVATARS[0],
    category: 'Educação & Consentimento',
    title: 'Como alinhar Rótulos, Desejos e Limites antes do 1º Encontro',
    desc: 'Deslize para baixo para ver mais Reels! Veja como usar a Matriz de Limites para criar conexão real.',
    audio: 'Áudio Original • valentina.nexus',
    likes: 428,
    liked: false,
    saved: false,
    following: false,
    comments: 64,
    bg: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    videoUrl: null
  },
  {
    id: 'r2',
    author: '@rafael.kinbaku',
    avatar: DEFAULT_AVATARS[1],
    category: 'Estética & Arte',
    title: 'A Geometria e a Calma no Shibari / Kinbaku Artístico',
    desc: 'Demonstração de simetria, respiração e cuidado técnico em estúdio em Pinheiros.',
    audio: 'Ambient Noir • Kyoto Sessions',
    likes: 612,
    liked: false,
    saved: false,
    following: true,
    comments: 91,
    bg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    videoUrl: null
  },
  {
    id: 'r3',
    author: '@helena.noir',
    avatar: DEFAULT_AVATARS[4],
    category: 'Eventos & Lounge',
    title: 'Velvet Lounge SP — Noite Exclusiva para Membros Verificados',
    desc: 'Ambiente intimista, arquitetura minimalista e etiqueta impecável.',
    audio: 'Deep Organic House • Velvet Mix',
    likes: 319,
    liked: false,
    saved: false,
    following: false,
    comments: 42,
    bg: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    videoUrl: null
  }
];

const INITIAL_GROUPS = [
  { id: 'g1', name: 'Iniciantes & Mentoria Segura', members: '2.4k membros', tag: 'Educação', joined: true, desc: 'Espaço acolhedor para descobrir seus rótulos e tirar dúvidas.' },
  { id: 'g2', name: 'Shibari, Kinbaku & Estética', members: '1.8k membros', tag: 'Arte', joined: true, desc: 'Riggers, Rope Models, fotografia autoral e workshops.' },
  { id: 'g3', name: 'Velvet Society • Munches SP', members: '950 membros', tag: 'Eventos VIP', joined: false, desc: 'Encontros sociais verificados, cafés e lounges.' },
  { id: 'g4', name: 'Dinâmicas D/s & Aftercare', members: '3.1k membros', tag: 'Comunidade', joined: false, desc: 'Trocas sobre protocolo, vínculo e cuidado pós-experiência.' }
];

const INITIAL_POSTS = [
  {
    id: 'post1',
    author: 'Valentina ✓',
    group: 'Geral & Boas Práticas',
    time: 'Há 45 min',
    content: 'Preencher seus Rótulos de Papel (Dom, Sub, Switch, Rigger...) e seus Rótulos de Gostos facilita demais encontrar pessoas na mesma sintonia usando o filtro rápido!',
    mediaUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    likes: 87
  },
  {
    id: 'post2',
    author: 'Rafael ✓',
    group: 'Arte & Shibari',
    time: 'Há 3h',
    content: '📍 Confirmado para sábado às 19h: Encontro Cultural & Workshop de Shibari e Comunicação em Pinheiros. Vagas para membros verificados.',
    mediaUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    mediaType: 'image',
    likes: 64
  }
];

const INITIAL_BOUNDARIES = [
  { id: 'b1', label: 'Conversa prévia em local público (Munch / Café)', status: 'yes' },
  { id: 'b2', label: 'Dinâmica D/s & Protocolo consensual', status: 'yes' },
  { id: 'b3', label: 'Experiência Sensorial (vendas, música, texturas)', status: 'yes' },
  { id: 'b4', label: 'Shibari / Kinbaku & Restrição Artística', status: 'yes' },
  { id: 'b5', label: 'Participação em Munches & Lounge VIP', status: 'yes' },
  { id: 'b6', label: 'Aftercare & Vínculo estruturado no pós-encontro', status: 'yes' },
  { id: 'b7', label: 'Compartilhamento de mídia sem proteção de cofre', status: 'no' }
];

class NexusApp {
  constructor() {
    this.relationshipCatalog = [...RELATIONSHIP_CATALOG];
    this.roleCatalog = [...ROLE_CATALOG];
    this.interestCatalog = [...INTEREST_CATALOG];

    this.currentPlanId = 'plus';
    this.pendingCheckoutPlanId = 'plus';
    this.remainingLikes = PLANS_CATALOG.plus.likesPerDay;
    this.remainingStars = PLANS_CATALOG.plus.starsPerDay;
    this.remainingSuperstars = PLANS_CATALOG.plus.superstarsPerDay;

    // Bloqueio estrito no cadastro: a pessoa SÓ cria conta após verificar documento e rosto
    this.isSignupIdentityVerified = false;
    this.docVerified = false;
    this.bioVerified = false;

    // Estado de mídias selecionadas para Story, Reel e Post da Comunidade
    this.activeStoryIndex = 0;
    this.pendingStoryMediaUrl = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80';
    this.pendingStoryMediaType = 'image';
    this.pendingReelMediaUrl = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80';
    this.pendingReelMediaType = 'image';
    this.pendingCommunityMediaUrl = null;
    this.pendingCommunityMediaType = 'image';

    // Minhas fotos da galeria (públicas) + minhas fotos privadas (exclusivas do chat)
    this.myPublicPhotos = [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        title: '1ª Foto • Rosto Verificado',
        isFaceVerified: true
      },
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        title: '2ª Foto • Galeria Pública',
        isFaceVerified: false
      },
      {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
        title: '3ª Foto • Galeria Pública',
        isFaceVerified: false
      }
    ];
    this.myPrivatePhotos = [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        title: '🔒 Foto Privada #1'
      },
      {
        url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
        title: '🔒 Foto Privada #2'
      }
    ];

    this.myRelationship = 'Solteiro(a)';
    this.myRoles = ['Dom', 'Switch'];
    this.myInterests = [
      'Dominação',
      'Protocolo',
      'Shibari',
      'Impacto',
      'Sensorial',
      'Aftercare'
    ];

    this.selectedFilterRelationships = [];
    this.selectedFilterRoles = [];
    this.selectedFilterInterests = [];
    this.maxDistanceKm = 25;

    this.profiles = [...INITIAL_PROFILES];
    this.filteredProfiles = [...INITIAL_PROFILES];
    this.swipeIndex = 0;
    this.activePhotoIndex = 0;
    this.activeQuery = '';
    this.stories = [...INITIAL_STORIES];
    this.reels = [...INITIAL_REELS];
    this.groups = [...INITIAL_GROUPS];
    this.posts = [...INITIAL_POSTS];
    this.boundaries = [...INITIAL_BOUNDARIES];
    this.safeCheckActive = false;

    // Estrelas recebidas e conversas iniciam limpas (alimentadas por Matches reais)
    this.receivedStars = [];
    this.matchedIds = [];
    this.chats = {};
    this.activeChatId = null;

    // Coordenadas Reais do Usuário (GPS)
    this.userLat = -23.5615;
    this.userLon = -46.6623;
    this.userCurrentStreet = 'Região dos Jardins • SP';

    this.init();
  }

  init() {
    this.updateQuotaUI();
    this.renderQuickIntents();
    this.renderAllLabelSelectors();
    this.applyFilters();
    this.renderStories();
    this.renderReels();
    this.renderCommunity();
    this.renderChats();
    this.renderMyPhotosManager();
    this.renderPlans();
    this.renderBoundaries();

    // Sessão real do usuário
    this.loadActiveUserSession();

    // Geolocalização GPS em tempo real
    this.initRealGPS();

    // Sincronização com o backend
    this.syncWithBackend();
  }

  async loadActiveUserSession() {
    this.token = localStorage.getItem('nexus_token') || '';
    const authScreen = document.getElementById('auth-screen');
    if (!this.token) {
      if (authScreen) authScreen.classList.remove('hidden');
      this.setAuthMode('login');
      return;
    }
    try {
      const res = await fetch('/api/me', {
        headers: { 'Authorization': 'Bearer ' + this.token }
      });
      const data = await res.json();
      if (data.ok && data.user) {
        this.currentUser = data.user;
        localStorage.setItem('nexus_user', JSON.stringify(data.user));
        this.updateProfileUI(data.user);
        if (authScreen) authScreen.classList.add('hidden');
      } else {
        this.token = '';
        localStorage.removeItem('nexus_token');
        localStorage.removeItem('nexus_user');
        if (authScreen) authScreen.classList.remove('hidden');
        this.setAuthMode('login');
      }
    } catch (e) {
      const stored = localStorage.getItem('nexus_user');
      if (stored) {
        try {
          this.currentUser = JSON.parse(stored);
          this.updateProfileUI(this.currentUser);
          if (authScreen) authScreen.classList.add('hidden');
        } catch (err) {}
      }
    }
  }

  logout() {
    if (this.token) {
      fetch('/api/logout', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + this.token }
      }).catch(() => {});
    }
    localStorage.removeItem('nexus_token');
    localStorage.removeItem('nexus_user');
    this.token = '';
    this.currentUser = null;
    this.isSignupIdentityVerified = false;
    this.kycDocDataUrl = null;
    this.kycSelfieDataUrl = null;
    const authScreen = document.getElementById('auth-screen');
    if (authScreen) authScreen.classList.remove('hidden');
    this.setAuthMode('login');
    this.showToast('🚪 Sessão encerrada.');
  }

  initRealGPS() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.userLat = pos.coords.latitude;
        this.userLon = pos.coords.longitude;
        this.reverseGeocodeUserStreet(this.userLat, this.userLon);
        this.recalculateDistancesWithGPS();
      },
      err => {
        this.userLat = -23.5615;
        this.userLon = -46.6623;
        this.recalculateDistancesWithGPS();
      },
      { timeout: 7000 }
    );
  }

  async reverseGeocodeUserStreet(lat, lon) {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await res.json();
      if (data && data.address) {
        const road = data.address.road || data.address.suburb || data.address.city_district || 'Jardins';
        const city = data.address.city || data.address.town || 'São Paulo';
        this.userCurrentStreet = `${road} • ${city}`;
        this.recalculateDistancesWithGPS();
      }
    } catch (e) {}
  }

  recalculateDistancesWithGPS() {
    if (!this.profiles) return;
    this.profiles.forEach(p => {
      if (p.lat && p.lon) {
        const dLat = (p.lat - this.userLat) * Math.PI / 180;
        const dLon = (p.lon - this.userLon) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(this.userLat * Math.PI / 180) * Math.cos(p.lat * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        p.distanceKm = Math.max(1, Math.round(6371 * c * 10) / 10);
      }
    });
    this.applyFilters(false);
  }

  /* =========================================================
     TELA DE LOGIN, CADASTRO & VERIFICAÇÃO AUTOMÁTICA DE IDENTIDADE (IA)
     ========================================================= */
  setAuthMode(mode) {
    document.getElementById('auth-tab-login').classList.toggle('active', mode === 'login');
    document.getElementById('auth-tab-register').classList.toggle('active', mode === 'register');
    document.getElementById('auth-login-panel').classList.toggle('hidden', mode !== 'login');
    document.getElementById('auth-register-panel').classList.toggle('hidden', mode !== 'register');
  }

  openAuthScreen() {
    document.getElementById('auth-screen').classList.remove('hidden');
  }

  handleRegPhotoUpload(slotNum, inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const imgEl = document.getElementById(`reg-photo-${slotNum}-img`);
      const emptyEl = document.getElementById(`reg-slot-${slotNum}-empty`);
      const badgeTop = document.getElementById(`slot-${slotNum}-badge-top`);
      const badgeBottom = document.getElementById(`slot-${slotNum}-badge-bottom`);
      const slotEl = document.getElementById(`reg-slot-${slotNum}`);

      if (imgEl) {
        imgEl.src = dataUrl;
        imgEl.classList.remove('hidden');
      }
      if (emptyEl) emptyEl.classList.add('hidden');
      if (badgeTop) badgeTop.classList.remove('hidden');
      if (badgeBottom) badgeBottom.classList.remove('hidden');
      if (slotEl) slotEl.classList.remove('empty-slot');

      if (!this.myPublicPhotos) this.myPublicPhotos = [];
      if (this.myPublicPhotos[slotNum - 1]) {
        this.myPublicPhotos[slotNum - 1].url = dataUrl;
      } else {
        this.myPublicPhotos[slotNum - 1] = {
          url: dataUrl,
          title: `${slotNum}ª Foto • Galeria`,
          isFaceVerified: slotNum === 1
        };
      }
      this.myPublicPhotos = this.myPublicPhotos.filter(Boolean);

      if (slotNum === 1) {
        const mainAvatar = document.getElementById('my-main-avatar');
        if (mainAvatar) mainAvatar.src = dataUrl;
        this.kycSelfieDataUrl = dataUrl;
      }
      this.renderMyPhotosManager();
      this.showToast(`📸 ${slotNum}ª foto carregada com sucesso!`);
    };
    reader.readAsDataURL(file);
  }

  openIdentityVerificationModal() {
    const modal = document.getElementById('identity-verification-modal');
    if (modal) modal.classList.remove('hidden');
    if (this.myPublicPhotos && this.myPublicPhotos[0] && !this.kycSelfieDataUrl) {
      this.kycSelfieDataUrl = this.myPublicPhotos[0].url;
      const selfieSlot = document.getElementById('kyc-selfie-preview-slot');
      if (selfieSlot) {
        selfieSlot.innerHTML = `<img src="${this.kycSelfieDataUrl}" style="width:100%; height:100%; object-fit:cover;" />`;
      }
    }
  }

  closeIdentityVerificationModal() {
    const modal = document.getElementById('identity-verification-modal');
    if (modal) modal.classList.add('hidden');
  }

  handleKycDocUpload(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.kycDocDataUrl = e.target.result;
      this.docVerified = true;
      const slot = document.getElementById('kyc-doc-preview-slot');
      if (slot) slot.innerHTML = `<img src="${this.kycDocDataUrl}" style="width:100%; height:100%; object-fit:cover;" />`;
      const txt = document.getElementById('id-doc-status-text');
      if (txt) txt.textContent = '✓ RG/CNH carregado (+18)';
      const badge = document.getElementById('kyc-doc-num-badge');
      if (badge) { badge.textContent = '✓'; badge.style.background = '#059669'; }
      this.showToast('📄 Documento oficial carregado!');
    };
    reader.readAsDataURL(file);
  }

  handleKycSelfieUpload(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      this.kycSelfieDataUrl = e.target.result;
      this.bioVerified = true;
      const slot = document.getElementById('kyc-selfie-preview-slot');
      if (slot) slot.innerHTML = `<img src="${this.kycSelfieDataUrl}" style="width:100%; height:100%; object-fit:cover;" />`;
      const txt = document.getElementById('id-bio-status-text');
      if (txt) txt.textContent = '✓ Selfie facial pronta';
      const badge = document.getElementById('kyc-bio-num-badge');
      if (badge) { badge.textContent = '✓'; badge.style.background = '#059669'; }
      this.showToast('🤳 Selfie facial carregada!');
    };
    reader.readAsDataURL(file);
  }

  async runAutomatedKycScan() {
    const hud = document.getElementById('kyc-scanning-hud');
    const logs = document.getElementById('kyc-progress-logs');
    const resultBox = document.getElementById('biometric-progress-box');
    const btnRun = document.getElementById('btn-run-auto-kyc');
    const btnFinish = document.getElementById('btn-finish-kyc');

    if (!this.kycDocDataUrl) {
      this.showToast('📄 Envie a foto do RG ou CNH no Passo 1.');
      return;
    }
    if (!this.kycSelfieDataUrl) {
      this.showToast('🤳 Envie uma selfie facial no Passo 2.');
      return;
    }

    if (hud) hud.classList.remove('hidden');
    if (resultBox) resultBox.classList.add('hidden');
    if (btnRun) { btnRun.disabled = true; btnRun.textContent = '⏳ Analisando Biometria com IA...'; }

    const simulateDoubt = document.getElementById('reg-simulate-doubt')?.checked || false;
    const name = document.getElementById('reg-name')?.value.trim() || 'Usuário';
    const age = Number(document.getElementById('reg-age')?.value) || 25;
    const role = document.getElementById('reg-role')?.value || 'Switch';

    if (logs) logs.innerHTML = `<div>[1/3] 🔍 Lendo documento e extraindo parâmetros OCR...</div>`;
    await new Promise(r => setTimeout(r, 600));

    if (logs) logs.innerHTML += `<div>[2/3] 👤 Mapeando 68 pontos biométricos e prova de vida facial...</div>`;
    await new Promise(r => setTimeout(r, 700));

    if (logs) logs.innerHTML += `<div>[3/3] ⚡ Cruzando biometria do documento com a selfie ao vivo...</div>`;

    try {
      const res = await fetch('/api/kyc/auto-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          age,
          role,
          docType: 'RG/CNH Digital',
          docPhoto: this.kycDocDataUrl,
          selfiePhoto: this.kycSelfieDataUrl,
          simulateDoubt
        })
      });
      const data = await res.json();

      if (btnRun) { btnRun.disabled = false; btnRun.textContent = '⚡ Iniciar Verificação Automática com IA'; }

      if (data.ok && data.autoApproved) {
        this.isSignupIdentityVerified = true;
        this.kycScore = data.score;
        if (logs) logs.innerHTML += `<div style="color:#10B981; font-weight:700;">[✓] Correspondência: ${data.score}% — APROVADO AUTOMATICAMENTE!</div>`;
        if (resultBox) {
          resultBox.classList.remove('hidden');
          resultBox.className = 'ai-insight-banner';
          resultBox.style.background = 'rgba(16, 185, 129, 0.14)';
          resultBox.style.borderColor = 'rgba(16, 185, 129, 0.4)';
          resultBox.innerHTML = `✓ <strong>Identidade e Biometria Facial Aprovadas!</strong> Score de <strong>${data.score}%</strong>. Selo Oficial Real ID Concedido.`;
        }
        if (btnRun) btnRun.classList.add('hidden');
        if (btnFinish) btnFinish.classList.remove('hidden');
        this.showToast(`🎉 Biometria aprovada com sucesso (${data.score}%)!`);
      } else {
        this.isSignupIdentityVerified = false;
        if (logs) logs.innerHTML += `<div style="color:#F87171; font-weight:700;">[⚠️] Score ${data.score}%. Encaminhado para a fila do Administrador.</div>`;
        if (resultBox) {
          resultBox.classList.remove('hidden');
          resultBox.className = 'ai-insight-banner';
          resultBox.style.background = 'rgba(239, 68, 68, 0.12)';
          resultBox.style.borderColor = 'rgba(239, 68, 68, 0.4)';
          resultBox.innerHTML = `⚠️ <strong>Correspondência Inconclusiva (${data.score}%).</strong> ${data.reason}`;
        }
        this.showToast('⚠️ Documento enviado para análise humana do Administrador.');
      }
    } catch (err) {
      if (btnRun) { btnRun.disabled = false; btnRun.textContent = '⚡ Iniciar Verificação Automática com IA'; }
      this.showToast('Erro ao contatar motor biométrico.');
    }
  }

  confirmIdentityVerification() {
    this.closeIdentityVerificationModal();

    const pill = document.getElementById('reg-verification-pill');
    if (pill) {
      pill.className = 'status-pill-verified';
      pill.textContent = `✓ Aprovado (${this.kycScore || 96.8}%)`;
    }
    const desc = document.getElementById('reg-verification-desc');
    if (desc) {
      desc.textContent = '✓ Identidade Real e Biometria Facial aprovadas com sucesso pelo sistema!';
    }
    const box = document.getElementById('reg-verification-box');
    if (box) {
      box.style.borderColor = 'var(--accent-sage)';
    }
    const openIdBtn = document.getElementById('open-id-modal-btn');
    if (openIdBtn) {
      openIdBtn.textContent = '✓ Verificação Biométrica Concluída com Sucesso';
      openIdBtn.className = 'btn-soft full-width btn-sm';
    }
    const submitBtn = document.getElementById('btn-submit-register');
    if (submitBtn) {
      submitBtn.classList.remove('locked-register-btn');
      submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
      submitBtn.textContent = '✓ Ativar Minha Conta Real e Entrar →';
    }
  }

  async completeAuth(source) {
    if (source === 'register') {
      const name = document.getElementById('reg-name')?.value.trim() || '';
      const email = document.getElementById('reg-email')?.value.trim().toLowerCase() || '';
      const pass = document.getElementById('reg-pass')?.value || '';
      const age = Number(document.getElementById('reg-age')?.value) || 0;
      const pronouns = document.getElementById('reg-pronouns')?.value || 'Ele/Dele';
      const relationship = document.getElementById('reg-relationship')?.value || 'Solteiro(a)';
      const role = document.getElementById('reg-role')?.value || 'Switch';
      const bio = document.getElementById('reg-bio')?.value.trim() || '';

      if (!name) {
        this.showToast('⛔ Por favor, informe seu nome ou apelido.');
        document.getElementById('reg-name')?.focus();
        return;
      }
      if (!email || !email.includes('@') || !email.includes('.')) {
        this.showToast('⛔ Por favor, informe um e-mail válido.');
        document.getElementById('reg-email')?.focus();
        return;
      }
      if (!pass || pass.length < 8) {
        this.showToast('⛔ A senha deve conter pelo menos 8 caracteres.');
        document.getElementById('reg-pass')?.focus();
        return;
      }
      if (!age || age < 18) {
        this.showToast('⛔ O Nexus é exclusivo para maiores de 18 anos.');
        document.getElementById('reg-age')?.focus();
        return;
      }
      if (!this.myPublicPhotos || this.myPublicPhotos.length < 2) {
        this.showToast('⛔ Adicione pelo menos 2 fotos (1ª foto de rosto obrigatória)!');
        return;
      }
      if (!this.isSignupIdentityVerified) {
        this.showToast('⛔ Conclua a Verificação Biométrica de Rosto & RG antes de criar a conta!');
        this.openIdentityVerificationModal();
        return;
      }

      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            password: pass,
            age,
            pronouns,
            relationship,
            role,
            bio,
            interests: this.myInterests || [],
            photos: this.myPublicPhotos.map(p => p.url),
            docPhoto: this.kycDocDataUrl,
            selfiePhoto: this.kycSelfieDataUrl,
            kycAutoApproved: this.isSignupIdentityVerified,
            kycScore: this.kycScore || 96.8,
            simulateDoubt: Boolean(document.getElementById('reg-simulate-doubt')?.checked),
            city: this.userCurrentStreet || 'São Paulo, SP',
            lat: this.userLat || -23.5615,
            lon: this.userLon || -46.6623
          })
        });
        const data = await res.json();
        if (data.ok && data.user) {
          this.token = data.token;
          localStorage.setItem('nexus_token', data.token);
          this.currentUser = data.user;
          localStorage.setItem('nexus_user', JSON.stringify(data.user));

          this.updateProfileUI(data.user);
          document.getElementById('auth-screen').classList.add('hidden');
          this.showToast(`🎉 Bem-vindo(a) ao Nexus Kink, ${data.user.name}! Conta ativada com Selo Real ID!`);
          await this.syncWithBackend();
          this.switchTab('discover');
          return;
        } else {
          this.showToast('⛔ ' + (data.error || 'Erro ao registrar conta.'));
          return;
        }
      } catch (err) {
        this.showToast('⛔ Erro ao conectar com servidor de cadastro.');
        return;
      }
    }

    if (source === 'login') {
      const email = document.getElementById('login-email')?.value.trim().toLowerCase() || '';
      const password = document.getElementById('login-pass')?.value || '';

      if (!email || !password) {
        this.showToast('⛔ Por favor, informe seu e-mail e sua senha para entrar.');
        return;
      }

      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.ok && data.user) {
          this.token = data.token;
          localStorage.setItem('nexus_token', data.token);
          this.currentUser = data.user;
          localStorage.setItem('nexus_user', JSON.stringify(data.user));

          this.updateProfileUI(data.user);
          document.getElementById('auth-screen').classList.add('hidden');
          this.showToast(`✨ Bem-vindo(a) de volta, ${data.user.name}!`);
          await this.syncWithBackend();
          this.switchTab('discover');
          return;
        } else {
          this.showToast(`⛔ ${data.error || 'E-mail ou senha incorretos.'}`);
          return;
        }
      } catch (err) {
        this.showToast('⛔ Erro ao comunicar com o servidor de login.');
        return;
      }
    }
  }

  async loginWithGoogle() {
    this.showToast('🔄 Conectando com a sua Conta Google...');
    try {
      const configRes = await fetch('/api/config');
      const configData = await configRes.json();

      if (configData.googleClientId && window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: configData.googleClientId,
          callback: async (response) => {
            if (response.credential) {
              const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential: response.credential })
              });
              const data = await res.json();
              this.handleGoogleAuthResponse(data);
            }
          }
        });
        window.google.accounts.id.prompt();
        return;
      }

      const userGoogleEmail = prompt('Digite seu e-mail do Google (ex: seu.nome@gmail.com):');
      if (!userGoogleEmail || !userGoogleEmail.includes('@')) {
        if (userGoogleEmail) this.showToast('⛔ E-mail do Google inválido.');
        return;
      }
      const userName = userGoogleEmail.split('@')[0].replace(/[._]/g, ' ');

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userGoogleEmail, name: userName })
      });
      const data = await res.json();
      this.handleGoogleAuthResponse(data, userGoogleEmail, userName);
    } catch (e) {
      this.showToast('⛔ Falha ao conectar ao serviço Google.');
    }
  }

  handleGoogleAuthResponse(data, fallbackEmail, fallbackName) {
    if (data.ok && data.user) {
      this.token = data.token;
      localStorage.setItem('nexus_token', data.token);
      this.currentUser = data.user;
      localStorage.setItem('nexus_user', JSON.stringify(data.user));
      this.updateProfileUI(data.user);
      document.getElementById('auth-screen').classList.add('hidden');
      this.showToast(`✓ Conectado via Google como ${data.user.name}!`);
      this.syncWithBackend();
      this.switchTab('discover');
    } else if (data.ok && data.needsSignup) {
      this.setAuthMode('register');
      const emailField = document.getElementById('reg-email');
      const nameField = document.getElementById('reg-name');
      if (emailField) emailField.value = data.google?.email || fallbackEmail || '';
      if (nameField) nameField.value = data.google?.name || fallbackName || '';
      this.showToast('📝 Conta Google validada! Adicione suas fotos e confirme a biometria para ativar.');
    } else {
      this.showToast(`⛔ ${data.error || 'Erro no login Google.'}`);
    }
  }

  updateProfileUI(u) {
    if (!u) return;
    const nameInput = document.getElementById('my-profile-name');
    if (nameInput) nameInput.value = u.name || '';
    const displayEl = document.getElementById('profile-display-name');
    if (displayEl) displayEl.textContent = `${u.name || ''}, ${u.age || ''}`;
    const bioInput = document.getElementById('my-profile-bio');
    if (bioInput) bioInput.value = u.bio || '';
    const cityEl = document.getElementById('profile-display-city');
    if (cityEl) cityEl.textContent = `📍 ${u.city || this.userCurrentStreet || 'São Paulo, SP'}`;
    const subBadge = document.getElementById('profile-sub-badge');
    if (subBadge) {
      const planName = u.plan === 'black' ? 'Nexus Black VIP 👑' : u.plan === 'plus' ? 'Nexus Plus 💎' : 'Nexus Gratuito';
      subBadge.textContent = planName;
    }
    const headerPlan = document.getElementById('header-plan-badge');
    if (headerPlan) {
      headerPlan.textContent = (u.plan || 'free').toUpperCase();
    }
    if (u.relationship) this.myRelationship = u.relationship;
    if (u.role) this.myRoles = u.roles || [u.role];
    if (Array.isArray(u.interests)) this.myInterests = u.interests;
    if (Array.isArray(u.photos) && u.photos.length > 0) {
      this.myPublicPhotos = u.photos;
      const avatarEl = document.getElementById('my-main-avatar');
      if (avatarEl && u.photos[0]) avatarEl.src = u.photos[0].url;
    }
    if (Array.isArray(u.privatePhotos)) this.myPrivatePhotos = u.privatePhotos;
    this.renderMyPhotosManager();
    this.renderAllLabelSelectors();
  }

  /* =========================================================
     GERENCIADOR DE FOTOS DA GALERIA (PÚBLICAS) & FOTOS PRIVADAS (COFRE)
     ========================================================= */
  renderMyPhotosManager() {
    const publicGrid = document.getElementById('my-public-photos-grid');
    if (publicGrid) {
      publicGrid.innerHTML = this.myPublicPhotos.map((p, idx) => `
        <div class="reg-photo-slot ${idx === 0 ? 'verified-slot' : ''}">
          <img src="${p.url}" alt="${p.title}" onclick="window.app.openPhotoLightbox('${p.url}', '${idx === 0 ? '1ª Foto • Rosto Verificado' : `Foto da Galeria #${idx + 1}`}')" />
          <span class="slot-badge-top">${idx === 0 ? '1ª • ROSTO ✓' : `GALERIA #${idx + 1}`}</span>
          ${idx > 0 ? `<button class="slot-delete-btn" onclick="window.app.deleteMyPublicPhoto(${idx}, event)" title="Excluir Foto">✕</button>` : ''}
          <span class="slot-badge-bottom">🔍 Toque p/ Ampliar</span>
        </div>
      `).join('');
    }

    const privateGrid = document.getElementById('my-private-photos-grid');
    if (privateGrid) {
      privateGrid.innerHTML = this.myPrivatePhotos.map((p, idx) => `
        <div class="reg-photo-slot">
          <img src="${p.url}" alt="${p.title}" onclick="window.app.openPhotoLightbox('${p.url}', '🔒 Minha Foto Privada #${idx + 1} (Visível no Chat pós-Match)')" />
          <span class="slot-badge-top" style="background:var(--accent-rose);">🔒 PRIVADA #${idx + 1}</span>
          <button class="slot-delete-btn" onclick="window.app.deleteMyPrivatePhoto(${idx}, event)" title="Excluir Foto">✕</button>
          <span class="slot-badge-bottom">Só visível no Chat</span>
        </div>
      `).join('');
    }
  }

  async uploadCameraAvatar(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      const avatarEl = document.getElementById('my-main-avatar');
      if (avatarEl) avatarEl.src = dataUrl;
      this.showToast('📸 Enviando foto para o perfil...');

      if (this.token) {
        try {
          const res = await fetch('/api/me/photos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({ dataUrl, asMain: true })
          });
          const data = await res.json();
          if (data.ok && data.user) {
            this.currentUser = data.user;
            localStorage.setItem('nexus_user', JSON.stringify(data.user));
            this.updateProfileUI(data.user);
            this.showToast('✓ Foto principal atualizada com sucesso!');
            return;
          }
        } catch (err) {}
      }
      if (!this.myPublicPhotos) this.myPublicPhotos = [];
      this.myPublicPhotos.unshift({ url: dataUrl, title: '1ª Foto • Rosto' });
      this.renderMyPhotosManager();
    };
    reader.readAsDataURL(file);
    inputEl.value = '';
  }

  async uploadGalleryAvatar(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      const avatarEl = document.getElementById('my-main-avatar');
      if (avatarEl) avatarEl.src = dataUrl;
      this.showToast('🖼️ Enviando foto para o perfil...');

      if (this.token) {
        try {
          const res = await fetch('/api/me/photos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({ dataUrl, asMain: true })
          });
          const data = await res.json();
          if (data.ok && data.user) {
            this.currentUser = data.user;
            localStorage.setItem('nexus_user', JSON.stringify(data.user));
            this.updateProfileUI(data.user);
            this.showToast('✓ Foto principal da galeria atualizada!');
            return;
          }
        } catch (err) {}
      }
      if (!this.myPublicPhotos) this.myPublicPhotos = [];
      this.myPublicPhotos.unshift({ url: dataUrl, title: '1ª Foto • Rosto' });
      this.renderMyPhotosManager();
    };
    reader.readAsDataURL(file);
    inputEl.value = '';
  }

  async deleteMyPublicPhoto(idx, event) {
    if (event) event.stopPropagation();
    if (idx === 0) {
      this.showToast('⚠️ A 1ª foto é a foto oficial de rosto do seu perfil e não pode ser deletada.');
      return;
    }
    const photo = this.myPublicPhotos[idx];
    if (photo && photo.url && this.token) {
      try {
        const res = await fetch('/api/me/photos/delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
          },
          body: JSON.stringify({ url: photo.url, private: false })
        });
        const data = await res.json();
        if (data.ok && data.user) {
          this.currentUser = data.user;
          localStorage.setItem('nexus_user', JSON.stringify(data.user));
          this.updateProfileUI(data.user);
          this.showToast('✓ Foto removida.');
          return;
        }
      } catch (e) {}
    }
    this.myPublicPhotos.splice(idx, 1);
    this.renderMyPhotosManager();
    this.showToast('Foto removida da galeria.');
  }

  async deleteMyPrivatePhoto(idx, event) {
    if (event) event.stopPropagation();
    const photo = this.myPrivatePhotos[idx];
    if (photo && photo.url && this.token) {
      try {
        const res = await fetch('/api/me/photos/delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
          },
          body: JSON.stringify({ url: photo.url, private: true })
        });
        const data = await res.json();
        if (data.ok && data.user) {
          this.currentUser = data.user;
          localStorage.setItem('nexus_user', JSON.stringify(data.user));
          this.updateProfileUI(data.user);
          this.showToast('✓ Foto privada removida.');
          return;
        }
      } catch (e) {}
    }
    this.myPrivatePhotos.splice(idx, 1);
    this.renderMyPhotosManager();
    this.showToast('Foto removida do cofre privado.');
  }

  async uploadMyPublicPhoto(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      this.showToast('📸 Enviando foto para galeria...');

      if (this.token) {
        try {
          const res = await fetch('/api/me/photos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({ dataUrl, private: false })
          });
          const data = await res.json();
          if (data.ok && data.user) {
            this.currentUser = data.user;
            localStorage.setItem('nexus_user', JSON.stringify(data.user));
            this.updateProfileUI(data.user);
            this.showToast('✓ Nova foto pública adicionada!');
            return;
          }
        } catch (err) {}
      }
      if (!this.myPublicPhotos) this.myPublicPhotos = [];
      this.myPublicPhotos.push({ url: dataUrl, title: `Foto #${this.myPublicPhotos.length + 1}` });
      this.renderMyPhotosManager();
    };
    reader.readAsDataURL(file);
    inputEl.value = '';
  }

  async uploadMyPrivatePhoto(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      this.showToast('🔒 Enviando foto para o cofre privado...');

      if (this.token) {
        try {
          const res = await fetch('/api/me/photos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.token
            },
            body: JSON.stringify({ dataUrl, private: true })
          });
          const data = await res.json();
          if (data.ok && data.user) {
            this.currentUser = data.user;
            localStorage.setItem('nexus_user', JSON.stringify(data.user));
            this.updateProfileUI(data.user);
            this.showToast('✓ Foto privada guardada no cofre!');
            return;
          }
        } catch (err) {}
      }
      if (!this.myPrivatePhotos) this.myPrivatePhotos = [];
      this.myPrivatePhotos.push({ url: dataUrl, title: `🔒 Foto Privada #${this.myPrivatePhotos.length + 1}` });
      this.renderMyPhotosManager();
    };
    reader.readAsDataURL(file);
    inputEl.value = '';
  }

  openPhotoLightbox(url, caption = '') {
    const modal = document.getElementById('photo-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    if (!modal || !img) return;
    img.src = url;
    if (cap) cap.textContent = caption;
    modal.classList.remove('hidden');
  }

  closePhotoLightbox() {
    document.getElementById('photo-lightbox-modal')?.classList.add('hidden');
  }


  /* =========================================================
     SISTEMA DE PAGAMENTO REALISTA (PIX BCB & CARTÃO 3D SECURE)
     ========================================================= */
  updateQuotaUI() {
    const plan = PLANS_CATALOG[this.currentPlanId];
    document.getElementById('header-plan-badge').textContent = plan.badge;
    document.getElementById('quota-likes').textContent = this.remainingLikes;
    document.getElementById('quota-stars').textContent = this.remainingStars;
    document.getElementById('quota-superstars').textContent = this.remainingSuperstars;
    document.getElementById('dock-star-count').textContent = this.remainingStars;
    document.getElementById('dock-superstar-count').textContent = this.remainingSuperstars;
  }

  updateProfileSubscriptionUI() {
    const plan = PLANS_CATALOG[this.currentPlanId] || PLANS_CATALOG.plus;
    const badge = document.getElementById('profile-sub-badge');
    const desc = document.getElementById('profile-sub-desc');
    if (badge) badge.textContent = `${plan.name} 💎`;
    if (desc) desc.textContent = `${plan.starsPerDay} Estrelas/dia • ${plan.superstarsPerDay} Superestrela(s) • Radar de Rua`;
  }

  async selectPlan(planId) {
    if (!PLANS_CATALOG[planId]) return;
    if (planId === 'free') {
      this.activatePlanNow('free');
      return;
    }

    this.pendingCheckoutPlanId = planId;
    const plan = PLANS_CATALOG[planId];

    const titleEl = document.getElementById('checkout-plan-title');
    if (titleEl) titleEl.textContent = `Assinar ${plan.name} (${plan.price})`;
    const subEl = document.getElementById('checkout-plan-subtitle');
    if (subEl) subEl.textContent = `Cobrança 100% discreta no extrato ("NXS TEC SP")`;

    const pixPriceEl = document.getElementById('pix-price-tag');
    if (pixPriceEl) pixPriceEl.textContent = plan.price;
    const cardPriceEl = document.getElementById('card-price-tag');
    if (cardPriceEl) cardPriceEl.textContent = plan.price;

    this.showToast('🔐 Gerando ordem de pagamento...');

    try {
      const res = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + (this.token || '')
        },
        body: JSON.stringify({ planId, method: 'pix' })
      });
      const data = await res.json();
      if (!data.ok) {
        this.showToast('⛔ ' + (data.error || 'Erro ao gerar pagamento.'));
        return;
      }

      this.currentPaymentRef = data.ref;
      this.isSandboxPayment = Boolean(data.sandbox);

      const pixInput = document.getElementById('pix-code-input');
      if (pixInput) pixInput.value = data.qrCode || '';

      const pixStatus = document.getElementById('pix-checking-status');
      if (pixStatus) {
        if (data.sandbox) {
          pixStatus.classList.remove('hidden');
          pixStatus.innerHTML = '<span style="font-size:0.75rem; color:#F59E0B;">🧪 Modo Demonstração: Pague pelo QR/Copia-e-Cola ou clique abaixo para simular liquidação.</span>';
        } else {
          pixStatus.classList.add('hidden');
        }
      }

      this.startPixTimer();
      this.startPaymentStatusPolling(data.ref);

      this.closeUpgradeSheet();
      document.getElementById('payment-checkout-modal').classList.remove('hidden');
    } catch (e) {
      this.showToast('⛔ Erro de comunicação com o servidor de pagamentos.');
    }
  }

  startPaymentStatusPolling(ref) {
    if (this.paymentPollingTimer) clearInterval(this.paymentPollingTimer);
    this.paymentPollingTimer = setInterval(async () => {
      if (!this.currentPaymentRef || this.currentPaymentRef !== ref) {
        clearInterval(this.paymentPollingTimer);
        return;
      }
      try {
        const res = await fetch(`/api/payments/status?ref=${encodeURIComponent(ref)}`, {
          headers: { 'Authorization': 'Bearer ' + (this.token || '') }
        });
        const data = await res.json();
        if (data.ok && data.status === 'approved') {
          clearInterval(this.paymentPollingTimer);
          if (data.user) {
            this.currentUser = data.user;
            localStorage.setItem('nexus_user', JSON.stringify(data.user));
            this.updateProfileUI(data.user);
          }
          this.closePaymentModal();
          this.showToast(`🎉 Pagamento aprovado com sucesso!`);
        }
      } catch (e) {}
    }, 3000);
  }

  startPixTimer() {
    if (this.pixTimerInterval) clearInterval(this.pixTimerInterval);
    let secondsLeft = 600;
    const display = document.getElementById('pix-timer-display');
    const update = () => {
      const mins = Math.floor(secondsLeft / 60).toString().padStart(2, '0');
      const secs = (secondsLeft % 60).toString().padStart(2, '0');
      if (display) display.textContent = `${mins}:${secs}`;
      if (secondsLeft <= 0) {
        clearInterval(this.pixTimerInterval);
        if (display) display.textContent = '00:00 (Expirado)';
      }
      secondsLeft--;
    };
    update();
    this.pixTimerInterval = setInterval(update, 1000);
  }

  copyPixKey() {
    const input = document.getElementById('pix-code-input');
    if (input) {
      navigator.clipboard?.writeText(input.value).catch(() => {});
      input.select();
      this.showToast('📋 Chave PIX copiada! Cole no app do seu banco.');
    }
  }

  async verifyPixPayment() {
    if (!this.currentPaymentRef) {
      this.showToast('⛔ Nenhuma cobrança PIX ativa.');
      return;
    }
    const statusBox = document.getElementById('pix-checking-status');
    const btn = document.getElementById('btn-verify-pix');
    if (statusBox) {
      statusBox.classList.remove('hidden');
      statusBox.innerHTML = '<span style="font-size:0.8rem; font-weight:700; color:#10B981;">🔄 Verificando liquidação bancária no SPI...</span>';
    }
    if (btn) btn.disabled = true;

    try {
      if (this.isSandboxPayment) {
        const res = await fetch('/api/payments/simulate-approve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + (this.token || '')
          },
          body: JSON.stringify({ ref: this.currentPaymentRef })
        });
        const data = await res.json();
        if (btn) btn.disabled = false;
        if (data.ok && data.user) {
          this.currentUser = data.user;
          localStorage.setItem('nexus_user', JSON.stringify(data.user));
          this.updateProfileUI(data.user);
          this.closePaymentModal();
          this.showToast(`🎉 Pagamento confirmado com sucesso! Plano ativado.`);
          return;
        }
      }

      const res = await fetch(`/api/payments/status?ref=${encodeURIComponent(this.currentPaymentRef)}`, {
        headers: { 'Authorization': 'Bearer ' + (this.token || '') }
      });
      const data = await res.json();
      if (btn) btn.disabled = false;
      if (data.ok && data.status === 'approved') {
        if (data.user) {
          this.currentUser = data.user;
          localStorage.setItem('nexus_user', JSON.stringify(data.user));
          this.updateProfileUI(data.user);
        }
        this.closePaymentModal();
        this.showToast(`🎉 PIX confirmado e plano ativado com sucesso!`);
      } else {
        if (statusBox) {
          statusBox.innerHTML = '<span style="font-size:0.8rem; color:#F59E0B;">⏳ Pagamento ainda não identificado. Complete o PIX no banco.</span>';
        }
        this.showToast('⏳ Aguardando compensação do PIX...');
      }
    } catch (e) {
      if (btn) btn.disabled = false;
      this.showToast('Erro ao consultar status do pagamento.');
    }
  }

  formatCardNumber(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    input.value = v.replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  formatCardExpiry(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 3) {
      input.value = v.substring(0, 2) + '/' + v.substring(2);
    } else {
      input.value = v;
    }
  }

  formatCPF(input) {
    let v = input.value.replace(/\D/g, '').substring(0, 11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = v;
  }

  async processCardPayment() {
    const cardNum = document.getElementById('card-number-input')?.value.replace(/\s/g, '') || '';
    const expiry = document.getElementById('card-expiry-input')?.value.trim() || '';
    const cvv = document.getElementById('card-cvv-input')?.value.trim() || '';
    const name = document.getElementById('card-name-input')?.value.trim() || '';
    const cpf = document.getElementById('card-cpf-input')?.value.trim() || '';

    if (cardNum.length < 15 || !expiry || cvv.length < 3 || !name || cpf.length < 11) {
      this.showToast('⛔ Preencha todos os campos do cartão de crédito corretamente.');
      return;
    }

    const statusBox = document.getElementById('card-processing-status');
    const btn = document.getElementById('btn-pay-card');
    if (statusBox) {
      statusBox.classList.remove('hidden');
      statusBox.innerHTML = '<span style="font-size:0.8rem; font-weight:700; color:var(--accent-rose);">🔐 Conectando com adquirente & Análise 3D Secure...</span>';
    }
    if (btn) btn.disabled = true;

    try {
      const res = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + (this.token || '')
        },
        body: JSON.stringify({ planId: this.pendingCheckoutPlanId, method: 'card' })
      });
      const data = await res.json();
      if (btn) btn.disabled = false;
      if (data.ok && data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
        return;
      }
      if (data.ok && data.sandbox) {
        const simRes = await fetch('/api/payments/simulate-approve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + (this.token || '')
          },
          body: JSON.stringify({ ref: data.ref })
        });
        const simData = await simRes.json();
        if (simData.ok && simData.user) {
          this.currentUser = simData.user;
          localStorage.setItem('nexus_user', JSON.stringify(simData.user));
          this.updateProfileUI(simData.user);
        }
        this.closePaymentModal();
        this.showToast('🎉 Pagamento de cartão aprovado com sucesso!');
        return;
      }
      this.showToast('⛔ ' + (data.error || 'Erro ao processar cartão.'));
    } catch (e) {
      if (btn) btn.disabled = false;
      this.showToast('⛔ Falha na conexão com adquirente.');
    }
  }

  setPaymentMethod(method) {
    document.getElementById('pay-tab-pix').classList.toggle('active', method === 'pix');
    document.getElementById('pay-tab-card').classList.toggle('active', method === 'card');
    document.getElementById('payment-pix-panel').classList.toggle('hidden', method !== 'pix');
    document.getElementById('payment-card-panel').classList.toggle('hidden', method !== 'card');
  }

  closePaymentModal() {
    if (this.pixTimerInterval) clearInterval(this.pixTimerInterval);
    document.getElementById('payment-checkout-modal').classList.add('hidden');
  }

  activatePlanNow(planId) {
    this.currentPlanId = planId;
    const plan = PLANS_CATALOG[planId];
    this.remainingLikes = plan.likesPerDay;
    this.remainingStars = plan.starsPerDay;
    this.remainingSuperstars = plan.superstarsPerDay;

    this.updateQuotaUI();
    this.renderPlans();
    this.updateProfileSubscriptionUI();
    this.renderSingleProfile();
    this.closeUpgradeSheet();
    this.showToast(`🎉 Assinatura ${plan.name} ativada com sucesso! Todos os benefícios liberados.`);
  }

  renderPlans() {
    const html = Object.values(PLANS_CATALOG).map(plan => {
      const isCurrent = plan.id === this.currentPlanId;
      return `
        <div class="plan-tier-card ${isCurrent ? 'active-plan' : ''}">
          <div class="plan-tier-top">
            <div>
              <strong style="font-size:0.92rem;">${plan.name}</strong>
              ${isCurrent ? `<span class="pro-tag-inline">Plano Atual ✓</span>` : ''}
            </div>
            <span class="plan-price-tag">${plan.price}</span>
          </div>
          <ul class="plan-perks-list">
            ${plan.perks.map(perk => `<li>${perk}</li>`).join('')}
          </ul>
          <button
            class="${isCurrent ? 'btn-soft' : 'btn-primary-clean'} full-width btn-sm"
            onclick="window.app.selectPlan('${plan.id}')"
          >
            ${isCurrent ? '✓ Plano Ativo' : `Assinar ${plan.name} (${plan.price})`}
          </button>
        </div>
      `;
    }).join('');

    ['modal-plans-list'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    });
  }

  openUpgradeSheet() {
    this.renderPlans();
    document.getElementById('upgrade-modal').classList.remove('hidden');
  }

  closeUpgradeSheet() {
    document.getElementById('upgrade-modal').classList.add('hidden');
  }

  /* =========================================================
     NAVEGAÇÃO DE ABAS E TEMA
     ========================================================= */
  toggleTheme() {
    document.body.classList.toggle('soft-dark');
    const isDark = document.body.classList.contains('soft-dark');
    document.getElementById('theme-toggle-btn').textContent = isDark ? '☀' : '☾';
    this.showToast(isDark ? 'Modo Noturno Suave ativado' : 'Modo Editorial Clean ativado');
  }

  switchTab(tabId) {
    document.querySelectorAll('.app-screen').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    const target = document.getElementById(`tab-${tabId}`);
    if (target) target.classList.remove('hidden');

    const navBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (navBtn) navBtn.classList.add('active');

    if (tabId === 'messages') {
      this.backToWhatsAppList();
    }
  }

  /* =========================================================
     DISTÂNCIA, GEOLOCALIZAÇÃO & FILTROS DE RÓTULOS
     ========================================================= */
  updateDistanceFilter(val) {
    this.maxDistanceKm = Number(val);
    document.getElementById('distance-slider-val').textContent = val;
    document.getElementById('distance-label-inline').textContent = val;
    this.applyFilters();
  }

  detectRealGPS() {
    this.showToast('📡 Sincronizando GPS do aparelho...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          this.showToast('📍 Localização GPS atualizada com sucesso!');
          this.applyFilters();
        },
        () => {
          this.showToast('📍 GPS ativo: São Paulo • Jardins / Paulista');
          this.applyFilters();
        },
        { timeout: 4000 }
      );
    } else {
      this.showToast('📍 Localização ativa: São Paulo • Jardins');
    }
  }

  renderAllLabelSelectors() {
    const totalMyLabels = this.myRoles.length + this.myInterests.length + (this.myRelationship ? 1 : 0);
    const countEl = document.getElementById('my-labels-count');
    if (countEl) countEl.textContent = totalMyLabels;

    const discoverRelEl = document.getElementById('discover-relationship-filters');
    if (discoverRelEl) {
      discoverRelEl.innerHTML = (this.relationshipCatalog || []).map(rel => {
        const isActive = this.selectedFilterRelationships.includes(rel);
        const isMine = this.myRelationship === rel;
        return `
          <button class="label-chip ${isActive ? 'active-role' : ''}" onclick="window.app.toggleFilterRelationship('${rel.replace(/'/g, "\\'")}')">
            ${isActive ? '✓ ' : '💍 '}${rel}${isMine ? ' ★' : ''}
          </button>
        `;
      }).join('');
    }

    const discoverRolesEl = document.getElementById('discover-role-filters');
    if (discoverRolesEl) {
      discoverRolesEl.innerHTML = this.roleCatalog.map(role => {
        const isActive = this.selectedFilterRoles.includes(role);
        const isMine = this.myRoles.includes(role);
        return `
          <button class="label-chip ${isActive ? 'active-role' : ''}" onclick="window.app.toggleFilterRole('${role.replace(/'/g, "\\'")}')">
            ${isActive ? '✓ ' : ''}${role}${isMine ? ' ★' : ''}
          </button>
        `;
      }).join('');
    }

    const discoverInterestsEl = document.getElementById('discover-interest-filters');
    if (discoverInterestsEl) {
      discoverInterestsEl.innerHTML = this.interestCatalog.map(interest => {
        const isActive = this.selectedFilterInterests.includes(interest);
        const isMine = this.myInterests.includes(interest);
        return `
          <button class="label-chip ${isActive ? 'active-interest' : ''}" onclick="window.app.toggleFilterInterest('${interest.replace(/'/g, "\\'")}')">
            ${isActive ? '✓ ' : ''}${interest}${isMine ? ' ★' : ''}
          </button>
        `;
      }).join('');
    }

    const renderMyRelationshipHTML = () => (this.relationshipCatalog || []).map(rel => {
      const selected = this.myRelationship === rel;
      return `
        <button class="label-chip ${selected ? 'active-role' : ''}" onclick="window.app.toggleMyRelationship('${rel.replace(/'/g, "\\'")}')">
          ${selected ? '✓ ' : '💍 '}${rel}
        </button>
      `;
    }).join('');

    const renderMyRolesHTML = () => this.roleCatalog.map(role => {
      const selected = this.myRoles.includes(role);
      return `
        <button class="label-chip ${selected ? 'active-role' : ''}" onclick="window.app.toggleMyRole('${role.replace(/'/g, "\\'")}')">
          ${selected ? '✓ ' : '+ '}${role}
        </button>
      `;
    }).join('');

    const renderMyInterestsHTML = () => this.interestCatalog.map(interest => {
      const selected = this.myInterests.includes(interest);
      return `
        <button class="label-chip ${selected ? 'active-interest' : ''}" onclick="window.app.toggleMyInterest('${interest.replace(/'/g, "\\'")}')">
          ${selected ? '✓ ' : '+ '}${interest}
        </button>
      `;
    }).join('');

    ['modal-my-relationship', 'profile-my-relationship'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = renderMyRelationshipHTML();
    });

    ['modal-my-roles', 'profile-my-roles'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = renderMyRolesHTML();
    });

    ['modal-my-interests', 'profile-my-interests'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = renderMyInterestsHTML();
    });

    const activeBar = document.getElementById('active-filters-bar');
    const allActive = [
      ...this.selectedFilterRelationships,
      ...this.selectedFilterRoles,
      ...this.selectedFilterInterests
    ];
    const headerSummary = document.getElementById('header-filter-summary');
    if (headerSummary) {
      headerSummary.textContent = allActive.length > 0 ? `Filtros (${allActive.length})` : 'Filtros';
    }
    if (activeBar) {
      if (allActive.length === 0) {
        activeBar.classList.add('hidden');
      } else {
        activeBar.classList.remove('hidden');
        activeBar.innerHTML = `
          <button class="intent-chip" onclick="window.app.clearLabelFilters()">✕ Limpar</button>
          ${allActive.map(lbl => `<span class="tag-pill shared-match" style="font-size:0.68rem; padding:0.2rem 0.55rem;">✓ ${lbl}</span>`).join('')}
        `;
      }
    }
  }

  openLabelsSheet(mode = 'filter') {
    this.renderAllLabelSelectors();
    this.setSheetMode(mode);
    document.getElementById('my-labels-modal').classList.remove('hidden');
  }

  closeLabelsSheet() {
    document.getElementById('my-labels-modal').classList.add('hidden');
  }

  setSheetMode(mode) {
    document.getElementById('sheet-tab-filter').classList.toggle('active', mode === 'filter');
    document.getElementById('sheet-tab-mine').classList.toggle('active', mode === 'mine');
    document.getElementById('sheet-Filter-content').classList.toggle('hidden', mode !== 'filter');
    document.getElementById('sheet-mine-content').classList.toggle('hidden', mode !== 'mine');
  }

  toggleMyRelationship(rel) {
    this.myRelationship = rel;
    this.renderAllLabelSelectors();
    this.applyFilters();
    this.showToast(`💍 Status atualizado: ${rel}`);
  }

  toggleFilterRelationship(rel) {
    if (this.selectedFilterRelationships.includes(rel)) {
      this.selectedFilterRelationships = this.selectedFilterRelationships.filter(r => r !== rel);
    } else {
      this.selectedFilterRelationships.push(rel);
    }
    this.renderAllLabelSelectors();
    this.applyFilters();
  }

  toggleMyRole(role) {
    if (this.myRoles.includes(role)) {
      this.myRoles = this.myRoles.filter(r => r !== role);
    } else {
      this.myRoles.push(role);
    }
    this.renderAllLabelSelectors();
    this.applyFilters();
  }

  toggleMyInterest(interest) {
    if (this.myInterests.includes(interest)) {
      this.myInterests = this.myInterests.filter(i => i !== interest);
    } else {
      this.myInterests.push(interest);
    }
    this.renderAllLabelSelectors();
    this.applyFilters();
  }

  addCustomLabel() {
    this._createNewLabelFromInput(document.getElementById('custom-label-input'));
  }

  addCustomLabelFromProfile() {
    this._createNewLabelFromInput(document.getElementById('profile-custom-label-input'));
  }

  _createNewLabelFromInput(inputEl) {
    if (!inputEl || !inputEl.value.trim()) return;
    const label = inputEl.value.trim();
    if (!this.interestCatalog.includes(label)) {
      this.interestCatalog.push(label);
    }
    if (!this.myInterests.includes(label)) {
      this.myInterests.push(label);
    }
    inputEl.value = '';
    this.renderAllLabelSelectors();
    this.applyFilters();
    this.showToast(`🏷️ Rótulo "${label}" criado e ativo!`);
  }

  toggleFilterRole(role) {
    if (this.selectedFilterRoles.includes(role)) {
      this.selectedFilterRoles = this.selectedFilterRoles.filter(r => r !== role);
    } else {
      this.selectedFilterRoles.push(role);
    }
    this.renderAllLabelSelectors();
    this.applyFilters();
  }

  toggleFilterInterest(interest) {
    if (this.selectedFilterInterests.includes(interest)) {
      this.selectedFilterInterests = this.selectedFilterInterests.filter(i => i !== interest);
    } else {
      this.selectedFilterInterests.push(interest);
    }
    this.renderAllLabelSelectors();
    this.applyFilters();
  }

  clearLabelFilters() {
    this.selectedFilterRelationships = [];
    this.selectedFilterRoles = [];
    this.selectedFilterInterests = [];
    this.maxDistanceKm = 50;
    const slider = document.getElementById('distance-range-slider');
    if (slider) slider.value = 50;
    document.getElementById('distance-slider-val').textContent = '50';
    document.getElementById('distance-label-inline').textContent = '50';
    const crossedEl = document.getElementById('filter-crossed-paths');
    if (crossedEl) crossedEl.checked = false;
    const verEl = document.getElementById('filter-verified');
    if (verEl) verEl.checked = false;

    this.renderAllLabelSelectors();
    this.applyFilters();
    this.showToast('Filtros redefinidos');
  }

  applyMyLabelsAsFilter() {
    this.closeLabelsSheet();
    this.switchTab('discover');
    this.selectedFilterRelationships = [];
    this.selectedFilterRoles = [];
    this.selectedFilterInterests = [...this.myInterests];
    this.renderAllLabelSelectors();
    this.applyFilters();
    this.showToast('★ Filtrando pelos seus Rótulos de Gostos');
  }

  /* =========================================================
     BUSCA POR DESEJO (IA SEMÂNTICA)
     ========================================================= */
  toggleAISearchDrawer() {
    const drawer = document.getElementById('ai-search-drawer');
    drawer.classList.toggle('hidden');
    if (!drawer.classList.contains('hidden')) {
      document.getElementById('ai-desire-input').focus();
    }
  }

  renderQuickIntents() {
    const container = document.getElementById('quick-intent-chips');
    if (!container) return;
    container.innerHTML = QUICK_INTENTS.map(intent => `
      <button class="intent-chip" onclick="window.app.useQuickIntent('${intent.replace(/'/g, "\\'")}')">
        ✦ ${intent}
      </button>
    `).join('');
  }

  useQuickIntent(text) {
    const input = document.getElementById('ai-desire-input');
    input.value = text;
    this.runAISearch();
  }

  handleAISearchInput(val) {
    document.getElementById('clear-ai-btn').style.display = val.trim() ? 'inline-block' : 'none';
  }

  runAISearch() {
    const plan = PLANS_CATALOG[this.currentPlanId];
    if (!plan.hasAISearch) {
      this.showToast('💎 A Busca Semântica por Desejo (IA) faz parte dos planos Plus (R$ 15) e Black!');
      this.openUpgradeSheet();
      return;
    }

    const query = document.getElementById('ai-desire-input').value.trim();
    this.activeQuery = query;
    document.getElementById('clear-ai-btn').style.display = query ? 'inline-block' : 'none';
    this.applyFilters();

    const insightBox = document.getElementById('ai-search-insight');
    if (query) {
      insightBox.classList.remove('hidden');
      insightBox.innerHTML = `✦ <strong>IA Nexus:</strong> Filtramos <strong>${this.filteredProfiles.length} perfis</strong> alinhados com <em>"${query}"</em>.`;
    } else {
      insightBox.classList.add('hidden');
    }
  }

  clearAISearch() {
    document.getElementById('ai-desire-input').value = '';
    this.activeQuery = '';
    document.getElementById('clear-ai-btn').style.display = 'none';
    document.getElementById('ai-search-insight').classList.add('hidden');
    this.applyFilters();
  }

  scoreProfile(profile, query) {
    const sharedInterests = profile.tags.filter(t => this.myInterests.includes(t));
    const sharedRoles = profile.roles.filter(r => this.myRoles.includes(r));

    let baseScore = Math.min(99, 80 + sharedInterests.length * 4 + (sharedRoles.length > 0 ? 3 : 4));
    let reasonParts = [];

    if (sharedInterests.length > 0) {
      reasonParts.push(`${sharedInterests.length} rótulos em comum (${sharedInterests.slice(0, 2).join(', ')})`);
    }

    if (!query) {
      return {
        score: baseScore,
        hitsCount: sharedInterests.length,
        sharedInterests,
        reason: reasonParts.length > 0 ? reasonParts.join(' • ') : 'Afinidade complementar'
      };
    }

    const tokens = query
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .split(/\W+/)
      .filter(t => t.length > 2);

    const haystack = [
      profile.name,
      profile.archetype,
      ...profile.roles,
      profile.bio,
      profile.crossedStreet,
      ...profile.tags,
      ...profile.keywords,
      ...profile.limits.agreed
    ]
      .join(' ')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let hits = [];
    tokens.forEach(token => {
      if (haystack.includes(token)) hits.push(token);
    });

    const computedScore = Math.min(99, (hits.length > 0 ? 86 : 72) + hits.length * 4 + sharedInterests.length * 2);
    const reason = hits.length > 0
      ? `Sintonia com "${hits.slice(0, 3).join(', ')}"`
      : (reasonParts[0] || 'Compatibilidade por rótulos');

    return { score: computedScore, hitsCount: hits.length, sharedInterests, reason };
  }

  applyFilters() {
    const verifiedEl = document.getElementById('filter-verified');
    const onlyVerified = verifiedEl ? verifiedEl.checked : false;
    const crossedEl = document.getElementById('filter-crossed-paths');
    const onlyCrossed = crossedEl ? crossedEl.checked : false;

    let list = this.profiles.map(p => {
      const matchData = this.scoreProfile(p, this.activeQuery);
      return {
        ...p,
        displayScore: matchData.score,
        matchReason: matchData.reason,
        sharedInterests: matchData.sharedInterests || [],
        hitsCount: matchData.hitsCount || 0
      };
    });

    list = list.filter(p => p.distanceKm <= this.maxDistanceKm);

    if (onlyVerified) {
      list = list.filter(p => p.verified);
    }

    if (onlyCrossed) {
      const plan = PLANS_CATALOG[this.currentPlanId];
      if (!plan.hasStreetRadar) {
        crossedEl.checked = false;
        this.showToast('💎 O filtro "Passaram pela mesma rua" é exclusivo dos planos Plus (R$ 15) e Black!');
        this.openUpgradeSheet();
      } else {
        list = list.filter(p => p.crossedPathsCount > 0);
      }
    }

    if (this.selectedFilterRelationships && this.selectedFilterRelationships.length > 0) {
      list = list.filter(p => this.selectedFilterRelationships.includes(p.relationship || 'Solteiro(a)'));
    }

    if (this.selectedFilterRoles.length > 0) {
      list = list.filter(p => p.roles.some(r => this.selectedFilterRoles.includes(r)));
    }

    if (this.selectedFilterInterests.length > 0) {
      list = list.filter(p => p.tags.some(t => this.selectedFilterInterests.includes(t)));
    }

    list.sort((a, b) => b.hitsCount - a.hitsCount || b.displayScore - a.displayScore);

    this.filteredProfiles = list;
    this.swipeIndex = 0;
    this.activePhotoIndex = 0;

    const sheetCount = document.getElementById('sheet-match-count');
    if (sheetCount) sheetCount.textContent = list.length;

    this.renderSingleProfile();
  }

  /* =========================================================
     CARROSSEL DE MÚLTIPLAS FOTOS + PERFIL ÚNICO ROLÁVEL
     ========================================================= */
  changeProfilePhoto(delta, event) {
    if (event) event.stopPropagation();
    const profile = this.filteredProfiles[this.swipeIndex % this.filteredProfiles.length];
    if (!profile || !profile.photos) return;
    const total = profile.photos.length;
    this.activePhotoIndex = (this.activePhotoIndex + delta + total) % total;
    this.renderSingleProfile(false);
  }

  setProfilePhotoIndex(idx, event) {
    if (event) event.stopPropagation();
    this.activePhotoIndex = idx;
    this.renderSingleProfile(false);
  }

  renderSingleProfile(resetScroll = true) {
    const container = document.getElementById('discover-swipe-container');
    if (!container) return;

    if (this.filteredProfiles.length === 0) {
      container.innerHTML = `
        <div class="clean-card" style="text-align:center; padding: 2.5rem 1.4rem; max-width:420px; margin:auto;">
          <div style="font-size:3rem; margin-bottom:0.75rem;">📡</div>
          <h3 style="margin-bottom:0.4rem; font-size:1.2rem;">Radar de Rua Ativo!</h3>
          <p style="font-size:0.82rem; color:var(--text-secondary); margin:0.5rem 0 1.3rem; line-height:1.5;">
            Seu perfil real foi verificado e está online em <strong>${this.userCurrentStreet || 'Jardins • São Paulo'}</strong>! Conforme novos membros reais da sua região verificarem a identidade, eles aparecerão aqui instantaneamente.
          </p>
          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            <button class="btn-primary-clean full-width" onclick="window.app.addDemoProfileToRadar()">
              + Adicionar Perfil de Teste no Radar
            </button>
            <button class="btn-soft full-width" onclick="window.app.clearLabelFilters(); window.app.clearAISearch();">
              Ampliar Raio de Busca
            </button>
          </div>
        </div>
      `;
      return;
    }

    const profile = this.filteredProfiles[this.swipeIndex % this.filteredProfiles.length];
    const photos = profile.photos && profile.photos.length >= 2
      ? profile.photos
      : [{ url: profile.avatar, label: '1ª Foto: Rosto Verificado' }, { url: profile.avatar, label: '2ª Foto: Galeria' }];

    const currentPhoto = photos[this.activePhotoIndex % photos.length];

    container.innerHTML = `
      <article class="single-profile-card" id="active-swipe-card">
        <!-- Foto Principal com Carrossel e Gestos Fluidos (Touch-Action: None) -->
        <div class="hero-photo-container" id="hero-swipe-zone">
          <!-- Barras de Progresso das Fotos no Topo -->
          <div class="photo-progress-bars">
            ${photos.map((_, idx) => `
              <div class="photo-bar-seg ${idx === (this.activePhotoIndex % photos.length) ? 'active' : ''}" onclick="window.app.setProfilePhotoIndex(${idx}, event)"></div>
            `).join('')}
          </div>

          <!-- Botões de Trocar Foto (Foto 1 Rosto / Foto 2 / Foto 3) -->
          <button class="photo-nav-btn prev" onclick="window.app.changeProfilePhoto(-1, event)" title="Foto Anterior">‹</button>
          <button class="photo-nav-btn next" onclick="window.app.changeProfilePhoto(1, event)" title="Próxima Foto">›</button>

          <img src="${currentPhoto.url}" alt="${profile.name}" />
          <div class="hero-gradient"></div>

          <!-- Carimbos de Gesto (Swipe) -->
          <div class="swipe-stamp like" id="stamp-like">CURTIR ♥</div>
          <div class="swipe-stamp pass" id="stamp-pass">PASSAR ✕</div>
          <div class="swipe-stamp star" id="stamp-star">ESTRELA ⭐</div>

          <span class="compatibility-badge" style="top:20px;">${profile.displayScore || profile.compatibility || 96}% sintonia</span>

          <div class="hero-bottom-info">
            <h2>${profile.name}, ${profile.age} ${profile.verified ? '<span style="font-size:1.1rem; color:#A7F3D0;" title="Identidade Real Verificada">✓</span>' : ''}</h2>
            <div class="hero-distance-line">
              <span>📍 A ${profile.distanceKm || 2} km</span>
              <span>•</span>
              <span class="role-pill-badge" style="background:rgba(255,46,99,0.85);">${profile.role || (profile.roles && profile.roles[0]) || 'Switch'}</span>
              <span>•</span>
              <span style="opacity:0.85;">${profile.relationship || 'Solteiro(a)'}</span>
            </div>
            <div style="margin-top:0.35rem;">
              <button class="btn-open-details-pill" onclick="window.app.openCurrentProfileDetails(event)">
                ⓘ Toque na foto p/ ver perfil completo
              </button>
            </div>
          </div>
        </div>
      </article>
    `;

    this.attachSwipeGestures();
  }

  openCurrentProfileDetails(event) {
    if (event) event.stopPropagation();
    const profile = this.filteredProfiles[this.swipeIndex % this.filteredProfiles.length];
    if (profile) this.openProfileDetailsModal(profile);
  }

  openProfileDetailsModal(profile) {
    if (!profile) return;
    const modal = document.getElementById('profile-details-modal');
    if (!modal) return;

    const avatarEl = document.getElementById('detail-modal-avatar');
    const nameEl = document.getElementById('detail-modal-name');
    const badgesEl = document.getElementById('detail-modal-badges');
    const bodyEl = document.getElementById('profile-details-modal-body');

    const photos = profile.photos && profile.photos.length >= 2
      ? profile.photos
      : [{ url: profile.avatar, label: '1ª Foto: Rosto Verificado' }, { url: profile.avatar, label: '2ª Foto: Galeria' }];
    const isMatched = this.matchedIds.includes(profile.id);

    if (avatarEl) avatarEl.src = profile.avatar;
    if (nameEl) nameEl.innerHTML = `${profile.name}, ${profile.age} ${profile.verified ? '<span style="color:#A7F3D0; font-size:1.05rem;" title="Identidade Real Verificada">✓</span>' : ''}`;
    if (badgesEl) badgesEl.innerHTML = `💍 ${profile.relationship || 'Solteiro(a)'} • ${(profile.roles || ['Switch']).map(r => `🏷️ ${r}`).join(' ')}`;

    let streetCrossingHTML = '';
    if (profile.crossedPathsCount > 0) {
      streetCrossingHTML = `
        <div class="street-crossing-banner" style="margin-bottom:0.75rem;">
          <div>
            <strong>⚡ Vocês passaram pela mesma rua ${profile.crossedPathsCount} vezes!</strong>
            <p>📍 Cruzamento frequente: ${profile.crossedStreet}</p>
          </div>
          <span class="pro-tag-inline">Radar Ativo</span>
        </div>
      `;
    }

    bodyEl.innerHTML = `
      ${streetCrossingHTML}

      <!-- Galeria de Fotos Públicas -->
      <div class="detail-section-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.45rem;">
          <h4 style="margin:0;">📸 Fotos da Galeria (${photos.length})</h4>
          <span style="font-size:0.68rem; color:var(--accent-sage); font-weight:700;">Toque p/ ampliar</span>
        </div>
        <div class="secondary-photos-row">
          ${photos.map((ph, i) => `
            <div class="secondary-photo-card" onclick="window.app.openPhotoLightbox('${ph.url}', '${profile.name} • Foto #${i + 1}')" style="cursor:pointer;">
              <img src="${ph.url}" alt="${profile.name}" />
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Fotos Privadas -->
      <div class="detail-section-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <h4 style="margin:0;">🔒 Fotos Privadas (${(profile.privatePhotos || []).length} no Cofre)</h4>
          <span style="font-size:0.68rem; color:var(--accent-rose); font-weight:700;">${isMatched ? '🔓 Liberadas' : '🔒 Pós-Match'}</span>
        </div>
        <p style="font-size:0.73rem; color:var(--text-secondary); margin-bottom:0.55rem;">
          ${isMatched
            ? `Você e ${profile.name} já têm Match! Toque para ver em tamanho real.`
            : `Fotos exclusivas liberadas dentro da conversa do chat pós-Match.`}
        </p>
        <div class="secondary-photos-row">
          ${(profile.privatePhotos || []).map((priv, idx) => `
            <div class="secondary-photo-card" onclick="${isMatched ? `window.app.openPhotoLightbox('${priv.url}', '🔓 Foto Privada #${idx + 1} de ${profile.name}')` : `window.app.showToast('🔒 Dê Match ♥ ou envie Superestrela 🌟 para desbloquear as Fotos Privadas!')`}" style="cursor:pointer;">
              <img src="${priv.url}" class="${isMatched ? '' : 'private-photo-blur'}" alt="Privada" />
              ${isMatched ? `<span class="slot-badge-bottom">🔓 Ampliar</span>` : `<div class="private-overlay-lock">🔒 No Chat<br/>pós-Match</div>`}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Sobre & Sintonia -->
      <div class="detail-section-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <h4 style="margin:0;">Sobre ${profile.name}</h4>
          <span class="pro-tag-inline" style="background:var(--accent-rose);">${profile.compatibility || 96}% sintonia</span>
        </div>
        <p style="font-size:0.84rem; color:var(--text-main); line-height:1.5; margin:0;">${profile.bio}</p>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.4rem;">📍 ${profile.city} • A ${profile.distanceKm || 3} km de você</p>
      </div>

      <!-- Gostos & Práticas -->
      <div class="detail-section-card">
        <h4>🔥 Práticas & Gostos (★ = Afinidade com você)</h4>
        <div class="tag-cloud">
          ${(profile.tags || []).map(t => {
            const isShared = this.myInterests.includes(t) || this.selectedFilterInterests.includes(t);
            return `<span class="tag-pill ${isShared ? 'shared-match' : ''}">${isShared ? '★ ' : ''}${t}</span>`;
          }).join('')}
        </div>
      </div>

      <!-- Limites -->
      <div class="detail-section-card">
        <h4>✓ Acordos Essenciais</h4>
        <div class="tag-cloud" style="margin-bottom:0.65rem;">
          ${((profile.limits && profile.limits.agreed) || []).map(i => `<span class="tag-pill">${i}</span>`).join('')}
        </div>
        <h4>⛔ Limites Inegociáveis</h4>
        <div class="tag-cloud">
          ${((profile.limits && profile.limits.hardLimits) || []).map(i => `<span class="tag-pill">${i}</span>`).join('')}
        </div>
      </div>

      <!-- Barra de Ações Rápidas dentro dos Detalhes -->
      <div style="display:flex; gap:0.5rem; justify-content:center; padding:1rem 0 0.5rem;">
        <button class="btn-soft" style="padding:0.7rem 1.1rem; border-radius:999px; font-weight:800; font-size:0.9rem;" onclick="window.app.closeProfileDetailsModal(); window.app.triggerSwipeAction('pass')">✕ Passar</button>
        <button class="btn-soft" style="padding:0.7rem 1.1rem; border-radius:999px; color:#F59E0B; border-color:#F59E0B; font-weight:800; font-size:0.9rem;" onclick="window.app.closeProfileDetailsModal(); window.app.triggerSwipeAction('star')">⭐ Estrela</button>
        <button class="btn-soft" style="padding:0.7rem 1.1rem; border-radius:999px; color:#8B5CF6; border-color:#8B5CF6; font-weight:800; font-size:0.9rem;" onclick="window.app.closeProfileDetailsModal(); window.app.triggerSwipeAction('superstar')">🌟 Mensagem</button>
        <button class="btn-primary-clean" style="padding:0.7rem 1.4rem; border-radius:999px; font-weight:800; font-size:0.9rem;" onclick="window.app.closeProfileDetailsModal(); window.app.triggerSwipeAction('like')">♥ Curtir</button>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeProfileDetailsModal() {
    const modal = document.getElementById('profile-details-modal');
    if (modal) modal.classList.add('hidden');
  }

  async addDemoProfileToRadar() {
    try {
      const candidate = DEMO_PROFILES_CATALOG[Math.floor(Math.random() * DEMO_PROFILES_CATALOG.length)] || {
        name: 'Valentina',
        age: 28,
        roles: ['Dom', 'Mistress'],
        relationship: 'Solteiro(a)'
      };

      const res = await fetch('/api/demo/add-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(candidate)
      });
      const data = await res.json();
      if (data.ok && data.profile) {
        this.profiles.unshift(data.profile);
        this.applyFilters();
        this.renderSingleProfile();
        this.showToast(`🎉 Perfil "${data.profile.name}" adicionado com sucesso ao seu radar!`);
      }
    } catch (e) {
      this.showToast('Erro ao adicionar perfil de teste.');
    }
  }

  attachSwipeGestures() {
    const heroZone = document.getElementById('hero-swipe-zone');
    const card = document.getElementById('active-swipe-card');
    if (!heroZone || !card) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;

    const stampLike = document.getElementById('stamp-like');
    const stampPass = document.getElementById('stamp-pass');
    const stampStar = document.getElementById('stamp-star');

    const onStart = (clientX, clientY, target) => {
      if (target && (target.closest('.photo-nav-btn') || target.closest('.photo-bar-seg') || target.closest('.btn-open-details-pill'))) return;
      startX = clientX;
      startY = clientY;
      startTime = Date.now();
      currentX = 0;
      currentY = 0;
      isDragging = true;
      card.style.transition = 'none';
    };

    const onMove = (clientX, clientY) => {
      if (!isDragging) return;
      currentX = clientX - startX;
      currentY = clientY - startY;

      // Desloca e gira o card suavemente
      const rotate = currentX * 0.055;
      card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotate}deg)`;

      if (stampLike) stampLike.style.opacity = currentX > 40 ? Math.min(1, (currentX - 40) / 60) : 0;
      if (stampPass) stampPass.style.opacity = currentX < -40 ? Math.min(1, (-currentX - 40) / 60) : 0;
      if (stampStar) stampStar.style.opacity = (currentY < -40 && Math.abs(currentY) > Math.abs(currentX)) ? Math.min(1, (-currentY - 40) / 60) : 0;
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      const elapsed = Date.now() - startTime;
      const distance = Math.sqrt(currentX * currentX + currentY * currentY);

      card.style.transition = 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.28s ease';

      if (stampLike) stampLike.style.opacity = 0;
      if (stampPass) stampPass.style.opacity = 0;
      if (stampStar) stampStar.style.opacity = 0;

      // Toque rápido sem arrasto -> abre os detalhes do perfil!
      if (distance < 12 && elapsed < 350) {
        card.style.transform = 'translate(0px, 0px) rotate(0deg)';
        this.openCurrentProfileDetails();
        return;
      }

      // Deslizar para cima: ⭐ Estrela
      if (currentY < -65 && Math.abs(currentY) > Math.abs(currentX)) {
        this.triggerSwipeAction('star');
      } else if (currentX > 75) {
        // Deslizar para a direita: ♥ Curtir
        this.triggerSwipeAction('like');
      } else if (currentX < -75) {
        // Deslizar para a esquerda: ✕ Passar
        this.triggerSwipeAction('pass');
      } else {
        // Retorna ao centro
        card.style.transform = 'translate(0px, 0px) rotate(0deg)';
      }
    };

    heroZone.addEventListener('mousedown', e => onStart(e.clientX, e.clientY, e.target));
    window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onEnd);

    heroZone.addEventListener('touchstart', e => {
      if (e.touches[0]) onStart(e.touches[0].clientX, e.touches[0].clientY, e.target);
    }, { passive: true });
    heroZone.addEventListener('touchmove', e => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    heroZone.addEventListener('touchend', onEnd);
  }

  triggerSwipeAction(action) {
    if (this.filteredProfiles.length === 0) return;
    const current = this.filteredProfiles[this.swipeIndex % this.filteredProfiles.length];
    const card = document.getElementById('active-swipe-card');

    if (action === 'superstar') {
      if (this.remainingSuperstars <= 0) {
        this.showToast('💎 Suas Superestrelas de hoje acabaram! Faça upgrade para o plano Plus ou Black.');
        this.openUpgradeSheet();
        return;
      }
      document.getElementById('superstar-target-subtitle').textContent =
        `Envie uma mensagem direta para ${current.name} agora mesmo (Fura-fila + abre o chat sem precisar esperar Match):`;
      document.getElementById('superstar-modal').classList.remove('hidden');
      return;
    }

    if (action === 'star') {
      if (this.remainingStars <= 0) {
        this.showToast('⭐ Suas Estrelas de hoje acabaram! Conheça os planos Plus (5/dia) e Black (15/dia).');
        this.openUpgradeSheet();
        return;
      }
      this.remainingStars -= 1;
      this.updateQuotaUI();
      if (card) {
        card.style.transform = 'translateY(-420px) scale(0.92)';
        card.style.opacity = '0';
      }
      this.showToast(`⭐ Estrela enviada! Você foi colocado em 1º lugar na lista de ${current.name}!`);
      setTimeout(() => {
        this.unlockMatch(current, 'Match via Estrela Prioritária ⭐');
        this.advanceCard();
      }, 240);
      return;
    }

    if (action === 'like') {
      if (this.remainingLikes <= 0) {
        this.showToast('♥ Suas curtidas diárias acabaram! Faça upgrade no seu plano.');
        this.openUpgradeSheet();
        return;
      }
      this.remainingLikes -= 1;
      this.updateQuotaUI();
      if (card) {
        card.style.transform = 'translateX(420px) rotate(14deg)';
        card.style.opacity = '0';
      }
      setTimeout(() => {
        if (current.willMatchOnLike) {
          this.unlockMatch(current, 'Match Mútuo ♥');
        } else {
          this.showToast(`♥ Você curtiu ${current.name}! Aguardando retribuição para liberar o chat.`);
        }
        this.advanceCard();
      }, 240);
      return;
    }

    if (action === 'pass') {
      if (card) {
        card.style.transform = 'translateX(-420px) rotate(-14deg)';
        card.style.opacity = '0';
      }
      setTimeout(() => this.advanceCard(), 220);
    }
  }

  advanceCard() {
    this.swipeIndex = (this.swipeIndex + 1) % this.filteredProfiles.length;
    this.activePhotoIndex = 0;
    this.renderSingleProfile();
  }

  closeSuperstarModal() {
    document.getElementById('superstar-modal').classList.add('hidden');
  }

  confirmSendSuperstar() {
    const current = this.filteredProfiles[this.swipeIndex % this.filteredProfiles.length];
    const msgInput = document.getElementById('superstar-message-input');
    const customText = msgInput.value.trim() || `Olá ${current.name}! Enviei uma Superestrela porque adorei seus rótulos e energia ✨`;

    this.remainingSuperstars = Math.max(0, this.remainingSuperstars - 1);
    this.updateQuotaUI();
    msgInput.value = '';
    this.closeSuperstarModal();

    if (!this.matchedIds.includes(current.id)) {
      this.matchedIds.push(current.id);
    }
    this.chats[current.id] = {
      profile: current,
      matchType: 'Superestrela 🌟',
      time: 'Agora',
      unread: 1,
      messages: [
        { sender: 'me', text: `🌟 [Superestrela]: ${customText}` },
        { sender: 'them', text: `Uau, recebi sua Superestrela no topo da minha lista! Também liberei minhas fotos da galeria e fotos privadas aqui no chat 🔓✨` }
      ]
    };
    current.privateUnlockedInChat = true;
    this.showToast(`🌟 Superestrela enviada! Conversa com ${current.name} aberta!`);
    this.openDirectChat(current.id);
  }

  unlockMatch(profile, matchTypeLabel = 'Match Mútuo ♥') {
    const alreadyMatched = this.matchedIds.includes(profile.id);
    if (!alreadyMatched) {
      this.matchedIds.push(profile.id);
      profile.privateUnlockedInChat = true;
      this.chats[profile.id] = {
        profile,
        matchType: matchTypeLabel,
        time: 'Agora',
        unread: 1,
        messages: [
          {
            sender: 'them',
            text: `Olá! Demos ${matchTypeLabel}! Nossos rótulos combinaram com ${profile.displayScore}% de sintonia e liberei minhas fotos privadas aqui no chat ✨`
          }
        ]
      };
      this.activeChatId = profile.id;
      this.renderChats();
    }

    document.getElementById('match-modal-text').textContent =
      `Você e ${profile.name} têm ${profile.displayScore}% de compatibilidade! A conversa, a galeria e o álbum privado no chat foram liberados.`;
    const openBtn = document.getElementById('match-open-chat-btn');
    openBtn.onclick = () => {
      this.closeMatchModal();
      this.openDirectChat(profile.id);
    };
    document.getElementById('match-celebration-modal').classList.remove('hidden');
  }

  closeMatchModal() {
    document.getElementById('match-celebration-modal').classList.add('hidden');
  }

  /* =========================================================
     ABA 4: CHAT ESTILO WHATSAPP (LISTA DE CONVERSAS -> SALA DE CHAT + PERFIL, GALERIA & FOTOS PRIVADAS)
     ========================================================= */
  acceptReceivedStar(profileId) {
    const profile = this.profiles.find(p => p.id === profileId);
    if (!profile) return;
    this.receivedStars = this.receivedStars.filter(id => id !== profileId);
    this.unlockMatch(profile, 'Match via Estrela Recebida ⭐');
    this.renderChats();
  }

  openDirectChat(profileId) {
    if (!this.matchedIds.includes(profileId)) {
      this.showToast('🔒 Dê Match ♥ ou envie uma Superestrela 🌟 para liberar o chat!');
      return;
    }
    this.activeChatId = profileId;
    if (this.chats[profileId]) {
      this.chats[profileId].unread = 0;
    }
    this.switchTab('messages');
    document.getElementById('whatsapp-list-view').classList.add('hidden');
    document.getElementById('whatsapp-room-view').classList.remove('hidden');
    this.renderChats();
  }

  backToWhatsAppList() {
    document.getElementById('whatsapp-room-view').classList.add('hidden');
    document.getElementById('whatsapp-list-view').classList.remove('hidden');
    this.renderChats();
  }

  renderChats() {
    const starsStrip = document.getElementById('received-stars-list');
    const starsSection = document.getElementById('wa-stars-section');
    if (starsStrip && starsSection) {
      if (this.receivedStars.length === 0) {
        starsSection.classList.add('hidden');
      } else {
        starsSection.classList.remove('hidden');
        starsStrip.innerHTML = this.receivedStars.map(pid => {
          const p = this.profiles.find(item => item.id === pid);
          if (!p) return '';
          return `
            <div class="star-request-card">
              <img src="${p.avatar}" alt="${p.name}" />
              <div style="flex:1;">
                <strong style="font-size:0.8rem; display:block;">${p.name}, ${p.age}</strong>
                <span style="font-size:0.68rem; color:var(--accent-gold); display:block;">⭐ Deu Estrela em você!</span>
                <button class="btn-primary-clean btn-sm" style="margin-top:0.3rem; width:100%;" onclick="window.app.acceptReceivedStar('${p.id}')">
                  Dar Match ♥
                </button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    const searchVal = (document.getElementById('wa-search-input')?.value || '').toLowerCase().trim();
    const listContainer = document.getElementById('whatsapp-threads-container');
    const chatIds = Object.keys(this.chats).filter(cid => {
      if (!searchVal) return true;
      const item = this.chats[cid];
      return item.profile.name.toLowerCase().includes(searchVal);
    });

    if (listContainer) {
      listContainer.innerHTML = chatIds.map(cid => {
        const item = this.chats[cid];
        const lastMsg = item.messages[item.messages.length - 1]?.text || '📷 Foto enviada';
        const privCount = (item.profile.privatePhotos || []).length;
        const pubCount = (item.profile.photos || []).length;
        return `
          <div class="wa-contact-row" onclick="window.app.openDirectChat('${cid}')">
            <div class="wa-avatar-wrap">
              <img src="${item.profile.avatar}" alt="${item.profile.name}" />
              <span class="wa-online-dot"></span>
            </div>
            <div class="wa-row-middle">
              <div class="wa-row-top">
                <span class="wa-contact-name">${item.profile.name}, ${item.profile.age} ✓</span>
                <span class="wa-time">${item.time || 'Agora'}</span>
              </div>
              <div class="wa-last-msg">✓✓ ${lastMsg}</div>
              <div style="font-size:0.66rem; color:var(--accent-rose); font-weight:600; margin-top:0.18rem;">
                📸 ${pubCount} na Galeria • 🔓 ${privCount} Privada(s) • ${item.matchType}
              </div>
            </div>
            ${item.unread > 0 ? `<span class="wa-unread-badge">${item.unread}</span>` : ''}
          </div>
        `;
      }).join('');
    }

    const activeChat = this.chats[this.activeChatId];
    if (!activeChat) return;

    const p = activeChat.profile;
    const roomHeader = document.getElementById('wa-room-header');
    if (roomHeader) {
      roomHeader.innerHTML = `
        <button class="wa-back-btn" onclick="window.app.backToWhatsAppList()" title="Voltar para Lista de Conversas">←</button>
        <div class="wa-header-contact" onclick="window.app.openActiveChatContactProfile()" title="Toque para ver Perfil, Galeria & Fotos Privadas">
          <img src="${p.avatar}" alt="${p.name}" />
          <div>
            <strong style="font-size:0.88rem; display:block;">${p.name}, ${p.age} ✓</strong>
            <span style="font-size:0.67rem; color:var(--accent-sage); display:block;">Toque p/ ver Galeria (${(p.photos || []).length}) & Fotos Privadas (${(p.privatePhotos || []).length})</span>
          </div>
        </div>
        <button class="btn-soft btn-sm" onclick="window.app.openActiveChatContactProfile()">🔓 Fotos</button>
      `;
    }

    const roomBanner = document.getElementById('wa-room-banner');
    if (roomBanner) {
      roomBanner.innerHTML = `
        <span>✓ Rótulos em comum: <strong>${p.tags.slice(0, 2).join(' • ')}</strong></span>
        <span style="cursor:pointer; text-decoration:underline;" onclick="window.app.openActiveChatContactProfile()">Galeria & Privadas →</span>
      `;
    }

    const msgArea = document.getElementById('chat-messages-area');
    if (msgArea) {
      msgArea.innerHTML = activeChat.messages.map(m => `
        <div class="msg-bubble ${m.sender === 'me' ? 'outgoing' : 'incoming'}">
          ${m.imageUrl ? `<img src="${m.imageUrl}" class="post-media-img" style="margin:0 0 0.35rem 0;" onclick="window.app.openPhotoLightbox('${m.imageUrl}', 'Foto na conversa')" alt="Foto" />` : ''}
          ${m.text ? `<div>${m.text}</div>` : ''}
        </div>
      `).join('');
      msgArea.scrollTop = msgArea.scrollHeight;
    }
  }

  openActiveChatContactProfile() {
    const activeChat = this.chats[this.activeChatId];
    if (!activeChat) return;
    const p = activeChat.profile;
    const photos = p.photos || [{ url: p.avatar }];
    const privPhotos = p.privatePhotos || [];

    document.getElementById('chat-contact-modal-name').textContent = `${p.name}, ${p.age} — Galeria & Fotos Privadas`;
    document.getElementById('chat-contact-modal-body').innerHTML = `
      <!-- 1. Álbum de Fotos Privadas Liberado no Chat -->
      <div class="sheet-section">
        <div class="sheet-section-title" style="color:var(--accent-rose);">🔓 Álbum de Fotos Privadas de ${p.name} (${privPhotos.length})</div>
        <div class="secondary-photos-row">
          ${privPhotos.map((priv, idx) => `
            <div class="secondary-photo-card" onclick="window.app.openPhotoLightbox('${priv.url}', '🔓 Foto Privada #${idx + 1} de ${p.name}')" style="cursor:pointer;">
              <img src="${priv.url}" alt="${p.name}" />
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. Fotos da Galeria Pública -->
      <div class="sheet-section">
        <div class="sheet-section-title">📸 Fotos da Galeria de ${p.name} (${photos.length})</div>
        <div class="secondary-photos-row">
          ${photos.map((ph, idx) => `
            <div class="secondary-photo-card" onclick="window.app.openPhotoLightbox('${ph.url}', '📸 Foto da Galeria #${idx + 1} de ${p.name}')" style="cursor:pointer;">
              <img src="${ph.url}" alt="${p.name}" />
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bio & Rótulos -->
      <div class="sheet-section">
        <div class="sheet-section-title">Sobre & Rótulos de Identidade</div>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:0.5rem;">${p.bio}</p>
        <div class="chips-cloud">
          ${p.roles.map(r => `<span class="tag-pill shared-match">🏷️ ${r}</span>`).join('')}
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </div>

      <!-- Limites -->
      <div class="sheet-section">
        <div class="sheet-section-title">✓ Acordos & ⛔ Limites Inegociáveis</div>
        <div class="chips-cloud">
          ${p.limits.agreed.map(i => `<span class="tag-pill">✓ ${i}</span>`).join('')}
          ${p.limits.hardLimits.map(i => `<span class="tag-pill" style="color:var(--accent-rose);">⛔ ${i}</span>`).join('')}
        </div>
      </div>

      <button class="btn-primary-clean full-width" onclick="window.app.closeChatContactProfile()">
        Voltar para a Conversa com ${p.name}
      </button>
    `;
    document.getElementById('chat-contact-profile-modal').classList.remove('hidden');
  }

  closeChatContactProfile() {
    document.getElementById('chat-contact-profile-modal').classList.add('hidden');
  }

  sendMessage() {
    const input = document.getElementById('chat-message-input');
    const text = input.value.trim();
    if (!text) return;
    const activeChat = this.chats[this.activeChatId];
    activeChat.messages.push({ sender: 'me', text });
    activeChat.time = 'Agora';
    input.value = '';
    this.renderChats();

    setTimeout(() => {
      activeChat.messages.push({
        sender: 'them',
        text: 'Perfeito! Você viu minhas fotos da galeria e as fotos privadas que liberei ali no topo do nosso chat? ✨'
      });
      this.renderChats();
    }, 750);
  }

  sendPhotoInChat(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    const activeChat = this.chats[this.activeChatId];
    if (!activeChat) return;
    activeChat.messages.push({
      sender: 'me',
      imageUrl,
      text: '📷 Foto enviada da galeria'
    });
    activeChat.time = 'Agora';
    inputEl.value = '';
    this.renderChats();
    this.showToast('📷 Foto enviada na conversa!');
  }

  sendChecklistInChat() {
    const yesCount = this.boundaries.filter(b => b.status === 'yes').length;
    const activeChat = this.chats[this.activeChatId];
    activeChat.messages.push({
      sender: 'me',
      text: `📋 Compartilhei meus Rótulos (${this.myRoles.join(', ')}) e minha Matriz (${yesCount} acordos ativos).`
    });
    this.renderChats();
    this.showToast('📋 Rótulos e limites enviados na conversa!');
  }

  /* =========================================================
     ABA 2: REELS ESTILO INSTAGRAM (SCROLL MOUSE, DEDO & SETAS ▲/▼ 100% FUNCIONAIS)
     ========================================================= */
  renderReels() {
    const feed = document.getElementById('reels-feed');
    if (!feed) return;
    if (typeof this.activeReelIndex !== 'number') this.activeReelIndex = 0;

    feed.innerHTML = this.reels.map((r, idx) => `
      <article class="insta-reel-slide" id="reel-slide-${idx}" style="background-image:url('${r.bg}')">
        ${r.videoUrl ? `<video src="${r.videoUrl}" autoplay muted loop playsinline style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;"></video>` : ''}
        <div class="insta-reel-gradient"></div>
        <div class="insta-reel-bottom">
          <div class="insta-reel-meta">
            <div class="insta-author-row">
              <img src="${r.avatar}" alt="${r.author}" class="insta-author-avatar" />
              <strong style="font-size:0.86rem;">${r.author}</strong>
              <button class="insta-follow-btn" onclick="window.app.toggleFollowReel('${r.id}')">
                ${r.following ? 'Seguindo ✓' : 'Seguir'}
              </button>
            </div>
            <span class="role-pill-badge" style="margin-bottom:0.35rem;">${r.category}</span>
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
            <div class="insta-audio-ticker">♪ ${r.audio} • Role p/ baixo ▼</div>
          </div>

          <div class="insta-actions-rail">
            <button class="rail-action-btn" onclick="window.app.likeReel('${r.id}')">
              <div class="rail-icon-circle" style="${r.liked ? 'background:var(--accent-rose);' : ''}">♥</div>
              <span>${r.likes}</span>
            </button>
            <button class="rail-action-btn" onclick="window.app.commentReel('${r.id}')">
              <div class="rail-icon-circle">💬</div>
              <span>${r.comments}</span>
            </button>
            <button class="rail-action-btn" onclick="window.app.saveReel('${r.id}')">
              <div class="rail-icon-circle" style="${r.saved ? 'background:var(--accent-gold);' : ''}">🔖</div>
              <span>${r.saved ? 'Salvo' : 'Salvar'}</span>
            </button>
            <button class="rail-action-btn" onclick="window.app.showToast('🔗 Link do Reel copiado!')">
              <div class="rail-icon-circle">↗</div>
              <span>Enviar</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    this.updateReelCounterUI();
    this.attachReelsScrollAndSwipe();
  }

  updateReelCounterUI() {
    const pill = document.getElementById('reels-counter-pill');
    if (pill && this.reels.length > 0) {
      const idx = Math.min(this.reels.length - 1, Math.max(0, this.activeReelIndex || 0));
      pill.textContent = `${idx + 1} / ${this.reels.length}`;
    }
  }

  stepReel(delta) {
    const feed = document.getElementById('reels-feed');
    if (!feed || this.reels.length === 0) return;
    const nextIdx = ( (this.activeReelIndex || 0) + delta + this.reels.length ) % this.reels.length;
    this.activeReelIndex = nextIdx;
    const targetSlide = document.getElementById(`reel-slide-${nextIdx}`);
    if (targetSlide) {
      feed.scrollTo({
        top: targetSlide.offsetTop,
        behavior: 'smooth'
      });
    }
    this.updateReelCounterUI();
  }

  attachReelsScrollAndSwipe() {
    const feed = document.getElementById('reels-feed');
    if (!feed || feed.dataset.boundReels === 'true') return;
    feed.dataset.boundReels = 'true';

    let wheelLocked = false;
    feed.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (wheelLocked) return;
      if (Math.abs(e.deltaY) < 12) return;
      wheelLocked = true;
      this.stepReel(e.deltaY > 0 ? 1 : -1);
      setTimeout(() => { wheelLocked = false; }, 420);
    }, { passive: false });

    // Arrastar com mouse ou dedo para cima / baixo nos Reels
    let startY = 0;
    let dragging = false;
    feed.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) return;
      startY = e.clientY;
      dragging = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (!dragging) return;
      dragging = false;
      const dy = e.clientY - startY;
      if (dy < -50) this.stepReel(1);
      else if (dy > 50) this.stepReel(-1);
    });

    feed.addEventListener('scroll', () => {
      if (!feed.clientHeight) return;
      const idx = Math.round(feed.scrollTop / feed.clientHeight);
      if (idx >= 0 && idx < this.reels.length) {
        this.activeReelIndex = idx;
        this.updateReelCounterUI();
      }
    });
  }

  likeReel(id) {
    const reel = this.reels.find(r => r.id === id);
    if (!reel) return;
    reel.liked = !reel.liked;
    reel.likes += reel.liked ? 1 : -1;
    this.renderReels();
    this.showToast(reel.liked ? '♥ Você curtiu este Reel' : 'Curtida removida');
  }

  toggleFollowReel(id) {
    const reel = this.reels.find(r => r.id === id);
    if (!reel) return;
    reel.following = !reel.following;
    this.renderReels();
    this.showToast(reel.following ? `Seguindo ${reel.author}` : `Deixou de seguir ${reel.author}`);
  }

  commentReel(id) {
    const reel = this.reels.find(r => r.id === id);
    if (!reel) return;
    reel.comments += 1;
    this.renderReels();
    this.showToast('💬 Comentário enviado!');
  }

  saveReel(id) {
    const reel = this.reels.find(r => r.id === id);
    if (!reel) return;
    reel.saved = !reel.saved;
    this.renderReels();
    this.showToast(reel.saved ? '🔖 Reel salvo na sua coleção' : 'Removido dos salvos');
  }

  openCreateReelModal() {
    document.getElementById('create-reel-modal').classList.remove('hidden');
  }

  closeCreateReelModal() {
    document.getElementById('create-reel-modal').classList.add('hidden');
  }

  handleReelFileSelect(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const isVideo = file.type.startsWith('video/');
    this.pendingReelMediaUrl = url;
    this.pendingReelMediaType = isVideo ? 'video' : 'image';

    const imgEl = document.getElementById('reel-preview-img');
    const vidEl = document.getElementById('reel-preview-video');
    if (isVideo) {
      if (imgEl) imgEl.classList.add('hidden');
      if (vidEl) {
        vidEl.src = url;
        vidEl.classList.remove('hidden');
        vidEl.play().catch(() => {});
      }
    } else {
      if (vidEl) vidEl.classList.add('hidden');
      if (imgEl) {
        imgEl.src = url;
        imgEl.classList.remove('hidden');
      }
    }
    this.showToast(isVideo ? '🎬 Vídeo carregado para o seu Reel!' : '📸 Foto carregada para o seu Reel!');
  }

  createReel() {
    const titleInput = document.getElementById('new-reel-title');
    const categoryInput = document.getElementById('new-reel-category');
    const caption = titleInput.value.trim() || 'Momento compartilhado no Nexus ✨';
    const isVideo = this.pendingReelMediaType === 'video';

    this.reels.unshift({
      id: 'r' + Date.now(),
      author: '@alex.nexus',
      avatar: this.myPublicPhotos[0]?.url || INITIAL_PROFILES[0].avatar,
      category: categoryInput.value,
      title: caption,
      desc: 'Publicado agora com mídia da sua galeria.',
      audio: 'Áudio Original • alex.nexus',
      likes: 1,
      liked: true,
      saved: false,
      following: false,
      comments: 0,
      bg: isVideo ? INITIAL_PROFILES[0].avatar : this.pendingReelMediaUrl,
      videoUrl: isVideo ? this.pendingReelMediaUrl : null
    });
    titleInput.value = '';
    this.activeReelIndex = 0;
    this.closeCreateReelModal();
    this.renderReels();
    this.showToast('🎬 Seu Reel já está no topo do feed!');
  }

  /* =========================================================
     ABA 3: STORIES ESTILO INSTAGRAM (DESLIZAR P/ OS LADOS + TOQUE NAS BORDAS)
     ========================================================= */
  renderStories() {
    const strip = document.getElementById('stories-strip');
    if (!strip) return;
    strip.innerHTML = this.stories.map(st => `
      <div class="story-card-preview" style="background-image:url('${st.mediaUrl || st.avatar}')" onclick="window.app.openStory('${st.id}')">
        <strong>${st.user.split(' ')[0]}</strong>
        <span style="opacity:0.9; font-size:0.65rem;">${st.mediaType === 'video' ? '▶ Vídeo' : '📸 Story'}</span>
      </div>
    `).join('');
  }

  openStory(storyId) {
    const idx = this.stories.findIndex(s => s.id === storyId);
    this.activeStoryIndex = idx >= 0 ? idx : 0;
    this.renderActiveStoryModal();
    document.getElementById('story-viewer-modal').classList.remove('hidden');
    this.attachStorySwipeGestures();
  }

  renderActiveStoryModal() {
    const story = this.stories[this.activeStoryIndex];
    if (!story) return;

    const card = document.getElementById('story-viewer-card');
    if (card) {
      card.style.transition = 'transform 0.22s ease';
      card.style.transform = 'translateX(0px)';
    }

    const imgEl = document.getElementById('story-bg-media');
    const vidEl = document.getElementById('story-bg-video');
    if (story.mediaType === 'video') {
      if (imgEl) imgEl.classList.add('hidden');
      if (vidEl) {
        vidEl.src = story.mediaUrl;
        vidEl.classList.remove('hidden');
        vidEl.play().catch(() => {});
      }
    } else {
      if (vidEl) {
        vidEl.pause();
        vidEl.classList.add('hidden');
      }
      if (imgEl) {
        imgEl.src = story.mediaUrl || story.avatar;
        imgEl.classList.remove('hidden');
      }
    }

    const segRow = document.getElementById('story-segments-row');
    if (segRow) {
      segRow.innerHTML = this.stories.map((st, i) => `
        <div class="photo-bar-seg ${i === this.activeStoryIndex ? 'active' : ''}" onclick="window.app.openStory('${st.id}')"></div>
      `).join('');
    }

    document.getElementById('story-avatar').src = story.avatar;
    document.getElementById('story-username').textContent = story.user;
    document.getElementById('story-body-content').textContent = story.text;

    const likeBtn = document.getElementById('story-like-btn');
    if (likeBtn) {
      likeBtn.classList.toggle('liked', !!story.liked);
    }
  }

  attachStorySwipeGestures() {
    const card = document.getElementById('story-viewer-card');
    if (!card || card.dataset.boundSwipe === 'true') return;
    card.dataset.boundSwipe = 'true';

    let startX = 0;
    let currentX = 0;
    let dragging = false;

    const onStart = (x, target) => {
      if (target && (target.closest('input') || target.closest('button'))) return;
      startX = x;
      currentX = 0;
      dragging = true;
      card.style.transition = 'none';
    };

    const onMove = (x) => {
      if (!dragging) return;
      currentX = x - startX;
      card.style.transform = `translateX(${currentX * 0.45}px) scale(${1 - Math.min(0.06, Math.abs(currentX) / 1200)})`;
    };

    const onEnd = () => {
      if (!dragging) return;
      dragging = false;
      card.style.transition = 'transform 0.22s ease';
      card.style.transform = 'translateX(0px) scale(1)';
      if (currentX < -45) {
        // Deslizou para a esquerda -> Próximo Story (igual Instagram)
        this.stepStory(1);
      } else if (currentX > 45) {
        // Deslizou para a direita -> Story Anterior (igual Instagram)
        this.stepStory(-1);
      }
    };

    card.addEventListener('touchstart', e => {
      if (e.touches[0]) onStart(e.touches[0].clientX, e.target);
    }, { passive: true });
    card.addEventListener('touchmove', e => {
      if (e.touches[0]) onMove(e.touches[0].clientX);
    }, { passive: true });
    card.addEventListener('touchend', onEnd);

    card.addEventListener('mousedown', e => onStart(e.clientX, e.target));
    window.addEventListener('mousemove', e => onMove(e.clientX));
    window.addEventListener('mouseup', onEnd);
  }

  stepStory(delta) {
    if (this.stories.length === 0) return;
    this.activeStoryIndex = (this.activeStoryIndex + delta + this.stories.length) % this.stories.length;
    this.renderActiveStoryModal();
  }

  toggleLikeCurrentStory() {
    const story = this.stories[this.activeStoryIndex];
    if (!story) return;
    story.liked = !story.liked;
    this.renderActiveStoryModal();
    this.showToast(story.liked ? `♥ Você curtiu o Story de ${story.user}!` : 'Curtida removida');
  }

  closeStory() {
    const vidEl = document.getElementById('story-bg-video');
    if (vidEl) vidEl.pause();
    document.getElementById('story-viewer-modal').classList.add('hidden');
  }

  replyStory() {
    const input = document.getElementById('story-reply-input');
    const story = this.stories[this.activeStoryIndex];
    if (!input.value.trim()) {
      this.showToast('Digite uma mensagem para responder ao Story');
      return;
    }
    this.showToast(`💬 Resposta enviada para ${story ? story.user : ''}!`);
    input.value = '';
    this.closeStory();
  }

  openCreateStoryModal() {
    document.getElementById('create-story-modal').classList.remove('hidden');
  }

  closeCreateStoryModal() {
    document.getElementById('create-story-modal').classList.add('hidden');
  }

  handleStoryFileSelect(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const isVideo = file.type.startsWith('video/');
    this.pendingStoryMediaUrl = url;
    this.pendingStoryMediaType = isVideo ? 'video' : 'image';

    const imgEl = document.getElementById('story-preview-img');
    const vidEl = document.getElementById('story-preview-video');
    if (isVideo) {
      if (imgEl) imgEl.classList.add('hidden');
      if (vidEl) {
        vidEl.src = url;
        vidEl.classList.remove('hidden');
        vidEl.play().catch(() => {});
      }
    } else {
      if (vidEl) vidEl.classList.add('hidden');
      if (imgEl) {
        imgEl.src = url;
        imgEl.classList.remove('hidden');
      }
    }
    this.showToast(isVideo ? '🎬 Vídeo selecionado!' : '📸 Foto selecionada!');
  }

  publishNewStory() {
    const captionInput = document.getElementById('new-story-caption');
    const caption = captionInput.value.trim() || '✨ Novo momento compartilhado no Nexus!';
    const newId = 's' + Date.now();

    this.stories.unshift({
      id: newId,
      user: 'Alex (Você)',
      avatar: this.myPublicPhotos[0]?.url || INITIAL_PROFILES[0].avatar,
      mediaUrl: this.pendingStoryMediaUrl,
      mediaType: this.pendingStoryMediaType,
      liked: false,
      text: caption
    });

    captionInput.value = '';
    this.closeCreateStoryModal();
    this.renderStories();
    this.showToast('📸 Story publicado!');
    this.openStory(newId);
  }

  handleCommunityMediaSelect(inputEl) {
    const file = inputEl?.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    this.pendingCommunityMediaUrl = url;
    this.pendingCommunityMediaType = file.type.startsWith('video/') ? 'video' : 'image';

    const box = document.getElementById('community-media-preview-box');
    const img = document.getElementById('community-media-preview-img');
    if (box && img) {
      img.src = url;
      box.classList.remove('hidden');
    }
    this.showToast('📷 Mídia anexada!');
  }

  clearCommunityPostMedia() {
    this.pendingCommunityMediaUrl = null;
    document.getElementById('community-media-preview-box')?.classList.add('hidden');
    const fileInput = document.getElementById('community-file-input');
    if (fileInput) fileInput.value = '';
  }

  renderCommunity() {
    const groupsEl = document.getElementById('groups-list');
    if (groupsEl) {
      groupsEl.innerHTML = this.groups.map(g => `
        <div class="group-card">
          <strong style="font-size:0.84rem; display:block; margin-bottom:0.3rem;">${g.name}</strong>
          <p style="font-size:0.74rem; color:var(--text-secondary); margin-bottom:0.6rem; line-height:1.4;">${g.desc}</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.68rem; color:var(--text-muted);">${g.members}</span>
            <button class="${g.joined ? 'btn-soft' : 'btn-primary-clean'} btn-sm" onclick="window.app.toggleGroup('${g.id}')">
              ${g.joined ? '✓ Membro' : 'Entrar'}
            </button>
          </div>
        </div>
      `).join('');
    }

    const feedEl = document.getElementById('community-feed');
    if (feedEl) {
      feedEl.innerHTML = this.posts.map(p => `
        <div class="post-card">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem; font-size:0.76rem;">
            <strong>${p.author}</strong>
            <span style="color:var(--text-muted);">${p.group} • ${p.time}</span>
          </div>
          <p style="font-size:0.82rem; color:var(--text-main); line-height:1.45; margin-bottom:0.45rem;">${p.content}</p>
          ${p.mediaUrl ? (
            p.mediaType === 'video'
              ? `<video src="${p.mediaUrl}" controls playsinline class="post-media-img"></video>`
              : `<img src="${p.mediaUrl}" class="post-media-img" onclick="window.app.openPhotoLightbox('${p.mediaUrl}', '${p.author} • ${p.group}')" alt="Post Media" />`
          ) : ''}
          <div style="display:flex; gap:0.45rem;">
            <button class="btn-soft btn-sm" onclick="window.app.likePost('${p.id}')">♥ ${p.likes}</button>
            <button class="btn-soft btn-sm" onclick="window.app.showToast('✓ Presença confirmada!')">✨ Eu Vou</button>
          </div>
        </div>
      `).join('');
    }
  }

  toggleGroup(id) {
    const group = this.groups.find(g => g.id === id);
    if (!group) return;
    group.joined = !group.joined;
    this.renderCommunity();
    this.showToast(group.joined ? `🎉 Entrou em ${group.name}` : `Saiu do grupo`);
  }

  publishCommunityPost() {
    const input = document.getElementById('community-post-input');
    const groupSelect = document.getElementById('community-post-group');
    if (!input.value.trim() && !this.pendingCommunityMediaUrl) {
      this.showToast('Escreva algo ou escolha uma foto/vídeo');
      return;
    }
    this.posts.unshift({
      id: 'post' + Date.now(),
      author: 'Alex ✓',
      group: groupSelect.value,
      time: 'Agora',
      content: input.value.trim() || '📸 Nova foto compartilhada.',
      mediaUrl: this.pendingCommunityMediaUrl,
      mediaType: this.pendingCommunityMediaType,
      likes: 1
    });
    input.value = '';
    this.clearCommunityPostMedia();
    this.renderCommunity();
    this.showToast('📸 Publicado na comunidade!');
  }

  likePost(id) {
    const post = this.posts.find(p => p.id === id);
    if (post) {
      post.likes += 1;
      this.renderCommunity();
    }
  }

  /* =========================================================
     SEGURANÇA, MATRIZ DE LIMITES & MODO DISCRETO
     ========================================================= */
  renderBoundaries() {
    const container = document.getElementById('boundaries-matrix');
    if (!container) return;
    container.innerHTML = this.boundaries.map(item => `
      <div class="boundary-row">
        <span style="font-size:0.76rem;">${item.label}</span>
        <div class="boundary-options">
          <button class="b-btn ${item.status === 'yes' ? 'active-yes' : ''}" onclick="window.app.setBoundary('${item.id}', 'yes')">Topo</button>
          <button class="b-btn ${item.status === 'maybe' ? 'active-maybe' : ''}" onclick="window.app.setBoundary('${item.id}', 'maybe')">Talvez</button>
          <button class="b-btn ${item.status === 'no' ? 'active-no' : ''}" onclick="window.app.setBoundary('${item.id}', 'no')">Não</button>
        </div>
      </div>
    `).join('');
  }

  setBoundary(id, status) {
    const item = this.boundaries.find(b => b.id === id);
    if (item) {
      item.status = status;
      this.renderBoundaries();
      this.showToast('🛡️ Limites atualizados');
    }
  }

  toggleSafeCheck() {
    this.safeCheckActive = !this.safeCheckActive;
    const btn = document.getElementById('safecheck-btn');
    btn.textContent = this.safeCheckActive ? '✓ SafeCheck ON' : 'SafeCheck';
    this.showToast(this.safeCheckActive ? '🛡️ SafeCheck ativado!' : 'SafeCheck desativado');
  }

  togglePrivacyLock(locked) {
    const modal = document.getElementById('privacy-lock-modal');
    if (!modal) return;
    if (locked) {
      const now = new Date();
      const clockEl = document.getElementById('privacy-discreet-clock');
      const dateEl = document.getElementById('privacy-discreet-date');
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      }
      if (dateEl) {
        dateEl.textContent = now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
      }
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
      this.showToast('🔓 Retornando ao Nexus Kink');
    }
  }

  async saveMyProfile() {
    const nameInput = document.getElementById('my-profile-name');
    const bioInput = document.getElementById('my-profile-bio');
    const name = nameInput ? nameInput.value.trim() : (this.currentUser?.name || '');
    const bio = bioInput ? bioInput.value.trim() : (this.currentUser?.bio || '');

    if (!name) {
      this.showToast('⚠️ Informe seu nome ou apelido.');
      return;
    }

    if (this.currentUser) {
      this.currentUser.name = name;
      this.currentUser.bio = bio;
      this.currentUser.relationship = this.myRelationship || this.currentUser.relationship || '';
      this.currentUser.roles = this.myRoles || this.currentUser.roles || [];
      this.currentUser.interests = this.myInterests || this.currentUser.interests || [];
      this.currentUser.limits = this.myLimits || this.currentUser.limits || {};
      localStorage.setItem('nexus_user', JSON.stringify(this.currentUser));
    }

    const dispEl = document.getElementById('profile-display-name');
    if (dispEl) {
      const ageStr = this.currentUser?.age ? `, ${this.currentUser.age}` : '';
      dispEl.textContent = `${name}${ageStr}`;
    }

    if (this.token) {
      try {
        const res = await fetch('/api/me', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
          },
          body: JSON.stringify({
            name,
            bio,
            relationship: this.myRelationship,
            roles: this.myRoles,
            interests: this.myInterests,
            limits: this.myLimits
          })
        });
        const data = await res.json();
        if (data.ok && data.user) {
          this.currentUser = data.user;
          localStorage.setItem('nexus_user', JSON.stringify(data.user));
          this.updateProfileUI(data.user);
        }
      } catch (err) {
        console.error('Erro ao salvar perfil no servidor:', err);
      }
    }

    this.renderAllLabelSelectors();
    this.applyFilters();
    this.showToast('✓ Perfil salvo com sucesso!');
  }

  /* =========================================================
     INSTALAÇÃO COM 1 CLIQUE & COMPARTILHAMENTO DIRETO
     ========================================================= */
  async openInstallAppModal() {
    const modal = document.getElementById('install-app-modal');
    if (modal) modal.classList.remove('hidden');

    await this.syncWithBackend();
    const cloudUrl = this.publicTunnelUrl
      ? `${this.publicTunnelUrl}/app`
      : `${window.location.origin}/app`;

    const inputEl = document.getElementById('cloud-url-input');
    if (inputEl) inputEl.value = cloudUrl;
  }

  closeInstallAppModal() {
    const modal = document.getElementById('install-app-modal');
    if (modal) modal.classList.add('hidden');
  }

  async triggerNativeInstall() {
    if (this.deferredInstallPrompt) {
      this.deferredInstallPrompt.prompt();
      const choice = await this.deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        this.showToast('🎉 Nexus Kink instalado com sucesso!');
        this.closeInstallAppModal();
        this.dismissInstallBanner();
        return;
      }
      this.deferredInstallPrompt = null;
    }

    try {
      const res = await fetch('/api/install-app', { method: 'POST' });
      const data = await res.json();
      if (data.ok) {
        this.showToast('📲 Ícone "Nexus Kink App" criado na sua Área de Trabalho e App aberto!');
        this.closeInstallAppModal();
        this.dismissInstallBanner();
        return;
      }
    } catch (e) {}

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      this.showToast('📱 Toque em Compartilhar [⎋] e depois em "Adicionar à Tela de Início [⊞]".');
    } else {
      this.showToast('📱 Toque no menu [⋮] do navegador e selecione "Instalar Aplicativo".');
    }
  }

  initPWAInstall() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true ||
      document.referrer.includes('android-app://');

    if (!isStandalone && sessionStorage.getItem('nexus_install_dismissed') !== 'true') {
      setTimeout(() => {
        this.showInstallBannerIfEligible();
      }, 2500);
    }
  }

  showInstallBannerIfEligible() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true ||
      document.referrer.includes('android-app://');

    if (!isStandalone && sessionStorage.getItem('nexus_install_dismissed') !== 'true') {
      const banner = document.getElementById('pwa-install-banner');
      if (banner) banner.classList.remove('hidden');
    }
  }

  dismissInstallBanner() {
    sessionStorage.setItem('nexus_install_dismissed', 'true');
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.classList.add('hidden');
  }

  copyCloudUrl() {
    const inputEl = document.getElementById('cloud-url-input');
    if (!inputEl) return;
    navigator.clipboard?.writeText(inputEl.value).catch(() => {});
    inputEl.select();
    this.showToast('📋 Link do Nexus Kink copiado para a área de transferência!');
  }

  shareOnWhatsApp() {
    const url = this.publicTunnelUrl ? `${this.publicTunnelUrl}/app` : `${window.location.origin}/app`;
    const text = encodeURIComponent(`Conheça o Nexus Kink - App de conexões e comunidade BDSM: ${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }

  shareOnTelegram() {
    const url = this.publicTunnelUrl ? `${this.publicTunnelUrl}/app` : `${window.location.origin}/app`;
    const text = encodeURIComponent('Nexus Kink - Conexões e Comunidade');
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${text}`, '_blank');
  }

  /* =========================================================
     ATUALIZAÇÃO AUTOMÁTICA OTA (OVER-THE-AIR) & SINCRONIA BACKEND
     ========================================================= */
  async checkOTAUpdate() {
    try {
      const res = await fetch('/api/version?t=' + Date.now());
      const data = await res.json();
      if (!data.ok) return;

      if (data.publicTunnelUrl || data.publicUrl) {
        this.publicTunnelUrl = data.publicTunnelUrl || data.publicUrl;
      }

      if (!this._currentCodeVersion) {
        this._currentCodeVersion = data.codeVersion;
        this._currentDbVersion = data.dbUpdatedAt;
        return;
      }

      if (data.codeVersion && data.codeVersion !== this._currentCodeVersion) {
        this._currentCodeVersion = data.codeVersion;
        this.showToast('⚡ Nova atualização OTA recebida! Atualizando App...');
        setTimeout(() => {
          window.location.reload();
        }, 600);
        return;
      }

      if (data.dbUpdatedAt && data.dbUpdatedAt !== this._currentDbVersion) {
        this._currentDbVersion = data.dbUpdatedAt;
        await this.syncWithBackend();
      }
    } catch (e) {
      // Offline fallback
    }
  }

  async syncWithBackend() {
    try {
      const res = await fetch('/api/state?t=' + Date.now());
      const data = await res.json();
      if (!data.ok || !data.db) return;
      const db = data.db;

      if (data.publicTunnelUrl) {
        this.publicTunnelUrl = data.publicTunnelUrl;
      }

      if (Array.isArray(db.relationships) && db.relationships.length > 0) {
        this.relationshipCatalog = db.relationships;
      }
      if (Array.isArray(db.roles) && db.roles.length > 0) {
        this.roleCatalog = db.roles;
      }
      if (Array.isArray(db.interests) && db.interests.length > 0) {
        this.interestCatalog = db.interests;
      }

      if (Array.isArray(db.profiles)) {
        db.profiles.forEach(p => {
          if (this.currentUser && (p.id === this.currentUser.id || p.name.toLowerCase() === this.currentUser.name.toLowerCase())) {
            return;
          }
          const exists = this.profiles.some(x => x.id === p.id);
          if (!exists) {
            this.profiles.unshift(p);
          }
        });
      }

      if (Array.isArray(db.users)) {
        db.users.forEach(u => {
          if (u.banned) {
            this.profiles = this.profiles.filter(p => p.name.toLowerCase() !== u.name.toLowerCase());
            return;
          }
          if (this.currentUser && (u.id === this.currentUser.id || u.email === this.currentUser.email)) {
            return;
          }
          const exists = this.profiles.some(p => p.id === u.id || p.name.toLowerCase() === u.name.toLowerCase());
          if (!exists && String(u.id).startsWith('u_')) {
            this.profiles.unshift({
              id: u.id,
              name: u.name,
              age: u.age || 26,
              relationship: u.relationship || 'Solteiro(a)',
              city: u.location || 'São Paulo, SP',
              distanceKm: 3,
              lastSeen: 'Online agora',
              crossedPathsCount: 5,
              crossedStreet: u.location || 'Jardins • SP',
              verified: Boolean(u.verified),
              faceIdVerified: true,
              willMatchOnLike: true,
              roles: [u.role || 'Switch'],
              archetype: u.role || 'Switch',
              compatibility: 95,
              avatar: u.avatar,
              photos: [{ url: u.avatar, label: '1ª Foto' }, { url: u.avatar, label: '2ª Foto' }],
              privatePhotos: [{ url: u.avatar, caption: 'Foto Privada #1' }],
              privateUnlockedInChat: true,
              bio: `Perfil verificado em ${u.location || 'São Paulo'}.`,
              tags: this.interestCatalog.slice(0, 6),
              keywords: [(u.role || 'switch').toLowerCase()],
              limits: { agreed: ['Aftercare'], curious: ['Roleplay'], hardLimits: ['Falta de Respeito'] }
            });
          }
        });
      }

      this.recalculateDistancesWithGPS();
      this.applyFilters();
      this.renderAllLabelSelectors();
    } catch (e) {
      // Offline / local fallback
    }
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  if (window.app) {
    window.app.deferredInstallPrompt = e;
    window.app.showInstallBannerIfEligible();
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
  });
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new NexusApp();
  window.app.syncWithBackend();
  window.app.checkOTAUpdate();
  window.app.initPWAInstall();
  setInterval(() => window.app.checkOTAUpdate(), 2500);
});
