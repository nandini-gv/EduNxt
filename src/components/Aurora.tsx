export function Aurora({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F1F6FF] via-white to-white" />
      <div className="absolute -right-32 -top-40 h-[560px] w-[560px] animate-aurora rounded-full bg-electric/[0.14] blur-[110px]" />
      <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] animate-aurora rounded-full bg-electric-300/[0.18] blur-[110px] [animation-delay:-6s]" />
      <div className="absolute inset-0 opacity-[.5] [background-image:radial-gradient(rgba(7,26,58,.10)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_70%_30%,#000,transparent_70%)]" />
    </div>
  )
}
