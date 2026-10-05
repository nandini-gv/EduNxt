import { createContext, useContext, useEffect, useRef, type ReactNode, type MutableRefObject } from 'react'
import Lenis from 'lenis'

const LenisCtx = createContext<MutableRefObject<Lenis | null>>({ current: null })
export const useLenis = () => useContext(LenisCtx)

/** Apple-style inertial scrolling. Disabled when the user prefers reduced motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const ref = useRef<Lenis | null>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, easing: (t: number) => 1 - Math.pow(1 - t, 4), smoothWheel: true })
    ref.current = lenis
    let raf = 0
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); ref.current = null }
  }, [])
  return <LenisCtx.Provider value={ref}>{children}</LenisCtx.Provider>
}
