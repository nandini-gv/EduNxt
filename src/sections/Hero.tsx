import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, Pause, Play, Sparkles } from 'lucide-react'
import { HeroTitle } from '@/components/HeroTitle'
import { Button } from '@/components/Button'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { VideoModal } from '@/components/VideoModal'
import { HeroMarketplacePanel } from '@/components/HeroMarketplacePanel'
import { heroStatsV2 } from '@/data/site'
import { ease } from '@/lib/utils'
import heroOrbit from '@/assets/img/hero-orbit.jpg'
import heroEarth from '@/assets/img/hero-earth.jpg'
import heroHorizon from '@/assets/img/hero-horizon.jpg'

const slides = [heroOrbit, heroEarth, heroHorizon]
const AUTOPLAY = 6500

export function Hero() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [hold, setHold] = useState(false)
  const [video, setVideo] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 80])
  const fade = useTransform(scrollY, [0, 500], [1, 0.3])

  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), [])
  useEffect(() => {
    if (!playing || hold || reduce) return
    const t = setTimeout(() => go(i + 1), AUTOPLAY)
    return () => clearTimeout(t)
  }, [i, playing, hold, reduce, go])

  const fadeUp = (d: number) =>
    ({
      initial: reduce ? false : { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] },
    } as const)

  return (
    <section
      role="group"
      aria-roledescription="carousel"
      aria-label="Skills Create What's Next"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(i + 1)
        if (e.key === 'ArrowLeft') go(i - 1)
      }}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
      className="relative isolate min-h-[90svh] overflow-hidden bg-[#050A14] pt-4 text-white sm:min-h-[94svh] lg:pt-6"
    >
      {/* Cinematic backdrop: Planet imagery with Ken Burns scale & subtle drifting atmosphere */}
      <motion.div style={{ y, opacity: fade }} className="absolute inset-0 -z-20" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(i + 1)
              else if (info.offset.x > 60) go(i - 1)
            }}
          >
            <motion.img
              src={slides[i]}
              alt=""
              className="h-full w-full object-cover opacity-60"
              initial={reduce ? false : { scale: 1.05 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: AUTOPLAY / 1000 + 1.5, ease: 'linear' }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Atmospheric layered gradients and glows */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050A14] via-[#050A14]/40 to-[#050A14]/75" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[#050A14] to-transparent" />
      <div aria-hidden="true" className="absolute -left-20 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-electric/20 blur-[130px]" />
      <div aria-hidden="true" className="absolute -right-20 bottom-10 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-600/15 blur-[120px]" />

      {/* Main Hero Grid */}
      <div className="mx-auto flex min-h-[calc(90svh-56px)] max-w-[1560px] flex-col justify-center px-4 py-8 sm:min-h-[calc(94svh-62px)] sm:px-8 sm:py-12 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Storytelling Copy & Stats */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* 1. Eyebrow badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-electric-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-electric-300" />
              <span>A BRIGHTER TOMORROW</span>
            </motion.div>

            {/* 2 & 3. Headline reveal */}
            <div className="mt-4">
              <HeroTitle
                lines={['Skills Create', "What's Next."]}
                accent="What's Next."
                className="font-display font-extrabold text-white text-[2.6rem] leading-[1.02] tracking-tight sm:text-[3.8rem] lg:text-[4.6rem]"
              />
            </div>

            {/* 4. Supporting text */}
            <motion.p {...fadeUp(0.35)} className="mt-4 text-xl font-bold tracking-tight text-white/95 sm:text-2xl lg:text-[1.75rem]">
              Jobs. Opportunities. People. Progress.
            </motion.p>
            <motion.p {...fadeUp(0.45)} className="mt-3 max-w-[34rem] text-[1.0625rem] leading-relaxed text-white/75 sm:text-lg">
              A unified platform for job seekers, recruiters, freelancers and learners — built for a brighter tomorrow.
            </motion.p>

            {/* 5. Buttons */}
            <motion.div {...fadeUp(0.55)} className="mt-8 flex flex-wrap gap-3.5">
              <Button to="/marketplace" size="lg" arrow magnetic className="bg-electric hover:bg-electric-400 shadow-glow">
                Explore Opportunities
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => setVideo(true)}
                icon={
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-ink">
                    <Play className="ml-px h-3 w-3 fill-current" aria-hidden="true" />
                  </span>
                }
              >
                Watch Video
              </Button>
            </motion.div>

            {/* 6. Stats reveal sequentially */}
            <motion.dl {...fadeUp(0.7)} className="mt-12 grid max-w-[36rem] grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
              {heroStatsV2.map((s, k) => (
                <motion.div
                  key={s.label}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + k * 0.1, ease }}
                  className={k % 2 === 1 ? 'border-l border-white/15 pl-4 sm:border-l' : k > 0 ? 'sm:border-l sm:border-white/15 sm:pl-4' : ''}
                >
                  <dd className="font-display text-[1.95rem] font-extrabold leading-none tracking-tight text-white sm:text-[2.2rem]">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-2 text-[12.5px] font-medium leading-tight text-white/65 sm:text-[13px]">
                    {s.label}
                  </dt>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          {/* Right Column: Floating Marketplace Panel (Adobe-style inspiration) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <HeroMarketplacePanel />
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="mx-auto flex max-w-[1560px] items-center gap-4 px-4 pb-6 sm:px-8 sm:pb-8 lg:px-12">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose background">
          {slides.map((_, k) => (
            <button key={k} role="tab" aria-selected={k === i} aria-label={`Slide ${k + 1}`} onClick={() => go(k)} className="flex items-center gap-1.5">
              <span className={`font-mono text-[11px] tabular-nums transition-colors ${k === i ? 'text-white font-bold' : 'text-white/40'}`}>
                {String(k + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
        <div className="relative h-[3px] w-24 overflow-hidden rounded-full bg-white/20 sm:w-32">
          <motion.div
            key={i + (playing && !hold ? '-run' : '-stop')}
            className="absolute inset-y-0 left-0 bg-electric-300"
            initial={{ width: '0%' }}
            animate={{ width: playing && !hold && !reduce ? '100%' : '0%' }}
            transition={{ duration: AUTOPLAY / 1000, ease: 'linear' }}
          />
        </div>
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          className="grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
        </button>
        <div className="ml-auto flex gap-1.5">
          <button
            onClick={() => go(i - 1)}
            aria-label="Previous background"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(i + 1)}
            aria-label="Next background"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:bg-white/10"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Smooth transition wave into light sections */}
      <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full text-white sm:h-14">
        <path d="M0 60C240 10 420 90 720 52C1020 14 1200 80 1440 30V90H0Z" fill="currentColor" />
      </svg>
      <VideoModal open={video} onClose={() => setVideo(false)} />
    </section>
  )
}
