export type StoredProfessional = {
  id?: string
  nombre?: string
  email?: string
  telefono?: string
  descripcion?: string
  categoria?: string
  provincia?: string
  ciudad?: string
  servicios?: string[]
  createdAt?: string
}

export type LocalProgress = {
  professionalId: string
  photo?: string
  works: string[]
  updatedAt?: string
}

export const PROGRESS_STORAGE_KEY = "prolocal_progress_v1"

export function readLocalProgress(id?: string): LocalProgress {
  if (!id || typeof window === "undefined") return { professionalId: id || "", works: [] }
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) || "null") as LocalProgress | null
    if (saved?.professionalId === id && Array.isArray(saved.works)) {
      return { professionalId: id, photo: typeof saved.photo === "string" ? saved.photo : undefined, works: saved.works.filter((v): v is string => typeof v === "string").slice(0, 3), updatedAt: saved.updatedAt }
    }
  } catch { /* Do not fail the dashboard if local storage was cleared or malformed. */ }
  return { professionalId: id, works: [] }
}

export function saveLocalProgress(progress: LocalProgress): boolean {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({ ...progress, updatedAt: new Date().toISOString() }))
    return true
  } catch { return false }
}

export type ProgressItem = { id: string; label: string; done: boolean; weight: number; action?: { label: string; href: string }; reason: string }

export function calculateProfileProgress(profile: StoredProfessional | null, draft: LocalProgress) {
  const items: ProgressItem[] = [
    { id: "photo", label: "Foto o logo", done: Boolean(draft.photo), weight: 15, action: { label: "Añadir foto", href: "#trabajos" }, reason: "Una imagen tuya o de tu empresa ayuda a reconocer tu ficha." },
    { id: "description", label: "Descripción", done: Boolean(profile?.descripcion?.trim()), weight: 15, action: { label: "Escribir descripción", href: "/profesionales/registro?editar=1&paso=2" }, reason: "Explica qué haces para que sepan si puedes ayudarles." },
    { id: "contact", label: "Teléfono de contacto", done: Boolean(profile?.telefono?.trim()), weight: 15, action: { label: "Añadir teléfono", href: "/profesionales/registro?editar=1&paso=1" }, reason: "Así podrán contactar contigo sin intermediarios." },
    { id: "category", label: "Oficio o categoría", done: Boolean(profile?.categoria?.trim()), weight: 10, action: { label: "Elegir oficio", href: "/profesionales/registro?editar=1&paso=2" }, reason: "Te ayuda a aparecer en las búsquedas de tu oficio." },
    { id: "services", label: "Servicios", done: Boolean(profile?.servicios?.some(v => v.trim())), weight: 15, action: { label: "Añadir servicios", href: "/profesionales/registro?editar=1&paso=4" }, reason: "Permite a los clientes encontrar lo que necesitan." },
    { id: "area", label: "Ciudad y zona de trabajo", done: Boolean(profile?.ciudad?.trim() && profile?.provincia?.trim()), weight: 15, action: { label: "Indicar zona", href: "/profesionales/registro?editar=1&paso=3" }, reason: "Así sabrán si trabajas cerca de ellos." },
    { id: "works", label: "Fotos de trabajos", done: draft.works.length > 0, weight: 15, action: { label: "Añadir trabajos", href: "#trabajos" }, reason: "Los ejemplos reales ayudan a valorar tu experiencia antes de llamarte." },
  ]
  const percentage = profile ? items.reduce((sum, item) => sum + (item.done ? item.weight : 0), 0) : 0
  const level = percentage >= 70 ? "Completo" : "Básico"
  const next = profile ? items.find(item => !item.done) : null
  return { items, percentage, level, next, count: items.filter(item => item.done).length }
}
