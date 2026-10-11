import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "center" | "start"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Badge variant="secondary" className="uppercase tracking-wider">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="max-w-3xl font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base text-muted-foreground text-balance sm:text-lg",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
