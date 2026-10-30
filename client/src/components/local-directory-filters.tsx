"use client"

import { useState } from "react"
import { Link } from "wouter"
import { AdjustmentsHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { provinces } from "@/lib/data"
import { getCategoryPage } from "@/lib/category-pages"
import {
  type DirectoryFilters,
  type DirectoryProfessional,
  type PriceLevel,
  type ProfessionalType,
  type VerificationKey,
  verificationOptions,
} from "@/lib/local-directory"

export type DirectoryFilterProps = {
  filters: DirectoryFilters
  onChange: (next: DirectoryFilters) => void
  professionals: DirectoryProfessional[]
  routeCity?: string
  categorySlug: string
}

function FiltersBody({ filters, onChange, professionals, routeCity, categorySlug, onCityNavigate }: DirectoryFilterProps & { onCityNavigate?: () => void }) {
  const [showAllServices, setShowAllServices] = useState(false)
  const currentCity = provinces.find(city => city.id === routeCity)
  const cityProfessionals = routeCity ? professionals.filter(person => person.province === routeCity) : professionals
  const categoryServices = getCategoryPage(categorySlug)?.content.service_cards.map(service => service.title) || []
  const availableServices = categoryServices.length ? categoryServices : Array.from(new Set(cityProfessionals.flatMap(person => person.services).filter(Boolean)))
  const expandedServices = showAllServices || filters.services.some(service => !availableServices.slice(0, 5).includes(service))
  const servicesToShow = expandedServices ? availableServices : availableServices.slice(0, 5)
  const toggleType = (type: ProfessionalType) => onChange({ ...filters, types: filters.types.includes(type) ? filters.types.filter((value) => value !== type) : [...filters.types, type] })
  const toggleBadge = (badge: VerificationKey) => onChange({ ...filters, badges: filters.badges.includes(badge) ? filters.badges.filter((value) => value !== badge) : [...filters.badges, badge] })
  const toggleService = (service: string) => onChange({ ...filters, services: filters.services.includes(service) ? filters.services.filter(value => value !== service) : [...filters.services, service] })
  const reset = () => onChange({ services: [], types: [], badges: [], priceLevel: null })

  return (
    <div className="space-y-7">
      <nav aria-label="Cambiar ciudad" className="space-y-3">
        <p className="ui-label text-black/60">Zona</p>
        <p className="rounded-2xl border border-black bg-accent px-4 py-3 text-sm font-semibold">{currentCity?.name || "Todas las ciudades"}</p>
        <p className="text-xs font-semibold text-black/65">{currentCity ? "Cambiar ciudad" : "Elegir ciudad"}</p>
        {currentCity && <Link href={`/${categorySlug}/`} onClick={onCityNavigate} className="flex items-center justify-between rounded-xl px-2 py-1.5 text-sm text-black/70 hover:bg-[#f5f0e8] hover:text-black">Todas las ciudades <span aria-hidden="true">→</span></Link>}
        {provinces.filter(city => city.id !== routeCity).map(city => (
          <Link key={city.id} href={`/${city.id}/${categorySlug}/`} onClick={onCityNavigate} className="flex items-center justify-between rounded-xl px-2 py-1.5 text-sm text-black/70 hover:bg-[#f5f0e8] hover:text-black">
            {city.name} <span aria-hidden="true">→</span>
          </Link>
        ))}
      </nav>

      {availableServices.length > 0 && <fieldset className="border-t border-black/10 pt-6">
        <legend className="ui-label mb-4 pt-6 text-black/60">Servicios</legend>
        {servicesToShow.map(service => (
          <label key={service} className="flex cursor-pointer items-start gap-3 rounded-xl px-1 py-2 text-sm leading-5 hover:bg-black/[.035]">
            <Checkbox checked={filters.services.includes(service)} onCheckedChange={() => toggleService(service)} aria-label={service} className="mt-0.5 shrink-0" />
            <span>{service}</span>
          </label>
        ))}
        {availableServices.length > 5 && <button type="button" onClick={() => setShowAllServices(!expandedServices)} className="mt-2 rounded text-xs font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2">{expandedServices ? "Ver menos servicios" : `Ver todos los servicios (${availableServices.length})`}</button>}
      </fieldset>}

      <fieldset className="border-t border-black/10 pt-6">
        <legend className="ui-label mb-4 pt-6 text-black/60">Tipo de profesional</legend>
        {([["autonomo", "Autónomo"], ["empresa", "Empresa"]] as const).map(([value, label]) => (
          <label key={value} className="flex cursor-pointer items-center gap-3 rounded-xl px-1 py-2 text-sm hover:bg-black/[.035]"><Checkbox checked={filters.types.includes(value)} onCheckedChange={() => toggleType(value)} aria-label={label} /><span>{label}</span></label>
        ))}
      </fieldset>

      <fieldset className="border-t border-black/10 pt-6">
        <legend className="ui-label mb-4 pt-6 text-black/60">Sellos</legend>
        {verificationOptions.map(({ id, label }) => (
          <label key={id} className="flex cursor-pointer items-start gap-3 rounded-xl px-1 py-2 text-sm hover:bg-black/[.035]">
            <Checkbox checked={filters.badges.includes(id)} onCheckedChange={() => toggleBadge(id)} aria-label={label} className="mt-0.5" />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      {routeCity && <fieldset className="border-t border-black/10 pt-6">
        <legend className="ui-label mb-4 pt-6 text-black/60">Nivel de precio</legend>
        <div className="grid grid-cols-3 gap-2" aria-label="Nivel de precio">
          {([1, 2, 3] as PriceLevel[]).map((level) => (
            <button key={level} type="button" aria-label={`Nivel de precio ${"€".repeat(level)}`} aria-pressed={filters.priceLevel === level} onClick={() => onChange({ ...filters, priceLevel: filters.priceLevel === level ? null : level })} className={`rounded-2xl border px-2 py-3 text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${filters.priceLevel === level ? "border-black bg-black text-accent" : "border-black/15 bg-[#f5f0e8] hover:border-black hover:bg-accent"}`}>{"€".repeat(level)}</button>
          ))}
        </div>
      </fieldset>}

      <Button type="button" variant="outline" onClick={reset} className="w-full rounded-full border-black/20 bg-transparent text-sm hover:bg-accent"><XMarkIcon className="mr-2 h-4 w-4" />Restablecer filtros</Button>
    </div>
  )
}

export function LocalDirectoryFilters(props: DirectoryFilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return <>
    <aside aria-label="Filtros del directorio" className="hidden self-start rounded-[28px] border border-black/10 bg-[#fffdf9] p-6 shadow-[0_16px_45px_rgba(44,35,24,.045)] lg:sticky lg:top-24 lg:block">
      <h3 className="mb-6 border-b border-black/10 pb-5 text-2xl font-medium">Afina tu búsqueda<span className="ml-1 text-accent">.</span></h3>
      <FiltersBody {...props} />
    </aside>
    <div className="lg:hidden">
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}><SheetTrigger asChild><Button variant="outline" className="rounded-full border-black/25 bg-[#fffdf9] px-5"><AdjustmentsHorizontalIcon className="mr-2 h-4 w-4" />Filtrar resultados</Button></SheetTrigger>
        <SheetContent side="left" className="w-[min(100vw,360px)] overflow-y-auto overscroll-contain bg-[#fffdf9] px-5 pb-10">
          <SheetHeader className="px-0 pt-6"><SheetTitle className="text-left text-2xl font-medium">Afina tu búsqueda</SheetTitle></SheetHeader>
          <div className="mt-7"><FiltersBody {...props} onCityNavigate={() => setMobileOpen(false)} /></div>
        </SheetContent>
      </Sheet>
    </div>
  </>
}
