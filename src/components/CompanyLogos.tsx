import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { className?: string }

// 1. Microsoft Logo
export function MicrosoftLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-2 font-display font-semibold tracking-tight text-white ${className}`}>
      <svg viewBox="0 0 21 21" className="h-5 w-5 shrink-0" aria-hidden="true" {...props}>
        <rect x="1" y="1" width="9" height="9" fill="#F25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
        <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
        <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
      </svg>
      <span className="text-[1.1rem] text-white">Microsoft</span>
    </div>
  )
}

// 2. Google Logo
export function GoogleLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-2 font-display font-medium tracking-tight text-white ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true" {...props}>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
      </svg>
      <span className="text-[1.1rem] text-white">Google</span>
    </div>
  )
}

// 3. Amazon Logo
export function AmazonLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-extrabold tracking-tight text-white ${className}`}>
      <span className="text-[1.15rem] font-bold tracking-tight text-white">amazon</span>
      <svg viewBox="0 0 40 16" className="h-3.5 w-7 text-[#FF9900]" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M2 5C12 14 26 15 36 6C36.8 5.3 38 6.5 37.2 7.2C26.5 17 11.5 16 1.2 7.2C0.5 6.6 1.2 5.5 2 5Z" />
        <path d="M34 2.5L38.5 7L33 10.5C32.3 11 31.5 10 32.2 9.4L35.5 7L33 4.2C32.3 3.5 33.2 2 34 2.5Z" />
      </svg>
    </div>
  )
}

// 4. IBM Logo
export function IbmLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center font-display font-black tracking-widest text-[#5AA7FF] ${className}`}>
      <svg viewBox="0 0 60 20" className="h-5 w-auto" fill="#5AA7FF" aria-hidden="true" {...props}>
        <rect x="0" y="0" width="10" height="2.2" />
        <rect x="0" y="3" width="10" height="2.2" />
        <rect x="3.8" y="6" width="2.4" height="2.2" />
        <rect x="3.8" y="9" width="2.4" height="2.2" />
        <rect x="3.8" y="12" width="2.4" height="2.2" />
        <rect x="3.8" y="15" width="2.4" height="2.2" />
        <rect x="0" y="17.8" width="10" height="2.2" />
        <path d="M14 0h9.5c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14V0zm0 6h10c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14V6zm0 6h10.5c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14v-4.4zm0 6h10.5c1.8 0 3.2 1 3.2 2.2s-1.4 2.2-3.2 2.2H14v-4.4z" />
        <path d="M31 0h3l4 8 4-8h3v20h-3v-14l-4 8h-2l-4-8v14h-3V0z" />
      </svg>
    </div>
  )
}

// 5. TCS Logo
export function TcsLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-black text-white ${className}`}>
      <span className="grid h-5 w-5 place-items-center rounded-md bg-gradient-to-tr from-[#1769FF] via-[#00A4EF] to-[#E6007E] text-[10px] font-black text-white shadow-sm">
        tcs
      </span>
      <span className="text-[1.1rem] font-black tracking-tight text-[#38BDF8]">tcs</span>
    </div>
  )
}

// 6. Infosys Logo
export function InfosysLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center font-display font-bold tracking-tight text-[#38BDF8] ${className}`}>
      <span className="text-[1.15rem] italic text-[#38BDF8]">Infosys</span>
    </div>
  )
}

// 7. Accenture Logo
export function AccentureLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-0.5 font-display font-bold tracking-tight text-white ${className}`}>
      <span className="text-[1.1rem] text-white">accenture</span>
      <span className="text-[1.2rem] font-extrabold text-[#C084FC]">&gt;</span>
    </div>
  )
}

// 8. Capgemini Logo
export function CapgeminiLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-semibold tracking-tight text-white ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#38BDF8]" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
      <span className="text-[1.05rem] text-[#38BDF8]">Capgemini</span>
    </div>
  )
}

// 9. Oracle Logo
export function OracleLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1 font-display font-bold tracking-tight text-[#C74634] ${className}`}>
      <span className="text-[1.15rem] tracking-wider text-[#F80000]">ORACLE</span>
    </div>
  )
}

// 10. Meta Logo
export function MetaLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-semibold text-white ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0081FB]" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M16.8 5c-1.8 0-3.3.9-4.2 2.3C11.7 5.9 10.2 5 8.4 5 5.4 5 3 7.6 3 10.8c0 3.8 3.5 7.2 8.4 10.2 4.9-3 8.4-6.4 8.4-10.2C19.8 7.6 17.4 5 16.8 5zM12 18.5c-3.6-2.4-6.4-5-6.4-7.7 0-1.8 1.3-3.2 3.2-3.2 1.4 0 2.5.8 3.2 2.1l.6.9.6-.9c.7-1.3 1.8-2.1 3.2-2.1 1.9 0 3.2 1.4 3.2 3.2 0 2.7-2.8 5.3-6.4 7.7z" />
      </svg>
      <span className="text-[1.1rem]">Meta</span>
    </div>
  )
}

// 11. Apple Logo
export function AppleLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-semibold text-white ${className}`}>
      <svg viewBox="0 0 170 170" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.09-3.48-2.81-7.39-7.53-11.74-14.16-7.39-11.28-13.06-23.77-17-37.47-3.94-13.7-5.91-26.42-5.91-38.16 0-15.11 3.69-27.75 11.07-37.93 7.38-10.18 16.92-15.34 28.62-15.47 5.17 0 10.74 1.25 16.71 3.75 5.97 2.5 10.02 3.78 12.16 3.84 1.83 0 5.99-1.29 12.48-3.87 6.49-2.58 11.89-3.81 16.2-3.69 11.96.65 21.66 5.16 29.1 13.53-10.45 6.33-15.54 15.16-15.28 26.5.26 8.76 3.66 16.14 10.2 22.14 6.54 6 14.33 9.47 23.37 10.41-2.48 7.39-5.74 14.73-9.78 22.02zM119.22 31.09c0-7.33 2.65-14.46 7.95-21.39 5.3-6.93 11.97-10.87 20-11.83.26.91.39 1.88.39 2.92 0 7.21-2.73 14.38-8.19 21.51-5.46 7.13-12.1 11.09-19.92 11.88-.06-1.04-.23-2.07-.23-3.09z" />
      </svg>
      <span className="text-[1.1rem]">Apple</span>
    </div>
  )
}

// 12. Salesforce Logo
export function SalesforceLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-display font-semibold text-[#00A1E0] ${className}`}>
      <span className="text-[1.1rem] font-extrabold tracking-tight">salesforce</span>
    </div>
  )
}

// 13. Intel Logo
export function IntelLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center font-display font-black tracking-tight text-[#0068B5] ${className}`}>
      <span className="text-[1.15rem] text-[#00C7FD]">intel</span>
    </div>
  )
}

// 14. Cisco Logo
export function CiscoLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1 font-display font-bold tracking-tight text-[#049FD9] ${className}`}>
      <span className="text-[1.1rem]">CISCO</span>
    </div>
  )
}

// 15. Wipro Logo
export function WiproLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1 font-display font-bold tracking-tight text-white ${className}`}>
      <span className="text-[1.1rem] text-[#38BDF8]">wipro</span>
    </div>
  )
}

// 16. HCLTech Logo
export function HclTechLogo({ className = 'h-6 w-auto', ...props }: IconProps) {
  return (
    <div className={`inline-flex items-center gap-1 font-display font-black tracking-tight text-white ${className}`}>
      <span className="text-[1.15rem] text-white">HCL</span>
      <span className="text-[1.15rem] text-[#0081FB]">Tech</span>
    </div>
  )
}

// Helper to render company logo by name
export function CompanyLogo({ name, className = '' }: { name: string; className?: string }) {
  switch (name) {
    case 'Microsoft': return <MicrosoftLogo className={className} />
    case 'Google': return <GoogleLogo className={className} />
    case 'Amazon': return <AmazonLogo className={className} />
    case 'IBM': return <IbmLogo className={className} />
    case 'TCS': return <TcsLogo className={className} />
    case 'Infosys': return <InfosysLogo className={className} />
    case 'Accenture': return <AccentureLogo className={className} />
    case 'Capgemini': return <CapgeminiLogo className={className} />
    case 'Oracle': return <OracleLogo className={className} />
    case 'Meta': return <MetaLogo className={className} />
    case 'Apple': return <AppleLogo className={className} />
    case 'Salesforce': return <SalesforceLogo className={className} />
    case 'Intel': return <IntelLogo className={className} />
    case 'Cisco': return <CiscoLogo className={className} />
    case 'Wipro': return <WiproLogo className={className} />
    case 'HCLTech': return <HclTechLogo className={className} />
    default: return <span className={`font-display font-bold text-white ${className}`}>{name}</span>
  }
}
