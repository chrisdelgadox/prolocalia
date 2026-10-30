import { Link } from "wouter"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { BlogCityLinks } from "@/components/blog-city-links"
import { clientCtaNote, clientCtaText, getBlogCta, professionalCtaNote } from "@/lib/blog-cta"

type BlogNextStepProps = {
  paraProfesionales?: boolean
  tradeId?: string
  showProfessionalLink?: boolean
}

export function BlogNextStep({ paraProfesionales = false, tradeId, showProfessionalLink = false }: BlogNextStepProps) {
  return (
    <section className="bg-accent py-12 text-black sm:py-16" aria-labelledby="blog-next-step-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-kicker">Siguiente paso</p>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="min-w-0 flex-1">
            <h2 id="blog-next-step-title" className="max-w-3xl text-balance text-3xl font-medium leading-[1.1] sm:text-5xl">{paraProfesionales ? "Crea tu perfil gratis y recibe contactos directos" : getBlogCta(tradeId).title}</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-black/75">{paraProfesionales ? professionalCtaNote : clientCtaText}</p>
            {!paraProfesionales && <p className="mt-3 text-xs leading-5 text-black/75">{clientCtaNote}</p>}
          </div>
          <div className="w-full lg:w-auto lg:max-w-[26rem] lg:shrink-0">
            {paraProfesionales ? <Link href="/profesionales/registro" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto">Crear mi perfil <ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></Link> : <BlogCityLinks tradeId={tradeId} />}
            {!paraProfesionales && showProfessionalLink ? <Link href="/profesionales/registro" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">¿Eres profesional? Crea tu perfil gratis <ArrowRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" /></Link> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
