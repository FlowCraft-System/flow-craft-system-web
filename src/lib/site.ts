export const site = {
  name: "FlowCraft Systems",
  city: "Maracaibo, Zulia",
  country: "Venezuela",
  // TODO: email y telegram pendientes de datos reales
  email: "contacto@flowcraftsystems.com",
  phoneDisplay: "+58 422-246-2882",
  whatsapp: "584222462882",
  socials: {
    whatsapp: "https://wa.me/584222462882",
    instagram: "https://www.instagram.com/eduardo28.dev?obrf=ZDY2eThieHlyeQ==",
    telegram: "https://t.me/flowcraftsystems",
    linkedin: "https://www.linkedin.com/in/eduardo-rojas-1884152a5",
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
