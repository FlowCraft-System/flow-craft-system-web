import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  HandshakeIcon,
  StoreManagement01Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Stagger, StaggerItem } from "@/components/shared/reveal"
import { BrandBand } from "@/components/shared/brand-band"
import { GlassCard } from "@/components/shared/glass-card"

const caseIcons = [StoreManagement01Icon, HandshakeIcon]

export function Portfolio() {
  const { t } = useTranslation()
  const cases = t("portfolio.cases", { returnObjects: true }) as {
    client: string
    sector: string
    title: string
    description: string
    tags: string[]
  }[]

  return (
    <BrandBand id="portafolio" variant="ink">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("portfolio.eyebrow")}
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {cases.map((item, index) => {
            const Icon = caseIcons[index] ?? StoreManagement01Icon
            return (
              <StaggerItem key={item.client} className="h-full">
                <GlassCard className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="glass-strong flex size-12 items-center justify-center rounded-xl">
                      <HugeiconsIcon
                        icon={Icon}
                        strokeWidth={1.7}
                        className="size-6"
                      />
                    </span>
                    <Badge variant="secondary">{item.sector}</Badge>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-brand-foreground/70">
                      {item.client}
                    </span>
                    <h3 className="font-heading text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-brand-foreground/75">
                    {item.description}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="outline">{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </BrandBand>
  )
}
