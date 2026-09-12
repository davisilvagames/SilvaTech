import { useInView } from '../../hooks/useAnimations'
import Section from '../ui/Section'
import { ChevronDown } from 'lucide-react'

export default function Ecosystem() {
  const { ref, isInView } = useInView(0.1)

  return (
    <Section id="ecossistema" className="py-[100px] sm:py-[140px]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-5 block">
            Ecossistema
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Uma estrutura pensada para crescer.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            A empresa opera como um ecossistema tecnológico, com cada camada adicionando valor ao conjunto.
          </p>
        </div>

        <div ref={ref} className="flex flex-col items-center gap-0">
          <EcosystemNode
            title="SilvaTech"
            subtitle="Empresa principal"
            items={['Tecnologia', 'Produtos', 'Inovação']}
            color="accent"
            isInView={isInView}
            delay={0}
          />

          <div className={`flex flex-col items-center transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <ChevronDown size={24} className="text-text-muted my-3" />
            <div className="w-px h-5 bg-border" />
            <ChevronDown size={24} className="text-text-muted my-3" />
          </div>

          <EcosystemNode
            title="TechGames"
            subtitle="Divisão de games"
            items={['Games', 'Experiências interativas', 'Entretenimento digital']}
            color="secondary"
            isInView={isInView}
            delay={400}
          />

          <div className={`flex flex-col items-center transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <ChevronDown size={24} className="text-text-muted my-3" />
            <div className="w-px h-5 bg-border" />
            <ChevronDown size={24} className="text-text-muted my-3" />
          </div>

          <EcosystemNode
            title="Retro Rumble"
            subtitle="Produto / Jogo"
            items={['Experiência de jogo', 'Competição', 'Nostalgia']}
            color="retro"
            isInView={isInView}
            delay={800}
          />
        </div>
      </div>
    </Section>
  )
}

function EcosystemNode({
  title,
  subtitle,
  items,
  color,
  isInView,
  delay,
}: {
  title: string
  subtitle: string
  items: string[]
  color: 'accent' | 'secondary' | 'retro'
  isInView: boolean
  delay: number
}) {
  const colorClasses = {
    accent: {
      border: 'border-accent/30',
      bg: 'bg-accent/5',
      glow: 'shadow-[0_0_30px_var(--color-accent-dim)]',
      text: 'text-accent',
      dot: 'bg-accent',
    },
    secondary: {
      border: 'border-secondary/30',
      bg: 'bg-secondary/5',
      glow: 'shadow-[0_0_30px_var(--color-secondary-dim)]',
      text: 'text-secondary',
      dot: 'bg-secondary',
    },
    retro: {
      border: 'border-retro/30',
      bg: 'bg-retro/5',
      glow: 'shadow-[0_0_30px_var(--color-retro-dim)]',
      text: 'text-retro',
      dot: 'bg-retro',
    },
  }

  const c = colorClasses[color]

  return (
    <div
      className={`w-full max-w-md rounded-xl border ${c.border} ${c.bg} p-7 backdrop-blur-sm transition-all duration-600 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } hover:${c.glow}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-3 h-3 rounded-full ${c.dot}`} />
        <div>
          <h3 className="text-text-primary font-semibold text-lg">{title}</h3>
          <p className="text-text-muted text-xs">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 ml-6">
        {items.map((item) => (
          <span
            key={item}
            className={`text-xs px-3 py-1.5 rounded-md border ${c.border} ${c.text} bg-bg-card/50`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
