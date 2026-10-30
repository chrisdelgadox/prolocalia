"use client"

import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "wouter"
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

const professionalGroups = [
  {
    title: "Instalaciones y reparaciones",
    items: [
      { label: "Cerrajeros", href: "/cerrajeros/" },
      { label: "Fontaneros", href: "/fontaneros/" },
      { label: "Electricistas", href: "/electricistas/" },
      { label: "Antenistas", href: "/antenistas/" },
      { label: "Técnicos de persianas", href: "/tecnico-persianas/" },
    ],
  },
  {
    title: "Reformas y construcción",
    items: [
      { label: "Reformas de baños", href: "/reformas-banos/" },
      { label: "Reformas de cocinas", href: "/reformas-cocinas/" },
      { label: "Albañiles", href: "/albaniles/" },
      { label: "Pintores", href: "/pintores/" },
      { label: "Impermeabilizaciones", href: "/impermeabilizaciones/" },
    ],
  },
  {
    title: "Climatización y energía",
    items: [
      { label: "Aire acondicionado", href: "/aire-acondicionado/" },
      { label: "Técnicos de calderas", href: "/tecnico-calderas/" },
      { label: "Instaladores de gas", href: "/instalador-gas/" },
      { label: "Placas solares", href: "/placas-solares/" },
    ],
  },
  {
    title: "Hogar y mantenimiento",
    items: [
      { label: "Desatascos", href: "/desatascos/" },
      { label: "Control de plagas", href: "/control-plagas/" },
      { label: "Limpieza doméstica", href: "/limpieza-domestica/" },
      { label: "Carpinteros", href: "/carpinteros/" },
      { label: "Manitas", href: "/manitas/" },
      { label: "Jardineros", href: "/jardineros/" },
    ],
  },
] as const

const howLinks = [
  { label: "¿Cómo encontrar un profesional?", href: "/como-funcionamos" },
  { label: "¿Cómo conseguir clientes?", href: "/como-funciona-profesionales" },
  { label: "Cómo verificamos", href: "/como-verificamos" },
]

export function Header() {
  const [location] = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false)
  const [mobileHowOpen, setMobileHowOpen] = useState(false)
  const [desktopExploreOpen, setDesktopExploreOpen] = useState(false)
  const [desktopExplorePinned, setDesktopExplorePinned] = useState(false)
  const [desktopHowOpen, setDesktopHowOpen] = useState(false)
  const [desktopHowPinned, setDesktopHowPinned] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const exploreTriggerRef = useRef<HTMLButtonElement>(null)
  const exploreMenuRef = useRef<HTMLDivElement>(null)
  const howTriggerRef = useRef<HTMLButtonElement>(null)
  const howMenuRef = useRef<HTMLDivElement>(null)
  const exploreCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const howCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const howActive = howLinks.some((item) => item.href === location)
  const exploreActive = professionalGroups.some((group) => group.items.some((item) => {
    const slug = item.href.replaceAll("/", "")
    return location === item.href || location === item.href.slice(0, -1) || location.split("/").includes(slug)
  }))

  const openDesktopExplore = () => {
    if (exploreCloseTimer.current) clearTimeout(exploreCloseTimer.current)
    setDesktopHowPinned(false)
    setDesktopHowOpen(false)
    setDesktopExploreOpen(true)
  }

  const scheduleDesktopExploreClose = () => {
    if (exploreCloseTimer.current) clearTimeout(exploreCloseTimer.current)
    if (desktopExplorePinned) return
    exploreCloseTimer.current = setTimeout(() => setDesktopExploreOpen(false), 180)
  }

  const keepDesktopHowOpen = () => {
    if (howCloseTimer.current) clearTimeout(howCloseTimer.current)
    setDesktopExplorePinned(false)
    setDesktopExploreOpen(false)
    setDesktopHowOpen(true)
  }

  const scheduleDesktopHowClose = () => {
    if (howCloseTimer.current) clearTimeout(howCloseTimer.current)
    if (desktopHowPinned) return
    howCloseTimer.current = setTimeout(() => setDesktopHowOpen(false), 180)
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileExploreOpen(false)
    setMobileHowOpen(false)
  }

  const closeExploreAndRestoreFocus = () => {
    setDesktopExplorePinned(false)
    setDesktopExploreOpen(false)
    exploreTriggerRef.current?.focus()
  }

  const closeHowAndRestoreFocus = () => {
    setDesktopHowPinned(false)
    setDesktopHowOpen(false)
    howTriggerRef.current?.focus()
  }

  const focusExploreItem = (position: "first" | "last") => {
    requestAnimationFrame(() => {
      const links = exploreMenuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')
      if (!links?.length) return
      links[position === "first" ? 0 : links.length - 1].focus()
    })
  }

  const handleExploreTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      openDesktopExplore()
      focusExploreItem(event.key === "ArrowDown" ? "first" : "last")
    }
    if (event.key === "Escape" && desktopExploreOpen) {
      event.preventDefault()
      closeExploreAndRestoreFocus()
    }
  }

  const handleExploreMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const links = Array.from(exploreMenuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]') ?? [])
    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement)

    if (event.key === "Escape") {
      event.preventDefault()
      closeExploreAndRestoreFocus()
      return
    }
    if (!links.length || currentIndex < 0) return

    let nextIndex: number | null = null
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (currentIndex + 1) % links.length
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + links.length) % links.length
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = links.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      links[nextIndex].focus()
    }
  }

  const focusHowItem = (position: "first" | "last") => {
    requestAnimationFrame(() => {
      const links = howMenuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]')
      if (!links?.length) return
      links[position === "first" ? 0 : links.length - 1].focus()
    })
  }

  const handleHowTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault()
      keepDesktopHowOpen()
      focusHowItem(event.key === "ArrowDown" ? "first" : "last")
    }
    if (event.key === "Escape" && desktopHowOpen) {
      event.preventDefault()
      closeHowAndRestoreFocus()
    }
  }

  const handleHowMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const links = Array.from(howMenuRef.current?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]') ?? [])
    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement)

    if (event.key === "Escape") {
      event.preventDefault()
      closeHowAndRestoreFocus()
      return
    }
    if (!links.length || currentIndex < 0) return

    let nextIndex: number | null = null
    if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % links.length
    if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + links.length) % links.length
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = links.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      links[nextIndex].focus()
    }
  }

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Element
      if (headerRef.current?.contains(target)) return
      setDesktopExplorePinned(false)
      setDesktopExploreOpen(false)
      setDesktopHowPinned(false)
      setDesktopHowOpen(false)
      closeMobileMenu()
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      if (desktopExploreOpen) closeExploreAndRestoreFocus()
      else if (desktopHowOpen) closeHowAndRestoreFocus()
      else {
        closeMobileMenu()
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("touchstart", handlePointerDown)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("touchstart", handlePointerDown)
      document.removeEventListener("keydown", handleEscape)
      if (exploreCloseTimer.current) clearTimeout(exploreCloseTimer.current)
      if (howCloseTimer.current) clearTimeout(howCloseTimer.current)
    }
  }, [desktopExploreOpen, desktopHowOpen])

  useEffect(() => {
    setDesktopExplorePinned(false)
    setDesktopExploreOpen(false)
    setDesktopHowPinned(false)
    setDesktopHowOpen(false)
    closeMobileMenu()
  }, [location])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f0e8]/90 backdrop-blur-xl">
      <div className="relative mx-auto grid h-[72px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
        <nav aria-label="Navegación principal" className="hidden h-full items-center gap-6 min-[1100px]:flex">
          <div className="relative flex h-full items-center" onMouseEnter={openDesktopExplore} onMouseLeave={scheduleDesktopExploreClose}>
            <button
              ref={exploreTriggerRef}
              type="button"
              className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${exploreActive || desktopExploreOpen ? "underline decoration-2 underline-offset-4" : ""}`}
              aria-haspopup="menu"
              aria-expanded={desktopExploreOpen}
              aria-controls="desktop-professionals-menu"
              aria-current={exploreActive ? "page" : undefined}
              onClick={() => {
                setDesktopHowPinned(false)
                setDesktopHowOpen(false)
                if (desktopExplorePinned) {
                  setDesktopExplorePinned(false)
                  setDesktopExploreOpen(false)
                } else {
                  setDesktopExplorePinned(true)
                  setDesktopExploreOpen(true)
                }
              }}
              onKeyDown={handleExploreTriggerKeyDown}
            >
              Explorar profesionales
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${desktopExploreOpen ? "rotate-180" : ""}`} />
            </button>

            {desktopExploreOpen && (
              <div className="absolute left-0 top-full pt-2" onMouseEnter={openDesktopExplore} onMouseLeave={scheduleDesktopExploreClose}>
                <div
                  ref={exploreMenuRef}
                  id="desktop-professionals-menu"
                  role="menu"
                  aria-label="Categorías de profesionales"
                  onKeyDown={handleExploreMenuKeyDown}
                  className="w-[min(70rem,calc(100vw-2rem))] rounded-[24px] border border-black/10 bg-[#fffdf9] p-7 shadow-[0_20px_55px_rgba(44,35,24,.14)]"
                >
                  <div className="grid grid-cols-4 gap-x-8">
                    {professionalGroups.map((group, groupIndex) => (
                      <section key={group.title} role="group" aria-labelledby={`professional-group-${groupIndex}`} className={groupIndex ? "border-l border-black/10 pl-7" : ""}>
                        <h2 id={`professional-group-${groupIndex}`} className="ui-label mb-3 min-h-8 text-black/45">{group.title}</h2>
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <a
                                role="menuitem"
                                href={item.href}
                                className="group/link flex min-h-9 items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
                                onClick={() => {
                                  setDesktopExplorePinned(false)
                                  setDesktopExploreOpen(false)
                                }}
                              >
                                <span>{item.label}</span>
                                <span aria-hidden="true" className="translate-x-[-4px] opacity-0 transition group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100">→</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative flex h-full items-center" onMouseEnter={keepDesktopHowOpen} onMouseLeave={scheduleDesktopHowClose}>
            <button
              ref={howTriggerRef}
              type="button"
              className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${howActive || desktopHowOpen ? "underline decoration-2 underline-offset-4" : ""}`}
              aria-haspopup="menu"
              aria-expanded={desktopHowOpen}
              aria-controls="desktop-how-menu"
              aria-current={howActive ? "page" : undefined}
              onClick={() => {
                setDesktopExplorePinned(false)
                setDesktopExploreOpen(false)
                if (desktopHowPinned) {
                  setDesktopHowPinned(false)
                  setDesktopHowOpen(false)
                } else {
                  setDesktopHowPinned(true)
                  setDesktopHowOpen(true)
                }
              }}
              onKeyDown={handleHowTriggerKeyDown}
            >
              Cómo funciona
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${desktopHowOpen ? "rotate-180" : ""}`} />
            </button>

            {desktopHowOpen && (
              <div className="absolute left-0 top-full pt-2" onMouseEnter={keepDesktopHowOpen} onMouseLeave={scheduleDesktopHowClose}>
                <div
                  ref={howMenuRef}
                  id="desktop-how-menu"
                  role="menu"
                  aria-label="Páginas de cómo funciona"
                  onKeyDown={handleHowMenuKeyDown}
                  className="w-72 rounded-[24px] border border-black/10 bg-[#fffdf9] p-2 shadow-[0_20px_55px_rgba(44,35,24,.14)]"
                >
                  {howLinks.map((item) => (
                    <a
                      key={item.href}
                      role="menuitem"
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
                      onClick={() => {
                        setDesktopHowPinned(false)
                        setDesktopHowOpen(false)
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className={`text-sm font-medium hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${location.startsWith("/blog") ? "underline decoration-2 underline-offset-4" : ""}`}
            aria-current={location.startsWith("/blog") ? "page" : undefined}
          >
            Blog
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="justify-self-start min-[1100px]:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </Button>

        <Link href="/" className="group justify-self-center" aria-label="Inicio de ProLocal">
          <span className="editorial-serif relative text-3xl font-bold tracking-[-.08em]">
            prolocal
            <span className="absolute -right-2 top-0 h-2.5 w-2.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
          </span>
        </Link>

        <nav className="hidden justify-self-end min-[1100px]:flex">
          <Link href="/profesionales/registro" className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/80">
            Soy profesional
          </Link>
        </nav>
        <Button size="sm" className="justify-self-end rounded-full min-[1100px]:hidden" asChild>
          <Link href="/profesionales/registro">Únete</Link>
        </Button>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Navegación móvil" className="max-h-[calc(100dvh-73px)] overflow-y-auto overscroll-contain border-t border-black/10 bg-[#f5f0e8] px-4 py-4 min-[1100px]:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            <div className="border-b border-black/10">
              <button
                type="button"
                className="flex w-full items-center justify-between py-3.5 text-left font-medium focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black"
                onClick={() => {
                  setMobileHowOpen(false)
                  setMobileExploreOpen((current) => !current)
                }}
                aria-expanded={mobileExploreOpen}
                aria-controls="mobile-professionals-submenu"
              >
                Explorar profesionales
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${mobileExploreOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileExploreOpen && (
                <div id="mobile-professionals-submenu" className="grid gap-x-8 pb-5 sm:grid-cols-2">
                  {professionalGroups.map((group, groupIndex) => (
                    <section key={group.title} aria-labelledby={`mobile-professional-group-${groupIndex}`} className="border-t border-black/10 py-4 first:border-t-0 sm:first:border-t">
                      <h2 id={`mobile-professional-group-${groupIndex}`} className="ui-label mb-2 text-black/45">{group.title}</h2>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <a href={item.href} className="block rounded-lg py-2.5 text-sm font-medium hover:bg-accent hover:px-2 focus-visible:bg-accent focus-visible:px-2 focus-visible:outline-none" onClick={closeMobileMenu}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-black/10">
              <button
                type="button"
                className="flex w-full items-center justify-between py-3.5 text-left font-medium"
                onClick={() => {
                  setMobileExploreOpen(false)
                  setMobileHowOpen((current) => !current)
                }}
                aria-expanded={mobileHowOpen}
                aria-controls="mobile-how-submenu"
              >
                Cómo funciona
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${mobileHowOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileHowOpen && (
                <div id="mobile-how-submenu" className="mb-3 ml-3 flex flex-col border-l border-black/15 pl-4">
                  {howLinks.map((item) => (
                    <a key={item.href} href={item.href} className="py-2.5 text-sm text-black/65 hover:text-black" onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link href="/blog" className="py-3.5 font-medium" onClick={closeMobileMenu}>
              Blog
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
