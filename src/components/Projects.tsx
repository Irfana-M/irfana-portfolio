import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { projectsData } from '../data/portfolioData'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="border-t border-line/60 py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-accent">03.</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Featured Projects
          </h2>
          <div className="ml-4 h-px flex-1 bg-line" />
        </div>

        <p className="mt-4 max-w-2xl text-base text-body">
          Selected full-stack and web development projects demonstrating practical experience with React, TypeScript, Node.js, and database integrations.
        </p>

        {/* Project Cards Stack */}
        <div className="mt-10 space-y-8">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="rounded-xl border border-line bg-surface p-6 transition-all duration-200 hover:border-line-light md:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-accent">
                      0{index + 1}.
                    </span>
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-secondary">
                    {project.tagline}
                  </p>
                </div>

                {/* Project Links (Live Demo & GitHub) */}
                <div className="flex items-center gap-3 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line-light bg-surface px-3.5 py-1.5 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg
                      className="h-3.5 w-3.5 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Project Description */}
              <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                {project.description}
              </p>

              {/* Key Features / Highlights */}
              <div className="mt-5 rounded-lg border border-line/60 bg-canvas/60 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Key Implementations
                </h4>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-body sm:text-sm">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-line-light bg-surface-hover px-2.5 py-1 font-mono text-xs font-medium text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

