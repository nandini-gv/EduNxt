import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { mobileNav } from '@/data/site'
import { Button } from './Button'
import { scrollToId } from './AnchorLink'
import { useLenis } from '@/hooks/useSmoothScroll'
import { ease } from '@/lib/utils'

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { pathname } = useLocation()
  const lenis = useLenis()
  useEffect(() => {
    if (!open) return
    lenis.current?.stop()
    document.body.style.overflow = 'hidden'
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; lenis.current?.start() }
  }, [open, onClose, lenis])

  const handle = (n: (typeof mobileNav)[number]) => {
    onClose()
    if (n.kind === 'anchor') {
      if (pathname === '/') setTimeout(() => scrollToId(n.to, lenis), 420)
      else { sessionStorage.setItem('abc:scrollTo', n.to) }
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu"
          className="fixed inset-0 z-[55] overflow-y-auto bg-white/[.88] backdrop-blur-2xl"
          initial={{ clipPath: 'circle(0px at calc(100% - 38px) 36px)' }}
          animate={{ clipPath: 'circle(160% at calc(100% - 38px) 36px)' }}
          exit={{ clipPath: 'circle(0px at calc(100% - 38px) 36px)', transition: { duration: 0.5, ease } }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="flex min-h-full flex-col px-6 pb-8 pt-24" style={{ paddingTop: 'calc(6rem + env(safe-area-inset-top, 0px))' }}>
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {mobileNav.map((n, i) => (
                  <motion.li key={n.label} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.6, delay: 0.14 + i * 0.05, ease }} className="border-b border-hair/70">
                    {n.kind === 'link' ? (
                      <Link to={n.to} onClick={onClose} className="flex min-h-[56px] items-center justify-between py-2.5">
                        <span className="font-display text-[1.6rem] font-bold tracking-[-0.03em] text-ink">{n.label}</span>
                        <ArrowUpRight className="h-5 w-5 text-ink/30" aria-hidden="true" />
                      </Link>
                    ) : (
                      <Link to={`/#${n.to}`} onClick={(e) => { e.preventDefault(); handle(n) }} className="flex min-h-[56px] items-center justify-between py-2.5">
                        <span className="font-display text-[1.6rem] font-bold tracking-[-0.03em] text-ink">{n.label}</span>
                        <ArrowUpRight className="h-5 w-5 text-ink/30" aria-hidden="true" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, delay: 0.55, ease }} className="mt-auto grid gap-3 pt-8">
              <Button to="/marketplace" size="lg" full onClick={onClose}>Explore Marketplace</Button>
              <p className="pt-3 text-center text-xs text-ink-700/60">People. Skills. Progress.</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
