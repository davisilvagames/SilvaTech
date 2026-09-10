import { useEffect } from 'react'
import RetroRumble from '../components/sections/RetroRumble'
import CTA from '../components/sections/CTA'

export default function RetroRumblePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="pt-24" />
      <RetroRumble />
      <CTA />
    </>
  )
}
