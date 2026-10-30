import { useEffect } from "react"

type SeoMetadata = {
  title: string
  description: string
  canonicalPath: string
  robots?: string
}

function getOrCreateMeta(name: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  const created = !element
  if (!element) {
    element = document.createElement("meta")
    element.name = name
    document.head.appendChild(element)
  }
  return { element, created }
}

export function useSeoMetadata({ title, description, canonicalPath, robots = "index,follow" }: SeoMetadata) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const descriptionMeta = getOrCreateMeta("description")
    const previousDescription = descriptionMeta.element.content
    descriptionMeta.element.content = description

    const robotsMeta = getOrCreateMeta("robots")
    const previousRobots = robotsMeta.element.content
    robotsMeta.element.content = robots

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const createdCanonical = !canonical
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    const previousCanonical = canonical.href
    canonical.href = new URL(canonicalPath, window.location.origin).href

    return () => {
      document.title = previousTitle
      if (descriptionMeta.created) descriptionMeta.element.remove()
      else descriptionMeta.element.content = previousDescription
      if (robotsMeta.created) robotsMeta.element.remove()
      else robotsMeta.element.content = previousRobots
      if (createdCanonical) canonical?.remove()
      else if (canonical) canonical.href = previousCanonical
    }
  }, [canonicalPath, description, robots, title])
}
