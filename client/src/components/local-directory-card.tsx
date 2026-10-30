import { ArrowUpRightIcon, ChatBubbleLeftRightIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { Link } from "wouter"
import { getProfessionalPath } from "@/lib/data"
import { type DirectoryProfessional, getDirectoryBadges, getDirectoryPriceLevel, getDirectoryRating, getDirectoryType } from "@/lib/local-directory"
import { categoryIllustrations, illustrations } from "@/lib/v3-illustrations"
import { verificationBadges } from "@/lib/verification-badges"

export function LocalDirectoryCard({ professional, showPriceLevel = false, reserveContacts = false }: { professional: DirectoryProfessional; showPriceLevel?: boolean; reserveContacts?: boolean }) {
  const type = getDirectoryType(professional)
  const identity = getDirectoryBadges(professional).includes("identity")
  const priceLevel = showPriceLevel ? getDirectoryPriceLevel(professional) : undefined
  const rating = showPriceLevel ? getDirectoryRating(professional) : undefined
  const location = professional.location.split(",").at(0)?.trim() || professional.location
  const path = getProfessionalPath(professional)
  const NameHeading = reserveContacts ? "h4" : "h3"
  const callNumber = !professional.isDemo ? professional.phone?.replace(/[^\d+]/g, "") : undefined
  const whatsappNumber = !professional.isDemo ? professional.whatsapp?.replace(/\D/g, "") : undefined

  return (
    <article className="group min-w-0 rounded-[28px] border border-black/10 bg-[#fffdf9] p-5 shadow-[0_12px_34px_rgba(44,35,24,.045)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(44,35,24,.09)] sm:p-6">
      <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:gap-6">
        <div className="flex min-w-0 flex-1 gap-4 sm:gap-5">
          <div className="h-24 w-20 shrink-0 rounded-[20px] bg-[#ddd0ef] p-1 sm:h-28 sm:w-24"><img src={categoryIllustrations[professional.categoryId] || illustrations.general} alt="" loading="lazy" className="h-full w-full object-contain object-bottom" /></div>
          <div className="min-w-0">
            <p className="ui-label text-black/45">{professional.category}</p>
            <NameHeading className="mt-2 text-[clamp(1.5rem,3vw,2rem)] font-medium leading-tight"><Link href={path} className="hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">{professional.name}</Link></NameHeading>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-black/55"><MapPinIcon className="h-4 w-4 shrink-0" aria-hidden="true" />{professional.location}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end sm:text-right">
          <span className="rounded-full border border-black/10 bg-[#f5f0e8] px-3 py-1.5 text-xs font-semibold">{type === "empresa" ? "Empresa" : type === "autonomo" ? "Autónomo" : "Tipo sin indicar"}{professional.isDemo ? " · ejemplo" : ""}</span>
          {!reserveContacts && <span className="text-xs text-black/50">{priceLevel ? `${"€".repeat(priceLevel)} · ${professional.isDemo ? "nivel de muestra" : "nivel orientativo"}` : professional.priceFrom !== undefined ? `Desde ${professional.priceFrom} €` : "Precio a consultar"}</span>}
          {rating !== undefined && <span className="text-xs font-semibold text-black/70" aria-label={`Valoración ${rating.toFixed(1)} de 5, ${professional.ratingCount} reseñas`}>★ {rating.toFixed(1)} ({professional.ratingCount})</span>}
        </div>
      </div>

      <p className="mt-5 line-clamp-2 text-sm leading-6 text-black/60">{professional.description}</p>
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Servicios destacados">
        {professional.services.slice(0, 3).map((service) => <span key={service} className="rounded-full border border-black/10 bg-[#f5f0e8] px-3 py-1.5 text-xs font-medium text-black/70">{service}</span>)}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4">
        <span className="flex min-w-0 items-center gap-2 text-xs font-semibold text-black/65">
          <img src={identity ? verificationBadges.verified : verificationBadges.unverified} alt="" loading="lazy" className="h-9 w-9 shrink-0 object-contain" />
          {professional.isDemo ? "Ejemplo: " : ""}{identity ? "Identidad verificada" : "Identidad sin verificar"}
        </span>
        <Link href={path} className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          Ver ficha {professional.isDemo ? "de muestra" : "pública"}<ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      {reserveContacts && <div className="mt-4 flex flex-wrap gap-2" aria-label="Contacto directo">
        {callNumber ? <a href={`tel:${callNumber}`} className="inline-flex items-center gap-2 rounded-full border border-black bg-accent px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white"><PhoneIcon className="h-4 w-4" aria-hidden="true" />Llamar</a> : <button type="button" disabled title="Disponible solo cuando se publique un teléfono real" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f5f0e8] px-4 py-2 text-xs font-semibold text-black/35"><PhoneIcon className="h-4 w-4" aria-hidden="true" />Llamar</button>}
        {whatsappNumber ? <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-xs font-semibold hover:bg-accent"><ChatBubbleLeftRightIcon className="h-4 w-4" aria-hidden="true" />WhatsApp</a> : <button type="button" disabled title="Disponible solo cuando se publique un WhatsApp real" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f5f0e8] px-4 py-2 text-xs font-semibold text-black/35"><ChatBubbleLeftRightIcon className="h-4 w-4" aria-hidden="true" />WhatsApp</button>}
      </div>}
      {professional.isDemo && <p className="mt-3 text-[11px] leading-4 text-black/45">Ficha ficticia para probar la experiencia; no corresponde a un profesional disponible.</p>}
      <span className="sr-only">Zona de muestra: {location}</span>
    </article>
  )
}
