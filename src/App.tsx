import Header from './components/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Technology from './components/sections/Technology'
import Ecosystem from './components/sections/Ecosystem'
import TechGames from './components/sections/TechGames'
import RetroRumble from './components/sections/RetroRumble'
import Vision from './components/sections/Vision'
import CTA from './components/sections/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Technology />
        <Ecosystem />
        <TechGames />
        <RetroRumble />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
