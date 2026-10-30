import { Fragment, useMemo } from "react"
import { Link, useParams } from "wouter"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { BlogArticleCta } from "@/components/blog-article-cta"
import { BlogArticleSidebar } from "@/components/blog-article-sidebar"
import { BlogNextStep } from "@/components/blog-next-step"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import NotFound from "@/pages/NotFound"
import { blogPostLabel } from "@/lib/blog-presentation"
import { blogAuthor, getBlogPost, getRelatedPosts } from "@/lib/blog-posts"
import { blogArticleStructures } from "@/lib/blog-article-structure"
import { useJsonLd } from "@/hooks/useJsonLd"
import { useSeoMetadata } from "@/hooks/useSeoMetadata"

// 720px reading column + 64px gutter + 300px sidebar, centered on the same hero axis.
const articleContainer = "mx-auto w-[calc(100%-2rem)] max-w-[1084px] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)]"

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = getBlogPost(slug ?? "")
  const related = post ? getRelatedPosts(post.slug) : []
  const structure = post ? blogArticleStructures[post.slug] : undefined
  const canonicalPath = post ? `/blog/${post.slug}` : window.location.pathname

  useSeoMetadata({
    title: post ? `${post.title} | ProLocal` : "Artículo no encontrado | ProLocal",
    description: post?.excerpt || "Este artículo no está disponible.",
    canonicalPath,
    robots: post ? "index,follow" : "noindex,follow",
  })
  const schema = useMemo(() => {
    if (!post) return null
    const origin = window.location.origin
    const articleUrl = `${origin}/blog/${post.slug}`
    return {
      "@context": "https://schema.org", "@graph": [
        {
          "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: `${origin}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${origin}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
          ],
        },
        {
          "@type": "Article", mainEntityOfPage: articleUrl, headline: post.title, description: post.excerpt,
          image: [new URL(post.illustration, origin).href], datePublished: `${post.publishedOn}T12:00:00+02:00`, dateModified: `${post.updatedOn}T12:00:00+02:00`,
          author: { "@type": "Organization", name: blogAuthor, url: origin },
          publisher: { "@type": "Organization", name: "ProLocal", url: origin },
        },
      ],
    }
  }, [post])
  useJsonLd("blog-article-schema", schema)

  if (!post) return <NotFound />

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <header className="bg-black py-10 text-white sm:py-14" aria-labelledby="article-title">
        <div className={articleContainer} data-article-hero-content>
          <nav aria-label="Migas de pan" className="text-xs leading-5 text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Inicio</Link></li>
              <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
              <li><Link href="/blog" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Blog</Link></li>
              <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
              <li aria-current="page" className="min-w-0 text-white [overflow-wrap:anywhere]">{post.title}</li>
            </ol>
          </nav>
          <p className="section-kicker mt-8 text-accent">{blogPostLabel(post)}</p>
          <h1 id="article-title" className="mt-5 max-w-4xl text-balance text-[clamp(2.25rem,4.5vw,4.25rem)] font-medium leading-[1.05]">{post.title}</h1>
          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/75">
            <span>Actualizado el <time dateTime={post.updatedOn}>{new Intl.DateTimeFormat("es-ES", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${post.updatedOn}T12:00:00Z`))}</time></span>
            <span aria-hidden="true">·</span><span>{blogAuthor}</span><span aria-hidden="true">·</span><span>{post.readTime}</span>
          </div>
        </div>
      </header>
      <div className="paper-texture py-12 sm:py-16">
        <div className={`${articleContainer} grid min-w-0 grid-cols-1 gap-10 min-[1100px]:grid-cols-[minmax(0,1fr)_300px] min-[1100px]:gap-16`} data-article-layout>
          <article aria-labelledby="article-title" className="min-w-0" data-article-body>
            {structure ? structure.sections.map((section, index) => <Fragment key={section.title}>
              <section aria-labelledby={`article-section-${index}`} className={index ? "mt-14" : ""} data-article-section>
                <h2 id={`article-section-${index}`} className="max-w-[70ch] text-balance text-[1.75rem] font-medium leading-[1.15] sm:text-[clamp(2rem,3vw,2.25rem)]">{section.title}</h2>
                {section.blocks.map((block, blockIndex) => <div key={blockIndex} className="mt-7">
                  {block.heading && <h3 className="mb-3 max-w-[70ch] font-sans text-xl font-bold leading-snug tracking-normal sm:text-[22px]">{block.heading}</h3>}
                  <div className="space-y-6 text-lg leading-[1.7] text-black/80">{block.paragraphIndexes.map(paragraphIndex => <p key={paragraphIndex} className="max-w-[70ch]">{post.content[paragraphIndex]}</p>)}</div>
                </div>)}
                {section.bullets?.length ? <div className="mt-7">
                  {section.checklistHeading && <h3 className="mb-4 font-sans text-xl font-bold leading-snug tracking-normal sm:text-[22px]">{section.checklistHeading}</h3>}
                  <ul className="max-w-[70ch] space-y-3 text-lg leading-[1.7] text-black/80" data-article-checklist>
                    {section.bullets.map(bullet => <li key={bullet} className="relative pl-5"><span aria-hidden="true" className="absolute left-0 top-[.7em] h-2 w-2 rounded-full bg-accent" />{bullet}</li>)}
                  </ul>
                </div> : null}
              </section>
              {index === 0 && <BlogArticleCta post={post} />}
            </Fragment>) : <>
              <div className="space-y-7 text-lg leading-[1.7] text-black/80">{post.content.map(paragraph => <p key={paragraph} className="max-w-[70ch]">{paragraph}</p>)}</div>
              <BlogArticleCta post={post} />
            </>}
          </article>
          <BlogArticleSidebar post={post} related={related} />
        </div>
      </div>
      <BlogNextStep paraProfesionales={post.paraProfesionales} tradeId={post.tradeId} />
      <Footer />
    </main>
  )
}
