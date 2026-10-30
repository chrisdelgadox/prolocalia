import { Camera, Expand } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type ProfessionalWorksProps = {
  works?: string[]
  isLocalPreview?: boolean
}

export function ProfessionalWorks({ works = [], isLocalPreview = false }: ProfessionalWorksProps) {
  return (
    <Card id="trabajos-realizados" className="scroll-mt-24 rounded-[26px] border-black/10 bg-[#fffdf9] shadow-none">
      <CardHeader>
        <p className="ui-label text-black/40">El trabajo, en imágenes</p>
        <h2 className="text-2xl font-medium">Trabajos realizados</h2>
        <p className="text-sm leading-6 text-black/55">
          {isLocalPreview
            ? "Vista previa local: estas fotos solo se ven en este navegador. No están publicadas ni se han enviado a ProLocal."
            : "Este perfil de demostración aún no muestra fotos de trabajos publicados."}
        </p>
      </CardHeader>
      <CardContent>
        {works.length > 0 ? (
          <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3" aria-label="Galería de trabajos del borrador local">
            {works.map((work, index) => (
              <Dialog key={`${index}-${work.slice(0, 40)}`}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative block w-full overflow-hidden rounded-[20px] border border-black/10 bg-[#f5f0e8] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    aria-label={`Ampliar foto del trabajo ${index + 1} de ${works.length}`}
                  >
                    <img src={work} alt={`Trabajo ${index + 1} de tu borrador local`} className="aspect-[4/3] w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]" loading="lazy" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#fffdf9]/95 px-3 py-1 text-xs font-semibold text-black">{String(index + 1).padStart(2, "0")}</span>
                    <span className="absolute bottom-3 right-3 rounded-full bg-[#fffdf9]/95 p-2 text-black" aria-hidden="true"><Expand className="h-4 w-4" /></span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90dvh] max-w-[min(92vw,860px)] overflow-y-auto rounded-[24px] border-black/10 bg-[#fffdf9] p-4 sm:p-6">
                  <DialogTitle className="pr-8 text-xl font-medium">Trabajo {index + 1} de {works.length}</DialogTitle>
                  <DialogDescription>Foto del borrador local; no está publicada.</DialogDescription>
                  <img src={work} alt={`Trabajo ${index + 1} de tu borrador local, ampliado`} className="mx-auto max-h-[65dvh] max-w-full rounded-xl object-contain" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-[20px] border border-dashed border-black/20 bg-[#f5f0e8] px-5 py-7 sm:flex-row sm:items-center sm:px-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#cfeef2] text-black/70"><Camera className="h-6 w-6" aria-hidden="true" /></span>
            <div>
              <p className="font-medium">Todavía no hay fotos para mostrar</p>
              <p className="mt-1 text-sm leading-6 text-black/55">{isLocalPreview ? "Añade hasta tres fotos de trabajos desde tu panel para verlas aquí." : "Cuando haya trabajos publicados aparecerán en esta galería."}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
