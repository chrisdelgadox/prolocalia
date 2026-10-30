"use client"

import { useEffect, useState } from "react"
import { Link } from "wouter"
import {
  Check,
  Camera,
  ChevronDown,
  Circle,
  ExternalLink,
  Eye,
  Home,
  IdCard,
  Link2,
  LogOut,
  Pencil,
  ShieldCheck,
  Upload,
  User,
} from "lucide-react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { calculateProfileProgress, readLocalProgress, saveLocalProgress, type LocalProgress, type StoredProfessional } from "@/lib/profile-progress"

type DocumentState = "Sin aportar" | "Pendiente de revisión" | "Aprobada" | "Rechazada"
type DocumentId = "identity" | "business" | "insurance" | "certification"

type VerificationDocument = {
  id: DocumentId
  label: string
  detail: string
  state: DocumentState
}

const monthlyStats = [
  { value: "—", label: "Visitas a tu perfil", period: "Medición no activada" },
  { value: "—", label: 'Clics en "Contactar"', period: "Medición no activada" },
  { value: "—", label: "Reseñas recibidas", period: "Medición no activada" },
] as const

const initialDocuments: VerificationDocument[] = [
  { id: "identity", label: "Identidad verificada", detail: "DNI o CIF", state: "Sin aportar" },
  { id: "business", label: "Alta de autónomo/empresa", detail: "RETA o CIF", state: "Sin aportar" },
  { id: "insurance", label: "Seguro RC aportado", detail: "Póliza", state: "Sin aportar" },
  { id: "certification", label: "Certificación aportada", detail: "Carnet instalador, boletín, etc.", state: "Sin aportar" },
]

const statusStyles: Record<DocumentState, string> = {
  "Sin aportar": "border-black/10 bg-[#ede5d9] text-black/55",
  "Pendiente de revisión": "border-black/10 bg-[#cfeef2] text-black/70",
  Aprobada: "border-black/10 bg-accent text-black",
  Rechazada: "border-black/10 bg-[#f6c6b7] text-black/70",
}

const sidebarItems = [
  { label: "Inicio / Resumen", href: "#resumen", icon: Home },
  { label: "Mi perfil", href: "#mi-perfil", icon: IdCard },
  { label: "Verificación", href: "#verificacion", icon: ShieldCheck },
] as const

export default function DashboardPage() {
  const [professional, setProfessional] = useState<StoredProfessional | null>(null)
  const [draft, setDraft] = useState<LocalProgress>({ professionalId: "", works: [] })
  const [isLoading, setIsLoading] = useState(true)
  const documents = initialDocuments

  useEffect(() => {
    const stored = localStorage.getItem("prolocal_professional")
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as StoredProfessional
        setProfessional(parsed)
        setDraft(readLocalProgress(parsed.id))
      } catch {
        localStorage.removeItem("prolocal_professional")
      }
    }
    setIsLoading(false)
  }, [])

  const firstName = professional?.nombre?.trim().split(" ")[0] || "profesional"
  const email = professional?.email || "Vista de demostración"
  const progress = calculateProfileProgress(professional, draft)
  const profileCompletion = progress.percentage

  async function addImage(file: File | undefined, kind: "photo" | "work") {
    if (!professional?.id || !file) return
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) { toast.error("Elige una foto JPG, PNG o WebP"); return }
    if (file.size > 5_000_000) { toast.error("La imagen debe ocupar menos de 5 MB"); return }
    if (kind === "work" && draft.works.length >= 3) { toast.info("Puedes guardar hasta tres trabajos en esta demostración"); return }
    const url = URL.createObjectURL(file)
    try {
      const image = new Image()
      image.src = url
      await image.decode()
      const canvas = document.createElement("canvas")
      const ratio = Math.min(1, 800 / Math.max(image.width, image.height))
      canvas.width = Math.max(1, Math.round(image.width * ratio))
      canvas.height = Math.max(1, Math.round(image.height * ratio))
      const context = canvas.getContext("2d")
      if (!context) throw new Error("No se pudo procesar la imagen")
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      const data = canvas.toDataURL("image/jpeg", 0.68)
      const updated = kind === "photo" ? { ...draft, photo: data } : { ...draft, works: [...draft.works, data] }
      if (!saveLocalProgress(updated)) { toast.error("No hay espacio disponible en este navegador"); return }
      setDraft(updated)
      toast.success(kind === "photo" ? "Foto guardada en este navegador" : "Trabajo guardado en este navegador; comprueba la vista previa")
    } catch { toast.error("No pudimos preparar esa imagen") }
    finally { URL.revokeObjectURL(url) }
  }

  function removeWork(index: number) {
    const updated = { ...draft, works: draft.works.filter((_, current) => current !== index) }
    if (saveLocalProgress(updated)) setDraft(updated)
    else toast.error("No se pudo actualizar el borrador")
  }

  if (isLoading) {
    return (
      <div className="paper-texture flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-black/20 border-t-black" aria-label="Cargando panel" />
      </div>
    )
  }

  return (
    <div className="paper-texture min-h-screen">
      <header className="surface-night sticky top-0 z-50 border-b border-white/15">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2" aria-label="Volver a ProLocal">
                <span className="editorial-serif relative text-3xl font-bold tracking-[-.08em] text-white">prolocal<span className="absolute -right-2 top-0 h-2.5 w-2.5 rounded-full bg-accent" /></span>
              </Link>
              <Badge variant="secondary" className="hidden rounded-full border-white/15 bg-white/10 text-xs text-white sm:flex">Mi espacio</Badge>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-white hover:bg-white/10 hover:text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-black"><User className="h-4 w-4" aria-hidden="true" /></span>
                  <span className="hidden text-sm sm:inline-flex">{firstName}</span>
                  <ChevronDown className="h-4 w-4 text-white/55" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-60 rounded-2xl">
                <div className="px-2 py-2">
                  <p className="font-medium">{professional?.nombre || "María · demostración"}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><a href="#mi-perfil"><IdCard className="mr-2 h-4 w-4" />Mi perfil</a></DropdownMenuItem>
                <DropdownMenuItem asChild><a href="#verificacion"><ShieldCheck className="mr-2 h-4 w-4" />Verificación</a></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link href="/"><LogOut className="mr-2 h-4 w-4" />Volver al sitio</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <nav className="sticky top-16 z-40 border-b border-black/10 bg-[#fffdf9]/95 px-4 py-3 backdrop-blur lg:hidden" aria-label="Navegación del panel">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">
          {sidebarItems.map(({ label, href }) => (
            <a key={href} href={href} className="whitespace-nowrap rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/65 first:bg-black first:text-white">{label}</a>
          ))}
        </div>
      </nav>

      <div className="mx-auto grid w-full max-w-[1440px] lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden border-r border-black/10 bg-[#ede5d9]/55 lg:block">
          <div className="sticky top-16 flex min-h-[calc(100dvh-4rem)] flex-col px-5 py-8">
            <p className="ui-label px-3 text-black/40">Panel profesional</p>
            <nav className="mt-5 space-y-2" aria-label="Navegación del panel">
              {sidebarItems.map(({ label, href, icon: Icon }, index) => (
                <a key={href} href={href} className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-colors ${index === 0 ? "bg-black text-white" : "text-black/60 hover:bg-white/70 hover:text-black"}`}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </nav>
            <div className="mt-auto rounded-[24px] border border-black/10 bg-[#fffdf9] p-4">
              <p className="ui-label text-black/40">Versión 0.1</p>
              <p className="mt-2 text-sm leading-6 text-black/55">Tu ficha, su visibilidad y los documentos que decides aportar.</p>
            </div>
          </div>
        </aside>

        <main className="min-w-0 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-14">
          <div className="mx-auto max-w-6xl">
            <header className="border-b border-black/10 pb-8">
              <p className="ui-label text-black/40">Resumen de tu espacio</p>
              <h1 className="editorial-serif mt-3 text-balance text-[clamp(2.65rem,5vw,4.75rem)] font-medium leading-[.95] tracking-[-.04em]">Hola, {firstName}</h1>
              <p className="mt-4 max-w-2xl text-[clamp(1rem,1.3vw,1.12rem)] leading-8 text-black/55">Deja tu ficha lista. Los números estarán disponibles cuando se active la medición de actividad.</p>
            </header>

            <section id="resumen" className="scroll-mt-40 py-10 sm:py-12 lg:scroll-mt-24">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="ui-label text-black/40">Inicio / Resumen</p>
                  <h2 className="editorial-serif mt-3 text-[clamp(2rem,3.3vw,3.15rem)] font-medium leading-none">Tus números</h2>
                </div>
                <p className="text-sm text-black/45">Actividad del mes · todavía sin medición</p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {monthlyStats.map(stat => (
                  <Card key={stat.label} className="rounded-[28px] border-black/10 bg-[#fffdf9] shadow-none">
                    <CardContent className="p-6 sm:p-7">
                      <span className="editorial-serif text-[clamp(3.25rem,6vw,5rem)] font-medium leading-none">{stat.value}</span>
                      <p className="mt-6 max-w-[15rem] text-sm font-medium leading-6 text-black/55">{stat.label}</p>
                      <p className="ui-label mt-2 text-black/35">{stat.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="mt-5 rounded-[28px] border-black/10 bg-[#fffdf9] shadow-none">
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <p className="ui-label text-black/45">Siguiente paso recomendado</p>
                    <h3 className="mt-2 text-xl font-medium">{progress.next ? progress.next.label : professional ? "Tu información básica ya está lista" : "Crea tu perfil"}</h3>
                    <p className="mt-1 max-w-xl text-sm leading-6 text-black/55">{progress.next?.reason || (professional ? "Puedes añadir más trabajos cuando quieras. Las verificaciones y opiniones requieren revisión real." : "Empieza con tus datos básicos para que tus clientes sepan qué haces y dónde trabajas.")}</p>
                  </div>
                  {(progress.next?.action || !professional) && <Button asChild className="w-fit shrink-0 rounded-full bg-black px-6 text-white hover:bg-black/80"><Link href={progress.next?.action?.href || "/profesionales/registro"}>{progress.next?.action?.label || "Crear perfil"}</Link></Button>}
                </CardContent>
              </Card>
            </section>

            <section id="mi-perfil" className="scroll-mt-40 border-t border-black/10 py-10 sm:py-12 lg:scroll-mt-24">
              <div>
                <p className="ui-label text-black/40">Estado de tu perfil</p>
                <h2 className="editorial-serif mt-3 text-[clamp(2rem,3.3vw,3.15rem)] font-medium leading-none">Deja tu ficha lista</h2>
                <p className="mt-3 text-sm text-black/55">Calidad del perfil: <strong className="text-black">{progress.level}</strong> · Básico → Completo → Destacado. «Destacado» requerirá documentación revisada y trabajos publicados cuando el servicio esté activo.</p>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-[.8fr_1.2fr]">
                <Card className="rounded-[30px] border-black/10 bg-[#fffdf9] shadow-none">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="ui-label text-black/40">Completar perfil</p>
                        <h3 className="mt-3 text-2xl font-medium">Tu perfil está al {profileCompletion}%</h3>
                      </div>
                      <span className="editorial-serif text-4xl font-medium text-black/25">{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} aria-label={`Perfil completo al ${profileCompletion}%`} className="mt-6 h-2.5 bg-black/10 [&_[data-slot=progress-indicator]]:bg-accent" />
                    <p className="mt-3 text-sm leading-6 text-black/55">Completa tu ficha para aumentar la confianza de los clientes. Porcentaje calculado con datos guardados en este navegador; no incluye verificaciones ni opiniones.</p>
                    <div className="mt-8 border-t border-black/10 pt-6">
                      <p className="text-sm font-semibold">Completa tu perfil · {progress.count} de {progress.items.length} acciones</p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                        {progress.items.map(item => (
                          <li key={item.id} className={`flex items-center gap-3 text-sm ${item.done ? "font-medium text-black" : "text-black/55"}`}>
                            {item.done ? <Check className="h-4 w-4 shrink-0" aria-hidden="true" /> : <Circle className="h-4 w-4 shrink-0" aria-hidden="true" />}
                            <span>{item.label}<span className="sr-only">{item.done ? ": completado" : ": pendiente"}</span></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="mt-8 rounded-full bg-black px-6 text-white hover:bg-black/80">
                      <Link href={professional ? "/profesionales/registro?editar=1" : "/profesionales/registro"}><Pencil className="mr-2 h-4 w-4" />{professional ? "Editar mi perfil" : "Crear mi perfil"}</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card id="verificacion" className="scroll-mt-40 rounded-[30px] border-black/10 bg-[#fffdf9] shadow-none lg:scroll-mt-24">
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-2">
                          <p className="ui-label text-black/40">Verificación</p>
                          <Badge variant="outline" className="rounded-full border-black/10 text-black/45">Opcional</Badge>
                        </div>
                        <h3 className="mt-3 text-2xl font-medium">Aporta documentos si quieres verificar tu identidad</h3>
                        <p className="mt-3 text-sm leading-6 text-black/55">La verificación es opcional. Se consigue aportando documentos y nunca se compra. El sello visible se llama <strong className="font-semibold text-black/75">Identidad verificada</strong>.</p>
                      </div>
                    </div>

                    <div className="mt-7 divide-y divide-black/10 border-y border-black/10">
                      {documents.map(document => (
                        <div key={document.id} className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-medium">{document.label}</h4>
                              <Badge variant="outline" className={`rounded-full ${statusStyles[document.state]}`}>{document.state}</Badge>
                            </div>
                            <p className="mt-1 text-sm text-black/45">{document.detail}</p>
                          </div>
                          <button type="button" disabled className="inline-flex w-fit items-center gap-2 rounded-full border border-black/15 bg-transparent px-4 py-2.5 text-sm font-semibold text-black/45">
                            <Upload className="h-4 w-4" aria-hidden="true" />
                            Adjuntar próximamente
                          </button>
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 text-xs leading-5 text-black/55">No envíes documentos reales: esta demostración no almacena, revisa ni aprueba archivos. Los sellos seguirán sin aportar hasta que exista un proceso de revisión.</p>
                  </CardContent>
                </Card>
              </div>
              <Card id="trabajos" className="mt-5 scroll-mt-40 rounded-[30px] border-black/10 bg-[#fffdf9] shadow-none lg:scroll-mt-24">
                <CardContent className="p-6 sm:p-7">
                  <p className="ui-label text-black/45">Tu escaparate · borrador local</p>
                  <h3 className="mt-2 text-2xl font-medium">Trabajos realizados</h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">Añade hasta tres fotos de tus trabajos (JPG, PNG o WebP, máximo 5 MB cada una). Se comprimen y se guardan solo en este navegador; no se publican ni se envían a ProLocal.</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-sm font-semibold hover:bg-[#f5f0e8] has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-black">
                      <Camera className="h-4 w-4" aria-hidden="true" />{draft.photo ? "Cambiar foto o logo" : "Añadir foto o logo"}
                      <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" aria-label="Añadir foto o logo" disabled={!professional} onChange={event => { void addImage(event.currentTarget.files?.[0], "photo"); event.currentTarget.value = "" }} />
                    </label>
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-sm font-semibold hover:bg-[#f5f0e8] has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-black has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50">
                      <Camera className="h-4 w-4" aria-hidden="true" />Añadir foto de trabajo ({draft.works.length}/3)
                      <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" aria-label="Añadir foto de trabajo" disabled={!professional || draft.works.length >= 3} onChange={event => { void addImage(event.currentTarget.files?.[0], "work"); event.currentTarget.value = "" }} />
                    </label>
                  </div>
                  {!professional && <p className="mt-3 text-sm text-black/55"><Link href="/profesionales/registro" className="underline underline-offset-4">Crea primero tu perfil</Link> para añadir fotos.</p>}
                  {draft.photo && <div className="mt-5 flex items-center gap-3"><img src={draft.photo} alt="Foto o logo guardado en este navegador" className="h-16 w-16 rounded-2xl border border-black/10 object-cover" /><span className="text-xs text-black/55">Foto de perfil · solo en este navegador</span></div>}
                  {draft.works.length > 0 && <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Fotos de trabajos de tu borrador">
                    {draft.works.map((work, index) => <div key={index} className="min-w-0 rounded-[20px] border border-black/10 bg-[#f5f0e8] p-2">
                      <img src={work} alt={`Trabajo ${index + 1} guardado en este navegador`} className="aspect-[4/3] w-full rounded-[14px] object-cover" />
                      <div className="flex items-center justify-between gap-2 px-2 pt-2"><span className="text-xs font-medium">Trabajo {String(index + 1).padStart(2, "0")}</span><button type="button" onClick={() => removeWork(index)} className="rounded text-xs underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2" aria-label={`Quitar trabajo ${index + 1}`}>Quitar</button></div>
                    </div>)}
                  </div>}
                  {professional && <Button asChild variant="outline" className="mt-6 rounded-full border-black/20 bg-transparent"><Link href="/profesionales/vista-previa#trabajos-realizados"><Eye className="mr-2 h-4 w-4" />Ver en mi ficha · vista previa local</Link></Button>}
                </CardContent>
              </Card>
            </section>

            <section id="perfil-publico" className="scroll-mt-40 border-t border-black/10 py-10 sm:py-12 lg:scroll-mt-24">
              <div>
                <p className="ui-label text-black/40">Tu perfil público</p>
                <h2 className="editorial-serif mt-3 text-[clamp(2rem,3.3vw,3.15rem)] font-medium leading-none">Así te encuentran los clientes</h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Card className="rounded-[28px] border-black/10 bg-[#ddd0ef] shadow-none">
                  <CardContent className="flex h-full flex-col p-6">
                    <Pencil className="h-6 w-6" aria-hidden="true" />
                    <h3 className="mt-8 text-xl font-medium">Editar perfil</h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">Actualiza tu descripción, servicios, zonas y fotos.</p>
                    <Button asChild variant="outline" className="mt-6 w-fit rounded-full border-black/20 bg-transparent">
                      <Link href={professional ? "/profesionales/registro?editar=1" : "/profesionales/registro"}>Editar perfil</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-[28px] border-black/10 bg-[#cfeef2] shadow-none">
                  <CardContent className="flex h-full flex-col p-6">
                    <Eye className="h-6 w-6" aria-hidden="true" />
                    <h3 className="mt-8 text-xl font-medium">Vista previa de tu ficha</h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">Mira cómo quedaría tu ficha y galería. Es una vista local: otras personas no pueden verla al abrir este enlace en otro navegador.</p>
                    <Button asChild variant="outline" className="mt-6 w-fit rounded-full border-black/20 bg-transparent">
                      <Link href={professional ? "/profesionales/vista-previa" : "/profesionales/registro"}>{professional ? "Abrir mi vista previa" : "Crear mi perfil"} <ExternalLink className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card id="resenas" className="rounded-[28px] border-black/10 bg-[#f6c6b7] shadow-none">
                  <CardContent className="flex h-full flex-col p-6">
                    <Link2 className="h-6 w-6" aria-hidden="true" />
                    <h3 className="mt-8 text-xl font-medium">Pedir reseñas</h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">Aún no hay recogida de opiniones activa. Podrás invitar a clientes históricos cuando exista un sistema de reseñas reales.</p>
                    <Button type="button" variant="outline" className="mt-6 w-fit rounded-full border-black/20 bg-transparent" disabled>Próximamente</Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
