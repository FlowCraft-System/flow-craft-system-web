import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function GlassCard({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-colors duration-300 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </div>
  )
}
