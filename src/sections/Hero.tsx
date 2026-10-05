import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, Pause, Play, Sparkles } from 'lucide-react'
import { HeroTitle } from '@/components/HeroTitle'
import { Button } from '@/components/Button'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { VideoModal } from '@/components/VideoModal'
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
      initial: reduce ? false : { opacity: 0, y: 28 },
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
      className="relative isolate min-h-[88svh] overflow-hidden bg-[#030712] pt-4 text-white sm:min-h-[92svh] lg:pt-8"
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
            transition={{ duration: 1.6, ease }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(i + 1)
              else if (info.offset.x > 60) go(i - 1)
            }}
          >
            {/* Same height across slider images */}
            <motion.img
              src={slides[i]}
              alt=""
              className="h-full w-full object-cover opacity-65"
              initial={reduce ? false : { scale: 1.05 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: AUTOPLAY / 1000 + 1.5, ease: 'linear' }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Layered cinematic gradients and glows */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-[#030712]/70" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-[#030712] via-[#030712]/60 to-transparent" />
      <div aria-hidden="true" className="absolute -left-20 top-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-electric/20 blur-[140px]" />
      <div aria-hidden="true" className="absolute right-1/4 bottom-10 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-600/15 blur-[130px]" />

      {/* Main Hero Content */}
      <div className="mx-auto flex min-h-[calc(88svh-56px)] max-w-[1560px] flex-col justify-center px-4 py-12 sm:min-h-[calc(92svh-62px)] sm:px-8 sm:py-16 lg:px-12">
        <div className="max-w-4xl">
          {/* 1. Eyebrow badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-electric-300" />
            <span>A BRIGHTER TOMORROW</span>
          </motion.div>

          {/* 2 & 3. Headline reveal */}
          <div className="mt-5">
            <HeroTitle
              lines={['Skills Create', "What's Next."]}
              accent="What's Next."
              className="font-display font-extrabold text-white text-[2.8rem] leading-[1.02] tracking-tight sm:text-[4.2rem] lg:text-[5.4rem]"
            />
          </div>

          {/* 4. Supporting text */}
          <motion.p {...fadeUp(0.35)} className="mt-5 text-xl font-bold tracking-tight text-white/95 sm:text-2xl lg:text-[2rem]">
            Jobs. Opportunities. People. Progress.
          </motion.p>
          <motion.p {...fadeUp(0.45)} className="mt-4 max-w-[38rem] text-[1.1rem] leading-relaxed text-white/80 sm:text-xl">
            A unified platform for job seekers, recruiters, freelancers and learners — built for a brighter tomorrow.
          </motion.p>

          {/* 5. Buttons */}
          <motion.div {...fadeUp(0.55)} className="mt-9 flex flex-wrap gap-4">
            <Button to="/marketplace" size="lg" arrow magnetic className="bg-electric hover:bg-electric-400 shadow-glow text-base px-7 py-3.5">
              Explore Opportunities
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => setVideo(true)}
              className="text-base px-7 py-3.5"
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
          <motion.dl {...fadeUp(0.7)} className="mt-14 grid max-w-[42rem] grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-y-0 border-t border-white/10 pt-8">
            {heroStatsV2.map((s, k) => (
              <motion.div
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + k * 0.1, ease }}
                className={k % 2 === 1 ? 'border-l border-white/15 pl-5 sm:border-l' : k > 0 ? 'sm:border-l sm:border-white/15 sm:pl-5' : ''}
              >
                <dd className="font-display text-[2rem] font-extrabold leading-none tracking-tight text-white sm:text-[2.4rem]">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-[13px] font-medium leading-tight text-white/70 sm:text-[13.5px]">
                  {s.label}
                </dt>
              </motion.div>
            ))}
          </motion.dl>
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

      <VideoModal open={video} onClose={() => setVideo(false)} />
    </section>
  )
}
