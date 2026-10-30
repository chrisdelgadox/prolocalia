"use client"

import { useMemo, useState } from "react"
import { MapPinIcon } from "@heroicons/react/24/outline"
import { professionals, provinces } from "@/lib/data"

interface SpainMapProps { selectedProvince?: string; onProvinceSelect?: (provinceId: string) => void; onMarkerClick?: (professionalId: string) => void; highlightedProfessional?: string }
const markerPositions: Record<string, { left: string; top: string }> = { "a-coruna": { left: "48%", top: "23%" }, "santiago-de-compostela": { left: "54%", top: "43%" }, vigo: { left: "38%", top: "74%" } }

export function SpainMap({ selectedProvince, onProvinceSelect, onMarkerClick, highlightedProfessional }: SpainMapProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const highlightedCity = useMemo(() => professionals.find(p => p.id === highlightedProfessional)?.province, [highlightedProfessional])
  return <div className="paper-texture relative h-full min-h-[420px] overflow-hidden rounded-[32px] border border-black/10 bg-[#fffdf9]">
    <div className="absolute left-5 top-5 z-20"><span className="ui-label rounded-full bg-black px-3 py-2 text-white">Empezamos aquí</span><p className="editorial-serif mt-3 text-3xl">Galicia</p></div>
    <svg viewBox="0 0 520 560" className="absolute inset-0 h-full w-full p-8" role="img" aria-label="Mapa ilustrado de Galicia"><path d="M151 54 214 37 271 55 315 45 356 73 405 91 431 132 414 177 441 211 421 250 436 293 405 327 414 370 380 397 365 443 323 465 292 512 247 499 212 522 176 494 131 481 112 437 78 408 91 365 62 327 84 286 64 243 91 207 77 162 105 129 113 88Z" fill="#dfff00" stroke="#111" strokeWidth="4" strokeLinejoin="round"/><path d="M115 162c58 18 102-12 151 8 59 24 95 6 149-19M84 286c73-15 109 17 167 2 61-16 103 6 174 3M112 437c51-26 88-9 132-25 62-23 107 3 153-12" fill="none" stroke="#111" strokeWidth="2" strokeDasharray="8 10" opacity=".45"/><path d="M85 120c-35-30-54-15-65 5m413 215c45 10 55 35 48 58" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round"/></svg>
    {provinces.map(city => { const count = professionals.filter(p => p.province === city.id).length; const active = selectedProvince === city.id || highlightedCity === city.id; return <button key={city.id} type="button" style={markerPositions[city.id]} className="group absolute z-10 -translate-x-1/2 -translate-y-1/2" onMouseEnter={() => setHovered(city.id)} onMouseLeave={() => setHovered(null)} onFocus={() => setHovered(city.id)} onBlur={() => setHovered(null)} onClick={() => { onProvinceSelect?.(city.id); const prof = professionals.find(p => p.province === city.id); if (count === 1 && prof) onMarkerClick?.(prof.id) }} aria-label={`Filtrar por ${city.name}`}><span className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-black shadow-[3px_3px_0_#111] ${active ? 'bg-black text-white' : 'bg-white text-black'}`}><MapPinIcon className="h-5 w-5" /></span><span className={`absolute left-1/2 top-14 w-max -translate-x-1/2 rounded-xl border border-black/10 bg-white px-3 py-2 text-left shadow-lg transition ${hovered === city.id || selectedProvince === city.id ? 'opacity-100' : 'pointer-events-none opacity-0'}`}><strong className="block text-sm">{city.name}</strong><small className="text-black/50">{count} perfiles demo</small></span></button> })}
    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur"><p className="text-xs text-black/55">Vigo · A Coruña · Santiago</p><span className="ui-label">Después, toda España →</span></div>
  </div>
}
