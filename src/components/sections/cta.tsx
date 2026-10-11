import { useState } from "react"
import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar01Icon } from "@hugeicons/core-free-icons"
import { FaWhatsapp } from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { whatsappLink } from "@/lib/site"

export function FinalCta() {
  const { t } = useTranslation()
  const interests = t("cta.interests", { returnObjects: true }) as string[]
  const [selected, setSelected] = useState<string[]>([])

  const message =
    selected.length > 0
      ? `${t("cta.messageIntro")}${selected.join(", ")}`
      : undefined

  return (
    <section id="contacto" className="relative py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-linear-to-b from-brand/10 via-brand/5 to-transparent px-6 py-14 sm:px-12">
          <div
            aria-hidden
            className="animate-aurora pointer-events-none absolute -top-20 left-1/4 size-72 rounded-full bg-brand/25 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-aurora pointer-events-none absolute -right-10 -bottom-24 size-72 rounded-full bg-brand-bright/20 blur-3xl [animation-delay:-8s]"
          />

          <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Badge variant="secondary" className="uppercase tracking-wider">
              {t("cta.eyebrow")}
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.8rem] md:leading-[1.1]">
              {t("cta.title")}
            </h2>
            <p className="max-w-xl text-base text-muted-foreground text-balance sm:text-lg">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col items-center gap-3 pt-2">
              <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {t("cta.interestLabel")}
              </span>
              <ToggleGroup
                multiple
                value={selected}
                onValueChange={(value) => setSelected(value as string[])}
                className="flex-wrap justify-center"
              >
                {interests.map((interest) => (
                  <ToggleGroupItem
                    key={interest}
                    value={interest}
                    variant="outline"
                    className="h-9 px-3.5 text-xs aria-pressed:border-primary! aria-pressed:bg-primary! aria-pressed:text-primary-foreground! sm:text-sm"
                  >
                    {interest}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="h-11 px-5 text-sm"
                render={
                  <a
                    href={whatsappLink(message)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t("cta.primary")}
                  />
                }
                nativeButton={false}
              >
                <FaWhatsapp aria-hidden />
                {t("cta.primary")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-5 text-sm"
                render={<a href="#inicio" />}
                nativeButton={false}
              >
                <HugeiconsIcon icon={Calendar01Icon} data-icon="inline-start" strokeWidth={2} />
                {t("cta.secondary")}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
