import { useInView } from '../../hooks/useAnimations'
import Section from '../ui/Section'
import { RETRO_RUMBLE_URL } from '../../data/content'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const { ref, isInView } = useInView(0.1)

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section className="py-[100px] sm:py-[140px]">
      <div className="max-w-[800px] mx-auto px-6">
        <div
          ref={ref}
          className={`relative rounded-2xl border border-border bg-bg-card overflow-hidden transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-[60px]" />
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Da ideia ao produto.
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Tecnologia desenvolvida com intenção. Soluções que evoluem, produtos que importam e experiências que conectam.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#tecnologia"
                onClick={(e) => { e.preventDefault(); scrollTo('#tecnologia') }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-bg-primary font-semibold text-sm hover:bg-accent-hover transition-all duration-200 hover:shadow-[0_0_20px_var(--color-accent-glow)]"
              >
                Conheça nossa tecnologia
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={RETRO_RUMBLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-retro/30 bg-retro/5 text-retro font-semibold text-sm hover:bg-retro/15 hover:border-retro/50 transition-all duration-200"
              >
                Jogar Retro Rumble
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
