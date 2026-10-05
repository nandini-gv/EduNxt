import { Briefcase, GraduationCap, Laptop, Users, type LucideIcon } from 'lucide-react'
import svcJobseeker from '@/assets/img/svc-jobseeker.jpg'
import svcHiring from '@/assets/img/svc-hiring.jpg'
import svcFreelance from '@/assets/img/svc-freelance.jpg'
import svcTraining from '@/assets/img/svc-training.jpg'

export const brand = {
  name: 'ABC',
  tagline: 'People. Skills. Progress.',
  email: 'hello@abc.demo',
  phone: '+91 98765 43210',
  address: 'ABC Global Capability Center, Bengaluru, India',
}

/** Header items. 'anchor' scrolls to a homepage section (navigating home first if needed); 'link' is a real route. */
export type NavItem = { label: string; kind: 'anchor' | 'link'; to: string }
export const nav: NavItem[] = [
  { label: 'Know Us', kind: 'anchor', to: 'story' },
  { label: 'Job Seeker', kind: 'anchor', to: 'svc-jobseeker' },
  { label: 'Search Jobs', kind: 'link', to: '/marketplace' },
  { label: 'Recruiters', kind: 'anchor', to: 'svc-hiring' },
  { label: 'Announcement', kind: 'anchor', to: 'faq' },
]
export const mobileNav: NavItem[] = [
  ...nav,
  { label: 'Freelance', kind: 'anchor', to: 'svc-freelance' },
  { label: 'Connect With Us', kind: 'anchor', to: 'connect' },
]

export const heroStatsV2 = [
  { value: 50, suffix: 'K+', label: 'Jobs & Opportunities' },
  { value: 1, suffix: 'K+', label: 'Hiring Partners' },
  { value: 10, suffix: 'K+', label: 'Learners Trained' },
  { value: 95, suffix: '%', label: 'Placement Support' },
]

export type Service = { id: string; title: string; desc: string; cta: string; icon: LucideIcon; image: string }
export const services: Service[] = [
  { id: 'svc-jobseeker', title: 'Job Seeker', desc: 'Find the right opportunities and build your career.', cta: 'Explore Jobs', icon: Briefcase, image: svcJobseeker },
  { id: 'svc-hiring', title: 'End-to-End Hiring for HR', desc: 'Find, assess and hire job-ready talent.', cta: 'For Recruiters', icon: Users, image: svcHiring },
  { id: 'svc-freelance', title: 'Freelance', desc: 'Turn your skills into meaningful projects.', cta: 'Find Projects', icon: Laptop, image: svcFreelance },
  { id: 'svc-training', title: 'Technology Training', desc: 'Learn in-demand skills for real-world growth.', cta: 'Explore Training', icon: GraduationCap, image: svcTraining },
]

export const partners = ['Microsoft', 'Google', 'Amazon', 'IBM', 'TCS', 'Infosys', 'Accenture', 'Capgemini']

export type Testimonial = { quote: string; name: string; role: string; rating: number; person: number }
export const testimonials: Testimonial[] = [
  { quote: 'ABC helped our team stay ahead with practical, industry-relevant skills.', name: 'Rohan Mehta', role: 'HR Director, TechCorp', rating: 5, person: 0 },
  { quote: 'The hands-on labs gave me the confidence to start my career.', name: 'Priya Sharma', role: 'Student', rating: 5, person: 1 },
  { quote: 'I got my first freelance project through ABC.', name: 'Aman Verma', role: 'Freelancer', rating: 5, person: 2 },
  { quote: 'Onboarding time for new engineers dropped by weeks once we moved to their lab-based programme.', name: 'Sneha Kapoor', role: 'L&D Lead, Northwind Systems', rating: 5, person: 3 },
  { quote: 'The mentors did not just teach tools. They taught me how to think like an engineer.', name: 'Arjun Pillai', role: 'Software Trainee', rating: 4, person: 4 },
]

/* ---------- Footer ---------- */
export type FooterLink = { label: string; to?: string; anchor?: string }
export const footerCols: { title: string; items: FooterLink[] }[] = [
  {
    title: 'ABOUT',
    items: [
      { label: 'About Us', anchor: 'story' },
      { label: 'Our Story', anchor: 'story' },
      { label: 'Leadership', anchor: 'story' },
      { label: 'Careers', to: '/marketplace' },
      { label: 'Social Impact', anchor: 'faq' },
    ],
  },
  {
    title: 'SERVICES',
    items: [
      { label: 'Job Seeker', anchor: 'svc-jobseeker' },
      { label: 'Recruiters', anchor: 'svc-hiring' },
      { label: 'Freelance', anchor: 'svc-freelance' },
      { label: 'Technology Training', anchor: 'svc-training' },
    ],
  },
  {
    title: 'MARKETPLACE',
    items: [
      { label: 'Companies', to: '/marketplace#companies' },
      { label: 'Industries', to: '/marketplace#industries' },
      { label: 'Hiring Now', to: '/marketplace?hiring=1' },
    ],
  },
  {
    title: 'RESOURCES',
    items: [
      { label: 'Blog', to: '/' },
      { label: 'Help Center', anchor: 'faq' },
      { label: 'FAQs', anchor: 'faq' },
      { label: 'Contact Us', anchor: 'connect' },
    ],
  },
]

export const legalLinks = ['Privacy Policy', 'Terms of Use', 'Legal', 'Sitemap']
