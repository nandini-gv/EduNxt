import { useEffect, useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Search, User, ChevronDown } from 'lucide-react'
import { nav } from '@/data/site'
import { Logo } from './Logo'
import { Button } from './Button'
import { MobileMenu } from './MobileMenu'
import { SearchOverlay } from './SearchOverlay'
import { AnchorLink } from './AnchorLink'
import { MarketplacePopover } from './MarketplacePopover'
import { useScrolled } from '@/hooks/useScrolled'
import { cn, ease } from '@/lib/utils'

export function Navbar() {
  const scrolled = useScrolled(10)
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [profile, setProfile] = useState(false)
  const [marketplaceOpen, setMarketplaceOpen] = useState(false)
  const [q, setQ] = useState('')
  const { pathname } = useLocation()
  const go = useNavigate()
  useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  useEffect(() => {
    setMenu(false)
    setMarketplaceOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!profile) return
    const t = setTimeout(() => setProfile(false), 3200)
    return () => clearTimeout(t)
  }, [profile])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    go(q.trim() ? `/marketplace?q=${encodeURIComponent(q.trim())}` : '/marketplace')
    setQ('')
  }

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-[60] w-full border-b transition-all duration-500 ease-apple',
          scrolled
            ? 'border-white/20 bg-[#050A14]/75 shadow-2xl backdrop-blur-2xl'
            : 'border-white/15 bg-[#050A14]/40 shadow-xl backdrop-blur-xl',
        )}
      >
        <div className="mx-auto flex h-[60px] max-w-[1560px] items-center justify-between px-4 sm:px-8 lg:h-[64px] lg:px-12">
          <Logo dark={true} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {nav.map((n) => (
                <li key={n.to}>
                  {n.kind === 'anchor' ? (
                    <AnchorLink
                      id={n.to}
                      className="relative block rounded-full px-3 py-1.5 text-[13.5px] font-medium tracking-tight text-white/90 transition-colors duration-300 hover:text-white xl:px-4"
                    >
                      {n.label}
                    </AnchorLink>
                  ) : (
                    <Link
                      to={n.to}
                      className={cn(
                        'relative block rounded-full px-3 py-1.5 text-[13.5px] font-medium tracking-tight transition-colors duration-300 xl:px-4',
                        pathname === n.to ? 'text-electric-300 font-semibold' : 'text-white/90 hover:text-white',
                      )}
                    >
                      {pathname === n.to && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-electric/25"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      {n.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <form onSubmit={submit} role="search" className="relative hidden xl:block">
              <label htmlFor="nav-q" className="sr-only">Search companies, jobs, skills or keywords</label>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" aria-hidden="true" />
              <input
                id="nav-q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search jobs, skills or keywords..."
                className="h-9 w-[230px] rounded-full border border-white/25 bg-white/10 pl-10 pr-10 text-[13px] text-white outline-none transition placeholder:text-white/50 focus:border-electric-300 focus:bg-white/15 focus:ring-4 focus:ring-electric/20"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-1 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-electric text-white transition hover:bg-electric-400"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </form>

            <button
              onClick={() => setSearch(true)}
              aria-label="Search"
              className="grid h-9 w-9 place-items-center rounded-full text-white transition hover:bg-white/10 xl:hidden"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            {/* Floating Marketplace Button with App Launcher Popover */}
            <div className="relative">
              <button
                onClick={() => setMarketplaceOpen((p) => !p)}
                aria-expanded={marketplaceOpen}
                aria-haspopup="true"
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13.5px] font-semibold text-white transition duration-300',
                  marketplaceOpen
                    ? 'bg-electric text-white shadow-glow'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                )}
              >
                <span>Marketplace</span>
                <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-300', marketplaceOpen ? 'rotate-180' : '')} />
              </button>

              <MarketplacePopover open={marketplaceOpen} onClose={() => setMarketplaceOpen(false)} />
            </div>

            {/* Profile button */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setProfile((p) => !p)}
                aria-haspopup="true"
                aria-expanded={profile}
                aria-label="Profile and login"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white transition duration-300 hover:scale-105 hover:bg-electric hover:shadow-glow border border-white/20"
              >
                <User className="h-[17px] w-[17px]" />
              </button>
              <AnimatePresence>
                {profile && (
                  <motion.div
                    role="status"
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease }}
                    className="absolute right-0 top-[calc(100%+10px)] w-56 rounded-2xl border border-white/15 bg-[#071426]/95 p-4 text-left shadow-2xl text-white backdrop-blur-xl"
                  >
                    <p className="text-[13.5px] font-semibold text-white">Profile & login</p>
                    <p className="mt-1 text-[12.5px] leading-snug text-white/70">Coming soon in this demo. Explore the Marketplace to see companies and roles.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMenu((m) => !m)}
              aria-expanded={menu}
              aria-controls="mobile-menu"
              aria-label={menu ? 'Close menu' : 'Open menu'}
              className="relative grid h-9 w-9 place-items-center rounded-full transition active:scale-95 lg:hidden text-white"
            >
              <motion.span className="absolute h-[2px] w-[18px] rounded-full bg-white" animate={menu ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }} transition={{ duration: 0.4, ease }} />
              <motion.span className="absolute h-[2px] w-[18px] rounded-full bg-white" animate={menu ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }} transition={{ duration: 0.4, ease }} />
            </button>
          </div>
        </div>
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className={cn('absolute inset-x-0 bottom-0 h-[2px] origin-left bg-electric transition-opacity duration-300', scrolled ? 'opacity-100' : 'opacity-0')}
        />
      </header>

      <MobileMenu open={menu} onClose={() => setMenu(false)} />
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  )
}
