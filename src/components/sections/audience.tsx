import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Stagger, StaggerItem } from "@/components/shared/reveal"

export function Audience() {
  const { t } = useTranslation()
  const items = t("audience.items", { returnObjects: true }) as string[]

  return (
    <section id="para-quien" className="relative py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("audience.eyebrow")}
          title={t("audience.title")}
          subtitle={t("audience.subtitle")}
        />

        <Stagger className="grid gap-3.5 md:grid-cols-2">
          {items.map((item) => (
            <StaggerItem key={item}>
              <Card
                size="sm"
                className="h-full flex-row items-start gap-3 bg-card/60 transition-colors hover:bg-accent/40"
              >
                <CardContent className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} className="size-4" />
                  </span>
                  <p className="text-sm text-foreground">{item}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
