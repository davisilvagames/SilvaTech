import { useInView } from '../../hooks/useAnimations'

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: SectionProps) {
  const { ref, isInView } = useInView(0.05)

  return (
    <section
      id={id}
      ref={ref}
      className={`relative transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  )
}
