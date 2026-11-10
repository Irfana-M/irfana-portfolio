import { Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react'
import { contactData, profileData } from '../data/portfolioData'

export default function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="border-t border-line/60 pt-20 pb-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-accent">05.</span>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Get In Touch
          </h2>
          <div className="ml-4 h-px flex-1 bg-line" />
        </div>

        {/* Short Professional Invitation */}
        <div className="mt-8 max-w-2xl">
          <p className="text-base leading-relaxed text-body sm:text-lg">
            I am actively seeking full-time Full-Stack Web Developer opportunities across the UAE. Whether you have an open role, questions about my projects, or would like to discuss potential collaboration, I would welcome the conversation.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-light">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">Email Address</h3>
              <p className="mt-1 font-mono text-xs text-muted">
                Direct inquiry & correspondence
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-line/60">
              <a
                href={`mailto:${contactData.email}`}
                className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>{contactData.email}</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-light">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.85 18.5V10.1H5.08v8.4h2.77z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">LinkedIn</h3>
              <p className="mt-1 font-mono text-xs text-muted">
                Professional profile & networking
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-line/60">
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>linkedin.com/in/irfana-riyas</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-light">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">GitHub</h3>
              <p className="mt-1 font-mono text-xs text-muted">
                Source repositories & commit history
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-line/60">
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-accent hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>github.com/Irfana-M</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Availability Summary Banner */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-line bg-surface p-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">
                Location: <span className="font-normal text-body">{contactData.location}</span>
              </p>
              <p className="text-xs text-muted">
                {contactData.availability}
              </p>
            </div>
          </div>

          <a
            href={`mailto:${contactData.email}?subject=Full-Stack%20Developer%20Opportunity`}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Send Email
          </a>
        </div>

        {/* Simple Footer with Dynamic Year */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </footer>
      </div>
    </section>
  )
}

