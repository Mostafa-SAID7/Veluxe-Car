export function SectionDivider({ className = "text-current" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 1440 60" 
      className={`w-full h-8 md:h-14 drop-shadow-[0_-12px_24px_rgba(0,0,0,0.15)] block -mb-[1px] relative z-10 fill-current ${className}`} 
      preserveAspectRatio="none"
    >
      <path d="M0,60 L1440,60 L1440,30 L920,30 C880,30 870,0 830,0 L610,0 C570,0 560,30 520,30 L0,30 Z" />
    </svg>
  )
}
