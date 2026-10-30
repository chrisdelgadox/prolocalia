import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { verificationBadges } from "@/lib/verification-badges"

const seals = [
  { id: "identity", label: "Identidad verificada", image: verificationBadges.identity },
  { id: "business", label: "Alta de autónomo o empresa", image: verificationBadges.selfEmployed },
  { id: "insurance", label: "Seguro de responsabilidad civil", image: verificationBadges.liabilityInsurance },
  { id: "accreditation", label: "Acreditación profesional", image: verificationBadges.professionalAccreditation },
] as const

type DocumentaryStatusProps = {
  identityVerified: boolean
  isLocalPreview: boolean
}

export function DocumentaryStatus({ identityVerified, isLocalPreview }: DocumentaryStatusProps) {
  return (
    <Card className="rounded-[26px] border-black/10 bg-[#fffdf9] shadow-none">
      <CardHeader className="pb-3">
        <p className="ui-label text-black/40">Estado documental</p>
        <h2 className="text-xl font-medium">Los cuatro sellos</h2>
        <p className="text-xs leading-5 text-black/55">
          {isLocalPreview ? "Borrador local: ningún documento se ha aportado ni revisado." : "Estados de demostración: no corresponden a comprobaciones reales."}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {seals.map(seal => {
            // El único estado ilustrativo disponible en las fichas demo es la identidad.
            const active = seal.id === "identity" && identityVerified && !isLocalPreview
            return (
              <li
                key={seal.id}
                data-seal={seal.id}
                data-status={active ? "demo-active" : "without-seal"}
                className={`flex min-w-0 items-center gap-3 rounded-[18px] border p-3 ${active ? "border-[#dbe3aa] bg-[#f2f7cf]" : "border-[#e8e0d5] bg-[#f5f0e8]"}`}
              >
                <img
                  src={seal.image}
                  alt=""
                  width="56"
                  height="56"
                  loading="lazy"
                  className={`h-12 w-12 shrink-0 object-contain ${active ? "" : "grayscale opacity-50"}`}
                />
                <div className="min-w-0">
                  <p className={`text-sm font-medium leading-5 ${active ? "text-black" : "text-black/65"}`}>{seal.label}</p>
                  <p className="mt-0.5 text-xs leading-4 text-black/55">{active ? "Ejemplo · con sello" : isLocalPreview ? "Sin aportar" : "Ejemplo · sin sello"}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <p className="mt-4 text-xs leading-5 text-black/55">
          {isLocalPreview
            ? "Esta vista previa no concede sellos. La verificación requiere un proceso real de revisión."
            : "El color solo ilustra cómo se vería un sello aprobado. El beige indica que no se muestra ese sello, no que falte documentación en la realidad."}
        </p>
      </CardContent>
    </Card>
  )
}
