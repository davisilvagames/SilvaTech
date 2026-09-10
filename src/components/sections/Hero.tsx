import { ArrowRight, ChevronDown } from 'lucide-react'
import { COMPANY, RETRO_RUMBLE_URL } from '../../data/content'
import AnimatedGrid from '../ui/AnimatedGrid'
import { useReducedMotion } from '../../hooks/useAnimations'

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedGrid />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-light bg-bg-card/50 backdrop-blur-sm mb-8 transition-all duration-500 ${
            reduced ? 'opacity-100' : 'opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-text-secondary text-xs font-medium tracking-widest uppercase">
            Tecnologia &bull; Produtos &bull; Inovação
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 transition-all duration-700 ${
            reduced ? 'opacity-100' : 'opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]'
          }`}
        >
          <span className="text-text-primary">Construindo tecnologia</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent">
            para o próximo nível.
          </span>
        </h1>

        <p
          className={`text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            reduced ? 'opacity-100' : 'opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]'
          }`}
        >
          {COMPANY.description}
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            reduced ? 'opacity-100' : 'opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]'
          }`}
        >
          <a
            href="#empresa"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg-primary font-semibold text-sm hover:bg-accent-hover transition-all duration-200 hover:shadow-[0_0_20px_var(--color-accent-glow)]"
          >
            Conheça a empresa
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href={RETRO_RUMBLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-retro/30 bg-retro/5 text-retro font-semibold text-sm hover:bg-retro/15 hover:border-retro/50 transition-all duration-200"
          >
            Conheça o Retro Rumble
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            reduced ? 'opacity-100' : 'opacity-0 animate-[fadeIn_0.8s_ease-out_1.2s_forwards]'
          }`}
        >
          <a
            href="#empresa"
            className="text-text-muted hover:text-text-secondary transition-colors"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={20} className="animate-bounce" style={{ animationDuration: '2s' }} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  )
}
