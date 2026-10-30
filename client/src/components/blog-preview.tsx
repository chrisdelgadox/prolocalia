import { Link } from "wouter"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { blogPosts, type BlogPost } from "@/lib/blog-posts"
import { blogPostColor, blogPostLabel } from "@/lib/blog-presentation"

const byRecentDate = (a: BlogPost, b: BlogPost) => b.publishedOn.localeCompare(a.publishedOn)
const featuredPosts = [...blogPosts].sort(byRecentDate).slice(0, 3)

function BlogHomeCard({ post }: { post: BlogPost }) {
  return (
    <article className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-[26px] border border-white/20 bg-[#181817] text-white sm:w-auto sm:shrink">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" aria-label={`Leer artículo: ${post.title}`}>
        <div className="relative h-[var(--blog-image-height)] shrink-0 overflow-hidden" style={{ backgroundColor: blogPostColor(post) }}>
          <img src={post.illustration} alt="" loading="lazy" className="absolute -bottom-[14%] right-[4%] h-[126%] w-[72%] object-contain object-bottom transition-transform duration-200 group-hover:scale-105" />
        </div>
        <div className="flex min-h-[218px] flex-1 flex-col p-5 sm:min-h-[232px] sm:p-6">
          <p className="ui-label text-accent">{blogPostLabel(post)}</p>
          <h3 className="mt-3 line-clamp-3 text-[clamp(1.35rem,2vw,1.6rem)] font-medium leading-[1.16]">{post.title}</h3>
          <p className="mt-3 text-sm text-white/70">{post.readTime}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-accent">Leer artículo <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  )
}

export function BlogPreview() {
  return (
    <section className="blog-preview bg-black text-white" aria-labelledby="blog-preview-title">
      <div className="bg-[#f5f0e8] pt-16 text-black sm:pt-20" style={{ paddingBottom: "calc(2rem + var(--blog-image-half))" }}>
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-kicker justify-center text-black/75">Del blog</span>
          <h2 id="blog-preview-title" className="mt-5 text-balance text-4xl font-medium leading-[1.06] sm:text-5xl">Lo que conviene saber<br /><span className="italic">antes de llamar.</span></h2>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ marginTop: "calc(-1 * var(--blog-image-half))" }}>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-3" aria-label="Últimos artículos del blog">
          {featuredPosts.map(post => <BlogHomeCard key={post.slug} post={post} />)}
        </div>
        <p className="mt-2 text-right text-xs text-white/70 sm:hidden">Desliza para ver más →</p>
      </div>
      <div className="flex justify-center px-4 pb-16 pt-10 sm:pb-20 sm:pt-12">
        <Link href="/blog" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Ver todos los artículos</Link>
      </div>
    </section>
  )
}
