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
    <Section id="projetos" className="py-[100px] sm:py-[140px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-5 block">
            Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Produtos em desenvolvimento.
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Nossos projetos refletem nossa visão de construir tecnologia com propósito. Novos produtos serão adicionados aqui conforme evoluímos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}

          <div className="rounded-xl border border-dashed border-border bg-bg-card/30 p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
            <div className="w-12 h-12 rounded-full bg-bg-card border border-border flex items-center justify-center mb-4">
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
      className={`group block rounded-xl border ${c.border} bg-bg-card p-7 transition-all duration-500 hover:-translate-y-0.5 ${c.glow} ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className={`text-xs px-3 py-1.5 rounded-full border ${c.badge} font-medium`}>
          {project.status}
        </span>
        <ExternalLink size={14} className="text-text-muted group-hover:text-text-secondary transition-colors" />
      </div>
      <h3 className="text-text-primary font-semibold text-lg mb-3 group-hover:text-text-primary transition-colors">
        {project.name}
      </h3>
      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
        {project.description}
      </p>
    </a>
  )
}
