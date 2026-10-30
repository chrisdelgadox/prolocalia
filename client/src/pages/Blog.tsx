import { useEffect, useMemo, useState } from "react"
import { Link, useSearch } from "wouter"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { ArticleCard } from "@/components/article-card"
import { BlogHero } from "@/components/blog-hero"
import { BlogNextStep } from "@/components/blog-next-step"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { blogPostColor, blogPostLabel } from "@/lib/blog-presentation"
import { blogDescription, blogPosts, blogTopicSlug, blogTopics } from "@/lib/blog-posts"
import { useJsonLd } from "@/hooks/useJsonLd"
import { useSeoMetadata } from "@/hooks/useSeoMetadata"

export default function BlogPage() {
  const search = useSearch()
  const params = new URLSearchParams(search)
  const typeSlug = params.get("tipo")
  const activeTopic = blogTopics.find(topic => blogTopicSlug[topic] === typeSlug)
  const [visibleCount, setVisibleCount] = useState(9)
  useEffect(() => setVisibleCount(9), [activeTopic])

  const posts = useMemo(() => [...blogPosts].sort((a, b) => b.publishedOn.localeCompare(a.publishedOn)), [])
  const filtered = activeTopic ? posts.filter(post => post.topic === activeTopic) : posts
  // A filtered view only features an article from its selected content type.
  const featured = filtered.find(post => post.featured) || filtered[0]
  const otherPosts = filtered.filter(post => post.slug !== featured?.slug)
  const filteredCount = (topic?: string) => topic ? posts.filter(post => post.topic === topic).length : posts.length
  useSeoMetadata({
    title: "Consejos para tu hogar y tu oficio en Galicia | ProLocal",
    description: blogDescription,
    canonicalPath: "/blog",
    robots: params.has("tipo") ? "noindex,follow" : "index,follow",
  })
  const schema = useMemo(() => ({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${window.location.origin}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${window.location.origin}/blog` },
    ],
  }), [])
  useJsonLd("blog-breadcrumb-schema", schema)

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogHero eyebrow="Blog ProLocal" title="Consejos para tu hogar y tu oficio en Galicia" intro={blogDescription} />

      {featured ? <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="featured-title">
        <p className="section-kicker">Selección del blog</p>
        <h2 id="featured-title" className="mt-3 text-3xl font-medium sm:text-5xl">Artículo destacado</h2>
        <article className="mt-7 overflow-hidden rounded-[28px] border border-black/10 bg-[#fffdf9]">
          <Link href={`/blog/${featured.slug}`} className="group grid min-w-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:grid-cols-[45%_minmax(0,1fr)]" aria-label={`Leer artículo destacado: ${featured.title}`}>
            <div className="relative h-52 overflow-hidden md:h-full md:min-h-80" style={{ backgroundColor: blogPostColor(featured) }}>
              <img src={featured.illustration} alt="" className="absolute -bottom-[22%] right-[10%] h-[140%] w-[70%] object-contain object-bottom transition-transform duration-200 group-hover:scale-105" />
            </div>
            <div className="flex min-w-0 flex-col justify-center p-6 sm:p-10">
              <p className="ui-label text-black/75">{blogPostLabel(featured)}</p>
              <h3 className="mt-5 text-balance text-[clamp(1.75rem,3.3vw,2.8rem)] font-medium leading-[1.08]">{featured.title}</h3>
              <p className="mt-4 line-clamp-2 max-w-[60ch] text-sm leading-6 text-black/70 sm:text-base">{featured.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm"><span className="text-black/65">{featured.readTime}</span><span className="inline-flex items-center gap-2 font-semibold">Leer artículo <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></span></div>
            </div>
          </Link>
        </article>
      </section> : null}

      <section className="border-t border-black/10 bg-[#ede5d9] py-12 sm:py-16" aria-labelledby="articles-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="section-kicker">Sigue leyendo</p><h2 id="articles-title" className="mt-3 text-3xl font-medium sm:text-5xl">Todos los artículos</h2></div>
            <p className="text-sm font-medium text-black/70" role="status">{filtered.length} {filtered.length === 1 ? "artículo" : "artículos"}</p>
          </div>
          <nav aria-label="Filtrar artículos por tipo" className="mt-7 flex flex-wrap gap-2">
            {[{ title: "Todos", slug: "" }, ...blogTopics.map(topic => ({ title: topic, slug: blogTopicSlug[topic] }))].map(option => {
              const active = (!activeTopic && !option.slug) || activeTopic === option.title
              return <Link key={option.title} href={option.slug ? `/blog?tipo=${option.slug}` : "/blog"} aria-current={active ? "page" : undefined} className={`inline-flex min-h-10 items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${active ? "border-black bg-black text-white" : "border-black/20 bg-[#fffdf9] text-black hover:bg-accent"}`}>{option.title} · {filteredCount(option.title === "Todos" ? undefined : option.title)}</Link>
            })}
          </nav>
          {otherPosts.length ? <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">{otherPosts.slice(0, visibleCount).map(post => <ArticleCard key={post.slug} post={post} />)}</div> : <div className="mt-8 rounded-[24px] border border-black/10 bg-[#fffdf9] p-8 text-sm text-black/70">{filtered.length ? "El artículo destacado es el único de este tipo por ahora." : "Todavía no hay artículos de este tipo."}</div>}
          {otherPosts.length > visibleCount ? <button type="button" onClick={() => setVisibleCount(count => count + 9)} className="mx-auto mt-8 block min-h-11 rounded-full border-2 border-black px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Ver más artículos</button> : null}
        </div>
      </section>
      <BlogNextStep showProfessionalLink />
      <Footer />
    </main>
  )
}
