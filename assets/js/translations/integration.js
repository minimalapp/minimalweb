// Integration page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof integrationTranslations === 'undefined') {
    var integrationTranslations = {
        es: {
            meta: {
                title: "Integración - Minimal"
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
                title: "Guía de Integración",
                subtitle: "Implementa Minimal en tu sitio web en minutos. Documentación técnica completa para desarrolladores y no-desarrolladores."
            },
            quickStart: {
                title: "Integración Rápida (5 minutos)",
                subtitle: "La manera más simple de empezar con Minimal. Funciona con cualquier sitio web.",
                steps: {
                    step1: {
                        title: "Obtén tu API Key",
                        description: "Regístrate en nuestra plataforma y obtén tu clave de API única."
                    },
                    step2: {
                        title: "Agrega el Script", 
                        description: "Copia y pega este código antes del tag &lt;/body&gt; en tu HTML:",
                        button: "Copiar"
                    },
                    step3: {
                        title: "¡Listo!",
                        description: "Refresca tu sitio web y verás el toggle de AI. El sistema automáticamente indexará tu contenido."
                    }
                },
                note: {
                    title: "💡 Nota Importante",
                    content: "Reemplaza TU_API_KEY con la clave real que recibiste por email. El chat puede tardar 2-3 minutos en aparecer la primera vez mientras se indexa tu contenido."
                }
            },
            platforms: {
                title: "Guías por Plataforma",
                wordpress: {
                    title: "WordPress",
                    method1: {
                        title: "Método 1: Plugin Personalizado",
                        description: "Crea un archivo minimal-chat.php en tu carpeta de plugins:"
                    },
                    method2: {
                        title: "Método 2: Functions.php",
                        description: "Agrega este código al archivo functions.php de tu tema:"
                    }
                },
                shopify: {
                    title: "Shopify",
                    description: "En tu panel de administración de Shopify:",
                    steps: [
                        "Ve a Tienda online → Temas",
                        "Haz clic en Acciones → Editar código", 
                        "Abre el archivo theme.liquid",
                        "Busca el tag &lt;/body&gt;",
                        "Agrega el código justo antes:"
                    ],
                    note: {
                        title: "🛒 E-commerce Optimizado",
                        content: "El atributo data-ecommerce=\"true\" habilita funcionalidades especiales para tiendas online como búsqueda de productos y asistencia de compra."
                    }
                },
                react: {
                    title: "React / Next.js",
                    npm: {
                        title: "Instalación con NPM"
                    },
                    components: {
                        title: "Uso en Componentes"
                    },
                    nextjs: {
                        title: "Next.js con Script Component"
                    }
                },
                vue: {
                    title: "Vue.js / Nuxt.js",
                    plugin: {
                        title: "Plugin para Vue 3"
                    },
                    composable: {
                        title: "Composable para Vue"
                    }
                },
                wix: {
                    title: "Wix / Squarespace",
                    wixSteps: {
                        title: "Wix",
                        steps: [
                            "Ve a Configuración → SEO avanzado",
                            "Busca Código personalizado",
                            "Agrega en Código para todas las páginas:"
                        ]
                    },
                    squarespace: {
                        title: "Squarespace", 
                        steps: [
                            "Ve a Configuración → Avanzado → Inyección de código",
                            "En Pie de página, agrega:"
                        ]
                    }
                },
                angular: {
                    title: "Angular",
                    service: {
                        title: "Servicio de Integración"
                    },
                    appComponent: {
                        title: "Uso en App Component"
                    }
                }
            },
            advanced: {
                title: "Configuración Avanzada",
                customization: {
                    title: "Opciones de Personalización",
                    description: "Configura la apariencia y comportamiento del chat según tus necesidades:"
                },
                api: {
                    title: "Configuración con JavaScript",
                    description: "Conecta Minimal con tus sistemas existentes para una experiencia más completa:"
                },
                analytics: {
                    title: "Eventos y Callbacks",
                    description: "Configura el seguimiento personalizado y métricas específicas:"
                },
                apiReference: {
                    title: "API Reference",
                    methods: {
                        title: "Métodos Disponibles"
                    },
                    analytics: {
                        title: "Integración con Analytics"
                    },
                    crm: {
                        title: "Integración con CRM"
                    }
                }
            },
            troubleshooting: {
                title: "Resolución de Problemas",
                common: {
                    title: "Problemas Comunes",
                    issue1: {
                        title: "El chat no aparece",
                        solutions: [
                            "Verifica que tu API key sea correcta",
                            "Asegúrate de que el script esté antes del &lt;/body&gt;",
                            "Revisa la consola del navegador para errores",
                            "Espera 2-3 minutos para el primer indexado"
                        ]
                    },
                    issue2: {
                        title: "Conflictos con otros scripts",
                        solutions: [
                            "Carga Minimal después de otros scripts",
                            "Usa el atributo defer si es necesario",
                            "Contacta soporte si persisten los conflictos"
                        ]
                    },
                    issue3: {
                        title: "Respuestas lentas o imprecisas",
                        solutions: [
                            "Verifica que tu sitio sea público y accesible",
                            "Asegúrate de que tu contenido esté bien estructurado (headings, párrafos)",
                            "Usa meta descripciones en tus páginas",
                            "Evita contenido duplicado o muy repetitivo"
                        ]
                    }
                },
                warning: {
                    title: "⚠️ Advertencia de Seguridad",
                    content: "Nunca compartas tu API key públicamente. Si crees que tu clave ha sido comprometida, contáctanos inmediatamente para regenerarla."
                },
                validation: {
                    title: "Validación de Instalación",
                    description: "Puedes verificar que Minimal esté funcionando correctamente usando esta función en la consola:"
                }
            },
            support: {
                title: "¿Necesitas Ayuda con la Integración?",
                description: "Nuestro equipo técnico está disponible para ayudarte con implementaciones complejas, configuraciones personalizadas o cualquier problema técnico.",
                button: "Obtener Soporte Técnico"
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
                title: "Integration - Minimal"
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
                title: "Integration Guide",
                subtitle: "Implement Minimal on your website in minutes. Complete technical documentation for developers and non-developers."
            },
            quickStart: {
                title: "Quick Integration (5 minutes)",
                subtitle: "The simplest way to get started with Minimal. Works with any website.",
                steps: {
                    step1: {
                        title: "Get your API Key",
                        description: "Sign up on our platform and get your unique API key."
                    },
                    step2: {
                        title: "Add the Script",
                        description: "Copy and paste this code before the &lt;/body&gt; tag in your HTML:",
                        button: "Copy"
                    },
                    step3: {
                        title: "Done!",
                        description: "Refresh your website and you'll see the AI toggle. The system will automatically index your content."
                    }
                },
                note: {
                    title: "💡 Important Note",
                    content: "Replace TU_API_KEY with the actual key you received by email. The chat may take 2-3 minutes to appear the first time while your content is being indexed."
                }
            },
            platforms: {
                title: "Platform-Specific Guides",
                wordpress: {
                    title: "WordPress",
                    method1: {
                        title: "Method 1: Custom Plugin",
                        description: "Create a minimal-chat.php file in your plugins folder:"
                    },
                    method2: {
                        title: "Method 2: Functions.php", 
                        description: "Add this code to your theme's functions.php file:"
                    }
                },
                shopify: {
                    title: "Shopify",
                    description: "In your Shopify admin panel:",
                    steps: [
                        "Go to Online Store → Themes",
                        "Click Actions → Edit code",
                        "Open the theme.liquid file", 
                        "Find the &lt;/body&gt; tag",
                        "Add the code just before:"
                    ],
                    note: {
                        title: "🛒 E-commerce Optimized",
                        content: "The data-ecommerce=\"true\" attribute enables special features for online stores like product search and purchase assistance."
                    }
                },
                react: {
                    title: "React / Next.js",
                    npm: {
                        title: "NPM Installation"
                    },
                    components: {
                        title: "Usage in Components"
                    },
                    nextjs: {
                        title: "Next.js with Script Component"
                    }
                },
                vue: {
                    title: "Vue.js / Nuxt.js",
                    plugin: {
                        title: "Vue 3 Plugin"
                    },
                    composable: {
                        title: "Vue Composable"
                    }
                },
                wix: {
                    title: "Wix / Squarespace",
                    wixSteps: {
                        title: "Wix",
                        steps: [
                            "Go to Settings → Advanced SEO",
                            "Find Custom code",
                            "Add to Code for all pages:"
                        ]
                    },
                    squarespace: {
                        title: "Squarespace",
                        steps: [
                            "Go to Settings → Advanced → Code Injection",
                            "In Footer, add:"
                        ]
                    }
                },
                angular: {
                    title: "Angular",
                    service: {
                        title: "Integration Service"
                    },
                    appComponent: {
                        title: "Usage in App Component"
                    }
                }
            },
            advanced: {
                title: "Advanced Configuration",
                customization: {
                    title: "Customization Options",
                    description: "Configure chat appearance and behavior according to your needs:"
                },
                api: {
                    title: "JavaScript Configuration",
                    description: "Connect Minimal with your existing systems for a more complete experience:"
                },
                analytics: {
                    title: "Events and Callbacks",
                    description: "Set up custom tracking and specific metrics:"
                },
                apiReference: {
                    title: "API Reference",
                    methods: {
                        title: "Available Methods"
                    },
                    analytics: {
                        title: "Analytics Integration"
                    },
                    crm: {
                        title: "CRM Integration"
                    }
                }
            },
            troubleshooting: {
                title: "Troubleshooting",
                common: {
                    title: "Common Issues",
                    issue1: {
                        title: "Chat doesn't appear",
                        solutions: [
                            "Verify your API key is correct",
                            "Make sure the script is before &lt;/body&gt;",
                            "Check browser console for errors",
                            "Wait 2-3 minutes for initial indexing"
                        ]
                    },
                    issue2: {
                        title: "Conflicts with other scripts",
                        solutions: [
                            "Load Minimal after other scripts",
                            "Use the defer attribute if necessary",
                            "Contact support if conflicts persist"
                        ]
                    },
                    issue3: {
                        title: "Slow or inaccurate responses",
                        solutions: [
                            "Verify your site is public and accessible",
                            "Ensure your content is well-structured (headings, paragraphs)",
                            "Use meta descriptions on your pages",
                            "Avoid duplicate or very repetitive content"
                        ]
                    }
                },
                warning: {
                    title: "⚠️ Security Warning",
                    content: "Never share your API key publicly. If you believe your key has been compromised, contact us immediately to regenerate it."
                },
                validation: {
                    title: "Installation Validation",
                    description: "You can verify that Minimal is working correctly using this function in the console:"
                }
            },
            support: {
                title: "Need Help with Integration?",
                description: "Our technical team is available to help you with complex implementations, custom configurations, or any technical issues.",
                button: "Get Technical Support"
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