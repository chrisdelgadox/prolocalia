import {
  ArrowRightIcon,
  CameraIcon,
  ChartBarSquareIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckIcon,
  GlobeAltIcon,
  IdentificationIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
  XMarkIcon,
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

const traditionalModel = [
  "Pagas por cada contacto, responda o no",
  "Compites con otros profesionales por el mismo aviso",
  "No sabes cuánto te cuesta un cliente real",
]

const prolocalModel = [
  "Tu perfil trabaja por ti en tu zona",
  "El cliente decide y te contacta directamente",
  "Nunca pagas por lead ni por comisión",
]

const steps = [
  {
    number: "01",
    icon: IdentificationIcon,
    title: "Crea tu perfil",
    text: "Añade tus servicios, tu zona, fotos de tus trabajos y tus datos de contacto. En unos minutos y sin saber de webs.",
    color: "bg-[#ddd0ef]",
  },
  {
    number: "02",
    icon: MapPinIcon,
    title: "Aparece en tu zona",
    text: "Cuando alguien busca tu oficio en tu ciudad, tu perfil aparece entre los resultados. Sin pujar, sin anuncios.",
    color: "bg-[#cfeef2]",
  },
  {
    number: "03",
    icon: PhoneArrowUpRightIcon,
    title: "Recibe contactos directos",
    text: "El cliente te llama o te escribe directamente. Sin intermediarios y sin que nadie se quede una comisión.",
    color: "bg-[#f6c6b7]",
  },
] as const

const benefits = [
  {
    icon: GlobeAltIcon,
    title: "Apareces en Google",
    text: "Tu perfil está pensado para posicionar en las búsquedas de tu oficio y tu ciudad. Visibilidad sin tener que crearte una web.",
  },
  {
    icon: ChatBubbleOvalLeftEllipsisIcon,
    title: "Contacto directo",
    text: "Los clientes te contactan por teléfono o WhatsApp. La conversación es tuya, desde el minuto uno.",
  },
  {
    icon: CameraIcon,
    title: "Tú decides cómo trabajar",
    text: "Tú decides tus precios, tus condiciones y cómo gestionar cada servicio. Sin intermediarios que decidan por ti.",
  },
  {
    icon: ChartBarSquareIcon,
    title: "Sabes qué funciona",
    text: "Consulta cuántas personas ven tu perfil y cuántas te contactan. Así sabes que estar aquí te sirve.",
  },
] as const

const verificationItems = [
  { image: verificationBadges.identity, title: "Identidad verificada", text: "Tu identidad ha sido comprobada." },
  { image: verificationBadges.selfEmployed, title: "Alta de autónomo o empresa", text: "Acredita que ejerces tu actividad de forma legal." },
  { image: verificationBadges.liabilityInsurance, title: "Seguro de responsabilidad civil", text: "Acredita que tienes un seguro de responsabilidad civil vigente." },
  { image: verificationBadges.professionalAccreditation, title: "Acreditación profesional", text: "Muestra que cuentas con la formación, titulación o acreditación correspondiente." },
] as const

const faqs = [
  {
    question: "¿De verdad es gratis?",
    answer: "Sí. En esta fase beta tu perfil es gratuito. Nunca cobramos por contacto ni comisión por tus trabajos.",
  },
  {
    question: "¿Cómo me contactan los clientes?",
    answer: "Directamente, por los canales que tú actives en tu perfil (teléfono, WhatsApp). El contacto llega a ti, sin pasar por nosotros.",
  },
  {
    question: "¿Necesito saber de tecnología para tener mi perfil?",
    answer: "No. Crear y gestionar tu perfil es sencillo. Si sabes usar WhatsApp, sabes usar esto.",
  },
  {
    question: "¿Qué documentación necesito para verificarme?",
    answer: "Depende del sello: tu DNI o CIF, tu alta de autónomo, tu seguro o tu certificado del oficio. Tú decides qué aportas y cuándo.",
  },
  {
    question: "¿Tengo que pagar para que me verifiquen?",
    answer: "No. La verificación es siempre gratuita. Se consigue aportando documentos, nunca pagando.",
  },
  {
    question: "¿En qué ciudades está ProLocal?",
    answer: "Ahora mismo en Galicia: Vigo, A Coruña y Santiago de Compostela. Iremos ampliando poco a poco.",
  },
  {
    question: "¿Qué pasa cuando empiecen los planes de pago?",
    answer: "Te avisaremos con tiempo. Los primeros profesionales tendrán condiciones especiales por confiar en nosotros desde el principio.",
  },
] as const

function SectionHeading({ number, title, subtitle, text }: { number: string; title: string; subtitle: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-5" aria-label={`Sección ${number}`}>
        <span className="editorial-serif text-[clamp(3.5rem,7vw,6.75rem)] font-medium leading-none">{number}</span>
        <span className="h-px flex-1 bg-black/20" aria-hidden="true" />
      </div>
      <h2 className={`mt-[1.8rem] ${sectionTitle}`}>{title}</h2>
      <p className={`mt-[1.125rem] ${sectionSubtitle}`}>{subtitle}</p>
      {text && <p className={`mt-[1.125rem] text-black/62 ${bodyText}`}>{text}</p>}
    </div>
  )
}

function ComparisonColumn({ title, items, prolocal }: { title: string; items: readonly string[]; prolocal?: boolean }) {
  return (
    <article className={`rounded-[30px] border border-black/10 p-6 sm:p-8 ${prolocal ? "bg-black text-white" : "bg-[#fffdf9]"}`}>
      <p className={`ui-label ${prolocal ? "text-accent" : "text-black/40"}`}>{title}</p>
      <ul className="mt-7 space-y-5">
        {items.map(item => (
          <li key={item} className={`flex items-start gap-3 text-sm leading-6 ${prolocal ? "text-white/75" : "text-black/55"}`}>
            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${prolocal ? "bg-accent text-black" : "bg-[#f6c6b7] text-[#9e372f]"}`}>
              {prolocal ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : <XMarkIcon className="h-4 w-4" aria-hidden="true" />}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function ProfileVisual() {
  return (
    <div aria-label="Ejemplo ilustrativo de un perfil profesional activo" className="relative min-h-[430px] rounded-[36px] border border-black/10 bg-[#fffdf9] p-5 shadow-[0_24px_70px_rgba(44,35,24,.10)] sm:min-h-[500px] sm:p-7">
      <div className="absolute inset-x-[7%] bottom-0 top-[9%] rounded-[48%_52%_46%_54%/54%_46%_54%_46%] bg-accent" aria-hidden="true" />
      <img src={illustrations.mason} alt="Ilustración de un profesional" className="absolute bottom-0 left-[2%] z-10 h-[72%] w-[48%] object-contain object-bottom" />
      <div className="absolute right-[5%] top-[8%] z-20 w-[52%] rotate-2 rounded-[24px] border border-black/10 bg-[#fffdf9] p-5 shadow-[0_18px_50px_rgba(44,35,24,.12)]">
        <p className="ui-label text-black/40">Tu perfil</p>
        <div className="mt-5 space-y-3" aria-hidden="true">
          <span className="block h-3 w-4/5 rounded-full bg-black/80" />
          <span className="block h-2 w-full rounded-full bg-black/15" />
          <span className="block h-2 w-3/4 rounded-full bg-black/15" />
        </div>
        <div className="mt-5 flex gap-2">
          <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold">SERVICIOS</span>
          <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold">ZONA</span>
        </div>
      </div>
      <div className="absolute bottom-[8%] right-[3%] z-20 rounded-[22px] border border-black/10 bg-black p-4 text-white shadow-[0_18px_50px_rgba(44,35,24,.18)]">
        <p className="ui-label text-white/45">Contacto directo</p>
        <p className="mt-2 text-sm font-medium">Teléfono · WhatsApp</p>
      </div>
    </div>
  )
}

function PlanCard({ name, price, text, active }: { name: string; price: string; text: string; active?: boolean }) {
  return (
    <article className={`flex min-h-[340px] flex-col rounded-[30px] border p-6 sm:p-7 ${active ? "border-black bg-black text-white" : "border-black/10 bg-[#fffdf9] opacity-55"}`}>
      <div className="flex items-start justify-between gap-4">
        <p className={`ui-label ${active ? "text-accent" : "text-black/40"}`}>{name}</p>
        <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] ${active ? "border-accent/40 bg-accent text-black" : "border-black/15 text-black/45"}`}>{active ? "Activo" : "Disponible pronto"}</span>
      </div>
      <p className="editorial-serif mt-8 text-[clamp(2.5rem,4vw,4rem)] font-medium leading-none">{price}</p>
      <p className={`mt-5 text-sm leading-6 ${active ? "text-white/62" : "text-black/55"}`}>{text}</p>
      <div className="mt-auto pt-8">
        {active ? (
          <Link href="/profesionales/registro" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-black transition-transform duration-150 active:scale-[.97]">
            Crear perfil gratis <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <span className="inline-flex rounded-full border border-black/15 px-5 py-3 text-sm font-semibold text-black/45">Próximamente</span>
        )}
      </div>
    </article>
  )
}

export default function ComoFuncionaProfesionalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section data-interior-hero className="flex w-full items-center border-b border-white/15 bg-black py-[3.6rem] text-[#fffdf9] sm:py-[4.5rem] lg:py-[5.4rem]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="editorial-serif max-w-5xl text-balance text-[clamp(2.75rem,5.6vw,5rem)] font-medium leading-[.95] tracking-[-.04em]">Consigue más clientes sin pagar por cada contacto.</h1>
          <p className="mt-[1.35rem] max-w-3xl text-[clamp(1rem,1.45vw,1.18rem)] leading-8 text-white/65">Aparece en ProLocal donde la gente de tu zona ya está buscando profesionales como tú. Tú recibes los contactos directamente. Sin comisiones y sin pagar por lead.</p>
          <Link href="/profesionales/registro" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-black transition-transform duration-150 hover:bg-white active:scale-[.97]">
            Crear perfil gratis <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section id="problema" className={`${fullSection} scroll-mt-24 bg-[#fffdf9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-[3.6rem] lg:px-8">
          <SectionHeading
            number="01"
            title="Ya sabes lo que es pagar por clientes que nunca llegan."
            subtitle="El modelo de siempre juega en tu contra."
            text="Pagas por cada contacto, respondan o no. Compites a la baja con otros diez profesionales por el mismo aviso. Y al final del mes no sabes cuánto te ha costado conseguir un cliente de verdad. En ProLocal no funciona así."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <ComparisonColumn title="El modelo de siempre" items={traditionalModel} />
            <ComparisonColumn title="ProLocal" items={prolocalModel} prolocal />
          </div>
        </div>
      </section>

      <section id="como-funciona" className={`${fullSection} scroll-mt-24 bg-[#ede5d9]`}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="02"
            title="Haz que te encuentren."
            subtitle="En tres pasos y sin conocimientos técnicos."
            text="No necesitas saber de webs ni de marketing para empezar. Solo cuéntanos qué haces, dónde trabajas y cómo pueden contactar contigo. Del resto, nos encargamos nosotros."
          />
          <div className="mt-[2.7rem] grid gap-4 lg:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, text, color }) => (
              <article key={number} className={`flex min-h-[350px] flex-col rounded-[30px] border border-black/10 p-6 sm:p-7 ${color}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="ui-label">{number}</span>
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-[clamp(1.65rem,2.5vw,2.15rem)] font-medium leading-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/60">{text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium italic leading-6 text-black/55 sm:text-base">Tú te encargas de tu trabajo. Nosotros, de que te encuentren.</p>
          <div className="mt-6 flex justify-center">
            <Link href="/profesionales/registro" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-black transition-colors duration-200 hover:bg-black hover:text-white active:scale-[.97] sm:w-auto">
              Crea tu perfil <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="beneficios" className={`${fullSection} scroll-mt-24 bg-[#fffdf9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-center gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:gap-[3.6rem] lg:px-8">
          <SectionHeading number="03" title="Lo que ganas estando en ProLocal." subtitle="Visibilidad de verdad, sin letra pequeña." />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className={`rounded-[28px] border border-black/10 p-6 ${index === 0 ? "bg-[#ddd0ef]" : index === 1 ? "bg-[#cfeef2]" : index === 2 ? "bg-[#f6c6b7]" : "bg-[#ede5d9]"}`}>
                <Icon className="h-7 w-7" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="verificaciones" className={`${fullSection} scroll-mt-24 bg-[#ede5d9]`}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-[2.7rem] lg:grid-cols-[.85fr_1.15fr] lg:gap-[3.6rem]">
            <SectionHeading
              number="04"
              title="Dale al cliente una razón para confiar."
              subtitle="Los sellos ayudan a que el cliente te elija a ti."
              text="Cuanta más información pueda comprobar un cliente, más confianza puede tener antes de contactarte. Por eso puedes añadir diferentes sellos a tu perfil según la documentación que aportes."
            />
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {verificationItems.map(({ image, title, text }) => (
                  <article key={title} className="grid h-[300px] grid-rows-[7rem_3rem_1fr] rounded-[30px] border border-black/10 bg-[#fffdf9] p-5 sm:grid-rows-[8rem_3rem_1fr] sm:p-6">
                    <img src={image} alt={`Sello ${title}`} width="720" height="720" loading="lazy" decoding="async" className="h-28 w-28 place-self-center object-contain sm:h-32 sm:w-32" />
                    <h3 className="self-start font-medium leading-tight">{title}</h3>
                    <p className="self-start pt-2 text-sm leading-6 text-black/55">{text}</p>
                  </article>
                ))}
              </div>
              <blockquote className="mt-10 border-l-2 border-accent pl-5 sm:mt-12 sm:pl-7">
                <p className="editorial-serif text-balance text-[clamp(1.65rem,3vw,2.5rem)] font-medium leading-[1.08] text-black/85">“Los sellos se consiguen aportando la documentación correspondiente. No se compran ni dependen de cuánto pagues.”</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className={`${fullSection} scroll-mt-24 bg-[#fffdf9]`}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-[2.7rem] lg:grid-cols-[.78fr_1.22fr] lg:gap-[3.6rem]">
            <SectionHeading
              number="05"
              title="Empieza gratis. Sin sorpresas."
              subtitle="Estás entrando en la fase beta de ProLocal en Galicia."
              text="Los primeros profesionales que se unan tendrán su perfil sin coste. Más adelante habrá planes para ganar más visibilidad, pero nunca pagarás por contacto ni por comisión."
            />
            <ProfileVisual />
          </div>
          <div className="mt-[2.7rem] grid gap-4 lg:grid-cols-3">
            <PlanCard name="Beta" price="0 €" active text="Tu perfil completo, contacto directo, verificaciones y estadísticas. Sin coste durante la fase beta." />
            <PlanCard name="Destacado" price="Próximamente" text="Más visibilidad y posición preferente en tu zona." />
            <PlanCard name="Premium" price="Próximamente" text="Máxima visibilidad y las mejores posiciones de tu categoría." />
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-black/55">Sea cual sea el plan, el contacto con tus clientes siempre es directo y sin comisiones.</p>
        </div>
      </section>

      <section id="preguntas-frecuentes" className={`${fullSection} scroll-mt-24 bg-[#ede5d9]`}>
        <div className="mx-auto grid w-full max-w-7xl items-start gap-[2.7rem] px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:gap-[3.6rem] lg:px-8">
          <div className="max-w-xl lg:sticky lg:top-28">
            <div className="flex items-center gap-5" aria-label="Sección 06">
              <span className="editorial-serif text-[clamp(3.5rem,7vw,6.75rem)] font-medium leading-none">06</span>
              <span className="h-px flex-1 bg-black/20" aria-hidden="true" />
            </div>
            <h2 className={`mt-[1.8rem] ${sectionTitle}`}>Preguntas frecuentes</h2>
            <p className={`mt-[1.125rem] text-black/62 ${bodyText}`}>Todo lo importante antes de crear tu perfil profesional.</p>
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
                <AccordionContent className={`pl-10 pr-8 text-black/62 ${bodyText}`}><p>{faq.answer}</p></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="flex w-full items-center border-t border-black/15 bg-accent py-[3.6rem] sm:py-[4.5rem] lg:py-[5.4rem]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-[1.8rem] lg:flex-row lg:items-end">
            <div>
              <h2 className={sectionTitle}>Empieza a recibir clientes hoy.</h2>
              <p className={`mt-[.9rem] text-black/60 ${bodyText}`}>Crea tu perfil gratis y aparece donde te buscan.</p>
            </div>
            <Link href="/profesionales/registro" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 font-semibold text-white transition-transform duration-150 active:scale-[.97]">
              Crear perfil gratis <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
