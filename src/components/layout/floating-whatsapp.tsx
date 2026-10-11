import { useTranslation } from "react-i18next"
import { motion, useReducedMotion } from "motion/react"
import { FaWhatsapp } from "react-icons/fa6"

import { site, whatsappLink } from "@/lib/site"

export function FloatingWhatsApp() {
  const { t } = useTranslation()
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="fixed right-5 bottom-5 z-50 sm:right-6 sm:bottom-6"
      initial={reduce ? false : { opacity: 0, scale: 0.6, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label={`${t("actions.whatsapp")} — ${site.name}`}
        className="group relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/50 [animation-duration:2.4s]" />
        <FaWhatsapp className="size-7" aria-hidden />
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-md transition-opacity group-hover:opacity-100 md:block">
          {t("actions.whatsapp")}
        </span>
      </a>
    </motion.div>
  )
}
