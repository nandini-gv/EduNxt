import { useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Search, SearchX, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { CompanyCard } from '@/components/CompanyCard'
import { ContactModal } from '@/components/ContactModal'
import { scrollToId } from '@/components/AnchorLink'
import { useLenis } from '@/hooks/useSmoothScroll'
import { companies } from '@/data/companies'
import { industries, type IndustryKey } from '@/data/industries'
import { useSeo } from '@/lib/seo'
import { cn } from '@/lib/utils'
import mktHero from '@/assets/img/mkt-hero.jpg'
import mktStory from '@/assets/img/mkt-story.jpg'

const sizeBuckets = [
  { key: 'Any', test: () => true },
  { key: 'Startup (<1,000)', test: (n: number) => n < 1000 },
  { key: 'Mid-size (1,000–50,000)', test: (n: number) => n >= 1000 && n < 50000 },
  { key: 'Enterprise (50,000+)', test: (n: number) => n >= 50000 },
] as const
type SizeKey = (typeof sizeBuckets)[number]['key']

const locations = ['All Locations', 'Bengaluru', 'Mumbai', 'Hyderabad', 'Pune', 'Chennai', 'Delhi NCR', 'Remote-first']

export default function Marketplace() {
  useSeo('Marketplace', 'Discover the companies behind what’s next. Explore organizations, industries and opportunities across sectors.')
  const [sp, setSp] = useSearchParams()
  const { hash } = useLocation()
  const lenis = useLenis()
  const reduce = useReducedMotion()
  const [q, setQ] = useState(sp.get('q') ?? '')
  const [industry, setIndustry] = useState<IndustryKey | 'All'>((sp.get('industry') as IndustryKey) ?? 'All')
  const [location, setLocation] = useState('All Locations')
  const [size, setSize] = useState<SizeKey>('Any')
  const [hiringOnly, setHiringOnly] = useState(sp.get('hiring') === '1')
  const [postOpen, setPostOpen] = useState(false)

  useEffect(() => {
    if (hash) setTimeout(() => scrollToId(hash.slice(1), lenis), 60)
  }, [hash, lenis])

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    const bucket = sizeBuckets.find((b) => b.key === size) ?? sizeBuckets[0]
    return companies.filter((c) => {
      if (s && !`${c.name} ${c.description} ${c.industry} ${c.tags.join(' ')}`.toLowerCase().includes(s)) return false
      if (industry !== 'All' && c.industry !== industry) return false
      if (location !== 'All Locations' && !c.location.toLowerCase().includes(location.toLowerCase())) return false
      if (!bucket.test(c.employees)) return false
      if (hiringOnly && !c.hiringNow) return false
      return true
    })
  }, [q, industry, location, size, hiringOnly])

  const clearAll = () => { setQ(''); setIndustry('All'); setLocation('All Locations'); setSize('Any'); setHiringOnly(false); setSp({}) }
  const toResults = () => scrollToId('companies', lenis)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-14 pt-[104px] sm:pt-32 lg:pb-20 lg:pt-36 text-white bg-[#030712]">
        <div aria-hidden="true" className="absolute inset-0 -z-20"><img src={mktHero} alt="" className="h-full w-full object-cover opacity-35" /></div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030712]/95 via-[#050A14]/85 to-[#050A14]" />
        <div className="container-x max-w-3xl">
          <Reveal as="h1" className="display-xl !text-white">Discover Companies.<br /><span className="grad-text">Find What’s Next.</span></Reveal>
          <Reveal delay={0.1} className="lead mt-6 max-w-[34rem] !text-white/80">Explore companies, industries and opportunities — all in one place. Discover who is hiring, what they build, and where your skills can create impact.</Reveal>
        </div>

        <Reveal delay={0.2} className="container-x mt-10">
          <div className="glass rounded-[28px] p-4 shadow-2xl backdrop-blur-2xl border border-white/15 bg-[#071426]/75">
            <form role="search" onSubmit={(e) => { e.preventDefault(); toResults() }} className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" aria-hidden="true" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search companies, industries or skills..." className="field !h-[52px] !rounded-2xl !pl-12 !pr-28 bg-white/10 text-white placeholder:text-white/45 border-white/20" />
              <Button type="submit" className="absolute right-1.5 top-1.5 !h-[40px] bg-electric">Search</Button>
            </form>
            <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-1 sm:mt-4 sm:flex-wrap">
              {(['All', ...industries.map((i) => i.key)] as const).map((k) => (
                <button key={k} onClick={() => setIndustry(k)} aria-pressed={industry === k}
                  className={cn('h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition-all duration-300 ease-apple',
                    industry === k ? 'border-electric bg-electric text-white shadow-glow' : 'border-white/15 bg-white/10 text-white hover:border-white/30')}>
                  {k}
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2.5 px-1 sm:mt-4">
              <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Filter by location" className="h-10 rounded-full border border-white/15 bg-[#071426] px-4 text-sm font-medium text-white outline-none transition focus:border-electric">
                {locations.map((l) => <option key={l}>{l}</option>)}
              </select>
              <select value={size} onChange={(e) => setSize(e.target.value as SizeKey)} aria-label="Filter by company size" className="h-10 rounded-full border border-white/15 bg-[#071426] px-4 text-sm font-medium text-white outline-none transition focus:border-electric">
                {sizeBuckets.map((b) => <option key={b.key}>{b.key}</option>)}
              </select>
              <button onClick={() => setHiringOnly((h) => !h)} aria-pressed={hiringOnly}
                className={cn('h-10 rounded-full border px-4 text-sm font-medium transition-all duration-300 ease-apple',
                  hiringOnly ? 'border-electric bg-electric text-white shadow-glow' : 'border-white/15 bg-white/10 text-white hover:border-white/30')}>
                Hiring Now
              </button>
              {(q || industry !== 'All' || location !== 'All Locations' || size !== 'Any' || hiringOnly) && (
                <button onClick={clearAll} className="h-10 rounded-full px-3 text-sm font-medium text-white/70 hover:text-white">Clear filters</button>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Featured companies */}
      <section id="companies" className="pb-16 pt-6 sm:pb-24 bg-[#050A14] text-white" aria-labelledby="companies-h">
        <div className="container-x">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading size="md" title={<span id="companies-h" className="text-white">Featured Companies</span>} sub={<span className="text-white/70">Demo data for illustration — company names, sizes and job counts are fictional.</span>} />
            <p className="hidden shrink-0 text-sm text-white/70 sm:block" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'company' : 'companies'}</p>
          </div>
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((c, i) => <Reveal key={c.slug} delay={(i % 4) * 0.07} y={26}><CompanyCard c={c} /></Reveal>)}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/20 bg-[#071426] px-6 py-16 text-center text-white">
              <SearchX className="mx-auto h-9 w-9 text-electric-300" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold text-white">No companies match these filters</h3>
              <p className="mx-auto mt-2 max-w-sm text-[15px] text-white/75">Try a broader search, or clear your filters to see everything.</p>
              <Button variant="secondary" className="mt-6" onClick={clearAll}>Clear all filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* Explore by industry */}
      <section id="industries" className="bg-gradient-to-b from-[#050A14] via-[#071426] to-[#050A14] py-16 sm:py-24 text-white" aria-labelledby="industries-h">
        <div className="container-x">
          <SectionHeading size="md" title={<span id="industries-h" className="text-white">Explore by Industry</span>} sub={<span className="text-white/70">Choose an industry to narrow the companies above.</span>} />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.key} delay={(i % 4) * 0.07} y={24}>
                <button onClick={() => { setIndustry(ind.key); toResults() }}
                  className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#071426]/75 p-5 text-left shadow-2xl backdrop-blur-xl transition-all duration-500 ease-apple hover:-translate-y-1.5 hover:border-electric/50">
                  <span className={cn('absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-30', ind.tone)} aria-hidden="true" />
                  <span className={cn('grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br', ind.tone)}><ind.icon className="h-[22px] w-[22px] text-white" strokeWidth={1.8} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-display text-[1.05rem] font-bold tracking-tight text-white">{ind.key}</h3>
                  <p className="mt-1 text-[13.5px] text-white/70">{ind.companies}+ companies</p>
                  <ArrowRight className="mt-4 h-4 w-4 text-electric-300 opacity-0 transition-all duration-300 ease-apple group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MoreThanDirectory reduce={!!reduce} image={mktStory} />

      {/* Final CTA */}
      <section className="pb-20 pt-6 sm:pb-28 bg-[#030712] text-white" aria-label="Get started">
        <div className="container-x">
          <Reveal scale={0.98} y={24}>
            <div className="rounded-[32px] bg-gradient-to-br from-[#071426] to-[#0A1930] px-7 py-14 text-center sm:rounded-[40px] sm:px-14 sm:py-16 border border-white/15 shadow-2xl">
              <Sparkles className="mx-auto h-7 w-7 text-electric-300" aria-hidden="true" />
              <h2 className="display-lg mx-auto mt-5 max-w-2xl !text-white">Your Next Opportunity Could Start Here.</h2>
              <p className="mx-auto mt-4 max-w-md text-[1.0625rem] leading-relaxed text-white/75">Explore companies, discover possibilities and find where your skills can make an impact.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button variant="light" size="lg" arrow magnetic onClick={toResults}>Explore Companies</Button>
                <Button variant="glass" size="lg" onClick={() => setPostOpen(true)}>Post a Job</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <ContactModal open={postOpen} onClose={() => setPostOpen(false)} />
    </>
  )
}

function MoreThanDirectory({ image, reduce }: { image: string; reduce: boolean }) {
  const stats = [{ value: 10, suffix: 'K+', label: 'Companies' }, { value: 50, suffix: 'K+', label: 'Opportunities' }, { value: 1, suffix: 'M+', label: 'Learners & Professionals' }]
  return (
    <section className="relative isolate overflow-hidden py-20 text-white sm:py-28 bg-[#050A14]" aria-labelledby="mtd-h">
      <ParallaxImage src={image} reduce={reduce} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#03060F]/95 via-[#03060F]/65 to-[#03060F]/45" />
      <div className="container-x max-w-2xl">
        <Reveal><p className="text-[12px] font-semibold tracking-[0.18em] text-electric-300">BEYOND THE LISTINGS</p></Reveal>
        <Reveal as="h2" delay={0.06} className="display-lg mt-3 !text-white"><span id="mtd-h">More Than a Directory.</span></Reveal>
        <Reveal delay={0.12} className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-white/75">Discover the people, ideas and opportunities behind the organizations shaping tomorrow.</Reveal>
        <Reveal delay={0.2}>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-[1.9rem] font-extrabold tracking-[-0.03em] sm:text-[2.3rem] text-white"><AnimatedCounter value={s.value} suffix={s.suffix} /></dd>
                <dt className="mt-1.5 text-[12.5px] leading-tight text-white/65 sm:text-[13.5px]">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function ParallaxImage({ src, reduce }: { src: string; reduce: boolean }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%'])
  return (
    <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0 -z-20" aria-hidden="true">
      <img src={src} alt="" className="h-full w-full object-cover opacity-45" loading="lazy" />
    </motion.div>
  )
}
