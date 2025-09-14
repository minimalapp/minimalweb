// GDPR page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof gdprTranslations === 'undefined') {
    var gdprTranslations = {
        es: {
            meta: {
                title: "GDPR - Cumplimiento - Minimal"
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
                title: "Cumplimiento GDPR",
                subtitle: "Minimal está totalmente comprometido con la protección de datos personales y el cumplimiento del Reglamento General de Protección de Datos (GDPR) de la Unión Europea.",
                lastUpdated: "Última actualización: 15 de enero de 2025"
            },
            badge: {
                title: "Certificado GDPR",
                description: "Minimal cumple completamente con todos los requisitos del GDPR y regulations de protección de datos de la UE"
            },
            sections: {
                overview: {
                    title: "1. Nuestro Compromiso con el GDPR",
                    content: "Minimal cumple plenamente con el Reglamento General de Protección de Datos (GDPR) de la Unión Europea. Implementamos medidas técnicas y organizativas robustas para proteger los datos personales de todos nuestros usuarios."
                },
                legalBasis: {
                    title: "2. Base Legal para el Procesamiento",
                    content: "Procesamos datos personales basándose en las siguientes bases legales:",
                    items: [
                        "Consentimiento: Para funcionalidades opcionales y marketing",
                        "Ejecución contractual: Para proporcionar nuestro servicio",
                        "Interés legítimo: Para mejoras del servicio y seguridad",
                        "Obligación legal: Para cumplir con requerimientos regulatorios"
                    ]
                },
                rights: {
                    title: "3. Sus Derechos Bajo el GDPR",
                    content: "Como sujeto de datos bajo el GDPR, usted tiene los siguientes derechos:",
                    items: [
                        {
                            title: "Derecho de Acceso",
                            description: "Solicitar copia de sus datos personales que procesamos"
                        },
                        {
                            title: "Derecho de Rectificación",
                            description: "Corregir información personal inexacta o incompleta"
                        },
                        {
                            title: "Derecho de Supresión",
                            description: "Solicitar la eliminación de sus datos personales"
                        },
                        {
                            title: "Derecho a la Limitación",
                            description: "Restringir cómo procesamos sus datos personales"
                        },
                        {
                            title: "Derecho a la Portabilidad",
                            description: "Recibir sus datos en formato estructurado y legible"
                        },
                        {
                            title: "Derecho de Oposición",
                            description: "Oponerse al procesamiento basado en interés legítimo"
                        }
                    ]
                },
                dataMinimization: {
                    title: "4. Minimización de Datos",
                    content: "Aplicamos el principio de minimización de datos recopilando solo la información necesaria:",
                    items: [
                        "Solo recopilamos datos estrictamente necesarios para el servicio",
                        "Revisamos regularmente los datos que procesamos",
                        "Eliminamos automáticamente datos innecesarios",
                        "Configuraciones de privacidad granulares para usuarios"
                    ]
                },
                consent: {
                    title: "5. Gestión del Consentimiento",
                    content: "Implementamos mecanismos robustos de consentimiento:",
                    items: [
                        "Consentimiento claro y específico para cada finalidad",
                        "Capacidad de retirar consentimiento fácilmente",
                        "Registro de todas las acciones de consentimiento",
                        "Consentimiento separado para diferentes tipos de procesamiento"
                    ]
                },
                dpo: {
                    title: "6. Responsable de Protección de Datos",
                    content: "Hemos designado un Responsable de Protección de Datos (DPO) para:",
                    items: [
                        "Supervisar el cumplimiento del GDPR",
                        "Realizar evaluaciones de impacto en protección de datos",
                        "Actuar como punto de contacto con autoridades supervisoras",
                        "Proporcionar asesoramiento sobre cuestiones de protección de datos"
                    ],
                    contact: "Contacto DPO: dpo@minimal.com"
                },
                breaches: {
                    title: "7. Notificación de Violaciones",
                    content: "En caso de violación de datos personales:",
                    items: [
                        "Notificamos a la autoridad supervisora dentro de 72 horas",
                        "Informamos a los afectados sin demora indebida",
                        "Documentamos todas las violaciones",
                        "Implementamos medidas correctivas inmediatas"
                    ]
                },
                transfers: {
                    title: "8. Transferencias Internacionales",
                    content: "Para transferencias de datos fuera del EEE:",
                    items: [
                        "Utilizamos Cláusulas Contractuales Estándar (SCC)",
                        "Evaluamos la legislación del país de destino",
                        "Implementamos salvaguardas adicionales cuando es necesario",
                        "Mantenemos registros de todas las transferencias"
                    ]
                },
                privacy: {
                    title: "9. Privacidad por Diseño",
                    content: "Incorporamos principios de privacidad desde el diseño:",
                    items: [
                        "Configuraciones de privacidad por defecto",
                        "Evaluaciones de impacto en privacidad para nuevas características",
                        "Pseudonimización y cifrado por defecto",
                        "Auditorías regulares de privacidad"
                    ]
                },
                complaints: {
                    title: "10. Presentar una Queja",
                    content: "Si no está satisfecho con cómo manejamos sus datos:",
                    steps: [
                        "Contacte nuestro DPO: dpo@minimal.com",
                        "Esperamos su respuesta dentro de 30 días",
                        "Si no está satisfecho, puede presentar una queja ante:",
                        "Agencia Española de Protección de Datos (AEPD)"
                    ]
                },
                contact: {
                    title: "11. Ejercer sus Derechos",
                    content: "Para ejercer cualquiera de sus derechos GDPR:",
                    email: "gdpr@minimal.com",
                    requirements: [
                        "Proporcione identificación válida",
                        "Especifique claramente su solicitud",
                        "Incluya información de contacto actualizada"
                    ],
                    timeline: "Responderemos dentro de 1 mes (extendible a 3 meses para solicitudes complejas)"
                }
            },
            contactSection: {
                title: "¿Preguntas sobre GDPR?",
                description: "Si tiene preguntas específicas sobre cómo procesamos sus datos o desea ejercer sus derechos GDPR, nuestro equipo de protección de datos está aquí para ayudarle.",
                button: "Contactar Equipo GDPR"
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
                title: "GDPR Compliance - Minimal"
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
                title: "GDPR Compliance",
                subtitle: "Minimal is fully committed to protecting personal data and complying with the European Union's General Data Protection Regulation (GDPR).",
                lastUpdated: "Last updated: January 15, 2025"
            },
            badge: {
                title: "GDPR Certified",
                description: "Minimal fully complies with all GDPR requirements and EU data protection regulations"
            },
            sections: {
                overview: {
                    title: "1. Our Commitment to GDPR",
                    content: "Minimal fully complies with the European Union's General Data Protection Regulation (GDPR). We implement robust technical and organizational measures to protect the personal data of all our users."
                },
                legalBasis: {
                    title: "2. Legal Basis for Processing",
                    content: "We process personal data based on the following legal bases:",
                    items: [
                        "Consent: For optional features and marketing",
                        "Contract performance: To provide our service",
                        "Legitimate interest: For service improvements and security",
                        "Legal obligation: To comply with regulatory requirements"
                    ]
                },
                rights: {
                    title: "3. Your Rights Under GDPR",
                    content: "As a data subject under GDPR, you have the following rights:",
                    items: [
                        {
                            title: "Right of Access",
                            description: "Request a copy of your personal data that we process"
                        },
                        {
                            title: "Right of Rectification",
                            description: "Correct inaccurate or incomplete personal information"
                        },
                        {
                            title: "Right of Erasure",
                            description: "Request deletion of your personal data"
                        },
                        {
                            title: "Right to Restriction",
                            description: "Restrict how we process your personal data"
                        },
                        {
                            title: "Right to Data Portability",
                            description: "Receive your data in structured, readable format"
                        },
                        {
                            title: "Right to Object",
                            description: "Object to processing based on legitimate interest"
                        }
                    ]
                },
                dataMinimization: {
                    title: "4. Data Minimization",
                    content: "We apply the data minimization principle by collecting only necessary information:",
                    items: [
                        "We only collect data strictly necessary for the service",
                        "We regularly review the data we process",
                        "We automatically delete unnecessary data",
                        "Granular privacy settings for users"
                    ]
                },
                consent: {
                    title: "5. Consent Management",
                    content: "We implement robust consent mechanisms:",
                    items: [
                        "Clear and specific consent for each purpose",
                        "Ability to withdraw consent easily",
                        "Record of all consent actions",
                        "Separate consent for different types of processing"
                    ]
                },
                dpo: {
                    title: "6. Data Protection Officer",
                    content: "We have appointed a Data Protection Officer (DPO) to:",
                    items: [
                        "Oversee GDPR compliance",
                        "Conduct data protection impact assessments",
                        "Act as contact point with supervisory authorities",
                        "Provide advice on data protection matters"
                    ],
                    contact: "DPO Contact: dpo@minimal.com"
                },
                breaches: {
                    title: "7. Breach Notification",
                    content: "In case of a personal data breach:",
                    items: [
                        "We notify the supervisory authority within 72 hours",
                        "We inform affected individuals without undue delay",
                        "We document all breaches",
                        "We implement immediate corrective measures"
                    ]
                },
                transfers: {
                    title: "8. International Transfers",
                    content: "For data transfers outside the EEA:",
                    items: [
                        "We use Standard Contractual Clauses (SCC)",
                        "We assess the destination country's legislation",
                        "We implement additional safeguards when necessary",
                        "We maintain records of all transfers"
                    ]
                },
                privacy: {
                    title: "9. Privacy by Design",
                    content: "We incorporate privacy principles from design:",
                    items: [
                        "Privacy-friendly default settings",
                        "Privacy impact assessments for new features",
                        "Pseudonymization and encryption by default",
                        "Regular privacy audits"
                    ]
                },
                complaints: {
                    title: "10. Filing a Complaint",
                    content: "If you're not satisfied with how we handle your data:",
                    steps: [
                        "Contact our DPO: dpo@minimal.com",
                        "We expect a response within 30 days",
                        "If not satisfied, you can file a complaint with:",
                        "Spanish Data Protection Agency (AEPD)"
                    ]
                },
                contact: {
                    title: "11. Exercising Your Rights",
                    content: "To exercise any of your GDPR rights:",
                    email: "gdpr@minimal.com",
                    requirements: [
                        "Provide valid identification",
                        "Clearly specify your request",
                        "Include updated contact information"
                    ],
                    timeline: "We will respond within 1 month (extendable to 3 months for complex requests)"
                }
            },
            contactSection: {
                title: "Questions about GDPR?",
                description: "If you have specific questions about how we process your data or want to exercise your GDPR rights, our data protection team is here to help.",
                button: "Contact GDPR Team"
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