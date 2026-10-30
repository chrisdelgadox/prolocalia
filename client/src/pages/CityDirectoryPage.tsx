import { Link } from "wouter"
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LocalDirectoryCard } from "@/components/local-directory-card"
import { LocalDirectoryFilters } from "@/components/local-directory-filters"
import type { Province } from "@/lib/data"
import { initialDirectoryFilters, type DirectoryFilters, type DirectoryProfessional } from "@/lib/local-directory"

type CityDirectoryProps = {
  categoryName: string
  categorySlug: string
  city: Province
  allProfessionals: DirectoryProfessional[]
  visibleProfessionals: DirectoryProfessional[]
  filters: DirectoryFilters
  onChange: (next: DirectoryFilters) => void
}

export default function CityDirectoryPage({ categoryName, categorySlug, city, allProfessionals, visibleProfessionals, filters, onChange }: CityDirectoryProps) {
  const reset = () => onChange(initialDirectoryFilters())

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-accent/35 bg-[#111111] py-10 text-white sm:py-14 lg:py-16" aria-labelledby="city-directory-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Migas de pan" className="mb-7 text-xs text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
              <li><Link href={`/${categorySlug}/`} className="hover:text-white">{categoryName}</Link></li>
              <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
              <li aria-current="page" className="font-semibold text-white">{city.name}</li>
            </ol>
          </nav>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker text-accent">Directorio de muestra</p>
              <h1 id="city-directory-title" className="mt-5 text-balance text-[clamp(2.7rem,5vw,5rem)] font-medium leading-none">{categoryName} en {city.name}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">Explora cómo se mostrarían las fichas de {categoryName.toLowerCase()} en {city.name}: servicios, cobertura y contacto directo. Por ahora son ejemplos y no representan profesionales disponibles ni precios o acreditaciones reales.</p>
            </div>
            <p role="status" aria-live="polite" className="w-fit shrink-0 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white">{visibleProfessionals.length} {visibleProfessionals.length === 1 ? "perfil de muestra" : "perfiles de muestra"}</p>
          </div>
        </div>
      </section>

      <section id="perfiles" aria-label="Profesionales y filtros" className="scroll-mt-20 bg-[#ede5d9] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(250px,280px)_minmax(0,1fr)] lg:gap-8">
            <LocalDirectoryFilters filters={filters} onChange={onChange} professionals={allProfessionals} routeCity={city.id} categorySlug={categorySlug} />
            <div className="min-w-0 space-y-4">
              <p className="ui-label border-b border-black/10 pb-3 text-black/45">{city.name}</p>
              {visibleProfessionals.length ? visibleProfessionals.map((person) => <LocalDirectoryCard key={person.id} professional={person} showPriceLevel />) : (
                <div className="rounded-[28px] border border-dashed border-black/20 bg-[#fffdf9] p-8 text-center sm:p-12">
                  <h2 className="text-2xl">No hay perfiles con estos filtros</h2>
                  <p className="mt-3 text-sm leading-6 text-black/55">{filters.badges.length ? "Ninguna ficha de muestra reúne todos los sellos seleccionados. Prueba a desmarcar alguno o restablece los filtros." : "Prueba otro servicio, tipo, sello o nivel de precio. Para cambiar de ciudad, abre su página local."}</p>
                  <button type="button" onClick={reset} className="mt-5 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-black">Restablecer filtros</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-lavender py-16 sm:py-20" aria-labelledby="profesionales-cta">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-8">
          <div>
            <p className="section-kicker text-black/75">Para profesionales</p>
            <h2 id="profesionales-cta" className="mt-4 max-w-3xl text-balance text-[clamp(2.3rem,4vw,4rem)] font-medium leading-tight">Tú también puedes aparecer aquí.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70 sm:text-base">Crea tu perfil para que los clientes de tu zona puedan conocer tus servicios y contactarte directamente.</p>
          </div>
          <Link href="/profesionales/registro" className="inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-bold text-black hover:bg-[#fffdf9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-base">Crear mi perfil <ArrowRightIcon className="h-5 w-5" aria-hidden="true" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
