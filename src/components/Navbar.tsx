import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navigationLinks, profileData, contactData } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track scroll position to enhance navbar border and background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-close mobile drawer on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1120]/90 backdrop-blur-md border-b border-line shadow-lg shadow-black/20'
          : 'bg-[#0b1120]/60 backdrop-blur-sm border-b border-line/40'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent-soft font-mono text-sm font-bold text-accent group-hover:border-accent">
            IM
          </span>
          <span className="text-ink">
            {profileData.name}
            <span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contactData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-line-light px-3.5 py-1.5 text-xs font-medium text-ink transition-all hover:border-accent hover:text-accent"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-1.5 text-xs font-semibold text-slate-950 transition-all hover:bg-accent-strong"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-light bg-surface text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 top-[65px] z-40 bg-[#0b1120]/95 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex h-full flex-col justify-between px-6 py-8">
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col gap-5"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Navigation
              </span>
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-ink transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-6 border-t border-line">
              <a
                href={contactData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-line-light bg-surface py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Download Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-lg bg-accent py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-accent-strong"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

