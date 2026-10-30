"use client"

import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { categories, provinces } from "@/lib/data"

export interface FiltersState { categories: string[]; province: string }
interface FiltersSidebarProps { filters: FiltersState; onFiltersChange: (filters: FiltersState) => void; isMobile?: boolean }

function FiltersContent({ filters, onFiltersChange }: FiltersSidebarProps) {
  const toggleCategory = (categoryId: string) => onFiltersChange({ ...filters, categories: filters.categories.includes(categoryId) ? filters.categories.filter((item) => item !== categoryId) : [...filters.categories, categoryId] })
  return <div className="space-y-7">
    <div className="space-y-3"><Label className="ui-label text-foreground">Ciudad</Label><Select value={filters.province} onValueChange={(value) => onFiltersChange({ ...filters, province: value })}><SelectTrigger><SelectValue placeholder="Todas las ciudades" /></SelectTrigger><SelectContent><SelectItem value="all">Todas las ciudades</SelectItem>{provinces.map((province) => <SelectItem key={province.id} value={province.id}>{province.name}</SelectItem>)}</SelectContent></Select></div>
    <div className="space-y-3"><Label className="ui-label text-foreground">Categorías</Label><div className="max-h-72 space-y-2 overflow-y-auto overscroll-contain pr-2">{categories.map((category) => <div key={category.id} className="flex items-center gap-2"><Checkbox id={`filter-${category.id}`} checked={filters.categories.includes(category.id)} onCheckedChange={() => toggleCategory(category.id)} /><label htmlFor={`filter-${category.id}`} className="flex-1 cursor-pointer text-sm">{category.name}</label><span className="text-xs text-black/40">{category.count} demo</span></div>)}</div></div>
    {(filters.categories.length > 0 || filters.province !== "all") && <Button variant="ghost" className="w-full text-muted-foreground" onClick={() => onFiltersChange({ categories: [], province: "all" })}><XMarkIcon className="mr-2 h-4 w-4" />Limpiar filtros</Button>}
  </div>
}

export function FiltersSidebar(props: FiltersSidebarProps) {
  if (props.isMobile) return <Sheet><SheetTrigger asChild><Button variant="outline" size="sm"><FunnelIcon className="mr-2 h-4 w-4" />Filtros</Button></SheetTrigger><SheetContent side="left" className="w-[300px] sm:w-[350px]"><SheetHeader><SheetTitle>Filtros</SheetTitle></SheetHeader><div className="mt-6"><FiltersContent {...props} /></div></SheetContent></Sheet>
  return <div className="rounded-[26px] border border-black/10 bg-[#fffdf9] p-5 shadow-sm"><h3 className="mb-5 border-b border-black/10 pb-3 text-2xl font-medium">Filtra a tu manera</h3><FiltersContent {...props} /></div>
}
