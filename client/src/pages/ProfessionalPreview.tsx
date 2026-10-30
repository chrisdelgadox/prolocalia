import { useEffect, useState } from "react"
import { Link, useLocation } from "wouter"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProfessionalProfile } from "@/components/professional-profile"
import { categories, provinces, type Professional } from "@/lib/data"
import { readLocalProgress, type LocalProgress, type StoredProfessional } from "@/lib/profile-progress"
import { useSeoMetadata } from "@/hooks/useSeoMetadata"

type LocalPreview = { profile: Professional; progress: LocalProgress }

export default function ProfessionalPreviewPage() {
  const [, navigate] = useLocation()
  const [preview, setPreview] = useState<LocalPreview | null>(null)
  const [ready, setReady] = useState(false)

  useSeoMetadata({
    title: "Vista previa local de mi ficha | ProLocal",
    description: "Vista previa del borrador guardado en este navegador. No es una ficha publicada.",
    canonicalPath: "/profesionales/vista-previa",
    robots: "noindex,nofollow",
  })

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("prolocal_professional") || "null") as StoredProfessional | null
      if (stored?.id && stored.nombre) {
        const category = categories.find(item => item.id === stored.categoria)
        const province = provinces.find(item => item.id === stored.provincia)
        const location = [stored.ciudad?.trim(), province?.name].filter((value, index, values) => value && (index === 0 || value.toLowerCase() !== values[0]?.toLowerCase())).join(", ") || "Zona sin indicar"
        const progress = readLocalProgress(stored.id)
        setPreview({
          profile: {
            id: stored.id,
            name: stored.nombre,
            category: category?.name || "Profesional local",
            categoryId: category?.id || "",
            location,
            province: stored.provincia || "",
            description: stored.descripcion?.trim() || "Aún no has añadido una presentación.",
            image: progress.photo || "",
            verified: false,
            isDemo: false,
            services: Array.isArray(stored.servicios) ? stored.servicios.filter((item): item is string => typeof item === "string" && !!item.trim()) : [],
            serviceAreas: stored.ciudad?.trim() ? [stored.ciudad.trim()] : [],
          },
          progress,
        })
      }
    } catch { /* Sin borrador local válido, ofrecer el flujo de alta. */ }
    setReady(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      {!ready ? <div className="min-h-[50dvh]" aria-label="Cargando vista previa" /> : preview ? (
        <ProfessionalProfile professional={preview.profile} works={preview.progress.works} isLocalPreview onBack={() => navigate("/profesionales/dashboard#perfil-publico")} />
      ) : (
        <div className="paper-texture mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="editorial-serif text-4xl">Todavía no hay un borrador aquí</h1>
          <p className="mt-4 text-black/60">La vista previa solo funciona en el navegador donde creaste tu perfil. No es una ficha pública.</p>
          <Link href="/profesionales/registro" className="mt-8 inline-flex rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-black/80">Crear mi perfil</Link>
        </div>
      )}
      <Footer />
    </main>
  )
}
