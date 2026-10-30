import { Home } from "lucide-react"
import { useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { InteriorHero } from "@/components/interior-hero"

export default function NotFound() {
  const [, setLocation] = useLocation()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InteriorHero title="Página no encontrada" intro="La página que buscas no existe o ha cambiado de lugar. Puedes volver al inicio y seguir explorando profesionales." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Button onClick={() => setLocation("/")} className="rounded-full bg-black px-6 text-white hover:bg-black/80"><Home className="mr-2 h-4 w-4" />Volver al inicio</Button>
      </section>
      <Footer />
    </main>
  )
}
