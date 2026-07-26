export default function Footer() {
  return (
    <footer className="w-full py-8 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-black border-t border-white/10 relative z-10">
      <div className="text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} CSD // ALL_SYSTEMS_OPERATIONAL
      </div>
      <div className="flex gap-8">
        <a className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="https://github.com/charansridev" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="https://www.linkedin.com/in/charansridev" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors" href="#">SOURCE</a>
      </div>
    </footer>
  );
}
