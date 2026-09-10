import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Tecnologia from './pages/Tecnologia'
import TechGamesPage from './pages/TechGamesPage'
import RetroRumblePage from './pages/RetroRumblePage'
import VisaoPage from './pages/VisaoPage'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/techgames" element={<TechGamesPage />} />
          <Route path="/retro-rumble" element={<RetroRumblePage />} />
          <Route path="/visao" element={<VisaoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
