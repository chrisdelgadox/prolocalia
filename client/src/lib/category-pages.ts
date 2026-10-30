import { cerrajerosServices } from "@/lib/category-services"

export type CategoryContent = {
  slug: string
  name: string
  eyebrow: string
  hero_title: string
  hero_intro: string
  category_intro_title: string
  category_intro_paragraphs: string[]
  service_cards: Array<{ title: string; description: string }>
  choose_title: string
  choose_intro: string
  choose_points: Array<{ title: string; description: string }>
  price_title: string
  price_intro: string
  price_factors: string[]
  coverage_title: string
  coverage_intro: string
  faqs: Array<{ question: string; answer: string }>
  hub_faqs?: Array<{ question: string; answer: string; link?: { label: string; href: string } }>
  related_cards?: Array<{ slug: string; when: string }>
  hub_intro?: string
  hub_services_intro?: string
  professional_singular?: string
  related_intro: string
  final_cta_title: string
  final_cta_copy: string
  safety_note: string
}

export type CategoryPageData = {
  slug: string
  name: string
  url: string
  navigationGroup: string
  metadata: { h1: string; title: string; description: string }
  keyword: { primary: string; secondary: string[]; semantic_variants: string[]; intent: string; exclude_queries: string[] }
  services: string[]
  relatedSlugs: string[]
  content: CategoryContent
  color: string
}

export const categoryPageData: Record<string, CategoryPageData> = {
  "cerrajeros": {
    "slug": "cerrajeros",
    "name": "Cerrajeros",
    "url": "/cerrajeros/",
    "navigationGroup": "Instalaciones y reparaciones",
    "metadata": {
      "h1": "Encuentra cerrajeros en Vigo, A Coruña y Santiago de Compostela",
      "title": "Cerrajeros en Galicia | Contacto directo y perfiles | ProLocal",
      "description": "Encuentra cerrajeros en Vigo, A Coruña y Santiago. Revisa servicios, zona y etiquetas documentales cuando existan; contacta directamente."
    },
    "keyword": {
      "primary": "cerrajeros",
      "secondary": [
        "cerrajero",
        "cerrajero en Vigo",
        "cerrajero A Coruña",
        "cerrajero Santiago de Compostela",
        "cerrajero urgente",
        "cerrajero 24 horas",
        "presupuesto cerrajero",
        "opiniones cerrajero",
        "precio cerrajero"
      ],
      "semantic_variants": [
        "cerrajería",
        "apertura de puertas",
        "cambio de cerradura",
        "cerrajero de urgencia",
        "reparación de cerraduras",
        "cambio de cilindro",
        "cerrojo",
        "seguridad física de puertas"
      ],
      "intent": "Local y transaccional, a menudo urgente; incluye una capa comparativa e informativa sobre precio, presupuesto, opiniones y confianza. La URL general debe facilitar el descubrimiento y el contacto directo con profesionales, no resolver tutoriales ni intermediar solicitudes.",
      "exclude_queries": [
        "cómo abrir una puerta sin llave",
        "forzar una cerradura",
        "ganzúa",
        "bypass de alarma",
        "cómo cambiar una cerradura paso a paso",
        "curso de cerrajero",
        "empleo de cerrajero",
        "herramientas de cerrajería",
        "llaves de coche e inmovilizadores",
        "cerrajero barato como landing independiente"
      ]
    },
    "services": cerrajerosServices.map(service => service.title),
    "relatedSlugs": [
      "tecnico-persianas",
      "carpinteros",
      "albaniles"
    ],
    "content": {
      "slug": "cerrajeros",
      "name": "Cerrajeros",
      "eyebrow": "DIRECTORIO DE CONTACTO DIRECTO · VERSIÓN DE DEMOSTRACIÓN",
      "hero_title": "Encuentra cerrajeros en Vigo, A Coruña y Santiago de Compostela",
      "hero_intro": "ProLocal es un directorio para consultar perfiles, servicios y zona de atención declarados y contactar directamente cuando haya oferta publicada. Esta versión noindex incluye seis perfiles de demostración, identificados como Perfil de demostración — no corresponde a una oferta real; no acreditan disponibilidad, cobertura, precios ni servicio activo.",
      "category_intro_title": "Cerrajería para accesos, cerraduras y seguridad física",
      "category_intro_paragraphs": [
        "La categoría Cerrajeros reúne trabajos relacionados con el acceso físico y los elementos de cierre: aperturas de puertas, cambio o reparación de cerraduras, cilindros, cerrojos, escudos y herrajes. Las cerraduras electrónicas y los accesos de comunidades solo se incluyen si el perfil declara esas especialidades. La zona de atención y los canales de contacto también deben estar declarados.",
        "No cubre persianas, reparaciones estructurales de puertas o marcos, llaves y mandos de automóvil, ni alarmas o videovigilancia conectadas a una central, centro de control o sistema de seguridad. Para esos casos, conviene acudir a la categoría o al proveedor especializado que corresponda."
      ],
      "service_cards": cerrajerosServices,
      "hub_intro": "Explora servicios de cerrajería y perfiles de muestra en tres ciudades de Galicia.",
      "hub_services_intro": "Cerrajería para accesos, cerraduras y elementos de cierre, incluidos los electrónicos solo cuando el perfil lo declare. No incluye persianas, reparación estructural de puertas, llaves de automóvil ni alarmas conectadas. Comprueba en cada ficha qué servicio se declara.",
      "professional_singular": "cerrajero",
      "related_cards": [
        { "slug": "tecnico-persianas", "when": "Si el problema está en la persiana, sus lamas o su motor." },
        { "slug": "carpinteros", "when": "Si necesitas reparar la puerta, el marco o la madera." },
        { "slug": "albaniles", "when": "Si el trabajo afecta a la obra o al hueco de la puerta." },
        { "slug": "manitas", "when": "Para ajustes y pequeños arreglos de puertas que no sean de cerrajería especializada." },
        { "slug": "electricistas", "when": "Si una instalación de acceso también requiere trabajos eléctricos declarados." },
        { "slug": "reformas-banos", "when": "Si el cambio de puerta forma parte de una reforma de baño más amplia." }
      ],
      "hub_faqs": [
        { "question": "¿Cómo leo el perfil de un cerrajero?", "answer": "Revisa los servicios y la zona que declara cada ficha, el tipo de profesional y el significado concreto de sus sellos. Confirma directamente la disponibilidad y las condiciones antes de aceptar un trabajo. Las fichas actuales son de demostración." },
        { "question": "¿Qué significa Identidad verificada?", "answer": "Indica que se ha comprobado un DNI o CIF aportado. No garantiza la calidad, el resultado ni la disponibilidad del trabajo.", "link": { "label": "Cómo verificamos", "href": "/como-verificamos" } },
        { "question": "¿Qué significa Urgencias 24 h?", "answer": "Es una condición autodeclarada por el profesional, no una disponibilidad comprobada ni una promesa de respuesta inmediata. Confírmala directamente antes de contratar." },
        { "question": "¿ProLocal fija precios o gestiona presupuestos?", "answer": "No. ProLocal es un directorio de contacto directo: no fija tarifas, no tramita presupuestos, no gestiona pagos ni cobra comisiones por los trabajos." },
        { "question": "¿De qué depende el precio de un cerrajero?", "answer": "Del alcance del trabajo, las piezas necesarias, el desplazamiento y las condiciones de atención o urgencia acordadas. Pide al profesional que detalle el importe y lo que incluye antes de aceptar; aquí no publicamos cifras ni rangos." },
        { "question": "¿Qué debo preguntar antes de aceptar el trabajo?", "answer": "Pregunta por el trabajo previsto, el desplazamiento, las piezas y materiales, las condiciones de urgencia si procede, el importe total y la documentación que recibirás. Cualquier cambio debe acordarse directamente con el profesional." },
        { "question": "¿Cómo contrato a un cerrajero en ProLocal?", "answer": "Compara los perfiles, revisa los servicios y la zona que declara cada profesional y contacta directamente con el que prefieras por teléfono, WhatsApp o email. No tienes que registrarte ni dejar tus datos, y ProLocal no cobra comisiones ni intermedia: el presupuesto y las condiciones del trabajo los acuerdas directamente con el profesional." },
        { "question": "Me he quedado fuera de casa, ¿qué hago?", "answer": "Busca en tu ciudad los perfiles que declaren el servicio de apertura de puertas y, si lo necesitas fuera de horario, los que indiquen Urgencias 24 h. Llama directamente y, antes de que se desplacen, pregunta el precio aproximado, el coste del desplazamiento y si hay recargo por urgencia o por horario nocturno. Recuerda que Urgencias 24 h es una información declarada por el profesional." }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "La información útil para comparar perfiles es concreta y trazable. Revisa lo que cada profesional declara y confirma directamente las condiciones del trabajo antes de aceptarlo.",
      "choose_points": [
        {
          "title": "Servicio declarado",
          "description": "Comprueba que el perfil indica el trabajo que necesitas; una categoría no implica que todos los perfiles realicen todas las especialidades."
        },
        {
          "title": "Zona de atención declarada",
          "description": "Revisa la ciudad y el radio o área que el profesional haya indicado antes de iniciar el contacto."
        },
        {
          "title": "Canal de contacto directo",
          "description": "Teléfono, WhatsApp o email, cuando estén visibles, permiten hablar directamente con el profesional sin que ProLocal intermedie en la contratación."
        },
        {
          "title": "Etiquetas explicadas por separado",
          "description": "Identidad verificada indica que ProLocal comprobó un DNI o CIF aportado. No garantiza calidad, resultado ni disponibilidad. Etiquetas como Urgencias 24 h son declaraciones del perfil y deben confirmarse directamente."
        },
        {
          "title": "Alcance y documentación",
          "description": "Antes de confirmar, pregunta qué trabajo se realizará, qué incluye el desplazamiento, si pueden ser necesarias piezas, si aplica una condición de urgencia y qué documentación se entregará."
        }
      ],
      "price_title": "El precio se confirma con el profesional",
      "price_intro": "ProLocal no fija tarifas, no ordena perfiles por precio y no gestiona presupuestos. Esta página no publica rangos: el importe depende del encargo concreto y debe aclararse directamente antes de contratar.",
      "price_factors": [
        "El tipo y el alcance del trabajo que se vaya a realizar.",
        "La necesidad de desplazamiento y las condiciones comunicadas para la visita.",
        "Las piezas o materiales que puedan ser necesarios.",
        "La condición de urgencia, si se solicita y el profesional la confirma.",
        "El desglose y la documentación que se acuerden antes de aceptar el servicio."
      ],
      "coverage_title": "Vigo, A Coruña y Santiago de Compostela",
      "coverage_intro": "El ámbito editorial inicial de Cerrajeros comprende Vigo, A Coruña y Santiago de Compostela. La cobertura efectiva no se presume por la ciudad: en una página con perfiles reales, cada ficha debe mostrar únicamente la zona de atención que haya declarado. Esta versión de demostración no acredita cobertura actual en ninguna de las tres ciudades.",
      "faqs": [
        {
          "question": "¿Cómo puedo encontrar un cerrajero para mi zona?",
          "answer": "Selecciona Vigo, A Coruña o Santiago de Compostela y revisa la zona de atención declarada en cada perfil publicado. Esta versión muestra perfiles de demostración, no oferta real."
        },
        {
          "question": "¿Qué servicios puede indicar un cerrajero en ProLocal?",
          "answer": "Puede declarar aperturas, cambio o reparación de cerraduras y soluciones de seguridad física, además de especialidades concretas como cajas fuertes si las ofrece."
        },
        {
          "question": "¿Qué significa Identidad verificada?",
          "answer": "Significa que ProLocal comprobó un DNI o CIF aportado por el perfil. No es una garantía de calidad, resultado, especialidad ni disponibilidad."
        },
        {
          "question": "¿Urgencias 24 h significa que habrá respuesta inmediata?",
          "answer": "No. Es una condición declarada por el perfil y no una promesa de ProLocal. Confirma directamente la disponibilidad y las condiciones antes de contratar."
        },
        {
          "question": "¿ProLocal fija precios o gestiona presupuestos?",
          "answer": "No. ProLocal es un directorio de contacto directo: no fija tarifas, no cobra por contacto y no interviene en el acuerdo entre cliente y profesional."
        },
        {
          "question": "¿Cuánto cuesta cambiar una cerradura en A Coruña?",
          "answer": "El coste depende del trabajo, el desplazamiento, las piezas y las condiciones acordadas. Esta categoría no publica rangos sin evidencia actual y atribuida; consúltalo directamente con el profesional cuando haya perfiles reales."
        },
        {
          "question": "¿Puedo solicitar instalación de alarmas conectadas en esta categoría?",
          "answer": "No. Las alarmas o sistemas conectados a una central receptora, centro de control o videovigilancia pertenecen a un ámbito de seguridad privada distinto de la cerrajería de acceso físico."
        },
        {
          "question": "¿Un cerrajero también repara persianas o puertas completas?",
          "answer": "No debe asumirse. Las persianas corresponden a Técnico de persianas y la reparación estructural de puertas, marcos o madera a Carpinteros o Albañiles, según el trabajo."
        },
        {
          "question": "¿Los perfiles de esta página se pueden contratar?",
          "answer": "No en esta versión. Los seis perfiles previstos son demostraciones y deben llevar el aviso Perfil de demostración — no corresponde a una oferta real."
        }
      ],
      "related_intro": "Si la incidencia afecta a persianas, motores o lamas, consulta Técnico de persianas. Para puertas, marcos, madera u obra asociada, busca Carpinteros o Albañiles según el alcance. Los sistemas de alarma o videovigilancia conectados deben tratarse con una empresa de seguridad autorizada, no como un servicio genérico de cerrajería.",
      "final_cta_title": "Contacto directo cuando haya perfiles reales publicados",
      "final_cta_copy": "Cuando ProLocal publique perfiles reales, podrás revisar sus servicios y zona declarados y contactar por los canales visibles en cada ficha. En esta página noindex, los seis perfiles son demostraciones: Perfil de demostración — no corresponde a una oferta real.",
      "safety_note": "ProLocal no ofrece instrucciones para abrir, forzar o manipular cerraduras, ni para eludir sistemas de seguridad. Ante una incidencia de acceso, contacta con un profesional que declare el servicio adecuado y confirma sus condiciones directamente."
    },
    "color": "#ddd0ef"
  },
  "fontaneros": {
    "slug": "fontaneros",
    "name": "Fontaneros",
    "url": "/fontaneros/",
    "navigationGroup": "Instalaciones y reparaciones",
    "metadata": {
      "h1": "Fontaneros para fugas, tuberías e instalaciones de agua",
      "title": "Fontaneros: fugas e instalaciones de agua | ProLocal",
      "description": "Encuentra fontaneros para fugas, grifos, tuberías e instalaciones de agua. Consulta perfiles, cobertura y contacto directo en ProLocal."
    },
    "keyword": {
      "primary": "fontanero",
      "secondary": [
        "fontanero Vigo",
        "fontanero A Coruña",
        "fontanero Santiago de Compostela",
        "fontanero urgente",
        "presupuesto fontanero",
        "fontanero cerca de mí",
        "opiniones fontanero",
        "precio fontanero"
      ],
      "semantic_variants": [
        "fontanería",
        "plomero",
        "técnico de fontanería",
        "reparación de tuberías",
        "fugas de agua"
      ],
      "intent": "Principalmente transaccional local: encontrar y contactar directamente con un fontanero; secundariamente comparación de presupuesto, cobertura, opiniones y urgencia antes de contactar.",
      "exclude_queries": [
        "cómo desatascar una tubería",
        "cómo cambiar un grifo",
        "qué herramienta usar para fontanería",
        "cómo soldar una tubería",
        "comprar grifos o piezas",
        "certificación, inspección o avería de gas",
        "reparación de calderas y climatización",
        "incidencia en la red pública de agua",
        "fontanero barato como promesa de precio"
      ]
    },
    "services": [
      "Detección y reparación de fugas de agua",
      "Reparación o sustitución de tuberías, llaves de paso y válvulas",
      "Instalación o reparación de grifería, cisternas, sanitarios, lavabos y fregaderos",
      "Conexión, reparación o sustitución de elementos de suministro y evacuación de agua",
      "Diagnóstico de averías de fontanería en vivienda, local o comunidad"
    ],
    "relatedSlugs": [
      "desatascos",
      "tecnico-calderas",
      "reformas-banos",
      "reformas-cocinas",
      "albaniles"
    ],
    "content": {
      "slug": "fontaneros",
      "name": "Fontaneros",
      "eyebrow": "Directorio de contacto directo · Demostración sin oferta real",
      "hero_title": "Fontaneros para fugas, tuberías e instalaciones de agua",
      "hero_intro": "Explora fichas de fontaneros y contacta directamente con el profesional que indique el servicio y la cobertura que necesitas. Esta página incluye seis fichas de ejemplo; cada una debe identificarse como Perfil de demostración — no corresponde a una oferta real. ProLocal no tramita presupuestos ni interviene en el acuerdo entre cliente y profesional.",
      "category_intro_title": "Qué trabajos corresponden a Fontaneros",
      "category_intro_paragraphs": [
        "Esta categoría reúne trabajos sobre instalaciones de agua y elementos sanitarios de una vivienda, local o comunidad: fugas de agua, tuberías, llaves de paso, grifería, cisternas y conexiones de suministro o evacuación. Consulta siempre el servicio concreto que figure en la ficha antes de contactar.",
        "Fontaneros no sustituye a categorías con una especialidad propia. Si el problema principal es una obstrucción o un saneamiento especializado, busca Desatascos. Para instalaciones, reparaciones, inspecciones o certificados de gas, acude a Instalador de gas; para la caldera, consulta Técnico de calderas, y para el resto del sistema térmico, un especialista que declare ese trabajo."
      ],
      "service_cards": [
        {
          "title": "Fugas de agua",
          "description": "Localización y reparación de incidencias de agua cuando el perfil declare este servicio."
        },
        {
          "title": "Tuberías, llaves y válvulas",
          "description": "Reparación o sustitución de tuberías, llaves de paso y válvulas vinculadas a la instalación de agua."
        },
        {
          "title": "Grifería y accesorios",
          "description": "Arreglo, sustitución o instalación de grifos y otros elementos de uso de agua declarados por el profesional."
        },
        {
          "title": "Cisternas e inodoros",
          "description": "Atención de averías o cambios en cisternas, inodoros y sus conexiones de fontanería."
        },
        {
          "title": "Lavabos y fregaderos",
          "description": "Instalación, reparación o conexión de lavabos, fregaderos y otros sanitarios, dentro del servicio declarado."
        },
        {
          "title": "Suministro y evacuación de agua",
          "description": "Intervenciones en conexiones y elementos de la red interior de suministro o evacuación del inmueble."
        },
        {
          "title": "Diagnóstico de averías de fontanería",
          "description": "Valoración profesional de una incidencia de agua antes de concretar alcance, materiales y posible intervención."
        }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "Utiliza la información visible de cada ficha para comprobar la adecuación al trabajo. Las etiquetas documentales describen documentación aportada y revisada; no son una garantía del resultado futuro.",
      "choose_points": [
        {
          "title": "Servicio declarado",
          "description": "Comprueba que la ficha mencione la avería o instalación que necesitas y no deduzcas especialidades que no aparezcan."
        },
        {
          "title": "Cobertura indicada",
          "description": "Verifica con el profesional si cubre tu dirección concreta antes de acordar una visita."
        },
        {
          "title": "Contacto directo",
          "description": "El teléfono, correo, mensajería o enlace mostrado permite hablar directamente con el profesional; ProLocal no gestiona la contratación."
        },
        {
          "title": "Etiquetas documentales",
          "description": "Identidad verificada indica DNI o CIF aportado; alta, seguro o certificación solo deben aparecer cuando se haya aportado el documento correspondiente."
        },
        {
          "title": "Alcance por escrito",
          "description": "Antes de aceptar, pide que se concreten el trabajo previsto, los materiales, el desplazamiento y cómo se comunicarían cambios necesarios."
        }
      ],
      "price_title": "Cómo plantear un presupuesto de fontanería",
      "price_intro": "ProLocal no publica tarifas ni fija precios. El importe debe solicitarse directamente al profesional y puede precisarse tras conocer la avería y el alcance del trabajo. Para comparar propuestas, pide que el alcance y las posibles variaciones queden claros por escrito.",
      "price_factors": [
        "Diagnóstico y alcance real de la avería o instalación",
        "Urgencia o intervención fuera del horario habitual, si el profesional la ofrece",
        "Desplazamiento hasta la dirección concreta",
        "Tiempo de mano de obra necesario",
        "Accesibilidad de tuberías, llaves o elementos sanitarios",
        "Piezas, materiales y necesidad de abrir o reponer acabados"
      ],
      "coverage_title": "Cobertura que debe confirmarse directamente",
      "coverage_intro": "La cobertura depende de lo que declare cada profesional y de su confirmación al contactar. Las ciudades piloto previstas son Vigo, A Coruña y Santiago de Compostela, pero esta página de demostración no acredita cobertura, disponibilidad ni perfiles reales en ninguna de ellas. Una página local solo debe publicarse cuando exista una lista útil de profesionales activos y contactables con cobertura específica declarada.",
      "faqs": [
        {
          "question": "¿Qué tipo de avería puede atender un fontanero?",
          "answer": "Fugas de agua, tuberías, llaves de paso, grifos, cisternas, sanitarios y conexiones de suministro o evacuación, siempre que el perfil declare ese servicio concreto."
        },
        {
          "question": "¿Cómo sé si un perfil cubre mi zona y el servicio que necesito?",
          "answer": "Revisa el servicio y la cobertura que aparezcan en la ficha y confírmalos directamente con el profesional para tu dirección y caso."
        },
        {
          "question": "¿Cómo contacto con un fontanero desde ProLocal?",
          "answer": "Usa la vía de contacto indicada en la ficha. ProLocal funciona como directorio y no tramita la petición, el presupuesto ni la contratación."
        },
        {
          "question": "¿Qué significa Identidad verificada en ProLocal?",
          "answer": "Significa que se aportó un DNI o CIF. Esta etiqueta acredita un documento aportado, no garantiza el resultado del trabajo."
        },
        {
          "question": "¿Qué significan las etiquetas de alta, seguro o certificación?",
          "answer": "Indican, respectivamente, que se aportó alta en RETA o CIF activo, una póliza de responsabilidad civil fechada o una acreditación concreta. Solo informan de la documentación aportada."
        },
        {
          "question": "¿Qué debería pedir antes de aceptar un presupuesto de fontanería?",
          "answer": "Solicita el alcance previsto, materiales, desplazamiento, importe total o forma de cálculo y cómo se comunicaría una variación antes de realizarla."
        },
        {
          "question": "¿Por qué puede cambiar un presupuesto tras revisar la avería?",
          "answer": "Una incidencia no visible, el acceso a la instalación o la necesidad de piezas y trabajos adicionales pueden modificar el alcance. Pide que cualquier cambio se explique antes de aceptarlo."
        },
        {
          "question": "¿Necesito Fontaneros o Desatascos?",
          "answer": "Busca Fontaneros para fugas, grifería, tuberías y conexiones de agua. Si el trabajo principal es eliminar una obstrucción o requiere saneamiento especializado, consulta Desatascos."
        },
        {
          "question": "¿Puedo usar esta categoría para una instalación o avería de gas o caldera?",
          "answer": "No como categoría general. Para gas, utiliza Instalador de gas y revisa la acreditación que corresponda; para calderas, calefacción o instalaciones térmicas, consulta la categoría específica."
        },
        {
          "question": "¿Qué significa que una ficha indique Urgencias 24 h?",
          "answer": "Es una declaración del propio perfil, no una promesa de ProLocal ni una confirmación de disponibilidad en ese momento. Contacta directamente para comprobarlo."
        }
      ],
      "related_intro": "¿Buscas otro especialista? Ve a Desatascos si la necesidad principal es un atasco; a Instalador de gas para trabajos regulados de gas; a Técnico de calderas si el problema está en ese equipo; y a Reformas de baños o Reformas de cocinas si el proyecto requiere una reforma integral o coordinación de gremios.",
      "final_cta_title": "Consulta el servicio y contacta directamente",
      "final_cta_copy": "Cuando haya fichas reales publicadas, revisa el servicio, la cobertura declarada y el canal de contacto antes de escribir al profesional. Las seis fichas incluidas en esta página son solo una referencia de interfaz: Perfil de demostración — no corresponde a una oferta real.",
      "safety_note": "Si hay agua cerca de una instalación eléctrica, riesgo inmediato para personas o daños graves, evita manipular la instalación y busca asistencia de emergencia adecuada. Para olor o posible fuga de gas, no uses esta categoría como sustituto del canal de emergencia o de la empresa suministradora."
    },
    "color": "#f6c6b7"
  },
  "electricistas": {
    "slug": "electricistas",
    "name": "Electricistas",
    "url": "/electricistas/",
    "navigationGroup": "Instalaciones y reparaciones",
    "metadata": {
      "h1": "Electricistas en Vigo, A Coruña y Santiago de Compostela",
      "title": "Electricistas en Vigo, A Coruña y Santiago | ProLocal",
      "description": "Encuentra electricistas en Vigo, A Coruña y Santiago. Consulta servicios y cobertura de cada perfil, con contacto directo y etiquetas de documentos aportados."
    },
    "keyword": {
      "primary": "electricistas",
      "secondary": [
        "electricista Vigo",
        "electricista A Coruña",
        "electricista Santiago de Compostela",
        "electricista urgente",
        "electricista 24 horas",
        "presupuesto electricista",
        "electricista cerca de mí",
        "opiniones electricista"
      ],
      "semantic_variants": [
        "técnico electricista",
        "instalador eléctrico",
        "reparación eléctrica",
        "averías eléctricas",
        "instalación eléctrica",
        "certificado de instalación eléctrica"
      ],
      "intent": "Principalmente transaccional local: encontrar y contactar directamente con un electricista para una avería, instalación, revisión o documentación eléctrica. Las consultas de precio, duración y normativa son adyacentes y no deben desplazar el propósito de directorio.",
      "exclude_queries": [
        "curso de electricista",
        "FP electricista",
        "empleo electricista",
        "sueldo electricista",
        "herramientas electricista",
        "cómo instalar un enchufe",
        "esquema instalación eléctrica",
        "manual REBT",
        "teléfono distribuidora",
        "tarifa de luz",
        "factura de luz",
        "apagón de zona",
        "avería de red",
        "alta tensión",
        "ingeniería eléctrica industrial"
      ]
    },
    "services": [
      "Averías eléctricas en vivienda o pequeño local declaradas por el profesional",
      "Instalación, sustitución o reparación declarada de tomas, interruptores e iluminación",
      "Revisión, adecuación o trabajos declarados en cuadro eléctrico, protecciones y circuitos",
      "Instalación o renovación eléctrica parcial declarada para vivienda, comunidad o pequeño comercio",
      "Certificado de instalación eléctrica y trámites asociados cuando el perfil indique que realiza ese alcance"
    ],
    "relatedSlugs": [
      "placas-solares",
      "antenistas",
      "aire-acondicionado",
      "tecnico-calderas",
      "reformas-cocinas",
      "reformas-banos",
      "albaniles"
    ],
    "content": {
      "slug": "electricistas",
      "name": "Electricistas",
      "eyebrow": "Directorio de contacto directo",
      "hero_title": "Electricistas en Vigo, A Coruña y Santiago de Compostela",
      "hero_intro": "Explora perfiles de electricistas locales para necesidades de avería, instalación o revisión, consulta el servicio y la cobertura que cada perfil declara y contacta directamente cuando haya perfiles reales publicados. Esta vista usa seis perfiles de demostración: cada uno debe identificarse como \"Perfil de demostración — no corresponde a una oferta real\" y no representa disponibilidad, cobertura ni contacto operativo.",
      "category_intro_title": "Para encontrar un profesional de electricidad según tu necesidad",
      "category_intro_paragraphs": [
        "Esta categoría ayuda a localizar electricistas para trabajos eléctricos concretos en vivienda, comunidad o pequeño local, como una avería declarada, puntos de luz, mecanismos, circuitos o una renovación parcial de la instalación. ProLocal organiza la información de los perfiles para facilitar una comparación y un contacto directo; no recoge solicitudes, no compara ofertas y no interviene en el acuerdo entre cliente y profesional.",
        "Los servicios, especialidades y zonas que aparecen en un perfil son los que el profesional haya declarado. Las etiquetas documentales describen documentos aportados y comprobados, cuando existan, pero no constituyen una recomendación, una garantía de calidad ni una confirmación de disponibilidad actual. Para una instalación sujeta a documentación, conviene confirmar directamente el alcance del trabajo y qué documentación puede emitir el profesional."
      ],
      "service_cards": [
        {
          "title": "Averías eléctricas",
          "description": "Perfiles que declaren diagnóstico y reparación de fallos en la instalación, tomas o circuitos de una vivienda o pequeño local."
        },
        {
          "title": "Tomas, interruptores e iluminación",
          "description": "Instalación, sustitución o reparación declarada de mecanismos y puntos eléctricos, incluidos enchufes, interruptores y puntos de luz."
        },
        {
          "title": "Cuadros, protecciones y circuitos",
          "description": "Revisión, adecuación o trabajos declarados sobre el cuadro eléctrico, sus protecciones y los circuitos de la instalación."
        },
        {
          "title": "Instalación eléctrica parcial",
          "description": "Trabajos declarados de instalación o renovación eléctrica en viviendas, comunidades o pequeños comercios; no sustituye una reforma integral."
        },
        {
          "title": "Revisión de instalación eléctrica",
          "description": "Revisiones declaradas para valorar el estado o el alcance de una instalación eléctrica concreta, sin asumir un resultado ni un cumplimiento normativo."
        },
        {
          "title": "Certificado de instalación y trámites",
          "description": "Perfiles que indiquen realizar certificados o documentación vinculada a instalaciones de baja tensión; confirma siempre el alcance y la documentación aplicable."
        }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "Usa la ciudad o zona de cobertura declarada como primer criterio y compárala con el trabajo que necesitas. Después, consulta el perfil y aclara las condiciones directamente con la persona profesional.",
      "choose_points": [
        {
          "title": "Zona de cobertura declarada",
          "description": "Comprueba que el perfil indique atención en tu ciudad o zona antes de iniciar el contacto."
        },
        {
          "title": "Servicio concreto",
          "description": "Revisa si el perfil declara averías, mecanismos, cuadro eléctrico, instalación parcial, revisión o documentación relacionada."
        },
        {
          "title": "Etiquetas documentales",
          "description": "Identidad verificada, alta de autónomo o empresa, seguro RC aportado y certificación aportada describen documentos comprobados por ProLocal cuando se muestran."
        },
        {
          "title": "Instalaciones con documentación",
          "description": "Si necesitas puesta en servicio o certificado, pregunta si asume ese alcance, qué documentación puede emitir y si corresponde al tipo de instalación."
        },
        {
          "title": "Disponibilidad y condiciones",
          "description": "Las especialidades y la etiqueta Urgencias 24h, si aparecen, son declaraciones del perfil; confirma horario, disponibilidad y condiciones directamente."
        }
      ],
      "price_title": "Qué puede influir en el presupuesto",
      "price_intro": "ProLocal no publica importes ni calcula presupuestos para esta categoría. El precio y las condiciones se acuerdan directamente con el profesional; pedir el alcance por escrito ayuda a entender qué se incluye.",
      "price_factors": [
        "El problema observado y el alcance concreto del trabajo.",
        "Los materiales o componentes necesarios, si los hubiera.",
        "El desplazamiento y la zona de atención declarada.",
        "El horario o la necesidad de atención que se acuerde directamente.",
        "Los impuestos y cualquier documentación final vinculada a la instalación."
      ],
      "coverage_title": "Vigo, A Coruña y Santiago de Compostela",
      "coverage_intro": "Estas son las tres ciudades piloto asociadas a la categoría. La cobertura efectiva debe comprobarse en cada perfil y las páginas locales solo deben publicarse cuando exista una selección real, activa y contactable. En esta versión noindex, los seis perfiles son demostraciones y no acreditan cobertura real en ninguna ciudad.",
      "faqs": [
        {
          "question": "¿Cómo encuentro un electricista que atienda mi zona en Vigo, A Coruña o Santiago de Compostela?",
          "answer": "Empieza por la ciudad o zona de cobertura declarada y revisa el servicio indicado en cada perfil. Confirma directamente si puede atender tu ubicación antes de acordar el trabajo."
        },
        {
          "question": "¿Qué servicios de averías e instalaciones muestra cada perfil?",
          "answer": "Un perfil puede declarar averías, tomas e iluminación, cuadros y circuitos, instalación parcial, revisiones o certificados. La lista no implica que todos los perfiles realicen todos los servicios."
        },
        {
          "question": "¿Cómo sé si un perfil declara atención de urgencias o 24 horas?",
          "answer": "Busca el atributo Urgencias 24h cuando esté visible. Es una declaración del profesional, no una disponibilidad verificada, por lo que debes confirmar atención y condiciones directamente."
        },
        {
          "question": "¿Qué significan las etiquetas documentales de un perfil?",
          "answer": "Identidad verificada indica DNI o CIF aportado. Alta de autónomo o empresa, seguro RC aportado y certificación aportada describen documentos comprobados por ProLocal cuando figuran, sin garantizar calidad ni resultado."
        },
        {
          "question": "¿Qué debo confirmar si necesito un certificado de instalación eléctrica?",
          "answer": "Pregunta si el profesional realiza el trabajo concreto, qué documentación puede emitir y si la empresa instaladora corresponde al tipo de instalación. La documentación requerida depende del caso."
        },
        {
          "question": "¿Qué información conviene dar al contactar por una avería eléctrica?",
          "answer": "Describe el problema que observas, la zona afectada, el tipo de inmueble y el horario en que podrías recibir atención. Evita manipular la instalación para intentar diagnosticarla."
        },
        {
          "question": "¿Qué factores pueden cambiar el presupuesto de un electricista?",
          "answer": "Pueden influir el alcance, los materiales, el desplazamiento, el horario, los impuestos y la documentación final. Solicita que estos elementos se concreten directamente con el profesional."
        },
        {
          "question": "¿ProLocal gestiona presupuestos, pagos o la disponibilidad del profesional?",
          "answer": "No. ProLocal es un directorio de contacto directo: la disponibilidad, el presupuesto, el pago y el acuerdo se tratan entre cliente y profesional."
        },
        {
          "question": "¿Esta página muestra electricistas disponibles para contratar?",
          "answer": "No en esta versión. Los seis perfiles visibles son de demostración, deben llevar el aviso \"Perfil de demostración — no corresponde a una oferta real\" y no representan servicios, contactos ni disponibilidad reales."
        }
      ],
      "related_intro": "Si tu necesidad principal no es una intervención eléctrica específica, consulta la categoría relacionada adecuada: placas solares para instalaciones fotovoltaicas, antenistas para recepción de televisión, aire acondicionado para refrigeración, técnico de calderas para esos equipos, instalador de gas para instalaciones de gas, y reformas de cocinas, baños o albañiles cuando se trate de una obra integral.",
      "final_cta_title": "Compara la información del perfil antes de contactar",
      "final_cta_copy": "Cuando ProLocal publique perfiles reales, podrás revisar sus servicios y cobertura declarados y usar su vía de contacto directa, sin registro de cliente ni intermediación de ProLocal. En esta demostración, no contactes los seis perfiles mostrados: deben identificarse como \"Perfil de demostración — no corresponde a una oferta real\".",
      "safety_note": "Si hay riesgo inmediato, chispas, olor a quemado, daños visibles o un problema en el cuadro, no manipules la instalación. Busca ayuda profesional y, cuando corresponda, contacta con los servicios de emergencia o con tu distribuidora ante una incidencia de red o un corte general."
    },
    "color": "#cfeef2"
  },
  "antenistas": {
    "slug": "antenistas",
    "name": "Antenistas",
    "url": "/antenistas/",
    "navigationGroup": "Instalaciones y reparaciones",
    "metadata": {
      "h1": "Antenistas: profesionales para TDT, antenas y parabólicas",
      "title": "Antenistas para TDT y parabólicas | ProLocal",
      "description": "Encuentra perfiles de antenistas para TDT, antenas individuales, comunidades y parabólicas. Consulta servicios declarados y contacta directamente."
    },
    "keyword": {
      "primary": "antenistas",
      "secondary": [
        "antenista",
        "antenista cerca de mí",
        "presupuesto antenista",
        "precio antenista",
        "tarifas antenista",
        "opiniones antenista"
      ],
      "semantic_variants": [
        "antenas",
        "TDT",
        "parabólica",
        "instalación de antenas",
        "reparación de antenas",
        "antena colectiva",
        "antena individual",
        "señal de televisión",
        "medición de señal",
        "distribución de TV"
      ],
      "intent": "Local y comercial: encontrar, comparar de forma básica y contactar directamente con un profesional para una incidencia, instalación, adaptación o mantenimiento de recepción y distribución de televisión. La intención de precio es informacional-comercial y debe resolverse en una guía separada, no con tarifas inventadas en el directorio.",
      "exclude_queries": [
        "cómo orientar una antena",
        "cómo sintonizar canales",
        "frecuencias o canales TDT",
        "amplificador TDT",
        "antena interior",
        "comprar antena",
        "mejor antena",
        "reparar televisor",
        "decodificador",
        "lista de canales",
        "streaming",
        "router",
        "Wi-Fi",
        "fibra"
      ]
    },
    "services": [
      "Diagnóstico de problemas de recepción de TDT o de distribución de señal en vivienda, local o comunidad.",
      "Reparación, sustitución o adaptación de elementos de antena individual o colectiva, tras diagnóstico.",
      "Instalación, reorientación o adaptación de antenas terrestres de televisión.",
      "Instalación, orientación, reparación o distribución de señal de antena parabólica o satélite, solo si el perfil declara esa especialidad.",
      "Medición y ajuste de señal, coaxial, tomas, amplificación, cabeceras o distribución de TV dentro del servicio y habilitación declarados.",
      "Mantenimiento de instalaciones de recepción de televisión para comunidades, cuando el perfil lo ofrezca."
    ],
    "relatedSlugs": [],
    "content": {
      "slug": "antenistas",
      "name": "Antenistas",
      "eyebrow": "Directorio de contacto directo · Demostración noindex",
      "hero_title": "Antenistas: profesionales para TDT, antenas y parabólicas",
      "hero_intro": "Consulta cómo ProLocal presenta perfiles de antenistas para incidencias de señal de televisión, antenas individuales o colectivas y parabólicas. Esta página es una demostración noindex: los seis perfiles visibles deben identificarse como Perfil de demostración — no corresponde a una oferta real. En una página con perfiles reales, los servicios, la zona de cobertura y los datos de contacto procederían de lo declarado en cada ficha para facilitar el contacto directo, sin intermediación de ProLocal.",
      "category_intro_title": "Cuándo buscar un antenista",
      "category_intro_paragraphs": [
        "Un antenista puede intervenir cuando el problema está relacionado con la recepción o la distribución de la señal de televisión: TDT, antena terrestre, antena individual o colectiva, parabólica, tomas, cableado coaxial, amplificación o medición de señal. Antes de solicitar información, conviene indicar si la incidencia afecta solo a una vivienda, a un local o a más vecinos del edificio.",
        "Esta categoría no cubre averías de cuadros, enchufes o circuitos eléctricos, que corresponden a Electricistas cuando el origen es la alimentación eléctrica. Tampoco reúne reparaciones de televisores o decodificadores, ni incidencias de fibra, router, Wi-Fi, cámaras, alarmas o videoporteros. Los servicios que aparecen en perfiles reales se mostrarían únicamente como servicios declarados por cada profesional."
      ],
      "service_cards": [
        {
          "title": "Diagnóstico de recepción de TDT",
          "description": "Identificación de posibles incidencias en la recepción o distribución de señal de televisión en una vivienda, local o comunidad, según el servicio declarado en el perfil."
        },
        {
          "title": "Antena individual",
          "description": "Reparación, sustitución, instalación o actualización de elementos de una antena individual tras una valoración técnica."
        },
        {
          "title": "Antena colectiva",
          "description": "Revisión, reparación, adaptación o mantenimiento de instalaciones de recepción compartidas cuando el profesional declare este ámbito de trabajo."
        },
        {
          "title": "Antenas terrestres",
          "description": "Instalación, reorientación o adaptación de antenas terrestres de televisión dentro del servicio y la habilitación que el perfil indique."
        },
        {
          "title": "Parabólica y satélite",
          "description": "Instalación, orientación, reparación o distribución de señal por satélite solo cuando el perfil declare esta especialidad."
        },
        {
          "title": "Medición y distribución de señal",
          "description": "Medición y ajuste de señal, tomas, cableado coaxial, amplificación, cabeceras o distribución de TV cuando formen parte del servicio declarado."
        },
        {
          "title": "Mantenimiento para comunidades",
          "description": "Mantenimiento de instalaciones de recepción de televisión en comunidades de propietarios si el profesional lo ofrece expresamente."
        }
      ],
      "choose_title": "Qué revisar antes de elegir",
      "choose_intro": "En un directorio, la información de cada ficha ayuda a comparar el alcance declarado del servicio. Los documentos y etiquetas deben leerse como hechos concretos aportados y comprobados, no como una recomendación de ProLocal ni una garantía del resultado.",
      "choose_points": [
        {
          "title": "Alcance de la incidencia",
          "description": "Indica si la falta de señal afecta solo a tu vivienda, a un local o a varios vecinos. Esta distinción ayuda a explicar si la instalación puede ser individual o colectiva."
        },
        {
          "title": "Especialidad declarada",
          "description": "Comprueba si el perfil declara TDT, parabólica o satélite, medición de señal, distribución de TV o mantenimiento. No debe presumirse una especialidad no indicada."
        },
        {
          "title": "Zona de cobertura declarada",
          "description": "Revisa la ciudad o zona que el profesional haya declarado cubrir. Una zona mostrada no implica disponibilidad inmediata."
        },
        {
          "title": "Datos de contacto y actualización",
          "description": "Valora que la ficha incluya una forma de contacto directo y una fecha de actualización. ProLocal no intermedia la contratación ni emite presupuestos."
        },
        {
          "title": "Documentación pertinente",
          "description": "Para encargos regulados o de mayor alcance, pregunta por la inscripción aplicable, el seguro y la documentación final cuando corresponda. Una etiqueta documental solo acredita el documento revisado y su alcance indicado."
        }
      ],
      "price_title": "De qué depende un presupuesto de antenista",
      "price_intro": "No se publican precios, rangos ni tarifas en esta página de categoría. Un presupuesto por escrito debe partir del diagnóstico y concretar el trabajo, los materiales incluidos y las condiciones aplicables al encargo.",
      "price_factors": [
        "El diagnóstico técnico y el alcance real de la incidencia.",
        "Si la instalación es individual o colectiva y el número de tomas o elementos implicados.",
        "La accesibilidad del punto de trabajo y las condiciones de seguridad necesarias.",
        "Los equipos, cableado, piezas o elementos de distribución que puedan ser necesarios.",
        "Si la intervención se refiere a TDT, antena terrestre o señal por satélite.",
        "El desplazamiento y la zona de cobertura que el profesional declare."
      ],
      "coverage_title": "Cobertura y tipo de instalación",
      "coverage_intro": "La cobertura debe figurar solo cuando un perfil real la haya declarado. Para orientar la consulta, señala si se trata de una vivienda, un local o una comunidad y si la incidencia se limita a tu espacio o afecta al edificio. La consulta oficial de TDT permite revisar la cobertura; una valoración profesional determina la alternativa adecuada en cada caso. Los perfiles de esta demostración no acreditan cobertura real.",
      "faqs": [
        {
          "question": "¿Cuándo necesito un antenista por un problema de TDT?",
          "answer": "Cuando la incidencia puede estar en la antena, la señal o su distribución, especialmente si afecta a una instalación individual o al edificio. La guía oficial de TDT remite a un instalador registrado para estos casos."
        },
        {
          "question": "¿Debo indicar si el fallo afecta a toda la comunidad?",
          "answer": "Sí. Explicar si el problema afecta solo a tu vivienda o a más vecinos ayuda a diferenciar una posible instalación individual de una colectiva."
        },
        {
          "question": "¿Qué servicios puede declarar un antenista en ProLocal?",
          "answer": "Puede declarar servicios de TDT, antenas individuales o colectivas, parabólica o satélite, medición de señal, distribución de TV y mantenimiento. Cada ficha debe especificar su propio alcance."
        },
        {
          "question": "¿Cómo puedo comprobar si una empresa figura en el Registro de instaladores?",
          "answer": "Puedes consultar la relación publicada por el Ministerio y contrastar los datos de la empresa. La coincidencia debe verificarse con la información concreta de quien presta el servicio."
        },
        {
          "question": "¿Qué conviene preguntar antes de aceptar un presupuesto?",
          "answer": "Pide una descripción del problema, del trabajo y materiales incluidos, el alcance individual o comunitario, la documentación final si procede y las condiciones aplicables. No elijas solo por el importe."
        },
        {
          "question": "¿De qué depende el precio de un antenista?",
          "answer": "Depende del diagnóstico, la accesibilidad, el alcance individual o colectivo, los equipos necesarios, el tipo de señal y el desplazamiento. Esta página no estima importes."
        },
        {
          "question": "¿Un antenista también instala antenas parabólicas?",
          "answer": "Solo cuando el profesional declare esa especialidad. La solución por satélite puede valorarse en zonas sin cobertura TDT tras una revisión técnica."
        },
        {
          "question": "¿Puedo comprobar la cobertura de TDT antes de contactar?",
          "answer": "Sí. La información oficial de TDT ofrece una consulta de cobertura. Esa consulta no sustituye la valoración de la instalación concreta ni confirma qué servicio prestará un profesional."
        },
        {
          "question": "¿Qué significa una etiqueta de identidad o documento aportado?",
          "answer": "Significa únicamente que el perfil aportó el documento indicado y que ProLocal comprobó ese hecho según su flujo de revisión. No garantiza calidad, precio, disponibilidad ni resultado del trabajo."
        },
        {
          "question": "¿Un antenista resuelve problemas de router, Wi-Fi o televisor?",
          "answer": "No necesariamente. La fibra, el router y el Wi-Fi son servicios distintos; la reparación del televisor o decodificador también queda fuera de esta categoría. Si el origen es un circuito o alimentación eléctrica, corresponde valorar Electricistas."
        }
      ],
      "related_intro": "Relaciona esta categoría con Electricistas únicamente si identificas un fallo de alimentación eléctrica, siempre que esa categoría esté publicada. Las necesidades de router, Wi-Fi, fibra, reparación de televisores, cámaras, alarmas, videoporteros o trabajos de cubierta deben dirigirse a la categoría o recurso específico que corresponda, sin mezclar servicios distintos.",
      "final_cta_title": "Consulta la información de cada ficha antes de contactar",
      "final_cta_copy": "En una página con inventario real, compara los servicios, especialidades, zona de cobertura y documentos que cada profesional declare, y utiliza el contacto directo de la ficha. Esta versión solo ilustra ese recorrido: cada tarjeta debe incluir el aviso Perfil de demostración — no corresponde a una oferta real.",
      "safety_note": "Perfil de demostración — no corresponde a una oferta real. Esta página debe permanecer en noindex,follow, fuera del sitemap y sin marcado de listado, negocio, reseñas, ofertas, precios, disponibilidad o FAQ que presente los perfiles como reales. ProLocal no garantiza la calidad, la habilitación, el precio, la cobertura ni el resultado de ningún trabajo."
    },
    "color": "#e7e1d7"
  },
  "tecnico-persianas": {
    "slug": "tecnico-persianas",
    "name": "Técnicos de persianas",
    "url": "/tecnico-persianas/",
    "navigationGroup": "Instalaciones y reparaciones",
    "metadata": {
      "h1": "Técnicos de persianas: encuentra profesionales cerca de ti",
      "title": "Técnicos de persianas | Reparación, instalación y motorización | ProLocal",
      "description": "Encuentra técnicos de persianas para reparar, instalar o motorizar persianas. Consulta servicios, zonas y etiquetas documentales, y contacta directamente."
    },
    "keyword": {
      "primary": "técnico de persianas",
      "secondary": [
        "técnicos de persianas",
        "reparación de persianas",
        "reparar persianas",
        "instalación de persianas",
        "motorización de persianas",
        "persianas eléctricas",
        "persianista",
        "presupuesto técnico de persianas",
        "técnico de persianas cerca de mí"
      ],
      "semantic_variants": [
        "persianas",
        "reparación persianas",
        "motorización persianas",
        "estores",
        "cinta de persiana",
        "recogedor",
        "eje",
        "lamas",
        "guías",
        "motor tubular"
      ],
      "intent": "Principalmente transaccional local: localizar y contactar directamente con un profesional para diagnosticar, reparar, instalar, sustituir o motorizar una persiana. Hay intención mixta de presupuesto, cercanía y opiniones, e intención informacional de precio que debe resolverse en una guía separada, no en la landing de directorio.",
      "exclude_queries": [
        "cómo arreglar una persiana",
        "cómo cambiar cinta de persiana",
        "manual de montaje de persiana",
        "comprar persiana sin instalación",
        "recambios de persiana",
        "motor de persiana precio",
        "curso técnico de persianas",
        "trabajo técnico de persianas",
        "normativa de persianas",
        "reparación de electrodomésticos"
      ]
    },
    "services": [
      "Diagnóstico y reparación de persianas manuales",
      "Cambio de cinta, recogedor, eje, poleas, lamas, guías o topes",
      "Desatasco, recolocación y mantenimiento de persianas enrollables",
      "Instalación o sustitución de persianas",
      "Motorización y ajuste o reparación de accionamientos motorizados",
      "Atención de estores o cierres comerciales solo cuando el profesional lo declare expresamente"
    ],
    "relatedSlugs": [
      "electricistas",
      "cerrajeros",
      "albaniles",
      "impermeabilizaciones",
      "carpinteros"
    ],
    "content": {
      "slug": "tecnico-persianas",
      "name": "Técnicos de persianas",
      "eyebrow": "Directorio de contacto directo · Página de demostración noindex",
      "hero_title": "Técnicos de persianas: encuentra el perfil adecuado para tu persiana",
      "hero_intro": "Explora cómo se organizarían los perfiles de técnicos de persianas para reparación, instalación o motorización y contacta directamente cuando haya profesionales reales publicados. Esta es una página de demostración noindex: los seis perfiles mostrados deben llevar el aviso exacto «Perfil de demostración — no corresponde a una oferta real» y no representan disponibilidad, cobertura ni servicios reales.",
      "category_intro_title": "Qué puede cubrir un técnico de persianas",
      "category_intro_paragraphs": [
        "Esta categoría reúne perfiles que pueden declarar trabajos sobre persianas manuales o motorizadas: diagnóstico de una incidencia, reparación de mecanismos, sustitución de componentes, mantenimiento, instalación y motorización. Antes de contactar, conviene comparar el servicio declarado con el tipo de persiana, el síntoma observable y el inmueble donde se encuentra.",
        "ProLocal es un directorio de contacto directo, no un intermediario de presupuestos. Los servicios, zonas, disponibilidad y especialidades solo se mostrarán cuando cada perfil los haya declarado. Esta página usa perfiles de demostración y no debe interpretarse como una oferta activa ni como confirmación de que haya técnicos en una ciudad concreta."
      ],
      "service_cards": [
        {
          "title": "Reparación de persianas manuales",
          "description": "Para incidencias declaradas en el funcionamiento de persianas manuales, como dificultad al subir, bajar o enrollar, sin diagnosticar el problema a distancia."
        },
        {
          "title": "Cintas, recogedores y mecanismos",
          "description": "Sustitución o ajuste de cinta, recogedor, eje, poleas, topes y otros componentes mecánicos cuando el perfil indique que trabaja con ellos."
        },
        {
          "title": "Lamas, guías y persianas atascadas",
          "description": "Reparación, recolocación o sustitución de lamas y elementos de guía en persianas enrollables, según material y tipología declarados."
        },
        {
          "title": "Mantenimiento de persianas",
          "description": "Revisión y ajuste de componentes de la persiana cuando el profesional incluya el mantenimiento entre sus servicios declarados."
        },
        {
          "title": "Instalación o sustitución de persianas",
          "description": "Colocación o reemplazo de una persiana cuando el perfil lo declare. Puedes consultar compatibilidad, producto y documentación disponible directamente con el profesional."
        },
        {
          "title": "Motorización y accionamientos",
          "description": "Motorización, ajuste o reparación de accionamientos motorizados como especialidad declarada. Las intervenciones sobre instalación eléctrica fija pueden requerir además un electricista o una empresa habilitada."
        },
        {
          "title": "Cierres enrollables comerciales",
          "description": "Atención a cierres enrollables de local únicamente si el perfil declara expresamente esta especialidad. Los trabajos centrados en puertas, cerraduras o seguridad se orientan a Cerrajeros."
        }
      ],
      "choose_title": "Cómo comparar perfiles de técnicos de persianas",
      "choose_intro": "Cuando se publiquen perfiles reales, usa la información visible para valorar si el servicio, la tipología atendida y la zona declarada encajan con tu caso. Las etiquetas documentales describen documentos aportados; no son una recomendación ni garantizan el resultado del trabajo.",
      "choose_points": [
        {
          "title": "Servicio que coincide con tu necesidad",
          "description": "Revisa si el perfil declara reparación, sustitución, instalación, mantenimiento o motorización de persianas."
        },
        {
          "title": "Tipo de persiana y material",
          "description": "Comprueba si indica experiencia con persianas manuales o motorizadas y con el material o sistema que necesitas atender."
        },
        {
          "title": "Inmueble y especialidades",
          "description": "Consulta si el perfil declara atención a viviendas, comunidades o locales, y cierres comerciales solo cuando figure expresamente."
        },
        {
          "title": "Zona y forma de contacto declaradas",
          "description": "Verifica la cobertura que el profesional haya indicado y utiliza el teléfono, WhatsApp o correo publicado para contactar de forma directa."
        },
        {
          "title": "Etiquetas documentales visibles",
          "description": "Identidad verificada, Alta de autónomo/empresa, Seguro RC aportado y Certificación aportada reflejan documentos aportados y revisados según la etiqueta; no acreditan calidad, disponibilidad ni habilitación general."
        }
      ],
      "price_title": "Qué puede influir en una reparación o instalación",
      "price_intro": "ProLocal no publica tarifas, rangos ni recargos sin información verificable. Al pedir información directamente a un profesional, estos factores ayudan a describir el caso sin anticipar un coste.",
      "price_factors": [
        "El tipo de incidencia y los componentes que puedan requerir revisión o sustitución.",
        "Si la persiana es manual o motorizada y si existe un alcance eléctrico adicional.",
        "El material, las dimensiones y la accesibilidad al cajón o al mecanismo.",
        "La necesidad y disponibilidad de recambios compatibles.",
        "Si procede reparar un elemento concreto o sustituir la persiana o el accionamiento.",
        "El desplazamiento, el horario solicitado y la complejidad del desmontaje."
      ],
      "coverage_title": "Cobertura y perfiles en esta demostración",
      "coverage_intro": "La categoría podrá mostrar perfiles reales únicamente con zona de cobertura y contacto declarados. Aunque la arquitectura contempla Vigo, A Coruña y Santiago de Compostela como posibles destinos iniciales, esta demostración no confirma perfiles, servicio, cobertura ni atención en ninguna de esas ciudades. Los seis perfiles de la interfaz deben identificarse de forma visible como «Perfil de demostración — no corresponde a una oferta real»; la página debe permanecer noindex.",
      "faqs": [
        {
          "question": "¿Qué profesional puede atender una persiana que no sube o se queda atascada?",
          "answer": "Un técnico de persianas puede declarar reparación de mecanismos, lamas, guías o cintas. Compara el servicio indicado en el perfil y describe el síntoma al contactar, sin asumir un diagnóstico previo."
        },
        {
          "question": "¿Un técnico de persianas puede cambiar una cinta, un eje o unas lamas?",
          "answer": "Puede ofrecer ese tipo de trabajo si lo declara en su perfil. Revisa el servicio y consulta directamente si atiende tu sistema y material concretos."
        },
        {
          "question": "¿Cómo buscar un profesional para motorizar una persiana manual?",
          "answer": "Busca perfiles que declaren motorización y explica el tipo de persiana, las medidas aproximadas y el inmueble. No se debe presumir compatibilidad ni alcance eléctrico sin valoración profesional."
        },
        {
          "question": "¿Qué datos conviene indicar por una persiana motorizada que no responde?",
          "answer": "Puedes indicar el tipo de persiana, el síntoma observable, si el motor responde o no, el inmueble, la ciudad y, si quieres, fotos compartidas directamente con el profesional."
        },
        {
          "question": "¿Cuándo puede hacer falta además un electricista?",
          "answer": "Si la incidencia afecta a alimentación, cableado fijo, cuadro eléctrico o requiere un nuevo circuito, corresponde consultarlo también con Electricistas. No se debe atribuir habilitación eléctrica a un perfil sin documentación revisada."
        },
        {
          "question": "¿Cómo sé si un perfil atiende mi tipo de persiana?",
          "answer": "Revisa sus servicios y especialidades declarados, incluidos sistema manual o motorizado, material e inmueble atendido cuando figuren. Si falta un dato, consúltalo directamente."
        },
        {
          "question": "¿Qué significan Identidad verificada y Certificación aportada?",
          "answer": "Identidad verificada indica documentación de identidad aportada. Certificación aportada indica que se entregó una certificación. Ninguna etiqueta equivale por sí sola a una garantía de calidad, disponibilidad o habilitación universal."
        },
        {
          "question": "¿De qué depende el coste de reparar una persiana?",
          "answer": "Puede variar por la incidencia, el sistema manual o motorizado, material, medidas, accesibilidad, recambios, desplazamiento y alcance del trabajo. Esta página no estima precios."
        },
        {
          "question": "¿Un técnico de persianas atiende cierres enrollables de un local?",
          "answer": "Solo cuando el perfil declare expresamente esa especialidad. Si la necesidad se centra en puertas, cerraduras o seguridad de acceso, consulta la categoría de Cerrajeros."
        },
        {
          "question": "¿Qué hago si necesito atención urgente porque la persiana no cierra?",
          "answer": "Cuando existan perfiles reales, filtra por la etiqueta autodeclarada Urgencias 24h si está disponible y contacta directamente. Esa etiqueta no confirma atención inmediata ni disponibilidad."
        }
      ],
      "related_intro": "Según la necesidad principal, consulta Electricistas para instalación eléctrica fija o alimentación; Cerrajeros para puertas, cerraduras y seguridad de acceso; Albañiles o Impermeabilizaciones para cajones de obra, humedades y revestimientos; y Carpinteros para necesidades de carpintería o ventana. Estas categorías no son equivalentes a la reparación de persianas.",
      "final_cta_title": "Explora la estructura de la categoría",
      "final_cta_copy": "Esta página es un prototipo noindex con seis perfiles de demostración, no una oferta de servicios. Cuando ProLocal publique perfiles reales y contactables, podrás revisar sus servicios y cobertura declarados y contactar con ellos directamente, sin intermediación de la plataforma.",
      "safety_note": "No manipules cableado fijo, cuadros eléctricos ni componentes eléctricos si existe riesgo. Para intervenciones eléctricas sujetas a normativa, consulta a un profesional o empresa instaladora habilitada; la categoría de Técnicos de persianas no presume esa habilitación."
    },
    "color": "#f2d7b6"
  },
  "reformas-banos": {
    "slug": "reformas-banos",
    "name": "Reformas de baños",
    "url": "/reformas-banos/",
    "navigationGroup": "Reformas y construcción",
    "metadata": {
      "h1": "Profesionales para reformas de baños",
      "title": "Reformas de baños: encuentra profesionales | ProLocal",
      "description": "Reformas de baños en Vigo, A Coruña y Santiago. Consulta servicios y contacta directamente con profesionales locales en ProLocal."
    },
    "keyword": {
      "primary": "reformas de baños",
      "secondary": [
        "reforma de baños",
        "reforma baño",
        "reforma integral de baño",
        "reforma parcial de baño",
        "presupuesto reformas de baños",
        "precio reformas de baños",
        "cambio de bañera por plato de ducha",
        "reformas de baños Vigo",
        "reformas de baños A Coruña",
        "reformas de baños Santiago de Compostela"
      ],
      "semantic_variants": [
        "renovar baño",
        "reforma de aseo",
        "sanitarios",
        "mampara",
        "alicatado",
        "revestimientos de baño",
        "redistribución de baño",
        "mueble de baño",
        "plato de ducha",
        "fontanería de baño"
      ],
      "intent": "Mixta con predominio transaccional local: localizar y contactar directamente con profesionales para una reforma de baño, tras reducir incertidumbre sobre alcance, presupuesto, permisos y coordinación de oficios.",
      "exclude_queries": [
        "cómo alicatar un baño",
        "cómo instalar un plato de ducha",
        "ideas de decoración de baño",
        "medidas de un baño",
        "curso de reformas",
        "trabajo de reformista",
        "comprar mampara",
        "comprar muebles de baño",
        "comprar azulejos",
        "reparar fuga",
        "arreglar cisterna",
        "desatasco urgente",
        "cambiar un enchufe",
        "boletín eléctrico"
      ]
    },
    "services": [
      "Reforma integral de baño declarada por el profesional",
      "Reforma parcial de baño declarada por el profesional",
      "Cambio de bañera por plato de ducha",
      "Sustitución de sanitarios, grifería, mampara o mueble dentro de una reforma",
      "Revestimientos, pavimento o pintura dentro de una reforma",
      "Coordinación de partidas y gestión de residuos solo cuando el perfil lo declare"
    ],
    "relatedSlugs": [
      "fontaneros",
      "electricistas",
      "albaniles",
      "impermeabilizaciones",
      "carpinteros",
      "reformas-cocinas"
    ],
    "content": {
      "slug": "reformas-banos",
      "name": "Reformas de baños",
      "eyebrow": "Directorio de contacto directo",
      "hero_title": "Profesionales para reformas de baños",
      "hero_intro": "Explora perfiles de demostración para entender cómo ProLocal organiza una reforma de baño: servicios declarados, zona de trabajo y contacto directo. Esta página no presenta ofertas reales ni intermedia en presupuestos.",
      "category_intro_title": "Planifica una reforma de baño con el alcance claro",
      "category_intro_paragraphs": [
        "Una reforma de baño puede ser integral o parcial. Según el proyecto, puede reunir desmontaje, redistribución no estructural, renovación de acabados, sanitarios, mobiliario, mampara y la coordinación de distintas partidas. El alcance concreto debe figurar en los servicios declarados y en el presupuesto escrito de cada profesional.",
        "Esta categoría sirve para encontrar perfiles dedicados a transformar un baño como conjunto. Una fuga urgente, un desatasco o una reparación aislada corresponden a otras categorías; los cambios de fontanería o electricidad que formen parte de la reforma deben identificarse con claridad y ejecutarse por el profesional competente cuando proceda."
      ],
      "service_cards": [
        {
          "title": "Reforma integral de baño",
          "description": "Transformación planificada del baño que puede coordinar desmontaje, distribución no estructural, instalaciones y acabados, según el alcance declarado."
        },
        {
          "title": "Reforma parcial de baño",
          "description": "Actualización de elementos como revestimientos, pavimento, sanitarios, grifería, mueble o mampara cuando forman parte de una mejora del baño."
        },
        {
          "title": "Cambio de bañera por plato de ducha",
          "description": "Intervención parcial para sustituir la bañera, cuyo presupuesto debe concretar medidas, acabados, trabajos asociados y estado previo de las instalaciones."
        },
        {
          "title": "Redistribución no estructural",
          "description": "Adaptación de la disposición del baño dentro de una reforma, siempre que el alcance y las necesidades técnicas se definan antes de contratar."
        },
        {
          "title": "Revestimientos y pavimentos",
          "description": "Renovación de alicatados, revestimientos, suelos o pintura como parte de un proyecto de reforma de baño, no como una guía de ejecución."
        },
        {
          "title": "Mejoras de accesibilidad",
          "description": "Adaptaciones del baño, como el paso de bañera a ducha, que deben describirse por partidas y valorarse según el espacio y las instalaciones existentes."
        },
        {
          "title": "Coordinación de partidas de reforma",
          "description": "Organización de trabajos de albañilería, fontanería, electricidad, mobiliario o mamparas cuando el perfil declare que los coordina dentro de la obra."
        }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "ProLocal facilita el contacto directo, no recoge solicitudes de presupuesto ni recomienda perfiles. Al comparar opciones, conviene confirmar por escrito el alcance y los datos que cada profesional publica o declara.",
      "choose_points": [
        {
          "title": "Alcance que encaja con tu proyecto",
          "description": "Comprueba que los servicios declarados responden a una reforma integral, parcial o cambio de bañera por ducha, según lo que necesitas."
        },
        {
          "title": "Presupuesto desglosado",
          "description": "Pide partidas, cantidades o superficies, materiales y calidades, fechas, impuestos, forma de pago, garantía y residuos cuando apliquen."
        },
        {
          "title": "Gremios y coordinación",
          "description": "Aclara qué trabajos intervienen, quién realiza cada partida y quién coordina la obra si hay fontanería, electricidad, albañilería o montaje."
        },
        {
          "title": "Contacto y zona declarada",
          "description": "Revisa las vías de contacto directo y el área de servicio que el perfil haya indicado; no deduzcas cobertura a partir de una búsqueda."
        },
        {
          "title": "Etiquetas con significado limitado",
          "description": "Si un perfil muestra una etiqueta documental, debe describir el hecho concreto comprobado. No equivale a una garantía de calidad, plazo o resultado."
        }
      ],
      "price_title": "Qué puede influir en un presupuesto de reforma de baño",
      "price_intro": "No se muestran precios ni rangos sin una metodología actual y trazable. Un presupuesto solo es comparable si describe el mismo alcance y deja claras sus inclusiones y exclusiones.",
      "price_factors": [
        "El alcance integral o parcial de la reforma.",
        "La redistribución prevista y el estado de las instalaciones existentes.",
        "Los metros, los accesos, la demolición y la protección de zonas comunes.",
        "Las calidades, los materiales y su disponibilidad.",
        "Las modificaciones de fontanería o electricidad que requiera el proyecto.",
        "El plazo acordado, la gestión de residuos y los trámites o tributos locales aplicables."
      ],
      "coverage_title": "Cobertura y perfiles de demostración",
      "coverage_intro": "Vigo, A Coruña y Santiago de Compostela son ciudades piloto de esta categoría, pero esta página no afirma cobertura real en ninguna de ellas. Los seis perfiles que se muestren son únicamente demostraciones y no corresponden a una oferta real. Una página local solo debe publicarse cuando existan perfiles reales, públicos, distintos, contactables y con área de servicio declarada para esa ciudad.",
      "faqs": [
        {
          "question": "¿Qué incluye una reforma de baño completa?",
          "answer": "Puede reunir desmontaje, redistribución, instalaciones, albañilería, revestimientos, sanitarios, mobiliario y mampara. El alcance real debe quedar detallado por escrito en el presupuesto."
        },
        {
          "question": "¿Cómo comparo presupuestos para reformar un baño?",
          "answer": "Compara el mismo alcance: partidas, cantidades o superficies, materiales, calidades, fechas, impuestos, pagos, garantía y residuos. Pide que las exclusiones también consten por escrito."
        },
        {
          "question": "¿Cuánto cuesta reformar un baño?",
          "answer": "No hay una cifra universal y ProLocal no publica rangos sin metodología. El importe depende del alcance, las instalaciones, los materiales, la demolición, los residuos, los plazos y los trámites que procedan."
        },
        {
          "question": "¿Necesito permiso para reformar el baño?",
          "answer": "Depende del municipio, el inmueble y la intervención. Antes de comenzar, consulta la sede de tu ayuntamiento y confirma con el profesional el alcance que requiere trámite."
        },
        {
          "question": "¿Qué ocurre si la reforma cambia enchufes o iluminación cerca de la ducha?",
          "answer": "Los baños con bañera o ducha tienen requisitos eléctricos específicos. Confirma el proyecto con el profesional competente; una reforma de baño no sustituye una intervención eléctrica independiente cuando esta sea necesaria."
        },
        {
          "question": "¿Cambiar la bañera por un plato de ducha es una reforma de baño?",
          "answer": "Sí, suele ser una reforma parcial. Conviene definir las medidas, los acabados, el estado de las instalaciones y las partidas incluidas antes de aceptar un presupuesto."
        },
        {
          "question": "¿Quién retira los escombros de la obra?",
          "answer": "Debe indicarse expresamente en el presupuesto quién gestiona los residuos y en qué condiciones. No debe darse por hecho que esa partida está incluida."
        },
        {
          "question": "¿Una reforma de baño cubre una fuga urgente o un desatasco?",
          "answer": "No como servicio principal. Una incidencia aislada de fontanería o un desatasco corresponde a la categoría específica; puede formar parte de una reforma solo si está incluido en el proyecto contratado."
        },
        {
          "question": "¿Qué significa una etiqueta documental en un perfil?",
          "answer": "Indica únicamente el hecho documental concreto que ProLocal haya comprobado según sus reglas, como identidad o un documento aportado. No garantiza calidad, disponibilidad, plazos ni el resultado de la obra."
        }
      ],
      "related_intro": "Si buscas resolver una partida concreta en lugar de transformar el baño como conjunto, explora Fontaneros, Electricistas, Albañiles, Impermeabilizaciones o Carpinteros. Para una obra en otra estancia, consulta Reformas de cocinas.",
      "final_cta_title": "Conoce cómo funciona el contacto directo",
      "final_cta_copy": "Los perfiles de esta página son demostraciones. Cuando haya perfiles reales publicados, ProLocal mostrará sus servicios y zona declarados junto con sus vías de contacto directo, sin intermediar en la conversación ni en el presupuesto.",
      "safety_note": "Esta página se publica como demostración y debe usar noindex,follow. Los seis perfiles mostrados deben llevar, en tarjeta, detalle y CTA, el aviso: Perfil de demostración — no corresponde a una oferta real."
    },
    "color": "#d7e5cf"
  },
  "reformas-cocinas": {
    "slug": "reformas-cocinas",
    "name": "Reformas de cocinas",
    "url": "/reformas-cocinas/",
    "navigationGroup": "Reformas y construcción",
    "metadata": {
      "h1": "Encuentra profesionales para reformar tu cocina",
      "title": "Profesionales para reformas de cocinas — ProLocal",
      "description": "Encuentra profesionales de reformas de cocinas y contacta directamente. Consulta servicios, trabajos y etiquetas documentales cuando estén aportadas."
    },
    "keyword": {
      "primary": "reformas de cocinas",
      "secondary": [
        "reforma de cocina",
        "empresa de reformas de cocinas",
        "profesionales para reformar cocina",
        "presupuesto reforma de cocina",
        "precio reforma de cocina",
        "reforma integral de cocina",
        "reforma parcial de cocina"
      ],
      "semantic_variants": [
        "reforma cocina",
        "muebles cocina",
        "encimera",
        "cocina nueva"
      ],
      "intent": "Comercial local con evaluación previa: encontrar y contactar directamente con profesionales para una reforma de cocina; las consultas de precio, presupuesto, opiniones y cercanía reflejan comparación, no una demanda de tutorial.",
      "exclude_queries": [
        "cómo reformar una cocina",
        "cómo poner azulejos",
        "cómo cambiar un enchufe",
        "instalar campana",
        "ideas de cocinas",
        "cocina pequeña",
        "colores de cocina",
        "medidas de isla",
        "comprar muebles de cocina",
        "comprar encimeras",
        "electrodomésticos de cocina",
        "avería de agua",
        "avería eléctrica",
        "avería de gas"
      ]
    },
    "services": [
      "Reforma integral de cocina, solo si el perfil la declara",
      "Reforma parcial de cocina, solo si el perfil la declara",
      "Medición, distribución y planificación de la intervención",
      "Demolición, retirada y gestión de residuos cuando se ofrezca",
      "Revestimientos, suelos, pintura y trabajos de albañilería declarados",
      "Mobiliario, encimera y montaje de elementos de cocina",
      "Coordinación o ejecución declarada de fontanería, saneamiento, electricidad y ventilación/extracción",
      "Adaptación para accesibilidad, solo si el perfil la declara"
    ],
    "relatedSlugs": [],
    "content": {
      "slug": "reformas-cocinas",
      "name": "Reformas de cocinas",
      "eyebrow": "Directorio de contacto directo · Página de demostración",
      "hero_title": "Encuentra profesionales para reformar tu cocina",
      "hero_intro": "Explora cómo se presentarán los perfiles de reformas de cocinas, revisa los servicios que cada uno declara y contacta directamente cuando haya perfiles reales publicados. Esta página usa seis perfiles de demostración y no corresponde a una oferta real.",
      "category_intro_title": "Qué puede incluir una reforma de cocina",
      "category_intro_paragraphs": [
        "Una reforma de cocina puede ser integral o parcial. Según el alcance que declare cada profesional, puede contemplar la medición y planificación, desmontaje, acabados, mobiliario, encimera y la coordinación de las partidas necesarias. Antes de contactar, conviene comprobar qué trabajos realiza directamente el perfil y cuáles coordina.",
        "Esta categoría está pensada para intervenciones planificadas en una cocina existente. Para una fuga, un cambio aislado de grifo o desagüe, consulta Fontaneros; para una avería o modificación eléctrica puntual, Electricistas; para trabajos aislados de mobiliario, Carpinteros; y para instalación, modificación o certificación de gas, Instalador de gas. Las compras de muebles, encimeras o electrodomésticos sin obra no forman parte de esta categoría."
      ],
      "service_cards": [
        {
          "title": "Reforma integral de cocina",
          "description": "Intervención coordinada sobre varias partidas de la cocina. Confirma en el perfil el alcance concreto y quién asume cada trabajo."
        },
        {
          "title": "Reforma parcial de cocina",
          "description": "Actualización limitada a una zona, elementos o acabados de la cocina, según el servicio declarado por cada profesional."
        },
        {
          "title": "Medición y planificación",
          "description": "Toma de medidas y planteamiento de la intervención cuando el profesional lo ofrezca. No sustituye un proyecto ni una validación técnica."
        },
        {
          "title": "Desmontaje y gestión de residuos",
          "description": "Retirada de elementos existentes y gestión asociada solo cuando estén incluidos expresamente en el alcance declarado."
        },
        {
          "title": "Revestimientos y acabados",
          "description": "Suelos, revestimientos, pintura y pequeños trabajos de albañilería vinculados a la reforma, si el perfil los declara."
        },
        {
          "title": "Mobiliario y encimera",
          "description": "Montaje o integración de mobiliario y encimera dentro de una reforma de cocina declarada; no incluye la compra aislada de productos."
        },
        {
          "title": "Instalaciones y extracción coordinadas",
          "description": "Coordinación o ejecución declarada de fontanería, electricidad, saneamiento o ventilación. Verifica qué partida realiza cada persona y quién corresponde para los trabajos regulados."
        }
      ],
      "choose_title": "Qué comparar antes de contactar",
      "choose_intro": "ProLocal no ordena perfiles como mejores ni garantiza resultados. Usa la información declarada para preparar una conversación concreta y pide que el alcance quede definido por escrito.",
      "choose_points": [
        {
          "title": "Alcance de la intervención",
          "description": "Comprueba si el perfil describe una reforma integral, parcial o una partida concreta y si coincide con lo que necesitas."
        },
        {
          "title": "Presupuesto desglosado",
          "description": "Pide que identifique mediciones, partidas, materiales, impuestos, plazos y forma de pago para poder comparar propuestas."
        },
        {
          "title": "Responsables de cada partida",
          "description": "Aclara quién ejecuta o coordina fontanería, electricidad, ventilación, mobiliario y acabados."
        },
        {
          "title": "Instalaciones, extracción y trámites",
          "description": "Consulta cómo se abordarán las instalaciones existentes y la extracción de la cocina, y confirma ante el ayuntamiento el trámite que pudiera corresponder a tu caso."
        },
        {
          "title": "Información y etiquetas del perfil",
          "description": "Revisa los servicios declarados y, si aparecen etiquetas documentales, el documento que indican. Una etiqueta no es una garantía de calidad ni de resultado."
        }
      ],
      "price_title": "Qué puede hacer variar el presupuesto de una reforma de cocina",
      "price_intro": "No hay un precio orientativo único para todas las cocinas. El importe depende del alcance y de las condiciones concretas de la obra; compara presupuestos detallados directamente con los profesionales.",
      "price_factors": [
        "La superficie, la distribución existente y los cambios previstos.",
        "El estado de las instalaciones y la necesidad de modificarlas.",
        "La demolición, los acabados, el acceso a la vivienda y la gestión de residuos.",
        "El mobiliario, la encimera y los electrodomésticos incluidos o excluidos.",
        "Los materiales elegidos y la solución prevista para ventilación y extracción.",
        "Los trámites, el proyecto técnico o el calendario de ejecución que puedan ser necesarios."
      ],
      "coverage_title": "Perfiles y cobertura mostrados con transparencia",
      "coverage_intro": "Esta versión de la página es una demostración no indexable. Los seis perfiles que pueda mostrar la interfaz deben llevar el aviso exacto \"Perfil de demostración — no corresponde a una oferta real\". No representan profesionales disponibles, cobertura real, precios, reseñas, acreditaciones ni garantías. Cuando haya perfiles reales, ProLocal mostrará únicamente su cobertura y servicios declarados.",
      "faqs": [
        {
          "question": "¿Qué servicios puede incluir una reforma de cocina?",
          "answer": "Puede incluir una reforma integral o parcial, planificación, desmontaje, acabados, mobiliario y coordinación de instalaciones, pero solo si cada profesional lo declara. Confirma siempre el alcance concreto."
        },
        {
          "question": "¿Cómo comparo presupuestos para reformar una cocina?",
          "answer": "Compara propuestas con partidas, mediciones, materiales, impuestos, plazos y forma de pago identificados. Pide que el alcance y las condiciones queden por escrito."
        },
        {
          "question": "¿Qué debo confirmar sobre fontanería, electricidad y extracción?",
          "answer": "Pregunta qué instalaciones se revisarán o modificarán, quién ejecuta cada partida y cómo se resolverá la extracción de vapores. Los trabajos regulados deben abordarse con quien corresponda."
        },
        {
          "question": "¿Necesito comunicación previa o licencia para reformar mi cocina?",
          "answer": "Depende de la actuación y del municipio. Consulta la sede de tu ayuntamiento antes de iniciar la obra, especialmente si afecta a distribución, instalaciones, elementos comunes o estructura."
        },
        {
          "question": "¿Cómo sé quién puede coordinar una reforma integral?",
          "answer": "Revisa si el perfil declara reforma integral y pregunta qué partidas ejecuta directamente, cuáles coordina y cómo se define el responsable de cada una."
        },
        {
          "question": "¿Qué significa Identidad verificada en un perfil de ProLocal?",
          "answer": "Indica que se ha revisado la identidad conforme al proceso aplicable de ProLocal. No implica una recomendación ni garantiza la calidad, disponibilidad o resultado de una obra."
        },
        {
          "question": "¿Qué significa Seguro RC aportado o Certificación aportada?",
          "answer": "Indica que el perfil ha aportado el documento que describe la etiqueta. No equivale a que ProLocal garantice la obra ni a una habilitación para cualquier trabajo."
        },
        {
          "question": "¿Por qué no se muestra un precio único para todas las reformas?",
          "answer": "Porque el coste cambia según distribución, instalaciones, materiales, demolición, mobiliario, accesos, residuos, trámites y alcance. Un presupuesto requiere revisar el caso concreto."
        },
        {
          "question": "¿Cómo contacto con un profesional desde ProLocal?",
          "answer": "En los perfiles reales publicados, los canales de contacto directo estarán visibles en la ficha. ProLocal no centraliza la solicitud ni negocia presupuestos. En esta página, los perfiles son solo de demostración."
        }
      ],
      "related_intro": "Si tu necesidad es una intervención aislada o pertenece a otra especialidad, explora Fontaneros, Electricistas, Carpinteros, Albañiles, Instalador de gas o Reformas de baños. Cada categoría tiene un alcance propio para ayudarte a llegar al tipo de profesional adecuado.",
      "final_cta_title": "Explora perfiles cuando haya oferta real publicada",
      "final_cta_copy": "ProLocal es un directorio de contacto directo. En esta demostración no hay oferta real: los seis perfiles deben identificarse como demostración. Cuando se publiquen perfiles reales, podrás revisar sus servicios y cobertura declarados y contactar desde su ficha sin que ProLocal intermedie en el presupuesto.",
      "safety_note": "Una reforma de cocina puede afectar a instalaciones, ventilación y requisitos municipales. Esta página no sustituye la valoración de un profesional competente ni la consulta del trámite aplicable ante el ayuntamiento."
    },
    "color": "#ddd0ef"
  },
  "albaniles": {
    "slug": "albaniles",
    "name": "Albañiles",
    "url": "/albaniles/",
    "navigationGroup": "Reformas y construcción",
    "metadata": {
      "h1": "Encuentra albañiles en Vigo, A Coruña y Santiago de Compostela",
      "title": "Albañiles en Vigo, A Coruña y Santiago | ProLocal",
      "description": "Busca albañiles para reformas y reparaciones en Vigo, A Coruña y Santiago. Revisa servicios y contacta con cada profesional directamente."
    },
    "keyword": {
      "primary": "albañiles",
      "secondary": [
        "albañil",
        "albañilería",
        "reformas de albañilería",
        "trabajos de albañilería",
        "obra menor",
        "presupuesto albañil",
        "precio albañil",
        "opiniones albañil"
      ],
      "semantic_variants": [
        "albañilería",
        "obra menor",
        "reformas albañilería",
        "trabajos de albañilería",
        "albanil",
        "albaniles"
      ],
      "intent": "Local, comercial y de selección: encontrar y contactar directamente con un albañil para una reparación, partida de reforma u obra de albañilería en una ciudad piloto. La intención de precio es informacional secundaria y debe ir a una guía independiente, no al listado.",
      "exclude_queries": [
        "empleo de albañil",
        "sueldo de albañil",
        "curso o formación de albañilería",
        "herramientas y materiales de albañilería",
        "tutoriales de cómo hacer albañilería",
        "cálculo estructural",
        "proyecto de arquitectura",
        "licencia garantizada",
        "dictamen sobre legalidad de una obra",
        "instalaciones eléctricas, de gas, calefacción o fontanería como si fueran albañilería",
        "precio o tarifa de albañil como respuesta dentro del listado"
      ]
    },
    "services": [
      "levantado o modificación de tabiques no estructurales",
      "reparación de muros y elementos de fábrica no estructurales",
      "enfoscados, revocos y revestimientos",
      "preparación de soportes, soleras y recrecidos",
      "solados y alicatados",
      "pequeñas demoliciones interiores no estructurales",
      "reposición localizada de acabados de albañilería"
    ],
    "relatedSlugs": [
      "reformas-banos",
      "reformas-cocinas",
      "fontaneros",
      "desatascos",
      "electricistas",
      "pintores",
      "carpinteros",
      "manitas",
      "impermeabilizaciones"
    ],
    "content": {
      "slug": "albaniles",
      "name": "Albañiles",
      "eyebrow": "Directorio de contacto directo · Demostración · Noindex",
      "hero_title": "Encuentra albañiles en Vigo, A Coruña y Santiago de Compostela",
      "hero_intro": "Consulta cómo se presenta un directorio de albañilería para trabajos de fábrica, reformas y reparaciones. Esta vista es noindex e incluye seis perfiles de demostración: Perfil de demostración — no corresponde a una oferta real. ProLocal facilita el contacto directo cuando un perfil real publica sus datos; no solicita, compara ni negocia presupuestos.",
      "category_intro_title": "Trabajos de albañilería para partidas concretas",
      "category_intro_paragraphs": [
        "La categoría de Albañiles reúne perfiles que pueden declarar trabajos materiales de construcción, reforma o reparación, como tabiques no estructurales, muros de fábrica, enfoscados, preparación de soportes, solados, alicatados y reposición localizada de acabados. El alcance concreto debe revisarse siempre en cada ficha: no todos los profesionales declaran los mismos servicios.",
        "Describe directamente al profesional la partida que necesitas, las medidas aproximadas, el estado previo, los materiales o calidades deseados, el acceso y el plazo previsto. Si decides compartir fotografías, hazlo directamente con ese profesional. ProLocal no intermedia el encargo ni convierte tu consulta en una solicitud distribuida a varios contactos."
      ],
      "service_cards": [
        {
          "title": "Tabiques no estructurales",
          "description": "Levantado, modificación o reparación de tabiques interiores cuando el perfil declare este alcance y la actuación no afecte a estructura, instalaciones o elementos comunes."
        },
        {
          "title": "Muros y fábrica no estructural",
          "description": "Reparación localizada de muros y elementos de fábrica no estructurales, así como trabajos de mampostería declarados por el profesional."
        },
        {
          "title": "Enfoscados y revestimientos",
          "description": "Aplicación o reparación de enfoscados, revocos y otros revestimientos de albañilería cuando figuren entre los servicios declarados."
        },
        {
          "title": "Soleras y preparación de soportes",
          "description": "Preparación de bases, recrecidos y soleras para una partida de obra, conforme al alcance que el profesional detalle."
        },
        {
          "title": "Solados y alicatados",
          "description": "Colocación o reposición de pavimentos y revestimientos cerámicos como partida aislada. Para una reforma integral de baño o cocina, consulta su categoría específica."
        },
        {
          "title": "Demoliciones interiores no estructurales",
          "description": "Pequeñas demoliciones interiores solo si no afectan a estructura, instalaciones, elementos comunes ni condiciones que requieran revisión técnica o municipal."
        },
        {
          "title": "Reparación de acabados de albañilería",
          "description": "Reposición localizada de remates, revestimientos y acabados de fábrica. La pintura final, las instalaciones y los tratamientos específicos de impermeabilización pertenecen a otras categorías."
        }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "Compara el alcance que cada perfil declara y concreta la partida antes de hablar de presupuesto. Las etiquetas documentales acreditan únicamente la documentación indicada; no son una recomendación de ProLocal ni una garantía de calidad, resultado, precio o disponibilidad.",
      "choose_points": [
        {
          "title": "Servicio declarado",
          "description": "Comprueba que el perfil mencione la partida concreta que necesitas, en lugar de asumir que realiza cualquier trabajo de albañilería."
        },
        {
          "title": "Zona de atención declarada",
          "description": "Revisa la ciudad o zona que el propio perfil indique. La presencia de una ciudad en esta página no acredita cobertura real de todos los perfiles."
        },
        {
          "title": "Alcance y condiciones por escrito",
          "description": "Pide que queden claras las mediciones, partidas, materiales, calidades, plazos, retirada de residuos, impuestos y forma de pago."
        },
        {
          "title": "Etiquetas documentales",
          "description": "Identidad verificada significa que se comprobó un DNI o CIF aportado. Las etiquetas de alta, seguro o certificación solo informan de la documentación recibida cuando aparezcan."
        },
        {
          "title": "Límites técnicos y permisos",
          "description": "Si puede afectarse estructura, instalaciones, elementos comunes, protección del inmueble o la configuración arquitectónica, verifica el caso con un técnico competente y el ayuntamiento correspondiente."
        }
      ],
      "price_title": "Cómo plantear y comparar un presupuesto de albañilería",
      "price_intro": "ProLocal no publica tarifas ni calcula presupuestos en esta categoría. Para comparar propuestas, pide que todas describan la misma partida y revisa los conceptos por escrito, no solo el importe final. Una guía editorial de precios solo debe publicarse cuando cuente con investigación específica y fecha de revisión.",
      "price_factors": [
        "Alcance, mediciones y estado previo de la zona de trabajo.",
        "Materiales, calidades y acabados previstos.",
        "Acceso, protección de zonas comunes y condiciones del inmueble.",
        "Demolición, retirada y gestión de residuos cuando procedan.",
        "Coordinación con otros oficios y reposición de acabados posteriores.",
        "Permisos o exigencias técnicas aplicables a la actuación."
      ],
      "coverage_title": "Cobertura y perfiles de demostración",
      "coverage_intro": "La categoría está planteada para Vigo, A Coruña y Santiago de Compostela, pero esta página no afirma inventario ni disponibilidad en ninguna ciudad. En esta vista se muestran seis perfiles de demostración, claramente identificados con el aviso \"Perfil de demostración — no corresponde a una oferta real\". Una futura página local solo debería publicarse e indexarse cuando existan al menos cinco perfiles activos y contactables de tres profesionales o entidades distintos, con cobertura declarada y revisión manual de sus datos.",
      "faqs": [
        {
          "question": "¿Qué trabajos puede realizar un albañil?",
          "answer": "Puede declarar tabiques, muros no estructurales, revestimientos, solados, alicatados y reparaciones de fábrica. Revisa siempre el alcance de cada perfil, porque no todos ofrecen los mismos trabajos."
        },
        {
          "question": "¿Cómo funciona el contacto en ProLocal?",
          "answer": "Cuando un perfil real publica sus datos, el contacto es directo con ese profesional. ProLocal no gestiona la solicitud, no reparte encargos y no cobra por el contacto."
        },
        {
          "question": "¿Los perfiles visibles en esta página están disponibles para contratar?",
          "answer": "No. Esta es una página noindex con seis perfiles de demostración. Cada uno debe indicar: Perfil de demostración — no corresponde a una oferta real."
        },
        {
          "question": "¿Qué información conviene facilitar al pedir un presupuesto?",
          "answer": "Explica la partida, las medidas aproximadas, el estado previo, materiales o calidades, accesos y plazo deseado. Conviene acordar después el detalle por escrito."
        },
        {
          "question": "¿Cómo comparo presupuestos de albañilería?",
          "answer": "Compara las mismas mediciones, partidas, materiales, plazos, impuestos, retirada de residuos y condiciones de pago. No valores solo el total."
        },
        {
          "question": "¿Puede tirarse un tabique sin más comprobaciones?",
          "answer": "No debe asumirse. Antes hay que comprobar si afecta a estructura, instalaciones, elementos comunes o permisos; según el caso, consulta a un técnico competente y al ayuntamiento."
        },
        {
          "question": "¿Necesito permiso para una obra de albañilería?",
          "answer": "Depende de la actuación y del municipio. Verifica el caso ante el ayuntamiento correspondiente; en Vigo, consulta el canal municipal de trámites urbanísticos."
        },
        {
          "question": "¿Qué significa la etiqueta Identidad verificada?",
          "answer": "Indica que ProLocal comprobó un DNI o CIF aportado. No significa que la plataforma garantice calidad, resultado, precio, legalidad de la obra ni disponibilidad."
        },
        {
          "question": "¿La albañilería incluye fontanería o electricidad?",
          "answer": "No. Las instalaciones de agua, desagüe, gas, calefacción o electricidad corresponden a sus categorías profesionales. Un albañil puede declarar la reparación del acabado posterior, no la instalación."
        }
      ],
      "related_intro": "Si tu necesidad principal no es una partida de fábrica, explora Reformas de baños para una reforma integral de baño, Reformas de cocinas para una estancia completa, Fontaneros para instalaciones de agua, Electricistas para trabajos eléctricos, Manitas para montar muebles y pequeños arreglos, Pintores para acabados e Impermeabilizaciones para problemas de estanqueidad.",
      "final_cta_title": "Consulta la demostración del directorio",
      "final_cta_copy": "Esta vista muestra cómo ProLocal separa servicios declarados, zona de atención, contacto directo y etiquetas documentales. Los seis perfiles visibles son de demostración y no corresponden a una oferta real; no envíes solicitudes de contratación desde esta página.",
      "safety_note": "Las intervenciones que afecten a estructura, configuración arquitectónica, uso, elementos protegidos, instalaciones o elementos comunes pueden requerir proyecto, licencia, autorización y/o revisión de un técnico competente. Confirma el caso concreto con el ayuntamiento y los profesionales que correspondan."
    },
    "color": "#f6c6b7"
  },
  "pintores": {
    "slug": "pintores",
    "name": "Pintores",
    "url": "/pintores/",
    "navigationGroup": "Reformas y construcción",
    "metadata": {
      "h1": "Pintores en Vigo, A Coruña y Santiago de Compostela",
      "title": "Pintores en Vigo, A Coruña y Santiago | ProLocal",
      "description": "Encuentra pintores locales, revisa sus servicios y contacta directamente. ProLocal publica cobertura real en sus ciudades piloto y etiquetas documentales claras."
    },
    "keyword": {
      "primary": "pintores",
      "secondary": [
        "pintor Vigo",
        "pintor A Coruña",
        "pintor en Vigo",
        "pintor en A Coruña",
        "pintor Santiago de Compostela",
        "presupuesto pintor",
        "pintor cerca de mí",
        "opiniones pintor",
        "precio pintor",
        "tarifas pintor"
      ],
      "semantic_variants": [
        "pintura",
        "pintores de casas",
        "pintura interior",
        "pintura exterior",
        "lacado",
        "pintor decorador",
        "barniz",
        "lasur",
        "retirada de gotelé",
        "papel pintado"
      ],
      "intent": "Principalmente transaccional local: encontrar, comparar y contactar directamente a un pintor en la ciudad; intención secundaria de presupuesto y de factores de precio.",
      "exclude_queries": [
        "cómo pintar una pared",
        "pintar yo mismo",
        "qué rodillo usar",
        "mezclar pintura",
        "colores para salón",
        "pintura de coches",
        "pintura de carrocerías",
        "pintura industrial especializada",
        "pintura de embarcaciones",
        "eliminación de amianto",
        "reparación de humedad activa",
        "impermeabilizar una cubierta"
      ]
    },
    "services": [
      "Pintura de paredes y techos interiores",
      "Pintura de fachadas y paramentos exteriores",
      "Pintura, barniz o lasur de carpintería y superficies de madera, metal o plástico",
      "Imprimación, lijado, saneado y regularización ligera del soporte",
      "Retirada o alisado de gotelé",
      "Papel pintado y revestimientos de fibra de vidrio o vinílicos",
      "Lacado, solo cuando el perfil declare su alcance"
    ],
    "relatedSlugs": [
      "reformas-banos",
      "reformas-cocinas",
      "albaniles",
      "impermeabilizaciones",
      "carpinteros",
      "limpieza-domestica"
    ],
    "content": {
      "slug": "pintores",
      "name": "Pintores",
      "eyebrow": "Directorio de contacto directo",
      "hero_title": "Pintores en Vigo, A Coruña y Santiago de Compostela",
      "hero_intro": "Explora cómo localizar y contactar directamente con profesionales de pintura para viviendas, comunidades o pequeños negocios. Esta página es una demostración noindex: los seis perfiles visibles deben identificarse como Perfil de demostración — no corresponde a una oferta real; no acreditan disponibilidad, cobertura ni precios reales.",
      "category_intro_title": "Servicios de pintura para definir bien el encargo",
      "category_intro_paragraphs": [
        "La categoría Pintores reúne servicios declarables de pintura interior y exterior, preparación ligera del soporte y acabados en carpintería u otras superficies. Antes de contactar, conviene describir el inmueble, las zonas que se quieren pintar, el estado de las superficies, el acabado deseado y la fecha aproximada.",
        "ProLocal no es un marketplace ni prepara, compara o gestiona presupuestos. En las fichas reales, cada profesional indica los servicios que ofrece, su cobertura declarada y un método de contacto directo. La pintura no sustituye una reparación de obra, la solución de una filtración o la eliminación de materiales peligrosos."
      ],
      "service_cards": [
        {
          "title": "Pintura interior de paredes y techos",
          "description": "Para estancias de viviendas, comunidades o pequeños negocios, con preparación ordinaria del soporte solo si el perfil la declara."
        },
        {
          "title": "Pintura de fachadas y exteriores",
          "description": "Para paramentos exteriores y fachadas cuando el profesional declare este servicio. El acceso y los medios necesarios deben acordarse para cada trabajo."
        },
        {
          "title": "Preparación ligera del soporte",
          "description": "Puede incluir imprimación, lijado, saneado o regularización ligera antes del acabado, si se ha declarado. Las reparaciones estructurales o de obra corresponden a Albañiles."
        },
        {
          "title": "Retirada o alisado de gotelé",
          "description": "Un servicio complementario que debe aparecer separado de la pintura, ya que requiere una preparación específica y solo procede cuando se ofrece expresamente."
        },
        {
          "title": "Pintura, barniz o lasur de carpintería",
          "description": "Acabados para madera y, cuando se declaren, otras superficies como metal o plástico. Fabricar o reparar puertas, muebles o elementos de madera corresponde a Carpinteros."
        },
        {
          "title": "Papel pintado y revestimientos decorativos",
          "description": "Colocación de papel pintado o revestimientos de fibra de vidrio y vinílicos, únicamente si figura entre los servicios declarados del perfil."
        },
        {
          "title": "Lacado de superficies",
          "description": "Etiqueta de servicio para trabajos cuyo perfil especifique la superficie, el proceso y el alcance. No presupone una especialización ni está disponible en todos los perfiles."
        }
      ],
      "choose_title": "Qué revisar antes de contactar con un pintor",
      "choose_intro": "Compara el alcance declarado y la información que aporta cada ficha, sin asumir calidad, disponibilidad o condiciones no publicadas.",
      "choose_points": [
        {
          "title": "Servicio y zona declarados",
          "description": "Confirma que la ficha indica el tipo de pintura que necesitas y la ciudad o zona donde declara trabajar."
        },
        {
          "title": "Alcance por escrito",
          "description": "Aclara superficies, estado previo, preparación, materiales o acabado, protecciones, limpieza y retirada de residuos."
        },
        {
          "title": "Presupuesto detallado",
          "description": "Pide que incluya partidas, medidas o superficies, materiales, calendario, impuestos y forma de pago para poder comparar propuestas."
        },
        {
          "title": "Etiquetas documentales, si aparecen",
          "description": "Identidad verificada indica que se aportó DNI/CIF y ProLocal comprobó ese documento; no es una recomendación ni una garantía del resultado. Otras etiquetas deben describir solo el documento aportado."
        },
        {
          "title": "Información publicada por el perfil",
          "description": "Revisa trabajos, servicios y reseñas solo cuando estén publicados y sean auténticos; no uses una reseña como prueba de verificación."
        }
      ],
      "price_title": "Qué puede influir en un presupuesto de pintura",
      "price_intro": "No publicamos tarifas ni estimaciones estándar porque cada encargo requiere valorar su alcance. ProLocal no solicita ni compara presupuestos: el acuerdo se realiza directamente con el profesional.",
      "price_factors": [
        "Ciudad, tipo de inmueble y zonas o superficies que se van a pintar.",
        "Estado del soporte y necesidad de preparación, alisado de gotelé o tratamiento previo declarado.",
        "Trabajo interior o exterior, y el acabado o material que se quiere aplicar.",
        "Acceso al área de trabajo y medios auxiliares que pueda requerir.",
        "Vivienda ocupada, mobiliario, protecciones y limpieza final acordada.",
        "Fecha aproximada y coordinación con otros trabajos de reforma, cuando proceda."
      ],
      "coverage_title": "Cobertura y perfiles en esta demostración",
      "coverage_intro": "Vigo, A Coruña y Santiago de Compostela son las ciudades piloto previstas para esta categoría, no una afirmación de cobertura actual. Esta versión noindex utiliza seis perfiles de demostración, que deben mostrar el aviso exacto Perfil de demostración — no corresponde a una oferta real. Una página local solo debe publicarse cuando existan perfiles reales, distintos, contactables y con cobertura declarada suficiente.",
      "faqs": [
        {
          "question": "¿Cómo encuentro un pintor en mi ciudad?",
          "answer": "En una versión con perfiles reales, revisa la ciudad disponible, los servicios y la cobertura declarada de cada ficha, y contacta directamente desde ella."
        },
        {
          "question": "¿Qué información conviene enviar antes de pedir presupuesto?",
          "answer": "Indica ciudad, tipo de inmueble, zonas y superficies, estado de las paredes, interior o exterior, acceso, mobiliario, acabado deseado y fecha aproximada. Puedes compartir fotografías si quieres hacerlo."
        },
        {
          "question": "¿Qué debería incluir un presupuesto de pintura?",
          "answer": "Conviene que detalle alcance, medidas o superficies, preparación, materiales, calendario, impuestos, forma de pago y limpieza. Es información para comparar propuestas, no un presupuesto de ProLocal."
        },
        {
          "question": "¿Qué servicios puede indicar un pintor en su perfil?",
          "answer": "Puede declarar pintura interior o exterior, preparación del soporte, alisado de gotelé, acabados de carpintería, barniz, lasur, papel pintado o lacado, según lo que ofrezca."
        },
        {
          "question": "¿Pintar soluciona una humedad o una filtración?",
          "answer": "No. Primero debe resolverse la causa de la humedad o filtración mediante la especialidad correspondiente; el acabado de pintura solo puede valorarse después."
        },
        {
          "question": "¿Qué significa Identidad verificada en ProLocal?",
          "answer": "Significa que el perfil aportó DNI/CIF y ProLocal comprobó ese documento. No implica recomendación, acreditación profesional ni garantía de calidad o resultado."
        },
        {
          "question": "¿ProLocal prepara o compara presupuestos?",
          "answer": "No. ProLocal es un directorio de contacto directo: la persona usuaria y el profesional acuerdan el trabajo por su cuenta."
        },
        {
          "question": "¿Los perfiles de esta página están disponibles para contratar?",
          "answer": "No. Esta versión es noindex y muestra seis perfiles de demostración, no correspondientes a una oferta real. No debe inferirse disponibilidad, precio ni cobertura de esos perfiles."
        },
        {
          "question": "¿Por qué no hay una página de pintores para todas las ciudades?",
          "answer": "Las páginas locales solo deben publicarse cuando haya perfiles reales y cobertura declarada suficientes para mostrar alternativas útiles, no solo por existir demanda de búsqueda."
        }
      ],
      "related_intro": "Si el trabajo excede el acabado de pintura, consulta la categoría adecuada: Reformas de baños o Reformas de cocinas para una reforma integral; Albañiles para reparaciones de obra; Impermeabilizaciones para filtraciones y su causa; y Carpinteros para fabricar o reparar elementos de madera. La pintura puede formar parte de esos trabajos, pero no los sustituye.",
      "final_cta_title": "Consulta la información declarada antes de contactar",
      "final_cta_copy": "Esta página es una demostración y no permite contratar: sus seis fichas deben llevar el aviso Perfil de demostración — no corresponde a una oferta real. Cuando se publiquen perfiles reales, podrás revisar sus servicios y cobertura declarados y utilizar el contacto directo de cada ficha. Si ofreces servicios de pintura, solicita información sobre el alta de tu actividad.",
      "safety_note": "Si hay filtración activa, moho, amianto, plomo, daño estructural o un acceso de especial complejidad, no lo trates como un simple trabajo de pintura. Consulta primero con la especialidad o autoridad competente que corresponda."
    },
    "color": "#cfeef2"
  },
  "impermeabilizaciones": {
    "slug": "impermeabilizaciones",
    "name": "Impermeabilizaciones",
    "url": "/impermeabilizaciones/",
    "navigationGroup": "Reformas y construcción",
    "metadata": {
      "h1": "Profesionales de impermeabilizaciones para cubiertas y terrazas",
      "title": "Profesionales de impermeabilización | ProLocal",
      "description": "Encuentra especialistas en impermeabilización de cubiertas, terrazas y filtraciones. Consulta servicios declarados y contacta directamente en ProLocal."
    },
    "keyword": {
      "primary": "impermeabilizaciones",
      "secondary": [
        "impermeabilización",
        "impermeabilizar",
        "impermeabilizaciones Vigo",
        "impermeabilizaciones A Coruña",
        "impermeabilizaciones Santiago de Compostela",
        "presupuesto impermeabilizaciones",
        "precio impermeabilizaciones",
        "tarifas impermeabilizaciones",
        "impermeabilizaciones cerca de mí",
        "opiniones impermeabilizaciones"
      ],
      "semantic_variants": [
        "humedades",
        "filtraciones",
        "goteras",
        "cubiertas",
        "azoteas",
        "terrazas",
        "balcones",
        "estanqueidad",
        "láminas impermeabilizantes",
        "membranas líquidas",
        "juntas",
        "sumideros"
      ],
      "intent": "Principalmente transaccional-local, con una capa mixta de comparación: el usuario busca profesionales cercanos para cubiertas, terrazas, filtraciones o goteras y quiere contrastar cobertura, servicios, opiniones y factores de presupuesto. La URL general debe facilitar el hallazgo y contacto directo, no resolver un tutorial ni diagnosticar la patología.",
      "exclude_queries": [
        "cómo impermeabilizar una terraza paso a paso",
        "qué impermeabilizante comprar",
        "tela asfáltica precio rollo",
        "membrana líquida DIY",
        "comparativa de marcas de impermeabilizantes",
        "ficha técnica impermeabilizante",
        "curso de impermeabilización",
        "empleo impermeabilizador",
        "urgencias 24 h impermeabilización",
        "impermeabilizaciones baratas"
      ]
    },
    "services": [
      "Impermeabilización y rehabilitación de cubiertas planas, azoteas y cubiertas inclinadas cuando el servicio declarado sea de estanqueidad",
      "Impermeabilización de terrazas y balcones transitables o no transitables",
      "Reparación localizada de filtraciones asociadas a membranas, láminas, juntas, encuentros, petos, sumideros o pasos de instalaciones tras valorar el origen",
      "Impermeabilización de fachadas, muros y elementos expuestos cuando el perfil declare esa especialidad",
      "Tratamiento de puntos singulares de cubierta vinculados a una intervención de estanqueidad"
    ],
    "relatedSlugs": [
      "fontaneros",
      "albaniles",
      "pintores",
      "reformas-banos",
      "reformas-cocinas",
      "placas-solares"
    ],
    "content": {
      "slug": "impermeabilizaciones",
      "name": "Impermeabilizaciones",
      "eyebrow": "Directorio de contacto directo · Vista de demostración noindex",
      "hero_title": "Profesionales de impermeabilizaciones para cubiertas y terrazas",
      "hero_intro": "Consulta cómo se organizarán los perfiles de especialistas en impermeabilización de cubiertas, azoteas, terrazas y filtraciones. Esta es una vista de demostración: los seis perfiles mostrados no corresponden a una oferta real, no acreditan cobertura ni disponibilidad y la página debe publicarse con noindex.",
      "category_intro_title": "Cuándo buscar un especialista en impermeabilización",
      "category_intro_paragraphs": [
        "La impermeabilización se centra en limitar la entrada de agua en elementos constructivos como cubiertas, azoteas, terrazas, balcones y determinados muros o fachadas expuestos. Si observas una filtración o deterioro, resulta útil describir la superficie afectada, el punto donde aparece el agua y las intervenciones previas antes de consultar a un profesional.",
        "ProLocal es un directorio de contacto directo, no un marketplace: cuando haya perfiles reales publicados, cada uno mostrará los servicios y la zona que declare para que puedas valorar a quién contactar. Esta categoría no diagnostica el origen de una humedad ni sustituye una valoración técnica; una fuga de instalación, una obra de soporte o un problema de condensación pueden requerir otra categoría o profesional."
      ],
      "service_cards": [
        {
          "title": "Cubiertas planas y azoteas",
          "description": "Intervenciones de estanqueidad en cubiertas planas o azoteas, incluidas rehabilitaciones de la capa impermeable cuando ese sea el servicio declarado."
        },
        {
          "title": "Cubiertas inclinadas",
          "description": "Trabajos orientados a impedir la entrada de agua en cubiertas inclinadas. La reparación estructural, el cálculo o una patología grave quedan fuera de este alcance."
        },
        {
          "title": "Terrazas transitables",
          "description": "Impermeabilización de terrazas cuyo uso y acabado exigen valorar el soporte, el pavimento existente y la evacuación de agua; no equivale a una reforma integral."
        },
        {
          "title": "Balcones y superficies no transitables",
          "description": "Actuaciones de estanqueidad en balcones o zonas expuestas cuando el servicio se refiere a la entrada de agua y no solo a pintura o acabado superficial."
        },
        {
          "title": "Filtraciones y reparaciones localizadas",
          "description": "Revisión de filtraciones asociadas a membranas, láminas, juntas, encuentros, petos, sumideros o pasos de instalaciones, tras valorar el posible origen. Las fugas de tuberías corresponden a fontanería."
        },
        {
          "title": "Fachadas y muros expuestos",
          "description": "Impermeabilización de fachadas, muros u otros elementos expuestos cuando el problema sea la entrada de agua desde el exterior y el perfil declare esta especialidad."
        },
        {
          "title": "Puntos singulares de cubierta",
          "description": "Tratamiento de desagües, encuentros y penetraciones vinculado a una intervención de estanqueidad. La instalación de placas solares pertenece a su categoría específica."
        }
      ],
      "choose_title": "Qué comparar antes de contactar",
      "choose_intro": "No hay una solución única para todas las superficies. Para decidir a quién consultar, contrasta la información declarada por cada perfil con las características de tu caso y solicita que el alcance se explique con claridad.",
      "choose_points": [
        {
          "title": "Superficie y uso afectados",
          "description": "Comprueba si el perfil declara experiencia en cubierta, azotea, terraza, balcón, fachada o muro, y aclara si la zona será transitable."
        },
        {
          "title": "Alcance de la intervención",
          "description": "Pide que se distinga entre la capa de estanqueidad, una reparación localizada y trabajos de obra general, soporte o pendientes."
        },
        {
          "title": "Evacuación y encuentros",
          "description": "Consulta cómo se valorarán pendientes, sumideros, juntas, petos, esquinas, desagües y pasos de instalaciones, sin presuponer un sistema concreto."
        },
        {
          "title": "Zona de atención declarada",
          "description": "Verifica que la zona de atención indicada por el profesional incluya el lugar de la obra; no la infieras a partir de una ciudad cercana."
        },
        {
          "title": "Información trazable del perfil",
          "description": "Revisa servicios, zona y fotos si el perfil las ha aportado. Si aparece una etiqueta documental, lee el hecho concreto que acredita y no la interpretes como garantía del resultado."
        }
      ],
      "price_title": "Por qué no hay un precio único de impermeabilización",
      "price_intro": "Esta categoría no muestra tarifas estándar ni presupuestos cerrados. El coste solo puede valorarse con el caso concreto, el alcance previsto y la información que facilite cada profesional; ProLocal no calcula ni gestiona presupuestos.",
      "price_factors": [
        "La superficie, geometría y extensión del daño o deterioro previo.",
        "El tipo y estado del soporte, así como la necesidad de reparar, retirar o reponer pavimento.",
        "El uso previsto, el acabado compatible y los requisitos de una zona transitable o no transitable.",
        "Las pendientes, desagües, juntas, encuentros y demás puntos singulares que deban valorarse.",
        "El acceso, los medios de trabajo y la coordinación o autorizaciones que puedan ser necesarias."
      ],
      "coverage_title": "Cobertura y publicación de perfiles",
      "coverage_intro": "La interfaz de prueba contempla Vigo, A Coruña y Santiago de Compostela, pero esta página no confirma que exista cobertura real en ninguna de ellas. Una página local solo debe publicarse e indexarse cuando el inventario revisado confirme perfiles activos, únicos, contactables y con servicio y zona declarados; mientras tanto, los seis perfiles visibles son únicamente de demostración.",
      "faqs": [
        {
          "question": "¿Qué profesional necesito para impermeabilizar una terraza, cubierta o azotea?",
          "answer": "Busca un perfil que declare impermeabilización en la superficie concreta. Indica si se trata de una terraza transitable, una cubierta o una azotea y describe dónde se aprecia la filtración."
        },
        {
          "question": "¿Qué información conviene enviar antes de pedir una visita o presupuesto?",
          "answer": "Comparte la superficie afectada, el uso de la zona, el soporte y acabado existentes, fotos si las tienes, el lugar por el que aparece el agua y reparaciones previas conocidas."
        },
        {
          "question": "¿Cómo sé si una filtración puede deberse a la impermeabilización y no a una tubería?",
          "answer": "No conviene asumir la causa. Explica cuándo y dónde aparece la humedad y si coincide con lluvia o con el uso de una instalación; ante sospecha de fuga de tubería, consulta también Fontaneros."
        },
        {
          "question": "¿Qué diferencia hay entre una terraza transitable y una cubierta no transitable al buscar especialista?",
          "answer": "El uso y el acabado condicionan qué debe valorarse. Indica si la superficie se pisa habitualmente y si hay pavimento que conservar, retirar o reponer."
        },
        {
          "question": "¿Qué debería consultar sobre pendientes, sumideros, juntas y encuentros?",
          "answer": "Pide que el profesional explique si revisará esos puntos en el diagnóstico y cómo se integran en el alcance. Son detalles relevantes para la evacuación y la continuidad de la estanqueidad."
        },
        {
          "question": "¿Por qué dos presupuestos de impermeabilización pueden ser diferentes?",
          "answer": "Pueden variar por superficie, estado del soporte, accesos, pavimento, uso previsto, desagües, juntas y extensión del daño. Compara el alcance descrito, no solo el importe."
        },
        {
          "question": "¿Qué servicios pueden declarar los profesionales de impermeabilizaciones en ProLocal?",
          "answer": "Pueden declarar trabajos en cubiertas, azoteas, terrazas, balcones, fachadas o muros expuestos, además de reparaciones ligadas a elementos de estanqueidad. Cada dato debe verse en el perfil publicado."
        },
        {
          "question": "¿Qué significa Identidad verificada y qué no significa?",
          "answer": "Significa que el profesional aportó DNI o CIF y que ProLocal comprobó ese hecho documental. No significa aval de calidad, recomendación, garantía de resultados ni disponibilidad."
        },
        {
          "question": "¿ProLocal gestiona el presupuesto o interviene en la contratación?",
          "answer": "No. Cuando haya perfiles reales, el contacto será directo por los canales publicados por cada profesional. ProLocal no recoge ni reparte leads, no cobra por lead, no se lleva comisión y no gestiona presupuestos."
        },
        {
          "question": "¿Qué debo tener en cuenta si la filtración afecta a una terraza que sirve de cubierta comunitaria?",
          "answer": "Identifica el origen y el elemento afectado y consulta a la administración o a quien corresponda antes de decidir actuaciones. La responsabilidad puede depender de las circunstancias; ProLocal no ofrece asesoramiento jurídico."
        }
      ],
      "related_intro": "Si la causa parece una fuga de tubería o bajante, explora Fontaneros. Para reparación de soporte, formación de pendientes u obra general, consulta Albañiles. Las reformas integrales de zonas interiores se relacionan con Reformas de baños y Reformas de cocinas; la pintura de fachada sin intervención de estanqueidad corresponde a Pintores. En cubiertas con instalaciones solares, Placas solares es una categoría distinta. Consulta también Cómo se aplican las etiquetas documentales para entender el alcance de cada etiqueta.",
      "final_cta_title": "Explora la categoría con información clara",
      "final_cta_copy": "Esta versión se publica como demostración y no permite contratar ni confirma oferta, cobertura o disponibilidad. Los seis perfiles mostrados deben identificarse de forma visible como: Perfil de demostración — no corresponde a una oferta real. Cuando exista inventario revisado, ProLocal mostrará servicios y zonas declarados para facilitar el contacto directo con cada profesional, sin intermediación en la contratación.",
      "safety_note": "No intentes resolver por tu cuenta una filtración mediante trabajos en altura, cubiertas o instalaciones. Si hay riesgo para las personas o el inmueble, limita el acceso a la zona y solicita una valoración profesional adecuada."
    },
    "color": "#e7e1d7"
  },
  "aire-acondicionado": {
    "slug": "aire-acondicionado",
    "name": "Aire acondicionado",
    "url": "/aire-acondicionado/",
    "navigationGroup": "Climatización y energía",
    "metadata": {
      "h1": "Profesionales de aire acondicionado",
      "title": "Instaladores de aire acondicionado | ProLocal",
      "description": "Directorio de instaladores de aire acondicionado: perfiles, servicios declarados, contacto directo y etiquetas sobre documentos aportados."
    },
    "keyword": {
      "primary": "instalador de aire acondicionado",
      "secondary": [
        "instalador de aire acondicionado Vigo",
        "instalador de aire acondicionado A Coruña",
        "instalador de aire acondicionado Santiago de Compostela",
        "presupuesto instalador de aire acondicionado",
        "instalador de aire acondicionado cerca de mí",
        "precio instalador de aire acondicionado",
        "mantenimiento de aire acondicionado"
      ],
      "semantic_variants": [
        "climatización",
        "instalación de aire acondicionado",
        "instalación AC",
        "split",
        "multisplit",
        "aire por conductos",
        "mantenimiento",
        "reparación",
        "diagnóstico de avería"
      ],
      "intent": "Encontrar y comparar localmente a un profesional para instalar, sustituir, reparar, diagnosticar o mantener aire acondicionado; intención transaccional con investigación previa.",
      "exclude_queries": [
        "aire acondicionado de coche",
        "comprar aire acondicionado sin servicio",
        "recambios, mandos, filtros o refrigerante sin servicio",
        "manuales y códigos de error",
        "tutoriales hazlo tú mismo",
        "formación, empleo, carnés o cursos",
        "comparativas exclusivamente de producto",
        "refrigeración comercial o industrial no declarada",
        "ventilación, aerotermia, calderas, gas o electricidad sin intención de aire acondicionado"
      ]
    },
    "services": [
      "Instalación o sustitución de split y multisplit declarada por el perfil",
      "Instalación de aire por conductos declarada por el perfil",
      "Visita o valoración técnica previa declarada",
      "Diagnóstico y reparación de averías declarados",
      "Mantenimiento y limpieza profesional declarados",
      "Revisión de condensados y drenaje declarada",
      "Puesta en marcha o configuración cuando el profesional la declare"
    ],
    "relatedSlugs": [
      "tecnico-calderas",
      "electricistas",
      "reformas-cocinas",
      "reformas-banos"
    ],
    "content": {
      "slug": "aire-acondicionado",
      "name": "Aire acondicionado",
      "eyebrow": "Directorio de contacto directo",
      "hero_title": "Profesionales de aire acondicionado",
      "hero_intro": "Consulta perfiles de instaladores y técnicos de aire acondicionado, revisa los servicios que declaran y contacta directamente cuando hayan publicado sus datos. Esta página está en modo demostración, es noindex y los seis perfiles mostrados deben identificarse como \"Perfil de demostración — no corresponde a una oferta real\".",
      "category_intro_title": "Encuentra el servicio de aire acondicionado que necesitas",
      "category_intro_paragraphs": [
        "Esta categoría reúne perfiles que pueden declarar instalación, sustitución, diagnóstico, reparación o mantenimiento de equipos de aire acondicionado en viviendas, comunidades o pequeños negocios. ProLocal es un directorio: no solicita presupuestos en tu nombre, no intermedia en la contratación y no cobra por el contacto directo.",
        "Antes de contactar, concreta si buscas un split, multisplit o sistema por conductos; si se trata de una instalación nueva, una sustitución, una avería o mantenimiento; y las condiciones de acceso y ubicación. La categoría se centra en equipos de aire acondicionado; para una caldera, una instalación de gas, un trabajo exclusivamente eléctrico o una reforma integral, conviene consultar la categoría correspondiente."
      ],
      "service_cards": [
        {
          "title": "Instalación de split y multisplit",
          "description": "Para la colocación de unidades de aire acondicionado en una o varias estancias, cuando el profesional declare este servicio."
        },
        {
          "title": "Aire acondicionado por conductos",
          "description": "Para proyectos de climatización mediante conductos, incluida la valoración de recorridos y falsos techos cuando el perfil lo indique."
        },
        {
          "title": "Sustitución de equipos",
          "description": "Para cambiar un equipo de aire acondicionado existente y revisar qué trabajos, retirada o adaptación se incluyen en cada caso."
        },
        {
          "title": "Visita y valoración técnica",
          "description": "Para revisar el tipo de sistema, las estancias, la ubicación de unidades, el drenaje y los condicionantes previos al trabajo."
        },
        {
          "title": "Diagnóstico y reparación de averías",
          "description": "Para incidencias como falta de frío, goteo o códigos de error, tras las comprobaciones que el profesional considere necesarias."
        },
        {
          "title": "Mantenimiento profesional",
          "description": "Para revisiones y limpieza profesional del equipo de aire acondicionado según el alcance que declare el perfil."
        },
        {
          "title": "Revisión de condensados y drenaje",
          "description": "Para valorar problemas vinculados a la evacuación de condensados dentro de un servicio de aire acondicionado declarado."
        }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "Compara la información visible de cada perfil y aclara el alcance del trabajo antes de decidir. Las etiquetas documentales describen únicamente documentos aportados y comprobados por ProLocal; no son una recomendación ni garantizan calidad, disponibilidad o resultado.",
      "choose_points": [
        {
          "title": "Servicio y tipo de sistema declarados",
          "description": "Confirma que el perfil declara el trabajo que necesitas y el tipo de equipo, como split, multisplit o conductos."
        },
        {
          "title": "Cobertura declarada",
          "description": "Revisa la ciudad o zona que el profesional haya indicado; no la des por supuesta a partir de esta categoría."
        },
        {
          "title": "Alcance del trabajo",
          "description": "Pregunta qué incluye la intervención: equipo, materiales, tubería, drenaje, adaptación eléctrica, puesta en marcha o retirada del equipo anterior."
        },
        {
          "title": "Documentación aportada",
          "description": "Si aparece una etiqueta como Identidad verificada, Alta de autónomo/empresa, Seguro RC aportado o Certificación aportada, identifica solo ese hecho documental comprobado."
        },
        {
          "title": "Requisitos aplicables",
          "description": "Consulta qué habilitación, certificación o justificante corresponde al equipo y al trabajo concreto, especialmente cuando intervenga normativa sobre gases fluorados."
        }
      ],
      "price_title": "Qué puede influir en un presupuesto",
      "price_intro": "No se publican tarifas ni precios estimados en esta página. El importe y el alcance dependen de los datos técnicos, del lugar y de las comprobaciones necesarias; pide que el profesional detalle qué contempla su propuesta.",
      "price_factors": [
        "Tipo de sistema y número de unidades que se quieren instalar o sustituir.",
        "Estancias a climatizar y valoración técnica de la potencia necesaria.",
        "Longitud y complejidad del recorrido entre unidades, incluido el drenaje de condensados.",
        "Ubicación, acceso y soporte de la unidad exterior, además de posibles restricciones de fachada o comunidad.",
        "Adaptaciones eléctricas, obras o falsos techos que requiera una instalación por conductos.",
        "En una reparación, causa de la avería, componentes implicados y pruebas necesarias."
      ],
      "coverage_title": "Cobertura según cada perfil",
      "coverage_intro": "La cobertura no se presume por aparecer en esta categoría. Comprueba la ciudad o zona que cada profesional haya declarado y confirma directamente si atiende tu ubicación. Las páginas locales solo deben publicarse cuando exista oferta real y cobertura confirmada; los perfiles de esta demostración no acreditan cobertura real.",
      "faqs": [
        {
          "question": "¿ProLocal instala o repara aire acondicionado?",
          "answer": "No. ProLocal es un directorio de contacto directo. El trabajo y cualquier acuerdo se tratan directamente con el profesional cuyo perfil consultes."
        },
        {
          "question": "¿Los perfiles de esta página son una oferta disponible?",
          "answer": "No. Esta versión es una demostración noindex. Los seis perfiles deben mostrarse con el aviso \"Perfil de demostración — no corresponde a una oferta real\"."
        },
        {
          "question": "¿Qué servicio debo buscar si quiero instalar aire en varias estancias?",
          "answer": "Indica cuántas estancias quieres climatizar y consulta perfiles que declaren instalación de multisplit o sistemas por conductos, según el proyecto."
        },
        {
          "question": "¿Esta categoría sirve para una avería o para mantenimiento?",
          "answer": "Sí, cuando el perfil declare diagnóstico y reparación de averías o mantenimiento de aire acondicionado. Explica el síntoma sin intentar manipular el circuito frigorífico."
        },
        {
          "question": "¿Qué información conviene dar antes de pedir una valoración?",
          "answer": "Describe si es instalación, sustitución, avería o mantenimiento; el tipo de sistema; las estancias; y la ubicación y acceso de las unidades."
        },
        {
          "question": "¿Qué significa una etiqueta documental de ProLocal?",
          "answer": "Indica que se aportó y comprobó el documento concreto, por ejemplo identidad, alta de autónomo/empresa, seguro RC o certificación. No garantiza calidad, precio, disponibilidad ni resultado."
        },
        {
          "question": "¿Debo preguntar por la documentación aplicable a la instalación?",
          "answer": "Sí. Pregunta qué justificante, habilitación o certificación corresponde al equipo y al trabajo concreto. No supongas que una etiqueta documental cubre todos los supuestos."
        },
        {
          "question": "¿Se muestran precios de instalación o reparación?",
          "answer": "No. Esta página no fija precios. El tipo de equipo, el recorrido, el acceso, el drenaje, las adaptaciones y el diagnóstico pueden cambiar el alcance."
        },
        {
          "question": "¿Sirve esta categoría para una caldera, gas o una avería eléctrica?",
          "answer": "Solo si el objeto principal es un equipo de aire acondicionado. Para calderas, gas o trabajos exclusivamente de cuadro o circuito eléctrico, consulta la categoría especializada."
        }
      ],
      "related_intro": "Si tu necesidad principal no es un equipo de aire acondicionado, consulta a un especialista que declare sistemas de calefacción para esos trabajos, Técnico de calderas para calderas y agua caliente, Instalador de gas para instalaciones de gas, Electricistas para trabajos exclusivamente eléctricos o la categoría de reforma correspondiente cuando forme parte de una obra integral.",
      "final_cta_title": "Explora perfiles de aire acondicionado",
      "final_cta_copy": "Revisa los servicios, la cobertura y el contacto que cada perfil haya publicado. En esta versión de demostración no hay oferta real: los seis perfiles deben llevar el aviso de demostración y la página debe mantenerse noindex.",
      "safety_note": "Por seguridad, no manipules refrigerante, conexiones eléctricas ni componentes internos del equipo. Ante una avería, describe los síntomas al profesional y consulta el alcance y la documentación aplicable antes de contratar."
    },
    "color": "#f2d7b6"
  },
  "tecnico-calderas": {
    "slug": "tecnico-calderas",
    "name": "Técnicos de calderas",
    "url": "/tecnico-calderas/",
    "navigationGroup": "Climatización y energía",
    "metadata": {
      "h1": "Encuentra técnicos de calderas para reparación y mantenimiento",
      "title": "Técnicos de calderas: encuentra profesionales | ProLocal",
      "description": "Encuentra técnicos de calderas para reparación, mantenimiento o revisión. Consulta servicios y etiquetas documentales y contacta directamente."
    },
    "keyword": {
      "primary": "técnico de calderas",
      "secondary": [
        "reparación de calderas",
        "mantenimiento de calderas",
        "revisión de caldera",
        "caldera de gas",
        "técnico de calderas 24 horas",
        "técnico de calderas urgente",
        "presupuesto técnico de calderas",
        "técnico de calderas cerca de mí",
        "opiniones técnico de calderas"
      ],
      "semantic_variants": [
        "avería de caldera",
        "puesta a punto de caldera",
        "revisión de caldera de gas",
        "mantenimiento preventivo",
        "calefacción y agua caliente sanitaria",
        "generador de calor",
        "técnico autorizado",
        "empresa mantenedora",
        "servicio técnico de marca"
      ],
      "intent": "Local, comercial y predominantemente transaccional: encontrar y comparar un profesional para reparación, mantenimiento o revisión de caldera; incluye dudas breves sobre coste, revisión e inspección.",
      "exclude_queries": [
        "manual de caldera",
        "códigos de error para reparar por cuenta propia",
        "tutorial de reparación de calderas",
        "repuestos o despieces de caldera",
        "curso para técnico de calderas",
        "empleo técnico de calderas",
        "comparativa de modelos sin intención de contratar",
        "servicio técnico oficial [marca] sin acreditación de marca",
        "emergencia por olor o fuga de gas"
      ]
    },
    "services": [
      "Diagnóstico y reparación de averías de caldera",
      "Mantenimiento preventivo, limpieza o puesta a punto",
      "Revisión de caldera cuando el perfil declare poder prestarla para el equipo y combustible",
      "Sustitución, instalación o puesta en marcha solo si el perfil declara el alcance y aporta documentación pertinente cuando sea exigible",
      "Intervenciones en caldera asociada a calefacción o agua caliente sanitaria",
      "Atención urgente o 24 horas únicamente si se declara, con horario y zona explícitos"
    ],
    "relatedSlugs": [],
    "content": {
      "slug": "tecnico-calderas",
      "name": "Técnicos de calderas",
      "eyebrow": "Directorio de contacto directo · Página de demostración noindex",
      "hero_title": "Encuentra técnicos de calderas para reparación y mantenimiento",
      "hero_intro": "Consulta cómo ProLocal organiza perfiles de técnicos de calderas por servicios declarados, zona y documentación aportada cuando proceda. Esta versión es una demostración noindex: los seis perfiles mostrados están identificados como demostración y no corresponden a una oferta real, por lo que no acreditan disponibilidad, cobertura, precios ni atención de ningún servicio.",
      "category_intro_title": "Para incidencias, mantenimiento y revisión centrados en la caldera",
      "category_intro_paragraphs": [
        "Esta categoría ayuda a identificar el tipo de profesional adecuado cuando la necesidad se centra en la caldera: una avería, mantenimiento preventivo, una revisión del equipo o, si el perfil declara ese alcance, una sustitución o instalación. En una publicación con perfiles reales, ProLocal mostraría los servicios que cada profesional declara y permitiría el contacto directo, sin gestionar presupuestos ni la contratación.",
        "No todo trabajo de calefacción, gas o fontanería pertenece a esta categoría. La revisión de una caldera se refiere al aparato, mientras que la inspección de la instalación de gas tiene otro alcance. Las altas, modificaciones, legalizaciones o certificados de una instalación de gas deben orientarse a un instalador de gas con el alcance y la documentación aplicables; las reparaciones de tuberías, llaves o radiadores que no se centren en la caldera pueden requerir otra categoría."
      ],
      "service_cards": [
        {
          "title": "Diagnóstico y reparación de averías de caldera",
          "description": "Para incidencias cuyo origen se sitúa en el equipo de caldera, siempre dentro del tipo de aparato y combustible que el perfil declare atender."
        },
        {
          "title": "Mantenimiento preventivo",
          "description": "Incluye actuaciones de mantenimiento, limpieza o puesta a punto de la caldera cuando el profesional las declare para el equipo concreto."
        },
        {
          "title": "Revisión técnica de la caldera",
          "description": "Orientada al aparato de calefacción o agua caliente sanitaria; no debe confundirse con una inspección periódica de la instalación de gas."
        },
        {
          "title": "Sustitución de calderas",
          "description": "Aplicable cuando el perfil declare que realiza el cambio de equipo y aporte la documentación pertinente si el trabajo la exige."
        },
        {
          "title": "Instalación y puesta en marcha declaradas",
          "description": "Solo deben aparecer cuando el profesional especifique el alcance de la intervención y, si corresponde, la habilitación o documentación aportada."
        },
        {
          "title": "Caldera para calefacción y agua caliente sanitaria",
          "description": "Para intervenciones vinculadas a la caldera que alimenta calefacción y/o agua caliente sanitaria, según lo declarado en el perfil."
        },
        {
          "title": "Atención urgente declarada",
          "description": "La condición de urgencias o 24 horas solo puede mostrarse como una especialidad autodeclarada, con horario y zona explícitos; no implica disponibilidad confirmada."
        }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "Elige por información concreta del perfil, no por afirmaciones genéricas. En esta página de demostración, los ejemplos no constituyen perfiles contratables; estos son los criterios que se aplicarían a un listado real.",
      "choose_points": [
        {
          "title": "Equipo y trabajo solicitado",
          "description": "Comprueba que el perfil declare el tipo de caldera o combustible y el servicio que necesitas, como reparación, mantenimiento o revisión."
        },
        {
          "title": "Zona y forma de contacto",
          "description": "Revisa la zona de desplazamiento y el canal de contacto declarados. Confirma directamente cualquier detalle antes de contratar."
        },
        {
          "title": "Alcance regulado cuando corresponda",
          "description": "Para instalaciones, gas o documentación, verifica que el perfil indique el alcance aplicable y los documentos aportados relevantes."
        },
        {
          "title": "Etiquetas documentales separadas",
          "description": "Una etiqueta factual puede indicar que ProLocal comprobó un documento aportado. No garantiza precio, disponibilidad ni el resultado del trabajo."
        },
        {
          "title": "Marca y condición oficial",
          "description": "La atención de una marca solo debe mostrarse si el perfil la declara. La condición de servicio técnico oficial requiere acreditación específica para la marca indicada."
        }
      ],
      "price_title": "El coste depende del caso, no de una tarifa publicada",
      "price_intro": "ProLocal no fija precios ni tramita presupuestos. El importe, si el profesional lo ofrece, se acuerda directamente entre cliente y profesional tras valorar el trabajo. Esta demostración no publica tarifas, rangos ni presupuestos.",
      "price_factors": [
        "Diagnóstico y alcance de la avería o del mantenimiento solicitado.",
        "Zona de desplazamiento y condiciones de acceso al equipo.",
        "Horario y carácter urgente de la solicitud, si el profesional declara atenderlo.",
        "Tipo, potencia, combustible y antigüedad de la caldera.",
        "Necesidad de piezas, adaptaciones o sustitución del equipo.",
        "Documentación que pueda ser necesaria según la intervención."
      ],
      "coverage_title": "La cobertura se muestra solo cuando está declarada",
      "coverage_intro": "Vigo, A Coruña y Santiago de Compostela son ciudades piloto para la organización futura de la categoría, no una afirmación de cobertura actual. La página contiene seis perfiles de demostración, claramente no reales, y se publica como noindex. En un listado real, cada perfil mostraría únicamente su ciudad o zona de desplazamiento declarada y el usuario confirmaría el servicio directamente con el profesional.",
      "faqs": [
        {
          "question": "¿Qué servicios puede prestar un técnico de calderas?",
          "answer": "Un perfil puede declarar reparación, mantenimiento, revisión y, cuando tenga el alcance aplicable, instalación o sustitución de calderas. Confirma siempre el servicio concreto."
        },
        {
          "question": "¿La revisión de una caldera es lo mismo que la inspección de gas?",
          "answer": "No. La revisión se centra en el aparato; la inspección abarca la instalación de gas. Para tu caso, consulta la normativa aplicable y a la empresa o profesional con el alcance correspondiente."
        },
        {
          "question": "¿Cómo elijo un perfil para mi caldera?",
          "answer": "Busca coincidencia entre el equipo, el servicio, la zona y el horario declarados. Si el trabajo es regulado, revisa también el alcance y los documentos aportados relevantes."
        },
        {
          "question": "¿Un técnico de calderas puede intervenir en gas o emitir certificados?",
          "answer": "Depende del trabajo y de la habilitación o empresa aplicable. No lo presupongas por la categoría: comprueba el alcance declarado y la documentación aportada."
        },
        {
          "question": "¿Hay técnicos de calderas 24 horas?",
          "answer": "Esa condición solo puede mostrarse cuando un perfil la declara junto con su horario y zona. Debe confirmarse directamente antes de contratar."
        },
        {
          "question": "¿Puedo buscar un técnico que atienda una marca concreta?",
          "answer": "Sí, cuando un perfil declare esa marca. La mención de servicio técnico oficial solo procede si existe acreditación específica y visible para la marca indicada."
        },
        {
          "question": "¿De qué depende el presupuesto de una reparación de caldera?",
          "answer": "Depende, entre otros factores, del diagnóstico, desplazamiento, urgencia, equipo, piezas, acceso y alcance del trabajo. Solicita el detalle al profesional."
        },
        {
          "question": "¿ProLocal gestiona el presupuesto o cobra por el contacto?",
          "answer": "No. ProLocal es un directorio de contacto directo: no solicita presupuestos en nombre del cliente ni interviene en la contratación entre las partes."
        },
        {
          "question": "¿Los perfiles visibles en esta página están disponibles para contratar?",
          "answer": "No. Los seis perfiles de esta versión son demostraciones y no corresponden a una oferta real. La página es noindex y no afirma disponibilidad, cobertura, precios ni prestación de servicios."
        }
      ],
      "related_intro": "Si la necesidad principal no está en la caldera, busca profesionales que declaren trabajos en radiadores o circuitos; consulta Instaladores de gas para altas, modificaciones, certificados o inspecciones de la instalación de gas, Fontaneros para incidencias de agua ajenas a la caldera y Aire acondicionado para equipos de refrigeración.",
      "final_cta_title": "Explora la categoría con información clara",
      "final_cta_copy": "Esta versión permite revisar cómo se presentarán servicios declarados, cobertura y etiquetas documentales en ProLocal. Los seis perfiles incluidos son exclusivamente de demostración y no pueden contactarse como oferta real. Cuando existan perfiles reales revisados, el contacto será directo entre la persona usuaria y el profesional, sin intermediación de ProLocal.",
      "safety_note": "Si hay olor a gas, sospecha de fuga o peligro inmediato, no uses esta página para buscar una reparación. Contacta con los canales de emergencia de tu distribuidora de gas o con los servicios de emergencia pertinentes."
    },
    "color": "#d7e5cf"
  },
  "instalador-gas": {
    "slug": "instalador-gas",
    "name": "Instaladores de gas",
    "url": "/instalador-gas/",
    "navigationGroup": "Climatización y energía",
    "metadata": {
      "h1": "Instaladores de gas para contactar directamente",
      "title": "Instaladores de gas | Contacto directo | ProLocal",
      "description": "Encuentra instaladores de gas y contacta directamente. Consulta servicios declarados y documentación aportada cuando exista. Sin intermediarios."
    },
    "keyword": {
      "primary": "instalador de gas",
      "secondary": [
        "instaladores de gas",
        "instalador de gas Vigo",
        "instalador de gas A Coruña",
        "instalador de gas Santiago de Compostela",
        "instalador de gas urgente",
        "instalador de gas 24 horas",
        "presupuesto instalador de gas",
        "instalador de gas cerca de mí",
        "opiniones instalador de gas"
      ],
      "semantic_variants": [
        "instalación de gas",
        "boletín de gas",
        "certificado de instalación de gas",
        "revisión de gas",
        "inspección periódica de gas",
        "gas natural"
      ],
      "intent": "Principalmente transaccional local: encontrar un instalador de gas y contactarlo directamente. La intención mixta busca comparar cobertura, presupuesto, cercanía y opiniones; la intención informacional de precio debe resolverse en una guía separada, sin convertir la categoría en un tutorial ni publicar tarifas inventadas.",
      "exclude_queries": [
        "cómo instalar gas",
        "esquema de instalación de gas",
        "cómo arreglar una fuga de gas",
        "curso de instalador de gas",
        "carné de instalador de gas",
        "trabajo de instalador de gas",
        "precio bombona de butano",
        "pedir bombona de butano",
        "distribuidor de gas",
        "cambio de comercializadora de gas",
        "tarifas de gas",
        "registro de instaladores de gas"
      ]
    },
    "services": [
      "Instalación, ampliación o modificación de instalaciones receptoras de gas",
      "Conexión o modificación asociada a aparatos de gas cuando el profesional lo declare",
      "Certificado de instalación solo cuando el perfil declare el servicio y pueda realizarlo conforme a su habilitación",
      "Comprobación, reparación o subsanación de anomalías de la instalación receptora",
      "Inspección o revisión periódica cuando el perfil declare el servicio y tenga la habilitación aplicable",
      "Mantenimiento de calentadores o calderas de gas como servicio secundario declarado"
    ],
    "relatedSlugs": [
      "tecnico-calderas",
      "fontaneros",
      "reformas-cocinas",
      "aire-acondicionado"
    ],
    "content": {
      "slug": "instalador-gas",
      "name": "Instaladores de gas",
      "eyebrow": "Directorio de contacto directo · Prototipo noindex",
      "hero_title": "Instaladores de gas para contactar directamente",
      "hero_intro": "Esta página muestra el formato de la categoría de gas de ProLocal. Los seis perfiles visibles son demostraciones y no corresponden a una oferta real, por lo que no se deben interpretar como profesionales disponibles, con cobertura, precio, acreditación o contacto activo. ProLocal es un directorio de contacto directo: no gestiona presupuestos, no asigna trabajos y no garantiza respuestas ni resultados.",
      "category_intro_title": "Trabajos de instalación receptora de gas, con el alcance claro",
      "category_intro_paragraphs": [
        "La categoría de instaladores de gas se centra en la instalación, ampliación o modificación de instalaciones receptoras de gas en viviendas, comunidades o pequeños negocios. En perfiles reales, también podría indicarse la conexión o modificación asociada a aparatos, la reparación o subsanación de anomalías de la instalación y, solo cuando el perfil lo declare y pueda hacerlo conforme a su habilitación, la gestión o emisión del certificado que corresponda.",
        "No es una categoría de fontanería general ni de venta, suministro o cambio de comercializadora. Las averías y el mantenimiento de una caldera o calentador pertenecen principalmente a Técnico de calderas; los sistemas térmicos más amplios requieren un especialista que declare esa actividad. Una reforma de cocina o una intervención sobre agua y saneamiento puede requerir otra especialidad, aunque después sea necesaria una actuación específica sobre la instalación de gas."
      ],
      "service_cards": [
        {
          "title": "Instalación receptora de gas",
          "description": "Instalación de la red receptora de gas en vivienda, comunidad o pequeño negocio, con alcance concreto a confirmar directamente con el profesional."
        },
        {
          "title": "Ampliación o modificación de la instalación",
          "description": "Cambios en una instalación receptora existente, como trazados o puntos de suministro, cuando el perfil real declare este servicio."
        },
        {
          "title": "Conexión asociada a aparatos de gas",
          "description": "Conexión o modificación vinculada a un aparato de gas solo si el profesional indica expresamente que la realiza. El mantenimiento del aparato no es el foco principal de esta categoría."
        },
        {
          "title": "Certificado de instalación",
          "description": "Gestión o emisión del certificado que corresponda únicamente si el perfil lo declara y puede realizarlo conforme a su habilitación y al trabajo efectuado."
        },
        {
          "title": "Reparación de la instalación receptora",
          "description": "Comprobación, reparación o subsanación de anomalías en la instalación receptora, sin diagnósticos remotos ni promesa de resultado."
        },
        {
          "title": "Inspección o revisión declarada",
          "description": "Servicio que solo debe figurar cuando un perfil real lo declare y tenga la habilitación aplicable. La distribuidora informa del procedimiento y de la cita cuando corresponda."
        },
        {
          "title": "Mantenimiento de calentador o caldera",
          "description": "Puede aparecer como especialidad secundaria si un perfil declara ambas actividades. Para averías, puesta a punto o mantenimiento del equipo térmico, consulta Técnico de calderas."
        }
      ],
      "choose_title": "Qué comprobar antes de contactar con un perfil real",
      "choose_intro": "Cuando existan fichas reales, compáralas por la información que cada profesional haya declarado o aportado. El orden de los perfiles no equivale a una recomendación editorial. En este prototipo, las tres tarjetas deben llevar de forma visible el aviso exacto: Perfil de demostración — no corresponde a una oferta real.",
      "choose_points": [
        {
          "title": "Servicio concreto",
          "description": "Comprueba si el perfil distingue entre instalación, modificación, certificado, revisión, reparación de instalación o mantenimiento de aparato."
        },
        {
          "title": "Zona declarada",
          "description": "Revisa la ciudad o zona de atención que indique el perfil. No presupongas cercanía ni cobertura si no se muestran como información declarada."
        },
        {
          "title": "Canal de contacto directo",
          "description": "Un perfil real puede mostrar teléfono, WhatsApp o email. ProLocal no intermedia solicitudes ni adjudica trabajos."
        },
        {
          "title": "Documentación mostrada de forma factual",
          "description": "Etiquetas como Identidad verificada, Alta de autónomo/empresa, Seguro RC aportado o Certificación aportada solo describen el documento revisado indicado en la ficha; no garantizan calidad, disponibilidad ni resultado."
        },
        {
          "title": "Condiciones explicadas por escrito",
          "description": "Antes de aceptar un encargo, pide que se concrete el alcance, los materiales o pruebas previstos, la documentación aplicable y las condiciones del presupuesto."
        }
      ],
      "price_title": "El coste depende del encargo, no de una tarifa de ProLocal",
      "price_intro": "ProLocal no publica precios, horquillas ni comparativas tarifarias para esta categoría. La inspección puede tener condiciones distintas según el caso y el mantenimiento tiene precios libres. Para valorar un trabajo real, solicita al profesional el alcance y el presupuesto por escrito; la información siguiente son factores de contexto, no una estimación.",
      "price_factors": [
        "Tipo de encargo: instalación nueva, modificación, revisión, reparación o certificado.",
        "Tipo de suministro y aparatos de gas afectados.",
        "Trazado, materiales y accesibilidad de la instalación.",
        "Pruebas, documentación o subsanación de anomalías que puedan ser necesarias.",
        "Potencia y tipología del inmueble o de la instalación.",
        "Desplazamiento o posible atención fuera de horario, si el profesional lo declara."
      ],
      "coverage_title": "Cobertura y disponibilidad: solo datos confirmados en cada ficha",
      "coverage_intro": "No se han aportado datos de cobertura, disponibilidad ni profesionales reales para esta página. Por ello, esta versión no afirma atención en una ciudad concreta, servicio urgente, horario ni capacidad de respuesta. Cuando haya perfiles reales, su ciudad o zona de servicio y cualquier atributo como urgencias 24 h deberán mostrarse como información declarada en la ficha y revisarse antes de habilitar filtros o páginas locales.",
      "faqs": [
        {
          "question": "¿Qué puede hacer un instalador de gas y qué debo explicar al contactar?",
          "answer": "Puede realizar trabajos sobre la instalación receptora de gas dentro del alcance que declare, como instalación, modificación o subsanación. Explica el tipo de inmueble, el encargo, el suministro o aparato afectado y si existe documentación o una comunicación previa."
        },
        {
          "question": "¿Necesito un certificado o boletín de gas para una instalación nueva o una modificación?",
          "answer": "Puede ser necesario según el trabajo y la normativa aplicable. Confírmalo con el profesional que vaya a ejecutar la actuación y con la distribuidora o el organismo competente cuando proceda; no des por hecho que una ficha puede emitirlo si no lo declara."
        },
        {
          "question": "¿Qué diferencia hay entre inspección periódica, revisión y mantenimiento de una caldera?",
          "answer": "Son actuaciones distintas. La inspección periódica se refiere a la instalación de gas; el mantenimiento preventivo y las averías de caldera o calentador se refieren al aparato. Para el equipo térmico, consulta Técnico de calderas."
        },
        {
          "question": "¿Cada cuánto se realiza la inspección periódica de una instalación de gas conectada a red?",
          "answer": "La referencia pública consultada indica una periodicidad general de cinco años para instalaciones receptoras conectadas a red. La distribuidora informa de cuándo corresponde y del procedimiento aplicable a cada caso."
        },
        {
          "question": "¿Quién puede realizar una modificación de la instalación de gas?",
          "answer": "Las modificaciones deben realizarlas instaladores autorizados conforme a la normativa aplicable. Antes de contratar, confirma el alcance del trabajo y la documentación que el profesional declara poder emitir."
        },
        {
          "question": "¿Puedo contratar directamente con un profesional o debo esperar a la distribuidora?",
          "answer": "Puedes contactar directamente con un profesional para un trabajo que declare prestar. Para una inspección periódica, cita, procedimiento o cobro que corresponda a la red, consulta primero las indicaciones de tu distribuidora."
        },
        {
          "question": "¿Qué datos conviene pedir antes de aceptar un presupuesto de gas?",
          "answer": "Pide por escrito el alcance, los materiales o pruebas incluidos, la documentación prevista, las exclusiones y las condiciones del presupuesto. No aceptes una cifra como equivalente a un diagnóstico o a un resultado garantizado."
        },
        {
          "question": "¿Qué significa Certificación aportada en un perfil de ProLocal?",
          "answer": "Indica que el perfil aportó la documentación relacionada con instalaciones de gas que se identifica en su ficha y que se revisó esa aportación. No acredita por sí sola la calidad del trabajo, la disponibilidad ni que ProLocal responda por el servicio."
        },
        {
          "question": "¿Qué hago si percibo olor a gas o una situación de riesgo inmediato?",
          "answer": "No esperes resultados de un directorio ni solicites una intervención a través de esta demostración. Contacta de inmediato con los servicios de emergencia y la distribuidora correspondientes mediante sus canales oficiales."
        }
      ],
      "related_intro": "Según la necesidad principal, consulta Técnico de calderas para mantenimiento o averías de caldera, Fontaneros para agua, desagües y saneamiento, y Reformas de cocinas cuando la actuación forme parte de una reforma. Para sistemas térmicos más amplios, busca un profesional que declare ese trabajo; ninguna de estas categorías sustituye una intervención específica sobre gas.",
      "final_cta_title": "Explora el funcionamiento del directorio, sin solicitudes ficticias",
      "final_cta_copy": "Esta página es una demostración noindex. Los seis perfiles previstos deben identificarse como Perfil de demostración — no corresponde a una oferta real, sin teléfonos, precios, reseñas, acreditaciones ni promesas de disponibilidad inventadas. Cuando ProLocal publique perfiles reales, el contacto será directo con cada profesional y los servicios, la zona y la documentación se mostrarán solo cuando estén declarados o aportados en su ficha.",
      "safety_note": "Ante olor a gas, fuga o riesgo inmediato, no esperes a contactar mediante un directorio. Usa los canales oficiales de emergencias y de tu distribuidora."
    },
    "color": "#ddd0ef"
  },
  "manitas": {
    "slug": "manitas",
    "name": "Manitas",
    "url": "/manitas/",
    "navigationGroup": "Hogar y mantenimiento",
    "metadata": {
      "h1": "Manitas para montaje de muebles y pequeños arreglos del hogar",
      "title": "Manitas: montaje de muebles y arreglos del hogar | ProLocal",
      "description": "Explora perfiles de manitas para montaje de muebles, estanterías, cortinas y pequeños arreglos. Consulta los servicios y zonas declarados antes de contactar."
    },
    "keyword": {
      "primary": "manitas",
      "secondary": [
        "manitas Vigo",
        "manitas A Coruña",
        "manitas Santiago de Compostela",
        "montaje de muebles",
        "montaje de muebles IKEA",
        "colgar estanterías",
        "pequeñas reparaciones del hogar"
      ],
      "semantic_variants": [
        "montador de muebles",
        "montaje de estanterías",
        "colgar cuadros y espejos",
        "colocar soporte de TV",
        "instalar cortinas y estores",
        "ajustar bisagras",
        "sellado con silicona"
      ],
      "intent": "Búsqueda local de ayuda con montaje de mobiliario y pequeñas tareas de mantenimiento doméstico, con consulta directa al profesional sin intermediación de ProLocal.",
      "exclude_queries": [
        "averías de calefacción o calderas",
        "instalación o reparación eléctrica",
        "instalaciones de gas",
        "fontanería especializada",
        "reformas estructurales",
        "guía para montar muebles paso a paso",
        "manuales de productos"
      ]
    },
    "services": [
      "Montaje de muebles",
      "Montaje de muebles IKEA",
      "Desmontaje de muebles",
      "Instalación de estanterías y baldas",
      "Colgar cuadros y espejos",
      "Instalación de soportes de TV",
      "Instalación de cortinas y estores",
      "Ajuste de puertas, bisagras y herrajes",
      "Sellado con silicona y pequeños remates",
      "Reparaciones y mantenimiento general del hogar"
    ],
    "relatedSlugs": [
      "carpinteros",
      "tecnico-persianas",
      "pintores",
      "albaniles"
    ],
    "content": {
      "slug": "manitas",
      "name": "Manitas",
      "eyebrow": "Directorio de contacto directo · Demostración noindex",
      "hero_title": "Manitas para montaje de muebles y pequeños arreglos del hogar",
      "hero_intro": "Consulta cómo se presentarían los servicios y la zona de atención de profesionales de manitas en ProLocal. Los seis perfiles actuales son de demostración: no corresponden a profesionales disponibles, ni acreditan servicios, precios o cobertura reales.",
      "category_intro_title": "Ayuda práctica para las pequeñas tareas del hogar",
      "category_intro_paragraphs": [
        "La categoría Manitas agrupa tareas domésticas concretas: montar o desmontar muebles, fijar estanterías, colgar cuadros, colocar cortinas, ajustar herrajes y hacer pequeños remates. Revisa siempre qué servicios declara cada perfil y confirma directamente el alcance del trabajo.",
        "Esta categoría no presupone habilitación para instalaciones eléctricas, de gas o trabajos estructurales. Si necesitas reformar, reparar una instalación o realizar trabajos especializados, consulta la categoría adecuada y la acreditación que corresponda."
      ],
      "service_cards": [
        { "title": "Montaje de muebles", "description": "Ensamblaje de muebles cuando el perfil indique que ofrece este servicio; confirma piezas, dimensiones y montaje incluido." },
        { "title": "Montaje de muebles IKEA", "description": "Montaje de mobiliario de esta marca cuando el profesional lo declare. ProLocal no está afiliado a IKEA ni representa a sus montadores oficiales." },
        { "title": "Desmontaje de muebles", "description": "Desmontaje de muebles para traslado, sustitución o almacenamiento según el servicio declarado y el estado de las piezas." },
        { "title": "Instalación de estanterías y baldas", "description": "Colocación y fijación de baldas o estanterías, comprobando con el profesional el tipo de pared, soporte y carga prevista." },
        { "title": "Colgar cuadros y espejos", "description": "Medición y colocación de cuadros y espejos con anclajes apropiados para el soporte y el peso previstos." },
        { "title": "Instalación de soportes de TV", "description": "Montaje y fijación de soportes para televisión si el perfil lo ofrece; confirma modelo, pared y anclajes antes de acordarlo." },
        { "title": "Instalación de cortinas y estores", "description": "Colocación de barras, rieles, cortinas o estores, conforme a las medidas y al sistema que se acuerden." },
        { "title": "Ajuste de puertas, bisagras y herrajes", "description": "Pequeños ajustes de puertas y sus herrajes cuando no impliquen reforma estructural ni un trabajo especializado distinto." },
        { "title": "Sellado con silicona y pequeños remates", "description": "Reposición de sellados y remates sencillos según el estado de la superficie y el alcance acordado." },
        { "title": "Reparaciones y mantenimiento general del hogar", "description": "Tareas menores declaradas por el profesional; describe el problema y confirma antes si entra en su ámbito de trabajo." }
      ],
      "choose_title": "Qué comprobar antes de elegir",
      "choose_intro": "Una misma categoría reúne tareas distintas. Compara lo que cada perfil declara y acuerda los detalles directamente con la persona profesional.",
      "choose_points": [
        { "title": "Servicio concreto", "description": "Comprueba si el perfil declara el trabajo que necesitas, no solo que figura en la categoría Manitas." },
        { "title": "Medidas y soportes", "description": "Para fijaciones o montajes, comparte dimensiones, materiales y tipo de pared o mueble antes de acordar la visita." },
        { "title": "Zona de atención", "description": "Consulta la cobertura declarada en la ficha y confirma la dirección y posibles condiciones de desplazamiento." },
        { "title": "Sellos con significado", "description": "Cada sello se refiere a una documentación concreta aportada y revisada; no garantiza la calidad ni el resultado del trabajo." }
      ],
      "price_title": "Acordad el trabajo y el precio directamente",
      "price_intro": "ProLocal no fija importes ni gestiona presupuestos. Pide al profesional que detalle el alcance, los materiales y las condiciones antes de aceptar el servicio.",
      "price_factors": [
        "Cantidad y tipo de muebles o elementos que deben montarse o instalarse.",
        "Estado del mobiliario, materiales y posibles piezas o anclajes necesarios.",
        "Tipo de pared, peso y complejidad de las fijaciones.",
        "Desplazamiento, acceso a la vivienda y tiempo previsto.",
        "Retirada de embalajes o trabajos adicionales, si se acuerdan expresamente."
      ],
      "coverage_title": "Vigo, A Coruña y Santiago de Compostela",
      "coverage_intro": "Estas ciudades muestran por ahora seis fichas ficticias para explorar la navegación. La disponibilidad y la zona real de trabajo solo podrán conocerse cuando haya perfiles auténticos publicados con datos declarados.",
      "faqs": [
        { "question": "¿Qué trabajos puedo buscar en Manitas?", "answer": "Montaje y desmontaje de muebles, estanterías, cuadros, soportes de TV, cortinas, ajustes de herrajes y pequeñas reparaciones, siempre que el profesional declare ese servicio en su ficha." },
        { "question": "¿Hay montadores de muebles IKEA en ProLocal?", "answer": "El directorio permite buscar perfiles que declaren montaje de muebles IKEA. Los perfiles actuales son ejemplos ficticios; ProLocal no está afiliado a IKEA ni confirma que haya montadores disponibles." },
        { "question": "¿Puedo solicitar que fijen un soporte de TV o una estantería?", "answer": "Puedes buscar perfiles que incluyan el servicio y explicar el tipo de pared, el peso y el modelo. La viabilidad y las condiciones deben confirmarse directamente con el profesional." },
        { "question": "¿Un manitas puede hacer trabajos eléctricos, de gas o una reforma estructural?", "answer": "No debe suponerse por la categoría. Esos trabajos pueden exigir profesionales especializados y documentación específica; consulta Electricistas, Instaladores de gas o Albañiles según corresponda." },
        { "question": "¿Cuánto cuesta un pequeño arreglo?", "answer": "Depende del trabajo, materiales, desplazamiento y condiciones acordadas con el profesional. ProLocal no publica un precio real ni gestiona presupuestos para estos perfiles de muestra." },
        { "question": "¿Puedo contratar a los profesionales de esta página?", "answer": "No. Los seis perfiles actuales son de demostración y no representan profesionales disponibles ni servicios publicados." }
      ],
      "related_intro": "Para trabajos de carpintería más amplios, consulta Carpinteros; para persianas y mecanismos, Técnicos de persianas; para pintar o reparar acabados, Pintores; y para intervenciones de obra, Albañiles. El servicio concreto debe constar en cada perfil.",
      "final_cta_title": "Explora cómo se mostrarían los perfiles de Manitas",
      "final_cta_copy": "Por ahora las seis fichas son de demostración y no permiten contratar a un profesional real. Cuando se publiquen perfiles auténticos, podrás consultar su zona, servicios y documentación declarados y contactarles directamente.",
      "safety_note": "Antes de fijar un mueble o soporte pesado, confirma el tipo de pared, el peso y los anclajes con el profesional. No presupongas que un perfil de Manitas realiza trabajos eléctricos, de gas o estructurales."
    },
    "color": "#d7e5cf"
  },
  "placas-solares": {
    "slug": "placas-solares",
    "name": "Placas solares",
    "url": "/placas-solares/",
    "navigationGroup": "Climatización y energía",
    "metadata": {
      "h1": "Instaladores de placas solares en Vigo, A Coruña y Santiago",
      "title": "Instaladores de placas solares en Vigo, A Coruña y Santiago | ProLocal",
      "description": "Encuentra instaladores de placas solares en Vigo, A Coruña y Santiago. Compara perfiles, servicios declarados y etiquetas documentales; contacta directamente, sin intermediarios."
    },
    "keyword": {
      "primary": "instalador de placas solares",
      "secondary": [
        "instalador de placas solares Vigo",
        "instalador de placas solares A Coruña",
        "instalador de placas solares Santiago de Compostela",
        "presupuesto instalador de placas solares",
        "precio instalador de placas solares",
        "instalador de placas solares cerca de mí",
        "opiniones instalador de placas solares"
      ],
      "semantic_variants": [
        "placas solares",
        "paneles solares",
        "energía solar",
        "fotovoltaica",
        "autoconsumo",
        "instalador fotovoltaico",
        "autoconsumo con excedentes",
        "autoconsumo sin excedentes",
        "autoconsumo colectivo",
        "batería solar"
      ],
      "intent": "Transaccional-local con comparación previa: encontrar, evaluar y contactar directamente con un instalador de autoconsumo fotovoltaico.",
      "exclude_queries": [
        "comprar placas solares",
        "kits solares",
        "paneles solares DIY",
        "cómo instalar placas solares",
        "manual de conexión fotovoltaica",
        "curso instalador placas solares",
        "empleo instalador placas solares",
        "tarifa eléctrica",
        "comercializadora eléctrica",
        "planta fotovoltaica de venta a red",
        "solar térmica",
        "reparación de goteras",
        "impermeabilización de cubierta",
        "subvenciones placas solares sin fuente oficial vigente",
        "instalador de placas solares barato",
        "mejores instaladores de placas solares"
      ]
    },
    "services": [
      "Evaluación, diseño e instalación de autoconsumo fotovoltaico para vivienda, comunidad o pequeño negocio, si el perfil lo declara.",
      "Instalaciones con excedentes o sin excedentes, si el perfil lo declara.",
      "Autoconsumo colectivo para comunidades de propietarios, si el perfil lo declara.",
      "Integración de baterías, si el perfil lo declara.",
      "Ampliación, revisión o mantenimiento de instalación fotovoltaica existente, si el perfil lo declara.",
      "Gestión técnica o administrativa vinculada a la instalación, únicamente si el perfil la declara expresamente."
    ],
    "relatedSlugs": [
      "electricistas",
      "aire-acondicionado",
      "impermeabilizaciones"
    ],
    "content": {
      "slug": "placas-solares",
      "name": "Placas solares",
      "eyebrow": "Directorio de contacto directo · Vista de demostración",
      "hero_title": "Instaladores de placas solares en Vigo, A Coruña y Santiago",
      "hero_intro": "Explora cómo se presentarían instaladores de autoconsumo fotovoltaico y compara servicios declarados antes de contactar directamente. Esta página está en modo demostración: los seis perfiles mostrados deben llevar el aviso Perfil de demostración — no corresponde a una oferta real y la página debe permanecer noindex.",
      "category_intro_title": "Servicios de autoconsumo fotovoltaico, explicados con claridad",
      "category_intro_paragraphs": [
        "La categoría Placas solares reúne perfiles de profesionales dedicados al diseño e instalación de autoconsumo fotovoltaico para vivienda, comunidades de propietarios y pequeños negocios. En una publicación con inventario real, cada ficha mostraría únicamente los servicios, la zona y los canales de contacto que el propio perfil haya declarado.",
        "ProLocal es un directorio de contacto directo, no un marketplace: no reparte solicitudes, no negocia presupuestos y no participa en la contratación. Esta versión utiliza perfiles de demostración, por lo que no informa de disponibilidad, cobertura efectiva, precios, reseñas ni resultados reales. La categoría se limita al autoconsumo fotovoltaico; la electricidad general, la solar térmica, la climatización y las reparaciones de cubierta corresponden a sus categorías específicas."
      ],
      "service_cards": [
        {
          "title": "Instalación de autoconsumo fotovoltaico",
          "description": "Diseño e instalación de sistemas para producir electricidad destinada al autoconsumo, solo cuando el perfil lo declare."
        },
        {
          "title": "Soluciones para vivienda y pequeño negocio",
          "description": "Proyectos adaptados al tipo de inmueble o actividad que el profesional indique expresamente en su ficha."
        },
        {
          "title": "Autoconsumo para comunidades",
          "description": "Opciones para comunidades de propietarios, incluido el autoconsumo colectivo, únicamente si el perfil declara este alcance."
        },
        {
          "title": "Instalaciones con o sin excedentes",
          "description": "Modalidades que un perfil puede señalar como parte de su servicio; sus condiciones se confirman para cada caso."
        },
        {
          "title": "Integración de baterías",
          "description": "Incorporación de almacenamiento cuando el profesional lo haya incluido entre sus servicios declarados."
        },
        {
          "title": "Ampliación, revisión y mantenimiento",
          "description": "Trabajos sobre instalaciones fotovoltaicas existentes, si el perfil especifica que los realiza."
        },
        {
          "title": "Gestión técnica o administrativa vinculada",
          "description": "Apoyo relacionado con la instalación solo cuando se declare de forma expresa; no supone aprobación de trámites ni concesión de ayudas."
        }
      ],
      "choose_title": "Qué comparar antes de contactar",
      "choose_intro": "Para valorar un perfil, revisa datos concretos y confirma el alcance directamente con el profesional. Las especialidades son declaraciones del perfil y las etiquetas documentales solo describen documentación aportada y comprobada manualmente; no son una recomendación ni una garantía de resultado.",
      "choose_points": [
        {
          "title": "Tipo de proyecto atendido",
          "description": "Comprueba si el perfil declara trabajos para vivienda, comunidad de propietarios o pequeño negocio."
        },
        {
          "title": "Servicios y modalidad declarados",
          "description": "Revisa si menciona instalación, batería, mantenimiento, ampliación, autoconsumo colectivo o modalidad con o sin excedentes."
        },
        {
          "title": "Zona de servicio declarada",
          "description": "Consulta la ciudad o el ámbito indicado por el profesional sin asumir cobertura fuera de lo publicado."
        },
        {
          "title": "Documentación aportada",
          "description": "Si aparece una etiqueta, identifica qué documento concreto fue aportado; no equivale a aval de calidad ni de cumplimiento en tu caso."
        },
        {
          "title": "Alcance y contacto directo",
          "description": "Pregunta qué incluye la visita, el diseño, la instalación y cualquier gestión asociada antes de decidir."
        }
      ],
      "price_title": "Qué puede influir en un presupuesto de placas solares",
      "price_intro": "ProLocal no fija precios ni publica importes orientativos sin fuente y metodología. Al hablar con un profesional, pide que detalle el alcance y los condicionantes de tu caso para poder comparar propuestas de forma informada.",
      "price_factors": [
        "Consumo eléctrico y patrón de uso del inmueble.",
        "Potencia y dimensionado propuestos para la instalación.",
        "Modalidad de autoconsumo y tratamiento de excedentes.",
        "Incorporación de baterías u otros elementos de almacenamiento.",
        "Estado de la instalación eléctrica, características y accesibilidad de la cubierta.",
        "Trabajos adicionales, documentación y gestiones que se incluyan expresamente."
      ],
      "coverage_title": "Ciudades piloto y estado de esta página",
      "coverage_intro": "La implantación prevista para esta categoría se limita a Vigo, A Coruña y Santiago de Compostela. Esta página no acredita que haya profesionales reales, cobertura efectiva ni atención disponible en esas ciudades: muestra seis perfiles de demostración claramente identificados y debe publicarse como noindex. Las futuras páginas locales solo se crearán e indexarán cuando exista inventario real, independiente y revisado.",
      "faqs": [
        {
          "question": "¿Los perfiles de esta página son ofertas reales?",
          "answer": "No. Esta versión usa seis perfiles de demostración y cada uno debe indicar Perfil de demostración — no corresponde a una oferta real. No deben usarse para contratar ni para inferir disponibilidad o cobertura."
        },
        {
          "question": "¿Qué servicios de placas solares puede mostrar un perfil?",
          "answer": "Solo los que haya declarado, como instalación fotovoltaica, batería, mantenimiento, ampliación o trabajo para comunidades. No se asignan servicios por defecto."
        },
        {
          "question": "¿ProLocal solicita presupuestos o intermedia en la contratación?",
          "answer": "No. ProLocal funciona como directorio de contacto directo: no distribuye solicitudes, no negocia condiciones y no forma parte del contrato."
        },
        {
          "question": "¿Cómo se comparan instaladores de placas solares?",
          "answer": "Compara el tipo de proyecto, los servicios y la zona que cada perfil declare, la documentación aportada cuando exista y el alcance confirmado en el contacto directo."
        },
        {
          "question": "¿Puedo buscar opciones para una comunidad de propietarios?",
          "answer": "El autoconsumo colectivo está contemplado en la regulación. En un listado real, conviene revisar los perfiles que declaren expresamente trabajo para comunidades y confirmar el encaje del proyecto."
        },
        {
          "question": "¿Qué diferencia hay entre autoconsumo con y sin excedentes?",
          "answer": "En la modalidad con excedentes puede haber inyección de energía a la red; en la modalidad sin excedentes se evita esa inyección mediante el mecanismo correspondiente. La solución aplicable debe valorarse para cada instalación."
        },
        {
          "question": "¿Se puede incluir una batería?",
          "answer": "Puede formar parte del proyecto cuando el profesional lo declare y el caso sea técnicamente adecuado. Confirma el alcance, las protecciones aplicables y la documentación necesaria antes de contratar."
        },
        {
          "question": "¿Qué significan las etiquetas de verificación?",
          "answer": "Indican que ProLocal ha recibido y comprobado manualmente un documento concreto, como identidad, alta, seguro RC o certificación aportada. No califican la calidad ni garantizan el resultado del servicio."
        },
        {
          "question": "¿El instalador incluye permisos, registro o compensación de excedentes?",
          "answer": "Depende del alcance declarado por cada profesional. Pregunta qué gestiones incluye; los requisitos y la documentación aplicable pueden variar según la instalación."
        },
        {
          "question": "¿Hay ayudas para instalaciones de placas solares?",
          "answer": "No se debe asumir que exista una ayuda vigente o aplicable. Los plazos, destinatarios y condiciones cambian; consulta una fuente oficial actualizada antes de tomar una decisión."
        }
      ],
      "related_intro": "Si tu necesidad no es una instalación de autoconsumo fotovoltaico, explora la categoría correspondiente: Electricistas para trabajos eléctricos generales, Aire acondicionado para equipos de refrigeración e Impermeabilizaciones si la cubierta requiere reparación antes de cualquier obra. Los sistemas de calefacción requieren un profesional que declare esa especialidad; no se incluyen automáticamente en un servicio de placas solares.",
      "final_cta_title": "Explora servicios declarados con contexto",
      "final_cta_copy": "Esta vista de demostración explica cómo se mostrarían perfiles, servicios y datos factuales en ProLocal. Cuando la categoría cuente con perfiles reales y revisados, podrás consultar sus datos publicados y contactar directamente, sin intermediación de ProLocal.",
      "safety_note": "Las instalaciones fotovoltaicas implican trabajos eléctricos y, con frecuencia, en cubierta. No realices conexiones, modificaciones ni trabajos en altura por tu cuenta; confirma que el profesional responsable y la documentación aplicable se ajustan a tu caso."
    },
    "color": "#cfeef2"
  },
  "desatascos": {
    "slug": "desatascos",
    "name": "Desatascos",
    "url": "/desatascos/",
    "navigationGroup": "Hogar y mantenimiento",
    "metadata": {
      "h1": "Encuentra profesionales de desatascos",
      "title": "Profesionales de desatascos | ProLocal",
      "description": "Encuentra perfiles de desatascos en las ciudades disponibles de ProLocal. Consulta servicios, zona de atención y contacta directamente."
    },
    "keyword": {
      "primary": "desatascos",
      "secondary": [
        "desatascos Vigo",
        "desatascos A Coruña",
        "desatascos Santiago de Compostela",
        "desatasco urgente",
        "desatascos 24 horas",
        "presupuesto desatascos",
        "precio desatascos"
      ],
      "semantic_variants": [
        "desatasco",
        "desatrancos",
        "limpieza de tuberías",
        "desatasco urgente",
        "pocería"
      ],
      "intent": "Principalmente transaccional local y de alta inmediatez: encontrar un profesional para contactar directamente; secundaria de evaluación por alcance, zona, urgencia declarada, presupuesto y opiniones.",
      "exclude_queries": [
        "cómo desatascar un fregadero, inodoro o ducha",
        "remedios caseros, productos químicos o tutoriales DIY",
        "averías o atascos de alcantarillado público",
        "inundaciones en vía pública o emergencias de protección civil",
        "entrada o trabajo en alcantarillas, pozos o espacios confinados para particulares",
        "vertidos industriales, agrícolas o ganaderos regulados",
        "vaciado de fosas, transporte o gestión de residuos sin un alcance y acreditación específicos",
        "mejor empresa, más barato o rankings editoriales"
      ]
    },
    "services": [
      "Desbloqueo de desagües, sanitarios, bajantes, arquetas o colectores privados, solo si el perfil lo declara.",
      "Limpieza preventiva de tuberías, arquetas o redes privadas, solo si se declara.",
      "Diagnóstico con cámara de inspección como especialización declarada.",
      "Información de cobertura y contacto directo del profesional."
    ],
    "relatedSlugs": [
      "fontaneros",
      "albaniles",
      "reformas-banos"
    ],
    "content": {
      "slug": "desatascos",
      "name": "Desatascos",
      "eyebrow": "DEMO - noindex. Los seis perfiles mostrados son perfiles de demostración y no corresponden a una oferta real.",
      "hero_title": "Encuentra profesionales de desatascos",
      "hero_intro": "Consulta cómo se presentarían los perfiles de desatascos, los servicios que cada uno declare y su zona de atención declarada, con contacto directo y sin intermediarios. Esta página es una demostración no indexable: los seis perfiles visibles están identificados como Perfil de demostración - no corresponde a una oferta real y no indican disponibilidad ni cobertura reales.",
      "category_intro_title": "Desatascos para conducciones de evacuación privadas",
      "category_intro_paragraphs": [
        "La categoría Desatascos agrupa perfiles que, cuando lo declaren, atienden bloqueos, limpieza, diagnóstico o mantenimiento de conducciones de evacuación de una propiedad. Puede incluir desagües, sanitarios, bajantes, arquetas o colectores privados, siempre con el alcance concreto indicado en cada perfil.",
        "No sustituye una reparación, instalación o renovación de tuberías, grifería o sanitarios: esas necesidades corresponden también a Fontaneros. Tampoco cubre obras posteriores, daños estructurales de red, vertidos regulados, fosas sépticas ni incidencias del alcantarillado público. La pocería solo debe aparecer como especialización cuando un perfil la declare expresamente."
      ],
      "service_cards": [
        {
          "title": "Desatasco de desagües",
          "description": "Para perfiles que declaren atención a desagües de fregaderos, lavabos, duchas u otros puntos de evacuación privados."
        },
        {
          "title": "Atascos en sanitarios",
          "description": "Servicio aplicable cuando el perfil indique expresamente que atiende inodoros u otros sanitarios de la propiedad."
        },
        {
          "title": "Bajantes y conducciones privadas",
          "description": "Para la limpieza o el desbloqueo de bajantes y tramos privados que el profesional haya incluido en su alcance."
        },
        {
          "title": "Arquetas y colectores privados",
          "description": "Puede figurar para arquetas o colectores dentro de una propiedad; no incluye alcantarillado ni infraestructura pública."
        },
        {
          "title": "Limpieza preventiva",
          "description": "Mantenimiento de tuberías, arquetas o redes privadas únicamente cuando el perfil lo declare como servicio."
        },
        {
          "title": "Inspección con cámara",
          "description": "Técnica de diagnóstico disponible solo en perfiles que la declaren; no equivale a una certificación ni anticipa una reparación."
        },
        {
          "title": "Atascos recurrentes",
          "description": "Permite localizar perfiles que declaren diagnóstico o limpieza para incidencias repetidas, sin presumir la causa ni la solución."
        }
      ],
      "choose_title": "Qué comparar antes de contactar",
      "choose_intro": "En un directorio de contacto directo, la decisión corresponde a quien contrata. Compara información declarada en el perfil y confirma las condiciones directamente con el profesional; ProLocal no asigna trabajos ni ordena perfiles por una supuesta calidad.",
      "choose_points": [
        {
          "title": "Zona de atención declarada",
          "description": "Revisa la ciudad y el área que el perfil diga atender. No se debe interpretar como una estimación de llegada ni como cobertura garantizada."
        },
        {
          "title": "Servicios concretos",
          "description": "Comprueba si el perfil declara el elemento afectado, como desagüe, sanitario, bajante, arqueta, limpieza preventiva o cámara."
        },
        {
          "title": "Canal de contacto directo",
          "description": "Usa el teléfono, WhatsApp o email publicado por el profesional para aclarar el alcance sin un formulario intermediario de ProLocal."
        },
        {
          "title": "Urgencias o 24 h",
          "description": "Si aparece esta etiqueta, es una declaración del profesional. Confirma directamente el horario y la disponibilidad antes de contar con la atención."
        },
        {
          "title": "Etiquetas documentales",
          "description": "Etiquetas como Identidad verificada, Alta de autónomo/empresa o Seguro RC aportado solo describen el documento revisado; no avalan calidad, resultado ni adecuación a un trabajo concreto."
        }
      ],
      "price_title": "Cómo pedir un alcance comparable",
      "price_intro": "ProLocal no fija ni publica tarifas de desatascos. Antes de aceptar una intervención, acuerda directamente con el profesional qué incluye el trabajo y solicita que aclare las condiciones aplicables a tu caso.",
      "price_factors": [
        "El elemento afectado y la accesibilidad del tramo.",
        "Si el atasco es puntual o recurrente.",
        "La necesidad de diagnóstico, como una inspección con cámara si el perfil la declara.",
        "La limpieza, reparación u obra adicional que pudiera resultar necesaria.",
        "La ciudad y el desplazamiento que declare el profesional.",
        "El horario, las condiciones de urgencia, los materiales, los impuestos y cualquier condición adicional acordada."
      ],
      "coverage_title": "Cobertura mostrada con prudencia",
      "coverage_intro": "Vigo, A Coruña y Santiago de Compostela son las ciudades piloto previstas para esta categoría, pero una página local solo debe publicarse cuando existan al menos seis perfiles distintos, activos, públicos y con contacto directo que declaren atender esa ciudad. Esta página no confirma que hoy exista esa cobertura: los seis perfiles que muestra son demostraciones y llevan el aviso Perfil de demostración - no corresponde a una oferta real.",
      "faqs": [
        {
          "question": "¿Qué tipo de desatasco puede declarar un perfil?",
          "answer": "El perfil debe especificar los servicios que ofrece, por ejemplo desagües, sanitarios, bajantes, arquetas o limpieza preventiva. No se presume que todos atiendan todos los casos."
        },
        {
          "question": "¿En qué ciudad y zona trabaja cada profesional?",
          "answer": "La ficha debe mostrar la ciudad y el área de atención que el propio profesional declare. ProLocal no calcula ni garantiza una zona o un tiempo de llegada."
        },
        {
          "question": "¿Una etiqueta de urgencias o 24 h asegura atención inmediata?",
          "answer": "No. Es una declaración del profesional y debe confirmarse al contactar, junto con el horario y la disponibilidad para ese caso."
        },
        {
          "question": "¿Puede un perfil indicar inspección con cámara?",
          "answer": "Sí, solo si declara ese servicio. Puede ser útil para valorar el alcance de una incidencia, pero no diagnostica por adelantado ni garantiza que no hagan falta otros trabajos."
        },
        {
          "question": "¿Qué información conviene facilitar en el primer contacto?",
          "answer": "Indica la dirección o ciudad, el elemento afectado, si el problema es puntual o recurrente y si hay agua retenida o rebosamiento."
        },
        {
          "question": "¿Qué debo confirmar antes de aceptar una intervención?",
          "answer": "Confirma el alcance previsto, desplazamiento, diagnóstico, limpieza, materiales, impuestos, posibles trabajos adicionales y condiciones de urgencia. El importe se acuerda directamente con el profesional."
        },
        {
          "question": "¿Qué significa una etiqueta documental del perfil?",
          "answer": "Indica que el perfil aportó el documento señalado y que ProLocal lo revisó manualmente. No equivale a recomendación, garantía de calidad ni garantía de resultado."
        },
        {
          "question": "¿Cuándo no corresponde buscar un perfil de desatascos?",
          "answer": "No corresponde para una incidencia de red pública, un vertido regulado, una fosa séptica o una emergencia que requiera al servicio público competente."
        },
        {
          "question": "¿Qué residuo no conviene tirar por el inodoro?",
          "answer": "Toallitas, mascarillas, bastoncillos y otros productos no degradables pueden contribuir a atascos. El inodoro no debe usarse como papelera."
        }
      ],
      "related_intro": "Si, además de retirar un atasco, necesitas reparar una fuga, sustituir una tubería, abrir un revestimiento o reformar un baño, consulta las categorías relacionadas de [Fontaneros](/fontaneros/), [Albañiles](/albaniles/) y [Reformas de baños](/reformas-de-banos/). Son necesidades distintas y solo deben vincularse al alcance realmente declarado.",
      "final_cta_title": "¿Eres profesional de desatascos? Crea tu perfil",
      "final_cta_copy": "Muestra de forma clara los servicios y la zona que declaras, y publica un canal de contacto directo. Las verificaciones documentales, cuando procedan, son independientes de la visibilidad. Los perfiles de esta página son solo demostraciones y no representan una oferta real.",
      "safety_note": "Si hay un desbordamiento que pueda afectar a la seguridad de las personas o se trata de una incidencia en infraestructura pública, contacta con el servicio público competente o con emergencias según corresponda. No intentes intervenir en alcantarillas, pozos, arquetas profundas ni otros espacios confinados."
    },
    "color": "#e7e1d7"
  },
  "control-plagas": {
    "slug": "control-plagas",
    "name": "Control de plagas",
    "url": "/control-plagas/",
    "navigationGroup": "Hogar y mantenimiento",
    "metadata": {
      "h1": "Profesionales de control de plagas",
      "title": "Control de plagas: profesionales locales | ProLocal",
      "description": "Directorio para encontrar profesionales de control de plagas en Vigo, A Coruña y Santiago. Contacto directo, servicios y cobertura declarados."
    },
    "keyword": {
      "primary": "control de plagas",
      "secondary": [
        "control de plagas Vigo",
        "control de plagas A Coruña",
        "control de plagas Santiago de Compostela",
        "control de plagas urgente Vigo",
        "control de plagas urgente A Coruña",
        "control de plagas 24 horas Vigo",
        "control de plagas 24 horas A Coruña",
        "presupuesto control de plagas Vigo",
        "presupuesto control de plagas A Coruña",
        "precio control de plagas Vigo",
        "precio control de plagas A Coruña",
        "control de plagas cerca de mí",
        "opiniones control de plagas"
      ],
      "semantic_variants": [
        "desinsectación",
        "desratización",
        "fumigación",
        "plagas urbanas",
        "control integrado de plagas",
        "tratamiento biocida",
        "DDD"
      ],
      "intent": "Comercial local de alta proximidad, con subintención de comparación: el usuario busca identificar y contactar directamente con un servicio para una incidencia, prevención o mantenimiento y compara cobertura, urgencia, presupuesto y opiniones.",
      "exclude_queries": [
        "comprar insecticidas, venenos, trampas o productos",
        "remedios caseros",
        "tutoriales de fumigación",
        "dosificación o aplicación de biocidas",
        "identificación informativa de insectos",
        "cursos, empleo o alta profesional en control de plagas",
        "trámites de inscripción ROESB",
        "control fitosanitario agrícola",
        "recogida de animales o fauna silvestre",
        "avisos destinados a servicios municipales"
      ]
    },
    "services": [
      "Diagnóstico o inspección de una incidencia",
      "Desinsectación declarada por el profesional",
      "Desratización declarada por el profesional",
      "Monitorización y planes de control",
      "Recomendaciones preventivas y de exclusión",
      "Actuaciones con biocidas cuando proceda y el profesional declare ese alcance",
      "Desinfección únicamente como especialidad declarada; no como sinónimo de limpieza"
    ],
    "relatedSlugs": [],
    "content": {
      "slug": "control-plagas",
      "name": "Control de plagas",
      "eyebrow": "DIRECTORIO DE CONTACTO DIRECTO · VERSIÓN DE DEMOSTRACIÓN · NOINDEX",
      "hero_title": "Profesionales de control de plagas",
      "hero_intro": "Explora cómo ProLocal organiza servicios de control de plagas para que puedas revisar especialidades y cobertura declaradas antes de contactar directamente. Esta versión noindex utiliza seis perfiles de demostración: Perfil de demostración — no corresponde a una oferta real.",
      "category_intro_title": "Qué puedes encontrar en Control de plagas",
      "category_intro_paragraphs": [
        "Esta categoría reúne servicios profesionales para incidencias de plagas urbanas, desde la inspección o diagnosis hasta la desinsectación, la desratización, la monitorización y las recomendaciones preventivas. Los términos fumigación, desinsectación y desratización pueden describir especialidades distintas dentro de una misma búsqueda de control de plagas.",
        "ProLocal es un directorio de contacto directo: no gestiona presupuestos, no cobra por solicitudes y no interviene en el acuerdo entre cliente y profesional. Revisa el alcance, la zona y los datos que cada perfil declare; las etiquetas documentales, cuando existan, describen documentos aportados y revisados, pero no garantizan calidad, resultado ni disponibilidad."
      ],
      "service_cards": [
        {
          "title": "Inspección y diagnosis de la incidencia",
          "description": "Valoración del indicio, la zona afectada y el entorno para que el profesional pueda explicar el alcance que propone."
        },
        {
          "title": "Desinsectación",
          "description": "Control de insectos cuando el perfil declare esta especialidad; no equivale a limpieza doméstica ni a una guía de productos."
        },
        {
          "title": "Desratización",
          "description": "Servicios orientados al control de roedores, con alcance y medidas concretas que deben confirmarse directamente con cada profesional."
        },
        {
          "title": "Monitorización y planes de control",
          "description": "Seguimiento o planes programados cuando estén declarados por el perfil, especialmente para comparar necesidades de mantenimiento."
        },
        {
          "title": "Prevención y exclusión",
          "description": "Recomendaciones para reducir condiciones o accesos que puedan favorecer una incidencia; las reparaciones, sellados y obras corresponden a sus categorías específicas."
        },
        {
          "title": "Actuaciones con biocidas cuando proceda",
          "description": "Un perfil puede declarar este alcance. Conviene preguntar por las medidas de seguridad, la documentación aplicable y el certificado del servicio cuando corresponda."
        },
        {
          "title": "Organismos que afectan a la madera",
          "description": "Solo debe mostrarse como especialidad si el perfil la declara. La reparación o sustitución de elementos de madera se gestiona con profesionales de carpintería."
        }
      ],
      "choose_title": "Qué comparar antes de contactar",
      "choose_intro": "Describe la situación con datos útiles y compara únicamente la información visible de cada perfil. Si necesitas una respuesta prioritaria, consulta al profesional: ProLocal no promete plazos, atención urgente ni disponibilidad.",
      "choose_points": [
        {
          "title": "Indicio y tipo de incidencia",
          "description": "Indica qué has observado y desde cuándo, sin asumir un diagnóstico. Esto ayuda a iniciar una conversación más concreta."
        },
        {
          "title": "Entorno y zona afectada",
          "description": "Aclara si se trata de una vivienda, comunidad, local o negocio y qué áreas están afectadas, si las conoces."
        },
        {
          "title": "Especialidad y alcance declarados",
          "description": "Comprueba si el perfil declara inspección, desinsectación, desratización, monitorización u otra especialidad pertinente."
        },
        {
          "title": "Cobertura y contacto directo",
          "description": "Revisa la ciudad o zona declarada y utiliza el canal de contacto del perfil para confirmar si puede atender tu caso."
        },
        {
          "title": "Documentación y condiciones aplicables",
          "description": "Cuando corresponda, pregunta por la inscripción o documentación aplicable, las medidas de seguridad y el certificado que se entregaría tras el servicio."
        }
      ],
      "price_title": "Cómo pedir y comparar un presupuesto",
      "price_intro": "No hay una tarifa única de control de plagas. Solicita el presupuesto directamente al profesional y pide que aclare el alcance previsto, las visitas incluidas y cualquier condición relevante antes de decidir.",
      "price_factors": [
        "Tipo de incidencia y datos disponibles para valorar el caso.",
        "Extensión y zonas afectadas dentro del inmueble o entorno.",
        "Necesidad de inspección o diagnosis previa.",
        "Método previsto y medidas de seguridad aplicables.",
        "Número de visitas, monitorización o seguimiento que se proponga.",
        "Condiciones de acceso, preparación del espacio o solicitud de atención prioritaria."
      ],
      "coverage_title": "Busca por ciudad solo cuando haya información real",
      "coverage_intro": "Vigo, A Coruña y Santiago de Compostela son las ciudades piloto de esta categoría. Una página local solo debe publicarse cuando existan perfiles independientes, activos y contactables con cobertura declarada y revisada para esa ciudad; una opción sin ese respaldo no debe presentarse como disponible. Los seis perfiles mostrados en esta versión son demostraciones y no reflejan cobertura ni oferta reales.",
      "faqs": [
        {
          "question": "¿Qué información conviene indicar al contactar con un servicio de control de plagas?",
          "answer": "Explica el indicio observado, el entorno, las zonas afectadas, la ciudad y si hay alguna circunstancia que requiera atención prioritaria. El profesional confirmará qué información adicional necesita."
        },
        {
          "question": "¿El profesional realiza una inspección o diagnosis antes de proponer la actuación?",
          "answer": "Depende del perfil y del caso. Pregunta si prevé una inspección o diagnosis y cómo delimitará el alcance antes de proponer una actuación."
        },
        {
          "question": "¿Qué diferencia hay entre desinsectación, desratización y desinfección?",
          "answer": "La desinsectación se refiere al control de insectos y la desratización al de roedores. La desinfección no es sinónimo de limpieza ni debe asumirse como servicio incluido salvo que el perfil la declare específicamente."
        },
        {
          "question": "¿La empresa atiende viviendas, comunidades de propietarios, locales o negocios?",
          "answer": "Compruébalo en el alcance declarado y confírmalo por contacto directo. Cada profesional puede atender entornos distintos."
        },
        {
          "question": "¿Qué medidas preventivas o correcciones puede recomendar el servicio además del control directo?",
          "answer": "Puede valorar medidas de higiene, comportamiento o exclusión según el caso. Las reparaciones de tuberías, obras, sellados o carpintería deben contratarse en sus categorías correspondientes."
        },
        {
          "question": "Si se usan biocidas, ¿qué medidas de seguridad y plazo de seguridad deben comunicarse?",
          "answer": "Pide al profesional que indique las medidas de seguridad y el plazo que resulte aplicable a la actuación propuesta. No sigas instrucciones genéricas ni utilices productos sin la orientación adecuada."
        },
        {
          "question": "¿Qué certificado o información se entrega tras una actuación aplicable?",
          "answer": "Cuando corresponda, pregunta qué documento entregará el servicio. La información aplicable puede incluir lugar y fecha, agente a combatir, método, productos, plazo de seguridad y medidas recomendadas."
        },
        {
          "question": "¿Cómo puedo comprobar si el servicio debe figurar en el ROESB?",
          "answer": "Consulta directamente al profesional por la inscripción aplicable a su actividad y, si procede, por la documentación que pueda aportar. Estar en esta categoría no demuestra por sí solo inscripción ni autorización."
        },
        {
          "question": "¿Qué factores debe incluir un presupuesto de control de plagas?",
          "answer": "Pide que detalle la incidencia valorada, las zonas, la inspección previa si la hubiera, el método, las visitas previstas, el seguimiento y las condiciones de acceso o preparación."
        },
        {
          "question": "¿El perfil declara urgencias o atención 24 horas?",
          "answer": "Solo puede mostrarse si el propio perfil lo ha declarado. Confirma directamente su disponibilidad y plazo de respuesta, ya que ProLocal no los garantiza."
        }
      ],
      "related_intro": "Si la solución requiere higiene complementaria, consulta Limpieza doméstica. Para desatascos, fugas o reparaciones de tuberías, acude a Desatascos o Fontaneros; para obras, humedades, sellados o rehabilitación, revisa Albañiles, Reformas de baños, Reformas de cocinas e Impermeabilizaciones. Jardinería y reparación de madera se consultan por separado en Jardineros y Carpinteros.",
      "final_cta_title": "Consulta información declarada y contacta de forma directa",
      "final_cta_copy": "Al publicarse perfiles reales, podrás revisar sus especialidades, cobertura y canal de contacto antes de escribirles. Esta página es un prototipo noindex con tres muestras: Perfil de demostración — no corresponde a una oferta real. Si eres profesional, la información publicada debe describir solo tus servicios, zona y documentos realmente aportados.",
      "safety_note": "Por seguridad, ProLocal no ofrece instrucciones de fumigación, dosificación, aplicación de biocidas ni remedios caseros. Ante una incidencia, solicita orientación al profesional adecuado y confirma las medidas aplicables a tu caso."
    },
    "color": "#f2d7b6"
  },
  "limpieza-domestica": {
    "slug": "limpieza-domestica",
    "name": "Limpieza doméstica",
    "url": "/limpieza-domestica/",
    "navigationGroup": "Hogar y mantenimiento",
    "metadata": {
      "h1": "Limpieza doméstica: encuentra profesionales y empresas para tu hogar",
      "title": "Limpieza doméstica: profesionales y empresas | ProLocal",
      "description": "Encuentra perfiles de limpieza doméstica para tu hogar. Consulta servicios, zona y datos de verificación aportados, y contacta directamente con cada profesional."
    },
    "keyword": {
      "primary": "limpieza doméstica",
      "secondary": [
        "empresa de limpieza",
        "limpieza del hogar",
        "servicio de limpieza",
        "limpieza profesional",
        "empresa de limpieza cerca de mí",
        "presupuesto empresa de limpieza",
        "opiniones empresa de limpieza",
        "limpieza a fondo"
      ],
      "semantic_variants": [
        "limpieza doméstica",
        "limpieza del hogar",
        "limpieza de casa",
        "limpieza para viviendas",
        "asistenta",
        "empleada del hogar",
        "limpieza general",
        "limpieza a fondo",
        "empresa de limpieza para hogar"
      ],
      "intent": "Transaccional local, con componente comparativo: encontrar y contactar directamente con un profesional o empresa para limpiar una vivienda; las búsquedas de precio y presupuesto son apoyo previo a esa elección.",
      "exclude_queries": [
        "trabajo de limpieza",
        "ofertas de empleo de limpiadora",
        "curso de limpieza",
        "cómo limpiar la casa",
        "productos de limpieza",
        "aspiradoras",
        "limpieza industrial",
        "limpieza de oficinas",
        "limpieza de comunidades",
        "limpieza de obra",
        "desatascos",
        "control de plagas",
        "desinfección homologada"
      ]
    },
    "services": [
      "Limpieza ordinaria de viviendas, cuando el perfil la declare",
      "Limpieza periódica del hogar, cuando el perfil la declare",
      "Limpieza puntual o a fondo de una vivienda, cuando el perfil la declare",
      "Tareas concretas del hogar —por ejemplo, cocina, baños, suelos, polvo o plancha— únicamente si el perfil las declara",
      "Limpieza de entrada, salida o mudanza solo como atributo declarado y limitado a vivienda"
    ],
    "relatedSlugs": [
      "jardineros",
      "control-plagas",
      "reformas-banos",
      "reformas-cocinas",
      "albaniles",
      "pintores"
    ],
    "content": {
      "slug": "limpieza-domestica",
      "name": "Limpieza doméstica",
      "eyebrow": "Directorio de contacto directo para viviendas",
      "hero_title": "Limpieza doméstica: encuentra profesionales y empresas para tu hogar",
      "hero_intro": "Esta es una página de demostración configurada como noindex. Los seis perfiles mostrados deben llevar el aviso exacto \"Perfil de demostración — no corresponde a una oferta real\" y no acreditan disponibilidad, cobertura ni condiciones de servicio. ProLocal es un directorio para consultar, cuando existan perfiles reales, los servicios y la zona que cada profesional o empresa declare y contactar directamente con ese perfil.",
      "category_intro_title": "Limpieza para viviendas, con el alcance que declara cada perfil",
      "category_intro_paragraphs": [
        "La categoría de limpieza doméstica se centra en necesidades de hogares y viviendas particulares. Un perfil puede declarar limpieza ordinaria, periódica, a fondo o tareas concretas, como cocina, baños, suelos, polvo o plancha. También puede indicar una limpieza de entrada, salida o mudanza si explica que se realiza en una vivienda y cuál es su alcance.",
        "No incluye limpieza de oficinas, locales, naves, comunidades ni limpieza industrial. Tampoco cubre limpieza final de obra, escombros, desinfección especializada, control de plagas, cuidado profesional de personas o menores, jardinería, cristales de fachada ni trabajos en altura. ProLocal no presta el servicio ni gestiona conversaciones, presupuestos, pagos, agendas, contratos o reclamaciones."
      ],
      "service_cards": [
        {
          "title": "Limpieza ordinaria de vivienda",
          "description": "Para el mantenimiento habitual de espacios interiores de un hogar, solo según las tareas que el perfil detalle."
        },
        {
          "title": "Limpieza periódica",
          "description": "Para necesidades recurrentes en una vivienda; la frecuencia y la duración deben confirmarse directamente con cada perfil."
        },
        {
          "title": "Limpieza puntual",
          "description": "Para una necesidad concreta en el hogar, sin asumir que el perfil acepte fechas, horarios o encargos determinados."
        },
        {
          "title": "Limpieza a fondo",
          "description": "Para una intervención más amplia en una vivienda cuando el perfil la haya declarado y concrete qué incluye."
        },
        {
          "title": "Cocina, baños, suelos y polvo",
          "description": "Tareas domésticas concretas que pueden figurar en una ficha, sin dar por hecho que todos los perfiles las realizan."
        },
        {
          "title": "Plancha y otras tareas del hogar",
          "description": "Puede aparecer como servicio declarado dentro del ámbito doméstico; conviene confirmar el alcance antes de acordarlo."
        },
        {
          "title": "Entrada, salida o mudanza en una vivienda",
          "description": "Puede indicarse cuando se trate de limpieza residencial y el perfil explique sus límites; no equivale a limpieza de obra."
        }
      ],
      "choose_title": "Qué comparar antes de contactar",
      "choose_intro": "La ficha debe ayudar a comparar información declarada, no sustituir la conversación directa ni presentar etiquetas documentales como una garantía. En esta demostración, los datos de los seis perfiles no describen una oferta real.",
      "choose_points": [
        {
          "title": "Servicios declarados",
          "description": "Revisa qué tareas incluye el perfil y qué deja fuera; no presupongas limpieza a fondo, plancha o materiales si no aparecen indicados."
        },
        {
          "title": "Zona de desplazamiento",
          "description": "Consulta la cobertura que el perfil declare y confírmala antes de avanzar. Una ciudad en el selector no prueba que exista atención en esa zona."
        },
        {
          "title": "Tipo de perfil",
          "description": "Distingue entre empresa, autónomo o una posible contratación directa cuando esa información esté declarada; la modalidad aplicable depende de cada relación."
        },
        {
          "title": "Información publicada por el perfil",
          "description": "La experiencia descrita, las fotos o trabajos publicados y el detalle del servicio pueden servir para comparar, sin convertirlos en una recomendación de ProLocal."
        },
        {
          "title": "Etiquetas documentales y contacto",
          "description": "Una etiqueta como Identidad verificada solo informa del documento aportado y comprobado. No garantiza resultados, seguro, disponibilidad ni calidad; usa la vía de contacto visible para aclarar el encargo."
        }
      ],
      "price_title": "Cómo plantear el presupuesto de limpieza doméstica",
      "price_intro": "ProLocal no publica tarifas, medias ni presupuestos cerrados sin datos aportados por un perfil real. Si contactas con un perfil real en el futuro, comparte el alcance de la vivienda y pide que se concrete qué incluye el importe y bajo qué modalidad se contrataría.",
      "price_factors": [
        "Frecuencia y duración previstas del servicio",
        "Tamaño, distribución y estado de la vivienda",
        "Tareas solicitadas y necesidad de limpieza a fondo",
        "Materiales y equipos que aporte cada parte",
        "Zona y posible desplazamiento",
        "Modalidad de contratación que corresponda"
      ],
      "coverage_title": "Cobertura local: solo cuando esté declarada y publicada",
      "coverage_intro": "El estudio contempla Vigo, A Coruña y Santiago de Compostela, pero esta demostración no prueba cobertura en ninguna de ellas. Una página local solo debe publicarse cuando existan al menos cinco perfiles públicos, distintos y activos, revisados manualmente, que indiquen limpieza de viviendas, cobertura real de la ciudad, información no duplicada y una vía de contacto directa visible. Hasta entonces, el selector de ciudad no debe prometer resultados ni crear una landing local indexable.",
      "faqs": [
        {
          "question": "¿Qué tareas de limpieza doméstica ofrece cada perfil?",
          "answer": "Solo las tareas que figuren como servicios declarados en su ficha. No se deben dar por incluidos cocina, baños, plancha, materiales o limpieza a fondo si el perfil no los especifica."
        },
        {
          "question": "¿Puedo buscar limpieza puntual o periódica para mi vivienda?",
          "answer": "Puede ser una necesidad dentro de la categoría, pero debes comprobar si el perfil real la declara y confirmarla directamente con él. Esta página de demostración no acredita que haya perfiles disponibles."
        },
        {
          "question": "¿Cómo se contacta con un profesional de limpieza?",
          "answer": "En una ficha real se mostraría la vía de contacto que el perfil decida publicar, como teléfono, WhatsApp o correo. ProLocal no interviene en la conversación, el presupuesto ni el pago."
        },
        {
          "question": "¿Qué significa Perfil de demostración — no corresponde a una oferta real?",
          "answer": "Indica que la ficha se usa únicamente para mostrar el formato de la categoría. No representa a un profesional o empresa contratables y no debe usarse para solicitar un servicio."
        },
        {
          "question": "¿Qué significa Identidad verificada?",
          "answer": "Significa que se ha comprobado el documento de identidad aportado para esa etiqueta. No es una recomendación ni una garantía de calidad, resultados, disponibilidad, seguro o cobertura."
        },
        {
          "question": "¿Qué diferencia hay entre contratar a una empresa o autónomo y contratar directamente para empleo de hogar?",
          "answer": "Son modalidades distintas. La relación especial de empleo de hogar se refiere, en términos generales, a servicios retribuidos prestados por cuenta y dependencia del titular del hogar; las relaciones contratadas por personas jurídicas quedan fuera de ella. Las partes deben valorar su caso y consultar la Seguridad Social y el BOE cuando proceda."
        },
        {
          "question": "¿Qué conviene confirmar antes de acordar una limpieza?",
          "answer": "Confirma alcance, frecuencia, duración estimada, materiales, acceso a la vivienda, zona, importe comunicado y modalidad de contratación. No des por sentada ninguna condición que no se haya acordado directamente."
        },
        {
          "question": "¿De qué depende el presupuesto de limpieza doméstica?",
          "answer": "Puede depender de la frecuencia, duración, tamaño y estado de la vivienda, tareas, materiales, desplazamiento y modalidad de contratación. La categoría no ofrece estimaciones ni tarifas no verificadas."
        },
        {
          "question": "¿Hay limpieza doméstica en Vigo, A Coruña o Santiago de Compostela?",
          "answer": "No debe afirmarse sin perfiles reales con cobertura declarada. Las páginas locales solo se publicarán si cumplen el umbral editorial de inventario útil; esta página noindex con demos no confirma resultados en ninguna ciudad."
        },
        {
          "question": "¿Hay consideraciones de seguridad si existe una relación de empleo de hogar?",
          "answer": "Sí. La normativa prevé una evaluación inicial de riesgos y, cuando corresponda, medidas preventivas y equipos adecuados a cargo de la persona empleadora. ProLocal no comprueba ni certifica ese cumplimiento; consulta la información oficial para tu caso."
        }
      ],
      "related_intro": "Si la necesidad no es limpieza ordinaria de una vivienda, busca la categoría que corresponda: Jardineros para exterior y jardín; Control de plagas para infestaciones; y Reformas de baños, Reformas de cocinas, Albañiles o Pintores para trabajos vinculados a una obra. Estas actividades no se presentan como parte de la limpieza doméstica.",
      "final_cta_title": "Consulta el formato del directorio con claridad",
      "final_cta_copy": "Los seis perfiles de esta página deben identificarse como \"Perfil de demostración — no corresponde a una oferta real\" y no habilitan una contratación. Cuando se publiquen perfiles reales, cada ficha podrá mostrar sus servicios, cobertura y contacto declarados para que la comunicación sea directa entre las partes, sin intermediación de ProLocal.",
      "safety_note": "En una contratación directa para tareas domésticas pueden existir obligaciones laborales y preventivas para el titular del hogar. Esta nota es solo contextual: ProLocal no presta asesoramiento jurídico ni verifica el cumplimiento de cada caso."
    },
    "color": "#d7e5cf"
  },
  "carpinteros": {
    "slug": "carpinteros",
    "name": "Carpinteros",
    "url": "/carpinteros/",
    "navigationGroup": "Hogar y mantenimiento",
    "metadata": {
      "h1": "Encuentra carpinteros para tu proyecto de madera",
      "title": "Carpinteros para muebles y trabajos de madera | ProLocal",
      "description": "Encuentra carpinteros para muebles a medida, armarios, puertas y trabajos de madera. Consulta perfiles y contacta directamente, sin intermediarios."
    },
    "keyword": {
      "primary": "carpinteros",
      "secondary": [
        "carpintero",
        "carpintero Vigo",
        "carpintero A Coruña",
        "carpintero en Vigo",
        "carpintero Santiago de Compostela",
        "presupuesto carpintero",
        "opiniones carpintero",
        "carpintero cerca de mí"
      ],
      "semantic_variants": [
        "carpintería",
        "ebanista",
        "muebles a medida",
        "carpintería de madera",
        "armarios a medida",
        "puertas de madera",
        "vestidores",
        "restauración de muebles"
      ],
      "intent": "Principalmente transaccional local: encontrar, evaluar y contactar directamente a un carpintero para un encargo de madera. La intención secundaria es mixta de evaluación (servicios, zona, trabajos, opiniones reales y señales documentales). Las consultas de precios son informacionales y deben resolverse en una guía separada, no como propósito principal del directorio.",
      "exclude_queries": [
        "curso de carpintería",
        "herramientas de carpintería",
        "planos de muebles",
        "cómo hacer un armario",
        "bricolaje",
        "empleo carpintero",
        "ofertas de trabajo carpintería",
        "carpintería metálica",
        "carpintería aluminio",
        "carpintería PVC",
        "cerrajería",
        "persianas",
        "instalar gas",
        "electricista",
        "fontanero",
        "materiales de carpintería"
      ]
    },
    "services": [
      "Muebles a medida",
      "Armarios y vestidores",
      "Puertas interiores y frentes",
      "Instalación o reparación de elementos de madera",
      "Revestimientos, rodapiés y remates",
      "Escaleras, pasamanos y barandillas de madera",
      "Mobiliario de cocina o baño",
      "Restauración de muebles",
      "Soluciones exteriores de madera cuando el perfil las declare"
    ],
    "relatedSlugs": [
      "reformas-cocinas",
      "reformas-banos",
      "pintores",
      "albaniles"
    ],
    "content": {
      "slug": "carpinteros",
      "name": "Carpinteros",
      "eyebrow": "Directorio de contacto directo",
      "hero_title": "Encuentra carpinteros para tu proyecto de madera",
      "hero_intro": "Consulta cómo se presentarían los perfiles de carpintería para muebles a medida, armarios, puertas y otros trabajos de madera. Esta página está en modo demostración, es noindex y sus seis perfiles no corresponden a una oferta real. Cuando existan perfiles publicados, ProLocal mostrará los servicios y la zona declarados para facilitar el contacto directo, sin intermediarios.",
      "category_intro_title": "Carpintería para muebles y elementos de madera",
      "category_intro_paragraphs": [
        "Esta categoría está pensada para proyectos de mobiliario, adaptación, instalación o reparación de elementos de madera y derivados. Puede incluir muebles a medida, armarios, vestidores, puertas interiores, frentes, rodapiés, remates y restauración, siempre que cada servicio esté declarado en el perfil.",
        "No abarca carpintería de aluminio, PVC o metal, ni sustituye una reforma integral o los oficios de albañilería, electricidad, fontanería, pintura o climatización. Cuando un proyecto combine varias necesidades, conviene delimitar qué parte corresponde al mobiliario o a los elementos de madera antes de contactar."
      ],
      "service_cards": [
        {
          "title": "Muebles a medida",
          "description": "Diseño, fabricación o adaptación de piezas para una estancia concreta, cuando el perfil declare este servicio."
        },
        {
          "title": "Armarios y vestidores",
          "description": "Soluciones de almacenaje, interiores y frentes para armarios o vestidores, según el alcance indicado por el profesional."
        },
        {
          "title": "Puertas interiores y frentes",
          "description": "Fabricación, adaptación, instalación o reparación de puertas interiores y frentes de madera o derivados declarados."
        },
        {
          "title": "Instalación y reparación de madera",
          "description": "Ajustes, montaje o reparación de elementos de madera existentes cuando el profesional incluya este tipo de trabajo."
        },
        {
          "title": "Revestimientos, rodapiés y remates",
          "description": "Colocación o acabado de revestimientos y remates de madera o derivados; no incluye trabajos de albañilería como oficio principal."
        },
        {
          "title": "Mobiliario de cocina o baño",
          "description": "Muebles, frentes y elementos de madera para cocina o baño, sin asumir una reforma integral ni instalaciones de otros oficios."
        },
        {
          "title": "Restauración de muebles",
          "description": "Reparación, recuperación o acabado de mobiliario cuando el perfil declare restauración en lugar de fabricación nueva."
        },
        {
          "title": "Soluciones exteriores de madera",
          "description": "Trabajos exteriores, ventanas o cerramientos de madera solo si el perfil describe el material y el alcance; no incluye aluminio, PVC ni estructuras."
        }
      ],
      "choose_title": "Qué revisar al comparar perfiles de carpintería",
      "choose_intro": "En una publicación con perfiles reales, la ficha debe ayudarte a revisar datos concretos antes de iniciar una conversación directa. Las especialidades y la zona de atención son declaraciones del profesional; las etiquetas documentales describen únicamente la documentación aportada y comprobada según la política de ProLocal.",
      "choose_points": [
        {
          "title": "Servicio y alcance declarados",
          "description": "Comprueba si el perfil incluye exactamente el trabajo que necesitas, como fabricación a medida, instalación, reparación o restauración."
        },
        {
          "title": "Medidas, materiales y acabado",
          "description": "Explica el uso de la pieza y pregunta por la medición, el material, los herrajes y el acabado que se plantearían para el proyecto."
        },
        {
          "title": "Zona de atención y canal de contacto",
          "description": "Revisa la zona declarada y utiliza el teléfono, WhatsApp o email que el profesional publique, sin que ProLocal distribuya tu solicitud."
        },
        {
          "title": "Trabajos publicados",
          "description": "Si el perfil muestra trabajos propios, valora si son comparables por tipo de proyecto, material o nivel de detalle, sin inferir resultados futuros."
        },
        {
          "title": "Etiquetas documentales",
          "description": "Identidad verificada, alta de autónomo o empresa, seguro RC aportado o certificación aportada describen documentos recibidos; no son una recomendación ni una garantía de calidad."
        }
      ],
      "price_title": "Qué puede influir en un presupuesto de carpintería",
      "price_intro": "No se publican tarifas ni rangos sin información trazable de un proyecto concreto. Al pedir un presupuesto directamente, describe el trabajo y solicita que se aclare qué partidas incluye para poder comparar propuestas con el mismo alcance.",
      "price_factors": [
        "La dimensión, complejidad y número de piezas del encargo.",
        "El material y la calidad de la madera o del tablero elegidos.",
        "El diseño, el acabado y los herrajes necesarios.",
        "La necesidad de medición, fabricación, transporte y montaje.",
        "El estado de la pieza, el acceso a la vivienda y el desplazamiento en trabajos de reparación o restauración.",
        "La exposición y el tratamiento requerido en elementos exteriores de madera."
      ],
      "coverage_title": "Perfiles y zonas de atención",
      "coverage_intro": "Esta versión no confirma cobertura, disponibilidad ni profesionales activos en ninguna ciudad: utiliza seis perfiles de demostración y se publica como noindex. En una ficha real, la zona de atención deberá ser la declarada por el profesional; Vigo, A Coruña y Santiago de Compostela son áreas piloto, no una afirmación de cobertura.",
      "faqs": [
        {
          "question": "¿Qué trabajos puede incluir la categoría Carpinteros?",
          "answer": "Muebles a medida, armarios, puertas interiores, frentes, remates, restauración y otros elementos de madera o derivados, únicamente cuando el perfil los declare."
        },
        {
          "question": "¿Incluye carpintería de aluminio, PVC o metal?",
          "answer": "No. Esos materiales pertenecen a categorías específicas cuando existan y no deben confundirse con trabajos de madera."
        },
        {
          "question": "¿Todos los carpinteros realizan muebles a medida?",
          "answer": "No debe suponerse. La fabricación a medida solo debe aparecer cuando el profesional la haya declarado en su perfil."
        },
        {
          "question": "¿Qué información conviene dar al contactar por un proyecto a medida?",
          "answer": "Indica el tipo de pieza, medidas aproximadas, uso previsto, material o acabado deseado y si necesitas medición o montaje."
        },
        {
          "question": "¿Puede el profesional visitar el espacio antes de presupuestar?",
          "answer": "Depende de cada profesional y del proyecto. Puedes preguntarlo directamente, junto con la zona que atiende y el alcance de la visita."
        },
        {
          "question": "¿Qué debería aclarar un presupuesto de carpintería?",
          "answer": "Conviene confirmar si diferencia diseño, materiales, fabricación, transporte y montaje, además de cualquier trabajo que quede fuera del alcance."
        },
        {
          "question": "¿Un carpintero puede reparar o restaurar un mueble existente?",
          "answer": "Algunos perfiles pueden declararlo, pero no es un servicio universal. Describe el estado de la pieza y confirma si ofrecen reparación, restauración o sustitución."
        },
        {
          "question": "¿Qué ocurre si el trabajo afecta a una ventana, una puerta exterior o un elemento de obra?",
          "answer": "Confirma con el profesional el alcance, la documentación que pueda ser necesaria y si se requiere coordinación técnica. ProLocal no valida el cumplimiento técnico por defecto."
        },
        {
          "question": "¿Qué significa Identidad verificada en un perfil de ProLocal?",
          "answer": "Significa que el perfil aportó el documento de identidad indicado y que se comprobó conforme a la política aplicable. No es una recomendación, una garantía de calidad ni una asunción de responsabilidad por parte de ProLocal."
        },
        {
          "question": "¿ProLocal intermedia en el presupuesto o asigna profesionales?",
          "answer": "No. ProLocal es un directorio de contacto directo y no distribuye solicitudes ni promete respuestas, precios o disponibilidad."
        }
      ],
      "related_intro": "Si tu proyecto requiere más que mobiliario o elementos de madera, consulta la categoría que corresponda a la necesidad concreta: reformas de cocina o baño para una intervención global, pintores para el acabado de paredes, albañiles para obra y técnico de persianas para persianas o automatismos. Estas categorías no sustituyen ni amplían el alcance de Carpinteros.",
      "final_cta_title": "Revisa la información del perfil antes de contactar",
      "final_cta_copy": "Los seis perfiles de esta versión son perfiles de demostración y no corresponden a una oferta real. En una publicación con inventario real, cada ficha mostrará los servicios y la zona declarados para que el contacto sea directo con el profesional, sin intermediarios.",
      "safety_note": "Si el proyecto afecta a una ventana o puerta exterior, a la envolvente del edificio, a una puerta cortafuego o a un elemento estructural, confirma con el profesional qué documentación o coordinación técnica es necesaria. ProLocal no valida por defecto el cumplimiento técnico."
    },
    "color": "#ddd0ef"
  },
  "jardineros": {
    "slug": "jardineros",
    "name": "Jardineros",
    "url": "/jardineros/",
    "navigationGroup": "Hogar y mantenimiento",
    "metadata": {
      "h1": "Jardineros: encuentra profesionales de jardinería cerca de ti",
      "title": "Jardineros cerca de ti | Contacto directo | ProLocal",
      "description": "Encuentra jardineros para mantenimiento, poda, césped y riego. Consulta perfiles y contacta directamente. Etiquetas documentales cuando se hayan aportado."
    },
    "keyword": {
      "primary": "jardineros",
      "secondary": [
        "jardinero",
        "jardinería",
        "mantenimiento de jardines",
        "poda",
        "césped",
        "riego",
        "presupuesto jardinero",
        "jardinero cerca de mí",
        "opiniones jardinero"
      ],
      "semantic_variants": [
        "mantenimiento de zonas verdes",
        "cuidado de jardines",
        "corte de césped",
        "desbroce",
        "poda de setos",
        "plantación",
        "trasplante",
        "riego automático",
        "paisajismo"
      ],
      "intent": "Comercial local con componente de investigación: encontrar y contactar directamente a un jardinero para mantenimiento, un trabajo puntual o comparar alcance, documentación y condiciones antes de contratar.",
      "exclude_queries": [
        "curso de jardinería",
        "empleo jardinero",
        "ofertas de trabajo jardinero",
        "herramientas de jardinería",
        "maquinaria de jardinería",
        "semillas y plantas",
        "viveros",
        "cómo podar",
        "tutorial de jardinería",
        "oposiciones de jardinería",
        "mantenimiento de parques públicos",
        "licitación jardinería",
        "sueldo jardinero",
        "convenio jardinería",
        "limpieza doméstica",
        "fumigación o desinfección generalista",
        "tala urgente",
        "mejor jardinero",
        "jardinero garantizado"
      ]
    },
    "services": [
      "Mantenimiento periódico o puntual de jardines, patios, terrazas vegetadas y zonas verdes",
      "Corte y cuidado de césped",
      "Desbroce y control no químico de malas hierbas",
      "Poda de setos, arbustos y elementos vegetales dentro de la capacidad y medios declarados",
      "Plantación, trasplante, abonado y mejora de elementos vegetales",
      "Instalación, ajuste y mantenimiento de riego de jardín cuando no implique trabajos propios de fontanería o electricidad",
      "Limpieza del jardín y retirada de restos solo si el perfil lo declara",
      "Diseño, instalación o mejora de jardín de escala coherente con la especialidad declarada",
      "Tratamientos fitosanitarios solo si el profesional aporta la documentación aplicable"
    ],
    "relatedSlugs": [
      "control-plagas",
      "fontaneros",
      "electricistas",
      "albaniles",
      "carpinteros",
      "limpieza-domestica"
    ],
    "content": {
      "slug": "jardineros",
      "name": "Jardineros",
      "eyebrow": "Directorio de contacto directo · Página de demostración noindex",
      "hero_title": "Jardineros: encuentra profesionales de jardinería cerca de ti",
      "hero_intro": "Esta página de demostración muestra cómo ProLocal organiza perfiles para mantenimiento, poda, césped y riego, con información declarada y contacto directo cuando existan perfiles reales publicados. Los seis perfiles de la interfaz deben llevar el aviso exacto: Perfil de demostración — no corresponde a una oferta real. Las etiquetas documentales solo reflejan documentos aportados; no garantizan resultados.",
      "category_intro_title": "Servicios de jardinería según el alcance declarado",
      "category_intro_paragraphs": [
        "Jardineros reúne trabajos de mantenimiento y mejora de jardines, patios, terrazas vegetadas y otras zonas verdes. En una ficha publicada, cada profesional debe indicar los servicios que declara realizar, su zona de servicio y los datos de contacto directo para que puedas valorar el encaje antes de contactar.",
        "La categoría puede incluir cuidado de césped, poda de vegetación, plantación, mejora de jardín y riego de jardín sin obra ni intervenciones propias de fontanería o electricidad. No abarca de forma general fumigación, obra civil, limpieza de vivienda, instalaciones eléctricas, conexiones de agua, tala ni trabajos en altura; esas necesidades requieren el profesional o la categoría correspondiente."
      ],
      "service_cards": [
        {
          "title": "Mantenimiento de jardines",
          "description": "Trabajos periódicos o puntuales en jardines, patios, terrazas vegetadas y zonas verdes, según el alcance que declare cada perfil."
        },
        {
          "title": "Césped y control no químico de malas hierbas",
          "description": "Corte y cuidado de césped, desbroce y control no químico de malas hierbas cuando el profesional los haya indicado."
        },
        {
          "title": "Poda de setos y arbustos",
          "description": "Poda de elementos vegetales dentro de la capacidad, los medios y las condiciones de seguridad declaradas por el profesional."
        },
        {
          "title": "Plantación y mejora vegetal",
          "description": "Plantación, trasplante, abonado y mejora de elementos vegetales como parte de un jardín o zona verde."
        },
        {
          "title": "Riego de jardín",
          "description": "Instalación, ajuste o mantenimiento de riego de jardín cuando no implique obra, conexiones de fontanería ni intervención eléctrica."
        },
        {
          "title": "Limpieza y restos verdes",
          "description": "Limpieza de jardín y retirada de restos vegetales solo si el perfil declara ambas tareas y explica cómo se gestionan."
        },
        {
          "title": "Diseño o mejora de jardín",
          "description": "Diseño, instalación o mejora de jardín en la escala que corresponda a la especialidad declarada; paisajismo es una especialidad autodeclarada, no una acreditación."
        }
      ],
      "choose_title": "Qué revisar antes de contactar",
      "choose_intro": "ProLocal no clasifica perfiles como mejores ni recomienda un supuesto ganador. Para comparar el ajuste a tu necesidad, revisa la información declarada en cada ficha y confirma directamente con el profesional el alcance concreto.",
      "choose_points": [
        {
          "title": "Tarea y superficie",
          "description": "Describe el trabajo que necesitas y una superficie aproximada para comprobar si el servicio declarado encaja."
        },
        {
          "title": "Estado, acceso y frecuencia",
          "description": "Conviene indicar el estado de la vegetación, las condiciones de acceso y si buscas una actuación puntual o mantenimiento regular."
        },
        {
          "title": "Zona de servicio",
          "description": "Revisa la zona que el perfil declara atender y confirma directamente si puede atender tu municipio."
        },
        {
          "title": "Alcance por escrito",
          "description": "Pide que se concreten tareas, herramientas, materiales, retirada de restos, frecuencia y posibles exclusiones."
        },
        {
          "title": "Información aportada en la ficha",
          "description": "Las fotos de trabajos, especialidades y etiquetas documentales solo deben valorarse según lo que el perfil haya aportado; las etiquetas no son una garantía de calidad ni de resultado."
        }
      ],
      "price_title": "Cómo pedir información sobre el coste",
      "price_intro": "ProLocal no publica tarifas ni rangos orientativos para jardinería. Al contactar directamente, pide que el profesional detalle qué incluye el trabajo y qué elementos quedan fuera antes de tomar una decisión.",
      "price_factors": [
        "Superficie aproximada y accesibilidad del jardín o zona verde.",
        "Tarea solicitada y estado inicial de la vegetación.",
        "Necesidad de maquinaria, herramientas o medidas de seguridad.",
        "Cantidad de restos vegetales y forma de gestión o retirada.",
        "Materiales, plantas o elementos que deban aportarse.",
        "Frecuencia del servicio y desplazamiento necesario."
      ],
      "coverage_title": "Contacto directo y cobertura declarada",
      "coverage_intro": "ProLocal es un directorio de contacto directo, no un marketplace ni un sistema de reserva. Las ciudades y zonas solo deben mostrarse cuando un perfil real las declare. Esta versión es noindex y utiliza seis perfiles de demostración, que no corresponden a una oferta real ni acreditan cobertura, disponibilidad o contacto efectivo.",
      "faqs": [
        {
          "question": "¿Qué trabajos puede realizar un jardinero?",
          "answer": "Según lo que declare cada perfil, puede incluir mantenimiento de jardines, césped, poda de vegetación, plantación, mejora de elementos vegetales y riego de jardín sin obra ni intervenciones de fontanería o electricidad."
        },
        {
          "question": "¿Qué información conviene dar antes de contactar con un jardinero?",
          "answer": "Indica la tarea, la superficie aproximada, el estado del jardín, el acceso, el municipio y si buscas una visita puntual o mantenimiento. Puedes aportar fotos si ayudan a describir el trabajo."
        },
        {
          "question": "¿Qué debería incluir un presupuesto de jardinería?",
          "answer": "Pide que se detalle el alcance, materiales, herramientas, gestión de restos, desplazamiento, frecuencia, plazo y posibles exclusiones. ProLocal no fija ni publica precios."
        },
        {
          "question": "¿Un jardinero puede encargarse de poda y retirada de restos?",
          "answer": "Solo si el perfil declara ambas tareas y concreta las condiciones de seguridad y retirada. No debe darse por hecho por pertenecer a la categoría."
        },
        {
          "question": "¿Necesito un profesional con carné para un tratamiento fitosanitario?",
          "answer": "Los tratamientos fitosanitarios de uso profesional están sujetos a requisitos de capacitación y registro. Confirma con el profesional la documentación aplicable y el alcance del servicio; ese requisito no se presume para toda la jardinería."
        },
        {
          "question": "¿Qué significan las etiquetas documentales de ProLocal?",
          "answer": "Identidad verificada indica que se aportó DNI o CIF. Las etiquetas de alta, seguro RC o certificación indican documentos aportados cuando existan; no constituyen una recomendación ni garantizan el trabajo."
        },
        {
          "question": "¿Cómo contacto con un jardinero en ProLocal?",
          "answer": "En una ficha real publicada, el contacto se realiza directamente mediante los datos que muestre el perfil. No hay intermediación de ProLocal ni registro obligatorio del cliente."
        },
        {
          "question": "¿Puedo encontrar mantenimiento regular y trabajos puntuales?",
          "answer": "Sí, cuando un perfil real declare esas modalidades. Antes de contratar, confirma directamente la periodicidad, las tareas incluidas y cualquier condición relevante."
        },
        {
          "question": "¿Hay jardineros en mi ciudad?",
          "answer": "Una ciudad solo debe aparecer cuando haya perfiles reales, publicados y contactables con cobertura declarada. Esta página de demostración no acredita inventario ni disponibilidad en ninguna ciudad."
        }
      ],
      "related_intro": "Si tu necesidad se aleja del mantenimiento ordinario del jardín, consulta la categoría adecuada: Control de plagas para fumigación, desinsectación o desratización; Fontaneros para fugas, tomas de agua y conexiones; Electricistas para iluminación exterior o automatización eléctrica; Albañiles para obra de jardín; Carpinteros para pérgolas, vallas y estructuras de madera; y Limpieza doméstica para limpieza de vivienda.",
      "final_cta_title": "Explora Jardineros en modo demostración",
      "final_cta_copy": "Los seis perfiles mostrados en esta página deben identificarse de forma visible como Perfil de demostración — no corresponde a una oferta real. Cuando ProLocal publique perfiles reales, podrás revisar los servicios y la zona declarados y contactar directamente con el profesional, sin que ProLocal intermedie ni prometa disponibilidad.",
      "safety_note": "Para tala, trabajos en altura o situaciones con riesgo sobre arbolado, no se debe asumir que un jardinero puede realizar el trabajo. Solo procede mostrar esa capacidad si un perfil la declara junto con los medios, condiciones de seguridad y documentación pertinente."
    },
    "color": "#f6c6b7"
  }
}

export const categoryPageList = Object.values(categoryPageData)
export const getCategoryPage = (slug: string) => categoryPageData[slug]

// Relaciones editoriales de refuerzo para categorías con menos de seis salientes:
// primero se conservan los enlaces ya existentes y después se completa desde la red.
const relatedStartingPoints: Record<string, string[]> = {
  fontaneros: ["instalador-gas"],
  antenistas: ["electricistas", "placas-solares", "tecnico-persianas", "manitas", "aire-acondicionado", "reformas-cocinas"],
  "tecnico-persianas": ["manitas"],
  "reformas-cocinas": ["reformas-banos", "fontaneros", "electricistas", "carpinteros", "albaniles", "pintores"],
  "tecnico-calderas": ["instalador-gas", "fontaneros", "aire-acondicionado", "electricistas", "placas-solares", "reformas-cocinas"],
  "instalador-gas": ["electricistas", "reformas-banos"],
  manitas: ["fontaneros", "electricistas"],
  "placas-solares": ["tecnico-calderas", "instalador-gas", "antenistas"],
  desatascos: ["impermeabilizaciones", "manitas", "limpieza-domestica"],
  "control-plagas": ["limpieza-domestica", "jardineros", "desatascos", "impermeabilizaciones", "carpinteros", "albaniles"],
}

export function getRelatedCategories(page: CategoryPageData) {
  const selected: Array<{ slug: string; when: string; category: CategoryPageData }> = []
  const editorial = page.content.related_cards || []
  const editorialDescription = new Map(editorial.map(item => [item.slug, item.when]))
  const add = (slug: string) => {
    const category = categoryPageData[slug]
    if (category && slug !== page.slug && !selected.some(item => item.slug === slug) && selected.length < 6) {
      selected.push({
        slug,
        when: editorialDescription.get(slug) || "Consulta esta especialidad para otras partes del trabajo, según los servicios declarados.",
        category,
      })
    }
  }

  editorial.forEach(item => add(item.slug))
  page.relatedSlugs.forEach(add)
  for (const slug of relatedStartingPoints[page.slug] || []) add(slug)
  categoryPageList.filter(item => item.relatedSlugs.includes(page.slug)).forEach(item => add(item.slug))
  categoryPageList.filter(item => item.navigationGroup === page.navigationGroup).forEach(item => add(item.slug))
  page.relatedSlugs.flatMap(slug => categoryPageData[slug]?.relatedSlugs || []).forEach(add)
  categoryPageList.forEach(item => add(item.slug))
  return selected
}

export const serviceSlug = (title: string) => title.toLocaleLowerCase("es")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

export const getServiceBySlug = (page: CategoryPageData, slug: string | null) =>
  slug ? page.content.service_cards.find(service => serviceSlug(service.title) === slug) : undefined
