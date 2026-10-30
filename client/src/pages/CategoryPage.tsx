import { useEffect, useState } from "react"
import { Link, useParams } from "wouter"
import { ArrowRightIcon, ChevronRightIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { CompactProfessionalCard } from "@/components/compact-professional-card"
import CityDirectoryPage from "@/pages/CityDirectoryPage"
import NotFound from "@/pages/NotFound"
import { getCategoryPage, getRelatedCategories, getServiceBySlug, serviceSlug } from "@/lib/category-pages"
import { categoryIllustrations, illustrations } from "@/lib/v3-illustrations"
import { getProfessionalsByCategory, getProvince, provinces } from "@/lib/data"
import { filterDirectory, initialDirectoryFilters, type DirectoryFilters } from "@/lib/local-directory"
import { useSeoMetadata } from "@/hooks/useSeoMetadata"

const legacyFilterParams = ["ciudades", "ciudad", "tipo", "sello", "desde", "hasta", "precio", "valoracion", "urgente"]
const upcomingCities = ["Pontevedra", "Ourense", "Lugo"]

// Varía la selección visible sin añadir servicios ni modificar lo que declara cada ficha.
function featuredServiceTitles(catalog: string[], cardIndex: number) {
  const last = catalog.length - 1
  const pairs = catalog.length >= 9
    ? [[0, 4], [6, 9], [3, 5], [1, 7], [2, 8], [4, 9]]
    : [[0, 4], [2, last], [1, 3], [0, last], [2, 4], [1, last]]
  return Array.from(new Set(pairs[cardIndex].map(index => catalog[Math.min(index, last)]).filter(Boolean)))
}

type CategoryRouteParams = { category: string; city?: string }

export default function CategoryPage() {
  const params = useParams<CategoryRouteParams>()
  const resolvedPage = getCategoryPage(params.category)
  const city = params.city ? getProvince(params.city) : undefined
  const invalidLocal = Boolean(params.city) && !city
  const [filters, setFilters] = useState<DirectoryFilters>(initialDirectoryFilters)

  useEffect(() => {
    const url = new URL(window.location.href)
    const requestedCity = url.searchParams.get("ciudades") || url.searchParams.get("ciudad")
    if (!city && requestedCity && provinces.some(province => province.id === requestedCity)) {
      window.location.replace(`/${requestedCity}/${params.category}/`)
      return
    }
    // Los filtros son controles locales, no variantes indexables de la landing.
    const selected = city && resolvedPage ? getServiceBySlug(resolvedPage, url.searchParams.get("servicio")) : undefined
    const invalidService = url.searchParams.has("servicio") && !selected
    if (legacyFilterParams.some(param => url.searchParams.has(param)) || invalidService) {
      legacyFilterParams.forEach(param => url.searchParams.delete(param))
      if (invalidService) url.searchParams.delete("servicio")
      window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash)
    }
    setFilters({ ...initialDirectoryFilters(), services: selected ? [selected.title] : [] })
  }, [params.category, city?.id])

  const page = resolvedPage && !invalidLocal ? resolvedPage : undefined
  const categoryProfessionals = page ? getProfessionalsByCategory(page.slug) : []
  const visibleProfessionals = filterDirectory(categoryProfessionals, filters, city?.id)
  const canonicalPath = page ? (city ? `/${city.id}/${page.slug}/` : `/${page.slug}/`) : window.location.pathname

  useSeoMetadata({
    title: page ? (city ? `${page.name} en ${city.name} | ProLocal` : page.metadata.title) : "Categoría no encontrada | ProLocal",
    description: city
      ? `Explora perfiles de demostración de ${page?.name.toLowerCase()} en ${city.name}. Consulta servicios y zonas antes de contactar directamente.`
      : page?.metadata.description || "La categoría solicitada no existe.",
    canonicalPath,
    robots: "noindex,follow",
  })

  const faqItems: Array<{ question: string; answer: string; link?: { label: string; href: string } }> = page ? (page.content.hub_faqs || page.content.faqs) : []
  useEffect(() => {
    if (!page || city) return
    const origin = window.location.origin
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = "category-hub-schema"
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${origin}/` },
            { "@type": "ListItem", position: 2, name: page.name, item: `${origin}/${page.slug}/` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqItems.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    }).replace(/</g, "\\u003c")
    document.head.appendChild(script)
    return () => script.remove()
  }, [page, city?.id, faqItems])

  if (!page) return <NotFound />
  if (city) return <CityDirectoryPage categoryName={page.name} categorySlug={page.slug} city={city} allProfessionals={categoryProfessionals} visibleProfessionals={visibleProfessionals} filters={filters} onChange={setFilters} />

  const illustration = categoryIllustrations[page.slug] || illustrations.general
  const related = getRelatedCategories(page)
  const services = page.content.service_cards

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="bg-black text-white">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-4 py-10 sm:px-6 lg:min-h-[42dvh] lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-10 lg:px-8 lg:py-[clamp(4rem,7dvh,5rem)]">
          <div className="min-w-0">
            <nav aria-label="Migas de pan" className="mb-6 text-xs text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
                <li aria-current="page" className="text-white">{page.name}</li>
              </ol>
            </nav>
            <p className="section-kicker text-accent">Directorio de contacto directo · Demostración</p>
            <h1 className="mt-3 max-w-[23ch] text-balance text-[clamp(2.25rem,4vw,2.5rem)] font-medium leading-[1.05] tracking-[-.05em] [overflow-wrap:break-word] lg:text-[clamp(3.5rem,5vw,4rem)]">{page.name} en Galicia</h1>
            <p className="mt-4 max-w-[60ch] text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{page.content.hub_intro || `Explora servicios y perfiles de muestra de ${page.name.toLowerCase()} en tres ciudades de Galicia.`}</p>
          </div>
          <div className="relative hidden h-60 w-60 shrink-0 justify-self-end lg:block">
            <div className="absolute inset-0 rotate-3 rounded-[43%_57%_50%_50%/48%_44%_56%_52%]" style={{ background: page.color }} />
            <img src={illustration} alt="" className="relative h-full w-full object-contain object-bottom" />
          </div>
        </div>
      </section>

      <section id="ciudades" className="paper-texture border-b border-black/10 py-12 sm:py-16" aria-labelledby="cities-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="cities-title" className="text-3xl font-medium sm:text-4xl">Elige tu ciudad</h2>
          <p className="mt-3 text-sm leading-6 text-black/60">Tres ciudades piloto para explorar. Estamos preparando otras ubicaciones.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {provinces.map(province => (
              <Link key={province.id} href={`/${province.id}/${page.slug}/`} className="group flex min-h-20 items-center justify-between gap-2 rounded-[22px] border border-black/10 bg-[#fffdf9] px-5 py-4 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:min-h-24 sm:px-6">
                <span className="text-lg font-medium">{province.name}</span><MapPinIcon className="h-5 w-5 shrink-0 text-black/50" aria-hidden="true" />
                {/* En el futuro, mostrar aquí el recuento solo de perfiles auténticos publicados. */}
              </Link>
            ))}
            {upcomingCities.map(name => (
              <div key={name} aria-label={`${name}, pronto; no disponible`} className="flex min-h-20 items-center justify-between gap-3 rounded-[22px] border border-black/10 bg-[#ebe6dd] px-5 py-4 text-black/40 sm:min-h-24 sm:px-6">
                <span className="text-lg font-medium">{name}</span>
                <span className="shrink-0 rounded-full border border-black/10 bg-[#f5f0e8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-black/55">Pronto</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="perfiles" className="scroll-mt-20 bg-[#ede5d9] py-12 sm:py-16 lg:flex lg:min-h-dvh lg:items-center" aria-labelledby="profiles-title">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Directorio de muestra</p>
          <h2 id="profiles-title" className="mt-3 text-balance text-3xl font-medium sm:text-5xl">Perfiles por ciudad</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">Estas fichas muestran cómo funcionará el directorio. No son profesionales disponibles.</p>
          <div className="mt-8 grid w-full min-w-0 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6">
            {provinces.map((province, cityIndex) => {
              const people = categoryProfessionals.filter(person => person.province === province.id).slice(0, 2)
              return <section key={province.id} aria-labelledby={`profiles-${province.id}`} className={`city-panel city-panel--${province.id} flex w-full min-w-0 flex-col rounded-[28px] p-4 text-[#111111] sm:p-5`}>
                <h3 id={`profiles-${province.id}`} className="mb-4 w-full border-b border-black/25 pb-3 text-center text-2xl font-medium sm:text-3xl">{province.name}</h3>
                {people.length ? <div className="grid gap-3 pb-5">{people.map((person, personIndex) => {
                  const catalog = services.map(service => service.title).filter(title => person.services.includes(title))
                  return <CompactProfessionalCard key={person.id} professional={person} featuredServices={featuredServiceTitles(catalog, cityIndex * 2 + personIndex)} />
                })}</div> : <p className="rounded-[20px] border border-black/10 bg-[#fffdf9] p-5 text-sm">Aún no hay fichas en esta ciudad.</p>}
                <Link href={`/${province.id}/${page.slug}/`} className="city-link mx-auto mt-auto inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full border-2 bg-[#fffdf9] px-4 py-2 text-center text-sm font-semibold leading-5 text-[#111111] transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"><span>Ver {page.name.toLowerCase()} en {province.id === "santiago-de-compostela" ? "Santiago" : province.name}</span><ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
              </section>
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#ddd0ef] py-12 sm:py-16" aria-labelledby="services-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Servicios y especialidades</p>
          <h2 id="services-title" className="mt-3 text-3xl font-medium sm:text-5xl">Trabajos que puedes consultar</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-black/70 sm:text-base">{page.content.hub_services_intro || page.content.category_intro_paragraphs[0]}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="flex min-w-0 flex-col rounded-[24px] border border-black/10 bg-[#fffdf9] p-6">
                <span className="ui-label text-black/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl font-medium">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-black/60">{service.description}</p>
                <div className="mt-5 border-t border-black/10 pt-4 text-xs leading-6">
                  <span className="block font-semibold text-black/55">Ver en</span>
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {provinces.map((province, cityIndex) => <span key={province.id} className="whitespace-nowrap"><Link href={`/${province.id}/${page.slug}/?servicio=${serviceSlug(service.title)}`} className="font-semibold underline-offset-2 hover:underline focus-visible:underline">{province.name}</Link>{cityIndex < provinces.length - 1 ? <span className="ml-2 text-black/30">·</span> : null}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#cfeef2] py-12 sm:py-16" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:gap-12 lg:px-8">
          <div><p className="section-kicker">Preguntas frecuentes</p><h2 id="faq-title" className="mt-3 text-3xl font-medium sm:text-5xl">Antes de contactar</h2></div>
          <Accordion type="single" collapsible className="border-t border-black/15">
            {faqItems.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-black/15">
                <AccordionTrigger className="py-4 text-left font-sans text-base font-semibold tracking-normal hover:no-underline sm:text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-5 text-sm leading-7 text-black/70 sm:text-base"><p>{faq.answer}</p>{faq.link ? <Link href={faq.link.href} className="mt-2 inline-flex font-semibold text-black underline underline-offset-4">{faq.link.label} →</Link> : null}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-black py-12 text-white sm:py-16" aria-labelledby="how-cta-title">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[26px] border border-white/20 bg-white/[.04] p-6 sm:p-8">
            <p className="section-kicker text-accent">Para clientes</p>
            <h2 id="how-cta-title" className="mt-3 text-3xl font-medium">¿Cómo funciona ProLocal?</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">Explora fichas y contacta directamente cuando haya profesionales publicados. Sin registros de cliente ni comisiones por trabajo.</p>
            <div className="mt-6 space-y-3">
              <Link href="/como-funcionamos" className="block rounded-xl border border-white/15 px-4 py-3 text-sm hover:bg-white/10"><strong>Cómo funcionamos →</strong><span className="mt-1 block text-white/55">Qué información mostramos y cómo contactar.</span></Link>
              <Link href="/como-verificamos" className="block rounded-xl border border-white/15 px-4 py-3 text-sm hover:bg-white/10"><strong>Cómo verificamos →</strong><span className="mt-1 block text-white/55">Qué acredita cada sello y qué no garantizamos.</span></Link>
            </div>
          </div>
          <div className="rounded-[26px] bg-accent p-6 text-black sm:p-8">
            <p className="section-kicker">Para profesionales</p>
            <h2 className="mt-3 text-3xl font-medium">{page.content.professional_singular ? `¿Eres ${page.content.professional_singular} en Vigo, A Coruña o Santiago? Crea tu perfil gratis.` : `¿Trabajas en ${page.name.toLowerCase()} en Vigo, A Coruña o Santiago? Crea tu perfil gratis.`}</h2>
            <p className="mt-4 text-sm leading-6 text-black/70">Cuéntanos tus servicios y dónde trabajas. Esta versión es un borrador local: crear un perfil no lo publica aún en el directorio.</p>
            <Link href="/profesionales/registro" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/80">Crear perfil <ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section className="paper-texture py-12 sm:py-16" aria-labelledby="related-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">También puede ayudarte</p>
          <h2 id="related-title" className="mt-3 text-3xl font-medium sm:text-5xl">Profesiones relacionadas</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(item => <Link key={item.slug} href={`/${item.slug}/`} className="group rounded-[22px] border border-black/10 bg-[#fffdf9] p-5 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              <h3 className="text-xl font-medium">{item.category.name} <span aria-hidden="true">↗</span></h3>
              <p className="mt-2 text-sm leading-6 text-black/60">{item.when}</p>
            </Link>)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
