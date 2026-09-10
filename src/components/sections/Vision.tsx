import { useInView } from '../../hooks/useAnimations'
import Section from '../ui/Section'

export default function Vision() {
  const { ref, isInView } = useInView(0.1)

  return (
    <Section id="visao" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={ref} className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-4 block">
            Visão
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
            Estamos apenas começando.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            O ecossistema SilvaTech está em construção constante. Novos produtos, experiências e iniciativas surgirão à medida que evoluímos — cada passo é parte de uma visão de longo prazo.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {[
              { title: 'Evolução contínua', desc: 'Cada decisão é um passo na direção certa.' },
              { title: 'Experimentação', desc: 'Testamos, aprendemos e construímos com intenção.' },
              { title: 'Expansão futura', desc: 'Novos produtos e experiências estão por vir.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl border border-border bg-bg-card p-6 text-left transition-all duration-500 hover:border-accent/20 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <h3 className="text-text-primary font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
