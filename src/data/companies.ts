import type { IndustryKey } from './industries'

export type Company = {
  slug: string
  name: string
  initial: string
  tone: string
  industry: IndustryKey
  location: string
  employees: number
  employeesLabel: string
  openJobs: number
  hiringNow: boolean
  tags: string[]
  description: string
  roles: string[]
}

/**
 * Demo marketplace data. Well-known names appear as illustrative placeholders only —
 * every figure here (jobs, size, hiring status) is fictional, matching the disclaimer
 * shown on the Marketplace page and in the footer.
 */
export const companies: Company[] = [
  { slug: 'microsoft', name: 'Microsoft', initial: 'M', tone: 'from-[#DCEAFF] to-[#9CC4FF]', industry: 'Technology', location: 'Bengaluru · Hyderabad · Pune', employees: 10000, employeesLabel: '10,000+ employees', openJobs: 120, hiringNow: true, tags: ['Cloud', 'AI', 'Enterprise'], description: 'Enterprise cloud, productivity and AI platforms used by organizations worldwide.', roles: ['Cloud Solutions Engineer', 'Product Manager, Azure', 'AI Research Intern'] },
  { slug: 'google', name: 'Google', initial: 'G', tone: 'from-[#E9F2FF] to-[#C6DCFF]', industry: 'Technology', location: 'Bengaluru', employees: 5000, employeesLabel: '5,000+ employees', openJobs: 85, hiringNow: true, tags: ['Search', 'Cloud', 'AI'], description: 'Search, cloud infrastructure and consumer technology at global scale.', roles: ['Software Engineer II', 'UX Researcher', 'Data Scientist'] },
  { slug: 'tcs', name: 'TCS', initial: 'T', tone: 'from-[#EAF0FF] to-[#AEC7FF]', industry: 'Technology', location: 'Pan-India', employees: 500000, employeesLabel: '500,000+ employees', openJobs: 240, hiringNow: true, tags: ['Consulting', 'Cloud', 'Enterprise'], description: 'One of the world’s largest IT services and consulting organizations.', roles: ['Systems Engineer', 'Business Analyst', 'Cloud Architect'] },
  { slug: 'infosys', name: 'Infosys', initial: 'I', tone: 'from-[#E4E9FF] to-[#B9C4FF]', industry: 'Technology', location: 'Pan-India', employees: 300000, employeesLabel: '300,000+ employees', openJobs: 150, hiringNow: false, tags: ['Digital', 'Consulting', 'Cloud'], description: 'Digital services and consulting spanning cloud, data and enterprise platforms.', roles: ['Associate Consultant', 'DevOps Engineer', 'QA Lead'] },
  { slug: 'accenture', name: 'Accenture', initial: 'A', tone: 'from-[#EFEAFB] to-[#CBB8F2]', industry: 'Consulting', location: 'Pan-India', employees: 250000, employeesLabel: '250,000+ employees', openJobs: 175, hiringNow: true, tags: ['Strategy', 'Technology', 'Consulting'], description: 'Strategy, technology and operations consulting across every major industry.', roles: ['Management Consultant', 'Technology Analyst', 'Change Lead'] },
  { slug: 'capgemini', name: 'Capgemini', initial: 'C', tone: 'from-[#DDEFEF] to-[#A9D6D6]', industry: 'Consulting', location: 'Pune · Mumbai', employees: 200000, employeesLabel: '200,000+ employees', openJobs: 130, hiringNow: false, tags: ['Cloud', 'Data', 'Consulting'], description: 'Global consulting and technology transformation partner.', roles: ['Data Engineer', 'SAP Consultant', 'Scrum Master'] },
  { slug: 'orbit-finance', name: 'Orbit Finance', initial: 'O', tone: 'from-[#E4E9FF] to-[#B9C4FF]', industry: 'Finance', location: 'Mumbai', employees: 1200, employeesLabel: '1,200+ employees', openJobs: 34, hiringNow: true, tags: ['Fintech', 'Banking', 'Risk'], description: 'Digital banking and risk platforms for retail and business customers. (Fictional company)', roles: ['Risk Analyst', 'Backend Engineer', 'Compliance Associate'] },
  { slug: 'meridian-retail', name: 'Meridian Retail', initial: 'MR', tone: 'from-[#FBE3EA] to-[#F0AFC4]', industry: 'Retail', location: 'Bengaluru', employees: 3400, employeesLabel: '3,400+ employees', openJobs: 58, hiringNow: true, tags: ['Retail', 'E-commerce', 'Supply Chain'], description: 'Omnichannel retail and logistics across South Asia. (Fictional company)', roles: ['Supply Chain Analyst', 'E-commerce Manager', 'Frontend Developer'] },
  { slug: 'cloudnest', name: 'CloudNest', initial: 'CN', tone: 'from-[#DCEAFF] to-[#9CC4FF]', industry: 'Technology', location: 'Hyderabad', employees: 850, employeesLabel: '850+ employees', openJobs: 42, hiringNow: true, tags: ['Cloud', 'DevOps', 'Kubernetes'], description: 'Managed cloud infrastructure and DevOps for growing engineering teams. (Fictional company)', roles: ['DevOps Engineer', 'Site Reliability Engineer', 'Cloud Support Intern'] },
  { slug: 'datanest', name: 'DataNest', initial: 'DN', tone: 'from-[#E9F2FF] to-[#C6DCFF]', industry: 'Technology', location: 'Remote-first', employees: 400, employeesLabel: '400+ employees', openJobs: 28, hiringNow: false, tags: ['Data', 'Analytics', 'AI'], description: 'Analytics and applied AI for teams that run on data. (Fictional company)', roles: ['Data Analyst', 'ML Engineer', 'Analytics Consultant'] },
  { slug: 'northwind-systems', name: 'Northwind Systems', initial: 'NS', tone: 'from-[#EFEAE0] to-[#D8C9A8]', industry: 'Manufacturing', location: 'Pune', employees: 6200, employeesLabel: '6,200+ employees', openJobs: 21, hiringNow: false, tags: ['Industrial IoT', 'Automation', 'Engineering'], description: 'Industrial automation and connected-factory systems. (Fictional company)', roles: ['Automation Engineer', 'IoT Firmware Developer', 'Plant Systems Analyst'] },
  { slug: 'vitalis-health', name: 'Vitalis Health', initial: 'V', tone: 'from-[#DFF3EE] to-[#A9DFD1]', industry: 'Healthcare', location: 'Chennai', employees: 2100, employeesLabel: '2,100+ employees', openJobs: 19, hiringNow: true, tags: ['Healthcare', 'MedTech', 'Data'], description: 'Digital health records and patient-care technology. (Fictional company)', roles: ['Health Informatics Analyst', 'Backend Engineer', 'Clinical Data Coordinator'] },
  { slug: 'aarambh-learning', name: 'Aarambh Learning', initial: 'AL', tone: 'from-[#FFE9D6] to-[#F6C89A]', industry: 'Education', location: 'Delhi NCR', employees: 300, employeesLabel: '300+ employees', openJobs: 15, hiringNow: true, tags: ['EdTech', 'Learning', 'Content'], description: 'Learning platforms and content for schools and working learners. (Fictional company)', roles: ['Curriculum Designer', 'Full-stack Developer', 'Learning Experience Designer'] },
  { slug: 'pixelwise', name: 'Pixelwise', initial: 'P', tone: 'from-[#EFEAFB] to-[#CBB8F2]', industry: 'Consulting', location: 'Mumbai', employees: 180, employeesLabel: '180+ employees', openJobs: 12, hiringNow: false, tags: ['UX', 'Branding', 'Product'], description: 'Design and product consulting for ambitious digital teams. (Fictional company)', roles: ['Product Designer', 'Brand Strategist', 'Design Intern'] },
  { slug: 'kestrel-logistics', name: 'Kestrel Logistics', initial: 'K', tone: 'from-[#E6E1FF] to-[#BFB0FF]', industry: 'Startups', location: 'Bengaluru', employees: 60, employeesLabel: '60+ employees', openJobs: 8, hiringNow: true, tags: ['Logistics', 'Supply Chain', 'Startup'], description: 'Early-stage startup rebuilding last-mile logistics. (Fictional company)', roles: ['Founding Engineer', 'Operations Associate', 'Growth Marketer'] },
]

export const companyBySlug = (slug: string) => companies.find((c) => c.slug === slug)
