// Privacy page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof privacyTranslations === 'undefined') {
    var privacyTranslations = {
        es: {
            meta: {
                title: "Política de Privacidad - Minimal"
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
                title: "Política de Privacidad",
                subtitle: "Explicamos cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza Minimal.",
                lastUpdated: "Última actualización: 15 de enero de 2025"
            },
            sections: {
                overview: {
                    title: "1. Información General",
                    content: "En Minimal, respetamos su privacidad y nos comprometemos a proteger su información personal. Esta política describe cómo manejamos los datos que recopilamos a través de nuestro servicio."
                },
                dataCollection: {
                    title: "2. Información que Recopilamos",
                    personalData: {
                        subtitle: "Información Personal:",
                        items: [
                            "Nombre y dirección de correo electrónico",
                            "Información de la empresa y sitio web",
                            "Datos de facturación y pago",
                            "Información de contacto proporcionada voluntariamente"
                        ]
                    },
                    automaticData: {
                        subtitle: "Información Automática:",
                        items: [
                            "Dirección IP y ubicación geográfica aproximada",
                            "Información del navegador y dispositivo",
                            "Páginas visitadas y tiempo de navegación",
                            "Conversaciones del chat (anonimizadas para mejoras del servicio)"
                        ]
                    }
                },
                dataUse: {
                    title: "3. Cómo Utilizamos su Información",
                    items: [
                        "Proporcionar y mantener nuestro servicio",
                        "Procesar pagos y gestionar su cuenta",
                        "Mejorar nuestro servicio mediante análisis de uso",
                        "Comunicarnos con usted sobre actualizaciones del servicio",
                        "Proporcionar soporte técnico y atención al cliente",
                        "Cumplir con obligaciones legales"
                    ]
                },
                dataSharing: {
                    title: "4. Compartir Información",
                    content: "No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:",
                    items: [
                        "Con proveedores de servicios que nos ayudan a operar nuestro servicio",
                        "Cuando sea requerido por ley o autoridades competentes",
                        "Para proteger nuestros derechos, propiedad o seguridad",
                        "Con su consentimiento explícito"
                    ]
                },
                dataRetention: {
                    title: "5. Retención de Datos",
                    content: "Conservamos su información personal durante el tiempo necesario para los fines descritos en esta política, típicamente:",
                    items: [
                        "Datos de cuenta: mientras su cuenta esté activa",
                        "Datos de conversación: 12 meses para mejora del servicio",
                        "Datos de facturación: 7 años por requerimientos legales",
                        "Datos de soporte: 3 años después de la última interacción"
                    ]
                },
                rights: {
                    title: "6. Sus Derechos",
                    content: "Bajo las leyes de protección de datos aplicables, usted tiene derecho a:",
                    items: [
                        "Acceder a su información personal",
                        "Rectificar información inexacta",
                        "Solicitar la eliminación de sus datos",
                        "Restringir el procesamiento de sus datos",
                        "Portabilidad de datos",
                        "Oponerse al procesamiento de sus datos"
                    ]
                },
                security: {
                    title: "7. Seguridad de los Datos",
                    content: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información:",
                    items: [
                        "Encriptación de datos en tránsito y en reposo",
                        "Acceso restringido basado en necesidad",
                        "Monitoreo regular de seguridad",
                        "Auditorías de seguridad periódicas",
                        "Protocolos de respuesta a incidentes"
                    ]
                },
                cookies: {
                    title: "8. Cookies y Tecnologías Similares",
                    content: "Utilizamos cookies y tecnologías similares para mejorar su experiencia:",
                    types: {
                        essential: "Cookies esenciales: Necesarias para el funcionamiento básico",
                        analytics: "Cookies de análisis: Para entender cómo se usa nuestro servicio",
                        functional: "Cookies funcionales: Para recordar sus preferencias"
                    }
                },
                international: {
                    title: "9. Transferencias Internacionales",
                    content: "Sus datos pueden ser procesados en países fuera de su residencia. Aseguramos protecciones adecuadas mediante:",
                    items: [
                        "Cláusulas contractuales estándar de la UE",
                        "Certificaciones de privacidad reconocidas",
                        "Evaluaciones de adecuación país por país"
                    ]
                },
                children: {
                    title: "10. Protección de Menores",
                    content: "Nuestro servicio no está dirigido a menores de 16 años. No recopilamos conscientemente información personal de niños menores de esta edad."
                },
                changes: {
                    title: "11. Cambios en esta Política",
                    content: "Podemos actualizar esta política ocasionalmente. Le notificaremos cambios significativos por correo electrónico o mediante aviso en nuestro servicio."
                },
                contact: {
                    title: "12. Contacto",
                    content: "Para preguntas sobre esta política o sus derechos de privacidad:",
                    email: "privacy@minimal.com",
                    dpo: "Responsable de Protección de Datos: dpo@minimal.com",
                    address: "Calle Ejemplo 123, 28001 Madrid, España"
                }
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
                title: "Privacy Policy - Minimal"
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
                title: "Privacy Policy",
                subtitle: "We explain how we collect, use, store, and protect your personal information when you use Minimal.",
                lastUpdated: "Last updated: January 15, 2025"
            },
            sections: {
                overview: {
                    title: "1. General Information",
                    content: "At Minimal, we respect your privacy and are committed to protecting your personal information. This policy describes how we handle the data we collect through our service."
                },
                dataCollection: {
                    title: "2. Information We Collect",
                    personalData: {
                        subtitle: "Personal Information:",
                        items: [
                            "Name and email address",
                            "Company and website information",
                            "Billing and payment data",
                            "Contact information provided voluntarily"
                        ]
                    },
                    automaticData: {
                        subtitle: "Automatic Information:",
                        items: [
                            "IP address and approximate geographic location",
                            "Browser and device information",
                            "Pages visited and browsing time",
                            "Chat conversations (anonymized for service improvement)"
                        ]
                    }
                },
                dataUse: {
                    title: "3. How We Use Your Information",
                    items: [
                        "Provide and maintain our service",
                        "Process payments and manage your account",
                        "Improve our service through usage analysis",
                        "Communicate with you about service updates",
                        "Provide technical support and customer service",
                        "Comply with legal obligations"
                    ]
                },
                dataSharing: {
                    title: "4. Information Sharing",
                    content: "We do not sell, rent, or share your personal information with third parties, except in the following circumstances:",
                    items: [
                        "With service providers who help us operate our service",
                        "When required by law or competent authorities",
                        "To protect our rights, property, or safety",
                        "With your explicit consent"
                    ]
                },
                dataRetention: {
                    title: "5. Data Retention",
                    content: "We retain your personal information for as long as necessary for the purposes described in this policy, typically:",
                    items: [
                        "Account data: while your account is active",
                        "Conversation data: 12 months for service improvement",
                        "Billing data: 7 years for legal requirements",
                        "Support data: 3 years after last interaction"
                    ]
                },
                rights: {
                    title: "6. Your Rights",
                    content: "Under applicable data protection laws, you have the right to:",
                    items: [
                        "Access your personal information",
                        "Rectify inaccurate information",
                        "Request deletion of your data",
                        "Restrict processing of your data",
                        "Data portability",
                        "Object to processing of your data"
                    ]
                },
                security: {
                    title: "7. Data Security",
                    content: "We implement technical and organizational security measures to protect your information:",
                    items: [
                        "Data encryption in transit and at rest",
                        "Restricted access based on need",
                        "Regular security monitoring",
                        "Periodic security audits",
                        "Incident response protocols"
                    ]
                },
                cookies: {
                    title: "8. Cookies and Similar Technologies",
                    content: "We use cookies and similar technologies to improve your experience:",
                    types: {
                        essential: "Essential cookies: Necessary for basic functionality",
                        analytics: "Analytics cookies: To understand how our service is used",
                        functional: "Functional cookies: To remember your preferences"
                    }
                },
                international: {
                    title: "9. International Transfers",
                    content: "Your data may be processed in countries outside your residence. We ensure adequate protections through:",
                    items: [
                        "EU standard contractual clauses",
                        "Recognized privacy certifications",
                        "Country-by-country adequacy assessments"
                    ]
                },
                children: {
                    title: "10. Children's Protection",
                    content: "Our service is not directed to children under 16. We do not knowingly collect personal information from children under this age."
                },
                changes: {
                    title: "11. Changes to this Policy",
                    content: "We may update this policy occasionally. We will notify you of significant changes by email or notice in our service."
                },
                contact: {
                    title: "12. Contact",
                    content: "For questions about this policy or your privacy rights:",
                    email: "privacy@minimal.com",
                    dpo: "Data Protection Officer: dpo@minimal.com",
                    address: "Calle Ejemplo 123, 28001 Madrid, Spain"
                }
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