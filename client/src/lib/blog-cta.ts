import { getCategory, provinces } from "@/lib/data"

const singularTrades: Record<string, string> = {
  cerrajeros: "cerrajero",
  fontaneros: "fontanero",
  electricistas: "electricista",
  antenistas: "antenista",
  "tecnico-persianas": "técnico de persianas",
  "reformas-banos": "especialista en reformas de baños",
  "reformas-cocinas": "especialista en reformas de cocinas",
  albaniles: "albañil",
  pintores: "pintor",
  impermeabilizaciones: "especialista en impermeabilización",
  "aire-acondicionado": "técnico de aire acondicionado",
  "tecnico-calderas": "técnico de calderas",
  "instalador-gas": "instalador de gas",
  manitas: "manitas",
  "placas-solares": "instalador de placas solares",
  desatascos: "especialista en desatascos",
  "control-plagas": "especialista en control de plagas",
  "limpieza-domestica": "profesional de limpieza doméstica",
  carpinteros: "carpintero",
  jardineros: "jardinero",
}

export const clientCtaText = "Compara perfiles, revisa los servicios y la zona que declara cada profesional y contacta directamente. Sin registro y sin comisiones."
export const professionalCtaNote = "Por ahora, crear tu perfil solo guarda un borrador en este navegador: aún no lo publica ni recibe contactos."
export const clientCtaNote = "Las fichas actuales son de demostración, no profesionales disponibles."

export function getBlogCta(tradeId?: string) {
  const trade = tradeId ? getCategory(tradeId) : undefined
  return {
    title: trade ? `Encuentra un ${singularTrades[trade.id] || "profesional"} en tu ciudad` : "Encuentra profesionales en tu ciudad",
    cities: provinces.map(city => ({
      id: city.id,
      label: city.id === "santiago-de-compostela" ? "Santiago" : city.name,
      href: trade ? `/${city.id}/${trade.id}` : `/${city.id}`,
    })),
  }
}
