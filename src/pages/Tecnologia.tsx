import { useEffect } from 'react'
import Technology from '../components/sections/Technology'
import Projects from '../components/sections/Projects'
import CTA from '../components/sections/CTA'

export default function Tecnologia() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="pt-24" />
      <Technology />
      <Projects />
      <CTA />
    </>
  )
}
