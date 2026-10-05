import { useEffect, useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { Search, User } from 'lucide-react'
import { nav } from '@/data/site'
import { Logo } from './Logo'
import { Button } from './Button'
import { MobileMenu } from './MobileMenu'
import { SearchOverlay } from './SearchOverlay'
import { AnchorLink } from './AnchorLink'
import { useScrolled } from '@/hooks/useScrolled'
import { cn, ease } from '@/lib/utils'

export function Navbar() {
  const scrolled = useScrolled(10)
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [profile, setProfile] = useState(false)
  const [q, setQ] = useState('')
  const { pathname } = useLocation()
  const go = useNavigate()
  useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  useEffect(() => setMenu(false), [pathname])
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
  const isHomePage = pathname === '/'
  const dark = isHomePage && !scrolled
  const glass = scrolled && !menu

  return (
    <>
      <header className="sticky top-0 z-[60] w-full px-3 pt-2 sm:px-6 lg:px-8">
        <div
          className={cn(
            'relative mx-auto max-w-[1560px] rounded-full border transition-all duration-500 ease-apple',
            glass
              ? 'border-white/20 bg-[#071426]/90 shadow-[0_16px_40px_-15px_rgba(5,10,20,0.5)] backdrop-blur-2xl'
              : dark
                ? 'border-white/15 bg-[#050A14]/70 shadow-2xl backdrop-blur-xl'
                : 'border-hair bg-white/80 shadow-[0_10px_30px_-15px_rgba(7,26,58,0.15)] backdrop-blur-xl',
          )}
        >
          <div className="flex h-[56px] items-center justify-between px-4 sm:px-6 lg:h-[62px] lg:px-7">
            <Logo dark={dark || glass} />

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1 xl:gap-2">
                {nav.map((n) => (
                  <li key={n.to}>
                    {n.kind === 'anchor' ? (
                      <AnchorLink
                        id={n.to}
                        className={cn(
                          'relative block rounded-full px-3 py-1.5 text-[13.5px] font-medium tracking-tight transition-colors duration-300 xl:px-4',
                          dark || glass ? 'text-white/80 hover:text-white' : 'text-ink-700 hover:text-ink',
                        )}
                      >
                        {n.label}
                      </AnchorLink>
                    ) : (
                      <Link
                        to={n.to}
                        className={cn(
                          'relative block rounded-full px-3 py-1.5 text-[13.5px] font-medium tracking-tight transition-colors duration-300 xl:px-4',
                          pathname === n.to
                            ? 'text-electric-300 font-semibold'
                            : dark || glass
                              ? 'text-white/80 hover:text-white'
                              : 'text-ink-700 hover:text-ink',
                        )}
                      >
                        {pathname === n.to && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-electric/20"
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
                <Search className={cn('pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2', dark || glass ? 'text-white/50' : 'text-ink-700/55')} aria-hidden="true" />
                <input
                  id="nav-q"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search jobs, skills or keywords..."
                  className={cn(
                    'h-9 w-[240px] rounded-full border pl-10 pr-10 text-[13px] outline-none transition focus:ring-4',
                    dark || glass
                      ? 'border-white/20 bg-white/10 text-white placeholder:text-white/45 focus:border-electric-300 focus:bg-white/15 focus:ring-electric/20'
                      : 'border-hair bg-white/80 text-ink placeholder:text-ink-700/45 focus:border-electric focus:bg-white focus:ring-electric/10',
                  )}
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
                className={cn('grid h-9 w-9 place-items-center rounded-full transition xl:hidden', dark || glass ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-ink/5')}
              >
                <Search className="h-[18px] w-[18px]" />
              </button>

              <Button to="/marketplace" size="sm" magnetic>Marketplace</Button>

              <div className="relative hidden lg:block">
                <button
                  onClick={() => setProfile((p) => !p)}
                  aria-haspopup="true"
                  aria-expanded={profile}
                  aria-label="Profile and login"
                  className={cn(
                    'grid h-9 w-9 place-items-center rounded-full transition duration-300 hover:scale-105 hover:shadow-glow',
                    dark || glass ? 'bg-white/15 text-white hover:bg-electric' : 'bg-ink text-white hover:bg-electric',
                  )}
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
                      className="absolute right-0 top-[calc(100%+10px)] w-56 rounded-2xl border border-hair bg-white p-4 text-left shadow-lift"
                    >
                      <p className="text-[13.5px] font-semibold text-ink">Profile & login</p>
                      <p className="mt-1 text-[12.5px] leading-snug text-ink-700/75">Coming soon in this demo. Explore the Marketplace to see companies and roles.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setMenu((m) => !m)}
                aria-expanded={menu}
                aria-controls="mobile-menu"
                aria-label={menu ? 'Close menu' : 'Open menu'}
                className="relative grid h-9 w-9 place-items-center rounded-full transition active:scale-95 lg:hidden"
              >
                <motion.span className={cn('absolute h-[2px] w-[18px] rounded-full', menu ? 'bg-ink' : dark || glass ? 'bg-white' : 'bg-ink')} animate={menu ? { rotate: 45, y: 0 } : { rotate: 0, y: -3.5 }} transition={{ duration: 0.4, ease }} />
                <motion.span className={cn('absolute h-[2px] w-[18px] rounded-full', menu ? 'bg-ink' : dark || glass ? 'bg-white' : 'bg-ink')} animate={menu ? { rotate: -45, y: 0 } : { rotate: 0, y: 3.5 }} transition={{ duration: 0.4, ease }} />
              </button>
            </div>
          </div>
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progress }}
            className={cn('absolute inset-x-5 bottom-0 h-[2px] origin-left rounded-full bg-electric transition-opacity duration-300', glass ? 'opacity-100' : 'opacity-0')}
          />
        </div>
      </header>

      <MobileMenu open={menu} onClose={() => setMenu(false)} />
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  )
}
