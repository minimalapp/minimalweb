// Terms page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof termsTranslations === 'undefined') {
    var termsTranslations = {
        es: {
            meta: {
                title: "Términos de Servicio - Minimal"
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
                title: "Términos de Servicio",
                subtitle: "Estos términos rigen el uso de nuestra plataforma de transformación web con inteligencia artificial. Por favor, léelos cuidadosamente."
            },
            lastUpdated: {
                label: "Última actualización:",
                date: "11 de enero de 2025"
            },
            acceptance: {
                title: "1. Aceptación de los Términos",
                paragraph1: "Estos Términos de Servicio (\"Términos\") constituyen un acuerdo legal entre usted (\"Usuario\", \"Cliente\" o \"usted\") y Minimal (\"nosotros\", \"nuestro\" o \"la Empresa\") respecto al uso de nuestra plataforma de transformación web con inteligencia artificial.",
                paragraph2: "Al acceder o utilizar nuestros Servicios, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros Servicios.",
                important: {
                    title: "Importante",
                    text: "Estos Términos pueden actualizarse periódicamente. El uso continuado de los Servicios después de cambios constituye su aceptación de los términos revisados."
                }
            },
            serviceDescription: {
                title: "2. Descripción de los Servicios",
                whatWeOffer: {
                    title: "Qué Ofrecemos",
                    text: "Minimal proporciona una plataforma de inteligencia artificial que transforma sitios web estáticos en experiencias conversacionales interactivas, permitiendo:",
                    features: [
                        "Integración de chat inteligente en sitios web existentes",
                        "Preservación automática de la identidad de marca",
                        "Análisis avanzados de comportamiento de usuarios",
                        "Procesamiento de lenguaje natural personalizado",
                        "Herramientas de personalización y configuración"
                    ]
                },
                limitations: {
                    title: "Limitaciones del Servicio",
                    text: "Nuestros Servicios están sujetos a las siguientes limitaciones:",
                    items: [
                        "Disponibilidad del servicio según el plan contratado",
                        "Límites de uso mensual específicos por plan",
                        "Restricciones técnicas y de compatibilidad",
                        "Dependencia de servicios de terceros"
                    ]
                }
            },
            userAccounts: {
                title: "3. Cuentas de Usuario",
                creation: {
                    title: "Creación de Cuenta",
                    text: "Para utilizar ciertos aspectos de los Servicios, debe crear una cuenta proporcionando información precisa y completa."
                },
                responsibilities: {
                    title: "Responsabilidades del Usuario",
                    items: [
                        "Mantener la confidencialidad de sus credenciales de acceso",
                        "Notificar inmediatamente cualquier uso no autorizado de su cuenta",
                        "Proporcionar información veraz y actualizada",
                        "Ser responsable de todas las actividades bajo su cuenta"
                    ]
                },
                suspension: {
                    title: "Suspensión de Cuenta",
                    text: "Nos reservamos el derecho de suspender o terminar cuentas que violen estos Términos o presenten actividad sospechosa."
                }
            },
            acceptableUse: {
                title: "4. Uso Aceptable",
                permitted: {
                    title: "Usos Permitidos",
                    items: [
                        "Integrar nuestro servicio en sitios web legítimos",
                        "Personalizar la experiencia según su marca",
                        "Analizar datos de usuarios de manera ética",
                        "Utilizar las funcionalidades según la documentación"
                    ]
                },
                prohibited: {
                    title: "Usos Prohibidos",
                    text: "No puede utilizar nuestros Servicios para:",
                    items: [
                        "Actividades ilegales, fraudulentas o maliciosas",
                        "Violar derechos de propiedad intelectual",
                        "Distribuir contenido ofensivo, discriminatorio o dañino",
                        "Intentar acceder no autorizado a sistemas o datos",
                        "Interferir con el funcionamiento de los Servicios",
                        "Hacer ingeniería inversa de nuestra tecnología",
                        "Crear productos competidores directos"
                    ]
                },
                monitoring: {
                    title: "Monitoreo de Cumplimiento",
                    text: "Nos reservamos el derecho de monitorear el uso de los Servicios para asegurar el cumplimiento de estos términos."
                }
            },
            dataPrivacy: {
                title: "5. Datos y Privacidad",
                yourData: {
                    title: "Sus Datos",
                    text: "Usted mantiene la propiedad de todos los datos de contenido que proporcione a través de los Servicios. Nos otorga una licencia para procesar estos datos según nuestros Servicios."
                },
                websiteUserData: {
                    title: "Datos de Usuarios de su Sitio Web",
                    items: [
                        "Usted es responsable de obtener consentimientos necesarios de sus usuarios",
                        "Debe cumplir con leyes de protección de datos aplicables",
                        "Nos indemniza por cualquier reclamación relacionada con datos de usuarios"
                    ]
                },
                privacy: {
                    title: "Privacidad",
                    text: "El procesamiento de datos personales se rige por nuestra <a href=\"/privacy\">Política de Privacidad</a>, que forma parte integral de estos Términos."
                }
            },
            paymentTerms: {
                title: "6. Términos de Pago",
                plansAndPricing: {
                    title: "Planes y Tarifas",
                    items: [
                        "Los precios están disponibles en nuestro sitio web y pueden cambiar",
                        "Los cambios de precio se notifican con al menos 30 días de anticipación",
                        "Los pagos son no reembolsables salvo disposición legal contraria"
                    ]
                },
                billing: {
                    title: "Facturación",
                    items: [
                        "Los planes de pago se facturan por adelantado",
                        "La falta de pago puede resultar en suspensión del servicio",
                        "Los impuestos aplicables se agregan según la jurisdicción"
                    ]
                },
                cancellation: {
                    title: "Cancelación",
                    items: [
                        "Puede cancelar su suscripción en cualquier momento",
                        "El servicio continúa hasta el final del período pagado",
                        "Los datos pueden eliminarse después de la cancelación"
                    ]
                }
            },
            intellectualProperty: {
                title: "7. Propiedad Intelectual",
                ourRights: {
                    title: "Nuestros Derechos",
                    text: "Los Servicios, incluyendo software, algoritmos, diseños y contenido, son propiedad de Minimal y están protegidos por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual."
                },
                yourRights: {
                    title: "Sus Derechos",
                    items: [
                        "Mantiene todos los derechos sobre su contenido original",
                        "Nos otorga licencia para operar los Servicios",
                        "Puede usar nuestra plataforma según estos Términos"
                    ]
                },
                trademarks: {
                    title: "Marcas Comerciales",
                    text: "Las marcas comerciales de Minimal no pueden usarse sin autorización escrita previa."
                }
            },
            serviceAvailability: {
                title: "8. Disponibilidad del Servicio",
                uptime: {
                    title: "Tiempo de Actividad",
                    text: "Nos esforzamos por mantener alta disponibilidad, pero no garantizamos operación ininterrumpida de los Servicios."
                },
                maintenance: {
                    title: "Mantenimiento",
                    items: [
                        "Podemos realizar mantenimiento programado con notificación previa",
                        "El mantenimiento de emergencia puede ocurrir sin aviso previo",
                        "Trabajamos para minimizar interrupciones del servicio"
                    ]
                },
                serviceChanges: {
                    title: "Cambios en el Servicio",
                    text: "Podemos modificar, actualizar o discontinuar funcionalidades con notificación razonable."
                }
            },
            limitationOfLiability: {
                title: "9. Limitación de Responsabilidad",
                warrantyExclusion: {
                    title: "Exclusión de Garantías",
                    text: "Los Servicios se proporcionan \"tal como están\" sin garantías expresas o implícitas de ningún tipo."
                },
                damagesLimitation: {
                    title: "Limitación de Daños",
                    text: "En la máxima medida permitida por la ley, no seremos responsables por daños indirectos, incidentales, especiales o consecuentes, incluyendo pérdida de beneficios o datos."
                },
                maximumLimit: {
                    title: "Límite Máximo",
                    text: "Nuestra responsabilidad total no excederá las tarifas pagadas por usted en los 12 meses anteriores al evento que origina la reclamación."
                }
            },
            indemnification: {
                title: "10. Indemnización",
                text: "Usted acepta indemnizarnos contra reclamaciones, daños, pérdidas y gastos (incluyendo honorarios legales razonables) que surjan de:",
                items: [
                    "Su uso de los Servicios",
                    "Violación de estos Términos",
                    "Violación de derechos de terceros",
                    "Su contenido o datos"
                ]
            },
            termination: {
                title: "11. Terminación",
                byYou: {
                    title: "Terminación por su Parte",
                    text: "Puede terminar su cuenta en cualquier momento cancelando su suscripción."
                },
                byUs: {
                    title: "Terminación por Nuestra Parte",
                    text: "Podemos terminar o suspender su acceso inmediatamente por:",
                    items: [
                        "Violación de estos Términos",
                        "Actividad fraudulenta o ilegal",
                        "Falta de pago",
                        "Solicitud de autoridades competentes"
                    ]
                },
                effects: {
                    title: "Efectos de la Terminación",
                    items: [
                        "Cesa inmediatamente su derecho a usar los Servicios",
                        "Sus datos pueden eliminarse según nuestra política",
                        "Las provisiones sobre limitación de responsabilidad sobreviven"
                    ]
                }
            },
            governingLaw: {
                title: "12. Ley Aplicable y Jurisdicción",
                paragraph1: "Estos Términos se rigen por las leyes de [Jurisdicción] sin referencia a sus principios de conflicto de leyes.",
                paragraph2: "Cualquier disputa se resolverá en los tribunales competentes de [Jurisdicción], y usted consiente a la jurisdicción personal de dichos tribunales.",
                disputeResolution: {
                    title: "Resolución de Disputas",
                    text: "Alentamos la resolución amigable de disputas. Para reclamaciones menores, puede requerirse arbitraje según las reglas locales aplicables."
                }
            },
            miscellaneous: {
                title: "13. Disposiciones Generales",
                entireAgreement: {
                    title: "Acuerdo Completo",
                    text: "Estos Términos constituyen el acuerdo completo entre las partes respecto a los Servicios."
                },
                modifications: {
                    title: "Modificaciones",
                    text: "Solo podemos modificar estos Términos mediante documento escrito firmado o notificación según se describe aquí."
                },
                severability: {
                    title: "Divisibilidad",
                    text: "Si alguna provisión es inválida, el resto de los Términos permanece en vigor."
                },
                waiver: {
                    title: "Renuncia",
                    text: "La falta de ejercer cualquier derecho no constituye renuncia al mismo."
                },
                assignment: {
                    title: "Cesión",
                    text: "Usted no puede ceder estos Términos sin nuestro consentimiento. Podemos ceder libremente nuestros derechos y obligaciones."
                }
            },
            contact: {
                title: "¿Preguntas sobre los Términos?",
                text: "Si tiene preguntas sobre estos Términos de Servicio, contáctanos:",
                email: "Email:",
                emailAddress: "legal@minimal.ai",
                address: "Dirección:",
                addressText: "[Dirección física de la empresa]"
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
                title: "Terms of Service - Minimal"
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
                title: "Terms of Service",
                subtitle: "These terms govern the use of our AI-powered web transformation platform. Please read them carefully."
            },
            lastUpdated: {
                label: "Last updated:",
                date: "January 11, 2025"
            },
            acceptance: {
                title: "1. Acceptance of Terms",
                paragraph1: "These Terms of Service (\"Terms\") constitute a legal agreement between you (\"User\", \"Client\" or \"you\") and Minimal (\"we\", \"our\" or \"the Company\") regarding the use of our AI-powered web transformation platform.",
                paragraph2: "By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to any part of these terms, you must not use our Services.",
                important: {
                    title: "Important",
                    text: "These Terms may be updated periodically. Continued use of the Services after changes constitutes your acceptance of the revised terms."
                }
            },
            serviceDescription: {
                title: "2. Service Description",
                whatWeOffer: {
                    title: "What We Offer",
                    text: "Minimal provides an AI platform that transforms static websites into interactive conversational experiences, enabling:",
                    features: [
                        "Smart chat integration into existing websites",
                        "Automatic brand identity preservation",
                        "Advanced user behavior analytics",
                        "Personalized natural language processing",
                        "Customization and configuration tools"
                    ]
                },
                limitations: {
                    title: "Service Limitations",
                    text: "Our Services are subject to the following limitations:",
                    items: [
                        "Service availability according to contracted plan",
                        "Monthly usage limits specific to each plan",
                        "Technical and compatibility restrictions",
                        "Dependence on third-party services"
                    ]
                }
            },
            userAccounts: {
                title: "3. User Accounts",
                creation: {
                    title: "Account Creation",
                    text: "To use certain aspects of the Services, you must create an account providing accurate and complete information."
                },
                responsibilities: {
                    title: "User Responsibilities",
                    items: [
                        "Maintain confidentiality of your access credentials",
                        "Immediately notify of any unauthorized use of your account",
                        "Provide accurate and updated information",
                        "Be responsible for all activities under your account"
                    ]
                },
                suspension: {
                    title: "Account Suspension",
                    text: "We reserve the right to suspend or terminate accounts that violate these Terms or present suspicious activity."
                }
            },
            acceptableUse: {
                title: "4. Acceptable Use",
                permitted: {
                    title: "Permitted Uses",
                    items: [
                        "Integrate our service into legitimate websites",
                        "Customize the experience according to your brand",
                        "Analyze user data ethically",
                        "Use functionalities according to documentation"
                    ]
                },
                prohibited: {
                    title: "Prohibited Uses",
                    text: "You may not use our Services for:",
                    items: [
                        "Illegal, fraudulent or malicious activities",
                        "Violating intellectual property rights",
                        "Distributing offensive, discriminatory or harmful content",
                        "Attempting unauthorized access to systems or data",
                        "Interfering with Service operation",
                        "Reverse engineering our technology",
                        "Creating direct competing products"
                    ]
                },
                monitoring: {
                    title: "Compliance Monitoring",
                    text: "We reserve the right to monitor use of the Services to ensure compliance with these terms."
                }
            },
            dataPrivacy: {
                title: "5. Data and Privacy",
                yourData: {
                    title: "Your Data",
                    text: "You retain ownership of all content data you provide through the Services. You grant us a license to process this data according to our Services."
                },
                websiteUserData: {
                    title: "Your Website Users' Data",
                    items: [
                        "You are responsible for obtaining necessary consents from your users",
                        "You must comply with applicable data protection laws",
                        "You indemnify us for any claims related to user data"
                    ]
                },
                privacy: {
                    title: "Privacy",
                    text: "The processing of personal data is governed by our <a href=\"/privacy\">Privacy Policy</a>, which forms an integral part of these Terms."
                }
            },
            paymentTerms: {
                title: "6. Payment Terms",
                plansAndPricing: {
                    title: "Plans and Pricing",
                    items: [
                        "Prices are available on our website and may change",
                        "Price changes are notified at least 30 days in advance",
                        "Payments are non-refundable except as legally required"
                    ]
                },
                billing: {
                    title: "Billing",
                    items: [
                        "Payment plans are billed in advance",
                        "Non-payment may result in service suspension",
                        "Applicable taxes are added according to jurisdiction"
                    ]
                },
                cancellation: {
                    title: "Cancellation",
                    items: [
                        "You may cancel your subscription at any time",
                        "Service continues until the end of the paid period",
                        "Data may be deleted after cancellation"
                    ]
                }
            },
            intellectualProperty: {
                title: "7. Intellectual Property",
                ourRights: {
                    title: "Our Rights",
                    text: "The Services, including software, algorithms, designs and content, are property of Minimal and are protected by copyright, trademarks and other intellectual property laws."
                },
                yourRights: {
                    title: "Your Rights",
                    items: [
                        "You retain all rights to your original content",
                        "You grant us license to operate the Services",
                        "You may use our platform according to these Terms"
                    ]
                },
                trademarks: {
                    title: "Trademarks",
                    text: "Minimal's trademarks may not be used without prior written authorization."
                }
            },
            serviceAvailability: {
                title: "8. Service Availability",
                uptime: {
                    title: "Uptime",
                    text: "We strive to maintain high availability, but do not guarantee uninterrupted operation of the Services."
                },
                maintenance: {
                    title: "Maintenance",
                    items: [
                        "We may perform scheduled maintenance with prior notification",
                        "Emergency maintenance may occur without prior notice",
                        "We work to minimize service interruptions"
                    ]
                },
                serviceChanges: {
                    title: "Service Changes",
                    text: "We may modify, update or discontinue features with reasonable notification."
                }
            },
            limitationOfLiability: {
                title: "9. Limitation of Liability",
                warrantyExclusion: {
                    title: "Warranty Exclusion",
                    text: "The Services are provided \"as is\" without express or implied warranties of any kind."
                },
                damagesLimitation: {
                    title: "Damages Limitation",
                    text: "To the maximum extent permitted by law, we shall not be liable for indirect, incidental, special or consequential damages, including loss of profits or data."
                },
                maximumLimit: {
                    title: "Maximum Limit",
                    text: "Our total liability shall not exceed the fees paid by you in the 12 months prior to the event giving rise to the claim."
                }
            },
            indemnification: {
                title: "10. Indemnification",
                text: "You agree to indemnify us against claims, damages, losses and expenses (including reasonable legal fees) arising from:",
                items: [
                    "Your use of the Services",
                    "Breach of these Terms",
                    "Violation of third party rights",
                    "Your content or data"
                ]
            },
            termination: {
                title: "11. Termination",
                byYou: {
                    title: "Termination by You",
                    text: "You may terminate your account at any time by canceling your subscription."
                },
                byUs: {
                    title: "Termination by Us",
                    text: "We may terminate or suspend your access immediately for:",
                    items: [
                        "Breach of these Terms",
                        "Fraudulent or illegal activity",
                        "Non-payment",
                        "Request from competent authorities"
                    ]
                },
                effects: {
                    title: "Effects of Termination",
                    items: [
                        "Your right to use the Services ceases immediately",
                        "Your data may be deleted according to our policy",
                        "Provisions about limitation of liability survive"
                    ]
                }
            },
            governingLaw: {
                title: "12. Governing Law and Jurisdiction",
                paragraph1: "These Terms are governed by the laws of [Jurisdiction] without reference to its conflict of law principles.",
                paragraph2: "Any dispute will be resolved in the competent courts of [Jurisdiction], and you consent to the personal jurisdiction of such courts.",
                disputeResolution: {
                    title: "Dispute Resolution",
                    text: "We encourage amicable resolution of disputes. For minor claims, arbitration may be required according to applicable local rules."
                }
            },
            miscellaneous: {
                title: "13. General Provisions",
                entireAgreement: {
                    title: "Entire Agreement",
                    text: "These Terms constitute the complete agreement between the parties regarding the Services."
                },
                modifications: {
                    title: "Modifications",
                    text: "We may only modify these Terms through signed written document or notification as described herein."
                },
                severability: {
                    title: "Severability",
                    text: "If any provision is invalid, the rest of the Terms remain in effect."
                },
                waiver: {
                    title: "Waiver",
                    text: "Failure to exercise any right does not constitute waiver thereof."
                },
                assignment: {
                    title: "Assignment",
                    text: "You may not assign these Terms without our consent. We may freely assign our rights and obligations."
                }
            },
            contact: {
                title: "Questions About the Terms?",
                text: "If you have questions about these Terms of Service, contact us:",
                email: "Email:",
                emailAddress: "legal@minimal.ai",
                address: "Address:",
                addressText: "[Company physical address]"
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