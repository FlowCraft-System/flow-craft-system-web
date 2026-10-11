import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type BrandBandProps = {
  variant?: "ink" | "electric"
  id?: string
  className?: string
  children: ReactNode
}

export function BrandBand({
  variant = "ink",
  id,
  className,
  children,
}: BrandBandProps) {
  return (
    <section
      id={id}
      className={cn(
        "dark relative overflow-hidden py-20 text-brand-foreground sm:py-24",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            "absolute inset-0",
            variant === "ink"
              ? "bg-brand-ink"
              : "bg-linear-to-br from-brand-electric to-brand-ink",
          )}
        />
        <div className="animate-aurora absolute -top-24 left-1/4 size-96 rounded-full bg-brand-electric/30 blur-3xl" />
        <div className="animate-aurora absolute -right-24 bottom-0 size-96 rounded-full bg-brand/25 blur-3xl [animation-delay:-7s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      </div>
      <div className="relative">{children}</div>
    </section>
  )
}
