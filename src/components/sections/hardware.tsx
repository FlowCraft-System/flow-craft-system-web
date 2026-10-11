import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BatteryFullIcon,
  BarcodeIcon,
  CpuIcon,
  KeyboardIcon,
  MonitorIcon,
  PrinterIcon,
  Shield01Icon,
  Wifi01Icon,
} from "@hugeicons/core-free-icons"
import { FaWhatsapp } from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal"
import { whatsappLink } from "@/lib/site"

const itemIcons = [
  CpuIcon,
  MonitorIcon,
  KeyboardIcon,
  PrinterIcon,
  BarcodeIcon,
  Wifi01Icon,
  BatteryFullIcon,
]

export function Hardware() {
  const { t } = useTranslation()
  const items = t("hardware.items", { returnObjects: true }) as string[]

  return (
    <section id="equipos" className="relative py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("hardware.eyebrow")}
          title={t("hardware.title")}
          subtitle={t("hardware.subtitle")}
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {items.map((item, index) => {
              const Icon = itemIcons[index] ?? CpuIcon
              return (
                <StaggerItem key={item}>
                  <Card
                    size="sm"
                    className="h-full bg-card/60 transition-colors hover:bg-accent/40"
                  >
                    <CardContent className="flex items-center gap-2.5">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <HugeiconsIcon icon={Icon} strokeWidth={2} className="size-4" />
                      </span>
                      <span className="text-xs font-medium">{item}</span>
                    </CardContent>
                  </Card>
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal className="flex flex-col gap-5">
            <Card className="bg-linear-to-br from-brand/10 to-transparent">
              <CardContent className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={Shield01Icon} strokeWidth={2} className="size-5" />
                </span>
                <p className="text-sm text-foreground">{t("hardware.guarantee")}</p>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="h-11 px-5 text-sm"
              render={
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t("actions.whatsapp")}
                />
              }
              nativeButton={false}
            >
              <FaWhatsapp aria-hidden />
              {t("actions.whatsapp")}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
