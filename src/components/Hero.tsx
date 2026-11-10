import { Download, ArrowDown, MapPin, Mail } from 'lucide-react'
import { profileData, contactData, socialLinks } from '../data/portfolioData'

export default function Hero() {
  // Render accessible, clean SVG icons for brand links
  const renderSocialIcon = (icon: 'github' | 'linkedin' | 'email') => {
    switch (icon) {
      case 'github':
        return (
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.85 18.5V10.1H5.08v8.4h2.77z" />
          </svg>
        )
      case 'email':
        return <Mail className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
    >
      {/* Subtle background glow effect using brand teal (low opacity, non-distracting) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono">{profileData.badge}</span>
        </div>

        {/* Name and Professional Role */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-accent">{profileData.name}</span>
        </h1>

        <p className="mt-3 font-mono text-lg font-medium text-accent-secondary sm:text-xl">
          {profileData.role}
        </p>

        {/* Location Indicator */}
        <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-4 w-4 text-accent" />
          <span>{profileData.location}</span>
        </div>

        {/* Value Proposition */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          {profileData.headline}
        </p>

        {/* Action Buttons (Download CV, View Projects, Contact) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={contactData.resumeUrl}
            download="Irfana_M_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-accent/20 transition-all hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Download className="h-4 w-4" />
            <span>Download CV</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-line-light bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>View Projects</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-line-light bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Quick-Links */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-all hover:border-accent hover:text-accent hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {renderSocialIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
