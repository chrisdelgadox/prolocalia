import { Link } from "wouter"
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InteriorHero } from "@/components/interior-hero"
import { categories, getProvince } from "@/lib/data"
import { useSeoMetadata } from "@/hooks/useSeoMetadata"
import NotFound from "@/pages/NotFound"

export default function CityHub({ cityId }: { cityId: string }) {
  const city = getProvince(cityId)
  useSeoMetadata({
    title: city ? `Profesionales en ${city.name} | ProLocal` : "Ciudad no encontrada | ProLocal",
    description: city ? `Explora los oficios y servicios en ${city.name}. Las fichas actuales son ejemplos del directorio, no profesionales disponibles.` : "Esta ciudad no está disponible en el directorio.",
    canonicalPath: `/${cityId}`,
    robots: "noindex,follow",
  })
  if (!city) return <NotFound />

  return (
    <main className="min-h-screen bg-background [&_h1]:[overflow-wrap:anywhere]">
      <Header />
      <nav aria-label="Migas de pan" className="border-b border-black/10">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-xs sm:px-6 lg:px-8">
          <li><Link href="/" className="underline-offset-4 hover:underline">Inicio</Link></li>
          <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
          <li aria-current="page">{city.name}</li>
        </ol>
      </nav>
      <InteriorHero title={`Profesionales en ${city.name}`} intro="Elige el oficio que necesitas y explora sus servicios y zonas de trabajo. Las fichas actuales son de demostración, no profesionales disponibles." />
      <section className="py-12 sm:py-16" aria-labelledby="city-categories-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Explora por oficio</p>
          <h2 id="city-categories-title" className="mt-4 text-3xl font-medium sm:text-4xl">¿Qué necesitas en {city.name}?</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(category => {
              const Icon = category.icon
              return <Link key={category.id} href={`/${city.id}/${category.id}`} className="flex min-h-24 items-center gap-3 rounded-[24px] border border-black/10 bg-[#fffdf9] p-5 transition-colors hover:border-black/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                <span className="min-w-0 flex-1 text-sm font-semibold [overflow-wrap:anywhere]">{category.name}</span>
                <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
