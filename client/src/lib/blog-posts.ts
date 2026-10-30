import { categoryIllustrations, illustrations } from "@/lib/v3-illustrations"

export type BlogTopic = "Precios" | "Urgencias y averías" | "Cómo elegir" | "Mantenimiento"
export type BlogFaq = { question: string; answer: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  paraProfesionales: boolean
  topic: BlogTopic
  tradeId?: string
  featured: boolean
  illustration: string
  color: string
  readTime: string
  publishedAt: string
  publishedOn: string
  updatedOn: string
  city: string
  content: string[]
  faqs: BlogFaq[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-elegir-fontanero-vigo", title: "Cómo elegir un fontanero de confianza en Vigo",
    excerpt: "Qué preguntar antes de aceptar un presupuesto de fontanería y cómo comparar el trabajo propuesto.",
    paraProfesionales: false, topic: "Cómo elegir", tradeId: "fontaneros", featured: false,
    illustration: illustrations.plumber, color: "var(--lilac)", readTime: "5 min de lectura",
    publishedAt: "6 de septiembre de 2026", publishedOn: "2026-09-06", updatedOn: "2026-09-06", city: "Vigo",
    content: [
      "Para elegir un fontanero, concreta la avería, pide una propuesta que separe desplazamiento, mano de obra y materiales y confirma las condiciones antes de empezar. La urgencia no debería impedirte hacer estas preguntas.",
      "Si hay una fuga, cierra la llave de paso cuando sea seguro hacerlo. Describe qué ocurre, desde cuándo y en qué parte de la vivienda. Esa información ayuda a preparar la visita, pero no sustituye un diagnóstico presencial.",
      "Compara el alcance de las propuestas, no solo el total. Pregunta por materiales, plazos y qué ocurriría si aparece una avería distinta. En ProLocal las fichas actuales son de demostración; contacta directamente solo cuando haya profesionales reales publicados.",
    ],
    faqs: [
      { question: "¿Qué debo preguntar antes de contratar a un fontanero?", answer: "Confirma qué incluye el presupuesto, el desplazamiento, los materiales, el plazo y cómo se tratarían posibles trabajos adicionales." },
      { question: "¿Los perfiles actuales de ProLocal son profesionales disponibles?", answer: "No. Las fichas visibles en esta versión son ejemplos para mostrar el funcionamiento del directorio." },
    ],
  },
  {
    slug: "precio-electricista-a-coruna", title: "¿Cuánto cuesta un electricista en A Coruña?",
    excerpt: "Cómo entender una propuesta de electricidad sin presentar tarifas generales como precios reales.",
    paraProfesionales: false, topic: "Precios", tradeId: "electricistas", featured: true,
    illustration: illustrations.electrician, color: "var(--sky)", readTime: "4 min de lectura",
    publishedAt: "8 de septiembre de 2026", publishedOn: "2026-09-08", updatedOn: "2026-09-08", city: "A Coruña",
    content: [
      "No hay un precio único para un electricista en A Coruña: depende del trabajo concreto, los materiales, el desplazamiento y la urgencia. Pide una propuesta desglosada antes de aceptar una intervención.",
      "Una visita de diagnóstico no equivale a una instalación completa. Explica el problema, pregunta si la visita tiene coste y solicita por escrito qué entra en la mano de obra y los materiales.",
      "Compara presupuestos con el mismo alcance y aclara si incluyen impuestos, desplazamiento y posibles cambios. La cercanía puede facilitar una visita, pero confirma disponibilidad y condiciones directamente con cada profesional cuando existan perfiles reales publicados.",
    ],
    faqs: [
      { question: "¿Hay una tarifa única para electricistas en A Coruña?", answer: "No. El coste depende del servicio, los materiales, el desplazamiento y las condiciones acordadas con el profesional." },
      { question: "¿Qué debe indicar un presupuesto de electricidad?", answer: "Conviene que distinga el trabajo previsto, materiales, desplazamiento, impuestos y condiciones para cambios o trabajos adicionales." },
    ],
  },
  {
    slug: "preparar-reforma-santiago", title: "Cómo preparar una reforma en Santiago de Compostela",
    excerpt: "Ordena el alcance, los plazos y los oficios que podrían intervenir antes de pedir presupuestos.",
    paraProfesionales: false, topic: "Cómo elegir", tradeId: "albaniles", featured: false,
    illustration: illustrations.mason, color: "var(--blush)", readTime: "6 min de lectura",
    publishedAt: "2 de septiembre de 2026", publishedOn: "2026-09-02", updatedOn: "2026-09-02", city: "Santiago de Compostela",
    content: [
      "Para preparar una reforma, define qué quieres cambiar, qué elementos debes conservar y cuál es el alcance que puedes explicar a cada profesional. Una lista inicial te permitirá comparar propuestas similares.",
      "Separa el trabajo por oficios cuando sea necesario: albañilería, fontanería, electricidad, pintura y limpieza final. Pregunta quién coordinará las visitas, los materiales y el calendario.",
      "Antes de decidir, revisa qué incluye cada presupuesto, qué quedaría fuera y cómo se acordarán imprevistos. La coordinación del proyecto y la contratación corresponden al cliente y a los profesionales elegidos, no a ProLocal.",
    ],
    faqs: [
      { question: "¿Por dónde empiezo a planificar una reforma?", answer: "Describe el alcance, identifica los oficios necesarios y pide propuestas que indiquen materiales, plazos y exclusiones." },
      { question: "¿ProLocal coordina la reforma?", answer: "No. ProLocal es un directorio; el acuerdo, la coordinación y la ejecución se realizan entre cliente y profesionales." },
    ],
  },
  {
    slug: "cerrajero-urgencia-vigo", title: "Qué hacer ante una urgencia de cerrajería en Vigo",
    excerpt: "Pasos para actuar con calma y preguntar por el coste antes de autorizar el trabajo.",
    paraProfesionales: false, topic: "Urgencias y averías", tradeId: "cerrajeros", featured: false,
    illustration: illustrations.locksmith, color: "var(--city-santiago)", readTime: "3 min de lectura",
    publishedAt: "21 de agosto de 2026", publishedOn: "2026-08-21", updatedOn: "2026-08-21", city: "Vigo",
    content: [
      "Ante una urgencia de cerrajería, comprueba primero si existe una forma segura de acceder y evita forzar la cerradura. Después explica el tipo de puerta y pide una estimación antes de empezar.",
      "Pregunta por el coste del desplazamiento, la apertura y las piezas que podrían necesitarse. Si el problema exige un trabajo diferente al previsto, acuerda el nuevo alcance antes de autorizarlo.",
      "Solicita la factura y conserva la información sobre la pieza instalada. No des por supuesta una disponibilidad inmediata por ver un perfil: confírmala directamente con el profesional.",
    ],
    faqs: [
      { question: "¿Debo forzar la cerradura si me quedo fuera?", answer: "Evítalo si puede causar daños. Comprueba primero alternativas seguras y describe la situación al profesional." },
      { question: "¿Qué coste conviene confirmar antes de una apertura?", answer: "Pregunta por desplazamiento, intervención, piezas e impuestos, así como por posibles cambios si el trabajo difiere de la estimación." },
    ],
  },
  {
    slug: "mantenimiento-grifos-hogar", title: "Revisiones sencillas para detectar fugas en casa",
    excerpt: "Señales que puedes observar sin manipular instalaciones ni sustituir una revisión profesional.",
    paraProfesionales: false, topic: "Mantenimiento", tradeId: "fontaneros", featured: false,
    illustration: categoryIllustrations.fontaneros, color: "var(--lilac)", readTime: "4 min de lectura",
    publishedAt: "18 de agosto de 2026", publishedOn: "2026-08-18", updatedOn: "2026-08-18", city: "Galicia",
    content: [
      "Para detectar a tiempo una posible fuga, observa si hay goteos, manchas nuevas o humedad persistente y anota dónde aparecen. No desmontes una instalación que no conoces.",
      "Si el agua sale de forma continua, cierra la llave de paso cuando sea seguro y limita el uso de la zona afectada. Una fotografía puede ayudarte a explicar el problema, pero no identifica por sí sola la causa.",
      "Cuando contactes con un profesional, comparte los síntomas y pregunta qué revisión propone. El diagnóstico, los materiales y el precio se acuerdan directamente entre ambas partes.",
    ],
    faqs: [
      { question: "¿Qué señales pueden indicar una fuga?", answer: "Un goteo continuo, humedad persistente o manchas nuevas son motivos para observar la zona y consultar a un profesional." },
      { question: "¿Debo desmontar una instalación para encontrarla?", answer: "No si desconoces la instalación. Describe los síntomas y solicita una revisión cuando sea necesaria." },
    ],
  },
  {
    slug: "perfil-local-profesional", title: "Qué información poner en tu perfil profesional local",
    excerpt: "Servicios concretos, zona de trabajo y fotos propias: lo que ayuda a entender tu oferta.",
    paraProfesionales: true, topic: "Cómo elegir", tradeId: "manitas", featured: true,
    illustration: illustrations.handyman, color: "var(--city-santiago)", readTime: "5 min de lectura",
    publishedAt: "30 de septiembre de 2026", publishedOn: "2026-09-30", updatedOn: "2026-09-30", city: "Galicia",
    content: [
      "Un perfil profesional útil explica qué trabajos haces, en qué zonas trabajas y cómo podrán contactarte cuando tu ficha esté publicada. Cuanto más concreto seas, más fácil resulta entender si encajas con una necesidad.",
      "Nombra servicios que realmente realizas y añade imágenes de trabajos propios con permiso para mostrarlos. No presentes fotografías ajenas como trabajos realizados ni confundas una acreditación aportada con una garantía de calidad futura.",
      "En esta versión de ProLocal, el registro y las fotos solo crean un borrador guardado en tu navegador. Aún no se publican perfiles ni llegan contactos a través del directorio.",
    ],
    faqs: [
      { question: "¿Qué datos son más útiles en un perfil local?", answer: "Una descripción precisa, servicios que realmente realizas, zonas de trabajo y datos de contacto cuando exista publicación real." },
      { question: "¿Crear mi perfil lo publica ya en ProLocal?", answer: "No. La versión actual conserva el perfil como borrador local en tu navegador, sin publicación ni contactos reales." },
    ],
  },
  {
    slug: "presupuesto-claro-para-clientes", title: "Cómo presentar un presupuesto claro a tus clientes",
    excerpt: "Separa alcance, materiales, plazos y condiciones para evitar malentendidos antes de empezar.",
    paraProfesionales: true, topic: "Precios", tradeId: "reformas-banos", featured: false,
    illustration: illustrations.mason, color: "var(--lilac)", readTime: "5 min de lectura",
    publishedAt: "28 de septiembre de 2026", publishedOn: "2026-09-28", updatedOn: "2026-09-28", city: "Galicia",
    content: [
      "Un presupuesto claro concreta el trabajo incluido, los materiales, los plazos orientativos y el importe acordado. Separar esos conceptos facilita que el cliente compare propuestas equivalentes.",
      "Indica qué queda fuera del alcance, cuándo haría falta una visita o medición y cómo confirmarías cambios si aparecen imprevistos. Evita presentar una cifra inicial como precio cerrado si aún falta información esencial.",
      "Envía las condiciones directamente al cliente y confirma su aceptación por el medio que acordéis. ProLocal no negocia presupuestos ni participa en pagos o en la ejecución del trabajo.",
    ],
    faqs: [
      { question: "¿Qué debe quedar por escrito en un presupuesto?", answer: "El alcance, materiales, importe, plazos previstos, exclusiones y cómo se tratarán trabajos adicionales." },
      { question: "¿ProLocal envía presupuestos por el profesional?", answer: "No. El presupuesto y las condiciones se acuerdan directamente entre el profesional y el cliente." },
    ],
  },
  {
    slug: "acordar-encargo-profesional", title: "Qué acordar antes de empezar un trabajo en casa del cliente",
    excerpt: "Alcance, acceso, materiales y plazos: una conversación breve que evita dudas después.",
    paraProfesionales: true, topic: "Cómo elegir", tradeId: "pintores", featured: false,
    illustration: illustrations.painter, color: "var(--sky)", readTime: "4 min de lectura",
    publishedAt: "26 de septiembre de 2026", publishedOn: "2026-09-26", updatedOn: "2026-09-26", city: "Galicia",
    content: [
      "Antes de iniciar un encargo, confirma con el cliente qué partes del trabajo están incluidas, qué materiales aporta cada persona y cómo se accederá al espacio. Deja las decisiones principales por escrito.",
      "Acordad plazos razonables y el procedimiento para avisar si aparece un problema diferente al previsto. Una conversación clara no elimina imprevistos, pero ayuda a decidir juntos qué hacer.",
      "La relación de servicio es entre profesional y cliente. ProLocal no está presente durante la ejecución y no supervisa resultados ni pagos.",
    ],
    faqs: [
      { question: "¿Qué conviene confirmar antes de una visita?", answer: "El trabajo previsto, acceso, materiales, disponibilidad y cualquier información necesaria para preparar la intervención." },
      { question: "¿Quién decide si cambia el alcance del trabajo?", answer: "Cliente y profesional deben acordar directamente las nuevas condiciones antes de continuar." },
    ],
  },
  {
    slug: "perfil-profesional-atraer-clientes", title: "Cómo mejorar tu perfil para explicar mejor tu trabajo",
    excerpt: "Mejora tu presentación local con información concreta, imágenes propias y una oferta comprensible.",
    paraProfesionales: true, topic: "Cómo elegir", featured: false,
    illustration: illustrations.general, color: "var(--blush)", readTime: "5 min de lectura",
    publishedAt: "28 de agosto de 2026", publishedOn: "2026-08-28", updatedOn: "2026-08-28", city: "Galicia",
    content: [
      "Para presentar mejor tu trabajo, di a qué te dedicas, qué servicios puedes asumir y dónde trabajas. Una descripción concreta evita que el cliente tenga que adivinar si tu oficio encaja con lo que busca.",
      "Añade ejemplos propios y explica qué documentación puedes aportar. Los sellos indican que se comprobó información específica cuando haya una revisión real, no que se garantice un resultado futuro.",
      "Revisa con frecuencia tus datos de contacto y tus servicios. Por ahora, el registro de ProLocal es solo un borrador local: no publica tu perfil ni genera visitas o contactos medidos.",
    ],
    faqs: [
      { question: "¿Debo mostrar fotografías de cualquier trabajo?", answer: "Usa solo imágenes propias que puedas publicar con permiso y describe honestamente qué parte del trabajo realizaste." },
      { question: "¿Los sellos garantizan la calidad de futuros trabajos?", answer: "No. Cada sello indica únicamente una comprobación documental concreta cuando exista revisión real." },
    ],
  },
]

export const blogTopics: BlogTopic[] = ["Precios", "Urgencias y averías", "Cómo elegir", "Mantenimiento"]
export const blogCategories = ["Todos", ...blogTopics]
export const blogTopicSlug: Record<BlogTopic, string> = {
  "Precios": "precios", "Urgencias y averías": "urgencias-y-averias", "Cómo elegir": "como-elegir", "Mantenimiento": "mantenimiento",
}
export const blogPostSlugs = blogPosts.map(post => post.slug)
export const getBlogPost = (slug: string) => blogPosts.find(post => post.slug === slug)
export const getRelatedPosts = (slug: string) => {
  const current = getBlogPost(slug)
  return current ? blogPosts.filter(post => post.slug !== slug
    && post.paraProfesionales === current.paraProfesionales
    && (post.topic === current.topic || Boolean(current.tradeId && post.tradeId === current.tradeId))
  ).sort((a, b) => {
    const sameTrade = Number(Boolean(current.tradeId && b.tradeId === current.tradeId)) - Number(Boolean(current.tradeId && a.tradeId === current.tradeId))
    const sameTopic = Number(b.topic === current.topic) - Number(a.topic === current.topic)
    return sameTrade || sameTopic || b.publishedOn.localeCompare(a.publishedOn)
  }).slice(0, 4) : []
}
export const blogPostsCount = blogPosts.length
export const blogDescription = "Guías prácticas para contratar con criterio y recursos para profesionales que quieren conseguir clientes sin pagar por leads."
export const blogAuthor = "Equipo ProLocal"
export default blogPosts
