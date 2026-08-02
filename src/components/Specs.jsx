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
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
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
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
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
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
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
