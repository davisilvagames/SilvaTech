import { Code, Box, Sparkles, Gamepad2 } from 'lucide-react'
import Section from '../ui/Section'
import { AREAS } from '../../data/content'
import { useInView } from '../../hooks/useAnimations'

const iconMap = {
  code: Code,
  box: Box,
  sparkles: Sparkles,
  'gamepad-2': Gamepad2,
}

export default function Technology() {
  return (
    <Section id="tecnologia" className="py-[120px] sm:py-[180px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20 sm:mb-24">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-6 block">
            Áreas de atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            Tecnologia que gera impacto.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Atuamos em diferentes frentes da tecnologia, sempre com foco em construir produtos e experiências que importam.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
          {AREAS.map((area, i) => (
            <AreaCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function AreaCard({ area, index }: { area: typeof AREAS[number]; index: number }) {
  const { ref, isInView } = useInView(0.1)
  const Icon = iconMap[area.icon]

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl border border-border bg-bg-card p-8 sm:p-10 hover:bg-bg-card-hover hover:border-border-light transition-all duration-300 hover:-translate-y-0.5 cursor-default ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
        <Icon size={22} className="text-accent" />
      </div>
      <h3 className="text-text-primary font-semibold text-lg mb-4">{area.title}</h3>
      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{area.description}</p>
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
