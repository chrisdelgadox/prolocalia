import { ChatBubbleLeftRightIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { Link } from "wouter"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { getProfessionalPath, type Professional } from "@/lib/data"
import { getDirectoryBadges, getDirectoryType } from "@/lib/local-directory"
import { categoryIllustrations, illustrations } from "@/lib/v3-illustrations"
import { verificationBadges } from "@/lib/verification-badges"

export function CompactProfessionalCard({ professional, featuredServices }: { professional: Professional; featuredServices: string[] }) {
  const identity = getDirectoryBadges(professional).includes("identity")
  const type = getDirectoryType(professional)
  const typeLabel = type === "empresa" ? "Empresa" : type === "autonomo" ? "Autónomo" : "Tipo sin indicar"
  const badgeText = professional.isDemo
    ? identity ? "Ejemplo de sello: identidad verificada. No se ha revisado documentación real." : "Ejemplo de sello: identidad sin verificar."
    : identity ? "Identidad verificada" : "Identidad sin verificar"
  const badgeIcon = identity ? verificationBadges.verified : verificationBadges.unverified

  return (
    <article className="group relative min-w-0 rounded-[22px] border border-black/10 bg-[#fffdf9] p-4 shadow-[0_12px_34px_rgba(44,35,24,.04)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(44,35,24,.09)] focus-within:ring-2 focus-within:ring-black/20">
      <Link href={getProfessionalPath(professional)} aria-label={`Ver ficha de demostración de ${professional.name}`} className="absolute inset-0 z-10 rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" />
      <div className="flex min-w-0 items-start gap-3">
        <div className="city-avatar h-12 w-12 shrink-0 rounded-[14px] p-0.5"><img src={categoryIllustrations[professional.categoryId] || illustrations.general} alt="" loading="lazy" className="h-full w-full object-contain object-bottom" /></div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[1.1rem] font-semibold leading-5 tracking-[-.02em] group-hover:underline">{professional.name}</h4>
          <p className="mt-1 text-xs text-black/70">{professional.category}</p>
          <p className="mt-1 flex items-start gap-1 text-xs leading-4 text-black/70"><MapPinIcon className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />{professional.location}</p>
        </div>
      </div>
      <div className="mt-3 flex min-w-0 items-center justify-between gap-2">
        <span className="rounded-full border border-black/10 bg-[#f5f0e8] px-2.5 py-1 text-[11px] font-medium text-black/70">{typeLabel}{professional.isDemo ? " · ejemplo" : ""}</span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button type="button" aria-label={badgeText} className="relative z-20 shrink-0 rounded-full p-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><img src={badgeIcon} alt="" loading="lazy" className="h-6 w-6 object-contain" /></button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-52 text-center">{badgeText}</TooltipContent>
        </Tooltip>
      </div>
      <div className="mt-3 flex min-w-0 flex-wrap gap-1.5" aria-label="Servicios destacados">
        {featuredServices.map(service => <span key={service} className="max-w-full break-words rounded-full border border-black/10 bg-[#f5f0e8] px-2.5 py-1 text-[11px] leading-4 text-black/75">{service}</span>)}
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-black/10 pt-3" aria-label="Contacto directo no disponible en perfiles de muestra">
        <button type="button" disabled aria-label="Llamar no disponible en esta ficha de ejemplo" title="Sin teléfono publicado" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-[#f5f0e8] text-black/35"><PhoneIcon className="h-4 w-4" aria-hidden="true" /></button>
        <button type="button" disabled aria-label="WhatsApp no disponible en esta ficha de ejemplo" title="Sin WhatsApp publicado" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-[#f5f0e8] text-black/35"><ChatBubbleLeftRightIcon className="h-4 w-4" aria-hidden="true" /></button>
      </div>
    </article>
  )
}
