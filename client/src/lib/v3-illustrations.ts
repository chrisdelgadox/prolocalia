export const illustrations = {
  plumber: "/manus-storage/fontanera_7c482c52.png",
  electrician: "/manus-storage/electricista_a2205236.png",
  gardener: "/manus-storage/jardinera_d205d869.png",
  mason: "/manus-storage/albanil_d680d639.png",
  painter: "/manus-storage/pintora_54536cb8.png",
  cleaner: "/manus-storage/limpieza_dd2ac418.png",
  locksmith: "/manus-storage/cerrajero_8a25964e.png",
  handyman: "/manus-storage/manitas_ilustracion_f2e1feaf.png",
  general: "/manus-storage/profesional-general_f756c8f9.png",
} as const

export const categoryIllustrations: Record<string, string> = {
  cerrajeros: illustrations.locksmith,
  fontaneros: illustrations.plumber,
  electricistas: illustrations.electrician,
  antenistas: illustrations.electrician,
  "tecnico-persianas": illustrations.locksmith,
  "reformas-banos": illustrations.mason,
  "reformas-cocinas": illustrations.mason,
  albaniles: illustrations.mason,
  pintores: illustrations.painter,
  impermeabilizaciones: illustrations.mason,
  "aire-acondicionado": illustrations.electrician,
  "tecnico-calderas": illustrations.electrician,
  "instalador-gas": illustrations.electrician,
  manitas: illustrations.handyman,
  "placas-solares": illustrations.electrician,
  desatascos: illustrations.plumber,
  "control-plagas": illustrations.cleaner,
  "limpieza-domestica": illustrations.cleaner,
  carpinteros: illustrations.general,
  jardineros: illustrations.gardener,
}

export const illustrationList = Object.values(illustrations)
