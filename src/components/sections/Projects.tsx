import { useInView } from '../../hooks/useAnimations'
import Section from '../ui/Section'
import { RETRO_RUMBLE_URL } from '../../data/content'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Retro Rumble',
    description: 'Jogo com estética retrô e mecânicas modernas. Disponível para jogar no navegador.',
    status: 'Destaque' as const,
    url: RETRO_RUMBLE_URL,
    color: 'retro' as const,
  },
]

export default function Projects() {
  return (
    <Section id="projetos" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">
            Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Produtos em desenvolvimento.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Nossos projetos refletem nossa visão de construir tecnologia com propósito. Novos produtos serão adicionados aqui conforme evoluímos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}

          <div className="rounded-xl border border-dashed border-border bg-bg-card/30 p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center mb-3">
              <span className="text-text-muted text-lg">+</span>
            </div>
            <p className="text-text-muted text-sm">Novos projetos em breve</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const { ref, isInView } = useInView<HTMLAnchorElement>(0.1)

  const colorMap = {
    retro: {
      border: 'border-retro/20 hover:border-retro/40',
      badge: 'bg-retro/10 text-retro border-retro/20',
      glow: 'hover:shadow-[0_0_30px_var(--color-retro-dim)]',
    },
  }

  const c = colorMap[project.color]

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-xl border ${c.border} bg-bg-card p-6 transition-all duration-500 hover:-translate-y-0.5 ${c.glow} ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs px-2.5 py-1 rounded-full border ${c.badge} font-medium`}>
          {project.status}
        </span>
        <ExternalLink size={14} className="text-text-muted group-hover:text-text-secondary transition-colors" />
      </div>
      <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-text-primary transition-colors">
        {project.name}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {project.description}
      </p>
    </a>
  )
}
