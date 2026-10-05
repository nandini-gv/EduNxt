import { Cpu, Landmark, HeartPulse, Users, Factory, GraduationCap, ShoppingBag, Rocket, type LucideIcon } from 'lucide-react'

export type IndustryKey = 'Technology' | 'Consulting' | 'Finance' | 'Healthcare' | 'Manufacturing' | 'Education' | 'Retail' | 'Startups'

export type Industry = { key: IndustryKey; icon: LucideIcon; companies: number; tone: string }

/** Company counts are illustrative demo figures, not live totals. */
export const industries: Industry[] = [
  { key: 'Technology', icon: Cpu, companies: 420, tone: 'from-[#DCEAFF] to-[#9CC4FF]' },
  { key: 'Finance', icon: Landmark, companies: 180, tone: 'from-[#E4E9FF] to-[#B9C4FF]' },
  { key: 'Healthcare', icon: HeartPulse, companies: 140, tone: 'from-[#DFF3EE] to-[#A9DFD1]' },
  { key: 'Consulting', icon: Users, companies: 260, tone: 'from-[#EAF0FF] to-[#AEC7FF]' },
  { key: 'Manufacturing', icon: Factory, companies: 95, tone: 'from-[#EFEAE0] to-[#D8C9A8]' },
  { key: 'Education', icon: GraduationCap, companies: 120, tone: 'from-[#FFE9D6] to-[#F6C89A]' },
  { key: 'Retail', icon: ShoppingBag, companies: 110, tone: 'from-[#FBE3EA] to-[#F0AFC4]' },
  { key: 'Startups', icon: Rocket, companies: 300, tone: 'from-[#E6E1FF] to-[#BFB0FF]' },
]
