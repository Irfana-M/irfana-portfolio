import { Layers, CheckSquare, ShieldCheck, Smartphone, CheckCircle2 } from 'lucide-react'
import { approachPillars } from '../data/portfolioData'

export default function Approach() {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="h-5 w-5 text-accent" />
      case 1:
        return <CheckSquare className="h-5 w-5 text-accent" />
      case 2:
        return <ShieldCheck className="h-5 w-5 text-accent" />
      case 3:
        return <Smartphone className="h-5 w-5 text-accent" />
      default:
        return <Layers className="h-5 w-5 text-accent" />
    }
  }

  return (
    <section
      id="approach"
      aria-label="Development Approach"
      className="border-t border-line/60 py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-accent">04.</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            How I Build
          </h2>
          <div className="ml-4 h-px flex-1 bg-line" />
        </div>

        <p className="mt-4 max-w-2xl text-base text-body">
          My development workflow focuses on clear planning, reliable typing, essential security practices, and responsive interfaces.
        </p>

        {/* 2-Column Responsive Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {approachPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-all duration-200 hover:border-line-light hover:bg-surface-hover hover:shadow-md hover:shadow-black/20 md:p-7"
            >
              <div>
                {/* Header with Icon and Step Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft">
                    {getPillarIcon(index)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-accent">
                    PILLAR 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-ink">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-body">
                  {pillar.description}
                </p>

                {/* Practical Points */}
                <ul className="mt-5 space-y-2.5 border-t border-line/60 pt-4 text-xs leading-relaxed text-muted sm:text-sm">
                  {pillar.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-body">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

