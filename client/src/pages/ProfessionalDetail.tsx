import { useLocation, useParams } from "wouter"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProfessionalProfile } from "@/components/professional-profile"
import NotFound from "@/pages/NotFound"
import { getProfessionalByRoute, getProfessionalPath } from "@/lib/data"
import { useSeoMetadata } from "@/hooks/useSeoMetadata"

type DetailParams = { city?: string; province?: string; category: string; slug: string }

export default function ProfessionalDetailPage() {
  const params = useParams<DetailParams>()
  const [, navigate] = useLocation()
  const citySlug = params.city || params.province || ""
  const professional = getProfessionalByRoute(citySlug, params.category, params.slug)

  useSeoMetadata({
    title: professional ? `${professional.name} · Perfil de demostración | ProLocal` : "Perfil no encontrado | ProLocal",
    description: professional ? `${professional.name} es un perfil de demostración de ${professional.category.toLowerCase()}. Consulta cómo se mostrarían servicios y zonas de trabajo.` : "El perfil solicitado no existe.",
    canonicalPath: professional ? getProfessionalPath(professional) : window.location.pathname,
    robots: "noindex,follow",
  })

  if (!professional) return <NotFound />

  return <main className="min-h-screen bg-background"><Header /><ProfessionalProfile professional={professional} onBack={() => navigate(`/${professional.categoryId}/#perfiles`)} /><Footer /></main>
}
