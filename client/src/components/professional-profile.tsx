"use client"

import { ArrowLeftIcon, CheckCircleIcon, ChatBubbleLeftRightIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Professional } from "@/lib/data"
import { categoryIllustrations, illustrations } from "@/lib/v3-illustrations"
import { verificationBadges } from "@/lib/verification-badges"
import { toast } from "sonner"
import { ProfessionalReviews } from "@/components/professional-reviews"
import { ProfessionalWorks } from "@/components/professional-works"
import { DocumentaryStatus } from "@/components/documentary-status"

interface ProfessionalProfileProps { professional: Professional; onBack?: () => void; works?: string[]; isLocalPreview?: boolean }

export function ProfessionalProfile({ professional, onBack, works, isLocalPreview = false }: ProfessionalProfileProps) {
  const badge = !isLocalPreview && professional.verified ? verificationBadges.verified : verificationBadges.unverified
  const verificationLabel = isLocalPreview ? "Documentación sin revisar" : professional.verified ? "Identidad verificada" : "Identidad sin verificar"
  const city = professional.location.split(",").at(-1)?.trim() || professional.location

  return (
    <div className="paper-texture mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8 rounded-[22px] border border-black bg-accent px-5 py-4 text-center text-sm">
        {isLocalPreview ? <><strong>Vista previa local — no publicada.</strong> Los datos y fotos solo se guardan en este navegador; cualquiera con acceso a él podría verlos. Abrir este enlace desde otro dispositivo no comparte tu ficha.</> : <><strong>Perfil de demostración — no corresponde a una oferta real.</strong> Nombre, cobertura, estado documental y vías de contacto son ejemplos de interfaz.</>}
      </div>
      <Button variant="ghost" onClick={onBack} className="mb-6"><ArrowLeftIcon className="mr-2 h-4 w-4" />{isLocalPreview ? "Volver a mi panel" : "Volver a resultados"}</Button>

      <header className="flex flex-col gap-7 sm:flex-row sm:items-start">
        <div className="relative shrink-0">
          <div className="h-36 w-36 overflow-hidden rounded-[44%_56%_47%_53%/55%_45%_55%_45%] border border-black/10 bg-[#cfeef2]"><img src={isLocalPreview && professional.image ? professional.image : categoryIllustrations[professional.categoryId] || illustrations.general} alt="" className="h-full w-full object-contain object-bottom" /></div>
          <img src={badge} alt="" width="640" height="640" className="absolute -bottom-4 -right-2 h-16 w-16 object-contain drop-shadow-[0_8px_12px_rgba(44,35,24,.18)]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="ui-label text-black/40">{isLocalPreview ? "Borrador · solo en este navegador" : "Ficha pública de muestra"}</p>
          <h1 className="mt-3 text-4xl font-medium sm:text-6xl">{professional.name}</h1>
          <p className="mt-2 text-lg text-black/55">{professional.category}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Badge variant="outline" className="rounded-full border-black/15 px-3 py-1.5"><MapPinIcon className="mr-1.5 h-4 w-4" />{professional.location}</Badge>
            <Badge className={!isLocalPreview && professional.verified ? "rounded-full bg-accent text-black" : "rounded-full bg-[#ede5d9] text-black/65"}>{isLocalPreview ? "Sin verificar" : `Ejemplo: ${verificationLabel}`}</Badge>
          </div>
        </div>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_19rem]">
        <div className="min-w-0 space-y-6">
          <Card className="rounded-[26px] border-black/10 bg-[#fffdf9] shadow-none"><CardHeader><p className="ui-label text-black/40">Presentación</p><h2 className="text-2xl font-medium">{isLocalPreview ? "Sobre mí" : "Sobre este perfil demo"}</h2></CardHeader><CardContent><p className="leading-7 text-black/60">{professional.description}</p></CardContent></Card>

          <Card id="servicios" className="scroll-mt-24 rounded-[26px] border-black/10 bg-[#fffdf9] shadow-none">
            <CardHeader><p className="ui-label text-black/40">{isLocalPreview ? "Servicios de tu borrador" : "Especialidades declaradas"}</p><h2 className="text-2xl font-medium">Servicios de {professional.category.toLowerCase()} en {city}</h2><p className="text-sm leading-6 text-black/50">{isLocalPreview ? "Estos servicios todavía no se han publicado." : "Ejemplos del nivel de detalle que tendrá una ficha real."}</p></CardHeader>
            <CardContent>{professional.services.length ? <ul className="grid gap-3 sm:grid-cols-2">{professional.services.map((service) => <li key={service} className="flex items-start gap-3 rounded-[18px] border border-black/10 bg-[#f5f0e8] p-4 text-sm leading-6"><CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0" />{service}</li>)}</ul> : <p className="text-sm text-black/55">Aún no has añadido servicios.</p>}</CardContent>
          </Card>

          <ProfessionalWorks works={isLocalPreview ? works : undefined} isLocalPreview={isLocalPreview} />

          <Card id="zonas-de-trabajo" className="scroll-mt-24 rounded-[26px] border-black/10 bg-[#ede5d9] shadow-none">
            <CardHeader><p className="ui-label text-black/40">{isLocalPreview ? "Zona indicada en tu borrador" : "Cobertura local de muestra"}</p><h2 className="text-2xl font-medium">{isLocalPreview ? "Zona de trabajo indicada" : `Zonas donde trabajaría en ${city} y alrededores`}</h2><p className="text-sm leading-6 text-black/50">{isLocalPreview ? "Solo mostramos la ciudad que has indicado; no presupone cobertura en otras zonas ni está publicada." : "En una ficha real, la persona cliente debe confirmar la cobertura para su dirección."}</p></CardHeader>
            <CardContent><ul className="grid gap-3 sm:grid-cols-2">{professional.serviceAreas.map((area) => <li key={area} className="flex items-center gap-3 rounded-full border border-black/10 bg-[#fffdf9] px-4 py-3 text-sm font-medium"><MapPinIcon className="h-4 w-4 shrink-0 text-black/45" />{area}</li>)}</ul></CardContent>
          </Card>
          <ProfessionalReviews />
        </div>

        <aside className="space-y-4">
          <Card className="rounded-[26px] border-black bg-black text-white shadow-[7px_7px_0_#dfff00]"><CardHeader><p className="ui-label text-accent">Contacto directo</p><h2 className="text-2xl font-medium text-white">{isLocalPreview ? "Contacto no publicado" : "Próximamente en perfiles reales"}</h2></CardHeader><CardContent className="space-y-3"><Button className="w-full rounded-full bg-accent text-black hover:bg-white" onClick={() => toast.info(isLocalPreview ? "El contacto de tu borrador aún no es público" : "Contacto no disponible en perfiles de demostración")}><ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />Contactar</Button><Button variant="outline" className="w-full rounded-full border-white/40 bg-transparent text-white hover:bg-white hover:text-black" onClick={() => toast.info(isLocalPreview ? "El teléfono de tu borrador aún no es público" : "Teléfono no disponible en perfiles de demostración")}><PhoneIcon className="mr-2 h-5 w-5" />Llamar</Button></CardContent></Card>
          <DocumentaryStatus identityVerified={professional.verified} isLocalPreview={isLocalPreview} />
        </aside>
      </div>
    </div>
  )
}
