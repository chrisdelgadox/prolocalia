import { Link } from "wouter"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

export function BlogHero({ title, intro, eyebrow }: { title: string; intro: string; eyebrow: string }) {
  return (
    <section className="bg-black text-white" aria-labelledby="blog-page-title">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-4 py-10 sm:px-6 lg:min-h-[42dvh] lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-10 lg:px-8 lg:py-[clamp(4rem,7dvh,5rem)]">
        <div className="min-w-0">
          <nav aria-label="Migas de pan" className="mb-6 text-xs text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li aria-hidden="true"><ChevronRightIcon className="h-3 w-3" /></li>
              <li aria-current="page" className="text-white">Blog</li>
            </ol>
          </nav>
          <p className="section-kicker text-accent">{eyebrow}</p>
          <h1 id="blog-page-title" className="mt-3 max-w-[23ch] text-balance text-[clamp(2.25rem,4vw,2.5rem)] font-medium leading-[1.05] tracking-[-.05em] [overflow-wrap:break-word] lg:text-[clamp(3.5rem,5vw,4rem)]">{title}</h1>
          <p className="mt-4 max-w-[60ch] text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{intro}</p>
        </div>
        <div className="relative hidden h-60 w-60 shrink-0 justify-self-end lg:block">
          <div className="absolute inset-0 rotate-3 rounded-full bg-[#ddd0ef]" />
          <img src="/manus-storage/manitas_ilustracion_f2e1feaf.png" alt="" className="relative h-full w-full object-contain object-bottom" />
        </div>
      </div>
    </section>
  )
}
