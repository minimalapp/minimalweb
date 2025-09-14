// Help page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof helpTranslations === 'undefined') {
    var helpTranslations = {
        es: {
            meta: {
                title: "Centro de Ayuda - Minimal"
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
                title: "Centro de Ayuda",
                subtitle: "Encuentra respuestas rápidas, guías de implementación y recursos para aprovechar al máximo Minimal.",
                searchPlaceholder: "Buscar en la documentación...",
                searchButton: "🔍"
            },
            categories: {
                gettingStarted: {
                    title: "Primeros Pasos",
                    description: "Guías paso a paso para configurar Minimal en tu sitio web por primera vez.",
                    link: "Ver Guías →"
                },
                integration: {
                    title: "Integración Técnica",
                    description: "Documentación técnica, APIs y opciones avanzadas de personalización.",
                    link: "Documentación Técnica →"
                },
                customization: {
                    title: "Personalización",
                    description: "Aprende a personalizar la apariencia y comportamiento del chat.",
                    link: "Opciones de Personalización →"
                },
                analytics: {
                    title: "Analytics y Reportes",
                    description: "Comprende las métricas y cómo interpretar los datos de usuario.",
                    link: "Guía de Analytics →"
                },
                security: {
                    title: "Seguridad y Privacidad",
                    description: "Información sobre protección de datos y configuraciones de seguridad.",
                    link: "Seguridad →"
                },
                bestPractices: {
                    title: "Mejores Prácticas",
                    description: "Consejos y estrategias para optimizar la experiencia conversacional.",
                    link: "Ver Guías →"
                }
            },
            gettingStarted: {
                title: "Primeros Pasos con Minimal",
                step1: {
                    title: "1. Registrar tu Cuenta",
                    items: [
                        "Visita nuestra página de contacto y solicita acceso",
                        "Recibe tu clave de API y credenciales de acceso por email",
                        "Accede a tu dashboard personalizado"
                    ]
                },
                step2: {
                    title: "2. Configuración Básica",
                    description: "La integración más simple requiere solo una línea de código:"
                },
                step3: {
                    title: "3. Personalización Inicial",
                    items: [
                        "Colores Automáticos: Minimal detecta automáticamente los colores de tu marca",
                        "Posicionamiento: El toggle se posiciona automáticamente en la parte media inferior",
                        "Contenido: El sistema indexa tu contenido web automáticamente"
                    ]
                },
                step4: {
                    title: "4. Verificar la Instalación",
                    description: "Después de instalar el código:",
                    items: [
                        "Refresca tu sitio web",
                        "Busca el ícono de chat en la esquina inferior derecha",
                        "Haz clic y prueba hacer una pregunta sobre tu contenido",
                        "Verifica en tu dashboard que las interacciones se registren"
                    ]
                }
            },
            customization: {
                title: "Personalización Avanzada",
                attributes: {
                    title: "Configuración Mediante Atributos",
                    description: "Puedes personalizar Minimal usando atributos en el script tag:"
                },
                options: {
                    title: "Opciones de Personalización",
                    items: [
                        "data-position: \"bottom-right\" | \"bottom-left\" | \"top-right\" | \"top-left\"",
                        "data-primary-color: Color principal en formato hexadecimal",
                        "data-welcome-message: Mensaje inicial personalizado",
                        "data-placeholder: Texto del campo de entrada",
                        "data-theme: \"light\" | \"dark\" | \"auto\""
                    ]
                },
                advanced: {
                    title: "Configuración Avanzada con JavaScript"
                }
            },
            analyticsGuide: {
                title: "Comprende tus Analytics",
                mainMetrics: {
                    title: "Métricas Principales",
                    items: [
                        "Conversaciones Totales: Número total de sesiones de chat iniciadas",
                        "Tasa de Engagement: Porcentaje de visitantes que interactúan con el chat",
                        "Tiempo Promedio por Sesión: Duración media de las conversaciones",
                        "Tasa de Resolución: Porcentaje de consultas resueltas satisfactoriamente"
                    ]
                },
                contentInsights: {
                    title: "Insights de Contenido",
                    items: [
                        "Preguntas Más Frecuentes: Identifica qué información buscan tus usuarios",
                        "Gaps de Información: Consultas que no pudieron resolverse",
                        "Términos de Búsqueda: Palabras clave más buscadas"
                    ]
                },
                recommendedActions: {
                    title: "Acciones Recomendadas",
                    items: [
                        "Crea contenido específico para preguntas frecuentes sin respuesta",
                        "Optimiza páginas con alta demanda conversacional",
                        "Ajusta el mensaje de bienvenida según patrones de uso",
                        "Configura respuestas automáticas para consultas comunes"
                    ]
                }
            },
            faq: {
                title: "Preguntas Frecuentes",
                questions: [
                    {
                        question: "¿Cómo afecta Minimal a la velocidad de carga de mi sitio?",
                        answer: "Minimal está optimizado para carga asíncrona y pesa menos de 50KB. Se carga después del contenido principal de tu sitio, por lo que no afecta la velocidad de carga percibida. Además, utilizamos CDN global para garantizar tiempos de carga mínimos."
                    },
                    {
                        question: "¿Funciona con mi plataforma actual (WordPress, Shopify, etc.)?",
                        answer: "Sí, Minimal es compatible con cualquier plataforma web. Solo necesitas poder agregar código JavaScript personalizado, lo que es posible en WordPress, Shopify, Squarespace, Wix, sitios estáticos, React, Vue, Angular y cualquier otra tecnología web."
                    },
                    {
                        question: "¿Cómo maneja Minimal el contenido de mi sitio?",
                        answer: "Minimal indexa automáticamente el contenido público de tu sitio web. Respeta los archivos robots.txt y no indexa contenido privado o protegido por contraseña. El contenido se procesa de forma segura y se utiliza únicamente para responder consultas sobre tu sitio."
                    },
                    {
                        question: "¿Puedo personalizar las respuestas del chat?",
                        answer: "Sí, puedes configurar respuestas personalizadas para preguntas específicas, definir el tono de comunicación, establecer reglas de negocio personalizadas y crear flujos conversacionales específicos para tu industria a través del dashboard de administración."
                    }
                ]
            },
            support: {
                title: "¿Necesitas Más Ayuda?",
                description: "Nuestro equipo de soporte está disponible para ayudarte con implementaciones complejas, personalizaciones avanzadas o cualquier pregunta técnica.",
                button: "Contactar Soporte"
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
                title: "Help Center - Minimal"
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
                title: "Help Center",
                subtitle: "Find quick answers, implementation guides, and resources to get the most out of Minimal.",
                searchPlaceholder: "Search documentation...",
                searchButton: "🔍"
            },
            categories: {
                gettingStarted: {
                    title: "Getting Started",
                    description: "Step-by-step guides to set up Minimal on your website for the first time.",
                    link: "View Guides →"
                },
                integration: {
                    title: "Technical Integration",
                    description: "Technical documentation, APIs, and advanced customization options.",
                    link: "Technical Documentation →"
                },
                customization: {
                    title: "Customization",
                    description: "Learn how to customize the appearance and behavior of the chat.",
                    link: "Customization Options →"
                },
                analytics: {
                    title: "Analytics & Reports",
                    description: "Understand metrics and how to interpret user data.",
                    link: "Analytics Guide →"
                },
                security: {
                    title: "Security & Privacy",
                    description: "Information about data protection and security configurations.",
                    link: "Security →"
                },
                bestPractices: {
                    title: "Best Practices",
                    description: "Tips and strategies to optimize the conversational experience.",
                    link: "View Guides →"
                }
            },
            gettingStarted: {
                title: "Getting Started with Minimal",
                step1: {
                    title: "1. Register Your Account",
                    items: [
                        "Visit our contact page and request access",
                        "Receive your API key and access credentials by email",
                        "Access your personalized dashboard"
                    ]
                },
                step2: {
                    title: "2. Basic Setup",
                    description: "The simplest integration requires only one line of code:"
                },
                step3: {
                    title: "3. Initial Customization",
                    items: [
                        "Automatic Colors: Minimal automatically detects your brand colors",
                        "Positioning: The toggle is automatically positioned in the lower middle area",
                        "Content: The system automatically indexes your web content"
                    ]
                },
                step4: {
                    title: "4. Verify Installation",
                    description: "After installing the code:",
                    items: [
                        "Refresh your website",
                        "Look for the chat icon in the bottom right corner",
                        "Click and try asking a question about your content",
                        "Verify in your dashboard that interactions are being recorded"
                    ]
                }
            },
            customization: {
                title: "Advanced Customization",
                attributes: {
                    title: "Configuration Using Attributes",
                    description: "You can customize Minimal using attributes in the script tag:"
                },
                options: {
                    title: "Customization Options",
                    items: [
                        "data-position: \"bottom-right\" | \"bottom-left\" | \"top-right\" | \"top-left\"",
                        "data-primary-color: Primary color in hexadecimal format",
                        "data-welcome-message: Custom initial message",
                        "data-placeholder: Input field text",
                        "data-theme: \"light\" | \"dark\" | \"auto\""
                    ]
                },
                advanced: {
                    title: "Advanced JavaScript Configuration"
                }
            },
            analyticsGuide: {
                title: "Understand Your Analytics",
                mainMetrics: {
                    title: "Key Metrics",
                    items: [
                        "Total Conversations: Total number of chat sessions initiated",
                        "Engagement Rate: Percentage of visitors who interact with the chat",
                        "Average Session Time: Average duration of conversations",
                        "Resolution Rate: Percentage of queries resolved satisfactorily"
                    ]
                },
                contentInsights: {
                    title: "Content Insights",
                    items: [
                        "Most Frequent Questions: Identify what information your users are looking for",
                        "Information Gaps: Queries that couldn't be resolved",
                        "Search Terms: Most searched keywords"
                    ]
                },
                recommendedActions: {
                    title: "Recommended Actions",
                    items: [
                        "Create specific content for unanswered frequent questions",
                        "Optimize pages with high conversational demand",
                        "Adjust welcome message based on usage patterns",
                        "Set up automatic responses for common queries"
                    ]
                }
            },
            faq: {
                title: "Frequently Asked Questions",
                questions: [
                    {
                        question: "How does Minimal affect my site's loading speed?",
                        answer: "Minimal is optimized for asynchronous loading and weighs less than 50KB. It loads after your site's main content, so it doesn't affect perceived loading speed. We also use a global CDN to ensure minimal loading times."
                    },
                    {
                        question: "Does it work with my current platform (WordPress, Shopify, etc.)?",
                        answer: "Yes, Minimal is compatible with any web platform. You just need to be able to add custom JavaScript code, which is possible in WordPress, Shopify, Squarespace, Wix, static sites, React, Vue, Angular, and any other web technology."
                    },
                    {
                        question: "How does Minimal handle my site's content?",
                        answer: "Minimal automatically indexes the public content of your website. It respects robots.txt files and doesn't index private or password-protected content. Content is processed securely and used only to answer queries about your site."
                    },
                    {
                        question: "Can I customize the chat responses?",
                        answer: "Yes, you can configure custom responses for specific questions, define communication tone, establish custom business rules, and create industry-specific conversational flows through the administration dashboard."
                    }
                ]
            },
            support: {
                title: "Need More Help?",
                description: "Our support team is available to help you with complex implementations, advanced customizations, or any technical questions.",
                button: "Contact Support"
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