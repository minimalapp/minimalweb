// Contact page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof contactTranslations === 'undefined') {
    var contactTranslations = {
        es: {
            meta: {
                title: "Contacto - Minimal"
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
                title: "Contacto",
                subtitle: "¿Listo para transformar tu sitio web? Estamos aquí para ayudarte a dar el siguiente paso hacia una experiencia conversacional inteligente."
            },
            form: {
                title: "Envíanos un Mensaje",
                name: {
                    label: "Nombre Completo *",
                    placeholder: "Tu nombre completo"
                },
                email: {
                    label: "Correo Electrónico *",
                    placeholder: "tu@empresa.com"
                },
                company: {
                    label: "Empresa",
                    placeholder: "Nombre de tu empresa"
                },
                website: {
                    label: "Sitio Web",
                    placeholder: "https://tu-sitio.com"
                },
                subject: {
                    label: "Asunto *",
                    placeholder: "¿En qué te podemos ayudar?"
                },
                message: {
                    label: "Mensaje *",
                    placeholder: "Cuéntanos más sobre tu proyecto y cómo podemos ayudarte..."
                },
                submit: "Enviar Mensaje"
            },
            directContact: {
                title: "¿Prefieres Hablar Directamente?",
                subtitle: "Estamos disponibles para responder todas tus preguntas y ayudarte a encontrar la mejor solución para tu sitio web.",
                quickResponse: {
                    title: "Respuesta Rápida",
                    description: "Respondemos a todas las consultas dentro de 48 horas durante días laborables."
                },
                personalizedDemo: {
                    title: "Demo Personalizada",
                    description: "Podemos crear una demo personalizada usando tu sitio web actual para que veas exactamente cómo funcionaría Minimal."
                }
            },
            contactInfo: {
                email: {
                    title: "Email",
                    text: "hola@minimal.ai"
                },
                support: {
                    title: "Soporte Técnico",
                    text: "Documentación completa<br>y soporte especializado"
                }
            },
            faq: {
                title: "Preguntas Frecuentes",
                q1: {
                    question: "¿Cuánto tiempo toma la implementación?",
                    answer: "La implementación básica toma menos de 5 minutos. Solo necesitas agregar una línea de código a tu sitio web. La personalización avanzada puede tomar días adicionales según tus necesidades específicas."
                },
                q2: {
                    question: "¿Es compatible con mi plataforma actual?",
                    answer: "Minimal funciona con cualquier sitio web, independientemente de la tecnología utilizada. WordPress, Shopify, React, Vue, sitios estáticos - todos son compatibles."
                },
                q3: {
                    question: "¿Qué datos necesito proporcionar?",
                    answer: "Solo necesitamos la URL de tu sitio web para comenzar. Nuestro sistema automáticamente extrae el contenido, colores y estilo de tu marca."
                },
                q4: {
                    question: "¿Cómo funciona la facturación?",
                    answer: "Ofrecemos planes mensuales y anuales flexibles basados en el número de visitantes y funcionalidades requeridas. Sin contratos a largo plazo."
                },
                q5: {
                    question: "¿Puedo probar antes de comprar?",
                    answer: "¡Absolutamente! Ofrecemos una prueba gratuita de 14 días y podemos crear una demo personalizada usando tu sitio web real."
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
                title: "Contact - Minimal"
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
                title: "Contact",
                subtitle: "Ready to transform your website? We're here to help you take the next step toward an intelligent conversational experience."
            },
            form: {
                title: "Send Us a Message",
                name: {
                    label: "Full Name *",
                    placeholder: "Your full name"
                },
                email: {
                    label: "Email Address *",
                    placeholder: "you@company.com"
                },
                company: {
                    label: "Company",
                    placeholder: "Your company name"
                },
                website: {
                    label: "Website",
                    placeholder: "https://your-site.com"
                },
                subject: {
                    label: "Subject *",
                    placeholder: "How can we help you?"
                },
                message: {
                    label: "Message *",
                    placeholder: "Tell us more about your project and how we can help you..."
                },
                submit: "Send Message"
            },
            directContact: {
                title: "Prefer to Talk Directly?",
                subtitle: "We're available to answer all your questions and help you find the best solution for your website.",
                quickResponse: {
                    title: "Quick Response",
                    description: "We respond to all inquiries within 48 hours on business days."
                },
                personalizedDemo: {
                    title: "Personalized Demo",
                    description: "We can create a personalized demo using your current website so you can see exactly how Minimal would work."
                }
            },
            contactInfo: {
                email: {
                    title: "Email",
                    text: "hello@minimal.ai"
                },
                support: {
                    title: "Technical Support",
                    text: "Complete documentation<br>and specialized support"
                }
            },
            faq: {
                title: "Frequently Asked Questions",
                q1: {
                    question: "How long does implementation take?",
                    answer: "Basic implementation takes less than 5 minutes. You just need to add one line of code to your website. Advanced customization may take additional days depending on your specific needs."
                },
                q2: {
                    question: "Is it compatible with my current platform?",
                    answer: "Minimal works with any website, regardless of the technology used. WordPress, Shopify, React, Vue, static sites - all are compatible."
                },
                q3: {
                    question: "What data do I need to provide?",
                    answer: "We only need your website URL to get started. Our system automatically extracts your content, colors, and brand style."
                },
                q4: {
                    question: "How does billing work?",
                    answer: "We offer flexible monthly and annual plans based on the number of visitors and required features. No long-term contracts."
                },
                q5: {
                    question: "Can I try before I buy?",
                    answer: "Absolutely! We offer a 14-day free trial and can create a personalized demo using your actual website."
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