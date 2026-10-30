import { type Professional } from "@/lib/data"

export type ProfessionalType = "autonomo" | "empresa"
export type VerificationKey = "identity" | "business" | "insurance" | "accreditation"
export type PriceLevel = 1 | 2 | 3

export const verificationOptions: { id: VerificationKey; label: string }[] = [
  { id: "identity", label: "Identidad verificada" },
  { id: "business", label: "Alta de autónomo o empresa" },
  { id: "insurance", label: "Seguro de responsabilidad civil" },
  { id: "accreditation", label: "Acreditación profesional" },
]

export type DirectoryProfessional = Professional & {
  /** Datos de contacto reales aportados por el profesional; nunca se infieren de fichas demo. */
  phone?: string
  whatsapp?: string
  /** Solo tarifas publicadas por un profesional real; undefined implica presupuesto a consultar. */
  priceFrom?: number
  /** Nivel orientativo publicado por el profesional; no se infiere de importes inexistentes. */
  priceLevel?: PriceLevel
  /** Valoración media real; solo se usa si existe al menos una reseña publicada. */
  ratingAverage?: number
  ratingCount?: number
  /** Documentación revisada en una ficha real. El estado ilustrativo `verified` de las demos nunca se presenta como real. */
  verificationBadges?: VerificationKey[]
  professionalType?: ProfessionalType
}

export type DirectoryFilters = {
  services: string[]
  types: ProfessionalType[]
  badges: VerificationKey[]
  priceLevel?: PriceLevel | null
}

export function initialDirectoryFilters(): DirectoryFilters {
  return { services: [], types: [], badges: [], priceLevel: null }
}

export function getDirectoryType(professional: DirectoryProfessional): ProfessionalType | undefined {
  // El tipo de ejercicio de las fichas de muestra también es una simulación, nunca una acreditación.
  if (professional.isDemo) return professional.id.endsWith("-2") ? "empresa" : "autonomo"
  return professional.professionalType
}

export function getDirectoryBadges(professional: DirectoryProfessional): VerificationKey[] {
  if (professional.isDemo) return professional.verified ? ["identity"] : []
  return professional.verificationBadges ?? []
}

export function getDirectoryPriceLevel(professional: DirectoryProfessional): PriceLevel | undefined {
  // Los niveles de las fichas demo son solo un ejemplo de interfaz, no precios reales.
  if (professional.isDemo) {
    if (professional.id.endsWith("-1")) return 1
    if (professional.id.endsWith("-2")) return 2
    if (professional.id.endsWith("-3")) return 3
  }
  return professional.priceLevel
}

export function getDirectoryRating(professional: DirectoryProfessional): number | undefined {
  if (professional.isDemo || !professional.ratingCount || !Number.isFinite(professional.ratingAverage)) return undefined
  const average = professional.ratingAverage!
  return average >= 0 && average <= 5 ? average : undefined
}

export function filterDirectory(professionals: DirectoryProfessional[], filters: DirectoryFilters, routeCity?: string): DirectoryProfessional[] {
  return professionals.filter((professional) => {
    if (routeCity && professional.province !== routeCity) return false
    if (filters.services.length && !filters.services.every(service => professional.services.some(value => value.toLocaleLowerCase("es") === service.toLocaleLowerCase("es")))) return false
    if (filters.types.length && (!getDirectoryType(professional) || !filters.types.includes(getDirectoryType(professional)!))) return false
    const badges = getDirectoryBadges(professional)
    if (filters.badges.length && !filters.badges.every((badge) => badges.includes(badge))) return false
    if (filters.priceLevel != null && getDirectoryPriceLevel(professional) !== filters.priceLevel) return false
    return true
  })
}
