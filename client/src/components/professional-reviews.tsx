import { StarIcon } from "@heroicons/react/24/outline"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const aspects = ["Servicio", "Puntualidad", "Amabilidad", "Materiales", "Calidad / precio", "Profesionalidad"] as const

/** La interfaz queda preparada; ninguna ficha de demostración dispone de reseñas publicadas. */
export function ProfessionalReviews() {
  return (
    <Card id="valoraciones" className="scroll-mt-24 rounded-[26px] border-black/10 bg-[#fffdf9] shadow-none">
      <CardHeader>
        <p className="ui-label text-black/40">Opiniones de clientes</p>
        <h2 className="text-2xl font-medium">Valoraciones</h2>
        <p className="text-sm leading-6 text-black/55">Aún no hay valoraciones.</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2" role="img" aria-label="Sin puntuación; aún no hay valoraciones">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} className="h-5 w-5 text-black/25" aria-hidden="true" />
          ))}
          <span className="ml-2 text-sm text-black/50">Sin puntuación</span>
        </div>
        <p className="mt-2 text-xs leading-5 text-black/50">Las estrellas se mostrarán cuando haya opiniones reales publicadas.</p>
        <div className="mt-7 space-y-4" aria-label="Aspectos de la valoración">
          {aspects.map((aspect) => (
            <div key={aspect} className="grid grid-cols-[minmax(0,1fr)_minmax(5.5rem,10rem)_1.5rem] items-center gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(8rem,13rem)_2rem]">
              <span className="min-w-0 text-sm font-medium leading-5">{aspect}</span>
              <div className="h-2 rounded-full bg-[#ede5d9]" aria-hidden="true" />
              <span className="text-right text-sm text-black/40" aria-label={`${aspect}: sin datos`}>—</span>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-black/10 pt-6">
          <h3 className="text-lg font-medium">Comentarios</h3>
          <p className="mt-2 text-sm leading-6 text-black/55">Todavía no hay comentarios publicados.</p>
        </div>
      </CardContent>
    </Card>
  )
}
