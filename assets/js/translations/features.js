// Features page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof featuresTranslations === 'undefined') {
    var featuresTranslations = {
        es: {
            meta: {
                title: "Características - Minimal"
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
                title: "Características de Minimal",
                subtitle: "Descubre todas las funcionalidades que transformarán tu sitio web en una experiencia conversacional inteligente."
            },
            coreFeatures: {
                ai: {
                    title: "IA Conversacional Avanzada",
                    description: "Procesamiento de lenguaje natural de última generación que entiende el contexto y las intenciones de tus usuarios, proporcionando respuestas precisas y útiles."
                },
                branding: {
                    title: "Preservación de Marca",
                    description: "La interfaz conversacional se adapta automáticamente a los colores, tipografías y estilo visual de tu sitio web, manteniendo tu identidad de marca intacta."
                },
                integration: {
                    title: "Integración en 1 Línea",
                    description: "Implementación ultra-rápida que requiere solo agregar una línea de código JavaScript a tu sitio web. Funciona con cualquier tecnología o plataforma."
                },
                analytics: {
                    title: "Analytics Inteligentes",
                    description: "Obtén insights profundos sobre las intenciones reales de tus usuarios, patrones de comportamiento y oportunidades de mejora que los analytics tradicionales no revelan."
                },
                sync: {
                    title: "Sincronización Automática",
                    description: "El contenido de tu sitio web se sincroniza automáticamente, permitiendo que la IA siempre tenga información actualizada sin intervención manual."
                },
                multilang: {
                    title: "Soporte Multiidioma",
                    description: "Interfaz conversacional que se adapta automáticamente al idioma de tu sitio web, con soporte para múltiples idiomas y localización regional."
                }
            },
            technical: {
                title: "Funcionalidades Técnicas",
                processing: {
                    title: "Procesamiento Inteligente",
                    features: [
                        "Comprensión de contexto conversacional",
                        "Análisis semántico del contenido web",
                        "Detección automática de intenciones de usuario",
                        "Respuestas personalizadas basadas en navegación"
                    ]
                },
                frictionless: {
                    title: "Integración sin Fricción",
                    features: [
                        "Compatible con WordPress, Shopify, React, Vue, Angular",
                        "No requiere modificaciones de backend",
                        "CDN global para carga ultra-rápida",
                        "Fallbacks automáticos para compatibilidad"
                    ]
                }
            },
            analyticsCapabilities: {
                title: "Capacidades de Análisis",
                engagement: {
                    title: "Métricas de Engagement",
                    features: [
                        "Tiempo de interacción promedio",
                        "Tasa de resolución de consultas",
                        "Patrones de navegación conversacional",
                        "Puntos de abandono y optimización"
                    ]
                },
                insights: {
                    title: "Insights de Usuario",
                    features: [
                        "Intenciones más comunes de búsqueda",
                        "Contenido de mayor interés",
                        "Gaps de información identificados",
                        "Oportunidades de conversión detectadas"
                    ]
                },
                reports: {
                    title: "Reportes Accionables",
                    features: [
                        "Dashboards en tiempo real",
                        "Reportes automatizados semanales/mensuales",
                        "Recomendaciones de mejora automática"
                    ]
                }
            },
            security: {
                title: "Seguridad y Confiabilidad",
                dataProtection: {
                    title: "Protección de Datos",
                    features: [
                        "Encriptación end-to-end de todas las conversaciones",
                        "Cumplimiento GDPR, CCPA y regulaciones locales"
                    ]
                },
                infrastructure: {
                    title: "Infraestructura Robusta",
                    features: [
                        "99.9% de uptime garantizado",
                        "Balanceadores de carga automáticos"
                    ]
                },
                scalability: {
                    title: "Escalabilidad",
                    features: [
                        "Auto-scaling basado en demanda",
                        "Soporte para millones de visitantes concurrentes",
                        "Arquitectura cloud-native distribuida"
                    ]
                }
            },
            userExperience: {
                title: "Experiencia de Usuario",
                interface: {
                    title: "Interfaz Intuitiva",
                    features: [
                        "Diseño conversacional natural y fluido",
                        "Adaptación automática a dispositivos móviles",
                        "Animaciones y transiciones suaves"
                    ]
                },
                customization: {
                    title: "Personalización Visual",
                    features: [
                        "Extracción automática de paleta de colores",
                        "Adaptación de tipografías existentes",
                        "Posicionamiento flexible del chat",
                        "Temas prediseñados profesionales"
                    ]
                },
                advanced: {
                    title: "Funcionalidades Avanzadas",
                    features: [
                        "Sugerencias de preguntas inteligentes",
                        "Historial de conversaciones persistente"
                    ]
                }
            },
            cta: {
                title: "¿Listo para Transformar tu Sitio Web?",
                description: "Comienza tu prueba gratuita de 14 días y descubre cómo Minimal puede revolucionar la experiencia de tus usuarios.",
                button: "Comenzar Prueba Gratuita"
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
                title: "Features - Minimal"
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
                title: "Minimal Features",
                subtitle: "Discover all the functionalities that will transform your website into an intelligent conversational experience."
            },
            coreFeatures: {
                ai: {
                    title: "Advanced Conversational AI",
                    description: "State-of-the-art natural language processing that understands context and user intentions, providing accurate and helpful responses."
                },
                branding: {
                    title: "Brand Preservation",
                    description: "The conversational interface automatically adapts to your website's colors, fonts, and visual style, keeping your brand identity intact."
                },
                integration: {
                    title: "1-Line Integration",
                    description: "Ultra-fast implementation that requires only adding one line of JavaScript code to your website. Works with any technology or platform."
                },
                analytics: {
                    title: "Intelligent Analytics",
                    description: "Get deep insights into your users' real intentions, behavior patterns, and improvement opportunities that traditional analytics don't reveal."
                },
                sync: {
                    title: "Automatic Synchronization",
                    description: "Your website content syncs automatically, allowing AI to always have updated information without manual intervention."
                },
                multilang: {
                    title: "Multi-language Support",
                    description: "Conversational interface that automatically adapts to your website's language, with support for multiple languages and regional localization."
                }
            },
            technical: {
                title: "Technical Features",
                processing: {
                    title: "Intelligent Processing",
                    features: [
                        "Conversational context understanding",
                        "Semantic analysis of web content",
                        "Automatic user intent detection",
                        "Personalized responses based on navigation"
                    ]
                },
                frictionless: {
                    title: "Frictionless Integration",
                    features: [
                        "Compatible with WordPress, Shopify, React, Vue, Angular",
                        "No backend modifications required",
                        "Global CDN for ultra-fast loading",
                        "Automatic fallbacks for compatibility"
                    ]
                }
            },
            analyticsCapabilities: {
                title: "Analytics Capabilities",
                engagement: {
                    title: "Engagement Metrics",
                    features: [
                        "Average interaction time",
                        "Query resolution rate",
                        "Conversational navigation patterns",
                        "Drop-off points and optimization"
                    ]
                },
                insights: {
                    title: "User Insights",
                    features: [
                        "Most common search intentions",
                        "Highest interest content",
                        "Identified information gaps",
                        "Detected conversion opportunities"
                    ]
                },
                reports: {
                    title: "Actionable Reports",
                    features: [
                        "Real-time dashboards",
                        "Automated weekly/monthly reports",
                        "Automatic improvement recommendations"
                    ]
                }
            },
            security: {
                title: "Security and Reliability",
                dataProtection: {
                    title: "Data Protection",
                    features: [
                        "End-to-end encryption of all conversations",
                        "GDPR, CCPA and local regulations compliance"
                    ]
                },
                infrastructure: {
                    title: "Robust Infrastructure",
                    features: [
                        "99.9% guaranteed uptime",
                        "Automatic load balancers"
                    ]
                },
                scalability: {
                    title: "Scalability",
                    features: [
                        "Demand-based auto-scaling",
                        "Support for millions of concurrent visitors",
                        "Distributed cloud-native architecture"
                    ]
                }
            },
            userExperience: {
                title: "User Experience",
                interface: {
                    title: "Intuitive Interface",
                    features: [
                        "Natural and fluid conversational design",
                        "Automatic mobile device adaptation",
                        "Smooth animations and transitions"
                    ]
                },
                customization: {
                    title: "Visual Customization",
                    features: [
                        "Automatic color palette extraction",
                        "Existing typography adaptation",
                        "Flexible chat positioning",
                        "Professional pre-designed themes"
                    ]
                },
                advanced: {
                    title: "Advanced Features",
                    features: [
                        "Intelligent question suggestions",
                        "Persistent conversation history"
                    ]
                }
            },
            cta: {
                title: "Ready to Transform Your Website?",
                description: "Start your 14-day free trial and discover how Minimal can revolutionize your users' experience.",
                button: "Start Free Trial"
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