import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, WhatsappIcon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LanguageToggle } from "@/components/layout/language-toggle"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Logo } from "@/components/shared/logo"
import { Container } from "@/components/shared/container"
import { site, whatsappLink, sectionIds } from "@/lib/site"
import { cn } from "@/lib/utils"

function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return scrolled
}

export function Navbar() {
  const { t } = useTranslation()
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  const links = sectionIds.map((id) => ({ id, label: t(`nav.${id}`) }))

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label={site.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              size="sm"
              render={<a href={`#${link.id}`} />}
              nativeButton={false}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <LanguageToggle withLabel />
            <ThemeToggle />
          </div>

          <Button
            className="hidden sm:inline-flex"
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
            <HugeiconsIcon icon={WhatsappIcon} data-icon="inline-start" strokeWidth={2} />
            {t("actions.whatsapp")}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label={t("nav.contacto")}
                />
              }
            >
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
            </SheetTrigger>
            <SheetContent side="right" className="gap-0">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose
                    key={link.id}
                    render={
                      <a
                        href={`#${link.id}`}
                        className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-4 p-4">
                <div className="flex items-center gap-2">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
                <Button
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
                  <HugeiconsIcon icon={WhatsappIcon} data-icon="inline-start" strokeWidth={2} />
                  {t("actions.whatsapp")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
