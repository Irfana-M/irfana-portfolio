import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Approach from './components/Approach'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-canvas text-body selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Approach />
        <Contact />
      </main>
    </div>
  )
}

export default App








