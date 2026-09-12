import Section from '../ui/Section'
import { useInView } from '../../hooks/useAnimations'

export default function About() {
  const { ref, isInView } = useInView(0.1)

  return (
    <Section id="empresa" className="py-[120px] sm:py-[180px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-6 block">
              Sobre a empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-10">
              Construindo o futuro através da tecnologia.
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6 text-base sm:text-lg">
              A SilvaTech está focada na criação de produtos, experiências e soluções digitais que combinam engenharia, criatividade e visão estratégica.
            </p>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              Nosso ecossistema tecnológico é projetado para crescer — cada produto, cada experimento, cada linha de código faz parte de uma visão de longo prazo.
            </p>
          </div>

          <div
            className={`relative transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl border border-border bg-bg-card p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[60px]" />
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-lg">&#9672;</span>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1.5">Visão de longo prazo</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">Construímos com intenção, não com pressa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-secondary text-lg">&#9670;</span>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1.5">Produtos próprios</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">Desenvolvemos soluções que geram valor real.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent text-lg">&#9674;</span>
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1.5">Escalabilidade</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">Cada decisão é pensada para crescer.</p>
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
