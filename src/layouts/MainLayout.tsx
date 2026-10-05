import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCTA } from '@/components/MobileCTA'
import { useLenis } from '@/hooks/useSmoothScroll'

/** Wraps every page: top announcement bar, sticky header, animated route transitions, footer. */
export function MainLayout() {
  const { pathname } = useLocation()
  const lenis = useLenis()
  const reduce = useReducedMotion()

  // Freeze the outlet element so the outgoing page keeps rendering during its exit animation.
  const outlet = useOutlet()
  const toTop = () => (lenis.current ? lenis.current.scrollTo(0, { immediate: true, force: true }) : window.scrollTo(0, 0))

  return (
    <div className="flex min-h-screen flex-col bg-[#050A14] text-ink antialiased">
      <a href="#main" className="sr-only z-[100] rounded-full bg-electric px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <AnnouncementBar />
      <Navbar />
      <AnimatePresence mode="wait" initial={false} onExitComplete={toTop}>
        <motion.main
          id="main"
          key={pathname}
          className="flex-1"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8, transition: { duration: 0.25 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <MobileCTA />
    </div>
  )
}
