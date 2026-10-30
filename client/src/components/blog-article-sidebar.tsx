import { Link } from "wouter"
import { BlogArticleCta } from "@/components/blog-article-cta"
import { blogPostColor } from "@/lib/blog-presentation"
import type { BlogPost } from "@/lib/blog-posts"

export function BlogArticleSidebar({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  return (
    <aside aria-labelledby="article-sidebar-title" data-article-sidebar className="min-w-0 border-t border-black/10 pt-8 min-[1100px]:border-t-0 min-[1100px]:pt-0">
      <div data-sidebar-sticky className="min-[1100px]:sticky min-[1100px]:top-24">
        <section aria-labelledby="article-sidebar-title">
          <h2 id="article-sidebar-title" className="section-kicker">Te puede interesar</h2>
          {related.length ? <ul aria-label="Artículos relacionados" tabIndex={0} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black min-[1100px]:grid min-[1100px]:gap-0 min-[1100px]:overflow-visible min-[1100px]:pb-0">
            {related.map(item => <li key={item.slug} className="w-[min(280px,85%)] shrink-0 snap-start min-[1100px]:w-auto min-[1100px]:border-b min-[1100px]:border-black/10">
              <Link href={`/blog/${item.slug}`} aria-label={`Leer artículo: ${item.title}`} className="group flex h-full items-start gap-3 rounded-[18px] border border-black/10 bg-[#fffdf9] p-3 transition-colors hover:border-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black min-[1100px]:rounded-none min-[1100px]:border-0 min-[1100px]:bg-transparent min-[1100px]:px-0 min-[1100px]:py-5">
                <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-[14px]" style={{ backgroundColor: blogPostColor(item) }}>
                  <img src={item.illustration} alt="" loading="lazy" className="absolute -bottom-[15%] left-[5%] h-[125%] w-[90%] object-contain object-bottom" />
                </span>
                <span className="block min-w-0 flex-1">
                  <span className="block font-sans text-[10px] font-semibold uppercase leading-4 tracking-[.08em] text-black/70">{item.topic}</span>
                  <span className="editorial-serif mt-1.5 block line-clamp-3 text-lg font-medium leading-[1.2] group-hover:underline group-hover:underline-offset-4">{item.title}</span>
                </span>
              </Link>
            </li>)}
          </ul> : <p className="mt-4 text-sm leading-6 text-black/70">Todavía no hay otros artículos del mismo oficio o tipo para este público.</p>}
        </section>
        <BlogArticleCta post={post} compact />
      </div>
    </aside>
  )
}
