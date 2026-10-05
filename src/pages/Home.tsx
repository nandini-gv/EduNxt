import { useEffect } from 'react'
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { Story } from '@/sections/Story'
import { Partners } from '@/sections/Partners'
import { HomeFaq } from '@/sections/HomeFaq'
import { Connect } from '@/sections/Connect'
import { consumePendingScroll } from '@/components/AnchorLink'
import { useLenis } from '@/hooks/useSmoothScroll'
import { useSeo } from '@/lib/seo'

export default function Home() {
  useSeo('ABC — People. Skills. Progress.', 'A unified platform for job seekers, recruiters, freelancers and learners, built for a brighter tomorrow.')
  const lenis = useLenis()
  useEffect(() => { consumePendingScroll(lenis) }, [lenis])
  return (
    <>
      <Hero />
      <Services />
      <Story />
      <Partners />
      <HomeFaq />
      <Connect />
    </>
  )
}
