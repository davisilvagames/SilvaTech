import { useInView } from '../../hooks/useAnimations'
import Section from '../ui/Section'
import { Link } from 'react-router-dom'
import { RETRO_RUMBLE_URL } from '../../data/content'
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function RetroRumble() {
  const { ref, isInView } = useInView(0.1)

  return (
    <Section id="retro-rumble" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`relative rounded-2xl border border-retro/20 bg-retro/[0.02] overflow-hidden transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Retro grid background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(var(--color-retro) 1px, transparent 1px),
                  linear-gradient(90deg, var(--color-retro) 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-retro/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-retro/10 border border-retro/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-retro">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="7" y="7" width="4" height="4" fill="currentColor" />
                      <rect x="13" y="7" width="4" height="4" fill="currentColor" />
                      <rect x="7" y="13" width="4" height="4" fill="currentColor" />
                      <rect x="13" y="13" width="4" height="4" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Retro Rumble</h2>
                    <p className="text-retro text-xs font-medium tracking-wider uppercase">Um produto TechGames</p>
                  </div>
                </div>

                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Uma experiência que mistura nostalgia, competição e tecnologia. Retro Rumble é um dos primeiros jogos desenvolvidos pela TechGames, combinando estética retrô com mecânicas modernas.
                </p>

                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  O jogo está disponível para jogar diretamente no navegador — sem necessidade de downloads ou instalações.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={RETRO_RUMBLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-retro text-white font-semibold text-sm hover:bg-retro/90 transition-all duration-200 hover:shadow-[0_0_24px_var(--color-retro-glow)]"
                  >
                    Jogar Retro Rumble
                    <ExternalLink size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <Link
                    to="/techgames"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-text-secondary font-medium text-sm hover:bg-bg-card hover:text-text-primary transition-all duration-200"
                  >
                    Conhecer a TechGames
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-xl border border-retro/20 bg-bg-card overflow-hidden aspect-[4/3]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RetroGameVisual />
                  </div>

                  {/* Scanlines overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    aria-hidden="true"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function RetroGameVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <div className="relative">
        {/* Pixel grid art */}
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => {
            const isActive = [10, 11, 12, 13, 18, 21, 26, 27, 28, 29, 30, 34, 35, 37, 38, 41, 42, 43, 44, 45, 50, 51, 52, 53].includes(i)
            const isAccent = [27, 28, 35, 36, 43, 44].includes(i)

            return (
              <div
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-sm transition-all duration-300 ${
                  isActive
                    ? isAccent
                      ? 'bg-retro/80'
                      : 'bg-retro/30'
                    : 'bg-bg-card/50'
                }`}
              />
            )
          })}
        </div>

        {/* HUD elements */}
        <div className="absolute -top-6 left-0 right-0 flex justify-between items-center px-1">
          <span className="text-retro/60 text-[10px] font-mono tracking-wider">PLAYER 1</span>
          <span className="text-retro/60 text-[10px] font-mono tracking-wider">SCORE: 0000</span>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between items-center px-1">
          <span className="text-retro/40 text-[10px] font-mono tracking-wider">LIVES: ♥♥♥</span>
          <span className="text-retro/40 text-[10px] font-mono tracking-wider">ROUND 01</span>
        </div>
      </div>
    </div>
  )
}
