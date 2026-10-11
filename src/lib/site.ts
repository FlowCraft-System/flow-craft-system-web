export const site = {
  name: "FlowCraft Systems",
  city: "Maracaibo, Zulia",
  country: "Venezuela",
  // TODO: reemplazar con los datos reales
  email: "contacto@flowcraftsystems.com",
  phoneDisplay: "+58 000 000 0000",
  whatsapp: "580000000000",
  socials: {
    whatsapp: "https://wa.me/580000000000",
    instagram: "https://instagram.com/flowcraftsystems",
    telegram: "https://t.me/flowcraftsystems",
    linkedin: "https://www.linkedin.com/company/flowcraftsystems",
  },
  scheduleUrl: "#contacto",
} as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const sectionIds = [
  "inicio",
  "para-quien",
  "proceso",
  "precios",
  "equipos",
  "portafolio",
  "testimonios",
  "faq",
  "contacto",
] as const

export type SectionId = (typeof sectionIds)[number]
