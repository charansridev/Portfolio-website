import { projects } from '../data/projectsData';

export default function Releases({ onSelectProject }) {
  return (
    <section className="p-8 md:p-32 border-b border-white/10" id="releases">
      {/* Header */}
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

      {/* Vertical ID Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          /* Outer Glow Wrapper (.card structure with site design colors) */
          <div
            key={project.id}
            className="group relative p-[2px] rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-[#E51912]/40 transition-all duration-300 hover:from-white hover:via-[#E51912]/80 hover:to-white hover:shadow-[0_0_30px_2px_rgba(229,25,18,0.4)]"
          >
            {/* Surrounding Glowing Dots around the card */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#E51912] group-hover:shadow-[0_0_12px_#E51912] group-hover:scale-125 transition-all duration-300 z-20 pointer-events-none"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#E51912] group-hover:shadow-[0_0_12px_#E51912] group-hover:scale-125 transition-all duration-300 z-20 pointer-events-none"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#E51912] group-hover:shadow-[0_0_12px_#E51912] group-hover:scale-125 transition-all duration-300 z-20 pointer-events-none"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#E51912] group-hover:shadow-[0_0_12px_#E51912] group-hover:scale-125 transition-all duration-300 z-20 pointer-events-none"></div>

            {/* Inner Content Card (.card2 structure scaling on hover) */}
            <div className="w-full h-full bg-[#0c0c0c] group-hover:scale-[0.985] rounded-[14px] p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden">
              {/* Corner Reticles (+) */}
              <div className="absolute top-2.5 left-3 text-[10px] font-mono text-white/30 group-hover:text-[#E51912] group-hover:drop-shadow-[0_0_6px_#E51912] transition-colors">
                +
              </div>
              <div className="absolute top-2.5 right-3 text-[10px] font-mono text-white/30 group-hover:text-[#E51912] group-hover:drop-shadow-[0_0_6px_#E51912] transition-colors">
                +
              </div>
              <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-white/30 group-hover:text-[#E51912] group-hover:drop-shadow-[0_0_6px_#E51912] transition-colors">
                +
              </div>
              <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-white/30 group-hover:text-[#E51912] group-hover:drop-shadow-[0_0_6px_#E51912] transition-colors">
                +
              </div>

              {/* Ambient Hover Matrix Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E51912]/[0.06] via-transparent to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div>
                {/* ID Card Top Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E51912] shadow-[0_0_8px_#E51912] group-hover:animate-pulse"></span>
                    <span className="font-mono text-[10px] text-white/40 group-hover:text-white/80 tracking-wider">
                      PROJ_PASS // ID
                    </span>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-white/40 group-hover:text-white tracking-widest">
                    {project.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline-md text-xl text-white font-semibold leading-snug mb-3 group-hover:text-[#E51912] transition-colors">
                  {project.title}
                </h3>

                {/* Truncated Description */}
                <p className="font-body-md text-sm text-white/60 line-clamp-3 mb-6 group-hover:text-white/80 transition-colors leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-white/[0.03] border border-white/10 font-mono text-[10px] text-white/50 rounded group-hover:border-[#E51912]/50 group-hover:text-white/90 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 font-mono text-[10px] text-white/30">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 py-2.5 px-4 rounded border border-white/20 hover:border-[#E51912] bg-white/5 hover:bg-[#E51912] hover:text-white font-label-caps text-xs text-white transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-none hover:shadow-[0_0_15px_rgba(229,25,18,0.5)]"
                >
                  MORE DETAILS
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
