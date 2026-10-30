"use client"

import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { getProfessionalPath, type Professional } from "@/lib/data"
import { categoryIllustrations, illustrations } from "@/lib/v3-illustrations"
import { verificationBadges } from "@/lib/verification-badges"

export function ProfessionalCard({ professional, isHighlighted }: { professional: Professional; isHighlighted?: boolean }) {
  const statusLabel = professional.verified ? "Ejemplo: Identidad verificada" : "Ejemplo: Identidad sin verificar"
  const statusBadge = professional.verified ? verificationBadges.verified : verificationBadges.unverified

  return (
    <article id={`professional-${professional.id}`} className={`group flex min-w-0 flex-col rounded-[26px] border bg-[#fffdf9] p-4 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(44,35,24,.08)] ${isHighlighted ? "border-black ring-2 ring-accent" : "border-black/10"}`}>
      <p className="mb-3 rounded-full bg-accent px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-[.1em]">Perfil de demostración · no es una oferta real</p>
      <div className="flex gap-4">
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-[20px] bg-[#ede5d9]"><img src={categoryIllustrations[professional.categoryId] || illustrations.general} alt="" className="h-full w-full object-contain object-bottom" /></div>
        <div className="min-w-0 flex-1">
          <p className="truncate ui-label text-black/40">{professional.category}</p>
          <h3 className="mt-1 text-2xl font-medium leading-tight">{professional.name}</h3>
          <div className="mt-3 flex items-start gap-1.5 text-sm text-black/50"><MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" /><span>{professional.location}</span></div>
        </div>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-black/55">{professional.description}</p>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/10 pt-3">
        <span className="flex min-w-0 items-center gap-2 text-xs font-semibold">
          <img src={statusBadge} alt="" width="640" height="640" loading="lazy" decoding="async" className="h-10 w-10 shrink-0 object-contain" />
          <span>{statusLabel}</span>
        </span>
        <Button asChild variant="ghost" className="h-auto shrink-0 rounded-full px-3 py-2 text-sm hover:bg-accent">
          <Link href={getProfessionalPath(professional)}>Ver demo <ArrowRightIcon className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </article>
  )
}

export function ProfessionalsList({ professionals, highlightedId }: { professionals: Professional[]; highlightedId?: string }) {
  if (!professionals.length) return <div className="rounded-[28px] border border-dashed border-black/20 bg-white p-10 text-center"><h3 className="text-2xl">No encontramos coincidencias</h3><p className="mt-2 text-black/50">Prueba con otra ciudad o categoría.</p></div>
  return <div className="space-y-4"><p className="ui-label border-b border-black/10 pb-3 text-black/40">{professionals.length} perfiles de demostración</p>{professionals.map((professional) => <ProfessionalCard key={professional.id} professional={professional} isHighlighted={professional.id === highlightedId} />)}</div>
}
