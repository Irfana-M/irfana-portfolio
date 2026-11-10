export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  highlights: string[]
  techStack: string[]
  liveUrl?: string
  githubUrl: string
  featured: boolean
}

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

export interface ApproachPillar {
  title: string
  description: string
  points: string[]
}

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'email'
}

export interface Profile {
  name: string
  role: string
  location: string
  badge: string
  headline: string
  bio: string[]
  education: {
    degree: string
    focus: string
  }
}

export interface ContactInfo {
  email: string
  github: string
  linkedin: string
  location: string
  availability: string
  resumeUrl: string
}


