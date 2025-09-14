// Guides page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof guidesTranslations === 'undefined') {
    var guidesTranslations = {
        es: {
            meta: {
                title: "Guías - Minimal"
            },
            nav: {
                product: "Producto",
                howItWorks: "Cómo Funciona",
                benefits: "Beneficios",
                useCases: "Casos de Uso", 
                pricing: "Precios",
                tryFree: "Prueba Gratis"
            },
            hero: {
                title: "Guías y Mejores Prácticas",
                subtitle: "Aprende a maximizar el potencial de Minimal con nuestras guías detalladas, casos de uso y mejores prácticas probadas en producción."
            },
            categories: {
                implementation: {
                    title: "Implementación",
                    guides: [
                        "Guía de inicio rápido (5 minutos)",
                        "Configuración avanzada",
                        "Testing y debugging",
                        "Optimización de rendimiento",
                        "Migración desde otras plataformas"
                    ]
                },
                design: {
                    title: "Diseño y UX",
                    guides: [
                        "Personalización de marca",
                        "Diseño conversacional",
                        "Optimización móvil",
                        "Accesibilidad",
                        "Patrones de interfaz"
                    ]
                },
                analytics: {
                    title: "Analytics y Datos",
                    guides: [
                        "Métricas clave (KPIs)",
                        "Análisis de usuarios",
                        "Optimización de conversiones",
                        "Reportes automáticos",
                        "Exportación de datos"
                    ]
                },
                useCases: {
                    title: "Casos de Uso",
                    guides: [
                        "E-commerce y ventas",
                        "Generación de leads",
                        "Soporte al cliente",
                        "Descubrimiento de contenido",
                        "Onboarding de usuarios"
                    ]
                },
                optimization: {
                    title: "Optimización",
                    guides: [
                        "Optimización de contenido",
                        "Mejora de respuestas",
                        "Aumento de engagement",
                        "Tasa de conversión",
                        "Impacto en SEO"
                    ]
                },
                security: {
                    title: "Seguridad",
                    guides: [
                        "Privacidad de datos",
                        "Mejores prácticas de seguridad",
                        "Cumplimiento normativo",
                        "Respuesta a incidentes",
                        "Gestión de consentimientos"
                    ]
                }
            },
            quickStart: {
                title: "Guía de Inicio Rápido",
                subtitle: "Implementa Minimal en tu sitio web en menos de 5 minutos con esta guía paso a paso.",
                steps: [
                    {
                        title: "Obtén tu API Key",
                        description: "Regístrate en nuestra plataforma y recibe tu clave de API única por email.",
                        tip: "Guarda tu API key en un lugar seguro. La necesitarás para toda la configuración."
                    },
                    {
                        title: "Agrega el Script a tu Sitio",
                        description: "Copia este código y pégalo justo antes del tag </body> en tu HTML:"
                    },
                    {
                        title: "Personaliza la Configuración",
                        description: "Opcionalmente, personaliza colores y comportamiento:"
                    },
                    {
                        title: "Verifica la Instalación",
                        description: "Refresca tu sitio web y busca el ícono de chat en la esquina inferior derecha. ¡Ya tienes Minimal funcionando!",
                        warning: "El chat puede tardar 2-3 minutos en aparecer la primera vez mientras indexamos tu contenido."
                    }
                ]
            },
            contentOptimization: {
                title: "Optimización de Contenido",
                practices: [
                    {
                        title: "Estructura tu Contenido",
                        description: "Usa headings (H1, H2, H3) de manera jerárquica para que la IA comprenda mejor la estructura de tu información.",
                        items: [
                            "Un solo H1 por página",
                            "H2 para secciones principales",
                            "H3 para subsecciones",
                            "Párrafos cortos y enfocados"
                        ]
                    },
                    {
                        title: "Meta Descripciones",
                        description: "Agrega meta descripciones claras a todas tus páginas. La IA las utiliza para entender el contexto y propósito de cada página."
                    },
                    {
                        title: "FAQs Estructuradas",
                        description: "Crea secciones de preguntas frecuentes bien estructuradas. Usa schema markup cuando sea posible."
                    }
                ]
            },
            conversationDesign: {
                title: "Diseño Conversacional",
                practices: [
                    {
                        title: "Mensajes de Bienvenida Efectivos",
                        description: "El primer mensaje es crucial para el engagement:",
                        tips: [
                            "Específico: \"¿Buscas información sobre nuestros productos?\"",
                            "Accionable: \"¿En qué puedo ayudarte hoy?\"",
                            "Amigable: Usa el tono de tu marca"
                        ],
                        examples: [
                            "E-commerce: \"¿Buscas algo en particular? ¡Te ayudo a encontrarlo!\"",
                            "SaaS: \"¿Tienes preguntas sobre nuestro producto?\"",
                            "Servicios: \"¿Necesitas información sobre nuestros servicios?\""
                        ]
                    },
                    {
                        title: "Sugerencias Inteligentes",
                        description: "Configura sugerencias que guíen a los usuarios hacia información importante:",
                        suggestions: [
                            "\"Ver precios y planes\"",
                            "\"¿Cómo empiezo?\"",
                            "\"Hablar con ventas\"",
                            "\"Soporte técnico\""
                        ]
                    },
                    {
                        title: "Flujos de Conversación",
                        description: "Diseña flujos que capturen leads de manera natural:",
                        steps: [
                            "Pregunta inicial del usuario",
                            "Respuesta útil con información relevante",
                            "Pregunta de seguimiento para calificar",
                            "Oferta de contacto directo si corresponde"
                        ]
                    }
                ]
            },
            kpiTracking: {
                title: "Métricas Clave (KPIs)",
                engagementMetrics: {
                    title: "Métricas de Engagement",
                    items: [
                        "Tasa de Interacción: % visitantes que abren el chat",
                        "Mensajes por Sesión: Profundidad de las conversaciones",
                        "Tiempo de Sesión: Duración promedio de las conversaciones",
                        "Tasa de Retorno: Usuarios que vuelven a usar el chat"
                    ]
                },
                effectivenessMetrics: {
                    title: "Métricas de Efectividad",
                    items: [
                        "Tasa de Resolución: % de consultas resueltas satisfactoriamente",
                        "Precisión de Respuestas: Calidad de la información proporcionada",
                        "Satisfacción del Usuario: Ratings y feedback"
                    ]
                },
                businessMetrics: {
                    title: "Métricas de Negocio",
                    items: [
                        "Generación de Leads: Contactos capturados a través del chat",
                        "Conversión: % de conversations que resultan en conversión",
                        "Valor por Conversación: ROI atribuible al chat",
                        "Reducción de Soporte: Menor carga en canales tradicionales"
                    ]
                },
                tip: "Establece objetivos específicos para cada métrica y revísalos mensualmente. Una tasa de interacción del 15-25% es excelente para la mayoría de sitios web."
            },
            advancedSetup: {
                title: "Configuración Avanzada",
                programmaticConfig: {
                    title: "Configuración Programática",
                    description: "Para mayor control sobre el comportamiento del chat:"
                },
                eventsCallbacks: {
                    title: "Eventos y Callbacks",
                    description: "Escucha eventos para integrar con tu sistema:"
                }
            },
            cta: {
                title: "¿Necesitas Ayuda Personalizada?",
                description: "Nuestro equipo puede ayudarte a implementar estas mejores prácticas específicamente para tu sitio web y industria.",
                button: "Solicitar Consultoría"
            },
            footer: {
                product: "Producto",
                features: "Características",
                integration: "Integración",
                company: "Empresa",
                about: "Sobre Nosotros",
                careers: "Carreras",
                contact: "Contacto",
                resources: "Recursos",
                help: "Centro de Ayuda",
                guides: "Guías",
                community: "Comunidad",
                legal: "Legal",
                terms: "Términos",
                privacy: "Privacidad",
                gdpr: "GDPR",
                security: "Seguridad",
                copyright: "© 2025 Minimal. Todos los derechos reservados."
            }
        },
        en: {
            meta: {
                title: "Guides - Minimal"
            },
            nav: {
                product: "Product",
                howItWorks: "How It Works",
                benefits: "Benefits",
                useCases: "Use Cases",
                pricing: "Pricing",
                tryFree: "Try Free"
            },
            hero: {
                title: "Guides and Best Practices",
                subtitle: "Learn to maximize Minimal's potential with our detailed guides, use cases, and production-tested best practices."
            },
            categories: {
                implementation: {
                    title: "Implementation",
                    guides: [
                        "Quick start guide (5 minutes)",
                        "Advanced setup",
                        "Testing and debugging",
                        "Performance optimization",
                        "Migration from other platforms"
                    ]
                },
                design: {
                    title: "Design & UX",
                    guides: [
                        "Brand customization",
                        "Conversational design",
                        "Mobile optimization",
                        "Accessibility",
                        "Interface patterns"
                    ]
                },
                analytics: {
                    title: "Analytics & Data",
                    guides: [
                        "Key metrics (KPIs)",
                        "User analysis",
                        "Conversion optimization",
                        "Automated reports",
                        "Data export"
                    ]
                },
                useCases: {
                    title: "Use Cases",
                    guides: [
                        "E-commerce and sales",
                        "Lead generation",
                        "Customer support",
                        "Content discovery",
                        "User onboarding"
                    ]
                },
                optimization: {
                    title: "Optimization",
                    guides: [
                        "Content optimization",
                        "Response improvement",
                        "Engagement increase",
                        "Conversion rate",
                        "SEO impact"
                    ]
                },
                security: {
                    title: "Security",
                    guides: [
                        "Data privacy",
                        "Security best practices",
                        "Regulatory compliance",
                        "Incident response",
                        "Consent management"
                    ]
                }
            },
            quickStart: {
                title: "Quick Start Guide",
                subtitle: "Implement Minimal on your website in less than 5 minutes with this step-by-step guide.",
                steps: [
                    {
                        title: "Get your API Key",
                        description: "Sign up on our platform and receive your unique API key by email.",
                        tip: "Save your API key in a secure place. You'll need it for all configuration."
                    },
                    {
                        title: "Add the Script to your Site",
                        description: "Copy this code and paste it just before the </body> tag in your HTML:"
                    },
                    {
                        title: "Customize the Configuration",
                        description: "Optionally, customize colors and behavior:"
                    },
                    {
                        title: "Verify Installation",
                        description: "Refresh your website and look for the chat icon in the bottom right corner. You now have Minimal working!",
                        warning: "The chat may take 2-3 minutes to appear the first time while we index your content."
                    }
                ]
            },
            contentOptimization: {
                title: "Content Optimization",
                practices: [
                    {
                        title: "Structure your Content",
                        description: "Use headings (H1, H2, H3) hierarchically so the AI better understands your information structure.",
                        items: [
                            "Single H1 per page",
                            "H2 for main sections",
                            "H3 for subsections",
                            "Short and focused paragraphs"
                        ]
                    },
                    {
                        title: "Meta Descriptions",
                        description: "Add clear meta descriptions to all your pages. AI uses them to understand the context and purpose of each page."
                    },
                    {
                        title: "Structured FAQs",
                        description: "Create well-structured FAQ sections. Use schema markup when possible."
                    }
                ]
            },
            conversationDesign: {
                title: "Conversational Design",
                practices: [
                    {
                        title: "Effective Welcome Messages",
                        description: "The first message is crucial for engagement:",
                        tips: [
                            "Specific: \"Looking for information about our products?\"",
                            "Actionable: \"How can I help you today?\"",
                            "Friendly: Use your brand's tone"
                        ],
                        examples: [
                            "E-commerce: \"Looking for something specific? I'll help you find it!\"",
                            "SaaS: \"Have questions about our product?\"",
                            "Services: \"Need information about our services?\""
                        ]
                    },
                    {
                        title: "Smart Suggestions",
                        description: "Configure suggestions that guide users to important information:",
                        suggestions: [
                            "\"View pricing and plans\"",
                            "\"How do I get started?\"",
                            "\"Talk to sales\"",
                            "\"Technical support\""
                        ]
                    },
                    {
                        title: "Conversation Flows",
                        description: "Design flows that capture leads naturally:",
                        steps: [
                            "User's initial question",
                            "Helpful response with relevant information",
                            "Follow-up question to qualify",
                            "Direct contact offer if appropriate"
                        ]
                    }
                ]
            },
            kpiTracking: {
                title: "Key Metrics (KPIs)",
                engagementMetrics: {
                    title: "Engagement Metrics",
                    items: [
                        "Interaction Rate: % visitors who open the chat",
                        "Messages per Session: Conversation depth",
                        "Session Time: Average conversation duration",
                        "Return Rate: Users who return to use the chat"
                    ]
                },
                effectivenessMetrics: {
                    title: "Effectiveness Metrics",
                    items: [
                        "Resolution Rate: % of queries resolved satisfactorily",
                        "Response Accuracy: Quality of information provided",
                        "User Satisfaction: Ratings and feedback"
                    ]
                },
                businessMetrics: {
                    title: "Business Metrics",
                    items: [
                        "Lead Generation: Contacts captured through chat",
                        "Conversion: % of conversations resulting in conversion",
                        "Value per Conversation: ROI attributable to chat",
                        "Support Reduction: Lower load on traditional channels"
                    ]
                },
                tip: "Set specific goals for each metric and review them monthly. An interaction rate of 15-25% is excellent for most websites."
            },
            advancedSetup: {
                title: "Advanced Setup",
                programmaticConfig: {
                    title: "Programmatic Configuration",
                    description: "For greater control over chat behavior:"
                },
                eventsCallbacks: {
                    title: "Events and Callbacks",
                    description: "Listen to events to integrate with your system:"
                }
            },
            cta: {
                title: "Need Personalized Help?",
                description: "Our team can help you implement these best practices specifically for your website and industry.",
                button: "Request Consultation"
            },
            footer: {
                product: "Product",
                features: "Features",
                integration: "Integration",
                company: "Company",
                about: "About Us",
                careers: "Careers",
                contact: "Contact",
                resources: "Resources",
                help: "Help Center",
                guides: "Guides",
                community: "Community",
                legal: "Legal",
                terms: "Terms",
                privacy: "Privacy",
                gdpr: "GDPR",
                security: "Security",
                copyright: "© 2025 Minimal. All rights reserved."
            }
        }
    };
}