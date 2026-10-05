import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useLenis } from '@/hooks/useSmoothScroll'
import { PersonPanel } from './Art'
import { ease } from '@/lib/utils'

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lenis = useLenis()
  const btn = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    lenis.current?.stop()
    btn.current?.focus()
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); lenis.current?.start() }
  }, [open, onClose, lenis])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} role="dialog" aria-modal="true" aria-label="ABC demo video">
          <button aria-label="Close video" onClick={onClose} className="absolute inset-0 cursor-default bg-ink/55 backdrop-blur-md" tabIndex={-1} />
          <motion.div initial={{ scale: 0.94, y: 24, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.96, y: 12, opacity: 0 }} transition={{ duration: 0.55, ease }} className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-[0_40px_100px_-20px_rgba(7,26,58,.6)]">
            <div className="relative aspect-video">
              <PersonPanel tone="blue" rounded="rounded-none" className="h-full w-full" people={[{ p: 1, x: 30, s: 30 }, { p: 0, x: 52, s: 34 }, { p: 4, x: 74, s: 30 }]} />
              <div className="absolute inset-0 grid place-items-center">
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-electric shadow-2xl">
                  <span className="absolute inset-0 animate-pulseRing rounded-full bg-white/60" aria-hidden="true" />
                  <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 p-5 sm:px-7">
              <p className="text-sm text-ink-700/80"><span className="font-semibold text-ink">Demo placeholder.</span> Connect a video URL here to play your brand film.</p>
            </div>
            <button ref={btn} onClick={onClose} aria-label="Close video" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition hover:scale-105"><X className="h-5 w-5" /></button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
