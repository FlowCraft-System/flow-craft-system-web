import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"
import { FaWhatsapp } from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
}

function PricingCard({ plan, popular }: { plan: Plan; popular: boolean }) {
  const { t } = useTranslation()

  return (
    <Card
      className={cn(
        "pricing-card group/card relative h-full overflow-hidden bg-card/60 transition-shadow duration-300",
        popular ? "ring-2 ring-primary/60" : "hover:ring-primary/40",
      )}
    >
      <span aria-hidden className="pricing-fill" />

      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="pricing-text text-base">{plan.name}</CardTitle>
          {popular ? <Badge>{t("pricing.popular")}</Badge> : null}
        </div>
        <div className="flex items-baseline gap-1.5 pt-1">
          <span className="pricing-text text-xs text-muted-foreground">
            {plan.period}
          </span>
          <span className="pricing-text font-heading text-3xl font-semibold">
            {plan.price}
          </span>
        </div>
        <CardDescription className="pricing-text">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 flex-1">
        <ul className="flex flex-col gap-2.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                strokeWidth={2}
                className="pricing-text mt-0.5 size-4 shrink-0 text-primary"
              />
              <span className="pricing-text text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="relative z-10 mt-auto">
        <Button
          variant={popular ? "default" : "outline"}
          className="pricing-text h-9 w-full text-sm"
          render={
            <a
              href={whatsappLink(t("pricing.ctaMessage", { plan: plan.name }))}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t("pricing.cta")} ${plan.name}`}
            />
          }
          nativeButton={false}
        >
          <FaWhatsapp aria-hidden />
          {t("pricing.cta")}
        </Button>
      </CardFooter>
    </Card>
  )
}

export function Pricing() {
  const { t } = useTranslation()
  const plans = t("pricing.plans", { returnObjects: true }) as Plan[]

  return (
    <section
      id="precios"
      className="relative border-y border-border/60 bg-brand/5 py-20 sm:py-24"
    >
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("pricing.eyebrow")}
          title={t("pricing.title")}
          subtitle={t("pricing.subtitle")}
        />

        <Reveal className="mx-auto flex w-full max-w-sm flex-col items-center gap-1 rounded-2xl border border-border/70 bg-linear-to-b from-brand/10 to-transparent p-6 text-center">
          <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            {t("pricing.rangeLabel")}
          </span>
          <span className="font-heading text-3xl font-semibold sm:text-4xl">
            $100 – $800
            <span className="ml-1.5 text-base font-medium text-muted-foreground">USD</span>
          </span>
          <span className="text-xs text-muted-foreground">{t("pricing.rangeSuffix")}</span>
        </Reveal>

        <Stagger className="grid items-stretch gap-6 lg:grid-cols-3" stagger={0.12}>
          {plans.map((plan, index) => (
            <StaggerItem key={plan.name} className="h-full">
              <PricingCard plan={plan} popular={index === 1} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <p className="text-center text-xs text-muted-foreground">
            {t("pricing.disclaimer")}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
