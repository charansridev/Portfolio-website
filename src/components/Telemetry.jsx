export default function Telemetry() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[614px]" id="telemetry">
      <div className="p-8 md:p-32 border-r border-white/10 flex flex-col justify-center">
        <h2 className="font-headline-xl text-headline-xl text-white dot-matrix mb-8">Establish Connection.</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="status-dot"></span>
            <p className="font-mono text-xs text-white/40">UPLINK_READY</p>
          </div>
          <p className="font-body-md text-body-md text-white/60">Awaiting transmission from remote sector. Interface active for collaboration.</p>
        </div>
      </div>
      <div className="p-8 md:p-32 flex flex-col justify-center space-y-12 bg-surface-container-lowest">
        <a 
          className="group flex items-center justify-between border-b border-white/10 pb-4" 
          href="https://github.com/charansridev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-headline-md text-headline-md text-white group-hover:translate-x-4 transition-transform duration-300">GITHUB</span>
          <svg className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </a>
        <a 
          className="group flex items-center justify-between border-b border-white/10 pb-4" 
          href="https://www.linkedin.com/in/charansridev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-headline-md text-headline-md text-white group-hover:translate-x-4 transition-transform duration-300">LINKEDIN</span>
          <svg className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </a>
        <a 
          className="group flex items-center justify-between border-b border-white/10 pb-4" 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=charansridev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-headline-md text-headline-md text-secondary-container group-hover:translate-x-4 transition-transform duration-300">&gt; INITIATE_EMAIL</span>
          <svg className="w-6 h-6 text-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
