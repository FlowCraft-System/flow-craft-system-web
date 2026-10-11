import { useTranslation } from "react-i18next"

import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Reveal } from "@/components/shared/reveal"

export function Process() {
  const { t } = useTranslation()
  const steps = t("process.steps", { returnObjects: true }) as {
    title: string
    description: string
  }[]

  return (
    <section id="proceso" className="relative py-20 sm:py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          subtitle={t("process.subtitle")}
        />

        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
          <span
            aria-hidden
            className="absolute top-5 right-[10%] left-[10%] hidden h-px bg-linear-to-r from-transparent via-border to-transparent md:block"
          />
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal
                delay={index * 0.08}
                className="relative flex gap-4 md:flex-col md:items-center md:gap-4 md:text-center"
              >
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card font-heading text-sm font-semibold text-primary shadow-sm">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1.5 md:items-center">
                  <h3 className="font-heading text-base font-semibold">{step.title}</h3>
                  <p className="max-w-xs text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
