import { Link } from "wouter"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { BlogCityLinks } from "@/components/blog-city-links"
import type { BlogPost } from "@/lib/blog-posts"
import { clientCtaNote, clientCtaText, getBlogCta, professionalCtaNote } from "@/lib/blog-cta"

export function BlogArticleCta({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <aside
      aria-label={compact ? "Siguiente paso del lateral" : "Siguiente paso dentro del artículo"}
      data-blog-article-cta={compact ? "sidebar" : "inline"}
      className={compact ? "mt-8 hidden rounded-[24px] bg-accent p-5 text-black sm:block" : "my-10 rounded-[26px] bg-accent p-6 text-black sm:p-8"}
    >
      <p className="section-kicker">Siguiente paso</p>
      <h2 className={compact ? "mt-4 text-2xl font-medium leading-[1.15]" : "mt-4 text-2xl font-medium leading-[1.15] sm:text-3xl"}>
        {post.paraProfesionales ? "Crea tu perfil gratis" : getBlogCta(post.tradeId).title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-black/75">{post.paraProfesionales ? professionalCtaNote : compact ? clientCtaNote : clientCtaText}</p>
      {!post.paraProfesionales && !compact && <p className="mt-3 text-xs leading-5 text-black/75">{clientCtaNote}</p>}
      <div className="mt-5">
        {post.paraProfesionales ? <Link href="/profesionales/registro" className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${compact ? "" : "sm:w-auto"}`}>Crear mi perfil <ArrowRightIcon className="h-4 w-4" aria-hidden="true" /></Link> : compact ? <div className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Elegir ciudad">
          {getBlogCta(post.tradeId).cities.map(city => <Link key={city.id} href={city.href} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">{city.label}<ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" /></Link>)}
        </div> : <BlogCityLinks tradeId={post.tradeId} />}
      </div>
    </aside>
  )
}
