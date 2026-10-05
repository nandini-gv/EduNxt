import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'
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

export function HeroMarketplacePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-[#071426]/80 p-5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6"
    >
      {/* Glow highlight */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Header */}
      <div className="relative mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-electric/20 text-electric-300 ring-1 ring-electric/40">
            <Building2 className="h-4 w-4" />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-white">Explore Our Marketplace</h3>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80">
          <Sparkles className="h-3 w-3 text-electric-300" /> Live Directory
        </span>
      </div>

      <p className="mb-4 text-[13px] leading-relaxed text-white/70">
        Discover companies, opportunities, skills and connections — all in one place.
      </p>

      {/* Grid of Company Tiles (Adobe Marketplace App Grid style) */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {marketCompanies.map((c) => (
          <Link
            key={c.name}
            to={`/marketplace/${c.slug}`}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:bg-white/[0.12] hover:shadow-lg"
          >
            <div className="flex h-8 items-center">
              <CompanyLogo name={c.name} className="max-h-6 w-auto" />
            </div>
            <div className="mt-2">
              <p className="truncate text-[10.5px] font-medium text-white/60 group-hover:text-white/80">
                {c.category}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <div className="mt-5 border-t border-white/10 pt-4">
        <Link
          to="/marketplace"
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-electric px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-glow transition-all duration-300 hover:bg-electric-400 hover:shadow-electric/50"
        >
          <span>View All Companies</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
