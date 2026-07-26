export default function Hero() {
  return (
    <section 
      className="relative min-h-[921px] flex flex-col justify-center px-8 md:px-32 border-b border-white/10" 
      id="init"
    >
      <div className="max-w-4xl space-y-8">
        <div className="flex items-center gap-3">
          <span className="status-dot"></span>
          <span className="font-label-caps text-label-caps text-white/60">SYSTEM_ACTIVE</span>
        </div>
        <h1 className="font-headline-xl text-[64px] md:text-[120px] text-white leading-none uppercase dot-matrix tracking-tighter">
          Charan<br />Sri Dev.
        </h1>
        <p className="font-body-lg text-body-lg text-white/80 max-w-xl">
          B.Tech AIML | Agentic AI & LLM Developer. Architecting autonomous intelligence and neural workflows.
        </p>
        <div className="pt-8">
          <button className="px-8 py-3 rounded-full border border-white text-white font-label-caps text-label-caps hover:bg-white/10 active:scale-[0.98] transition-all flex items-center gap-2 group">
            <span className="w-1.5 h-1.5 bg-secondary-container rounded-full group-active:bg-white transition-colors"></span>
            [ VIEW LOG ]
          </button>
        </div>
      </div>
      {/* Structural Grid Lines Decor */}
      <div className="absolute right-32 bottom-0 w-px h-32 bg-white/10 hidden md:block"></div>
    </section>
  );
}
