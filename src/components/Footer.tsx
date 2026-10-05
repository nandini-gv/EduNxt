import { Link } from 'react-router-dom'
import { Globe2 } from 'lucide-react'
import { brand, footerCols, legalLinks, type FooterLink } from '@/data/site'
import { Logo } from './Logo'
import { Skyline } from './Art'
import { AnchorLink } from './AnchorLink'
import { InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from './BrandIcons'

const socials = [
  { I: LinkedinIcon, l: 'LinkedIn' },
  { I: XIcon, l: 'X' },
  { I: YoutubeIcon, l: 'YouTube' },
  { I: InstagramIcon, l: 'Instagram' },
]

const linkCls = 'link-u text-[14px] text-ink-700/80 transition-colors hover:text-electric font-medium'

function FooterItem({ item }: { item: FooterLink }) {
  if (item.anchor) return <AnchorLink id={item.anchor} className={linkCls}>{item.label}</AnchorLink>
  return <Link to={item.to ?? '/'} className={linkCls}>{item.label}</Link>
}

/** Light footer that dissolves into the page above with organic gradients, wave shapes, skyline & soft ambient lighting. */
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#F1F6FF] pt-20 sm:pt-28 text-ink">
      {/* Soft light background wave gradient blending with Connect section */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-b from-[#E6F0FF] via-[#F1F6FF] to-white" />

      {/* Wave shape transition */}
      <svg aria-hidden="true" viewBox="0 0 1440 220" preserveAspectRatio="none" className="absolute left-0 top-0 -z-10 h-36 w-[105%] animate-wave sm:h-48">
        <defs>
          <linearGradient id="fw-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D9E8FF" stopOpacity=".7" />
            <stop offset="1" stopColor="#D9E8FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 70C220 20 420 120 720 76C1020 32 1220 100 1440 50V220H0Z" fill="url(#fw-light)" />
        <path d="M0 110C260 70 460 150 760 110C1060 70 1240 130 1440 90V220H0Z" fill="url(#fw-light)" fillOpacity=".6" />
      </svg>

      {/* Skyline vector background backdrop */}
      <div aria-hidden="true" className="absolute bottom-0 right-0 -z-10 h-[80%] w-[55%] opacity-[0.18] [mask-image:linear-gradient(0deg,#000_20%,transparent_90%)] sm:w-[42%]">
        <Skyline bare className="h-full w-full" />
      </div>

      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12 relative pb-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-3 text-[15.5px] font-bold text-ink">People. Skills. Progress.</p>
            <p className="mt-1.5 max-w-[20rem] text-[14.5px] leading-relaxed text-ink-700/80">
              A unified platform for jobs, hiring, freelance projects and technology training.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ I, l }) => (
                <li key={l}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={l}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-soft border border-hair transition-all duration-300 hover:-translate-y-0.5 hover:bg-electric hover:text-white hover:shadow-glow"
                  >
                    <I className="h-4.5 w-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {footerCols.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-display text-[13px] font-extrabold tracking-widest text-ink uppercase">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <FooterItem item={it} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Legal & Country Selector Footer Bottom Bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ink-700/15 pt-8 text-[13.5px] text-ink-700/75 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 font-medium">
            {legalLinks.map((l) => (
              <li key={l}>
                <Link to="/" className="link-u hover:text-ink">{l}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <label className="inline-flex items-center gap-2 font-semibold text-ink bg-white px-3 py-1 rounded-full border border-hair shadow-sm">
              <Globe2 className="h-4 w-4 text-electric" aria-hidden="true" />
              <span className="sr-only">Country</span>
              <select defaultValue="India" className="cursor-pointer appearance-none bg-transparent pr-1 font-semibold text-ink outline-none">
                <option>India</option>
              </select>
            </label>
            <p className="text-[13px]">© 2026 ABC. All rights reserved. Demo platform for job seekers, recruiters and learners.</p>
          </div>
        </div>
        <p className="sr-only">{brand.email}</p>
      </div>
    </footer>
  )
}
