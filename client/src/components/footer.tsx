"use client"

import { Link } from "wouter"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"

const clientLinks: [string, string][] = [
  ["Buscar profesionales", "/#profesionales"],
  ["Categorías", "/#categorias"],
  ["Cómo funcionamos", "/como-funcionamos"],
  ["Cómo verificamos", "/como-verificamos"],
  ["Blog", "/blog"],
]
const professionalLinks: [string, string][] = [
  ["Crear perfil", "/profesionales/registro"],
  ["Planes", "/#planes"],
  ["Mi panel", "/profesionales/dashboard"],
  ["Blog", "/blog"],
]

export function Footer() {
  return <footer className="bg-black text-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <Link href="/" className="editorial-serif relative inline-block text-5xl font-semibold tracking-[-.07em]">prolocal<span className="absolute -right-3 top-0 h-3 w-3 rounded-full bg-accent" /></Link>
          <p className="mt-6 max-w-sm text-lg leading-8 text-white/55">La forma más humana de encontrar profesionales cerca de ti.</p>
          <div className="mt-8 inline-flex rotate-[-2deg] rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black">Empezamos en Galicia</div>
        </div>
        <FooterLinks title="Clientes" links={clientLinks} />
        <FooterLinks title="Profesionales" links={professionalLinks} />
      </div>
      <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} ProLocal</span>
        <span>Demostración · sin pagos ni altas reales activas</span>
      </div>
    </div>
  </footer>
}

function FooterLinks({ title, links }: { title: string; links: [string, string][] }) {
  return <div>
    <p className="ui-label mb-5 text-accent">{title}</p>
    <ul className="space-y-4">
      {links.map(([label, href]) => <li key={label}><Link href={href} className="group inline-flex items-center gap-2 text-white/60 hover:text-white">{label}<ArrowUpRightIcon className="h-4 w-4 opacity-0 transition group-hover:opacity-100" /></Link></li>)}
    </ul>
  </div>
}
