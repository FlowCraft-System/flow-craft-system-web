import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteDownIcon } from "@hugeicons/core-free-icons"
import { FaStar } from "react-icons/fa6"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Stagger, StaggerItem } from "@/components/shared/reveal"
import { BrandBand } from "@/components/shared/brand-band"
import { GlassCard } from "@/components/shared/glass-card"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function Testimonials() {
  const { t } = useTranslation()
  const items = t("testimonials.items", { returnObjects: true }) as {
    quote: string
    name: string
    role: string
    company: string
  }[]

  return (
    <BrandBand id="testimonios" variant="electric">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
        />

        <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.12}>
          {items.map((item) => (
            <StaggerItem key={item.name} className="h-full">
              <GlassCard className="flex h-full flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-0.5 text-brand-foreground"
                    role="img"
                    aria-label="5 / 5"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar key={index} aria-hidden className="size-3.5" />
                    ))}
                  </div>
                  <HugeiconsIcon
                    icon={QuoteDownIcon}
                    strokeWidth={2}
                    className="size-7 text-brand-foreground/30"
                  />
                </div>

                <p className="text-sm text-brand-foreground/90">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-auto flex items-center gap-3 pt-2">
                  <Avatar>
                    <AvatarFallback className="bg-white/15 text-xs font-semibold text-brand-foreground">
                      {initials(item.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span className="text-xs text-brand-foreground/70">
                      {item.role} · {item.company}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </BrandBand>
  )
}
