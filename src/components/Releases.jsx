import { projects } from '../data/projectsData';

export default function Releases({ onSelectProject }) {
  return (
    <section className="p-8 md:p-32 border-b border-white/10" id="releases">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onSelect, index }) {
  const accentColors = [
    '#E51912', // red
    '#00D4AA', // teal
    '#F5A623', // amber
    '#7C5CFF', // purple
    '#FF6B35', // orange
    '#00B4D8', // cyan
  ];
  const accent = accentColors[index % accentColors.length];

  return (
    <article
      className="group relative bg-surface rounded-2xl overflow-hidden border border-white/5
        transition-all duration-500 ease-out
        hover:border-white/15 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]
        hover:-translate-y-1.5
        active:scale-[0.985] active:transition-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E51912] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ '--accent': accent }} />
      
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-bottom" style={{ '--accent': accent }} />

      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-[10px] text-white/30 tracking-wider uppercase">
            {project.id}
          </span>
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_var(--accent)]" style={{ '--accent': accent }} />
        </div>

        <h3 className="font-headline-md text-xl text-white font-medium leading-snug mb-3
          group-hover:text-[var(--accent)] transition-colors duration-300"
          style={{ '--accent': accent }}>
          {project.title}
        </h3>

        <p className="font-body-md text-sm text-white/55 line-clamp-3 mb-6 flex-1
          group-hover:text-white/75 transition-colors duration-300 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/[0.02] border border-white/8 font-mono text-[10px] text-white/45 rounded-full
                group-hover:border-[var(--accent)]/40 group-hover:text-white/90 group-hover:bg-[var(--accent)]/10
                transition-all duration-300"
              style={{ '--accent': accent }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 font-mono text-[10px] text-white/25 flex items-center">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-white/5">
          <button
            onClick={() => onSelect(project)}
            className="w-full py-3 px-4 rounded-xl bg-white/[0.02] border border-white/8 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10
              font-label-caps text-sm text-white/70 hover:text-white
              transition-all duration-300
              flex items-center justify-center gap-2
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            style={{ '--accent': accent }}
          >
            VIEW PROJECT
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[var(--accent)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ '--accent': accent }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}