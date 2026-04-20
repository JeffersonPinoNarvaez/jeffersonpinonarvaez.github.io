/**
 * i18n System for Jefferson Pino Narvaez Portfolio
 * Handles language switching, persistence, and DOM updates
 * Translations are embedded to avoid CORS issues when opening from file://
 */

(function() {
    'use strict';

    // Embedded translations to avoid CORS issues
    const translations = {
        es: {
            nav: {
                home: "Inicio",
                about: "Acerca de",
                resume: "Resumen",
                services: "Servicios",
                skills: "Habilidades",
                research: "Investigaciones",
                projects: "Proyectos",
                blog: "Blog",
                contact: "Contacto"
            },
            hero: {
                greeting: "Hola, soy",
                name: "Jefferson P. Narvaez",
                title: "especialista en IA y desarrollador full stack",
                tagline: "Diseño sistemas que escalan y desarrollo soluciones end-to-end. Combino inteligencia artificial con implementación técnica para crear productos digitales robustos.",
                ctaContact: "Contáctame",
                stats: {
                    experience: "Años de Experiencia",
                    projects: "Proyectos Completados",
                    satisfaction: "Sistemas Diseñados"
                }
            },
            about: {
                subtitle: "Acerca de Mí",
                heading: "Especialización en IA",
                headingHighlight: "y Desarrollo Full Stack",
                body: "Más de 8 años de experiencia combinando especialización en inteligencia artificial con desarrollo full stack. Diseño sistemas escalables con IA integrada y los implemento desde el código hasta el despliegue. Trabajo con Vue.js, React, Node.js, Python, modelos de ML, APIs de LLM, bases de datos relacionales y NoSQL, Docker, AWS y Kubernetes. Documento patrones de integración de IA, decisiones de diseño y mejores prácticas que optimizan sistemas y generan valor técnico.",
                bullets: [
                    "Integración de IA en Sistemas",
                    "Desarrollo Full Stack End-to-End",
                    "Sistemas Distribuidos y Cloud-Native",
                    "Modelos de ML y APIs de LLM",
                    "Stack: Vue.js, React, Node.js, Python, AWS"
                ]
            },
            resume: {
                subtitle: "Mi Resumen",
                heading: "Experiencia",
                headingHighlight: "Real en Soluciones Técnicas",
                jobs: {
                    job1: {
                        years: "2024 - Actualidad",
                        title: "Full Stack Developer",
                        company: "Stefanini",
                        description: "Desarrollo full stack con integración de IA. Implementación de soluciones escalables desde frontend hasta backend, trabajando con tecnologías modernas y mejores prácticas de ingeniería."
                    },
                    job2: {
                        years: "2019 - 2024",
                        title: "Javascript Developer",
                        company: "Lulosoft LLC",
                        description: "Desarrollo de soluciones full stack escalables con integración de IA. Liderazgo técnico en decisiones de stack tecnológico y optimización de sistemas existentes."
                    },
                    job3: {
                        years: "2017 - 2019",
                        title: "Software Analyst",
                        company: "ITERIA SAS",
                        description: "Análisis y diseño de sistemas con enfoque en integración de IA. Toma de decisiones técnicas estratégicas para optimizar flujos de trabajo y rendimiento."
                    },
                    job4: {
                        years: "2017 - 2017",
                        title: "Mobile Developer",
                        company: "LAE",
                        description: "Desarrollo multiplataforma que estableció la base para integración de IA en sistemas distribuidos y aplicaciones nativas."
                    }
                }
            },
            services: {
                subtitle: "Servicios Populares",
                heading: "Servicios Especializados",
                headingHighlight: "Conocimientos Especializados",
                items: {
                    "01": {
                        title: "Integración de IA y Soluciones Aplicadas",
                        description: "Integro inteligencia artificial en sistemas que escalan. Desde modelos de ML hasta APIs de LLM, con foco en implementación práctica y resultados técnicos."
                    },
                    "02": {
                        title: "Desarrollo Full Stack End-to-End",
                        description: "Desarrollo soluciones completas desde frontend hasta backend. Implemento con Vue.js, React, Node.js, Python, bases de datos y APIs REST/GraphQL."
                    },
                    "03": {
                        title: "Due Diligence Técnico y Auditorías",
                        description: "Audito sistemas existentes, identifico riesgos técnicos y propongo estrategias de mejora. Evaluación de stack tecnológico, integración de IA y código."
                    },
                    "04": {
                        title: "Sistemas Cloud-Native con IA (AWS/Docker/K8s)",
                        description: "Diseño sistemas cloud-native escalables con IA integrada y los implemento. Migraciones, optimización de costos, CI/CD y estrategias de despliegue automatizado."
                    },
                    "05": {
                        title: "Tech Evangelism y Cultura de Ingeniería",
                        description: "Evangelizo buenas prácticas de ingeniería en equipos y comunidades. Capacitación técnica, code reviews y establecimiento de estándares."
                    },
                    "06": {
                        title: "Arquitectura Real-Time y Performance en Móviles",
                        description: "Diseño arquitecturas de sistemas en tiempo real optimizadas para aplicaciones móviles. Enfoque en baja latencia, sincronización de datos, WebSockets, y optimización de rendimiento para garantizar experiencias fluidas en dispositivos móviles."
                    }
                }
            },
            skills: {
                subtitle: "Mis Habilidades Técnicas",
                heading: "Conoce mis",
                headingHighlight: "Habilidades Técnicas y Experiencia",
                subheading: "Más de 8 años construyendo desde el código hasta la integración de IA. Explora mi expertise y descubre cómo puedo agregar valor a tus proyectos."
            },
            projects: {
                subtitle: "Trabajos Recientes",
                heading: "Explora Algunos De Mis",
                headingHighlight: "Proyectos Populares",
                keatherland: {
                    category: "E-commerce",
                    name: "Keatherland",
                    description: "Sistema escalable para plataforma e-commerce con integración de IA, optimización de rendimiento, gestión de estado avanzada y estrategia de caching distribuido. Sistema diseñado para manejar alto tráfico y transacciones concurrentes."
                },
                charlesDelivery: {
                    category: "Plataforma Web",
                    name: "Charles Delivery",
                    description: "Sistema en tiempo real para gestión de entregas con IA integrada. Implementación de WebSockets, optimización de queries y diseño de base de datos para tracking en tiempo real. Escalabilidad horizontal y alta disponibilidad."
                },
                techSynergy: {
                    category: "Landing Corporativa",
                    name: "Tech Synergy Labs",
                    description: "Landing page corporativa con integración de IA, optimización SEO, lazy loading y estrategia de assets. Sistema de CMS headless para gestión de contenido y integración con servicios externos."
                }
            },
            blog: {
                subtitle: "Investigaciones",
                heading: "Investigaciones y Diseños",
                readMore: "Leer más",
                post1: {
                    title: "El Impacto de la IA en los Sistemas Críticos de los Países de Primer Mundo",
                    excerpt: "Un análisis técnico y científico sobre cómo la inteligencia artificial está transformando los sistemas críticos de infraestructura en las naciones desarrolladas, con implicaciones para la seguridad nacional y la estabilidad económica.",
                    date: "Enero 2026"
                }
            },
            featuredApps: {
                subtitle: "Proyectos",
                heading: "Productos digitales construidos para",
                headingHighlight: "resolver necesidades reales",
                intro: "Este espacio reúne proyectos de distintas categorías: IA aplicada, productividad, automatización y herramientas para talento digital, diseñados y desplegados end-to-end.",
                visitCta: "Ver proyecto",
                cvMatch: {
                    title: "CV Match AI",
                    description: "Plataforma para ranking inteligente de CVs frente a una vacante. Optimiza la preselección y acelera decisiones de reclutamiento con análisis comparativo inmediato."
                },
                interviewCoach: {
                    title: "Interview Coach AI",
                    description: "Asistente inteligente para preparación de entrevistas técnicas y de comportamiento. Entrena respuestas, mejora narrativa profesional y eleva la confianza del candidato."
                }
            },
            contact: {
                subtitle: "Ponte en Contacto",
                heading: "Hablemos de tu",
                headingHighlight: "Próximo Proyecto",
                body: "Conecta conmigo para discutir tu próximo proyecto. Estoy listo para llevar tus ideas a la realidad con integración de IA y desarrollo full stack. Colaboremos para hacer de tu próximo proyecto un éxito.",
                credentials: [
                    "8+ Años de Experiencia",
                    "Especialista en IA & Full Stack",
                    "Especialista en IA Aplicada",
                    "Cloud-Native (AWS/Docker/K8s)"
                ],
                social: {
                    twitter: "Twitter (Ahora X)",
                    github: "Github",
                    linkedin: "LinkedIn"
                }
            },
            footer: {
                copyright: "Copyright @2026, JeffersonPNarvaez Todos los Derechos Reservados"
            }
        },
        en: {
            nav: {
                home: "Home",
                about: "About",
                resume: "Resume",
                services: "Services",
                skills: "Skills",
                research: "Research",
                projects: "Projects",
                blog: "Blog",
                contact: "Contact"
            },
            hero: {
                greeting: "Hello, I'm",
                name: "Jefferson P. Narvaez",
                title: "AI specialist and full stack developer",
                tagline: "I design systems that scale and develop end-to-end solutions. I combine artificial intelligence with technical implementation to build robust digital products.",
                ctaContact: "Contact me",
                stats: {
                    experience: "Years Of Experience",
                    projects: "Projects Complete",
                    satisfaction: "Systems Designed"
                }
            },
            about: {
                subtitle: "About Me",
                heading: "AI Specialization",
                headingHighlight: "& Full Stack Development",
                body: "Over 8 years of experience combining AI specialization with full stack development. I design scalable systems with integrated AI and implement them from code to deployment. I work with Vue.js, React, Node.js, Python, ML models, LLM APIs, relational and NoSQL databases, Docker, AWS, and Kubernetes. I document AI integration patterns, design decisions, and best practices that optimize systems and generate technical value.",
                bullets: [
                    "AI Integration in Systems",
                    "End-to-End Full Stack Development",
                    "Distributed & Cloud-Native Systems",
                    "ML Models & LLM APIs",
                    "Stack: Vue.js, React, Node.js, Python, AWS"
                ]
            },
            resume: {
                subtitle: "My Resume",
                heading: "Real",
                headingHighlight: "Technical Solutions Experience",
                jobs: {
                    job1: {
                        years: "2024 - Present",
                        title: "Full Stack Developer",
                        company: "Stefanini",
                        description: "Full stack development with AI integration. Implementation of scalable solutions from frontend to backend, working with modern technologies and engineering best practices."
                    },
                    job2: {
                        years: "2019 - 2024",
                        title: "Javascript Developer",
                        company: "Lulosoft LLC",
                        description: "Development of scalable full stack solutions with AI integration. Technical leadership in technology stack decisions and optimization of existing systems."
                    },
                    job3: {
                        years: "2017 - 2019",
                        title: "Software Analyst",
                        company: "ITERIA SAS",
                        description: "Analysis and design of systems with focus on AI integration. Strategic technical decision-making to optimize workflows and performance."
                    },
                    job4: {
                        years: "2017 - 2017",
                        title: "Mobile Developer",
                        company: "LAE",
                        description: "Cross-platform development that established the foundation for AI integration in distributed systems and native applications."
                    }
                }
            },
            services: {
                subtitle: "Popular Services",
                heading: "Specialized Services",
                headingHighlight: "Specialized Expertise",
                items: {
                    "01": {
                        title: "AI Integration & Applied Solutions",
                        description: "I integrate artificial intelligence into systems that scale. From ML models to LLM APIs, with focus on practical implementation and technical results."
                    },
                    "02": {
                        title: "End-to-End Full Stack Development",
                        description: "I develop complete solutions from frontend to backend. I implement with Vue.js, React, Node.js, Python, databases, and REST/GraphQL APIs."
                    },
                    "03": {
                        title: "Tech Due Diligence & Audits",
                        description: "I audit existing systems, identify technical risks, and propose improvement strategies. Technology stack, AI integration, and code evaluation."
                    },
                    "04": {
                        title: "Cloud-Native Systems with AI (AWS/Docker/K8s)",
                        description: "I design scalable cloud-native systems with integrated AI and implement them. Migrations, cost optimization, CI/CD, and automated deployment strategies."
                    },
                    "05": {
                        title: "Tech Evangelism & Engineering Culture",
                        description: "I evangelize engineering best practices in teams and communities. Technical training, code reviews, and establishment of standards."
                    },
                    "06": {
                        title: "Real-Time Architecture & Mobile Performance",
                        description: "I design real-time system architectures optimized for mobile applications. Focus on low latency, data synchronization, WebSockets, and performance optimization to ensure smooth experiences on mobile devices."
                    }
                }
            },
            skills: {
                subtitle: "My Technical Skills",
                heading: "Check out my",
                headingHighlight: "Tech Skills & Experience",
                subheading: "Over 8 years building from code to AI integration. Dive deeper into my expertise and discover how I can add value to your projects."
            },
            projects: {
                subtitle: "Latest Works",
                heading: "Explore Some Of My Popular",
                headingHighlight: "Projects",
                keatherland: {
                    category: "E-commerce",
                    name: "Keatherland",
                    description: "Scalable system for e-commerce platform with AI integration, performance optimization, advanced state management, and distributed caching strategy. System designed to handle high traffic and concurrent transactions."
                },
                charlesDelivery: {
                    category: "Web Platform",
                    name: "Charles Delivery",
                    description: "Real-time system for delivery management with integrated AI. WebSocket implementation, query optimization, and database design for real-time tracking. Horizontal scalability and high availability."
                },
                techSynergy: {
                    category: "Corporate Landing",
                    name: "Tech Synergy Labs",
                    description: "Corporate landing page with AI integration, SEO optimization, lazy loading, and asset strategy. Headless CMS system for content management and integration with external services."
                }
            },
            blog: {
                subtitle: "Research",
                heading: "Research & Designs",
                readMore: "Read more",
                post1: {
                    title: "The Impact of AI on Critical Systems in First World Countries",
                    excerpt: "A technical and scientific analysis on how artificial intelligence is transforming critical infrastructure systems in developed nations, with implications for national security and economic stability.",
                    date: "January 2026"
                }
            },
            featuredApps: {
                subtitle: "Projects",
                heading: "Digital products built to",
                headingHighlight: "solve real-world needs",
                intro: "This section showcases projects across multiple categories: applied AI, productivity, automation, and talent-focused tools, designed and deployed end-to-end.",
                visitCta: "View project",
                cvMatch: {
                    title: "CV Match AI",
                    description: "Platform for intelligent CV ranking against a job opening. It streamlines candidate pre-screening and accelerates recruiting decisions with instant comparative analysis."
                },
                interviewCoach: {
                    title: "Interview Coach AI",
                    description: "Intelligent assistant for technical and behavioral interview preparation. It trains responses, improves professional storytelling, and boosts candidate confidence."
                }
            },
            contact: {
                subtitle: "Get In Touch",
                heading: "Let's Talk For your",
                headingHighlight: "Next Projects",
                body: "Get in touch with me to discuss your upcoming projects. I am ready to bring your ideas to life with AI integration and full stack development. Let's collaborate to make your next project a success.",
                credentials: [
                    "8+ Years Of Experience",
                    "AI Specialist & Full Stack",
                    "Applied AI Specialist",
                    "Cloud-Native (AWS/Docker/K8s)"
                ],
                social: {
                    twitter: "Twitter (Now X)",
                    github: "Github",
                    linkedin: "LinkedIn"
                }
            },
            footer: {
                copyright: "Copyright @2026, JeffersonPNarvaez All Rights Reserved"
            }
        }
    };

    let currentLang = 'es';

    /**
     * Detect browser language and return 'es' or 'en'
     */
    function detectLanguage() {
        const stored = localStorage.getItem('lang');
        if (stored && (stored === 'es' || stored === 'en')) {
            return stored;
        }
        
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('es')) {
            return 'es';
        }
        return 'en';
    }

    /**
     * Apply fade transition to elements
     */
    function fadeTransition(elements, callback) {
        elements.forEach(el => {
            if (el) {
                el.style.transition = 'opacity 150ms ease-in-out';
                el.style.opacity = '0';
            }
        });

        setTimeout(() => {
            callback();
            elements.forEach(el => {
                if (el) {
                    setTimeout(() => {
                        el.style.opacity = '1';
                    }, 10);
                }
            });
        }, 150);
    }

    /**
     * Get nested value from object using dot notation
     */
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : undefined;
        }, obj);
    }

    /**
     * Update all elements with data-i18n attribute
     */
    function updateDOM(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        const elementsToFade = Array.from(elements);

        fadeTransition(elementsToFade, () => {
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                const value = getNestedValue(translations[lang], key);

                if (value !== undefined && value !== null) {
                    // Handle different element types
                    if (element.tagName === 'INPUT' && element.type === 'text') {
                        element.placeholder = value;
                    } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                        element.value = value;
                    } else if (element.hasAttribute('data-i18n-html')) {
                        element.innerHTML = value;
                    } else {
                        element.textContent = value;
                    }
                } else {
                    console.warn(`Translation key not found: ${key}`);
                }
            });

            // Update lang attribute on html tag
            document.documentElement.lang = lang;

            // Update active button state
            updateLanguageButtons(lang);
        });
    }

    /**
     * Update language toggle buttons active state
     */
    function updateLanguageButtons(lang) {
        const btnEs = document.getElementById('btn-es');
        const btnEn = document.getElementById('btn-en');

        if (btnEs && btnEn) {
            if (lang === 'es') {
                btnEs.classList.add('active');
                btnEn.classList.remove('active');
            } else {
                btnEn.classList.add('active');
                btnEs.classList.remove('active');
            }
        }
    }

    /**
     * Switch language
     */
    window.switchLanguage = function(lang) {
        if (lang !== 'es' && lang !== 'en') {
            console.error('Invalid language:', lang);
            return;
        }

        currentLang = lang;
        localStorage.setItem('lang', lang);
        updateDOM(lang);
    };

    /**
     * Initialize i18n system
     */
    function init() {
        currentLang = detectLanguage();
        updateDOM(currentLang);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
