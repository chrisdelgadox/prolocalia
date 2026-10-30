type InteriorHeroProps = {
  title: string
  intro: string
}

export function InteriorHero({ title, intro }: InteriorHeroProps) {
  return (
    <section data-interior-hero className="paper-texture border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1 className="editorial-serif max-w-5xl text-balance text-[clamp(2.85rem,7vw,6.5rem)] font-medium uppercase leading-[.9] tracking-[-.045em]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-[clamp(1rem,1.7vw,1.25rem)] leading-8 text-black/60">
          {intro}
        </p>
      </div>
    </section>
  )
}
