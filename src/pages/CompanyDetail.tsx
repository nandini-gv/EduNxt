import { useParams } from 'react-router-dom'
import { ArrowLeft, Briefcase, Building2, Globe2, MapPin, Users2 } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/Button'
import { companyBySlug } from '@/data/companies'
import { useSeo } from '@/lib/seo'
import NotFound from './NotFound'
import mktDetail from '@/assets/img/mkt-detail.jpg'

export default function CompanyDetail() {
  const { slug = '' } = useParams()
  const company = companyBySlug(slug)
  useSeo(company ? company.name : 'Company not found', company ? `${company.name}: ${company.description}` : 'This company could not be found.')

  if (!company) {
    return <NotFound title="This company doesn’t exist." body="The company you’re looking for may have moved or the link is incorrect." to="/marketplace" label="Back to Marketplace" />
  }

  const website = `https://www.${company.slug.replace(/-/g, '')}.example`
  const facts = [
    { icon: Briefcase, label: 'Industry', value: company.industry },
    { icon: MapPin, label: 'Location', value: company.location },
    { icon: Users2, label: 'Company size', value: company.employeesLabel },
    { icon: Globe2, label: 'Website', value: website, href: website },
  ]

  return (
    <article className="pb-20">
      <div className="relative isolate overflow-hidden pt-[64px] lg:pt-[72px]">
        <div className="relative h-[220px] overflow-hidden sm:h-[280px]">
          <img src={mktDetail} alt="" className="h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#03060F]/88 via-[#03060F]/35 to-[#03060F]/10" />
        </div>
        <div className="container-x">
          <Reveal className="relative z-10 -mt-16 flex flex-wrap items-end gap-5 sm:-mt-20">
            <span className={`grid h-24 w-24 shrink-0 place-items-center rounded-[26px] bg-gradient-to-br font-display text-2xl font-extrabold text-ink shadow-lift ring-4 ring-white sm:h-28 sm:w-28 ${company.tone}`}>{company.initial}</span>
            <div className="pb-1">
              <h1 className="display-md">{company.name}</h1>
              <p className="mt-1.5 text-[15px] text-ink-700/80">{company.industry} · {company.location}</p>
            </div>
            {company.hiringNow && <span className="mb-2 ml-auto inline-flex items-center gap-1.5 rounded-full bg-electric-50 px-3.5 py-1.5 text-sm font-semibold text-electric"><span className="h-1.5 w-1.5 rounded-full bg-electric" aria-hidden="true" />Hiring Now</span>}
          </Reveal>
        </div>
      </div>

      <div className="container-x mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
        <div>
          <Reveal>
            <Button to="/marketplace" variant="secondary" size="sm" icon={<ArrowLeft className="h-4 w-4" aria-hidden="true" />}>Back to Marketplace</Button>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink">About</h2>
            <p className="lead mt-3 max-w-2xl">{company.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {company.tags.map((t) => <li key={t} className="rounded-full border border-hair bg-mist px-3.5 py-1.5 text-sm font-medium text-ink-700">{t}</li>)}
            </ul>
          </Reveal>

          <div id="opportunities" className="mt-10 scroll-mt-24">
            <Reveal delay={0.14}>
              <h2 className="font-display text-xl font-bold tracking-tight text-ink">Opportunities</h2>
              <p className="mt-2 text-[14.5px] text-ink-700/75">{company.openJobs} open roles (demo data). A few examples of what they’re hiring for:</p>
              <ul className="mt-5 space-y-3">
                {company.roles.map((r) => (
                  <li key={r} className="flex items-center justify-between gap-4 rounded-2xl border border-hair bg-white px-5 py-4 shadow-soft">
                    <span className="flex items-center gap-3 text-[15px] font-semibold text-ink"><Building2 className="h-[18px] w-[18px] text-electric" aria-hidden="true" />{r}</span>
                    <span className="shrink-0 text-sm text-ink-700/60">{company.location.split('·')[0].trim()}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-6">
            <h3 className="font-display text-base font-bold text-ink">Company details</h3>
            <dl className="mt-4 space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-electric-50 text-electric"><f.icon className="h-4 w-4" aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <dt className="text-xs text-ink-700/60">{f.label}</dt>
                    {f.href ? <dd className="truncate text-[14px] font-semibold text-electric">{f.value}</dd> : <dd className="truncate text-[14px] font-semibold text-ink">{f.value}</dd>}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-electric-50 text-electric"><Briefcase className="h-4 w-4" aria-hidden="true" /></span>
                <div><dt className="text-xs text-ink-700/60">Open jobs</dt><dd className="text-[14px] font-semibold text-ink">{company.openJobs} roles</dd></div>
              </div>
            </dl>
            <p className="mt-5 text-xs text-ink-700/55">Company details shown are demo data for illustration only.</p>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
