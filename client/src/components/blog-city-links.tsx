import { Link } from "wouter"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { getBlogCta } from "@/lib/blog-cta"

export function BlogCityLinks({ tradeId }: { tradeId?: string }) {
  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap" aria-label="Elegir ciudad">
      {getBlogCta(tradeId).cities.map(city => <Link key={city.id} href={city.href} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto">
        {city.label} <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>)}
    </div>
  )
}
