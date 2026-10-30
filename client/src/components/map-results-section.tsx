"use client"

import { useEffect, useState, useMemo } from "react"
import { Link } from "wouter"
import { MapPinIcon, UserPlusIcon } from "@heroicons/react/24/outline"
import { SpainMap } from "./spain-map"
import { ProfessionalsList } from "./professional-card"
import { FiltersSidebar, type FiltersState } from "./filters-sidebar"
import { Button } from "@/components/ui/button"
import { professionals, provinces } from "@/lib/data"

interface MapResultsSectionProps {
  selectedCategory?: string
}

export function MapResultsSection({ selectedCategory }: MapResultsSectionProps) {
  const [filters, setFilters] = useState<FiltersState>({
    categories: [],
    province: "all",
  })
  const [highlightedProfessional, setHighlightedProfessional] = useState<string | undefined>()

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      categories: selectedCategory ? [selectedCategory] : [],
    }))
  }, [selectedCategory])

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((professional) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(professional.categoryId)) {
        return false
      }
      
      // Province filter
      if (filters.province !== "all" && professional.province !== filters.province) {
        return false
      }
      
      return true
    })
  }, [filters])

  const handleProvinceSelect = (provinceId: string) => {
    setFilters((prev) => ({
      ...prev,
      province: prev.province === provinceId ? "all" : provinceId,
    }))
  }

  const handleMarkerClick = (professionalId: string) => {
    setHighlightedProfessional(professionalId)
    // Scroll to the professional card
    const element = document.getElementById(`professional-${professionalId}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const selectedProvinceName = useMemo(() => {
    if (filters.province === "all") return null
    return provinces.find((p) => p.id === filters.province)?.name
  }, [filters.province])

  const visibleProfessionals = filteredProfessionals.slice(0, 9)

  return (
    <section id="profesionales" className="bg-[#ede5d9] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-kicker mb-4">
              Explora por ciudad y características
            </span>
            <h2 className="max-w-2xl text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Perfiles de muestra. Directorio en construcción.
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              {selectedProvinceName
                ? `Mostrando resultados en ${selectedProvinceName}`
                : "Selecciona una ciudad o categoría para probar la experiencia"}
            </p>
          </div>
          <div className="lg:hidden">
            <FiltersSidebar
              filters={filters}
              onFiltersChange={setFilters}
              isMobile
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid min-w-0 gap-6 lg:grid-cols-[250px_1fr_410px]">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <FiltersSidebar
                filters={filters}
                onFiltersChange={setFilters}
              />
            </div>
          </div>

          {/* Professional List */}
          <div className="order-2 min-w-0 lg:order-none">
            {visibleProfessionals.length > 0 ? (
              <ProfessionalsList
                professionals={visibleProfessionals}
                highlightedId={highlightedProfessional}
              />
            ) : (
              <EmptyState 
                provinceName={selectedProvinceName} 
                onClearFilters={() => setFilters({
                  categories: [],
                  province: "all",
                })}
              />
            )}
          </div>

          {/* Map */}
          <div className="order-1 min-w-0 lg:order-none">
            <div className="sticky top-24 space-y-4">
              <div className="h-[400px] lg:h-[calc(100vh-12rem)]">
                <SpainMap
                  selectedProvince={filters.province !== "all" ? filters.province : undefined}
                  onProvinceSelect={handleProvinceSelect}
                  onMarkerClick={handleMarkerClick}
                  highlightedProfessional={highlightedProfessional}
                />
              </div>
              
              {/* CTA under map */}
              <div className="rounded-[22px] border border-black/10 bg-[#dfff00] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black">
                    <UserPlusIcon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      ¿Eres profesional en esta zona?
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Únete a nuestra red y empieza a recibir clientes
                    </p>
                  </div>
                  <Button size="sm" className="shrink-0 rounded-full text-xs" asChild>
                    <Link href="/profesionales/registro">Regístrate gratis</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmptyState({ 
  provinceName, 
  onClearFilters 
}: { 
  provinceName: string | null | undefined
  onClearFilters: () => void 
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
        <MapPinIcon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        No hay profesionales en esta zona todavía
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        {provinceName 
          ? `Aún no tenemos profesionales registrados en ${provinceName}. Prueba a buscar en otra provincia.`
          : "No se encontraron profesionales con los filtros seleccionados."}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="outline" onClick={onClearFilters}>
          Limpiar filtros
        </Button>
        <Button asChild>
          <Link href="/profesionales/registro">¿Eres profesional? Regístrate</Link>
        </Button>
      </div>
    </div>
  )
}
