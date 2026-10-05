import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Building2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CompanyLogo } from './CompanyLogos'

const marketCompanies = [
  { name: 'Microsoft', slug: 'microsoft', category: 'Cloud & AI' },
  { name: 'Google', slug: 'google', category: 'Tech & Search' },
  { name: 'Amazon', slug: 'amazon', category: 'E-commerce & AWS' },
  { name: 'IBM', slug: 'ibm', category: 'Enterprise AI' },
  { name: 'TCS', slug: 'tcs', category: 'Global IT Services' },
  { name: 'Infosys', slug: 'infosys', category: 'Digital Services' },
  { name: 'Accenture', slug: 'accenture', category: 'Consulting & Tech' },
  { name: 'Capgemini', slug: 'capgemini', category: 'Tech Transformation' },
]

interface MarketplacePopoverProps {
  open: boolean
  onClose: () => void
}

export function MarketplacePopover({ open, onClose }: MarketplacePopoverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-[calc(100%+12px)] z-[80] w-[340px] sm:w-[480px] lg:w-[540px] overflow-hidden rounded-3xl border border-white/15 bg-[#071426]/95 p-5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
        >
          {/* Subtle Ambient Glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

          {/* Header Title & Subtitle */}
          <div className="relative mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-xl bg-electric/20 text-electric-300 ring-1 ring-electric/40">
                  <Building2 className="h-4 w-4" />
                </span>
                <h3 className="font-display text-base font-bold text-white">Explore Marketplace</h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80">
                <Sparkles className="h-3 w-3 text-electric-300" /> Featured
              </span>
            </div>
            <p className="mt-1 text-[12.5px] text-white/70">
              Discover companies, opportunities and capabilities.
            </p>
          </div>

          {/* Tiles Grid: 4 cols desktop, 2 cols mobile */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {marketCompanies.map((c) => (
              <Link
                key={c.name}
                to={`/marketplace/${c.slug}`}
                onClick={onClose}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-white/[0.14] hover:shadow-lg"
              >
                <div className="flex h-7 items-center">
                  <CompanyLogo name={c.name} className="max-h-5 w-auto" />
                </div>
                <div className="mt-2">
                  <p className="truncate text-[10.5px] font-medium text-white/60 group-hover:text-white/90">
                    {c.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="mt-4 border-t border-white/10 pt-3">
            <Link
              to="/marketplace"
              onClick={onClose}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-electric px-4 py-2.5 text-[13px] font-semibold text-white shadow-glow transition-all duration-300 hover:bg-electric-400"
            >
              <span>View All Companies</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
