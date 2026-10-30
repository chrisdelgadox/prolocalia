import { Link } from "wouter"

const principles = [
  {
    number: "01",
    title: "Nadie se lleva una parte",
    description: "El precio es cosa tuya y del profesional. No cobramos comisión ni por contactar ni por trabajo cerrado.",
    drawing: "agreement",
    color: "#dfff00",
  },
  {
    number: "02",
    title: "Tú eliges a quién llamar",
    description: "Sin registros ni formularios para ver un perfil. Miras, comparas y contactas a quien quieras. Nadie te perseguirá con llamadas.",
    drawing: "choice",
    color: "#cfeef2",
  },
  {
    number: "03",
    title: "Sabes con quién hablas",
    description: "Marcamos como verificados a quienes aportan su documentación. Si falta, lo señalamos con transparencia. Tú tienes la última palabra.",
    drawing: "verified",
    color: "#ddd0ef",
  },
]

export function HowItWorks() {
  return (
    <section id="principios" className="bg-[#fffdf9] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <span className="section-kicker">Las reglas están claras</span>
            <h2 className="mt-6 max-w-xl text-balance text-5xl font-medium leading-[.98] sm:text-6xl">
              Tu decisión.<br /><span className="italic">Sin letra pequeña.</span>
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-black/55 lg:justify-self-end">
            Una forma más directa y transparente de encontrar profesionales cerca de ti.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="relative flex min-h-[390px] flex-col overflow-hidden rounded-[32px] p-7"
              style={{ background: principle.color }}
            >
              <span className="ui-label">{principle.number}</span>
              <PrincipleDoodle type={principle.drawing} />
              <h3 className="mt-5 text-[2rem] font-medium leading-[1.02]">{principle.title}</h3>
              <p className="mt-4 text-[.95rem] leading-6 text-black/65">{principle.description}</p>
              {principle.drawing === "verified" && (
                <Link href="/como-verificamos" className="mt-auto w-fit border-b border-black/60 pt-5 text-sm font-semibold hover:border-black/20">
                  Cómo verificamos →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrincipleDoodle({ type }: { type: string }) {
  if (type === "agreement") {
    return (
      <svg className="mt-8 h-24 w-36" viewBox="0 0 150 100" aria-hidden="true">
        <path className="doodle-line" d="M12 55 36 34l24 18 15-11 20 17 14-9 27 23" />
        <path className="doodle-line" d="m38 35 13-13 28 18M108 49l-9-21 18-13 18 16-1 28" />
        <path className="doodle-line" d="M61 52c8 11 18 12 28 2" />
        <circle cx="28" cy="76" r="12" fill="#fffdf9" stroke="#111" strokeWidth="2" />
        <path className="doodle-line" d="M25 76h7M28.5 72v8" />
      </svg>
    )
  }

  if (type === "choice") {
    return (
      <svg className="mt-8 h-24 w-36" viewBox="0 0 150 100" aria-hidden="true">
        <rect x="45" y="8" width="55" height="82" rx="14" fill="#fffdf9" stroke="#111" strokeWidth="2" />
        <path className="doodle-line" d="M61 22h23M63 70c8-8 16-8 23 0" />
        <circle cx="73" cy="47" r="13" fill="#dfff00" stroke="#111" strokeWidth="2" />
        <path className="doodle-line" d="m68 47 4 4 8-9M16 38c12-13 21-15 31-13M12 52c11-3 20-2 29 3M108 27c13 2 22 8 29 18" />
      </svg>
    )
  }

  return (
    <svg className="mt-8 h-24 w-36" viewBox="0 0 150 100" aria-hidden="true">
      <path d="M75 7 117 23v27c0 25-17 37-42 44-25-7-42-19-42-44V23Z" fill="#fffdf9" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
      <path className="doodle-line" d="m55 50 13 13 28-31" />
      <path className="doodle-line" d="M15 28h12M21 22v12M123 70h13M129.5 64v12" />
    </svg>
  )
}
