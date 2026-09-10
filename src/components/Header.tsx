import { Menu, X } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import { NAV_LINKS, RETRO_RUMBLE_URL, COMPANY } from '../data/content'
import { useScrollPosition, useMobileMenu } from '../hooks/useAnimations'

export default function Header() {
  const scrollY = useScrollPosition()
  const { isOpen, toggle, close } = useMobileMenu()
  const isScrolled = scrollY > 50

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navegação principal">
        <Link
          to="/"
          className="flex items-center gap-2 text-text-primary font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity"
          aria-label={`${COMPANY.name} — Página inicial`}
        >
          <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
            <span className="text-accent font-bold text-sm">S</span>
          </div>
          <span>{COMPANY.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 relative group ${
                  isActive
                    ? 'text-text-primary font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <a
            href={RETRO_RUMBLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg bg-retro/10 border border-retro/20 text-retro hover:bg-retro/20 hover:border-retro/40 transition-all duration-200 font-medium"
          >
            Jogar Retro Rumble
          </a>
        </div>

        <button
          onClick={toggle}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-bg-primary/95 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={close}
              className={({ isActive }) =>
                `text-lg py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-bg-card font-medium'
                    : 'text-text-secondary hover:bg-bg-card hover:text-text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={RETRO_RUMBLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg py-3 px-4 rounded-lg bg-retro/10 border border-retro/20 text-retro hover:bg-retro/20 transition-all duration-200 text-center mt-2 font-medium"
          >
            Jogar Retro Rumble
          </a>
        </div>
      </div>
    </header>
  )
}
