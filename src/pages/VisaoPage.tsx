import { useEffect } from 'react'
import Vision from '../components/sections/Vision'
import CTA from '../components/sections/CTA'

export default function VisaoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="pt-24" />
      <Vision />
      <CTA />
    </>
  )
}
