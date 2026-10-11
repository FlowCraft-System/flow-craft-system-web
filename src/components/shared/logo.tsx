import { useId } from "react"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  markClassName?: string
  showWordmark?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  const id = useId()
  const grad = `fc-grad-${id}`
  const sheen = `fc-sheen-${id}`

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FlowCraft Systems"
      className={cn("size-8 shrink-0", className)}
    >
      <defs>
        <linearGradient id={grad} x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0059EB" />
          <stop offset="0.55" stopColor="#0146BC" />
          <stop offset="1" stopColor="#01348F" />
        </linearGradient>
        <linearGradient id={sheen} x1="4" y1="2" x2="20" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${grad})`} />
      <rect x="0.6" y="0.6" width="30.8" height="30.8" rx="8.4" fill={`url(#${sheen})`} />
      <g stroke="#FFFFFF" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.5 8.5 V23.5" />
        <path d="M11.5 9.5 H21" />
        <path d="M11.5 15.8 H18.4" />
      </g>
    </svg>
  )
}

export function Logo({ className, markClassName, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-[0.95rem] font-semibold tracking-tight text-foreground">
            FlowCraft
          </span>
          <span className="text-[0.68rem] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Systems
          </span>
        </span>
      ) : null}
    </span>
  )
}
