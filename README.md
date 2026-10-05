# ABC — People. Skills. Progress.

Premium marketing/demo website. React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.
All data is static and fictional (see `src/data/site.ts`).

## Run

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # type-check + production build (dist/)
npm run build:single # one self-contained HTML file with hash routing (dist-single/)
```

## Structure

```
src/
  components/  Navbar, MobileMenu, Footer, ProgramCard, Rail (drag carousel), TestimonialSlider,
               Timeline, CTASection, PageHeader, ContactForm, JobCard, FilterBar, FeatureCard,
               GlassCard, Reveal, AnimatedCounter, Accordion, Art (illustrations) ...
  sections/    Home sections: Hero, ProgramsRail, Impact, Testimonials
  pages/       Home, CorporateTraining, FreelanceWork, StudentTraining, JobPosting,
               CorporateHiring, SocialWelfare, Login, Contact, NotFound
  layouts/     MainLayout (header, animated route transitions, footer, back-to-top, mobile CTA)
  hooks/       useSmoothScroll (Lenis), useDragRail, useScrolled
  data/        site.ts — all copy, jobs, testimonials, FAQs
  lib/         utils, seo (per-route title/description/Open Graph)
```

## Replacing the illustrations with photography

There is no stock photography in this build. Every visual is a custom SVG in
`src/components/Art.tsx` (`PersonPanel`, `HeroVisual`, `MountainScene`, `Globe`, `LabArt`, ...).
To use photos, replace the `PersonPanel` / `MountainScene` element inside `HeroVisual`,
`ProgramCard`, `CTASection` and `SocialWelfare` with an `<img loading="lazy" ... />`
(keep the same wrapper so the hover-zoom, clip reveal and parallax still apply).

## Notes

- Routing: `BrowserRouter` by default; the single-file build sets `VITE_ROUTER=hash`.
- Smooth scrolling is Lenis; it and all motion respect `prefers-reduced-motion`.
- Fonts (Manrope, Inter) are self-hosted from `src/assets/fonts`.
- Forms, login, newsletter and job alerts are front-end only demos.
# EduNxt
