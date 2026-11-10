import { GraduationCap, MapPin, Code2 } from 'lucide-react'
import { profileData } from '../data/portfolioData'

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="border-t border-line/60 py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-accent">01.</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            About Me
          </h2>
          <div className="ml-4 h-px flex-1 bg-line" />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Main Narrative */}
          <div className="space-y-4 text-base leading-relaxed text-body lg:col-span-7">
            {profileData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p className="pt-2 text-sm text-muted">
              I am focused on writing clean, readable code and delivering dependable full-stack web applications that solve real-world problems.
            </p>
          </div>

          {/* Quick Profile Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {/* Degree Card */}
            <div className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-light">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Education</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {profileData.education.degree}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {profileData.education.focus}
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Stack Card */}
            <div className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-light">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Technical Path</h3>
                  <p className="mt-1 text-sm text-body">
                    PHP & MySQL foundation transitioned into full-stack modern JavaScript, TypeScript, and MERN stack development.
                  </p>
                </div>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-light">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">Location & Availability</h3>
                  <p className="mt-1 text-sm text-body">
                    Based in <strong className="text-ink">{profileData.location}</strong>. Open to full-time opportunities across the UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

