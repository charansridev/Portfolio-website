export const projects = [
  {
    slug: "n8n-automations",
    id: "#003",
    title: "N8N Neural Workflows & Automations",
    shortDescription:
      "Suite of 16 specialized autonomous AI workflows: Telegram voice-to-invoice, AI shopping, Whisper audio summarizers, and job search engines.",
    fullDescription:
      "A comprehensive suite of 16 specialized autonomous AI workflows. Includes Telegram voice-to-invoice agents, AI shopping assistants, Groq Whisper audio summarizers, Suno music generators, and automated LinkedIn job search engines powered by Google Gemini, LangChain, and n8n.",
    image: null,
    tags: ["n8n", "Groq Whisper", "Gemini 2.5", "LangChain", "Automations"],
    liveUrl: null,
    githubUrl: "https://github.com/charansridev/N8N-AUTOMATIONS",
    features: [
      "16 modular n8n workflow JSON schemas",
      "Telegram voice note parsing to PDF invoice generation",
      "Automated job scraping & resume matching agent",
      "Groq Whisper audio meeting transcription & AI summaries",
    ],
    setup: [
      {
        step: "1. Clone workflow repository",
        code: "git clone https://github.com/charansridev/N8N-AUTOMATIONS.git",
      },
      {
        step: "2. Import JSON into n8n instance",
        code: "Import workflows via n8n UI -> Workflows -> Import from file",
      },
      {
        step: "3. Configure API Credentials",
        code: "Set GEMINI_API_KEY, GROQ_API_KEY, and TELEGRAM_BOT_TOKEN in n8n credentials.",
      },
    ],
  },
  {
    slug: "policypay",
    id: "#005",
    title: "PolicyPay — Life Insurance CRM",
    shortDescription:
      "Full-stack CRM for insurance agents to track daily payments, automated WhatsApp reminders, and recurring renewals.",
    fullDescription:
      "Open-source full-stack CRM built for life insurance agents to streamline daily premium payment tracking. Features one-click WhatsApp client reminders, smart monthly/annual recurring renewals, deferred payment forwarding, and real-time collection analytics.",
    image: null,
    tags: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://policycrm-dashbord.vercel.app",
    githubUrl: "https://github.com/charansridev/policyCRM-Dashbord",
    features: [
      "Daily policy premium payment ledger & overdue tracking",
      "One-click WhatsApp Web reminder link generator",
      "Recurring renewal calendar with automated status flags",
      "Client contact directory & policy history log",
    ],
    setup: [
      {
        step: "1. Clone repository",
        code: "git clone https://github.com/charansridev/policyCRM-Dashbord.git\ncd policyCRM-Dashbord",
      },
      {
        step: "2. Install dependencies & configure MongoDB",
        code: 'npm install\necho "MONGODB_URI=your_mongodb_uri" > .env',
      },
      {
        step: "3. Run app",
        code: "npm run dev",
      },
    ],
  },
];
