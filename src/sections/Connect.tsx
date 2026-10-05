import { useState } from 'react'
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'
import { MapCard } from '@/components/MapCard'
import { ContactModal } from '@/components/ContactModal'
import { Reveal } from '@/components/Reveal'
import { brand } from '@/data/site'

const items = [
  { icon: Mail, label: 'Email', v: brand.email },
  { icon: Phone, label: 'Phone', v: brand.phone },
  { icon: MapPin, label: 'Office', v: 'Bengaluru, India' },
]

export function Connect() {
  const [open, setOpen] = useState(false)
  return (
    <section id="connect" className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FF] via-[#E6F0FF] to-[#EDF4FF] pb-20 pt-16 text-ink" aria-labelledby="connect-h">
      {/* Soft atmospheric gradient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />

      <div className="mx-auto max-w-[1560px] px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-electric">
                <Sparkles className="h-3 w-3" /> GET IN TOUCH
              </span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="display-md mt-4 !text-[2.1rem] sm:!text-[2.65rem] !text-[#071A3A] font-semibold">
              <span id="connect-h">Connect With Us</span>
            </Reveal>
            <Reveal delay={0.12} className="mt-3 max-w-md text-[16.5px] leading-relaxed text-ink-700/85 sm:text-[17.5px]">
              Have questions or want to partner with us?<br />We’d love to hear from you.
            </Reveal>
            <Reveal delay={0.18} className="mt-6">
              <Button size="lg" arrow magnetic onClick={() => setOpen(true)} className="bg-electric hover:bg-electric-400 shadow-glow text-base px-7 py-3.5">
                Let’s Talk
              </Button>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {items.map((it) => (
                  <li key={it.label} className="flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur-md">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-electric/10 text-electric shadow-sm">
                      <it.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block text-[13px] font-bold text-[#071A3A]">{it.label}</span>
                      <span className="block truncate text-[13px] text-ink-700/80">{it.v}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal scale={0.98} y={24}>
              <MapCard />
            </Reveal>
          </div>
        </div>
      </div>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
