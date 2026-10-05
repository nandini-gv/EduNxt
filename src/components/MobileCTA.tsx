import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './Button'

/** Sticky, thumb-friendly CTA shown on mobile after the hero. Hidden on the Marketplace, which has its own inline CTAs. */
export function MobileCTA() {
  const { pathname } = useLocation()
  const show1 = pathname === '/'
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 520)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [pathname])
  return (
    <AnimatePresence>
      {show1 && show && (
        <motion.div initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 90, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass fixed inset-x-3 z-40 rounded-full p-1.5 shadow-[0_18px_50px_-14px_rgba(7,26,58,.4)] md:hidden"
          style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}>
          <Button to="/marketplace" size="lg" arrow full>Explore Marketplace</Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
