import { useRef } from "react"
import { useTranslation } from "react-i18next"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUp02Icon,
  Calendar01Icon,
  ChartColumnIcon,
  CheckmarkCircle02Icon,
  PackageIcon,
  SparklesIcon,
  UserGroupIcon,
  Wallet02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/shared/container"
import { Reveal } from "@/components/shared/reveal"
import { whatsappLink } from "@/lib/site"

const barHeights = [38, 52, 44, 66, 58, 74, 62, 88, 70, 96, 82, 100]

function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-brand)_14%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-foreground)_6%,transparent)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="animate-aurora absolute -top-24 -left-24 size-96 rounded-full bg-brand/25 blur-3xl" />
      <div className="animate-aurora absolute top-1/3 -right-24 size-[28rem] rounded-full bg-brand-bright/20 blur-3xl [animation-delay:-6s]" />
    </div>
  )
}

function FloatingChip({
  className,
  delay = 0,
  icon,
  title,
  value,
}: {
  className?: string
  delay?: number
  icon: typeof Wallet02Icon
  title: string
  value: string
}) {
  return (
    <div
      className={`animate-float absolute z-20 flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/90 p-3 shadow-xl backdrop-blur ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <HugeiconsIcon icon={icon} strokeWidth={2} className="size-4" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.68rem] text-muted-foreground">{title}</span>
        <span className="text-sm font-semibold">{value}</span>
      </span>
    </div>
  )
}

function HeroVisual() {
  const { t } = useTranslation()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [9, -9]), {
    stiffness: 120,
    damping: 18,
  })
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [-7, 7]), {
    stiffness: 120,
    damping: 18,
  })

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative mx-auto w-full max-w-xl [perspective:1500px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border border-border/70 bg-card/80 p-2 shadow-2xl shadow-brand/10 backdrop-blur"
      >
        <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
          <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
            <span className="size-2.5 rounded-full bg-destructive/60" />
            <span className="size-2.5 rounded-full bg-brand-bright/60" />
            <span className="size-2.5 rounded-full bg-whatsapp/60" />
            <span className="ml-2 text-[0.7rem] font-medium text-muted-foreground">
              FlowCraft · Panel
            </span>
          </div>

          <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[84px_1fr]">
            <div className="flex flex-col items-center gap-3 border-r border-border/60 bg-muted/20 py-4">
              <span className="size-8 rounded-lg bg-primary/15" />
              <span className="size-6 rounded-md bg-muted-foreground/15" />
              <span className="size-6 rounded-md bg-muted-foreground/15" />
              <span className="size-6 rounded-md bg-muted-foreground/15" />
            </div>

            <div className="flex flex-col gap-4 p-4">
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { label: "Ventas", value: "$12.480" },
                  { label: "Ganancia", value: "$4.120" },
                  { label: "Deudas", value: "$860" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-muted/50 p-2.5">
                    <p className="text-[0.6rem] text-muted-foreground">{stat.label}</p>
                    <p className="text-xs font-semibold sm:text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-border/60 bg-card p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[0.7rem] font-medium text-muted-foreground">
                    Ventas mensuales
                  </p>
                  <span className="flex items-center gap-1 text-[0.65rem] font-semibold text-whatsapp">
                    <HugeiconsIcon icon={ArrowUp02Icon} strokeWidth={2} className="size-3" />
                    +32%
                  </span>
                </div>
                <div className="flex h-24 items-end gap-1.5">
                  {barHeights.map((height, index) => (
                    <motion.span
                      key={index}
                      className="flex-1 rounded-t-[3px] bg-linear-to-t from-brand-deep to-brand-bright"
                      style={{ height: `${height}%` }}
                      initial={reduce ? false : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <FloatingChip
        className="-top-4 -left-3 sm:-left-6"
        delay={0}
        icon={ChartColumnIcon}
        title="Reportes"
        value="Al día"
      />
      <FloatingChip
        className="-right-2 top-16 sm:-right-8"
        delay={1.2}
        icon={PackageIcon}
        title="Inventario"
        value="Sincronizado"
      />
      <FloatingChip
        className="-bottom-4 left-6 sm:left-10"
        delay={0.6}
        icon={UserGroupIcon}
        title={t("nav.para-quien")}
        value="+120"
      />
    </div>
  )
}

export function Hero() {
  const { t } = useTranslation()
  const trust = t("hero.trust", { returnObjects: true }) as string[]

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
      <HeroBackground />
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-6">
          <Reveal>
            <Badge variant="outline" className="gap-1.5 py-1">
              <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} className="size-3.5 text-primary" />
              {t("hero.badge")}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
              {t("hero.titleLead")}
              <span className="gradient-text">{t("hero.titleAccent")}</span>
              {t("hero.titleTail")}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-base text-muted-foreground text-balance sm:text-lg">
              {t("hero.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/60 p-4">
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-whatsapp/15 text-whatsapp">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} className="size-4" />
              </span>
              <p className="text-sm">
                <span className="font-semibold">{t("hero.resultLabel")}: </span>
                <span className="text-muted-foreground">{t("hero.result")}</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
                <HugeiconsIcon icon={WhatsappIcon} data-icon="inline-start" strokeWidth={2} />
                {t("actions.whatsapp")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-5 text-sm"
                render={<a href="#contacto" />}
                nativeButton={false}
              >
                <HugeiconsIcon icon={Calendar01Icon} data-icon="inline-start" strokeWidth={2} />
                {t("actions.schedule")}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
              {trust.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
                >
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    strokeWidth={2}
                    className="size-3.5 text-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={32}>
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  )
}
