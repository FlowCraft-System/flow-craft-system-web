import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import { Location01Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Container } from "@/components/shared/container"
import { Logo } from "@/components/shared/logo"
import { site, whatsappLink } from "@/lib/site"

const socialLinks = [
  { key: "whatsapp", href: site.socials.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
  { key: "instagram", href: site.socials.instagram, icon: FaInstagram, label: "Instagram" },
  { key: "telegram", href: site.socials.telegram, icon: FaTelegram, label: "Telegram" },
  { key: "linkedin", href: site.socials.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
] as const

const companyAnchors = ["para-quien", "proceso", "portafolio", "faq"] as const

export function Footer() {
  const { t } = useTranslation()
  const services = t("footer.services", { returnObjects: true }) as string[]

  return (
    <footer className="border-t border-border/70 bg-muted/30">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.key}
                    variant="ghost"
                    size="icon-sm"
                    aria-label={social.label}
                    render={
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                      />
                    }
                    nativeButton={false}
                  >
                    <Icon />
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold">
              {t("footer.servicesTitle")}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold">
              {t("footer.companyTitle")}
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {companyAnchors.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(`nav.${id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold">
              {t("footer.contactTitle")}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="size-4 shrink-0" aria-hidden />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-4 shrink-0" />
                <span>
                  {site.city}, {site.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
          </p>
          <p className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-3.5" />
            {t("footer.madeIn")}
          </p>
        </div>
      </Container>
    </footer>
  )
}
