export default function Releases() {
  return (
    <section className="p-8 md:p-32 border-b border-white/10" id="releases">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <h2 className="font-headline-md text-headline-md text-white dot-matrix">
            RELEASES
          </h2>
          <p className="font-label-caps text-label-caps text-white/40">
            DEPLOYMENT LOG // 2024 - 2026
          </p>
        </div>
        <span className="hidden md:block font-mono text-[10px] text-white/20 tracking-[0.5em]">
          SYSTEM_VERSION_3.0.1
        </span>
      </div>

      {/* Bento Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Project 1: Burnout Risk Analyzer */}
        <div className="md:col-span-12 group border border-white/10 glass-panel overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">
            #001
          </div>
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="status-dot"></span>
                <h3 className="font-headline-md text-headline-md text-white leading-tight">
                  Burnout Risk Analyzer
                </h3>
              </div>
              <p className="font-body-md text-body-md text-white/60 mb-8">
                Task-Level Employee Burnout Risk Detection System built for the
                Xebia Hackathon at Takshila University. Evaluates task patterns
                and generates AI-powered preventive recommendations.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://task-level-employee-burn-risk-detection-39l2.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full border border-white/20 text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center gap-4 group/btn decoration-none inline-flex"
                >
                  ACCESS
                  <span
                    className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
                <a
                  href="https://github.com/charansridev/Task-Level-Employee-Burn-Risk-Detection-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full border border-white/20 text-white/60 hover:text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center gap-4 group/btn decoration-none inline-flex"
                >
                  ACCESS CODE
                  <span
                    className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                    data-icon="code"
                  >
                    code
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10 bg-surface-container p-4 md:p-6 overflow-hidden">
              <img
                alt="Task-Level Employee Burnout Risk Detection Interface"
                className="w-full h-auto object-contain opacity-85 group-hover:scale-105 transition-transform duration-700 rounded-lg"
                src="/risk_intel_dashboard.png"
              />
            </div>
          </div>
        </div>

        {/* Project 2: NewsTrack */}
        <div className="md:col-span-12 group border border-white/10 glass-panel overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">
            #002
          </div>
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="status-dot"></span>
                <h3 className="font-headline-md text-headline-md text-white leading-tight">
                  NewsTrack — Newspaper Distribution Tracking System
                </h3>
              </div>
              <p className="font-body-md text-body-md text-white/60 mb-8">
                Full-stack supply chain & distribution management platform for
                newspaper publishers, hubs, and vendors. Features real-time
                websocket tracking, inventory management, driver dispatch, and
                automated issue resolution. Built with React, Vite, TypeScript,
                Tailwind CSS, FastAPI, and SQLAlchemy.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/charansridev/NewsTrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full border border-white/20 text-white/60 hover:text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center gap-4 group/btn decoration-none inline-flex"
                >
                  ACCESS CODE
                  <span
                    className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                    data-icon="code"
                  >
                    code
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10 bg-surface-container p-4 md:p-6 overflow-hidden">
              <img
                alt="NewsTrack Newspaper Distribution Tracking Dashboard Interface"
                className="w-full h-auto object-contain opacity-85 group-hover:scale-105 transition-transform duration-700 rounded-lg"
                src="/news_track_dashboard.png"
              />
            </div>
          </div>
        </div>

        {/* Project 3: N8N Neural Workflows */}
        <div className="md:col-span-12 group border border-white/10 glass-panel p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">
            #003
          </div>
          <div className="flex-1">
            <h3 className="font-headline-md text-headline-md text-white mb-4">
              N8N Neural Workflows & Automations
            </h3>
            <p className="font-body-md text-body-md text-white/60 max-w-3xl mb-6">
              A comprehensive suite of 16 specialized autonomous AI workflows.
              Includes Telegram voice-to-invoice agents, AI shopping assistants,
              Groq Whisper audio summarizers, Suno music generators, and
              automated LinkedIn job search engines powered by Google Gemini,
              LangChain, and n8n.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40">
                16 WORKFLOWS
              </span>
              <span className="px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40">
                GROQ WHISPER
              </span>
              <span className="px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40">
                GEMINI 2.5 FLASH
              </span>
              <span className="px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40">
                MURF.AI / SUNO API
              </span>
            </div>
          </div>
          <div className="w-full md:w-auto flex gap-4 flex-wrap">
            <a
              href="https://github.com/charansridev/N8N-AUTOMATIONS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-12 py-4 rounded-full border border-white/20 font-label-caps text-label-caps text-white hover:border-white transition-all flex items-center justify-center gap-4 group/btn decoration-none inline-flex"
            >
              ACCESS REPO
              <span
                className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Project 4: DrishtiFi (No Image) */}
        <div className="md:col-span-12 group border border-white/10 glass-panel p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">
            #004
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="status-dot"></span>
              <h3 className="font-headline-md text-headline-md text-white leading-tight">
                DrishtiFi — AI Digital Credit-Readiness Assessment for Offline MSMEs
              </h3>
            </div>
            <p className="font-body-md text-body-md text-white/60 max-w-3xl mb-6">
              Multimodal AI-powered credit assessment platform built for the
              OpenAI Academy x NxtWave Regional Buildathon. Evaluates physical
              shop inventory density and handwritten ledger photos (Khaata) to
              generate bank-grade digital credit-readiness reports and
              micro-loan recommendations for unbanked informal MSMEs. Built with
              React 19, TypeScript, Vite, Tailwind CSS, and Google Gemini 2.5
              Multimodal AI.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40">
                REACT 19
              </span>
              <span className="px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40">
                GEMINI 2.5 MULTIMODAL
              </span>
              <span className="px-3 py-1 border border-white/10 rounded-full font-mono text-[10px] text-white/40">
                OPENAI BUILDATHON
              </span>
            </div>
          </div>
          <div className="w-full md:w-auto flex gap-4 flex-wrap">
            <a
              href="https://drishtifi.ai.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center justify-center gap-4 group/btn decoration-none inline-flex"
            >
              LIVE DEMO
              <span
                className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
            </a>
            <a
              href="https://github.com/charansridev/DrishtiFi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 rounded-full border border-white/20 text-white/60 hover:text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center justify-center gap-4 group/btn decoration-none inline-flex"
            >
              ACCESS CODE
              <span
                className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                data-icon="code"
              >
                code
              </span>
            </a>
          </div>
        </div>

        {/* Project 5: PolicyPay (Side-by-side) */}
        <div className="md:col-span-6 group border border-white/10 glass-panel p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">
            #005
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="status-dot"></span>
              <h3 className="font-headline-md text-headline-md text-white leading-tight">
                PolicyPay — Life Insurance Daily Payment CRM
              </h3>
            </div>
            <p className="font-body-md text-body-md text-white/60 mb-8">
              Open-source full-stack CRM built for life insurance agents to
              streamline daily premium payment tracking. Features one-click
              WhatsApp client reminders, smart monthly/annual recurring
              renewals, deferred payment forwarding, and real-time collection
              analytics. Built with React 19, Vite, Tailwind CSS, Node.js,
              Express, and MongoDB.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap mt-4">
            <a
              href="https://policy-crm-dashbord-hazel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center gap-4 group/btn decoration-none inline-flex"
            >
              LIVE DEMO
              <span
                className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                data-icon="open_in_new"
              >
                open_in_new
              </span>
            </a>
            <a
              href="https://github.com/charansridev/policyCRM-Dashbord"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white/60 hover:text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center gap-4 group/btn decoration-none inline-flex"
            >
              ACCESS CODE
              <span
                className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                data-icon="code"
              >
                code
              </span>
            </a>
          </div>
        </div>

        {/* Project 6: Voice to Invoice (Side-by-side) */}
        <div className="md:col-span-6 group border border-white/10 glass-panel p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 z-10">
            #006
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="status-dot"></span>
              <h3 className="font-headline-md text-headline-md text-white leading-tight">
                Voice to Invoice — AI-Powered Telegram Billing Bot
              </h3>
            </div>
            <p className="font-body-md text-body-md text-white/60 mb-8">
              Automated AI-powered billing solution for small merchants and
              local shop owners. Converts voice notes sent on Telegram into
              structured billing data using Google Gemini AI, renders custom
              HTML invoices, and generates instant downloadable PDF documents
              delivered back in chat. Built with n8n, Google Gemini 2.5,
              Telegram Bot API, JavaScript, and PDFShift.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap mt-4">
            <a
              href="https://github.com/charansridev/voice-to-invoice"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white/60 hover:text-white font-label-caps text-label-caps hover:border-white transition-all flex items-center gap-4 group/btn decoration-none inline-flex"
            >
              ACCESS CODE
              <span
                className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform"
                data-icon="code"
              >
                code
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
