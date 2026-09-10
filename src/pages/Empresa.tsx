import { useEffect } from 'react'
import About from '../components/sections/About'
import Ecosystem from '../components/sections/Ecosystem'
import CTA from '../components/sections/CTA'

export default function Empresa() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="pt-24" />
      <About />
      <Ecosystem />
      <CTA />
    </>
  )
}
