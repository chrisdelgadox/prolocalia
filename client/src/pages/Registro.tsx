"use client"

import { useEffect, useState } from "react"
import { Link } from "wouter"
import { useLocation } from "wouter"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  User, 
  Briefcase, 
  MapPin, 
  Tag,
  Rocket,
  Eye,
  EyeOff
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories, provinces } from "@/lib/data"
import { getCategoryPage } from "@/lib/category-pages"
import { Header } from "@/components/header"
import { InteriorHero } from "@/components/interior-hero"

const steps = [
  { id: 1, name: "Datos básicos", icon: User },
  { id: 2, name: "Profesional", icon: Briefcase },
  { id: 3, name: "Ubicación", icon: MapPin },
  { id: 4, name: "Servicios", icon: Tag },
  { id: 5, name: "Confirmación", icon: Check },
]

const priceRanges = [
  { value: "€", label: "€ - Económico" },
  { value: "€€", label: "€€ - Moderado" },
  { value: "€€€", label: "€€€ - Premium" },
]

export default function RegistroPage() {
  const [, navigate] = useLocation()
  const [currentStep, setCurrentStep] = useState(1)
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    // Step 1
    nombre: "",
    email: "",
    telefono: "",
    password: "",
    // Step 2
    categoria: "",
    subcategorias: [] as string[],
    experiencia: "",
    descripcion: "",
    // Step 3
    provincia: "",
    ciudad: "",
    // Step 4
    servicios: [] as string[],
    servicioInput: "",
    precioRango: "",
    // Step 5
    aceptaTerminos: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const suggestedServices = getCategoryPage(formData.categoria)?.content.service_cards.map(service => service.title) || []

  const toggleSuggestedService = (service: string) => {
    updateFormData("servicios", formData.servicios.includes(service)
      ? formData.servicios.filter(value => value !== service)
      : [...formData.servicios, service])
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("editar") !== "1") return
    try {
      const saved = JSON.parse(localStorage.getItem("prolocal_professional") || "null")
      if (!saved?.id) return
      setIsEditing(true)
      setFormData(current => ({
        ...current,
        nombre: saved.nombre || "", email: saved.email || "", telefono: saved.telefono || "",
        categoria: saved.categoria || "", subcategorias: saved.subcategorias || [],
        experiencia: saved.experiencia || "", descripcion: saved.descripcion || "",
        provincia: saved.provincia || "", ciudad: saved.ciudad || "",
        servicios: saved.servicios || [], precioRango: saved.precioRango || "",
      }))
      const step = Number(params.get("paso"))
      if (Number.isInteger(step) && step >= 1 && step <= 4) setCurrentStep(step)
    } catch { /* If the draft is unavailable, start a new registration. */ }
  }, [])

  const updateFormData = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}
    
    switch (step) {
      case 1:
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio"
        if (!formData.email.trim()) newErrors.email = "El email es obligatorio"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Email no válido"
        }
        if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio"
        if (!isEditing && !formData.password.trim()) newErrors.password = "La contraseña es obligatoria"
        else if (!isEditing && formData.password.length < 8) {
          newErrors.password = "Mínimo 8 caracteres"
        }
        break
      case 2:
        if (!formData.categoria) newErrors.categoria = "Selecciona una categoría"
        if (!formData.experiencia) newErrors.experiencia = "Indica tus años de experiencia"
        if (!formData.descripcion.trim()) newErrors.descripcion = "Añade una descripción"
        break
      case 3:
        if (!formData.provincia) newErrors.provincia = "Selecciona una provincia"
        if (!formData.ciudad.trim()) newErrors.ciudad = "Indica tu ciudad"
        break
      case 4:
        if (formData.servicios.length === 0) newErrors.servicios = "Añade al menos un servicio"
        if (!formData.precioRango) newErrors.precioRango = "Selecciona un rango de precios"
        break
      case 5:
        if (!formData.aceptaTerminos) newErrors.aceptaTerminos = "Debes aceptar los términos"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5))
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const addServicio = () => {
    if (formData.servicioInput.trim() && !formData.servicios.includes(formData.servicioInput.trim())) {
      updateFormData("servicios", [...formData.servicios, formData.servicioInput.trim()])
      updateFormData("servicioInput", "")
    }
  }

  const removeServicio = (servicio: string) => {
    updateFormData("servicios", formData.servicios.filter(s => s !== servicio))
  }

  const toggleSubcategoria = (catId: string) => {
    if (formData.subcategorias.includes(catId)) {
      updateFormData("subcategorias", formData.subcategorias.filter(id => id !== catId))
    } else if (formData.subcategorias.length < 5) {
      updateFormData("subcategorias", [...formData.subcategorias, catId])
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(5)) return
    
    setIsSubmitting(true)
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Store only non-sensitive demo data in this browser. Never persist passwords.
    const { password: _password, servicioInput: _servicioInput, aceptaTerminos: _aceptaTerminos, ...safeProfile } = formData
    const previous = isEditing ? JSON.parse(localStorage.getItem("prolocal_professional") || "null") : null
    localStorage.setItem("prolocal_professional", JSON.stringify({
      ...safeProfile,
      id: previous?.id || Date.now().toString(),
      createdAt: previous?.createdAt || new Date().toISOString(),
      status: previous?.status || "pending_review"
    }))
    
    navigate("/profesionales/dashboard")
  }

  const handleGoogleSignup = async () => {
    // Mock Google signup
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Pre-fill some data and go to step 2
    updateFormData("nombre", "Usuario de Google")
    updateFormData("email", "usuario@gmail.com")
    setCurrentStep(2)
    setIsSubmitting(false)
  }

  return (
    <div className="paper-texture min-h-screen">
      <Header />
      <InteriorHero title="Crea tu perfil" intro="Cuéntanos quién eres, qué servicios ofreces y dónde trabajas para que las personas puedan encontrarte y contactarte directamente." />

      {/* Beta Banner */}
      <div className="border-b border-black/10 bg-accent text-black">
        <div className="mx-auto max-w-7xl px-4 py-2.5 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Rocket className="h-4 w-4" />
            <span>Prototipo: los datos se guardan solo en este navegador. No envíes documentación real.</span>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                    currentStep > step.id 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : currentStep === step.id 
                        ? "border-primary text-primary bg-primary/10" 
                        : "border-border text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={`hidden sm:block w-12 lg:w-20 h-0.5 mx-2 transition-colors ${
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            {steps.map((step) => (
              <span 
                key={step.id} 
                className={`hidden sm:block ${currentStep === step.id ? "text-primary font-medium" : ""}`}
              >
                {step.name}
              </span>
            ))}
          </div>
          <p className="sm:hidden text-sm text-center text-muted-foreground mt-2">
            Paso {currentStep} de 5: {steps[currentStep - 1].name}
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-[32px] border border-black/10 bg-[#fffdf9] p-6 shadow-[0_18px_50px_rgba(44,35,24,.07)] sm:p-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-1 text-3xl font-medium text-foreground">Empecemos por ti</h2>
                <p className="text-sm text-muted-foreground">Información de tu cuenta</p>
              </div>

              {/* Google Signup */}
              <Button 
                variant="outline" 
                className="w-full h-11"
                onClick={handleGoogleSignup}
                disabled={isSubmitting}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Usar datos de demostración
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">O continúa con email</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => updateFormData("nombre", e.target.value)}
                    className={errors.nombre ? "border-destructive" : ""}
                  />
                  {errors.nombre && <p className="text-xs text-destructive">{errors.nombre}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={formData.telefono}
                    onChange={(e) => updateFormData("telefono", e.target.value)}
                    className={errors.telefono ? "border-destructive" : ""}
                  />
                  {errors.telefono && <p className="text-xs text-destructive">{errors.telefono}</p>}
                </div>

                {!isEditing && <div className="space-y-2">
                  <Label htmlFor="password">Contraseña de demostración</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={(e) => updateFormData("password", e.target.value)}
                      className={errors.password ? "border-destructive pr-10" : "pr-10"}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                  {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
                  <p className="text-xs text-muted-foreground">Se usa solo para validar este paso y no se almacena.</p>
                </div>}
              </div>
            </div>
          )}

          {/* Step 2: Professional Info */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Información profesional</h2>
                <p className="text-sm text-muted-foreground">Cuéntanos sobre tu trabajo</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoría principal</Label>
                  <Select value={formData.categoria} onValueChange={(value) => {
                    if (formData.categoria !== value) setFormData(previous => ({
                      ...previous,
                      categoria: value,
                      // Conserva servicios propios; retira solo opciones del catálogo de la categoría anterior.
                      servicios: previous.servicios.filter(service => !getCategoryPage(previous.categoria)?.content.service_cards.some(option => option.title === service)),
                    }))
                  }}>
                    <SelectTrigger className={errors.categoria ? "border-destructive" : ""}>
                      <SelectValue placeholder="Selecciona tu categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.categoria && <p className="text-xs text-destructive">{errors.categoria}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Subcategorías adicionales (opcional, máx. 5)</Label>
                  <div className="flex flex-wrap gap-2">
                    {categories.filter(c => c.id !== formData.categoria).slice(0, 10).map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleSubcategoria(cat.id)}
                        className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                          formData.subcategorias.includes(cat.id)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experiencia">Años de experiencia</Label>
                  <Select value={formData.experiencia} onValueChange={(value) => updateFormData("experiencia", value)}>
                    <SelectTrigger className={errors.experiencia ? "border-destructive" : ""}>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">Menos de 1 año</SelectItem>
                      <SelectItem value="1-3">1-3 años</SelectItem>
                      <SelectItem value="3-5">3-5 años</SelectItem>
                      <SelectItem value="5-10">5-10 años</SelectItem>
                      <SelectItem value="10+">Más de 10 años</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experiencia && <p className="text-xs text-destructive">{errors.experiencia}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción corta</Label>
                  <Textarea
                    id="descripcion"
                    placeholder="Describe brevemente tus servicios y experiencia..."
                    value={formData.descripcion}
                    onChange={(e) => updateFormData("descripcion", e.target.value)}
                    className={`min-h-[100px] ${errors.descripcion ? "border-destructive" : ""}`}
                  />
                  <p className="text-xs text-muted-foreground">{formData.descripcion.length}/300 caracteres</p>
                  {errors.descripcion && <p className="text-xs text-destructive">{errors.descripcion}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Ubicación</h2>
                <p className="text-sm text-muted-foreground">Dónde ofreces tus servicios</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="provincia">Provincia</Label>
                  <Select value={formData.provincia} onValueChange={(value) => updateFormData("provincia", value)}>
                    <SelectTrigger className={errors.provincia ? "border-destructive" : ""}>
                      <SelectValue placeholder="Selecciona tu provincia" />
                    </SelectTrigger>
                    <SelectContent>
                      {provinces.map((prov) => (
                        <SelectItem key={prov.id} value={prov.id}>{prov.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.provincia && <p className="text-xs text-destructive">{errors.provincia}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ciudad">Ciudad</Label>
                  <Input
                    id="ciudad"
                    placeholder="Tu ciudad o barrio"
                    value={formData.ciudad}
                    onChange={(e) => updateFormData("ciudad", e.target.value)}
                    className={errors.ciudad ? "border-destructive" : ""}
                  />
                  {errors.ciudad && <p className="text-xs text-destructive">{errors.ciudad}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Services & Pricing */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Servicios y precios</h2>
                <p className="text-sm text-muted-foreground">Qué ofreces y a qué precio</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="servicioInput">Tipos de servicios</Label>
                  {suggestedServices.length > 0 && <div className="mb-4">
                    <p className="mb-2 text-xs text-muted-foreground">Selecciona los servicios que realmente ofreces en {categories.find(category => category.id === formData.categoria)?.name}. También puedes añadir uno propio.</p>
                    <div className="flex flex-wrap gap-2" aria-label="Servicios sugeridos para tu categoría">
                      {suggestedServices.map(service => <button key={service} type="button" aria-pressed={formData.servicios.includes(service)} onClick={() => toggleSuggestedService(service)} className={`rounded-full border px-3 py-2 text-xs font-medium transition-colors ${formData.servicios.includes(service) ? "border-black bg-accent text-black" : "border-black/15 bg-[#fffdf9] text-black/70 hover:border-black"}`}>{service}</button>)}
                    </div>
                  </div>}
                  <div className="flex gap-2">
                    <Input
                      id="servicioInput"
                      placeholder="Ej: Instalación, Reparación..."
                      value={formData.servicioInput}
                      onChange={(e) => updateFormData("servicioInput", e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addServicio()
                        }
                      }}
                      className={errors.servicios && formData.servicios.length === 0 ? "border-destructive" : ""}
                    />
                    <Button type="button" onClick={addServicio} variant="secondary">
                      Añadir
                    </Button>
                  </div>
                  {errors.servicios && <p className="text-xs text-destructive">{errors.servicios}</p>}
                  
                  {formData.servicios.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.servicios.map((servicio) => (
                        <span 
                          key={servicio}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {servicio}
                          <button
                            type="button"
                            onClick={() => removeServicio(servicio)}
                            className="hover:text-destructive transition-colors"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Rango de precios</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        type="button"
                        onClick={() => updateFormData("precioRango", range.value)}
                        className={`p-4 rounded-lg border text-center transition-colors ${
                          formData.precioRango === range.value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border hover:border-primary/50"
                        } ${errors.precioRango && !formData.precioRango ? "border-destructive" : ""}`}
                      >
                        <div className="text-lg font-semibold">{range.value}</div>
                        <div className="text-xs opacity-80">{range.label.split(" - ")[1]}</div>
                      </button>
                    ))}
                  </div>
                  {errors.precioRango && <p className="text-xs text-destructive">{errors.precioRango}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Confirmación</h2>
                <p className="text-sm text-muted-foreground">Revisa tus datos y crea tu perfil</p>
              </div>

              {/* Summary */}
              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Nombre</p>
                    <p className="font-medium">{formData.nombre}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Categoría</p>
                    <p className="font-medium">{categories.find(c => c.id === formData.categoria)?.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{formData.ciudad}, {provinces.find(p => p.id === formData.provincia)?.name}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Servicios</p>
                    <p className="font-medium">{formData.servicios.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="terminos"
                  checked={formData.aceptaTerminos}
                  onCheckedChange={(checked) => updateFormData("aceptaTerminos", checked === true)}
                  className={errors.aceptaTerminos ? "border-destructive" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terminos"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acepto los términos y condiciones
                  </label>
                  <p className="text-xs text-muted-foreground">
                    En una versión pública, aquí se enlazarán los términos de servicio y la política de privacidad revisados.
                  </p>
                  {errors.aceptaTerminos && <p className="text-xs text-destructive">{errors.aceptaTerminos}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Atrás
            </Button>
            
            {currentStep < 5 ? (
              <Button onClick={handleNext} className="gap-2">
                Siguiente
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting} className="gap-2">
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Creando perfil...
                  </>
                ) : (
                  "Crear perfil"
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Back Link */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link href="/" className="text-primary hover:underline font-medium">
            Volver a ProLocal
          </Link>
        </p>
      </main>
    </div>
  )
}
