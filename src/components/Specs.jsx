export default function Specs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10" id="specs">
      {/* Section Header */}
      <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
        <h2 className="font-headline-md text-headline-md text-white dot-matrix mb-4">SPECIFICATIONS</h2>
        <p className="font-label-caps text-label-caps text-white/40">HARDWARE & LOGIC STACK</p>
      </div>
      {/* Specs Grid */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12 border-b border-r border-white/10 glass-panel">
          <div className="flex justify-between items-start mb-8">
            <span className="font-label-caps text-label-caps text-white/40">01 // CORE_LOGIC</span>
            <span className="material-symbols-outlined text-white/20" data-icon="memory">memory</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center justify-between font-mono text-xs">
              <span className="text-white/60">PYTHON</span>
              <span className="text-white">OPTIMIZED</span>
            </li>
            <li className="flex items-center justify-between font-mono text-xs">
              <span className="text-white/60">C++</span>
              <span className="text-white">COMPILED</span>
            </li>
            <li className="flex items-center justify-between font-mono text-xs">
              <span className="text-white/60">JAVASCRIPT</span>
              <span className="text-white">DYNAMIC</span>
            </li>
          </ul>
        </div>
        <div className="p-8 md:p-12 border-b border-white/10 glass-panel">
          <div className="flex justify-between items-start mb-8">
            <span className="font-label-caps text-label-caps text-white/40">02 // FRAMEWORKS</span>
            <span className="material-symbols-outlined text-white/20" data-icon="hub">hub</span>
          </div>
          <div className="space-y-4">
            <p className="font-body-md text-body-md text-white">n8n // Google AI Studio // Microsoft Agent Framework</p>
            <div className="h-[1px] w-full bg-white/10"></div>
            <p className="font-label-caps text-[10px] text-white/40 italic">CONTINUOUS INTEGRATION ENABLED</p>
          </div>
        </div>
        <div className="p-8 md:p-12 md:col-span-2 glass-panel">
          <div className="flex justify-between items-start mb-8">
            <span className="font-label-caps text-label-caps text-white/40">03 // FOCUS_FIELDS</span>
            <span className="material-symbols-outlined text-white/20" data-icon="psychology">psychology</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 border border-white/20 rounded-full font-label-caps text-[10px] text-white">LARGE LANGUAGE MODELS</span>
            <span className="px-4 py-2 border border-white/20 rounded-full font-label-caps text-[10px] text-white">PROMPT ENGINEERING</span>
            <span className="px-4 py-2 border border-white/20 rounded-full font-label-caps text-[10px] text-white">AUTOMATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
