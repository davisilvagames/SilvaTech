import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/ui/Section'
import { useInView } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <PreviewSection />
    </>
  )
}

function PreviewSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <Section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">
            Ecossistema
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Explore nossa tecnologia.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Uma empresa de tecnologia com uma divisão dedicada a games e experiências interativas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <PreviewCard
            title="Empresa"
            description="Conheça nossa visão, proposta e o ecossistema que estamos construindo."
            path="/empresa"
            color="accent"
            isInView={isInView}
            delay={0}
          />
          <PreviewCard
            title="Tecnologia"
            description="Áreas de atuação, desenvolvimento de software e produtos digitais."
            path="/tecnologia"
            color="accent"
            isInView={isInView}
            delay={100}
          />
          <PreviewCard
            title="TechGames"
            description="Nossa divisão de games e experiências interativas."
            path="/techgames"
            color="secondary"
            isInView={isInView}
            delay={200}
          />
          <PreviewCard
            title="Retro Rumble"
            description="Nosso jogo — nostalgia, competição e tecnologia no navegador."
            path="/retro-rumble"
            color="retro"
            isInView={isInView}
            delay={300}
          />
          <PreviewCard
            title="Visão"
            description="Estamos apenas começando. Conheça nossos planos para o futuro."
            path="/visao"
            color="accent"
            isInView={isInView}
            delay={400}
          />
        </div>
      </div>
    </Section>
  )
}

function PreviewCard({
  title,
  description,
  path,
  color,
  isInView,
  delay,
}: {
  title: string
  description: string
  path: string
  color: 'accent' | 'secondary' | 'retro'
  isInView: boolean
  delay: number
}) {
  const colorClasses = {
    accent: 'border-accent/20 hover:border-accent/40 group-hover:text-accent',
    secondary: 'border-secondary/20 hover:border-secondary/40 group-hover:text-secondary',
    retro: 'border-retro/20 hover:border-retro/40 group-hover:text-retro',
  }

  const dotColor = {
    accent: 'bg-accent',
    secondary: 'bg-secondary',
    retro: 'bg-retro',
  }

  return (
    <Link
      to={path}
      className={`group block rounded-xl border border-border bg-bg-card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:bg-bg-card-hover ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${colorClasses[color]}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-2 h-2 rounded-full ${dotColor[color]}`} />
        <ArrowRight size={14} className="text-text-muted group-hover:text-text-secondary transition-colors" />
      </div>
      <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  )
}
