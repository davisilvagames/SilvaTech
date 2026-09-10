import { useReducedMotion } from '../../hooks/useAnimations'

interface AnimatedGridProps {
  className?: string
}

export default function AnimatedGrid({ className = '' }: AnimatedGridProps) {
  const reduced = useReducedMotion()

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.3,
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />
      {!reduced && (
        <>
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse"
            style={{ background: 'var(--color-accent)', opacity: 0.06, animationDuration: '4s' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-pulse"
            style={{ background: 'var(--color-secondary)', opacity: 0.05, animationDuration: '5s' }}
          />
        </>
      )}
    </div>
  )
}
