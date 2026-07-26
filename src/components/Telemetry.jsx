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
          <span className="material-symbols-outlined text-white/40 group-hover:text-white" data-icon="code">code</span>
        </a>
        <a 
          className="group flex items-center justify-between border-b border-white/10 pb-4" 
          href="https://www.linkedin.com/in/charansridev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-headline-md text-headline-md text-white group-hover:translate-x-4 transition-transform duration-300">LINKEDIN</span>
          <span className="material-symbols-outlined text-white/40 group-hover:text-white" data-icon="link">link</span>
        </a>
        <a 
          className="group flex items-center justify-between border-b border-white/10 pb-4" 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=charansridev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-headline-md text-headline-md text-secondary-container group-hover:translate-x-4 transition-transform duration-300">&gt; INITIATE_EMAIL</span>
          <span className="material-symbols-outlined text-secondary-container" data-icon="alternate_email">alternate_email</span>
        </a>
      </div>
    </section>
  );
}
