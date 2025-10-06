// Internationalization (i18n) System
const translations = {
    es: {
        // Page Title and Meta
        pageTitle: "Minimal - Transforma tu Sitio Web en una Experiencia Conversacional Inteligente",
        meta: {
            title: "Minimal - Transforma tu Sitio Web en una Experiencia Conversacional Inteligente",
            description: "Minimal convierte sitios web estáticos en interfaces dinámicas de IA que capturan la intención real de tus visitantes. Moderniza tu presencia web sin reconstruir.",
            ogTitle: "Minimal - Transforma tu Sitio Web en una Experiencia Conversacional Inteligente",
            ogDescription: "Convierte sitios estáticos en interfaces dinámicas de IA que capturan la intención real de tus visitantes",
            twitterTitle: "Minimal - Transforma tu Sitio Web con IA Conversacional",
            twitterDescription: "Convierte sitios estáticos en interfaces dinámicas de IA que capturan la intención real de tus visitantes"
        },
        
        // Navigation
        nav: {
            product: "Producto",
            howItWorks: "Cómo Funciona",
            benefits: "Beneficios",
            useCases: "Casos de Uso",
            pricing: "Precios",
            tryFree: "Prueba Gratis"
        },
        
        // Magic Hero Animation
        magic: {
            words: ['Transforma', 'Moderniza', 'Revoluciona'],
            phrases: ["tu sitio web", "tu marca", "tu negocio"]
        },

        // Hero Section
        hero: {
            title: "Transforma tu Sitio Web en una <span class=\"highlight\">Experiencia Conversacional Inteligente</span>",
            titleHighlight: "Experiencia Conversacional Inteligente",
            subtitle: "Minimal convierte sitios estáticos en interfaces dinámicas de IA que capturan la intención real de tus visitantes",
            inputPlaceholder: "Ingresa la URL de tu sitio",
            generatePreview: "Generar Vista Previa",
            demo: {
                traditional: "Sitio Web Tradicional",
                withMinimal: "Con Minimal",
                chat: {
                    greeting: "¡Hola! ¿En qué puedo ayudarte hoy?",
                    userMessage: "Cuéntame sobre sus servicios",
                    response: "Por supuesto, te muestro nuestros servicios principales..."
                },
                services: {
                    title: "Servicios Destacados",
                    consulting: "Consultoría",
                    development: "Desarrollo"
                }
            }
        },
        
        // Problem Section
        problem: {
            title: "El Problema de los Sitios Web Estáticos",
            item1: {
                title: "🔍 Visibilidad Cero",
                description: "No sabes qué buscan realmente tus visitantes"
            },
            item2: {
                title: "🚪 Navegación Rígida", 
                description: "Los usuarios abandonan si no encuentran información rápidamente"
            },
            item3: {
                title: "💔 Oportunidades Perdidas",
                description: "Sin personalización, pierdes conversiones diariamente"
            },
            item4: {
                title: "📊 Datos Limitados",
                description: "Solo tienes clics, no intenciones"
            }
        },
        
        // Features Section
        features: {
            title: "Todo lo que Necesitas para Modernizar tu Presencia Web",
            item1: {
                title: "Detección Automática de Marca",
                description: "Mantiene tu identidad visual intacta"
            },
            item2: {
                title: "Analytics Avanzados",
                description: "Comprende intenciones, no solo clics"
            },
            item3: {
                title: "Toggle Inteligente",
                description: "Alterna entre vista tradicional y IA"
            },
            item4: {
                title: "Captura de Leads Contextual", 
                description: "CTAs dinámicos según conversación"
            },
            item5: {
                title: "Sin Código Complejo",
                description: "Integración en minutos"
            },
            item6: {
                title: "Seguridad Empresarial",
                description: "Datos encriptados y seguros"
            }
        },
        
        // Process Section (How It Works)
        process: {
            title: "De tu Sitio Web a IA en 3 Simples Pasos",
            step1: {
                title: "Ingresa tu URL",
                description: "La plataforma analiza y comprende tu contenido"
            },
            step2: {
                title: "Personaliza y Configura", 
                description: "Ajusta colores, tono y comportamiento"
            },
            step3: {
                title: "Integra con un Script",
                description: "Un código, transformación instantánea"
            }
        },
        
        // Value Section (Benefits)
        value: {
            title: "Valor Real para Cada Rol",
            tabs: {
                businessOwners: "Dueños de Negocio",
                marketing: "Equipos de Marketing",
                developers: "Desarrolladores",
                endUsers: "Usuarios Finales"
            }
        },

        // Use Cases Section
        useCases: {
            title: "Casos de Uso Reales",
            subtitle: "Descubre cómo diferentes industrias están transformando su presencia web con Minimal",
            case1: {
                title: "SaaS & Software",
                icon: "💻",
                description: "Reduce fricción en onboarding y convierte visitantes en usuarios activos",
                benefits: [
                    "Onboarding conversacional",
                    "Demostraciones interactivas",
                    "Soporte técnico inteligente"
                ]
            },
            case2: {
                title: "Servicios Profesionales",
                icon: "🏢",
                description: "Captura leads calificados y agenda reuniones automáticamente",
                benefits: [
                    "Calificación automática de leads",
                    "Agendamiento inteligente",
                    "Propuestas personalizadas"
                ]
            },
            case3: {
                title: "Educación & Formación",
                icon: "🎓",
                description: "Guía a estudiantes a cursos relevantes y responde dudas al instante",
                benefits: [
                    "Recomendación de cursos",
                    "Asesoría académica 24/7",
                    "Inscripción simplificada"
                ]
            },
            case4: {
                title: "Salud & Bienestar",
                icon: "🏥",
                description: "Conecta pacientes con servicios adecuados y agenda citas fácilmente",
                benefits: [
                    "Triage automatizado",
                    "Agendamiento de citas",
                    "Información de servicios"
                ]
            },
            case5: {
                title: "Inmobiliaria",
                icon: "🏠",
                description: "Ayuda a compradores a encontrar propiedades ideales basado en sus necesidades",
                benefits: [
                    "Búsqueda conversacional",
                    "Tours virtuales guiados",
                    "Cálculo de hipotecas"
                ]
            },
            case6: {
                title: "Finanzas & Seguros",
                icon: "💰",
                description: "Explica productos complejos de forma simple y personalizada",
                benefits: [
                    "Asesoría financiera básica",
                    "Comparación de productos",
                    "Cotización instantánea"
                ]
            }
        },
        
        // Pricing Section
        pricing: {
            title: "Planes Simples, Valor Transparente",
            starter: {
                title: "Starter",
                price: "$19",
                period: "/mes",
                button: "Comenzar",
                features: [
                    "✓ Hasta 1,000 conversaciones",
                    "✓ Analytics básicos",
                    "✓ Soporte por email"
                ]
            },
            professional: {
                title: "Professional",
                price: "$39",
                period: "/mes",
                button: "Comenzar",
                badge: "Más Popular",
                features: [
                    "✓ Hasta 10,000 conversaciones",
                    "✓ Analytics avanzados",
                    "✓ Soporte prioritario"
                ]
            },
            enterprise: {
                title: "Enterprise",
                price: "Custom",
                period: "Personalizado",
                button: "Contactar",
                features: [
                    "✓ Conversaciones ilimitadas",
                    "✓ Integración personalizada",
                    "✓ Account manager dedicado"
                ]
            }
        },
        
        // CTA Section
        cta: {
            title: "Comienza tu Transformación Digital Hoy",
            subtitle: "Únete a las empresas que ya están revolucionando su presencia web",
            emailPlaceholder: "Tu email",
            urlPlaceholder: "URL de tu sitio web", 
            button: "Obtener Demo Personalizada",
            footnote: "⚡ Configuración en menos de 1 hora"
        },
        
        // Footer
        footer: {
            product: "Producto",
            features: "Características",
            roadmap: "Roadmap",
            integration: "Integración",
            status: "Status",
            company: "Empresa",
            about: "Sobre Nosotros",
            blog: "Blog",
            careers: "Carreras",
            contact: "Contacto",
            resources: "Recursos",
            help: "Centro de Ayuda",
            guides: "Guías",
            webinars: "Webinars",
            community: "Comunidad",
            legal: "Legal",
            privacy: "Privacidad",
            terms: "Términos",
            gdpr: "GDPR",
            security: "Seguridad",
            copyright: "© 2025 Minimal. Todos los derechos reservados."
        },
        
        // How It Works
        howTitle: "De tu Sitio Web a IA en 3 Simples Pasos",
        step1Title: "Ingresa tu URL",
        step1Text: "La plataforma analiza y comprende tu contenido",
        step2Title: "Personaliza y Configura",
        step2Text: "Ajusta colores, tono y comportamiento",
        step3Title: "Integra con un Script",
        step3Text: "Un código, transformación instantánea",
        
        // Benefits Section
        benefitsTitle: "Valor Real para Cada Rol",
        tabBusinessOwners: "Dueños de Negocio",
        tabMarketing: "Equipos de Marketing",
        tabDevelopers: "Desarrolladores",
        tabEndUsers: "Usuarios Finales",
        
        // Benefits Content
        benefit1Title: "ROI Medible",
        benefit1Text: "Métricas claras de engagement y conversión",
        benefit2Title: "Visibilidad de Intención",
        benefit2Text: "Entiende qué buscan realmente tus clientes",
        benefit3Title: "Modernización Instantánea",
        benefit3Text: "Actualiza tu presencia web sin reconstruir",
        benefit4Title: "Captura de Leads Mejorada",
        benefit4Text: "Convierte más visitantes en clientes",

        // CTA Section
        ctaTitle: "Comienza tu Transformación Digital Hoy",
        ctaSubtitle: "Únete a las empresas que ya están revolucionando su presencia web",
        ctaEmailPlaceholder: "Tu email",
        ctaUrlPlaceholder: "URL de tu sitio web",
        ctaButton: "Obtener Demo Personalizada",
        ctaFootnote: "⚡ Configuración en menos de 1 hora",
        
        // Footer
        footerProduct: "Producto",
        footerFeatures: "Características",
        footerRoadmap: "Roadmap",
        footerIntegration: "Integración",
        footerStatus: "Status",
        footerCompany: "Empresa",
        footerAbout: "Sobre Nosotros",
        footerBlog: "Blog",
        footerCareers: "Carreras",
        footerContact: "Contacto",
        footerResources: "Recursos",
        footerHelp: "Centro de Ayuda",
        footerGuides: "Guías",
        footerWebinars: "Webinars",
        footerCommunity: "Comunidad",
        footerLegal: "Legal",
        footerTerms: "Términos",
        footerPrivacy: "Privacidad",
        footerGDPR: "GDPR",
        footerSecurity: "Seguridad",
        footerCopyright: "© 2025 Minimal. Todos los derechos reservados."
    },
    en: {
        // Page Title and Meta
        pageTitle: "Minimal - Transform your Website into an Intelligent Conversational Experience",
        meta: {
            title: "Minimal - Transform your Website into an Intelligent Conversational Experience",
            description: "Minimal converts static websites into dynamic AI interfaces that capture your visitors' real intent. Modernize your web presence without rebuilding.",
            ogTitle: "Minimal - Transform your Website into an Intelligent Conversational Experience",
            ogDescription: "Convert static sites into dynamic AI interfaces that capture your visitors' real intent",
            twitterTitle: "Minimal - Transform your Website with Conversational AI",
            twitterDescription: "Convert static sites into dynamic AI interfaces that capture your visitors' real intent"
        },
        
        // Navigation
        nav: {
            product: "Product",
            howItWorks: "How It Works",
            benefits: "Benefits",
            useCases: "Use Cases",
            pricing: "Pricing",
            tryFree: "Try Free"
        },
        
        // Magic Hero Animation
        magic: {
            words: ['Transform', 'Modernize', 'Revolutionize'],
            phrases: ["your website", "your brand", "your business"]
        },

        // Hero Section
        hero: {
            title: "Transform your Website into an <span class=\"highlight\">Intelligent Conversational Experience</span>",
            titleHighlight: "Intelligent Conversational Experience",
            subtitle: "Minimal converts static sites into dynamic AI interfaces that capture your visitors' real intent",
            inputPlaceholder: "Enter your website URL",
            generatePreview: "Generate Preview",
            demo: {
                traditional: "Traditional Website",
                withMinimal: "With Minimal",
                chat: {
                    greeting: "Hello! How can I help you today?",
                    userMessage: "Tell me about your services",
                    response: "Of course, let me show you our main services..."
                },
                services: {
                    title: "Featured Services",
                    consulting: "Consulting",
                    development: "Development"
                }
            }
        },
        heroInputPlaceholder: "Enter your website URL",
        heroButton: "Generate Preview",
        
        // Demo Labels
        demoTraditional: "Traditional Website",
        demoAI: "With Minimal",
        
        // Chat Messages
        chatGreeting: "Hello! How can I help you today?",
        chatUserMessage: "Tell me about your services",
        chatResponse: "Of course, let me show you our main services...",
        chatServicesTitle: "Featured Services",
        chatServiceConsulting: "Consulting",
        chatServiceDevelopment: "Development",
        
        // Problem Section
        problem: {
            title: "The Problem with Static Websites",
            item1: {
                title: "🔍 Zero Visibility",
                description: "You don't know what your visitors are really looking for"
            },
            item2: {
                title: "🚪 Rigid Navigation",
                description: "Users abandon if they don't find information quickly"
            },
            item3: {
                title: "💔 Lost Opportunities",
                description: "Without personalization, you lose conversions daily"
            },
            item4: {
                title: "📊 Limited Data",
                description: "You only have clicks, not intentions"
            }
        },
        
        // Features Section
        features: {
            title: "Everything You Need to Modernize Your Web Presence",
            item1: {
                title: "Automatic Brand Detection",
                description: "Keeps your visual identity intact"
            },
            item2: {
                title: "Advanced Analytics",
                description: "Understand intentions, not just clicks"
            },
            item3: {
                title: "Smart Toggle",
                description: "Switch between traditional and AI view"
            },
            item4: {
                title: "Contextual Lead Capture",
                description: "Dynamic CTAs based on conversation"
            },
            item5: {
                title: "No Complex Code",
                description: "Integration in minutes"
            },
            item6: {
                title: "Enterprise Security",
                description: "Encrypted and secure data"
            }
        },
        
        // Process Section (How It Works)
        process: {
            title: "From Your Website to AI in 3 Simple Steps",
            step1: {
                title: "Enter your URL",
                description: "The platform analyzes and understands your content"
            },
            step2: {
                title: "Customize and Configure",
                description: "Adjust colors, tone, and behavior"
            },
            step3: {
                title: "Integrate with a Script",
                description: "One code, instant transformation"
            }
        },
        
        // Value Section (Benefits)
        value: {
            title: "Real Value for Every Role",
            tabs: {
                businessOwners: "Business Owners",
                marketing: "Marketing Teams",
                developers: "Developers",
                endUsers: "End Users"
            },
            benefit1: {
                title: "Measurable ROI",
                description: "Clear metrics on engagement and conversion"
            },
            benefit2: {
                title: "Intent Visibility",
                description: "Understand what your customers really want"
            },
            benefit3: {
                title: "Instant Modernization",
                description: "Update your web presence without rebuilding"
            },
            benefit4: {
                title: "Enhanced Lead Capture",
                description: "Convert more visitors to customers"
            }
        },

        // Use Cases Section
        useCases: {
            title: "Real Use Cases",
            subtitle: "Discover how different industries are transforming their web presence with Minimal",
            case1: {
                title: "SaaS & Software",
                icon: "💻",
                description: "Reduce onboarding friction and convert visitors into active users",
                benefits: [
                    "Conversational onboarding",
                    "Interactive demonstrations",
                    "Intelligent technical support"
                ]
            },
            case2: {
                title: "Professional Services",
                icon: "🏢",
                description: "Capture qualified leads and schedule meetings automatically",
                benefits: [
                    "Automatic lead qualification",
                    "Smart scheduling",
                    "Personalized proposals"
                ]
            },
            case3: {
                title: "Education & Training",
                icon: "🎓",
                description: "Guide students to relevant courses and answer questions instantly",
                benefits: [
                    "Course recommendations",
                    "24/7 academic advising",
                    "Simplified enrollment"
                ]
            },
            case4: {
                title: "Health & Wellness",
                icon: "🏥",
                description: "Connect patients with appropriate services and schedule appointments easily",
                benefits: [
                    "Automated triage",
                    "Appointment scheduling",
                    "Service information"
                ]
            },
            case5: {
                title: "Real Estate",
                icon: "🏠",
                description: "Help buyers find ideal properties based on their needs",
                benefits: [
                    "Conversational search",
                    "Guided virtual tours",
                    "Mortgage calculator"
                ]
            },
            case6: {
                title: "Finance & Insurance",
                icon: "💰",
                description: "Explain complex products in a simple and personalized way",
                benefits: [
                    "Basic financial advice",
                    "Product comparison",
                    "Instant quotes"
                ]
            }
        },
        
        // Pricing Section
        pricing: {
            title: "Simple Plans, Transparent Value",
            starter: {
                title: "Starter",
                price: "$19",
                period: "/month",
                button: "Get Started",
                features: [
                    "✓ Up to 1,000 conversations",
                    "✓ Basic analytics",
                    "✓ Email support"
                ]
            },
            professional: {
                title: "Professional",
                price: "$39",
                period: "/month",
                button: "Get Started",
                badge: "Most Popular",
                features: [
                    "✓ Up to 10,000 conversations",
                    "✓ Advanced analytics",
                    "✓ Priority support"
                ]
            },
            enterprise: {
                title: "Enterprise",
                price: "Custom",
                period: "Custom",
                button: "Contact",
                features: [
                    "✓ Unlimited conversations",
                    "✓ Complete analytics",
                    "✓ Dedicated support",
                ]
            }
        },
        
        // CTA Section  
        cta: {
            title: "Start your Digital Transformation Today",
            subtitle: "Join the companies already revolutionizing their web presence",
            emailPlaceholder: "Your email",
            urlPlaceholder: "Your website URL",
            button: "Get Personalized Demo",
            footnote: "⚡ Setup in less than 1 hour"
        },
        
        // Footer
        footer: {
            product: "Product",
            features: "Features",
            roadmap: "Roadmap",
            integration: "Integration",
            status: "Status",
            company: "Company",
            about: "About",
            blog: "Blog",
            careers: "Careers",
            contact: "Contact",
            resources: "Resources",
            help: "Help Center",
            guides: "Guides",
            webinars: "Webinars",
            community: "Community",
            legal: "Legal",
            privacy: "Privacy",
            terms: "Terms",
            gdpr: "GDPR",
            security: "Security",
            copyright: "© 2025 Minimal. All rights reserved."
        },

        // Footer
        footerProduct: "Product",
        footerFeatures: "Features",
        footerRoadmap: "Roadmap",
        footerIntegration: "Integration",
        footerStatus: "Status",
        footerCompany: "Company",
        footerAbout: "About Us",
        footerBlog: "Blog",
        footerCareers: "Careers",
        footerContact: "Contact",
        footerResources: "Resources",
        footerHelp: "Help Center",
        footerGuides: "Guides",
        footerWebinars: "Webinars",
        footerCommunity: "Community",
        footerLegal: "Legal",
        footerTerms: "Terms",
        footerPrivacy: "Privacy",
        footerGDPR: "GDPR",
        footerSecurity: "Security",
        footerCopyright: "© 2025 Minimal. All rights reserved."
    }
};

// Language Detection and Management
let currentLanguage = 'en'; // Default to English

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Check if browser language starts with 'en' (English)
    if (browserLang.toLowerCase().startsWith('en')) {
        return 'en';
    }
    // Check if browser language starts with 'es' (Spanish)
    else if (browserLang.toLowerCase().startsWith('es')) {
        return 'es';
    }
    // Default to English for other languages
    else {
        return 'en';
    }
}


function updatePageContent() {
    const t = translations[currentLanguage];

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;

    // Update page title
    document.title = t.meta.title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', t.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.meta.ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', t.meta.ogDescription);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', t.meta.twitterTitle);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', t.meta.twitterDescription);
    
    // Helper function to get nested property (supports array notation)
    function getNestedValue(obj, path) {
        // Handle array notation like "features[0]"
        const parts = path.split('.');
        return parts.reduce((current, part) => {
            if (!current) return null;
            
            // Check if this part has array notation
            const arrayMatch = part.match(/^(.+)\[(\d+)\]$/);
            if (arrayMatch) {
                const prop = arrayMatch[1];
                const index = parseInt(arrayMatch[2]);
                return current[prop] && current[prop][index];
            }
            
            return current[part];
        }, obj);
    }
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedValue(t, key);
        if (translation) {
            // Use innerHTML for hero title to preserve HTML structure
            if (key === 'hero.title') {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update all elements with data-i18n-placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedValue(t, key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update magic hero animation words and phrases
    if (t.magic && t.magic.words) {
        words = t.magic.words;
        console.log('Magic words updated to:', words);
    }
    if (t.magic && t.magic.phrases) {
        phrases = t.magic.phrases;
        console.log('Magic phrases updated to:', phrases);
    }
    
    // Update tab content for current language
    if (typeof updateTabContent === 'function') {
        updateTabContent();
    }
    
    console.log('Page content updated to language:', currentLanguage);
}

function updateElementText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

function updateElementAttribute(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute(attribute, value);
    }
}

// Initialize language system
function initializeI18n() {
    // Check for saved preference first, then browser language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const detectedLanguage = detectBrowserLanguage();
    
    currentLanguage = savedLanguage || detectedLanguage;
    
    // Add language switcher to navigation
    addLanguageSwitcher();
    
    // Set initial language
    setLanguage(currentLanguage);
    
    console.log('I18n initialized. Browser:', navigator.language, 'Detected:', detectedLanguage, 'Using:', currentLanguage);
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageContent();
}

function addLanguageSwitcher() {
    const nav = document.querySelector('nav ul');
    if (nav) {
        const langSwitcher = document.createElement('li');
        langSwitcher.innerHTML = `
            <div class="language-switcher" style="display: flex; gap: 8px; align-items: center;">
                <button class="lang-btn ${currentLanguage === 'es' ? 'active' : ''}" data-lang="es" style="background: none; border: 1px solid #ddd; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 0.875rem;">ES</button>
                <button class="lang-btn ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en" style="background: none; border: 1px solid #ddd; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 0.875rem;">EN</button>
            </div>
        `;
        nav.appendChild(langSwitcher);
        
        // Add event listeners
        langSwitcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const newLang = this.getAttribute('data-lang');
                setLanguage(newLang);
                
                // Update button states
                langSwitcher.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Add CSS for active state
        const style = document.createElement('style');
        style.textContent = `
            .lang-btn.active {
                background: var(--gradient-primary) !important;
                color: white !important;
                border-color: transparent !important;
            }
            .lang-btn:hover {
                background: #f8f9fa !important;
            }
            .lang-btn.active:hover {
                background: var(--gradient-primary) !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Magic Hero Animation - New Sequence
let words = ['Transform', 'Modernize', 'Revolutionize']; // Default fallback
let phrases = ['your website', 'your brand', 'your business']; // Default fallback
let currentWordIndex = 0;

// Typewriter effect with natural timing variations
function typeWord(word, element, callback) {
    element.textContent = '';
    element.classList.add('typing');
    
    // Force apply rainbow gradient styles
    element.style.background = 'linear-gradient(90deg, #FF5757 0%, #FFA500 16.66%, #FFD700 33.33%, #4CAF50 50%, #2196F3 66.66%, #3F51B5 83.33%, #FF5757 100%)';
    element.style.backgroundSize = '300% 100%';
    element.style.webkitBackgroundClip = 'text';
    element.style.webkitTextFillColor = 'transparent';
    element.style.backgroundClip = 'text';
    element.style.color = 'transparent';
    element.style.animation = 'slowRainbowShift 8s ease-in-out infinite';
    
    let i = 0;
    
    function typeChar() {
        if (i < word.length) {
            element.textContent += word.charAt(i);
            i++;
            // Natural typing variations: 50-200ms between characters
            const delay = Math.random() * 150 + 50;
            setTimeout(typeChar, delay);
        } else {
            // Word completed, call callback after brief pause
            setTimeout(callback, 800);
        }
    }
    
    typeChar();
}

function showLoadingDots() {
    const loadingDots = document.getElementById('loadingDots');
    const magicText = document.getElementById('magicText');
    
    if (loadingDots && magicText) {
        // Hide text first
        magicText.style.opacity = '0';
        
        // Then show loading dots
        setTimeout(() => {
            loadingDots.classList.add('show');
            
            // After 1 second, start next cycle
            setTimeout(() => {
                hideLoadingDotsAndShowText();
            }, 1000);
        }, 300);
    }
}

function hideLoadingDotsAndShowText() {
    const loadingDots = document.getElementById('loadingDots');
    if (loadingDots) {
        loadingDots.classList.remove('show');
        
        // Wait a bit then show text
        setTimeout(() => {
            showText();
        }, 300);
    }
}

function showText() {
    const magicText = document.getElementById('magicText');
    const textLine1 = document.getElementById('textLine1');
    const textLine2 = document.getElementById('textLine2');
    const magicWord = document.getElementById('magicWord');
    
    if (magicText && textLine1 && textLine2 && magicWord) {
        // Show text container
        magicText.style.opacity = '1';
        
        // Update the phrase text for current word
        textLine2.textContent = phrases[currentWordIndex];
        
        // Show second line first
        textLine2.classList.add('show');
        
        // Then show and type first line
        textLine1.classList.add('show');
        
        const word = words[currentWordIndex];
        typeWord(word, magicWord, () => {
            // Word typed, wait a moment then continue
            setTimeout(() => {
                // Hide text lines
                textLine1.classList.remove('show');
                textLine2.classList.remove('show');
                magicWord.classList.remove('typing');
                
                // Move to next word
                currentWordIndex++;
                
                // If we have more words, continue cycle
                if (currentWordIndex < words.length) {
                    setTimeout(() => {
                        showLoadingDots();
                    }, 500);
                } else {
                    // All words done, finish intro
                    setTimeout(() => {
                        finishIntro();
                    }, 1000);
                }
            }, 500);
        });
    }
}

let introFinished = false;
let introScrollTimeout;
let handleScroll;

function finishIntro(isScrollTriggered = false) {
    if (introFinished) return; // Prevent multiple calls
    introFinished = true;
    
    const magicHero = document.getElementById('magicHero');
    const mainHero = document.getElementById('mainHero');
    
    if (magicHero && mainHero) {
        // Remove click listeners
        document.removeEventListener('click', skipIntro);
        
        // Remove scroll listener (in case it wasn't removed elsewhere)
        window.removeEventListener('scroll', handleScroll);
        
        // Use much faster transitions when triggered by scroll
        const fadeOutDuration = isScrollTriggered ? '0.15s' : '0.8s';
        const fadeInDuration = isScrollTriggered ? '0.2s' : '1s';
        const fadeInDelay = isScrollTriggered ? 50 : 500;
        const activateModeDelay = isScrollTriggered ? 200 : 1000;
        const removeDomDelay = isScrollTriggered ? 400 : 1500;
        
        // Add scroll-triggered class for faster CSS transition
        if (isScrollTriggered) {
            magicHero.classList.add('scroll-triggered');
        }
        
        // First, fade out gradient overlays
        const leftOverlay = document.querySelector('.gradient-overlay-left');
        const rightOverlay = document.querySelector('.gradient-overlay-right');
        
        if (leftOverlay && rightOverlay) {
            leftOverlay.style.transition = `opacity ${fadeOutDuration} ease-out`;
            rightOverlay.style.transition = `opacity ${fadeOutDuration} ease-out`;
            leftOverlay.style.opacity = '0';
            rightOverlay.style.opacity = '0';
        }
        
        // Fade out magic hero
        magicHero.classList.add('hidden');
        
        // Fade in main hero
        setTimeout(() => {
            mainHero.style.opacity = '1';
            mainHero.style.transition = `opacity ${fadeInDuration} ease-in`;
            // Scrolling is already enabled, just ensure it stays enabled
            
            // Switch from intro mode to main page mode after a delay
            setTimeout(() => {
                activateMainPageMode();
            }, activateModeDelay);
        }, fadeInDelay);
        
        // Remove magic hero from DOM after animation
        setTimeout(() => {
            if (magicHero.parentNode) {
                magicHero.remove();
            }
        }, removeDomDelay);
    }
}

// Add click to skip intro functionality
function skipIntro() {
    finishIntro();
}

// Immediately scroll to top on page load - before load event
window.scrollTo(0, 0);
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

// Also handle scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Force scroll to top as early as possible
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Start magic sequence when page loads
window.addEventListener('load', function() {
    // Always scroll to top first, regardless of current position
    window.scrollTo(0, 0);
    
    // Force scroll position to be 0 using multiple methods
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    const magicHero = document.getElementById('magicHero');
    const magicText = document.getElementById('magicText');
    const loadingDots = document.getElementById('loadingDots');
    
    if (!magicHero || !magicText || !loadingDots) return;
    
    // Small delay to ensure scroll has completed before starting animation
    setTimeout(() => {
        // Verify we're at the top
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        
        // Show the magic hero element for animation
        magicHero.classList.remove('hidden');
        
        // Add click listener to skip intro
        magicHero.addEventListener('click', skipIntro);
        
        // Also add click listener to document during intro
        document.addEventListener('click', skipIntro);
        
        // Add scroll listener to fade out intro on scroll
        handleScroll = function() {
            // Clear any existing timeout to debounce scroll events
            clearTimeout(introScrollTimeout);
            
            introScrollTimeout = setTimeout(() => {
                const scrollY = window.scrollY || document.documentElement.scrollTop;
                
                if (!introFinished) {
                    // Start fading the intro opacity based on scroll position
                    const maxScroll = 30; // Maximum scroll before fully triggering
                    const opacity = Math.max(0, 1 - (scrollY / maxScroll));
                    magicHero.style.opacity = opacity;
                    
                    // If user scrolls more than 5px, start the transition with fast mode
                    if (scrollY > 5) {
                        finishIntro(true); // Pass true to indicate scroll-triggered
                    }
                }
            }, 16); // ~60fps for smooth visual feedback
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Allow scrolling but keep position at top initially
        document.body.style.overflow = 'auto';
        
        // Start sequence: show loading dots first
        setTimeout(() => {
            loadingDots.classList.add('show');
            
            // After 1 second, start first cycle
            setTimeout(() => {
                hideLoadingDotsAndShowText();
            }, 1000);
        }, 500);
    }, 100);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Tab functionality for benefits section
const tabButtons = document.querySelectorAll('.tab-button');
const benefitContents = {
    businessOwners: {
        es: [
            { icon: '✓', title: 'ROI Medible', desc: 'Métricas claras de engagement y conversión' },
            { icon: '✓', title: 'Visibilidad de Intención', desc: 'Entiende qué buscan realmente tus clientes' },
            { icon: '✓', title: 'Modernización Instantánea', desc: 'Actualiza tu presencia web sin reconstruir' },
            { icon: '✓', title: 'Captura de Leads Mejorada', desc: 'Convierte más visitantes en clientes' }
        ],
        en: [
            { icon: '✓', title: 'Measurable ROI', desc: 'Clear metrics on engagement and conversion' },
            { icon: '✓', title: 'Intent Visibility', desc: 'Understand what your customers really want' },
            { icon: '✓', title: 'Instant Modernization', desc: 'Update your web presence without rebuilding' },
            { icon: '✓', title: 'Enhanced Lead Capture', desc: 'Convert more visitors to customers' }
        ]
    },
    marketing: {
        es: [
            { icon: '✓', title: 'Insights Profundos', desc: 'Análisis detallado del comportamiento del usuario' },
            { icon: '✓', title: 'Personalización de Marca', desc: 'Mantén tu identidad visual y tono de voz' },
            { icon: '✓', title: 'A/B Testing', desc: 'Prueba diferentes variaciones y optimiza' },
            { icon: '✓', title: 'Reportes Automatizados', desc: 'Métricas y KPIs en tiempo real' }
        ],
        en: [
            { icon: '✓', title: 'Deep Insights', desc: 'Detailed analysis of user behavior' },
            { icon: '✓', title: 'Brand Customization', desc: 'Maintain your visual identity and tone of voice' },
            { icon: '✓', title: 'A/B Testing', desc: 'Test different variations and optimize' },
            { icon: '✓', title: 'Automated Reports', desc: 'Real-time metrics and KPIs' }
        ]
    },
    developers: {
        es: [
            { icon: '✓', title: 'Integración Simple', desc: 'Un script, sin complejidad' },
            { icon: '✓', title: 'APIs Flexibles', desc: 'Conecta fácilmente con tus herramientas existentes' },
            { icon: '✓', title: 'Sin Mantenimiento', desc: 'Actualizaciones automáticas' },
            { icon: '✓', title: 'Documentación Clara', desc: 'Guías y ejemplos detallados' }
        ],
        en: [
            { icon: '✓', title: 'Simple Integration', desc: 'One script, no complexity' },
            { icon: '✓', title: 'Flexible APIs', desc: 'Easily connect with your existing tools' },
            { icon: '✓', title: 'No Maintenance', desc: 'Automatic updates' },
            { icon: '✓', title: 'Clear Documentation', desc: 'Detailed guides and examples' }
        ]
    },
    endUsers: {
        es: [
            { icon: '✓', title: 'Experiencia Moderna', desc: 'Interfaz intuitiva y atractiva' },
            { icon: '✓', title: 'Respuestas Instantáneas', desc: 'Encuentra lo que buscas sin navegar' },
            { icon: '✓', title: 'Personalización', desc: 'Experiencia adaptada a tus necesidades' },
            { icon: '✓', title: 'Accesibilidad', desc: 'Diseño inclusivo para todos' }
        ],
        en: [
            { icon: '✓', title: 'Modern Experience', desc: 'Intuitive and attractive interface' },
            { icon: '✓', title: 'Instant Answers', desc: 'Find what you need without browsing' },
            { icon: '✓', title: 'Personalization', desc: 'Experience tailored to your needs' },
            { icon: '✓', title: 'Accessibility', desc: 'Inclusive design for everyone' }
        ]
    }
};

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Use data-tab attribute and current language
        const tabKey = this.getAttribute('data-tab');
        const lang = currentLanguage || 'es';
        const content = benefitContents[tabKey] && benefitContents[tabKey][lang];
        const benefitList = document.querySelector('.benefit-list');
        
        if (content) {
            benefitList.innerHTML = content.map(item => `
            <div class="benefit-item">
                <div class="benefit-icon">${item.icon}</div>
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>
        `).join('');
        }
    });
});

// Function to update tab content for current language
function updateTabContent() {
    const activeTab = document.querySelector('.tab-button.active');
    if (activeTab) {
        const tabKey = activeTab.getAttribute('data-tab');
        const lang = currentLanguage || 'es';
        const content = benefitContents[tabKey] && benefitContents[tabKey][lang];
        const benefitList = document.querySelector('.benefit-list');
        
        if (content && benefitList) {
            benefitList.innerHTML = content.map(item => `
                <div class="benefit-item">
                    <div class="benefit-icon">${item.icon}</div>
                    <div>
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .problem-card, .timeline-step').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function() {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'white';
    navLinks.style.flexDirection = 'column';
    navLinks.style.padding = '1rem';
    navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
});

// AI Mode Side Animations Control
let aiModeActive = false;

function toggleAiMode() {
    aiModeActive = !aiModeActive;
    if (aiModeActive) {
        // Check which mode to activate based on current screen
        const magicHero = document.getElementById('magicHero');
        if (magicHero && !magicHero.classList.contains('hidden')) {
            activateIntroMode();
        } else {
            activateMainPageMode();
        }
    } else {
        document.body.classList.remove('ai-mode-active');
        document.body.classList.remove('intro-mode');
    }
}

// Auto-activate AI mode after the magic intro is complete
function autoActivateAiMode() {
    // Activate immediately for testing, then set timer for normal operation
    aiModeActive = true;
    document.body.classList.add('ai-mode-active');
    console.log('AI Mode activated - side animations should be visible');
}

// Remove demo toggle functionality - effects are always active

// Scroll-based gradient animation system
let scrollBasedAnimationActive = false;
let preservedBaseState = null;

function updateGradientPosition() {
    if (!document.body.classList.contains('ai-mode-active')) return;
    
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll progress (0 to 1)
    const scrollProgress = scrollY / (documentHeight - windowHeight);
    
    // Debug logging
    if (Math.random() < 0.01) { // Log occasionally to avoid spam
        console.log('Scroll animation active:', { scrollY, scrollProgress, aiActive: document.body.classList.contains('ai-mode-active') });
    }
    
    // Create different animation phases based on scroll position (increased for better visibility)
    const phase1 = Math.sin(scrollProgress * Math.PI * 2) * 15; // -15 to 15 (increased for visibility)
    const phase2 = Math.cos(scrollProgress * Math.PI * 3) * 10; // -10 to 10 (increased)
    const phase3 = Math.sin(scrollProgress * Math.PI * 4) * 20; // -20 to 20 (increased)
    
    // Calculate rotation based on scroll (increased for visibility)
    const rotation = scrollProgress * 360; // Full rotation for better effect
    const scale = 0.8 + (Math.sin(scrollProgress * Math.PI * 2) * 0.4); // 0.4 to 1.2 (larger range)
    
    // If we have preserved base state, use it as offset
    let baseTransformAfter = { x: 0, y: 0, rotation: 0, scale: 1 };
    let baseTransformBefore = { rotation: 0, y: 0 };
    
    if (preservedBaseState) {
        // Parse preserved base state (simplified approach)
        baseTransformAfter = parsePreservedTransform(preservedBaseState.leftAfter);
        baseTransformBefore = parsePreservedTransform(preservedBaseState.leftBefore);
    }
    
    // Update left gradient overlay
    const leftOverlay = document.querySelector('.gradient-overlay-left');
    if (leftOverlay) {
        // Combine base state with scroll offset
        const finalX = (baseTransformAfter.x || 0) + phase1;
        const finalY = (baseTransformAfter.y || 0) + phase2;
        const finalRotation = (baseTransformAfter.rotation || 0) + (rotation * 0.3);
        const finalScale = Math.max(0.5, (baseTransformAfter.scale || 1) * scale);
        
        const finalBeforeRotation = (baseTransformBefore.rotation || 0) + (rotation * 0.2);
        const finalBeforeY = (baseTransformBefore.y || 0) + phase3;
        
        leftOverlay.style.setProperty('--scroll-transform-after', 
            `translate(${finalX}%, ${finalY}%) rotate(${finalRotation}deg) scale(${finalScale})`);
        leftOverlay.style.setProperty('--scroll-transform-before', 
            `rotate(${finalBeforeRotation}deg) translateY(${finalBeforeY}%)`);
    }
    
    // Update right gradient overlay (opposite direction with base state)
    const rightOverlay = document.querySelector('.gradient-overlay-right');
    if (rightOverlay) {
        let rightBaseAfter = baseTransformAfter;
        let rightBaseBefore = baseTransformBefore;
        
        if (preservedBaseState) {
            rightBaseAfter = parsePreservedTransform(preservedBaseState.rightAfter);
            rightBaseBefore = parsePreservedTransform(preservedBaseState.rightBefore);
        }
        
        const finalX = (rightBaseAfter.x || 0) + (-phase1);
        const finalY = (rightBaseAfter.y || 0) + (-phase2);
        const finalRotation = (rightBaseAfter.rotation || 0) + (-rotation * 0.3);
        const finalScale = Math.max(0.5, (rightBaseAfter.scale || 1) * scale);
        
        const finalBeforeRotation = (rightBaseBefore.rotation || 0) + (-rotation * 0.2);
        const finalBeforeY = (rightBaseBefore.y || 0) + (-phase3);
        
        rightOverlay.style.setProperty('--scroll-transform-after', 
            `translate(${finalX}%, ${finalY}%) rotate(${finalRotation}deg) scale(${finalScale})`);
        rightOverlay.style.setProperty('--scroll-transform-before', 
            `rotate(${finalBeforeRotation}deg) translateY(${finalBeforeY}%)`);
    }
}

// Helper function to parse preserved transform values
function parsePreservedTransform(transformString) {
    if (!transformString || transformString === 'none') {
        return { x: 0, y: 0, rotation: 0, scale: 1 };
    }
    
    const result = { x: 0, y: 0, rotation: 0, scale: 1 };
    
    // Simple regex parsing (could be enhanced)
    const translateMatch = transformString.match(/translate\(([^,]+)%?,\s*([^)]+)%?\)/);
    const rotateMatch = transformString.match(/rotate\(([^)]+)deg\)/);
    const scaleMatch = transformString.match(/scale\(([^)]+)\)/);
    const translateYMatch = transformString.match(/translateY\(([^)]+)%?\)/);
    
    if (translateMatch) {
        result.x = parseFloat(translateMatch[1]) || 0;
        result.y = parseFloat(translateMatch[2]) || 0;
    }
    
    if (rotateMatch) {
        result.rotation = parseFloat(rotateMatch[1]) || 0;
    }
    
    if (scaleMatch) {
        result.scale = parseFloat(scaleMatch[1]) || 1;
    }
    
    if (translateYMatch) {
        result.y = parseFloat(translateYMatch[1]) || 0;
    }
    
    return result;
}

// Throttled scroll handler for performance
let scrollTimeout;
function gradientScrollHandler() {
    if (scrollTimeout) return;
    
    scrollTimeout = requestAnimationFrame(() => {
        updateGradientPosition();
        scrollTimeout = null;
    });
}

// Initialize scroll-based animations
function initializeScrollAnimations() {
    if (scrollBasedAnimationActive) return;
    scrollBasedAnimationActive = true;
    
    // Add scroll listener
    window.addEventListener('scroll', gradientScrollHandler, { passive: true });
    
    // Initial position update
    updateGradientPosition();
    
    console.log('Scroll-based gradient animations activated');
}

// Activate AI mode for intro (time-based animations)
function activateIntroMode() {
    aiModeActive = true;
    
    // Fade in the overlays smoothly
    const leftOverlay = document.querySelector('.gradient-overlay-left');
    const rightOverlay = document.querySelector('.gradient-overlay-right');
    
    if (leftOverlay && rightOverlay) {
        leftOverlay.style.transition = 'opacity 1.5s ease-in';
        rightOverlay.style.transition = 'opacity 1.5s ease-in';
    }
    
    document.body.classList.add('ai-mode-active');
    document.body.classList.add('intro-mode');
    
    // Record animation start time for smooth transition
    window.animationStartTime = Date.now();
    
    console.log('Intro mode activated - time-based animations running');
}

// Capture current animation state before transitioning
function captureCurrentAnimationState() {
    const leftOverlay = document.querySelector('.gradient-overlay-left');
    const rightOverlay = document.querySelector('.gradient-overlay-right');
    
    if (!leftOverlay || !rightOverlay) return null;
    
    // Create temporary elements to probe the actual animated transform values
    const probeLeft = document.createElement('div');
    const probeRight = document.createElement('div');
    
    // Copy the exact same classes and styles to probe elements
    probeLeft.className = leftOverlay.className;
    probeRight.className = rightOverlay.className;
    probeLeft.style.cssText = leftOverlay.style.cssText;
    probeRight.style.cssText = rightOverlay.style.cssText;
    
    // Add pseudo-element styles programmatically using actual elements
    const probeLeftAfter = document.createElement('div');
    const probeLeftBefore = document.createElement('div');
    const probeRightAfter = document.createElement('div');
    const probeRightBefore = document.createElement('div');
    
    // Apply the same styles as pseudo-elements
    const afterStyles = `
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -30%;
        background: 
            radial-gradient(ellipse 800px 1000px at 10% 30%, rgba(3, 88, 247, 0.3) 0%, rgba(3, 88, 247, 0.15) 20%, rgba(3, 88, 247, 0.05) 40%, rgba(3, 88, 247, 0.01) 60%, transparent 80%),
            radial-gradient(ellipse 600px 800px at 30% 70%, rgba(80, 146, 199, 0.25) 0%, rgba(80, 146, 199, 0.1) 25%, rgba(80, 146, 199, 0.03) 50%, transparent 85%),
            radial-gradient(ellipse 700px 900px at 20% 100%, rgba(225, 225, 254, 0.2) 0%, rgba(225, 225, 254, 0.08) 30%, rgba(225, 225, 254, 0.02) 55%, transparent 90%),
            radial-gradient(ellipse 500px 700px at 40% 20%, rgba(255, 212, 0, 0.15) 0%, rgba(255, 212, 0, 0.05) 35%, rgba(255, 212, 0, 0.01) 65%, transparent 95%),
            radial-gradient(ellipse 650px 850px at 15% 60%, rgba(250, 61, 29, 0.1) 0%, rgba(250, 61, 29, 0.03) 40%, rgba(250, 61, 29, 0.005) 70%, transparent 100%);
        filter: blur(80px);
        animation: gradientFlow 15s ease-in-out infinite;
        pointer-events: none;
        opacity: 0;
    `;
    
    const beforeStyles = `
        position: absolute;
        width: 150%;
        height: 150%;
        top: -25%;
        left: -25%;
        background: 
            radial-gradient(circle 400px at 50% 50%, rgba(147, 51, 234, 0.35) 0%, rgba(147, 51, 234, 0.05) 40%, transparent 70%),
            radial-gradient(circle 300px at 20% 80%, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.03) 45%, transparent 75%),
            radial-gradient(circle 350px at 70% 30%, rgba(236, 72, 153, 0.25) 0%, rgba(236, 72, 153, 0.02) 50%, transparent 80%);
        filter: blur(60px);
        mix-blend-mode: screen;
        animation: gradientSwirl 20s linear infinite;
        pointer-events: none;
        opacity: 0;
    `;
    
    probeLeftAfter.style.cssText = afterStyles;
    probeLeftBefore.style.cssText = beforeStyles;
    probeRightAfter.style.cssText = afterStyles.replace('left: -30%', 'right: -30%').replace('gradientFlow 15s ease-in-out infinite', 'gradientFlow 15s ease-in-out infinite reverse');
    probeRightBefore.style.cssText = beforeStyles.replace('left: -25%', 'right: -25%').replace('gradientSwirl 20s linear infinite', 'gradientSwirl 20s linear infinite reverse');
    
    // Add to DOM temporarily
    probeLeft.appendChild(probeLeftAfter);
    probeLeft.appendChild(probeLeftBefore);
    probeRight.appendChild(probeRightAfter);
    probeRight.appendChild(probeRightBefore);
    
    document.body.appendChild(probeLeft);
    document.body.appendChild(probeRight);
    
    // Force reflow to start animations
    probeLeft.offsetHeight;
    probeRight.offsetHeight;
    
    // Wait a frame to let animations sync
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            try {
                // Capture the actual computed transform values
                const leftAfterTransform = window.getComputedStyle(probeLeftAfter).transform;
                const leftBeforeTransform = window.getComputedStyle(probeLeftBefore).transform;
                const rightAfterTransform = window.getComputedStyle(probeRightAfter).transform;
                const rightBeforeTransform = window.getComputedStyle(probeRightBefore).transform;
                
                // Clean up
                document.body.removeChild(probeLeft);
                document.body.removeChild(probeRight);
                
                resolve({
                    leftAfter: leftAfterTransform,
                    leftBefore: leftBeforeTransform,
                    rightAfter: rightAfterTransform,
                    rightBefore: rightBeforeTransform
                });
            } catch (e) {
                // Clean up on error
                if (probeLeft.parentNode) document.body.removeChild(probeLeft);
                if (probeRight.parentNode) document.body.removeChild(probeRight);
                
                // Fallback to time-based calculation
                const timeElapsed = (Date.now() - window.animationStartTime) / 1000;
                
                const flowProgress = (timeElapsed % 15) / 15;
                const flowAngle = flowProgress * 360;
                const flowScale = 0.9 + Math.sin(flowProgress * Math.PI * 2) * 0.2;
                const flowX = Math.sin(flowProgress * Math.PI * 4) * 10;
                const flowY = Math.cos(flowProgress * Math.PI * 3) * 5;
                
                const swirlProgress = (timeElapsed % 20) / 20;
                const swirlAngle = swirlProgress * 360;
                const swirlY = Math.sin(swirlProgress * Math.PI * 2) * -10;
                
                resolve({
                    leftAfter: `translate(${flowX}%, ${flowY}%) rotate(${flowAngle}deg) scale(${flowScale})`,
                    leftBefore: `rotate(${swirlAngle}deg) translateY(${swirlY}%)`,
                    rightAfter: `translate(${-flowX}%, ${-flowY}%) rotate(${-flowAngle}deg) scale(${flowScale})`,
                    rightBefore: `rotate(${-swirlAngle}deg) translateY(${-swirlY}%)`
                });
            }
        });
    });
}

// Activate AI mode for main page (scroll-based animations only)
async function activateMainPageMode() {
    try {
        // First, capture the current animation state (now async)
        const currentState = await captureCurrentAnimationState();
        
        aiModeActive = true;
        document.body.classList.add('ai-mode-active');
        document.body.classList.remove('intro-mode');
        document.body.classList.add('main-page-mode');
        
        // Apply the captured state immediately to avoid jump
        if (currentState) {
            // Store the preserved state for scroll calculations
            preservedBaseState = currentState;
            
            const leftOverlay = document.querySelector('.gradient-overlay-left');
            const rightOverlay = document.querySelector('.gradient-overlay-right');
            
            if (leftOverlay && rightOverlay) {
                // Temporarily disable transitions for seamless switch
                leftOverlay.style.transition = 'none';
                rightOverlay.style.transition = 'none';
                
                // Set initial transforms to match final animation state
                leftOverlay.style.setProperty('--scroll-transform-after', currentState.leftAfter);
                leftOverlay.style.setProperty('--scroll-transform-before', currentState.leftBefore);
                rightOverlay.style.setProperty('--scroll-transform-after', currentState.rightAfter);
                rightOverlay.style.setProperty('--scroll-transform-before', currentState.rightBefore);
                
                // Force reflow to apply transforms
                leftOverlay.offsetHeight;
                rightOverlay.offsetHeight;
                
                // Fade in the overlays smoothly to lighter state
                setTimeout(() => {
                    leftOverlay.style.transition = 'opacity 1.2s ease-in';
                    rightOverlay.style.transition = 'opacity 1.2s ease-in';
                    leftOverlay.style.opacity = '0.7'; // Medium opacity initial state
                    rightOverlay.style.opacity = '0.7'; // Medium opacity initial state
                }, 200);
                
                console.log('Captured and applied exact animation state:', currentState);
            }
        }
        
        // Initialize scroll-based animations with preserved state
        setTimeout(() => {
            initializeScrollAnimations();
        }, 50); // Even shorter delay for seamless transition
        
        console.log('Main page mode activated - seamless transition to scroll-based animations');
        
    } catch (error) {
        console.error('Error during transition:', error);
        // Fallback to basic activation
        aiModeActive = true;
        document.body.classList.add('ai-mode-active');
        document.body.classList.remove('intro-mode');
        initializeScrollAnimations();
    }
}

// Update auto-activate function 
function autoActivateAiMode() {
    // Check if we're still in intro or main page
    const magicHero = document.getElementById('magicHero');
    if (magicHero && !magicHero.classList.contains('hidden')) {
        // Still in intro - activate intro mode
        activateIntroMode();
    } else {
        // In main page - activate main page mode
        activateMainPageMode();
    }
}


// Debug functionality - press 'D' to toggle debug mode
document.addEventListener('keydown', function(e) {
    if (e.key === 'd' || e.key === 'D') {
        document.body.classList.toggle('debug-gradients');
        console.log('Debug gradients toggled:', document.body.classList.contains('debug-gradients'));
    }
});

// Initialize i18n system
function initI18n() {
    // Always auto-detect browser language (no localStorage)
    const detectedLang = detectBrowserLanguage();
    currentLanguage = detectedLang;
    
    console.log('Browser language:', navigator.language);
    console.log('Detected language:', detectedLang);
    console.log('Using language:', currentLanguage);
    
    // Update page content immediately
    updatePageContent();
    
    console.log('i18n initialized with language:', currentLanguage);
}

// 3D Parallax Effect for Hero Demo Sections
function initParallaxEffect() {
    const demoContainer = document.querySelector('.demo-container');
    const demoStatic = document.querySelector('.demo-static');
    const demoAI = document.querySelector('.demo-ai');
    const chatInterface = document.querySelector('.chat-interface');
    const heroSection = document.querySelector('.hero');

    if (!demoContainer || !demoStatic || !demoAI || !heroSection) return;

    // Add parallax-active classes
    demoContainer.classList.add('parallax-active');
    demoStatic.classList.add('parallax-active');
    demoAI.classList.add('parallax-active');
    if (chatInterface) chatInterface.classList.add('parallax-active');

    function updateParallax() {
        const rect = heroSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, 
            (windowHeight - rect.top) / (windowHeight + rect.height)
        ));

        // Only apply effect when section is visible
        if (rect.bottom < 0 || rect.top > windowHeight) {
            return;
        }

        // Calculate center-based offset - balanced sensitivity
        const centerOffset = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight * 0.6);
        
        // Subtle perspective effect values - more elegant
        const maxRotationX = 8;   // degrees - subtle X rotation for perspective
        const maxTranslateZ = 40; // pixels - gentle forward/backward movement
        const maxScale = 0.06;    // scale factor - subtle scaling
        const maxChatDepth = 25;  // pixels - gentle depth

        // Calculate transforms with easing - focus on depth and perspective
        const rotationMultiplier = Math.sin(scrollProgress * Math.PI);
        const rotationX = centerOffset * maxRotationX * rotationMultiplier;
        
        // Symmetric effects for both sections - same perspective angle
        const translateZ = Math.abs(centerOffset) * maxTranslateZ;
        const scale = 1 + (Math.abs(centerOffset) * maxScale);
        const chatDepth = scrollProgress * maxChatDepth;

        // Apply transforms using CSS custom properties - NO Y rotation
        demoStatic.style.setProperty('--rotate-y', '0deg');
        demoStatic.style.setProperty('--rotate-x', `${rotationX}deg`);
        demoStatic.style.setProperty('--translate-z', `${translateZ}px`);

        demoAI.style.setProperty('--rotate-y', '0deg');
        demoAI.style.setProperty('--rotate-x', `${rotationX}deg`);
        demoAI.style.setProperty('--translate-z', `${translateZ}px`);

        // Container effects - subtle
        demoContainer.style.setProperty('--scale', scale);
        demoContainer.style.setProperty('--container-rotate-x', `${centerOffset * 3}deg`);

        // Chat interface depth
        if (chatInterface) {
            chatInterface.style.setProperty('--chat-depth', `${chatDepth}px`);
        }
    }

    // Use RAF for smooth 60fps animations
    let rafId;
    function parallaxScrollHandler() {
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
        rafId = requestAnimationFrame(updateParallax);
    }

    // Listen to scroll events
    window.addEventListener('scroll', parallaxScrollHandler, { passive: true });
    
    // Initial call
    updateParallax();

    console.log('3D Parallax effect initialized for hero demo sections');
}

// Initialize effects after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(initParallaxEffect, 500);
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileCloseButton = document.getElementById('mobileCloseButton');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (!mobileMenuButton || !mobileNavOverlay || !mobileCloseButton) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Open mobile menu
    function openMobileMenu() {
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners
    mobileMenuButton.addEventListener('click', openMobileMenu);
    mobileCloseButton.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on overlay background
    mobileNavOverlay.addEventListener('click', function(e) {
        if (e.target === mobileNavOverlay) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking on navigation links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close menu if window is resized to tablet+ size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    console.log('Mobile menu functionality initialized');
}

// Initialize mobile menu after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    // Small delay to ensure all elements are rendered
    setTimeout(initParallaxEffect, 500);
});

// Initialize i18n immediately
initI18n();