// Editorial headings and checklists; paragraphs remain verbatim in blog-posts.ts.
export type BlogArticleStructure = {
  sections: {
    title: string
    blocks: { heading?: string; paragraphIndexes: number[] }[]
    checklistHeading?: string
    bullets?: string[]
  }[]
}

export const blogArticleStructures: Record<string, BlogArticleStructure> = {
  "acordar-encargo-profesional": {
    "sections": [
      {
        "title": "Deja claro el encargo antes de empezar",
        "blocks": [
          {
            "heading": "Delimita tareas, materiales y acceso",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Prevé cambios y avisos durante el trabajo",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Aclara la responsabilidad del servicio",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Puntos que conviene dejar cerrados",
        "bullets": [
          "Detalla qué hará cada parte y cómo se entrará al espacio.",
          "Fija fechas y cómo comunicar incidencias o cambios.",
          "Formaliza el acuerdo directamente con el cliente y no atribuyas a ProLocal la supervisión."
        ]
      }
    ]
  },
  "cerrajero-urgencia-vigo": {
    "sections": [
      {
        "title": "Cómo actuar ante una urgencia de cerrajería",
        "blocks": [
          {
            "heading": "Comprueba el acceso y describe la situación",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Aclara el coste y el alcance",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Qué solicitar al finalizar el servicio",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Puntos que conviene recordar",
        "bullets": [
          "Solicita la factura del trabajo realizado.",
          "Guarda los datos de la pieza colocada.",
          "Verifica directamente la disponibilidad del profesional."
        ]
      }
    ]
  },
  "como-elegir-fontanero-vigo": {
    "sections": [
      {
        "title": "Aclara la avería y prepara la visita",
        "blocks": [
          {
            "heading": "Qué debe incluir la propuesta inicial",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Cómo actuar ante una fuga",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Compara propuestas antes de decidir",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Preguntas prácticas antes de elegir",
        "bullets": [
          "Describe la avería y solicita por separado desplazamiento, trabajo y materiales antes de aceptar.",
          "Si es seguro, cierra la llave de paso y comunica los síntomas, el momento de inicio y la zona afectada.",
          "Contrasta alcance, materiales, plazos y posibles cambios, y comprueba si hay profesionales reales publicados antes de contactar."
        ]
      }
    ]
  },
  "mantenimiento-grifos-hogar": {
    "sections": [
      {
        "title": "Cómo observar señales de una posible fuga",
        "blocks": [
          {
            "heading": "Identificar goteos, manchas y humedad",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Qué hacer si el agua no deja de salir",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Qué compartir al pedir una revisión",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Pasos prácticos ante una posible fuga",
        "bullets": [
          "Anota los lugares donde notes señales de agua.",
          "Corta el suministro y restringe el uso del área si es seguro.",
          "Explica los síntomas y consulta qué revisión se realizará."
        ]
      }
    ]
  },
  "perfil-local-profesional": {
    "sections": [
      {
        "title": "Qué debe explicar tu perfil",
        "blocks": [
          {
            "heading": "Aclara tus servicios y zonas de trabajo",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Muestra trabajos propios con honestidad",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Qué ocurre al guardar tu perfil",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Antes de preparar el borrador",
        "bullets": [
          "Indica con precisión qué tareas realizas y dónde trabajas.",
          "Usa únicamente imágenes propias que tengas permiso para mostrar.",
          "Ten presente que el registro actual conserva un borrador local, sin publicar el perfil ni recibir contactos."
        ]
      }
    ]
  },
  "perfil-profesional-atraer-clientes": {
    "sections": [
      {
        "title": "Presenta con claridad tu trabajo",
        "blocks": [
          {
            "heading": "Define lo que haces y dónde trabajas",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Muestra trabajos y documentación",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Mantén tu información al día",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Pasos para revisar tu perfil",
        "bullets": [
          "Concreta tu oficio, servicios y zona de trabajo",
          "Incorpora ejemplos propios y la documentación que puedas aportar",
          "Comprueba periódicamente tus datos de contacto y servicios"
        ]
      }
    ]
  },
  "precio-electricista-a-coruna": {
    "sections": [
      {
        "title": "Cómo pedir un presupuesto eléctrico claro",
        "blocks": [
          {
            "heading": "Desglosa el coste según el trabajo",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Distingue diagnóstico, mano de obra y materiales",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Cómo comparar presupuestos",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Pasos antes de elegir",
        "bullets": [
          "Solicita ofertas con el mismo alcance de trabajo",
          "Confirma impuestos, desplazamiento y posibles modificaciones",
          "Verifica la disponibilidad y las condiciones con cada profesional"
        ]
      }
    ]
  },
  "preparar-reforma-santiago": {
    "sections": [
      {
        "title": "Define el alcance y organiza los oficios",
        "blocks": [
          {
            "heading": "Aclara qué quieres cambiar",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Separa los trabajos necesarios",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Revisa el presupuesto antes de decidir",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Pasos para comparar propuestas",
        "bullets": [
          "Anota los cambios y los elementos que deben conservarse.",
          "Identifica los oficios implicados y quién coordinará el trabajo.",
          "Comprueba las inclusiones, exclusiones e imprevistos de cada propuesta."
        ]
      }
    ]
  },
  "presupuesto-claro-para-clientes": {
    "sections": [
      {
        "title": "Detalla el alcance y el importe del trabajo",
        "blocks": [
          {
            "heading": "Define qué incluye la propuesta",
            "paragraphIndexes": [
              0
            ]
          },
          {
            "heading": "Aclara límites y posibles cambios",
            "paragraphIndexes": [
              1
            ]
          }
        ]
      },
      {
        "title": "Acordad las condiciones antes de empezar",
        "blocks": [
          {
            "paragraphIndexes": [
              2
            ]
          }
        ],
        "checklistHeading": "Pasos para cerrar el presupuesto",
        "bullets": [
          "Desglosa tareas, materiales, tiempos y cantidad total.",
          "Señala exclusiones y qué información falta para concretar.",
          "Pide la conformidad del cliente por el canal acordado."
        ]
      }
    ]
  }
}
