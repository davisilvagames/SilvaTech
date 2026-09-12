import { useInView } from '../../hooks/useAnimations'
import Section from '../ui/Section'
import { RETRO_RUMBLE_URL } from '../../data/content'

export default function TechGames() {
  const { ref, isInView } = useInView(0.1)

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section id="techgames" className="py-[100px] sm:py-[140px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className={`relative rounded-2xl border border-secondary/20 bg-secondary/[0.03] overflow-hidden transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-retro/5 rounded-full blur-[60px]" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
                  <path d="M8 15l-2 3M16 15l2 3" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">TechGames</h2>
                <p className="text-secondary text-xs font-medium tracking-wider uppercase">Uma divisão SilvaTech</p>
              </div>
            </div>

            <p className="text-text-secondary text-lg max-w-2xl mb-10 leading-relaxed">
              Games desenvolvidos com tecnologia, criatividade e identidade. A TechGames é a divisão dedicada ao desenvolvimento de jogos e experiências interativas que conectam pessoas através do entretenimento digital.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { label: 'Games', desc: 'Jogos com identidade própria' },
                { label: 'Experiências interativas', desc: 'Interfaces que engajam' },
                { label: 'Entretenimento digital', desc: 'Diversão com tecnologia' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-bg-card/50 p-5 hover:border-secondary/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h3 className="text-text-primary font-medium text-sm mb-1.5">{item.label}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={RETRO_RUMBLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-white font-medium text-sm hover:bg-secondary/90 transition-all duration-200"
              >
                Conhecer Retro Rumble
              </a>
              <a
                href="#retro-rumble"
                onClick={(e) => { e.preventDefault(); scrollTo('#retro-rumble') }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-text-secondary font-medium text-sm hover:bg-bg-card hover:text-text-primary transition-all duration-200"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
