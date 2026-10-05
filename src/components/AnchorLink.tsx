import { useNavigate, useLocation, Link } from 'react-router-dom'
import type { ReactNode, MouseEvent } from 'react'
import { useLenis } from '@/hooks/useSmoothScroll'

/** Scrolls to an in-page section, accounting for the fixed header. */
export function scrollToId(id: string, lenis?: ReturnType<typeof useLenis>) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenis?.current) lenis.current.scrollTo(el as unknown as HTMLElement, { offset: -84, duration: 1.15 })
  else {
    const y = el.getBoundingClientRect().top + window.scrollY - 84
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const PENDING_KEY = 'abc:scrollTo'

/** Consumes a pending cross-page scroll target left behind when navigating home to reach a section. */
export function consumePendingScroll(lenis: ReturnType<typeof useLenis>) {
  const id = sessionStorage.getItem(PENDING_KEY)
  if (!id) return
  sessionStorage.removeItem(PENDING_KEY)
  let tries = 0
  const attempt = () => {
    const el = document.getElementById(id)
    if (el) scrollToId(id, lenis)
    else if (tries++ < 20) requestAnimationFrame(attempt)
  }
  requestAnimationFrame(attempt)
}

/** Returns a click handler that scrolls to a homepage section, navigating home first if needed. Use for styled elements (e.g. Button) where AnchorLink's own <a> can't be nested. */
export function useAnchorNav() {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const lenis = useLenis()
  return (id: string) => (e?: MouseEvent) => {
    e?.preventDefault()
    if (pathname === '/') scrollToId(id, lenis)
    else { sessionStorage.setItem(PENDING_KEY, id); nav('/') }
  }
}

/** A link to a section on the homepage, for plain text/nav links. Scrolls directly if already there. */
export function AnchorLink({ id, className, children, onClick }: { id: string; className?: string; children: ReactNode; onClick?: () => void }) {
  const go = useAnchorNav()
  return (
    <Link to={`/#${id}`} onClick={(e) => { onClick?.(); go(id)(e) }} className={className}>
      {children}
    </Link>
  )
}
