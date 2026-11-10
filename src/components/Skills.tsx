import { Layout, Server, Database, Cpu, Code2 } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Frontend Development':
        return <Layout className="h-5 w-5 text-accent" />
      case 'Backend & APIs':
        return <Server className="h-5 w-5 text-accent" />
      case 'Databases':
        return <Database className="h-5 w-5 text-accent" />
      case 'Tools, Cloud & Integrations':
        return <Cpu className="h-5 w-5 text-accent" />
      case 'Engineering Foundations':
        return <Code2 className="h-5 w-5 text-accent" />
      default:
        return <Code2 className="h-5 w-5 text-accent" />
    }
  }

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="border-t border-line/60 py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-accent">02.</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Technical Skills
          </h2>
          <div className="ml-4 h-px flex-1 bg-line" />
        </div>

        <p className="mt-4 max-w-2xl text-base text-body">
          Categorized technical skills based on hands-on project experience, full-stack application development, and computer science education.
        </p>

        {/* Skill Categories Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-all duration-200 hover:border-line-light hover:bg-surface-hover hover:shadow-md hover:shadow-black/20"
            >
              <div>
                {/* Category Header with Icon */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-base font-semibold text-ink">
                    {category.title}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-accent-border/50 bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent transition-colors hover:border-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

