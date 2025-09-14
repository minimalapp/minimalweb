// Community page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof communityTranslations === 'undefined') {
    var communityTranslations = {
        es: {
            meta: {
                title: "Comunidad - Minimal"
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
                title: "Comunidad Minimal",
                subtitle: "Únete a miles de desarrolladores, diseñadores y empresarios que están transformando experiencias web con inteligencia artificial conversacional."
            },
            stats: {
                title: "Nuestra Comunidad en Números",
                activeMembers: "Miembros Activos",
                transformedSites: "Sitios Web Transformados",
                countriesRepresented: "Países Representados",
                userSatisfaction: "Satisfacción de Usuarios"
            },
            channels: {
                title: "Canales de Comunidad",
                discord: {
                    title: "Discord Server",
                    description: "Chat en tiempo real, canales especializados por temas, eventos exclusivos y acceso directo al equipo de Minimal.",
                    members: "Miembros",
                    activity: "Actividad",
                    button: "Únete a Discord"
                },
                github: {
                    title: "GitHub Community",
                    description: "Discussions, issues, contribuciones al código, ejemplos de implementación y documentación colaborativa.",
                    followers: "Followers",
                    contributions: "Contribuciones",
                    button: "Ver GitHub"
                },
                twitter: {
                    title: "Twitter/X Community",
                    description: "Actualizaciones del producto, casos de uso interesantes, tips de implementación y noticias de la industria.",
                    followers: "Seguidores",
                    postsPerWeek: "Posts/Semana",
                    button: "Seguir @MinimalAI"
                },
                linkedin: {
                    title: "LinkedIn Network",
                    description: "Networking profesional, casos de estudio empresariales, insights de industria y oportunidades de colaboración.",
                    connections: "Conexiones",
                    companies: "Empresas",
                    button: "Conectar en LinkedIn"
                },
                youtube: {
                    title: "YouTube Channel",
                    description: "Tutoriales en video, demos en vivo, entrevistas con la comunidad y deep dives técnicos semanales.",
                    subscribers: "Suscriptores",
                    videos: "Videos",
                    button: "Suscribirse"
                },
                newsletter: {
                    title: "Newsletter Semanal",
                    description: "Resumen semanal de actualizaciones, mejores prácticas, casos de uso destacados y novedades del mundo IA.",
                    subscribers: "Suscriptores",
                    openRate: "Open Rate",
                    button: "Suscribirse"
                }
            },
            guidelines: {
                title: "Pautas de la Comunidad",
                respectful: {
                    title: "Sé Respetuoso",
                    description: "Trata a todos los miembros con respeto, independientemente de su nivel de experiencia o background. No toleramos discriminación ni harassment de ningún tipo."
                },
                helpCollaborate: {
                    title: "Ayuda y Colabora",
                    description: "Comparte conocimiento, ayuda a otros miembros con sus preguntas y contribuye de manera constructiva a las discusiones."
                },
                stayRelevant: {
                    title: "Mantén las Discusiones Relevantes",
                    description: "Utiliza los canales apropiados para cada tipo de discusión y mantén las conversaciones enfocadas en temas relacionados con Minimal y desarrollo web."
                },
                noSpam: {
                    title: "No Hagas Spam",
                    description: "Evita promocionar productos o servicios no relacionados. Si quieres compartir algo comercial, usa los canales designados para ello."
                },
                respectIP: {
                    title: "Respeta la Propiedad Intelectual",
                    description: "No compartas contenido protegido por copyright sin permiso y siempre da crédito cuando corresponda."
                }
            },
            contributions: {
                title: "Formas de Contribuir",
                reportBugs: {
                    title: "🐛 Reporta Bugs",
                    description: "Ayúdanos a mejorar reportando bugs y problemas que encuentres. Proporciona información detallada para facilitar la resolución."
                },
                suggestFeatures: {
                    title: "💡 Sugiere Funcionalidades",
                    description: "Comparte ideas para nuevas características o mejoras. Usa nuestro canal de feature requests en Discord o GitHub."
                },
                improveDocs: {
                    title: "📚 Mejora la Documentación",
                    description: "Contribuye con ejemplos, correcciones o nuevas secciones en nuestra documentación. Toda ayuda es bienvenida."
                },
                createContent: {
                    title: "🎯 Crea Contenido",
                    description: "Escribe blog posts, crea videos tutoriales, o comparte casos de uso interesantes de tu implementación."
                },
                mentoring: {
                    title: "🤝 Mentoring",
                    description: "Ayuda a nuevos miembros con sus primeros pasos, responde preguntas frecuentes y guía implementaciones complejas."
                }
            },
            events: {
                title: "Próximos Eventos",
                webinar: {
                    date: "15 Enero 2025",
                    type: "Webinar",
                    title: "Implementación Avanzada con React y Next.js",
                    description: "Deep dive técnico sobre integración avanzada de Minimal en aplicaciones React y Next.js, incluyendo SSR, hooks personalizados y optimizaciones de rendimiento.",
                    button: "Registrarse"
                },
                workshop: {
                    date: "22 Enero 2025",
                    type: "Workshop",
                    title: "Optimización de Conversiones con AI Chat",
                    description: "Workshop práctico sobre cómo usar analytics de Minimal para identificar oportunidades de mejora y optimizar las tasas de conversión de tu sitio web.",
                    button: "Registrarse"
                },
                ama: {
                    date: "29 Enero 2025",
                    type: "AMA",
                    title: "Ask Me Anything con los Fundadores",
                    description: "Sesión abierta de preguntas y respuestas con Pablo Wolfus y Guido Valente, cofundadores de Minimal. Hablaremos sobre roadmap, visión de producto y futuro de la IA conversacional.",
                    button: "Hacer Pregunta"
                },
                hackathon: {
                    date: "5 Febrero 2025",
                    type: "Hackathon",
                    title: "Minimal Hackathon 2025",
                    description: "48 horas de hackathon virtual enfocado en crear experiencias conversacionales innovadoras. Premios de $10K USD en total y oportunidades de mentoring.",
                    button: "Registrar Equipo"
                }
            },
            successStories: {
                title: "Historias de Éxito de la Comunidad",
                story1: {
                    content: "Implementar Minimal en nuestro e-commerce aumentó las consultas de productos en 340% y las conversiones en 28%. La comunidad fue fundamental para optimizar nuestro setup inicial.",
                    authorName: "María Rodríguez",
                    authorTitle: "CTO, TechCommerce"
                },
                story2: {
                    content: "Como desarrollador freelancer, Minimal me ha permitido ofrecer un valor agregado increíble a mis clientes. La documentación y el soporte de la comunidad son excepcionales.",
                    authorName: "Juan Silva",
                    authorTitle: "Desarrollador Full-Stack"
                },
                story3: {
                    content: "Nuestro sitio de SaaS B2B vio una reducción del 45% en tickets de soporte después de implementar Minimal. Los usuarios encuentran respuestas instantáneamente.",
                    authorName: "Laura Pérez",
                    authorTitle: "Head of Customer Success, DataFlow"
                },
                story4: {
                    content: "La API de Minimal es increíblemente flexible. Pudimos crear integraciones personalizadas que se adaptan perfectamente a nuestro flujo de trabajo existente.",
                    authorName: "Carlos García",
                    authorTitle: "Lead Developer, InnovateSoft"
                }
            },
            resources: {
                title: "Recursos de la Comunidad",
                knowledgeBase: {
                    title: "📘 Knowledge Base",
                    items: [
                        "Artículos técnicos escritos por la comunidad",
                        "Casos de estudio detallados",
                        "Mejores prácticas por industria",
                        "Troubleshooting guides"
                    ]
                },
                tools: {
                    title: "🔧 Herramientas",
                    items: [
                        "Minimal Configuration Generator",
                        "Performance Testing Tools",
                        "Analytics Dashboard Templates",
                        "Integration Examples Repository"
                    ]
                },
                assets: {
                    title: "🎨 Assets Comunitarios",
                    items: [
                        "UI Components y Templates",
                        "Iconos y elementos visuales",
                        "Themes personalizados",
                        "Branding guidelines"
                    ]
                }
            },
            ambassadors: {
                title: "Programa de Embajadores",
                what: {
                    title: "¿Qué es un Embajador Minimal?",
                    description: "Los embajadores son miembros destacados de la comunidad que ayudan a otros usuarios, contribuyen con contenido valioso y representan los valores de Minimal."
                },
                benefits: {
                    title: "Beneficios",
                    items: [
                        "Acceso anticipado a nuevas funcionalidades",
                        "Sesiones exclusivas con el equipo de producto",
                        "Reconocimiento oficial y badges especiales",
                        "Oportunidades de speaking en eventos",
                        "Swag exclusivo y regalos especiales"
                    ]
                },
                howToBecome: {
                    title: "¿Cómo Convertirse en Embajador?",
                    description: "Los embajadores son seleccionados por su contribución activa a la comunidad, conocimiento técnico y capacidad de ayudar a otros miembros.",
                    button: "Aplicar al Programa"
                }
            },
            cta: {
                title: "¡Únete a Nuestra Comunidad Hoy!",
                description: "Conecta con miles de desarrolladores, comparte experiencias y lleva tus proyectos al siguiente nivel con Minimal.",
                button: "Comenzar Ahora"
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
                title: "Community - Minimal"
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
                title: "Minimal Community",
                subtitle: "Join thousands of developers, designers, and entrepreneurs transforming web experiences with conversational artificial intelligence."
            },
            stats: {
                title: "Our Community in Numbers",
                activeMembers: "Active Members",
                transformedSites: "Transformed Websites",
                countriesRepresented: "Countries Represented",
                userSatisfaction: "User Satisfaction"
            },
            channels: {
                title: "Community Channels",
                discord: {
                    title: "Discord Server",
                    description: "Real-time chat, specialized topic channels, exclusive events, and direct access to the Minimal team.",
                    members: "Members",
                    activity: "Activity",
                    button: "Join Discord"
                },
                github: {
                    title: "GitHub Community",
                    description: "Discussions, issues, code contributions, implementation examples, and collaborative documentation.",
                    followers: "Followers",
                    contributions: "Contributions",
                    button: "View GitHub"
                },
                twitter: {
                    title: "Twitter/X Community",
                    description: "Product updates, interesting use cases, implementation tips, and industry news.",
                    followers: "Followers",
                    postsPerWeek: "Posts/Week",
                    button: "Follow @MinimalAI"
                },
                linkedin: {
                    title: "LinkedIn Network",
                    description: "Professional networking, business case studies, industry insights, and collaboration opportunities.",
                    connections: "Connections",
                    companies: "Companies",
                    button: "Connect on LinkedIn"
                },
                youtube: {
                    title: "YouTube Channel",
                    description: "Video tutorials, live demos, community interviews, and weekly technical deep dives.",
                    subscribers: "Subscribers",
                    videos: "Videos",
                    button: "Subscribe"
                },
                newsletter: {
                    title: "Weekly Newsletter",
                    description: "Weekly summary of updates, best practices, featured use cases, and AI world news.",
                    subscribers: "Subscribers",
                    openRate: "Open Rate",
                    button: "Subscribe"
                }
            },
            guidelines: {
                title: "Community Guidelines",
                respectful: {
                    title: "Be Respectful",
                    description: "Treat all members with respect, regardless of their experience level or background. We do not tolerate discrimination or harassment of any kind."
                },
                helpCollaborate: {
                    title: "Help and Collaborate",
                    description: "Share knowledge, help other members with their questions, and contribute constructively to discussions."
                },
                stayRelevant: {
                    title: "Keep Discussions Relevant",
                    description: "Use appropriate channels for each type of discussion and keep conversations focused on topics related to Minimal and web development."
                },
                noSpam: {
                    title: "Don't Spam",
                    description: "Avoid promoting unrelated products or services. If you want to share something commercial, use designated channels for it."
                },
                respectIP: {
                    title: "Respect Intellectual Property",
                    description: "Don't share copyrighted content without permission and always give credit when appropriate."
                }
            },
            contributions: {
                title: "Ways to Contribute",
                reportBugs: {
                    title: "🐛 Report Bugs",
                    description: "Help us improve by reporting bugs and issues you find. Provide detailed information to facilitate resolution."
                },
                suggestFeatures: {
                    title: "💡 Suggest Features",
                    description: "Share ideas for new features or improvements. Use our feature requests channel on Discord or GitHub."
                },
                improveDocs: {
                    title: "📚 Improve Documentation",
                    description: "Contribute with examples, corrections, or new sections in our documentation. All help is welcome."
                },
                createContent: {
                    title: "🎯 Create Content",
                    description: "Write blog posts, create tutorial videos, or share interesting use cases from your implementation."
                },
                mentoring: {
                    title: "🤝 Mentoring",
                    description: "Help new members with their first steps, answer frequently asked questions, and guide complex implementations."
                }
            },
            events: {
                title: "Upcoming Events",
                webinar: {
                    date: "January 15, 2025",
                    type: "Webinar",
                    title: "Advanced Implementation with React and Next.js",
                    description: "Technical deep dive on advanced Minimal integration in React and Next.js applications, including SSR, custom hooks, and performance optimizations.",
                    button: "Register"
                },
                workshop: {
                    date: "January 22, 2025",
                    type: "Workshop",
                    title: "Conversion Optimization with AI Chat",
                    description: "Practical workshop on how to use Minimal analytics to identify improvement opportunities and optimize your website's conversion rates.",
                    button: "Register"
                },
                ama: {
                    date: "January 29, 2025",
                    type: "AMA",
                    title: "Ask Me Anything with the Founders",
                    description: "Open Q&A session with Pablo Wolfus and Guido Valente, co-founders of Minimal. We'll discuss roadmap, product vision, and the future of conversational AI.",
                    button: "Ask Question"
                },
                hackathon: {
                    date: "February 5, 2025",
                    type: "Hackathon",
                    title: "Minimal Hackathon 2025",
                    description: "48-hour virtual hackathon focused on creating innovative conversational experiences. $10K USD total prizes and mentoring opportunities.",
                    button: "Register Team"
                }
            },
            successStories: {
                title: "Community Success Stories",
                story1: {
                    content: "Implementing Minimal on our e-commerce site increased product inquiries by 340% and conversions by 28%. The community was key to optimizing our initial setup.",
                    authorName: "María Rodríguez",
                    authorTitle: "CTO, TechCommerce"
                },
                story2: {
                    content: "As a freelance developer, Minimal has allowed me to offer incredible added value to my clients. The documentation and community support are exceptional.",
                    authorName: "Juan Silva",
                    authorTitle: "Full-Stack Developer"
                },
                story3: {
                    content: "Our B2B SaaS site saw a 45% reduction in support tickets after implementing Minimal. Users find answers instantly.",
                    authorName: "Laura Pérez",
                    authorTitle: "Head of Customer Success, DataFlow"
                },
                story4: {
                    content: "Minimal's API is incredibly flexible. We were able to create custom integrations that fit perfectly with our existing workflow.",
                    authorName: "Carlos García",
                    authorTitle: "Lead Developer, InnovateSoft"
                }
            },
            resources: {
                title: "Community Resources",
                knowledgeBase: {
                    title: "📘 Knowledge Base",
                    items: [
                        "Technical articles written by the community",
                        "Detailed case studies",
                        "Best practices by industry",
                        "Troubleshooting guides"
                    ]
                },
                tools: {
                    title: "🔧 Tools",
                    items: [
                        "Minimal Configuration Generator",
                        "Performance Testing Tools",
                        "Analytics Dashboard Templates",
                        "Integration Examples Repository"
                    ]
                },
                assets: {
                    title: "🎨 Community Assets",
                    items: [
                        "UI Components and Templates",
                        "Icons and visual elements",
                        "Custom themes",
                        "Branding guidelines"
                    ]
                }
            },
            ambassadors: {
                title: "Ambassador Program",
                what: {
                    title: "What is a Minimal Ambassador?",
                    description: "Ambassadors are outstanding community members who help other users, contribute valuable content, and represent Minimal's values."
                },
                benefits: {
                    title: "Benefits",
                    items: [
                        "Early access to new features",
                        "Exclusive sessions with the product team",
                        "Official recognition and special badges",
                        "Speaking opportunities at events",
                        "Exclusive swag and special gifts"
                    ]
                },
                howToBecome: {
                    title: "How to Become an Ambassador?",
                    description: "Ambassadors are selected for their active community contribution, technical knowledge, and ability to help other members.",
                    button: "Apply to Program"
                }
            },
            cta: {
                title: "Join Our Community Today!",
                description: "Connect with thousands of developers, share experiences, and take your projects to the next level with Minimal.",
                button: "Get Started Now"
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