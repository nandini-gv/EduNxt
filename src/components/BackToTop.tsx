import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLenis } from '@/hooks/useSmoothScroll'

export function BackToTop() {
  const [show, setShow] = useState(false)
  const lenis = useLenis()
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }} transition={{ duration: 0.35 }}
          onClick={() => (lenis.current ? lenis.current.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: 'smooth' }))}
          aria-label="Back to top"
          className="glass fixed bottom-24 right-4 z-40 grid h-12 w-12 place-items-center rounded-full text-ink shadow-soft transition hover:-translate-y-0.5 hover:text-electric hover:shadow-lift md:bottom-8 md:right-8"
          style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
