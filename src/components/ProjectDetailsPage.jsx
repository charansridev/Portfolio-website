import React from 'react';

export default function ProjectDetailsPage({ project, onBack }) {
  if (!project) return null;

  return (
    <div className="min-h-screen bg-transparent text-on-background pt-8 pb-32 px-6 md:px-20 relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* Navigation / Return Bar (Header replacement for project page) */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10 font-mono text-xs">
          <button
            onClick={onBack}
            className="flex items-center gap-3 px-5 py-2.5 rounded border border-white/20 hover:border-[#E51912] bg-black/60 backdrop-blur-md hover:bg-[#E51912] text-white transition-all cursor-pointer group shadow-lg"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            RETURN TO RELEASES LOG
          </button>
          <div className="flex items-center gap-3 text-white/40 hidden sm:flex font-mono text-xs">
            <span>SYSTEM</span>
            <span>//</span>
            <span>RELEASES</span>
            <span>//</span>
            <span className="text-[#E51912] font-bold">{project.id}</span>
          </div>
        </div>

        {/* Hero Banner Header */}
        <div className="relative border border-white/15 bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-2xl overflow-hidden mb-12 shadow-[0_0_40px_rgba(255,255,255,0.02)]">
          <div className="absolute top-4 right-4 font-mono text-xs px-3 py-1 bg-[#E51912]/20 border border-[#E51912]/50 text-white rounded">
            ID: {project.id}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E51912] shadow-[0_0_10px_#E51912]"></span>
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              ACTIVE SPECIFICATION SHEET
            </span>
          </div>

          <h1 className="font-headline-xl text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="font-body-lg text-lg text-white/70 max-w-3xl leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1 bg-white/5 border border-white/15 font-mono text-xs text-white/80 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded border border-[#E51912] bg-[#E51912] hover:bg-transparent text-white font-label-caps text-xs flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(229,25,18,0.4)] decoration-none"
              >
                ACCESS LIVE DEMO
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded border border-white/30 hover:border-white text-white font-label-caps text-xs flex items-center gap-3 transition-all decoration-none"
              >
                VIEW SOURCE CODE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Two Column Layout: Key Features & Setup Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Key Features Column */}
          <div className="md:col-span-6 border border-white/15 bg-black/70 backdrop-blur-md p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <svg className="w-5 h-5 text-[#E51912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 012 2v1a2 2 0 002 2h3a2 2 0 012 2v3a2 2 0 01-2 2h-1a2 2 0 00-2 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-1a2 2 0 00-2-2H5a2 2 0 01-2-2v-3a2 2 0 012-2h1a2 2 0 002-2V6a2 2 0 012-2h3z" />
              </svg>
              <h2 className="font-headline-md text-xl text-white font-semibold">
                SYSTEM FEATURES
              </h2>
            </div>
            <ul className="space-y-4">
              {project.features?.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-[#E51912] text-sm mt-0.5">
                    ❯
                  </span>
                  <span className="font-body-md text-white/80 text-sm leading-relaxed">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Details / Tech Breakdown Column */}
          <div className="md:col-span-6 border border-white/15 bg-black/70 backdrop-blur-md p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <svg className="w-5 h-5 text-[#E51912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <h2 className="font-headline-md text-xl text-white font-semibold">
                TECH METRICS
              </h2>
            </div>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-white/40">SYSTEM ID:</span>
                <span className="text-white font-bold">{project.id}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-white/40">PROJECT STATUS:</span>
                <span className="text-[#E51912] font-bold">PRODUCTION_READY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-white/40">VERSION LOG:</span>
                <span className="text-white">3.0.1</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-white/40">PRIMARY REPO:</span>
                <span className="text-white/80 truncate max-w-[200px]">
                  {project.githubUrl}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Setup & Installation Section */}
        <div className="border border-white/15 bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-2xl mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <svg className="w-5 h-5 text-[#E51912]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h2 className="font-headline-md text-2xl text-white font-semibold">
              LOCAL SETUP & INSTALLATION GUIDE
            </h2>
          </div>

          <p className="font-body-md text-white/60 mb-8 text-sm">
            Follow these step-by-step terminal instructions to configure and execute this project in your local development environment:
          </p>

          <div className="space-y-6">
            {project.setup?.map((stepItem, idx) => (
              <div key={idx} className="border border-white/10 bg-black/90 rounded-lg p-5">
                <h4 className="font-mono text-sm text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#E51912]/20 border border-[#E51912] text-[#E51912] flex items-center justify-center text-xs">
                    {idx + 1}
                  </span>
                  {stepItem.step}
                </h4>
                <pre className="bg-[#121212] border border-white/10 rounded p-4 font-mono text-xs text-white/90 overflow-x-auto whitespace-pre">
                  <code>{stepItem.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="flex justify-center pt-8 border-t border-white/10">
          <button
            onClick={onBack}
            className="px-10 py-4 rounded border border-white/30 hover:border-[#E51912] bg-black/60 hover:bg-[#E51912] text-white font-label-caps text-xs transition-all cursor-pointer flex items-center gap-3 group shadow-lg"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO ALL PROJECTS LOG
          </button>
        </div>
      </div>
    </div>
  );
}
