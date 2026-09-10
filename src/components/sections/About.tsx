import Section from '../ui/Section'
import { useInView } from '../../hooks/useAnimations'

export default function About() {
  const { ref, isInView } = useInView(0.1)

  return (
    <Section id="empresa" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">
              Sobre a empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-6">
              Construindo o futuro através da tecnologia.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              A SilvaTech está focada na criação de produtos, experiências e soluções digitais que combinam engenharia, criatividade e visão estratégica.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Nosso ecossistema tecnológico é projetado para crescer — cada produto, cada experimento, cada linha de código faz parte de uma visão de longo prazo.
            </p>
          </div>

          <div
            className={`relative transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl border border-border bg-bg-card p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[60px]" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-lg">&#9672;</span>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">Visão de longo prazo</h3>
                    <p className="text-text-secondary text-sm">Construímos com intenção, não com pressa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-secondary text-lg">&#9670;</span>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">Produtos próprios</h3>
                    <p className="text-text-secondary text-sm">Desenvolvemos soluções que geram valor real.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-lg">&#9674;</span>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">Escalabilidade</h3>
                    <p className="text-text-secondary text-sm">Cada decisão é pensada para crescer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
