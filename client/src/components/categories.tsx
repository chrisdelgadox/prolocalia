"use client"

import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { Link } from "wouter"
import { categories } from "@/lib/data"
import { categoryIllustrations, illustrations } from "@/lib/v3-illustrations"

const palette = ["#ddd0ef", "#f6c6b7", "#cfeef2", "#e7e1d7", "#f2d7b6", "#d7e5cf"]

export function Categories() {
  return <section id="categorias" className="paper-texture py-20 sm:py-28">
    <div className="mx-auto max-w-[94rem] px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">Explora por oficio</span><h2 className="mt-5 text-5xl font-medium sm:text-6xl">¿Qué necesitas?</h2></div><p className="max-w-md text-lg leading-8 text-black/55">Veinte oficios, tres ciudades piloto y contacto directo cuando haya perfiles reales publicados.</p></div>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((category, index) => <Link key={category.id} href={`/${category.id}/`} className="group relative min-h-[220px] overflow-hidden rounded-[26px] border border-black/10 p-4 text-left transition duration-200 hover:-translate-y-2" style={{ background: palette[index % palette.length] }}>
          <span className="ui-label">{String(index + 1).padStart(2, "0")}</span><ArrowUpRightIcon className="absolute right-4 top-4 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          <img src={categoryIllustrations[category.id] || illustrations.general} alt="" className="absolute bottom-3 right-[-10%] h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-36 sm:w-36" />
          <h3 className="absolute bottom-4 left-4 z-10 max-w-[62%] text-[1.35rem] font-medium leading-[.95]">{category.name}</h3>
        </Link>)}
      </div>
    </div>
  </section>
}
