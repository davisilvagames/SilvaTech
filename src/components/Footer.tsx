import { Link } from 'react-router-dom'
import { COMPANY, RETRO_RUMBLE_URL } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-secondary" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">S</span>
              </div>
              <span className="text-text-primary font-semibold text-lg">{COMPANY.name}</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md">
              {COMPANY.description}
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">Navegação</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Empresa', path: '/empresa' },
                { label: 'Tecnologia', path: '/tecnologia' },
                { label: 'TechGames', path: '/techgames' },
                { label: 'Retro Rumble', path: '/retro-rumble' },
                { label: 'Visão', path: '/visao' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={RETRO_RUMBLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200"
                >
                  Retro Rumble
                </a>
              </li>
              <li>
                <span className="text-text-muted text-sm">Novos produtos em breve</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p className="text-text-muted text-xs">
            TechGames &mdash; uma divisão {COMPANY.name}.
          </p>
        </div>
      </div>
    </footer>
  )
}
