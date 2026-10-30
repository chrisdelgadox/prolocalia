import { Link } from "wouter"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import type { BlogPost } from "@/lib/blog-posts"
import { blogPostColor, blogPostLabel } from "@/lib/blog-presentation"

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[26px] border border-black/10 bg-[#fffdf9] transition-transform duration-200 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" aria-label={`Leer artículo: ${post.title}`}>
        <div className="relative h-40 shrink-0 overflow-hidden sm:h-44" style={{ backgroundColor: blogPostColor(post) }}>
          <img src={post.illustration} alt="" loading="lazy" className="absolute -bottom-[22%] right-[5%] h-[140%] w-[70%] object-contain object-bottom transition-transform duration-200 group-hover:scale-105" />
        </div>
        <div className="flex min-h-[278px] flex-1 flex-col p-5 sm:p-6">
          <p className="ui-label text-black/75">{blogPostLabel(post)}</p>
          <h3 className="mt-3 line-clamp-3 text-[clamp(1.4rem,2vw,1.65rem)] font-medium leading-tight">{post.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/70">{post.excerpt}</p>
          <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-5 text-sm">
            <span className="text-black/70">{post.readTime}</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-black">Leer artículo <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></span>
          </div>
        </div>
      </Link>
    </article>
  )
}
