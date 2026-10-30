import {
  ArrowRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/outline"
import { Link } from "wouter"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { illustrations } from "@/lib/v3-illustrations"
import { verificationBadges } from "@/lib/verification-badges"

const fullSection = "flex w-full items-center border-t border-black/10 py-[3.6rem] sm:py-[4.5rem] md:min-h-[90dvh] lg:py-[5.4rem]"
const sectionTitle = "text-balance text-[clamp(2.25rem,4.25vw,3.75rem)] font-medium leading-[.98]"
const sectionSubtitle = "text-balance text-[clamp(1.35rem,2.15vw,1.8rem)] font-medium leading-[1.15]"
const bodyText = "text-[clamp(.98rem,1.2vw,1.08rem)] leading-[1.75]"

const faqs = [
  {
    question: "¿Cómo encuentro un profesional en mi ciudad?",
    answer: "Elige tu ciudad (Vigo, A Coruña o Santiago de Compostela) y la categoría que necesitas —cerrajero, fontanero, electricista, reformas…—. Verás el listado de profesionales de esa zona con sus fotos de trabajos, servicios y valoraciones. No necesitas registrarte ni dejar tus datos para buscar.",
  },
  {
    question: "¿Tengo que registrarme o dar mis datos para contactar?",
    answer: "No. A diferencia de otras plataformas, aquí contactas directamente con el profesional por teléfono, WhatsApp o email desde su perfil. No pedimos registro, ni cesión de datos, ni rellenar formularios largos para que te llamen.",
  },
  {
    question: "¿Cuánto cuesta usar la plataforma?",
    answer: "Para ti, como cliente, es totalmente gratis. No cobramos por ponerte en contacto con un profesional ni intermediamos en el presupuesto. El profesional trata su tarifa directamente contigo.",
  },
  {
    question: "¿Vais a intermediar en el presupuesto o quedaros una comisión?",
    answer: "No. Somos un directorio, no un intermediario. No gestionamos presupuestos, no cobramos por contacto (\"lead\") ni nos llevamos comisión por el trabajo. El acuerdo económico es 100% entre tú y el profesional.",
  },
  {
    question: "¿Cómo sé que un profesional es de confianza?",
    answer: "Cada perfil puede mostrar un sello de verificación que indica una sola cosa: que el profesional nos ha aportado ciertos documentos, como su Identidad, el Alta de autónomo/empresa, el Seguro de responsabilidad civil o una Certificación (p. ej. carnet de gas o boletín eléctrico). Son hechos que comprobamos, no una opinión sobre su trabajo. Puedes ver qué revisamos en nuestra página \"Cómo verificamos\".",
  },
  {
    question: "¿Todos los profesionales están verificados?",
    answer: "No. En perfiles reales, cada etiqueta indicará exactamente qué documento se aportó y qué no se revisó. Los perfiles actuales son demostraciones y sus estados solo sirven para mostrar cómo funcionará la interfaz.",
  },
  {
    question: "¿La plataforma garantiza la calidad del trabajo?",
    answer: "No, y preferimos decirlo claro: el sello confirma que el profesional nos aportó ciertos documentos, pero no garantizamos ni avalamos la calidad del resultado. Nuestro papel es darte información fiable y contacto directo para que decidas con criterio.",
  },
  {
    question: "¿Las valoraciones y reseñas son reales?",
    answer: "La versión actual no publica valoraciones ni reseñas. Cuando se active esa función, solo se mostrarán opiniones auténticas con su origen explicado; nunca se generarán reseñas de demostración como si fueran reales.",
  },
  {
    question: "¿Puedo encontrar profesionales para una urgencia (24h)?",
    answer: "Cuando existan altas reales, algunos perfiles podrán declarar atención urgente. Esa etiqueta no garantizará disponibilidad inmediata: tendrás que confirmarla directamente con el profesional. Ante una emergencia o un riesgo para personas, utiliza los canales oficiales correspondientes.",
  },
  {
    question: "¿Qué tipo de profesionales puedo encontrar?",
    answer: "La estructura actual incluye 20 categorías de instalaciones, reparaciones, reformas, construcción, climatización, energía y mantenimiento del hogar. Todas cuentan con un hub propio y navegación piloto para Vigo, A Coruña y Santiago de Compostela.",
  },
  {
    question: "¿Cuánto suele costar contratar cada servicio?",
    answer: "Los precios los fija cada profesional. Como orientación, publicamos guías de precios locales por servicio (por ejemplo, cuánto cuesta un fontanero en Vigo, una reforma de baño o cambiar una cerradura) para que tengas una referencia antes de pedir presupuesto. El precio final siempre lo acuerdas directamente con el profesional.",
  },
  {
    question: "¿En qué ciudades estáis disponibles?",
    answer: "Ahora mismo operamos en Vigo, A Coruña y Santiago de Compostela. Iremos ampliando de forma progresiva al resto de Galicia y, más adelante, a otras zonas.",
  },
  {
    question: "¿Qué significa que un profesional no tenga el sello de verificación?",
    answer: "Solo significa que aún no nos ha aportado documentación, no que no sea de fiar. Puede estar en proceso o simplemente haber optado por no hacerlo. Puedes contactarlo igualmente y, si lo deseas, pedirle tú directamente la documentación que te interese.",
  },
] as const

function StepHeading({ number, title, subtitle, text }: { number: string; title: string; subtitle: string; text: string }) {
  return (
    <div className="max-w-xl">
      <div className="flex items-center gap-5" aria-label={`Paso ${number}`}>
        <span className="editorial-serif text-[clamp(3.5rem,7vw,6.75rem)] font-medium leading-none">{number}</span>
        <span className="h-px flex-1 bg-black/20" aria-hidden="true" />
      </div>
      <h2 className={`mt-[1.8rem] ${sectionTitle}`}>{title}</h2>
      <p className={`mt-[1.125rem] ${sectionSubtitle}`}>{subtitle}</p>
      <p className={`mt-[1.125rem] text-black/62 ${bodyText}`}>{text}</p>
    </div>
  )
}

function SearchVisual() {
  return (
    <div aria-label="Ejemplo ilustrativo del buscador" className="relative rounded-[34px] border border-black/10 bg-[#fffdf9] p-[1.125rem] shadow-[0_24px_70px_rgba(44,35,24,.10)] sm:p-[1.575rem]">
      {/* Lift neutral ink to brand cream without inverting the lime accessories or alpha. */}
      <svg width="0" height="0" className="pointer-events-none absolute" aria-hidden="true" focusable="false">
        <defs>
          <filter id="client-search-character-cream" colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="1 -.96078431 0 0 .96078431  0 .05882353 0 0 .94117647  0 -.90980392 1 0 .90980392  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>
      <div className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 rounded-full bg-accent sm:-left-7 sm:-top-7 sm:h-24 sm:w-24" aria-hidden="true" />
      <div className="relative grid gap-[.675rem] sm:grid-cols-2">
        <div className="flex min-h-20 items-center gap-[.9rem] rounded-[22px] border border-black/10 bg-white px-[1.125rem]">
          <MagnifyingGlassIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="text-sm text-black/55">¿Qué necesitas?</span>
        </div>
        <div className="flex min-h-20 items-center gap-[.9rem] rounded-[22px] border border-black/10 bg-white px-[1.125rem]">
          <MapPinIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="text-sm text-black/55">¿Dónde?</span>
        </div>
      </div>
      <div className="relative mt-[.9rem] grid grid-cols-[1fr_auto] items-center gap-[1.125rem] rounded-[24px] bg-black p-[1.125rem] text-white sm:p-[1.35rem]">
        <div className="space-y-[.675rem]" aria-hidden="true">
          <span className="block h-2.5 w-2/3 rounded-full bg-white/80" />
          <span className="block h-2 w-5/6 rounded-full bg-white/30" />
          <span className="block h-2 w-1/2 rounded-full bg-white/30" />
        </div>
        <img src={illustrations.plumber} alt="" className="h-28 w-24 object-contain sm:h-36 sm:w-32" style={{ filter: "url(#client-search-character-cream)" }} />
      </div>
    </div>
  )
}

function ProfileExample({ verified }: { verified: boolean }) {
  return (
    <article className={`rounded-[30px] border border-black/10 p-[1.125rem] sm:p-[1.35rem] ${verified ? "bg-[#fffdf9]" : "bg-[#e7e1d7]"}`}>
      <div className="flex items-start gap-[.9rem]">
        <div className="flex h-28 w-24 shrink-0 items-end justify-center rounded-[20px] bg-[#ddd0ef] px-1 pt-2">
          <img src={verified ? illustrations.electrician : illustrations.mason} alt="" className="h-full w-full object-contain object-bottom" />
        </div>
        <div className="min-w-0 flex-1 pt-1" aria-hidden="true">
          <span className="block h-2 w-20 rounded-full bg-black/20" />
          <span className="mt-[.9rem] block h-4 w-4/5 rounded-full bg-black/75" />
          <span className="mt-[.675rem] block h-2 w-3/5 rounded-full bg-black/20" />
          <span className="mt-2 block h-2 w-2/5 rounded-full bg-black/15" />
        </div>
      </div>
      <div className="mt-[1.125rem] flex items-center gap-[.675rem] border-t border-black/10 pt-[.9rem]">
        {verified ? (
          <img src={verificationBadges.verified} alt="" width="640" height="640" loading="lazy" decoding="async" className="h-14 w-14 shrink-0 object-contain" />
        ) : (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/15 bg-[#fffdf9]">
            <ClockIcon className="h-6 w-6 text-black/55" aria-hidden="true" />
          </span>
        )}
        <div>
          <h3 className="text-lg font-medium leading-tight">{verified ? "Identidad verificada" : "Verificación pendiente"}</h3>
          {!verified && <span className="mt-1 block h-1.5 w-24 rounded-full bg-black/15" aria-hidden="true" />}
        </div>
      </div>
    </article>
  )
}

function ComparisonCard({ index }: { index: number }) {
  const colors = ["bg-[#ddd0ef]", "bg-[#cfeef2]", "bg-[#f6c6b7]"]
  const labels = ["Servicios", "Trabajos", "Opiniones", "Verificaciones"]
  return (
    <article className="rounded-[28px] border border-black/10 bg-[#fffdf9] p-[.9rem] shadow-[0_18px_50px_rgba(44,35,24,.07)] sm:p-[1.125rem]">
      <div className={`flex h-36 items-end justify-center rounded-[20px] ${colors[index]}`}>
        <img src={illustrations.electrician} alt="" className="h-32 w-28 object-contain object-bottom" />
      </div>
      <div className="mt-[.9rem] flex items-center justify-between gap-[.675rem]" aria-hidden="true">
        <span className="h-3 w-2/3 rounded-full bg-black/75" />
        <span className="flex items-center gap-1 text-sm font-semibold"><StarIcon className="h-4 w-4 fill-accent" />{(4.7 + index / 10).toFixed(1)}</span>
      </div>
      <div className="mt-[.9rem] flex flex-wrap gap-[.45rem]">
        {labels.map((label, labelIndex) => (
          <span key={label} className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.08em] ${labelIndex <= index + 1 ? "border-black/15 bg-[#f5f0e8] text-black/65" : "border-black/10 text-black/35"}`}>
            {label}
          </span>
        ))}
      </div>
    </article>
  )
}

function ContactVisual() {
  return (
    <div aria-label="Simulación de contacto directo" className="rounded-[36px] border border-black/10 bg-[#111] p-[1.125rem] text-white shadow-[0_24px_70px_rgba(44,35,24,.12)] sm:p-[1.8rem]">
      <div className="grid items-center gap-[1.35rem] sm:grid-cols-[1fr_auto_1fr]">
        <div className="flex min-h-52 items-end justify-center rounded-[26px] bg-[#ddd0ef] px-[.9rem] pt-[1.125rem]">
          <div className="mb-[1.125rem] flex h-28 w-28 items-center justify-center rounded-full border-2 border-black bg-[#fffdf9] text-black" aria-hidden="true">
            <span className="editorial-serif text-5xl">Tú</span>
          </div>
        </div>
        <div className="flex justify-center gap-[.675rem] sm:flex-col">
          <div className="flex flex-col items-center gap-[.45rem]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-black"><PhoneIcon className="h-6 w-6" aria-hidden="true" /></span>
            <span className="text-xs text-white/60">Teléfono</span>
          </div>
          <div className="flex flex-col items-center gap-[.45rem]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10"><ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" aria-hidden="true" /></span>
            <span className="text-xs text-white/60">WhatsApp</span>
          </div>
        </div>
        <div className="flex min-h-52 items-end justify-center rounded-[26px] bg-[#cfeef2] px-[.9rem] pt-[1.125rem]">
          <img src={illustrations.locksmith} alt="" className="h-48 w-40 object-contain object-bottom" />
        </div>
      </div>
    </div>
  )
}

export default function ComoFuncionaClientesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section data-interior-hero className="flex w-full items-center border-b border-white/15 bg-black py-[3.6rem] text-[#fffdf9] sm:py-[4.5rem] lg:py-[5.4rem]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="editorial-serif max-w-4xl text-balance text-[clamp(2.75rem,5.6vw,5rem)] font-medium leading-[.95] tracking-[-.04em]">Tú buscas. Tú comparas. Tú decides.</h1>
          <p className="mt-[1.35rem] max-w-3xl text-[clamp(1rem,1.45vw,1.18rem)] leading-8 text-white/65">Encuentra profesionales de tu zona, conoce sus perfiles y contacta directamente con quien tú elijas. Sin intermediarios y sin coste para ti.</p>
        </div>
      </section>

      <section id="buscar" className={`${fullSection} scroll-mt-24 bg-[#fffdf9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:gap-[3.6rem] lg:px-8">
          <StepHeading
            number="01"
            title="Busca lo que necesitas"
            subtitle="Profesionales cerca de ti."
            text="Dinos qué servicio necesitas y dónde. Te mostramos los profesionales de esa zona para que conozcas sus perfiles y decidas con quién contactar."
          />
          <SearchVisual />
        </div>
      </section>

      <section id="conocer" className={`${fullSection} scroll-mt-24 bg-[#ede5d9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-[3.6rem] lg:px-8">
          <div className="order-2 grid gap-[.9rem] sm:grid-cols-2 lg:order-1">
            <ProfileExample verified />
            <ProfileExample verified={false} />
          </div>
          <div className="order-1 lg:order-2">
            <StepHeading
              number="02"
              title="Conoce al profesional"
              subtitle="Todo lo que necesitas saber, en un vistazo."
              text="Revisa su perfil: los servicios que ofrece, sus trabajos y la información que ha compartido. Si ha completado nuestro proceso de verificación, lo verás identificado en su perfil."
            />
          </div>
        </div>
      </section>

      <section id="comparar" className={`${fullSection} scroll-mt-24 bg-[#fffdf9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:gap-[3.6rem] lg:px-8">
          <StepHeading
            number="03"
            title="Compara información"
            subtitle="Servicios · trabajos · opiniones · verificaciones"
            text="Antes de contactar, compara diferentes opciones: sus servicios, su experiencia, sus trabajos, las opiniones de otros clientes y lo que tiene verificado. Así decides con más información, sin fiarte únicamente de una valoración o de una etiqueta."
          />
          <div className="grid gap-[.9rem] sm:grid-cols-3">
            {[0, 1, 2].map((index) => <ComparisonCard key={index} index={index} />)}
          </div>
        </div>
      </section>

      <section id="contactar" className={`${fullSection} scroll-mt-24 bg-[#ede5d9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[1.12fr_.88fr] lg:gap-[3.6rem] lg:px-8">
          <div className="order-2 lg:order-1"><ContactVisual /></div>
          <div className="order-1 lg:order-2">
            <StepHeading
              number="04"
              title="Contacta directamente"
              subtitle="Sin registros. Sin intermediarios. Sin esperas."
              text="¿Ya has encontrado al profesional que buscas? Contacta directamente con él y cuéntale lo que necesitas. Verás los canales de contacto que haya activado en su perfil, como teléfono o WhatsApp."
            />
          </div>
        </div>
      </section>

      <section id="preguntas-frecuentes" className={`${fullSection} scroll-mt-24 bg-[#fffdf9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-start gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:gap-[3.6rem] lg:px-8">
          <div className="max-w-xl lg:sticky lg:top-28">
            <div className="flex items-center gap-5" aria-label="Sección 05">
              <span className="editorial-serif text-[clamp(3.5rem,7vw,6.75rem)] font-medium leading-none">05</span>
              <span className="h-px flex-1 bg-black/20" aria-hidden="true" />
            </div>
            <h2 className={`mt-[1.8rem] ${sectionTitle}`}>Preguntas frecuentes</h2>
            <p className={`mt-[1.125rem] text-black/62 ${bodyText}`}>Resolvemos las dudas más habituales antes de que elijas y contactes con un profesional.</p>
          </div>

          <Accordion type="single" collapsible className="w-full border-t border-black/15">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index + 1}`} className="border-black/15">
                <AccordionTrigger className="py-5 text-[clamp(1rem,1.4vw,1.15rem)] font-medium leading-[1.35] hover:no-underline">
                  <span className="flex items-start gap-4 pr-3">
                    <span className="ui-label mt-1 min-w-6 text-black/40">{String(index + 1).padStart(2, "0")}</span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className={`pl-10 pr-8 text-black/62 ${bodyText}`}>
                  <p>{faq.answer}</p>
                  {index === 4 && (
                    <Link href="/como-verificamos" className="mt-4 inline-flex items-center gap-2 border-b border-black/40 pb-1 font-semibold text-black transition-colors hover:border-black/15">
                      Cómo verificamos <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="flex w-full items-center border-t border-black/15 bg-accent py-[3.6rem] sm:py-[4.5rem] lg:py-[5.4rem]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-[1.8rem] lg:flex-row lg:items-end">
            <div>
              <h2 className={sectionTitle}>Encuentra a tu profesional</h2>
              <p className={`mt-[.9rem] text-black/60 ${bodyText}`}>Profesionales verificados en Galicia, a un clic.</p>
            </div>
            <Link href="/#profesionales" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 font-semibold text-white transition-transform duration-150 active:scale-[.97]">
              Explorar profesionales <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
