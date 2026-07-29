export default function Hero() {
  return (
    <section
      className="relative min-h-[921px] flex flex-col justify-center px-8 md:px-32 border-b border-white/10"
      id="init"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative order-2 lg:order-1">
          <div className="relative border border-white/20 p-2 rounded-2xl bg-black/40 backdrop-blur-sm group hover:border-white/40 transition-colors w-full max-w-[400px]">
            {/* Corner accent decorations */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white"></div>

            <img
              src="/nothing_hero_portrait.png"
              alt="Charan Sri Dev - Nothing Theme Portrait"
              className="w-full h-auto object-cover rounded-xl grayscale contrast-125 filter"
            />
            <div className="mt-3 flex justify-between items-center px-2 font-mono text-[10px] text-white/50 tracking-wider">
              <span>[IMG_SRC // NOTHING_OS]</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                LIVE_FEED
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <span className="status-dot"></span>
            <span className="font-label-caps text-label-caps text-white/60">
              SYSTEM_ACTIVE
            </span>
          </div>
          <h1 className="font-headline-xl text-[64px] md:text-[100px] xl:text-[120px] text-white leading-none uppercase dot-matrix tracking-tighter">
            Charan
            <br />
            Sri Dev.
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
            | B.Tech CSE 2nd Year Student from NIAT Takshashila University |{" "}
            <br /> | Agentic AI & ML Developer | <br /> | Architecting
            autonomous AI Agents and workflow | <br /> | Trying to solve
            Realworld Problems with Software |
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 rounded-full border border-white text-white font-label-caps text-label-caps hover:bg-white/10 active:scale-[0.98] transition-all flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 bg-secondary-container rounded-full group-active:bg-white transition-colors"></span>
              [ VIEW LOG ]
            </button>
          </div>
        </div>
      </div>
      {/* Structural Grid Lines Decor */}
      <div className="absolute right-32 bottom-0 w-px h-32 bg-white/10 hidden md:block"></div>
    </section>
  );
}
