import { useTranslation } from "react-i18next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Reveal } from "@/components/shared/reveal"

export function Faq() {
  const { t } = useTranslation()
  const items = t("faq.items", { returnObjects: true }) as {
    question: string
    answer: string
  }[]

  return (
    <section id="faq" className="relative py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        <Reveal className="mx-auto w-full max-w-3xl">
          <Accordion defaultValue={["faq-0"]}>
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="px-4 py-3.5 text-sm font-medium sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  )
}
