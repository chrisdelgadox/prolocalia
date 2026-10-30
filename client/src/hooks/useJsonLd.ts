import { useEffect } from "react"

export function useJsonLd(id: string, data: object | null) {
  useEffect(() => {
    if (!data) return
    const script = document.createElement("script")
    script.id = id
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(data).replace(/</g, "\\u003c")
    document.head.appendChild(script)
    return () => script.remove()
  }, [id, data])
}
