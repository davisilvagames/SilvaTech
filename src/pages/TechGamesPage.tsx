import { useEffect } from 'react'
import TechGames from '../components/sections/TechGames'
import CTA from '../components/sections/CTA'

export default function TechGamesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="pt-24" />
      <TechGames />
      <CTA />
    </>
  )
}
