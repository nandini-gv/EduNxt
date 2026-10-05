import { Briefcase, GraduationCap, HelpCircle, Laptop, Users, type LucideIcon } from 'lucide-react'

export type FaqCategoryKey = 'Job Seekers' | 'Recruiters' | 'Freelancers' | 'Technology Training' | 'General'
export type FaqItem = { q: string; a: string }

export const faqCategories: { key: FaqCategoryKey; icon: LucideIcon }[] = [
  { key: 'Job Seekers', icon: Briefcase },
  { key: 'Recruiters', icon: Users },
  { key: 'Freelancers', icon: Laptop },
  { key: 'Technology Training', icon: GraduationCap },
  { key: 'General', icon: HelpCircle },
]

export const faqData: Record<FaqCategoryKey, FaqItem[]> = {
  'Job Seekers': [
    { q: 'How does the job search work?', a: 'Search by title, skill or company in the Marketplace, then filter by industry, location or company size. Apply in one click once you have a profile.' },
    { q: 'How do I create a profile?', a: 'Create a free profile with your skills, experience and a few work samples. It takes a few minutes and can be reused across every application.' },
    { q: 'How do I apply for jobs?', a: 'Open a company’s page from the Marketplace and choose a listed role, or reach out directly through Connect With Us for roles not yet posted.' },
    { q: 'Can I track my applications?', a: 'Yes. Once signed in, every application status updates in your dashboard, from submitted through to interview and offer.' },
    { q: 'What kind of jobs are available?', a: 'Roles across technology, consulting, finance, healthcare, manufacturing, education, retail and startups, from internships to senior hires.' },
    { q: 'Is there any cost to use the platform?', a: 'Job search is completely free for job seekers, including profile creation, applications and our community learning programmes.' },
  ],
  Recruiters: [
    { q: 'How can recruiters post jobs?', a: 'Create a recruiter account, share your requirements and we surface job-ready, pre-assessed candidates for your open roles.' },
    { q: 'How are candidates screened?', a: 'Every candidate profile is reviewed against hands-on project work and, where relevant, a practical skills assessment.' },
    { q: 'Can we manage multiple job openings?', a: 'Yes. Recruiter accounts support unlimited postings with a shared pipeline view across your whole hiring team.' },
    { q: 'Is there a cost for hiring through ABC?', a: 'Recruiter and corporate plans are priced by scope and hiring volume. Reach out through Connect With Us for details.' },
    { q: 'How fast can we get a shortlist?', a: 'Most roles receive an initial shortlist of screened candidates within a few working days of sharing requirements.' },
  ],
  Freelancers: [
    { q: 'How does freelance work?', a: 'Build a profile, get matched with verified clients through the Marketplace, deliver in a shared workspace and get paid securely by milestone.' },
    { q: 'How do I get matched with clients?', a: 'We match your listed skills and past work against live client briefs, so you mostly see projects that are a genuine fit.' },
    { q: 'How and when do I get paid?', a: 'Clients fund each milestone up front, and payment is released to you as soon as the milestone is approved.' },
    { q: 'Can I build a portfolio on the platform?', a: 'Yes. Completed projects become case studies on your profile automatically, visible to future clients and recruiters.' },
    { q: 'Is freelance work free to join?', a: 'Creating a freelancer profile and applying to projects is free. We only take a small fee on completed, paid milestones.' },
  ],
  'Technology Training': [
    { q: 'What kind of technology training do you offer?', a: 'Live, mentor-led paths in software development, data, AI, cloud, cybersecurity and UI/UX, each ending in a portfolio project.' },
    { q: 'Are the courses live or self-paced?', a: 'Courses combine live mentor-led sessions with self-paced labs, so you can practise on your own time between classes.' },
    { q: 'Do I get a certificate?', a: 'Yes, every path ends in an assessed capstone project and a certificate you can share with employers.' },
    { q: 'Is there placement support after training?', a: 'Graduates get resume reviews, mock interviews and introductions to hiring partners through the Marketplace.' },
    { q: 'Is there any cost to use the platform?', a: 'Community learning programmes are free. Some advanced cohort-based paths carry a fee, shown before you enrol.' },
  ],
  General: [
    { q: 'Is there any cost to use the platform?', a: 'Job search and our community programmes are free. Recruiter, corporate and some advanced training plans are priced by scope.' },
    { q: 'Is my data secure?', a: 'Profile and application data is encrypted in transit and at rest, and is never sold to third parties.' },
    { q: 'Which countries do you operate in?', a: 'This demo is presented for India, though the same platform pattern can extend to any region.' },
    { q: 'How do I contact support?', a: 'Use the Connect With Us section on the homepage, or the Let’s Talk button, and a real person will follow up.' },
  ],
}
