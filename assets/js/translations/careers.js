// Careers page translations
// Using var and checking if already defined to prevent re-declaration errors
if (typeof careersTranslations === 'undefined') {
    var careersTranslations = {
        es: {
            meta: {
                title: "Carreras - Minimal"
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
                title: "Únete a Nuestro Equipo",
                subtitle: "Construye el futuro de las experiencias web conversacionales con un equipo apasionado por la innovación y la tecnología de vanguardia."
            },
            culture: {
                title: "Nuestra Cultura",
                innovation: {
                    title: "Innovación Constante",
                    description: "En Minimal, la innovación no es solo una palabra de moda: es el núcleo de lo que hacemos. Trabajamos con las últimas tecnologías de IA y NLP, empujando constantemente los límites de lo posible en experiencias web conversacionales."
                },
                autonomy: {
                    title: "Autonomía y Responsabilidad",
                    description: "Creemos en dar a nuestro equipo la libertad de tomar decisiones y asumir la propiedad de su trabajo. Cada persona es un contribuyente clave al éxito de la empresa, y valoramos la iniciativa personal."
                },
                learning: {
                    title: "Aprendizaje Continuo",
                    description: "El campo de la IA evoluciona rápidamente, y nosotros también. Proporcionamos recursos para el aprendizaje continuo, conferencias, cursos y tiempo dedicado para explorar nuevas tecnologías."
                }
            },
            whyMinimal: {
                title: "¿Por Qué Minimal?",
                impact: {
                    title: "Impacto Real",
                    description: "Tu trabajo tendrá un impacto directo en miles de sitios web y millones de usuarios. Estamos transformando cómo las personas interactúan con el contenido web, creando experiencias más intuitivas y valiosas."
                },
                team: {
                    title: "Equipo de Clase Mundial",
                    description: "Trabaja junto a algunos de los mejores talentos en IA, ingeniería de software y experiencia de usuario. Nuestro equipo combina experiencia técnica profunda con visión de producto excepcional."
                },
                technology: {
                    title: "Tecnología de Vanguardia",
                    description: "Utilizamos las herramientas y tecnologías más avanzadas: from los últimos modelos de lenguaje hasta arquitecturas cloud nativas. Siempre estamos a la vanguardia de la innovación tecnológica."
                },
                growth: {
                    title: "Crecimiento Acelerado",
                    description: "Únete a una empresa en rápido crecimiento donde tu contribución individual realmente importa y donde tendrás oportunidades únicas de crecimiento profesional y personal."
                }
            },
            values: {
                title: "Nuestros Valores",
                excellence: {
                    title: "Excelencia Técnica",
                    description: "Nos esforzamos por crear soluciones técnicas de la más alta calidad, con código limpio, arquitecturas escalables y performance excepcional."
                },
                collaboration: {
                    title: "Colaboración",
                    description: "Trabajamos mejor juntos. Valoramos la comunicación abierta, el feedback constructivo y la colaboración multidisciplinaria."
                },
                curiosity: {
                    title: "Curiosidad",
                    description: "Mantenemos una mentalidad de aprendizaje constante, experimentando con nuevas tecnologías y enfoques para resolver problemas complejos."
                },
                userFocus: {
                    title: "Enfoque en Usuario",
                    description: "Cada decisión que tomamos está guiada por el impacto que tendrá en la experiencia del usuario final y el valor que aportamos."
                }
            },
            positions: {
                title: "Posiciones Abiertas",
                fullstack: {
                    title: "Senior Full-Stack Engineer",
                    tags: {
                        remote: "Remoto",
                        fulltime: "Full-time",
                        senior: "Senior"
                    },
                    description: "Buscamos un ingeniero full-stack experimentado para liderar el desarrollo de nuestra plataforma principal. Trabajarás en la arquitectura de sistemas complejos, desde APIs escalables hasta interfaces de usuario modernas.",
                    requirements: {
                        title: "Requisitos:",
                        items: [
                            "5+ años de experiencia con JavaScript/TypeScript",
                            "Experiencia con React, Node.js, y bases de datos (PostgreSQL, MongoDB)",
                            "Conocimientos de arquitecturas cloud (AWS, GCP)",
                            "Experiencia con APIs RESTful y GraphQL",
                            "Inglés avanzado (trabajamos con clientes internacionales)"
                        ]
                    },
                    apply: "Aplicar"
                },
                designer: {
                    title: "Product Designer (UX/UI)",
                    tags: {
                        remote: "Remoto",
                        fulltime: "Full-time",
                        midSenior: "Mid-Senior"
                    },
                    description: "Diseña experiencias de usuario excepcionales para interfaces conversacionales. Trabajarás en la intersección entre diseño tradicional de UX y nuevos paradigmas de interacción con IA.",
                    requirements: {
                        title: "Requisitos:",
                        items: [
                            "3+ años de experiencia en diseño de productos digitales",
                            "Portfolio sólido con casos de estudio detallados",
                            "Experiencia con Figma, Sketch, y herramientas de prototipado",
                            "Conocimientos en design systems y accesibilidad",
                            "Experiencia previa con chatbots o interfaces conversacionales (plus)"
                        ]
                    },
                    apply: "Aplicar"
                },
                devops: {
                    title: "DevOps Engineer",
                    tags: {
                        remote: "Remoto",
                        fulltime: "Full-time",
                        senior: "Senior"
                    },
                    description: "Construye y mantén la infraestructura que soporta millones de interacciones conversacionales. Trabajarás en sistemas de alta disponibilidad y escalabilidad automática.",
                    requirements: {
                        title: "Requisitos:",
                        items: [
                            "4+ años de experiencia en DevOps/SRE",
                            "Experiencia con Kubernetes, Docker, y orquestación de contenedores",
                            "Conocimientos avanzados de AWS/GCP (certificaciones preferidas)",
                            "Experiencia con Infrastructure as Code (Terraform, CloudFormation)",
                            "Conocimientos en monitoring, logging, y observabilidad"
                        ]
                    },
                    apply: "Aplicar"
                },
                customerSuccess: {
                    title: "Customer Success Manager",
                    tags: {
                        remote: "Remoto",
                        fulltime: "Full-time",
                        midLevel: "Mid-level"
                    },
                    description: "Ayuda a nuestros clientes a maximizar el valor de Minimal. Trabajarás directamente con empresas para asegurar implementaciones exitosas y crecimiento continuo.",
                    requirements: {
                        title: "Requisitos:",
                        items: [
                            "2+ años de experiencia en Customer Success o Account Management",
                            "Experiencia previa en empresas B2B SaaS",
                            "Excelentes habilidades de comunicación y presentación",
                            "Conocimientos técnicos básicos (HTML, CSS, JavaScript)",
                            "Inglés nativo o bilingüe"
                        ]
                    },
                    apply: "Aplicar"
                },
                marketing: {
                    title: "Growth Marketing Lead",
                    tags: {
                        remote: "Remoto",
                        fulltime: "Full-time",
                        senior: "Senior"
                    },
                    description: "Lidera nuestros esfuerzos de crecimiento y adquisición de usuarios. Desarrollarás estrategias data-driven para acelerar el crecimiento de nuestra base de usuarios B2B.",
                    requirements: {
                        title: "Requisitos:",
                        items: [
                            "4+ años de experiencia en growth marketing para B2B SaaS",
                            "Experiencia con herramientas de marketing automation y analytics",
                            "Conocimientos en SEO/SEM, content marketing, y social media",
                            "Experiencia con A/B testing y optimización de conversión",
                            "Track record demostrable de crecimiento de usuarios/revenue"
                        ]
                    },
                    apply: "Aplicar"
                }
            },
            process: {
                title: "Proceso de Selección",
                step1: {
                    title: "1. Aplicación Inicial",
                    description: "Envía tu CV y carta de presentación a través de nuestro formulario de contacto. Incluye enlaces a tu portfolio, GitHub, o trabajos relevantes."
                },
                step2: {
                    title: "2. Screening Call (30 min)",
                    description: "Una conversación inicial con nuestro equipo de People para conocerte mejor y responder tus preguntas sobre la posición y la empresa."
                },
                step3: {
                    title: "3. Evaluación Técnica",
                    description: "Dependiendo del rol, incluye una prueba técnica práctica o presentación de case study. Diseñamos evaluaciones que reflejan el trabajo real que harías."
                },
                step4: {
                    title: "4. Entrevistas con el Equipo",
                    description: "2-3 entrevistas con miembros del equipo con el que trabajarías directamente, incluyendo los cofundadores. Enfoque en fit cultural y técnico."
                },
                step5: {
                    title: "5. Referencia y Oferta",
                    description: "Verificación de referencias y, si todo va bien, ¡te hacemos una oferta competitiva!"
                },
                tip: "💡 Tip: Todo el proceso toma entre 1-2 semanas. Valoramos tu tiempo y te mantendremos informado en cada paso."
            },
            cta: {
                title: "¿No Ves una Posición que Encaje?",
                description: "Siempre estamos buscando talento excepcional. Si crees que puedes agregar valor a Minimal, nos encantaría conocerte.",
                button: "Enviar Aplicación Espontánea"
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
                title: "Careers - Minimal"
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
                title: "Join Our Team",
                subtitle: "Build the future of conversational web experiences with a passionate team focused on innovation and cutting-edge technology."
            },
            culture: {
                title: "Our Culture",
                innovation: {
                    title: "Constant Innovation",
                    description: "At Minimal, innovation isn't just a buzzword: it's the core of what we do. We work with the latest AI and NLP technologies, constantly pushing the boundaries of what's possible in conversational web experiences."
                },
                autonomy: {
                    title: "Autonomy and Responsibility",
                    description: "We believe in giving our team the freedom to make decisions and take ownership of their work. Every person is a key contributor to the company's success, and we value personal initiative."
                },
                learning: {
                    title: "Continuous Learning",
                    description: "The AI field evolves rapidly, and so do we. We provide resources for continuous learning, conferences, courses, and dedicated time to explore new technologies."
                }
            },
            whyMinimal: {
                title: "Why Minimal?",
                impact: {
                    title: "Real Impact",
                    description: "Your work will have a direct impact on thousands of websites and millions of users. We're transforming how people interact with web content, creating more intuitive and valuable experiences."
                },
                team: {
                    title: "World-Class Team",
                    description: "Work alongside some of the best talent in AI, software engineering, and user experience. Our team combines deep technical expertise with exceptional product vision."
                },
                technology: {
                    title: "Cutting-Edge Technology",
                    description: "We use the most advanced tools and technologies: from the latest language models to cloud-native architectures. We're always at the forefront of technological innovation."
                },
                growth: {
                    title: "Accelerated Growth",
                    description: "Join a fast-growing company where your individual contribution truly matters and where you'll have unique opportunities for professional and personal growth."
                }
            },
            values: {
                title: "Our Values",
                excellence: {
                    title: "Technical Excellence",
                    description: "We strive to create the highest quality technical solutions, with clean code, scalable architectures, and exceptional performance."
                },
                collaboration: {
                    title: "Collaboration",
                    description: "We work better together. We value open communication, constructive feedback, and multidisciplinary collaboration."
                },
                curiosity: {
                    title: "Curiosity",
                    description: "We maintain a constant learning mindset, experimenting with new technologies and approaches to solve complex problems."
                },
                userFocus: {
                    title: "User Focus",
                    description: "Every decision we make is guided by the impact it will have on the end user experience and the value we provide."
                }
            },
            positions: {
                title: "Open Positions",
                fullstack: {
                    title: "Senior Full-Stack Engineer",
                    tags: {
                        remote: "Remote",
                        fulltime: "Full-time",
                        senior: "Senior"
                    },
                    description: "We're looking for an experienced full-stack engineer to lead the development of our core platform. You'll work on complex system architecture, from scalable APIs to modern user interfaces.",
                    requirements: {
                        title: "Requirements:",
                        items: [
                            "5+ years of experience with JavaScript/TypeScript",
                            "Experience with React, Node.js, and databases (PostgreSQL, MongoDB)",
                            "Knowledge of cloud architectures (AWS, GCP)",
                            "Experience with RESTful APIs and GraphQL",
                            "Advanced English (we work with international clients)"
                        ]
                    },
                    apply: "Apply"
                },
                designer: {
                    title: "Product Designer (UX/UI)",
                    tags: {
                        remote: "Remote",
                        fulltime: "Full-time",
                        midSenior: "Mid-Senior"
                    },
                    description: "Design exceptional user experiences for conversational interfaces. You'll work at the intersection of traditional UX design and new AI interaction paradigms.",
                    requirements: {
                        title: "Requirements:",
                        items: [
                            "3+ years of experience in digital product design",
                            "Strong portfolio with detailed case studies",
                            "Experience with Figma, Sketch, and prototyping tools",
                            "Knowledge of design systems and accessibility",
                            "Previous experience with chatbots or conversational interfaces (plus)"
                        ]
                    },
                    apply: "Apply"
                },
                devops: {
                    title: "DevOps Engineer",
                    tags: {
                        remote: "Remote",
                        fulltime: "Full-time",
                        senior: "Senior"
                    },
                    description: "Build and maintain the infrastructure that supports millions of conversational interactions. You'll work on high-availability systems and automatic scalability.",
                    requirements: {
                        title: "Requirements:",
                        items: [
                            "4+ years of experience in DevOps/SRE",
                            "Experience with Kubernetes, Docker, and container orchestration",
                            "Advanced knowledge of AWS/GCP (certifications preferred)",
                            "Experience with Infrastructure as Code (Terraform, CloudFormation)",
                            "Knowledge of monitoring, logging, and observability"
                        ]
                    },
                    apply: "Apply"
                },
                customerSuccess: {
                    title: "Customer Success Manager",
                    tags: {
                        remote: "Remote",
                        fulltime: "Full-time",
                        midLevel: "Mid-level"
                    },
                    description: "Help our clients maximize the value of Minimal. You'll work directly with companies to ensure successful implementations and continued growth.",
                    requirements: {
                        title: "Requirements:",
                        items: [
                            "2+ years of experience in Customer Success or Account Management",
                            "Previous experience in B2B SaaS companies",
                            "Excellent communication and presentation skills",
                            "Basic technical knowledge (HTML, CSS, JavaScript)",
                            "Native or bilingual English"
                        ]
                    },
                    apply: "Apply"
                },
                marketing: {
                    title: "Growth Marketing Lead",
                    tags: {
                        remote: "Remote",
                        fulltime: "Full-time",
                        senior: "Senior"
                    },
                    description: "Lead our growth and user acquisition efforts. You'll develop data-driven strategies to accelerate the growth of our B2B user base.",
                    requirements: {
                        title: "Requirements:",
                        items: [
                            "4+ years of experience in growth marketing for B2B SaaS",
                            "Experience with marketing automation and analytics tools",
                            "Knowledge of SEO/SEM, content marketing, and social media",
                            "Experience with A/B testing and conversion optimization",
                            "Demonstrable track record of user/revenue growth"
                        ]
                    },
                    apply: "Apply"
                }
            },
            process: {
                title: "Selection Process",
                step1: {
                    title: "1. Initial Application",
                    description: "Send your CV and cover letter through our contact form. Include links to your portfolio, GitHub, or relevant work."
                },
                step2: {
                    title: "2. Screening Call (30 min)",
                    description: "An initial conversation with our People team to get to know you better and answer your questions about the position and company."
                },
                step3: {
                    title: "3. Technical Assessment",
                    description: "Depending on the role, includes a practical technical test or case study presentation. We design assessments that reflect the real work you'd do."
                },
                step4: {
                    title: "4. Team Interviews",
                    description: "2-3 interviews with team members you'd work directly with, including the co-founders. Focus on cultural and technical fit."
                },
                step5: {
                    title: "5. Reference and Offer",
                    description: "Reference verification and, if all goes well, we make you a competitive offer!"
                },
                tip: "💡 Tip: The entire process takes 1-2 weeks. We value your time and will keep you informed at every step."
            },
            cta: {
                title: "Don't See a Position That Fits?",
                description: "We're always looking for exceptional talent. If you think you can add value to Minimal, we'd love to meet you.",
                button: "Send Spontaneous Application"
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