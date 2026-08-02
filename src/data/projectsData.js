export const projects = [
  {
    slug: 'burnout-risk-analyzer',
    id: '#001',
    title: 'Burnout Risk Analyzer',
    shortDescription:
      'Task-Level Employee Burnout Risk Detection System built for Xebia Hackathon. Evaluates task patterns & generates AI preventive recommendations.',
    fullDescription:
      'Task-Level Employee Burnout Risk Detection System built for the Xebia Hackathon at Takshila University. Evaluates complex task assignment patterns, workload distribution, and work-rest ratios to generate AI-powered preventive recommendations before critical fatigue occurs.',
    image: '/risk_intel_dashboard.png',
    tags: ['AI / ML', 'Hackathon Winner', 'Risk Analytics', 'Python', 'React'],
    liveUrl:
      'https://task-level-employee-burn-risk-detection-39l2.onrender.com/',
    githubUrl:
      'https://github.com/charansridev/Task-Level-Employee-Burn-Risk-Detection-System',
    features: [
      'Real-time workload & task frequency pattern analysis',
      'AI-driven employee fatigue score algorithm',
      'Preventive manager alerts and schedule optimization suggestions',
      'Interactive risk dashboard with heatmaps and historical trends',
    ],
    setup: [
      {
        step: '1. Clone repository',
        code: 'git clone https://github.com/charansridev/Task-Level-Employee-Burn-Risk-Detection-System.git\ncd Task-Level-Employee-Burn-Risk-Detection-System',
      },
      {
        step: '2. Install backend dependencies',
        code: 'pip install -r requirements.txt',
      },
      {
        step: '3. Launch application server',
        code: 'python app.py',
      },
    ],
  },
  {
    slug: 'newstrack',
    id: '#002',
    title: 'NewsTrack — Distribution Tracking System',
    shortDescription:
      'Full-stack supply chain & distribution management platform for publishers, hubs, and vendors with real-time websocket tracking.',
    fullDescription:
      'Full-stack supply chain & distribution management platform for newspaper publishers, regional hubs, and local delivery vendors. Features real-time websocket delivery tracking, inventory dispatch, driver routing, and automated issue resolution workflows.',
    image: '/news_track_dashboard.png',
    tags: ['React 19', 'TypeScript', 'FastAPI', 'WebSockets', 'SQLAlchemy'],
    liveUrl: null,
    githubUrl: 'https://github.com/charansridev/NewsTrack',
    features: [
      'Live WebSocket delivery route tracking for dispatch drivers',
      'Hub-to-vendor newspaper inventory allocation & audit logging',
      'Automated issue resolution for damaged or delayed shipments',
      'Role-based dashboard for Publishers, Hub Managers, and Vendors',
    ],
    setup: [
      {
        step: '1. Clone repository',
        code: 'git clone https://github.com/charansridev/NewsTrack.git\ncd NewsTrack',
      },
      {
        step: '2. Install frontend & backend packages',
        code: 'npm install\ncd backend && pip install -r requirements.txt',
      },
      {
        step: '3. Run development servers',
        code: 'npm run dev',
      },
    ],
  },
  {
    slug: 'n8n-automations',
    id: '#003',
    title: 'N8N Neural Workflows & Automations',
    shortDescription:
      'Suite of 16 specialized autonomous AI workflows: Telegram voice-to-invoice, AI shopping, Whisper audio summarizers, and job search engines.',
    fullDescription:
      'A comprehensive suite of 16 specialized autonomous AI workflows. Includes Telegram voice-to-invoice agents, AI shopping assistants, Groq Whisper audio summarizers, Suno music generators, and automated LinkedIn job search engines powered by Google Gemini, LangChain, and n8n.',
    image: null,
    tags: ['n8n', 'Groq Whisper', 'Gemini 2.5', 'LangChain', 'Automations'],
    liveUrl: null,
    githubUrl: 'https://github.com/charansridev/N8N-AUTOMATIONS',
    features: [
      '16 modular n8n workflow JSON schemas',
      'Telegram voice note parsing to PDF invoice generation',
      'Automated job scraping & resume matching agent',
      'Groq Whisper audio meeting transcription & AI summaries',
    ],
    setup: [
      {
        step: '1. Clone workflow repository',
        code: 'git clone https://github.com/charansridev/N8N-AUTOMATIONS.git',
      },
      {
        step: '2. Import JSON into n8n instance',
        code: 'Import workflows via n8n UI -> Workflows -> Import from file',
      },
      {
        step: '3. Configure API Credentials',
        code: 'Set GEMINI_API_KEY, GROQ_API_KEY, and TELEGRAM_BOT_TOKEN in n8n credentials.',
      },
    ],
  },
  {
    slug: 'drishtifi',
    id: '#004',
    title: 'DrishtiFi — AI MSME Credit Assessment',
    shortDescription:
      'Multimodal AI-powered credit assessment platform evaluating shop inventory density & handwritten Khaata ledgers for unbanked MSMEs.',
    fullDescription:
      'Multimodal AI-powered credit assessment platform built for the OpenAI Academy x NxtWave Regional Buildathon. Evaluates physical shop inventory density and handwritten ledger photos (Khaata) to generate bank-grade digital credit-readiness reports and micro-loan recommendations for unbanked informal MSMEs.',
    image: null,
    tags: ['React 19', 'Gemini Multimodal', 'FinTech', 'OpenAI Buildathon'],
    liveUrl: 'https://drishtifi.ai.studio/',
    githubUrl: 'https://github.com/charansridev/DrishtiFi',
    features: [
      'Computer vision inventory density calculation from shop photos',
      'OCR & Multimodal ledger extraction for handwritten Khaata books',
      'Automated credit readiness score & micro-loan report PDF generation',
    ],
    setup: [
      {
        step: '1. Clone repository',
        code: 'git clone https://github.com/charansridev/DrishtiFi.git\ncd DrishtiFi',
      },
      {
        step: '2. Install packages & configure environment',
        code: 'npm install\necho "VITE_GEMINI_API_KEY=your_key_here" > .env.local',
      },
      {
        step: '3. Launch dev environment',
        code: 'npm run dev',
      },
    ],
  },
  {
    slug: 'policypay',
    id: '#005',
    title: 'PolicyPay — Life Insurance CRM',
    shortDescription:
      'Full-stack CRM for insurance agents to track daily payments, automated WhatsApp reminders, and recurring renewals.',
    fullDescription:
      'Open-source full-stack CRM built for life insurance agents to streamline daily premium payment tracking. Features one-click WhatsApp client reminders, smart monthly/annual recurring renewals, deferred payment forwarding, and real-time collection analytics.',
    image: null,
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://policy-crm-dashbord-hazel.vercel.app/',
    githubUrl: 'https://github.com/charansridev/policyCRM-Dashbord',
    features: [
      'Daily policy premium payment ledger & overdue tracking',
      'One-click WhatsApp Web reminder link generator',
      'Recurring renewal calendar with automated status flags',
      'Client contact directory & policy history log',
    ],
    setup: [
      {
        step: '1. Clone repository',
        code: 'git clone https://github.com/charansridev/policyCRM-Dashbord.git\ncd policyCRM-Dashbord',
      },
      {
        step: '2. Install dependencies & configure MongoDB',
        code: 'npm install\necho "MONGODB_URI=your_mongodb_uri" > .env',
      },
      {
        step: '3. Run app',
        code: 'npm run dev',
      },
    ],
  },
  {
    slug: 'voice-to-invoice',
    id: '#006',
    title: 'Voice to Invoice — AI Telegram Bot',
    shortDescription:
      'Converts Telegram voice notes into structured HTML & PDF billing invoices using Google Gemini AI for local shop owners.',
    fullDescription:
      'Automated AI-powered billing solution for small merchants and local shop owners. Converts voice notes sent on Telegram into structured billing data using Google Gemini AI, renders custom HTML invoices, and generates instant downloadable PDF documents delivered back in chat.',
    image: null,
    tags: ['n8n', 'Gemini 2.5', 'Telegram API', 'PDFShift', 'Node.js'],
    liveUrl: null,
    githubUrl: 'https://github.com/charansridev/voice-to-invoice',
    features: [
      'Instant voice message speech-to-text extraction',
      'Gemini AI itemization, price calculation, and tax breakdown',
      'Automated PDF invoice generation and Telegram document dispatch',
    ],
    setup: [
      {
        step: '1. Clone repository',
        code: 'git clone https://github.com/charansridev/voice-to-invoice.git\ncd voice-to-invoice',
      },
      {
        step: '2. Setup webhook & API keys',
        code: 'npm install\ncp .env.example .env',
      },
      {
        step: '3. Start bot service',
        code: 'npm start',
      },
    ],
  },
];
