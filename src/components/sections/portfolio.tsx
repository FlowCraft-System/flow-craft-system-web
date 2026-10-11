import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  HandshakeIcon,
  StoreManagement01Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Stagger, StaggerItem } from "@/components/shared/reveal"

const caseIcons = [StoreManagement01Icon, HandshakeIcon]
const caseBars = [
  [45, 70, 55, 88, 66, 96],
  [60, 40, 78, 58, 90, 72],
]

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
    <section id="portafolio" className="relative py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("portfolio.eyebrow")}
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {cases.map((item, index) => {
            const Icon = caseIcons[index] ?? StoreManagement01Icon
            const bars = caseBars[index] ?? caseBars[0]
            return (
              <StaggerItem key={item.client} className="h-full">
                <Card className="h-full overflow-hidden bg-card/60">
                  <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border/60 bg-linear-to-br from-brand to-brand-deep">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]" />
                    <span className="relative flex size-16 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/25 backdrop-blur">
                      <HugeiconsIcon icon={Icon} strokeWidth={1.6} className="size-8" />
                    </span>
                    <div className="absolute right-4 bottom-4 flex items-end gap-1">
                      {bars.map((height, barIndex) => (
                        <span
                          key={barIndex}
                          className="w-1.5 rounded-full bg-white/40"
                          style={{ height: `${height * 0.32}px` }}
                        />
                      ))}
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.sector}</Badge>
                      <span className="text-xs font-medium text-muted-foreground">
                        {item.client}
                      </span>
                    </div>
                    <CardTitle className="pt-1 text-base">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant="outline">{tag}</Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </section>
  )
}
