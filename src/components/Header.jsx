import { useState, useEffect } from 'react';

export default function Header() {
  const [activeHash, setActiveHash] = useState('#init');

  // Track scroll position to update active hash using IntersectionObserver
  useEffect(() => {
    const sections = ['init', 'specs', 'releases', 'telemetry'];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle portion of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    // Fallback: Listen to click location hash change events
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const getLinkClass = (hash) => {
    const base = "font-mono uppercase tracking-widest text-xs transition-colors pb-1 border-b";
    const active = "text-white border-white";
    const inactive = "text-white/40 border-transparent hover:text-white/80";
    return `${base} ${activeHash === hash ? active : inactive}`;
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="font-mono font-bold text-white tracking-tighter">
        CHARAN_SRI_DEV // V1.0
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <a className={getLinkClass('#init')} href="#init">INIT</a>
        <a className={getLinkClass('#specs')} href="#specs">SPECS</a>
        <a className={getLinkClass('#releases')} href="#releases">RELEASES</a>
        <a className={getLinkClass('#telemetry')} href="#telemetry">TELEMETRY</a>
      </nav>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-white text-sm" data-icon="terminal">
          terminal
        </span>
      </div>
    </header>
  );
}
