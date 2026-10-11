import { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp"
import { Hero } from "@/components/sections/hero"
import { Audience } from "@/components/sections/audience"
import { Process } from "@/components/sections/process"
import { Pricing } from "@/components/sections/pricing"
import { Hardware } from "@/components/sections/hardware"
import { Portfolio } from "@/components/sections/portfolio"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/cta"

function App() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage ?? "es"

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t("meta.title")
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute("content", t("meta.description"))
    }
  }, [t, language])

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Audience />
        <Process />
        <Pricing />
        <Hardware />
        <Portfolio />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
