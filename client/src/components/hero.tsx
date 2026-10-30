"use client"

import { useMemo, useState } from "react"
import { useLocation } from "wouter"
import { ArrowRightIcon, MagnifyingGlassIcon, MapPinIcon, CheckBadgeIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { categories, professionals, provinces } from "@/lib/data"
import { illustrations } from "@/lib/v3-illustrations"

const people = [
  { src: illustrations.plumber, cls: "hero-person hero-person-plumber wiggle" },
  { src: illustrations.electrician, cls: "hero-person hero-person-electrician wiggle-delay" },
  { src: illustrations.mason, cls: "hero-person hero-person-carpenter wiggle" },
  { src: illustrations.gardener, cls: "hero-person hero-person-gardener wiggle-delay" },
  { src: illustrations.painter, cls: "hero-person hero-person-painter wiggle" },
  { src: illustrations.locksmith, cls: "hero-person hero-person-locksmith wiggle-delay" },
  { src: illustrations.cleaner, cls: "hero-person hero-person-cleaner wiggle" },
  { src: illustrations.handyman, cls: "hero-person hero-person-handyman wiggle-delay" },
]

export function Hero() {
  const [, navigate] = useLocation()
  const [category, setCategory] = useState("")
  const [city, setCity] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get("ciudad")
    return provinces.some(province => province.id === requested) ? requested || "" : ""
  })
  const sortedCategories = useMemo(() => [...categories].sort((a, b) => a.name.localeCompare(b.name, "es")), [])
  const search = () => {
    if (category && city) navigate(`/${city}/${category}/#perfiles`)
    else if (category) navigate(`/${category}/`)
    else document.getElementById("profesionales")?.scrollIntoView({ behavior: "smooth" })
  }

  return <section className="hero-viewport paper-texture border-b border-black/10">
    <div className="hero-illustrations">
      {people.map((person, index) => <img key={person.src} src={person.src} alt="" className={person.cls} style={{ ["--tilt" as string]: `${index % 2 ? 2 : -2}deg` }} />)}
      <svg aria-hidden="true" className="hero-doodle hero-doodle-left" viewBox="0 0 120 80"><path className="doodle-line" strokeDasharray="6 8" d="M8 70c22-55 63-42 91-55"/><path className="doodle-line" d="m92 8 12 5-8 10"/></svg>
      <svg aria-hidden="true" className="hero-doodle hero-doodle-right" viewBox="0 0 120 80"><path className="doodle-line" strokeDasharray="5 8" d="M110 68C88 15 43 30 15 8"/><path className="doodle-line" d="m22 3-12 3 6 11"/></svg>
      <div className="float-card hero-card-availability -rotate-3 rounded-2xl text-left"><p className="hero-card-label ui-label text-black/40">Ejemplo de perfil</p><p className="hero-card-title editorial-serif">Fontanería</p><p className="hero-card-copy">Datos de muestra</p></div>
      <div className="float-card hero-card-verified rotate-2 rounded-2xl text-left"><div className="flex items-center gap-2"><CheckBadgeIcon className="hero-card-icon" /><span className="hero-card-label ui-label">Ejemplo de sello</span></div><p className="hero-card-copy text-black/55">Identidad verificada</p></div>
    </div>
    <div className="hero-content">
      <span className="hero-eyebrow ui-label rounded-full border border-black/15 bg-white/75 px-4 py-2">Profesionales de aquí, para lo que necesites</span>
      <h1 className="hero-title text-balance font-medium text-black">Encuentra al <span className="highlight-stroke">profesional</span><br />que necesitas.</h1>
      <p className="hero-subtitle text-black/60">Explora la futura experiencia de contacto directo, sin intermediarios.</p>
      <div className="hero-search" aria-label="Buscador de profesionales">
        <div className="hero-search-field hero-category-field"><Select value={category} onValueChange={setCategory}><SelectTrigger className="h-11 w-full border-0 bg-transparent p-0 shadow-none focus:ring-0" aria-label="Seleccionar categoría" aria-haspopup="listbox"><MagnifyingGlassIcon className="h-5 w-5 shrink-0 text-black/45" /><SelectValue placeholder="¿Qué necesitas?" /></SelectTrigger><SelectContent position="popper" side="bottom" align="start" sideOffset={8} avoidCollisions={false} className="hero-category-content" viewportClassName="hero-category-viewport">{sortedCategories.map((item) => <SelectItem key={item.id} value={item.id} className="hero-category-option">{item.name}</SelectItem>)}</SelectContent></Select></div>
        <div className="hero-search-field hero-location"><MapPinIcon className="h-5 w-5 shrink-0 text-black/45" /><Select value={city} onValueChange={setCity}><SelectTrigger className="h-11 w-full border-0 bg-transparent p-0 shadow-none focus:ring-0" aria-label="Seleccionar ciudad"><SelectValue placeholder="¿Dónde?" /></SelectTrigger><SelectContent>{provinces.map((province) => <SelectItem key={province.id} value={province.id}>{province.name}</SelectItem>)}</SelectContent></Select></div>
        <div className="hero-search-count"><strong className="editorial-serif">{professionals.length}</strong><span>perfiles demo</span></div>
        <Button type="button" onClick={search} className="hero-search-button rounded-full bg-black text-white hover:bg-black/80">Buscar <ArrowRightIcon className="ml-2 h-4 w-4" /></Button>
      </div>
      <div className="hero-city-pill rounded-full bg-accent px-3 py-2 text-[10px] font-bold uppercase tracking-wide shadow-sm">3 ciudades</div>
    </div>
  </section>
}
