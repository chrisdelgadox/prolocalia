import { CheckIcon, ClockIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { verificationBadges } from "@/lib/verification-badges"

const seals = [
  {
    title: "Identidad verificada",
    image: verificationBadges.identity,
    document: "Documento de identidad o CIF",
    meaning: "Hemos contrastado la identidad de la persona responsable de la ficha con la documentación aportada.",
    limit: "No es una valoración de su trabajo ni una garantía de que cumpla cada acuerdo.",
  },
  {
    title: "Alta de autónomo o empresa",
    image: verificationBadges.selfEmployed,
    document: "Documento de alta o acreditación de empresa",
    meaning: "Hemos revisado un documento que acredita el alta para la actividad declarada en el momento de la comprobación.",
    limit: "No certifica por sí solo que todas sus obligaciones sigan al día en cualquier fecha futura.",
  },
  {
    title: "Seguro de responsabilidad civil",
    image: verificationBadges.liabilityInsurance,
    document: "Póliza y documentación de vigencia",
    meaning: "Hemos revisado la documentación aportada sobre la existencia y vigencia del seguro en la fecha de comprobación.",
    limit: "No garantiza que una incidencia concreta esté cubierta: consulta condiciones, límites y exclusiones con el profesional.",
  },
  {
    title: "Acreditación profesional",
    image: verificationBadges.professionalAccreditation,
    document: "Título, carnet o certificado del oficio",
    meaning: "Hemos comprobado la acreditación aportada para la especialidad que figure en la ficha.",
    limit: "No acredita todos los trabajos posibles ni sustituye los permisos específicos que pueda requerir cada servicio.",
  },
] as const

const statuses = [
  { icon: MinusIcon, title: "Sin aportar", text: "No se ha presentado documentación para este sello. No significa que el profesional no sea de fiar." },
  { icon: ClockIcon, title: "Pendiente de revisión", text: "Se ha recibido documentación, pero todavía no se ha aprobado. Aportar no equivale a estar verificado." },
  { icon: CheckIcon, title: "Aprobado", text: "Se ha contrastado el documento correspondiente. Solo entonces se muestra ese sello concreto." },
  { icon: XMarkIcon, title: "No aprobado", text: "El documento aportado no basta, está caducado o no permite acreditar ese punto. No mostramos el sello." },
] as const

const boundaries = [
  { title: "No intervenimos en la contratación", text: "Tú contactas directamente con el profesional. ProLocal no solicita presupuestos en tu nombre, no negocia condiciones ni participa en el acuerdo entre ambas partes." },
  { title: "No cobramos comisiones por los trabajos", text: "El profesional y el cliente acuerdan directamente el precio, la forma de pago y las condiciones del servicio. ProLocal no retiene ninguna parte del importe del trabajo." },
  { title: "No supervisamos ni ejecutamos los servicios", text: "ProLocal no está presente durante la realización del trabajo ni controla cómo se ejecuta. La prestación del servicio corresponde exclusivamente al profesional contratado." },
  { title: "Los sellos verifican información concreta", text: "Un sello puede indicar que ProLocal ha comprobado determinada documentación, como identidad, alta de autónomo, seguro de responsabilidad civil o una acreditación profesional. No significa que ProLocal garantice la calidad, puntualidad o resultado de futuros trabajos." },
  { title: "La información te ayuda a decidir", text: "Perfiles, fotografías de trabajos, servicios, ubicación, acreditaciones, verificaciones y opiniones están pensados para que tengas más información antes de contactar.", takeaway: "Cuanta más información tengas, mejor puedes elegir." },
  { title: "El acuerdo es entre cliente y profesional", text: "Presupuesto, alcance del trabajo, materiales, plazos, garantías, pagos y cualquier otra condición deben acordarse directamente entre ambas partes." },
] as const

function SectionHeading({ number, label, title, intro, followup, dark = false }: { number: string; label: string; title: string; intro: string; followup?: string; dark?: boolean }) {
  return (
    <div className="mb-9 max-w-3xl sm:mb-12">
      <div className="flex items-center gap-4" aria-label={`Sección ${number}: ${label}`}>
        <span className={`editorial-serif text-5xl font-medium leading-none sm:text-6xl ${dark ? "text-accent" : ""}`}>{number}</span>
        <span className={`h-px w-12 ${dark ? "bg-white/35" : "bg-black/20"}`} aria-hidden="true" />
        <span className={`ui-label ${dark ? "text-accent" : "text-black/50"}`}>{label}</span>
      </div>
      <h2 className={`editorial-serif mt-6 text-balance font-medium leading-[1.04] ${dark ? "text-[clamp(2.3rem,4.5vw,4rem)]" : "text-[clamp(2rem,4vw,3.25rem)]"}`}>{title}</h2>
      <p className={`mt-4 text-[clamp(.98rem,1.3vw,1.12rem)] leading-7 ${dark ? "text-white/70" : "text-black/60"}`}>{intro}</p>
      {followup && <p className={`mt-4 text-[clamp(.98rem,1.3vw,1.12rem)] leading-7 ${dark ? "text-white/70" : "text-black/60"}`}>{followup}</p>}
    </div>
  )
}

export default function ComoVerificamosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section data-interior-hero className="w-full border-b border-white/15 bg-black py-[3.6rem] text-[#fffdf9] sm:py-[4.5rem] lg:py-[5.4rem]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="editorial-serif max-w-5xl text-balance text-[clamp(2.75rem,5.6vw,5rem)] font-medium leading-[.95] tracking-[-.04em]">Cómo verificamos</h1>
          <p className="mt-[1.35rem] max-w-3xl text-[clamp(1rem,1.45vw,1.18rem)] leading-8 text-white/70">Te mostramos qué acredita cada sello y qué no. Por ahora los perfiles son de demostración: todavía no revisamos documentación real.</p>
        </div>
      </section>

      <section id="sellos" className="scroll-mt-20 border-t border-black/10 bg-[#ede5d9] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading number="01" label="Los cuatro sellos" title="Cada sello significa una cosa concreta." intro="No existe un sello único que avale a todo el profesional. Cada distintivo corresponde a una documentación específica; solo aparece cuando se haya revisado y aprobado." />
          <div className="grid gap-4 md:grid-cols-2">
            {seals.map(({ title, image, document, meaning, limit }) => (
              <article key={title} className="flex min-w-0 flex-col rounded-[30px] border border-black/10 bg-[#fffdf9] p-6 sm:p-8">
                <div className="flex min-h-28 items-center gap-5 sm:min-h-32 sm:gap-7">
                  <img src={image} alt={`Sello: ${title}`} width="720" height="720" loading="lazy" decoding="async" className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28" />
                  <div className="min-w-0">
                    <p className="ui-label text-black/40">Documentación</p>
                    <h3 className="mt-2 text-balance text-[clamp(1.4rem,2.1vw,1.85rem)] font-medium leading-tight">{title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[.1em] text-black/50">{document}</p>
                <p className="mt-3 text-sm leading-7 text-black/75"><strong className="font-semibold text-black">Qué indica.</strong> {meaning}</p>
                <p className="mt-3 border-t border-black/10 pt-3 text-sm leading-6 text-black/55"><strong className="font-semibold text-black/80">Qué no indica.</strong> {limit}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-sm leading-6 text-black/60">En esta versión, los sellos que puedas ver en perfiles de muestra son solo ejemplos de interfaz: no corresponden a una verificación documental efectuada.</p>
        </div>
      </section>

      <section id="lo-que-no-hacemos" className="scroll-mt-20 bg-black py-16 text-[#fffdf9] sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,.7fr)] lg:items-center lg:gap-16">
            <SectionHeading
              number="02"
              label="Cómo funciona ProLocal"
              title="Te damos información. Tú eliges al profesional."
              intro="ProLocal es un directorio de profesionales, no una empresa de intermediación. Nuestro objetivo es ofrecerte la mayor cantidad de información posible para que puedas comparar perfiles y tomar tu propia decisión."
              followup="No participamos en la contratación, no enviamos presupuestos, no gestionamos pagos y no cobramos comisiones por los trabajos realizados."
              dark
            />
            <aside aria-label="Nota importante" className="relative mx-2 mb-8 rounded-[22px] border border-black/10 bg-[#fffdf9] px-7 pb-9 pt-10 text-black shadow-[0_22px_60px_rgba(0,0,0,.2)] rotate-[1.5deg] sm:mx-5 lg:mb-12">
              <span className="absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-3 bg-accent/90" aria-hidden="true" />
              <p className="ui-label text-black/45">Una nota para ti</p>
              <p className="editorial-serif mt-5 text-balance text-[clamp(1.75rem,2.6vw,2.55rem)] font-medium leading-[1.12]">ProLocal te ayuda a encontrar y conocer profesionales. La decisión de contratación es tuya.</p>
            </aside>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {boundaries.map((item, index) => (
              <article key={item.title} className="flex min-w-0 flex-col rounded-[26px] border border-white/15 bg-white/[.055] p-6 sm:p-7">
                <span className="editorial-serif text-3xl leading-none text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-7 text-balance text-[clamp(1.25rem,1.8vw,1.55rem)] font-medium leading-[1.2] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
                {"takeaway" in item && <p className="editorial-serif mt-6 border-t border-white/15 pt-5 text-lg italic leading-snug text-accent">{item.takeaway}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estados" className="scroll-mt-20 border-t border-black/10 bg-[#fffdf9] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading number="03" label="Transparencia" title="Aportar no es lo mismo que verificar." intro="La verificación es opcional, gratuita e independiente de la visibilidad del perfil. Cada punto se revisa por separado; si falta o no se aprueba, lo decimos con claridad." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statuses.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[26px] border border-black/10 bg-[#f5f0e8] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#fffdf9]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-7 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
