// Security page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof securityTranslations === 'undefined') {
    var securityTranslations = {
        es: {
            meta: {
                title: "Seguridad - Minimal"
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
                title: "Seguridad",
                subtitle: "La seguridad de tus datos y los de tus usuarios es nuestra máxima prioridad. Conoce las medidas exhaustivas que implementamos para proteger tu información.",
                lastUpdated: "Última actualización: 15 de enero de 2025"
            },
            badges: {
                soc2: {
                    title: "SOC 2 Tipo II",
                    description: "Certificación independiente que valida nuestros controles de seguridad, disponibilidad, integridad de procesamiento y confidencialidad."
                },
                gdpr: {
                    title: "GDPR Compliant",
                    description: "Cumplimiento total con el Reglamento General de Protección de Datos de la Unión Europea para máxima protección de privacidad."
                },
                uptime: {
                    title: "99.9% Uptime",
                    description: "Infraestructura altamente disponible con redundancia geográfica y monitoreo 24/7 para garantizar disponibilidad constante."
                }
            },
            sections: {
                overview: {
                    title: "Nuestro Compromiso con la Seguridad",
                    content: "La seguridad es fundamental en todo lo que hacemos en Minimal. Implementamos las mejores prácticas de la industria y medidas de seguridad multicapa para proteger sus datos y garantizar la disponibilidad de nuestro servicio."
                },
                technicalMeasures: {
                    title: "Medidas Técnicas de Seguridad",
                    waf: {
                        title: "Web Application Firewall",
                        description: "Protección avanzada contra ataques web comunes (OWASP Top 10), inyección SQL, XSS, y ataques de fuerza bruta con reglas personalizadas y actualizaciones automáticas."
                    },
                    ddos: {
                        title: "DDoS Protection",
                        description: "Mitigación automática de ataques DDoS hasta 20 Tbps con detección en menos de 3 segundos y redireccionamiento inteligente del tráfico malicioso."
                    },
                    vulnerability: {
                        title: "Vulnerability Scanning",
                        description: "Escaneo automatizado de vulnerabilidades cada 24 horas con análisis SAST/DAST, dependency checking, y remediación automática cuando es posible."
                    },
                    securedev: {
                        title: "Secure Development",
                        description: "Proceso de desarrollo seguro con code reviews obligatorias, análisis estático de código, pruebas de penetración regulares y deployment automatizado."
                    },
                    anonymization: {
                        title: "Data Anonymization",
                        description: "Técnicas avanzadas de anonimización y pseudonimización para proteger la privacidad en analytics, con k-anonymity y differential privacy."
                    },
                    ratelimit: {
                        title: "Rate Limiting",
                        description: "Límites dinámicos de velocidad por IP, usuario y endpoint con algoritmos adaptativos que aprenden patrones de uso normales vs. maliciosos."
                    },
                    backup: {
                        title: "Backup & Recovery",
                        description: "Backups automatizados cada 6 horas con encriptación, replicación geográfica, pruebas regulares de recuperación y RTO/RPO garantizados."
                    },
                    compliance: {
                        title: "Compliance Monitoring",
                        description: "Monitoreo continuo de cumplimiento con frameworks de seguridad con alertas automáticas y reportes de auditoría."
                    }
                },
                transparency: {
                    title: "🔒 Compromiso de Transparencia",
                    content: "Publicamos un informe anual de transparencia con métricas de seguridad, incidentes manejados, y mejoras implementadas. Creemos que la transparencia fortalece la confianza y mejora la seguridad de toda la industria."
                },
                trustCenter: {
                    title: "Centro de Confianza",
                    content: "Accede a documentación detallada sobre nuestras prácticas de seguridad y reportes de cumplimiento.",
                    button: "Acceder al Trust Center"
                },
                infrastructure: {
                    title: "Seguridad de Infraestructura",
                    content: "Nuestra infraestructura está diseñada con seguridad desde el núcleo:",
                    items: [
                        "Centros de datos certificados SOC 2 Tipo II e ISO 27001",
                        "Redes privadas virtuales (VPN) y segmentación de red",
                        "Firewalls avanzados y sistemas de detección de intrusiones",
                        "Monitoreo 24/7 de seguridad de infraestructura",
                        "Redundancia geográfica para alta disponibilidad"
                    ]
                },
                dataProtection: {
                    title: "Protección de Datos",
                    content: "Implementamos múltiples capas de protección para sus datos:",
                    encryption: {
                        subtitle: "Cifrado:",
                        items: [
                            "Cifrado AES-256 para datos en reposo",
                            "TLS 1.3 para datos en tránsito",
                            "Cifrado de extremo a extremo para datos sensibles",
                            "Gestión segura de claves con rotación automática"
                        ]
                    },
                    access: {
                        subtitle: "Control de Acceso:",
                        items: [
                            "Autenticación multifactor obligatoria",
                            "Principio de menor privilegio",
                            "Revisiones regulares de permisos de acceso",
                            "Logs de auditoría completos"
                        ]
                    }
                },
                applicationSecurity: {
                    title: "Seguridad de Aplicaciones",
                    content: "Nuestras aplicaciones están desarrolladas con seguridad integrada:",
                    items: [
                        "Desarrollo seguro siguiendo OWASP Top 10",
                        "Revisiones de código de seguridad automatizadas",
                        "Pruebas de penetración regulares por terceros",
                        "Validación y sanitización de todas las entradas",
                        "Protección contra ataques DDoS",
                        "Rate limiting y protección contra abuso"
                    ]
                },
                compliance: {
                    title: "Cumplimiento Normativo",
                    content: "Cumplimos con los más altos estándares de seguridad:",
                    frameworks: [
                        "ISO 27001 - Gestión de Seguridad de la Información",
                        "SOC 2 Tipo II - Controles de Seguridad",
                        "GDPR - Protección de Datos",
                        "PCI DSS - Seguridad de Datos de Pago",
                        "HIPAA - Privacidad de Información de Salud"
                    ]
                },
                incidentResponse: {
                    title: "Respuesta a Incidentes",
                    content: "Tenemos un plan integral de respuesta a incidentes:",
                    items: [
                        "Equipo de respuesta a incidentes 24/7",
                        "Procedimientos de escalamiento definidos",
                        "Comunicación proactiva durante incidentes",
                        "Análisis post-incidente y mejoras",
                        "Notificación a autoridades según requisitos legales"
                    ]
                },
                monitoring: {
                    title: "Monitoreo y Detección",
                    content: "Supervisamos continuamente nuestros sistemas:",
                    items: [
                        "SIEM (Security Information and Event Management)",
                        "Detección de anomalías mediante IA",
                        "Análisis de comportamiento de usuarios",
                        "Alertas en tiempo real de seguridad",
                        "Inteligencia de amenazas actualizada"
                    ]
                },
                training: {
                    title: "Entrenamiento y Concienciación",
                    content: "Nuestro equipo está capacitado en las mejores prácticas:",
                    items: [
                        "Entrenamiento regular en seguridad cibernética",
                        "Simulacros de phishing y ingeniería social",
                        "Certificaciones de seguridad del personal",
                        "Cultura de seguridad en toda la organización"
                    ]
                },
                businessContinuity: {
                    title: "Continuidad del Negocio",
                    content: "Garantizamos la continuidad del servicio:",
                    items: [
                        "Plan de continuidad del negocio probado",
                        "Respaldos automatizados y redundantes",
                        "Recuperación ante desastres geográficamente distribuida",
                        "RTO (Recovery Time Objective) de 4 horas",
                        "RPO (Recovery Point Objective) de 1 hora"
                    ]
                },
                thirdParty: {
                    title: "Seguridad de Terceros",
                    content: "Evaluamos y monitoreamos a nuestros proveedores:",
                    items: [
                        "Due diligence de seguridad para todos los proveedores",
                        "Acuerdos de procesamiento de datos (DPA)",
                        "Auditorías regulares de seguridad de terceros",
                        "Gestión de riesgos de la cadena de suministro"
                    ]
                },
                reporting: {
                    title: "🐛 Reporte de Vulnerabilidades",
                    content: "Fomentamos el reporte responsable de vulnerabilidades:",
                    items: [
                        "Programa de divulgación responsable",
                        "Canal seguro para reportar vulnerabilidades",
                        "Reconocimiento a investigadores de seguridad",
                        "Tiempo de respuesta garantizado de 48 horas"
                    ]
                },
                contact: {
                    title: "Contacto de Seguridad",
                    content: "Para consultas relacionadas con seguridad:",
                    email: "security@minimal.com",
                    pgp: "Clave PGP disponible bajo petición",
                    response: "Tiempo de respuesta: 24 horas para consultas críticas"
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
                title: "Security - Minimal"
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
                title: "Security",
                subtitle: "The security of your data and your users' data is our top priority. Learn about the comprehensive measures we implement to protect your information.",
                lastUpdated: "Last updated: January 15, 2025"
            },
            badges: {
                soc2: {
                    title: "SOC 2 Type II",
                    description: "Independent certification that validates our security, availability, processing integrity, and confidentiality controls."
                },
                gdpr: {
                    title: "GDPR Compliant",
                    description: "Full compliance with the European Union General Data Protection Regulation for maximum privacy protection."
                },
                uptime: {
                    title: "99.9% Uptime",
                    description: "Highly available infrastructure with geographic redundancy and 24/7 monitoring to ensure constant availability."
                }
            },
            sections: {
                overview: {
                    title: "Our Commitment to Security",
                    content: "Security is fundamental in everything we do at Minimal. We implement industry best practices and multi-layered security measures to protect your data and ensure service availability."
                },
                technicalMeasures: {
                    title: "Technical Security Measures",
                    waf: {
                        title: "Web Application Firewall",
                        description: "Advanced protection against common web attacks (OWASP Top 10), SQL injection, XSS, and brute force attacks with custom rules and automatic updates."
                    },
                    ddos: {
                        title: "DDoS Protection",
                        description: "Automatic mitigation of DDoS attacks up to 20 Tbps with detection in less than 3 seconds and intelligent redirection of malicious traffic."
                    },
                    vulnerability: {
                        title: "Vulnerability Scanning",
                        description: "Automated vulnerability scanning every 24 hours with SAST/DAST analysis, dependency checking, and automatic remediation when possible."
                    },
                    securedev: {
                        title: "Secure Development",
                        description: "Secure development process with mandatory code reviews, static code analysis, regular penetration testing, and automated deployment."
                    },
                    anonymization: {
                        title: "Data Anonymization",
                        description: "Advanced anonymization and pseudonymization techniques to protect privacy in analytics, with k-anonymity and differential privacy."
                    },
                    ratelimit: {
                        title: "Rate Limiting",
                        description: "Dynamic rate limits per IP, user, and endpoint with adaptive algorithms that learn normal vs. malicious usage patterns."
                    },
                    backup: {
                        title: "Backup & Recovery",
                        description: "Automated backups every 6 hours with encryption, geographic replication, regular recovery testing, and guaranteed RTO/RPO."
                    },
                    compliance: {
                        title: "Compliance Monitoring",
                        description: "Continuous compliance monitoring with security frameworks with automatic alerts and audit reports."
                    }
                },
                transparency: {
                    title: "🔒 Transparency Commitment",
                    content: "We publish an annual transparency report with security metrics, incidents handled, and improvements implemented. We believe transparency strengthens trust and improves industry-wide security."
                },
                trustCenter: {
                    title: "Trust Center",
                    content: "Access detailed documentation about our security practices and compliance reports.",
                    button: "Access Trust Center"
                },
                infrastructure: {
                    title: "Infrastructure Security",
                    content: "Our infrastructure is designed with security at its core:",
                    items: [
                        "SOC 2 Type II and ISO 27001 certified data centers",
                        "Virtual private networks (VPN) and network segmentation",
                        "Advanced firewalls and intrusion detection systems",
                        "24/7 infrastructure security monitoring",
                        "Geographic redundancy for high availability"
                    ]
                },
                dataProtection: {
                    title: "Data Protection",
                    content: "We implement multiple layers of protection for your data:",
                    encryption: {
                        subtitle: "Encryption:",
                        items: [
                            "AES-256 encryption for data at rest",
                            "TLS 1.3 for data in transit",
                            "End-to-end encryption for sensitive data",
                            "Secure key management with automatic rotation"
                        ]
                    },
                    access: {
                        subtitle: "Access Control:",
                        items: [
                            "Mandatory multi-factor authentication",
                            "Principle of least privilege",
                            "Regular access permission reviews",
                            "Complete audit logs"
                        ]
                    }
                },
                applicationSecurity: {
                    title: "Application Security",
                    content: "Our applications are developed with integrated security:",
                    items: [
                        "Secure development following OWASP Top 10",
                        "Automated security code reviews",
                        "Regular third-party penetration testing",
                        "Validation and sanitization of all inputs",
                        "DDoS attack protection",
                        "Rate limiting and abuse protection"
                    ]
                },
                compliance: {
                    title: "Regulatory Compliance",
                    content: "We comply with the highest security standards:",
                    frameworks: [
                        "ISO 27001 - Information Security Management",
                        "SOC 2 Type II - Security Controls",
                        "GDPR - Data Protection",
                        "PCI DSS - Payment Data Security",
                        "HIPAA - Health Information Privacy"
                    ]
                },
                incidentResponse: {
                    title: "Incident Response",
                    content: "We have a comprehensive incident response plan:",
                    items: [
                        "24/7 incident response team",
                        "Defined escalation procedures",
                        "Proactive communication during incidents",
                        "Post-incident analysis and improvements",
                        "Legal authority notification as required"
                    ]
                },
                monitoring: {
                    title: "Monitoring and Detection",
                    content: "We continuously monitor our systems:",
                    items: [
                        "SIEM (Security Information and Event Management)",
                        "AI-powered anomaly detection",
                        "User behavior analysis",
                        "Real-time security alerts",
                        "Updated threat intelligence"
                    ]
                },
                training: {
                    title: "Training and Awareness",
                    content: "Our team is trained in best practices:",
                    items: [
                        "Regular cybersecurity training",
                        "Phishing and social engineering simulations",
                        "Staff security certifications",
                        "Security culture throughout the organization"
                    ]
                },
                businessContinuity: {
                    title: "Business Continuity",
                    content: "We ensure service continuity:",
                    items: [
                        "Tested business continuity plan",
                        "Automated and redundant backups",
                        "Geographically distributed disaster recovery",
                        "4-hour Recovery Time Objective (RTO)",
                        "1-hour Recovery Point Objective (RPO)"
                    ]
                },
                thirdParty: {
                    title: "Third-Party Security",
                    content: "We evaluate and monitor our suppliers:",
                    items: [
                        "Security due diligence for all suppliers",
                        "Data Processing Agreements (DPA)",
                        "Regular third-party security audits",
                        "Supply chain risk management"
                    ]
                },
                reporting: {
                    title: "🐛 Vulnerability Reporting",
                    content: "We encourage responsible vulnerability disclosure:",
                    items: [
                        "Responsible disclosure program",
                        "Secure channel for reporting vulnerabilities",
                        "Recognition for security researchers",
                        "Guaranteed 48-hour response time"
                    ]
                },
                contact: {
                    title: "Security Contact",
                    content: "For security-related inquiries:",
                    email: "security@minimal.com",
                    pgp: "PGP key available upon request",
                    response: "Response time: 24 hours for critical inquiries"
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