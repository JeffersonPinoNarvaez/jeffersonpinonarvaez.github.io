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
                heading: "Full Stack AI",
                headingHighlight: "de producto a producción",
                body: "Más de 8 años construyendo software end-to-end con IA en el centro del diseño: experiencias en Vue.js, React y React Native, servicios en Node.js, Python y Java, datos relacionales y NoSQL, y despliegues cloud-native en AWS con Docker y Kubernetes. Orquesto RAG, embeddings y APIs de LLM con la misma rigurosidad que cualquier dominio de negocio: contratos estables, observabilidad, costos/latencia bajo control y documentación que equipos puedan evolucionar sin sorpresas.",
                bullets: [
                    "Full Stack AI: UI, APIs y modelos en un solo hilo de entrega",
                    "RAG, embeddings, LLMs y datos transaccionales coherentes",
                    "Cloud-native, CI/CD y operación con métricas y alertas",
                    "Calidad, seguridad y gobierno del ciclo de vida de la IA aplicada",
                    "Stack: Vue, React, RN, Node, Python, Java · AWS · Docker · K8s"
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
                subtitle: "Líneas de trabajo",
                heading: "Full Stack AI",
                headingHighlight: "de la interfaz a la nube",
                items: {
                    "01": {
                        title: "Experiencias web con IA aplicada",
                        description: "Interfaces donde la IA es protagonista: copilotos, chat contextual, streaming de tokens y estados resilientes con Vue.js, React y APIs tipadas hasta el backend."
                    },
                    "02": {
                        title: "Backoffice e interfaces operativas con IA",
                        description: "Herramientas internas para producto, soporte u operaciones: flujos con LLM/RAG, permisos, auditoría y paneles que ganan velocidad sin perder control ni trazabilidad."
                    },
                    "03": {
                        title: "Mobile Full Stack AI",
                        description: "Apps híbridas y nativas ligadas a inferencia y datos: React Native, contratos claros con APIs de IA, uso eficiente de red/batería y UX que tolera latencia y errores parciales."
                    },
                    "04": {
                        title: "Runtime cloud-native para cargas de IA",
                        description: "AWS, Docker y Kubernetes con CI/CD y observabilidad para RAG, embeddings e inferencia: autoescalado, límites de coste, secretos y despliegues reproducibles, no solo contenedores sueltos."
                    },
                    "05": {
                        title: "Calidad, evaluación y gobierno de features con LLM",
                        description: "Regresión sobre prompts, datasets de evaluación, mitigación de alucinaciones, políticas de datos y code reviews con lente de riesgo: la IA entra a producción con criterios medibles y revisables."
                    },
                    "06": {
                        title: "Tiempo real, datos y performance con IA en el camino crítico",
                        description: "WebSockets, colas y pipelines que alimentan respuestas en vivo: sincronización, backpressure y afinación para que modelos y recuperación de contexto no rompan la latencia ni la consistencia que el usuario nota."
                    }
                }
            },
            skills: {
                subtitle: "Mis Habilidades Técnicas",
                heading: "Conoce mis",
                headingHighlight: "Habilidades Técnicas y Experiencia",
                subheading: "Más de 8 años construyendo desde el código hasta la integración de IA. Explora mi expertise y descubre cómo puedo agregar valor a tus proyectos."
            },
            softSkills: {
                subtitle: "Capa humana",
                heading: "Más allá del código:",
                headingHighlight: "habilidades que escalan equipos",
                intro: "Combino claridad, empatía y criterio para alinear personas, prioridades y resultados —del discovery a la entrega, sin perder el ritmo ni el tono.",
                items: {
                    "01": {
                        title: "Comunicación asertiva con corazón técnico",
                        description: "Mensajes directos, respetuosos y accionables: doy contexto, cierro ambigüedades y dejo acuerdos explícitos para que nadie adivine el plan."
                    },
                    "02": {
                        title: "Orquestación de grupos y dinámica de equipo",
                        description: "Facilito sesiones donde las voces convergen: roles claros, decisiones visibles y energía enfocada en resolver, no en repetir el mismo debate."
                    },
                    "03": {
                        title: "Control de tareas y dueñez de entregas",
                        description: "Descompongo objetivos en hitos medibles, anticipo riesgos y mantengo tableros vivos: el flujo avanza con prioridades honestas, no con heroísmo improvisado."
                    },
                    "04": {
                        title: "Traducción negocio ↔ ingeniería",
                        description: "Convierto requisitos difusos en backlog entendible y, al revés, explico trade-offs técnicos en lenguaje de impacto para que stakeholders decidan con confianza."
                    },
                    "05": {
                        title: "Mentoría que multiplica talento",
                        description: "Pairing, feedback oportuno y espacios seguros para aprender: ayudo a subir el nivel colectivo sin humillar ni microgestionar."
                    },
                    "06": {
                        title: "Calma bajo presión y navegación de conflictos",
                        description: "Cuando sube la tensión, bajo el volumen del drama: escucho primero, nombro el problema y co-diseño salidas donde todos puedan caminar."
                    }
                }
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
                },
                cvPilot: {
                    title: "CVPilot AI",
                    description: "Optimizador de currículum con IA que adapta tu CV a cualquier descripción de puesto en segundos."
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
                heading: "Full Stack AI",
                headingHighlight: "from product to production",
                body: "Over 8 years shipping software end-to-end with AI baked into the design: experiences in Vue.js, React, and React Native, services in Node.js, Python, and Java, relational and NoSQL data, and cloud-native deployments on AWS with Docker and Kubernetes. I wire up RAG, embeddings, and LLM APIs with the same discipline as any business domain—stable contracts, observability, cost/latency under control, and documentation teams can evolve without guesswork.",
                bullets: [
                    "Full Stack AI: UI, APIs, and models on one delivery thread",
                    "RAG, embeddings, LLMs, and transactional data kept coherent",
                    "Cloud-native delivery, CI/CD, and operations with metrics and alerts",
                    "Quality, security, and governance across the applied AI lifecycle",
                    "Stack: Vue, React, RN, Node, Python, Java · AWS · Docker · K8s"
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
                subtitle: "How I deliver value",
                heading: "Full Stack AI",
                headingHighlight: "from UI to scalable cloud",
                items: {
                    "01": {
                        title: "Web experiences with applied AI",
                        description: "Interfaces where AI is first-class: copilots, contextual chat, token streaming, and resilient state in Vue.js and React—with typed contracts all the way to the backend."
                    },
                    "02": {
                        title: "Backoffice & operational UIs powered by AI",
                        description: "Internal tools for product, support, or ops: LLM/RAG workflows, permissions, audit trails, and dashboards that speed teams up without losing control or traceability."
                    },
                    "03": {
                        title: "Mobile Full Stack AI",
                        description: "Hybrid and native apps wired to inference and data: React Native, clear contracts with AI APIs, efficient network/battery use, and UX that tolerates latency and partial failures."
                    },
                    "04": {
                        title: "Cloud-native runtime for AI workloads",
                        description: "AWS, Docker, and Kubernetes with CI/CD and observability for RAG, embeddings, and inference: autoscaling, cost guardrails, secrets, and reproducible releases—not just ad-hoc containers."
                    },
                    "05": {
                        title: "Quality, evaluation & governance for LLM features",
                        description: "Prompt regression suites, eval datasets, hallucination mitigation, data policies, and risk-aware code review—so AI ships with measurable, reviewable criteria."
                    },
                    "06": {
                        title: "Real-time data paths & performance on the AI hot path",
                        description: "WebSockets, queues, and pipelines feeding live responses: synchronization, backpressure, and tuning so models and context retrieval do not break perceived latency or consistency."
                    }
                }
            },
            skills: {
                subtitle: "My Technical Skills",
                heading: "Check out my",
                headingHighlight: "Tech Skills & Experience",
                subheading: "Over 8 years building from code to AI integration. Dive deeper into my expertise and discover how I can add value to your projects."
            },
            softSkills: {
                subtitle: "Human stack",
                heading: "Beyond the code:",
                headingHighlight: "skills that scale teams",
                intro: "I blend clarity, empathy, and judgment to align people, priorities, and outcomes—from discovery to delivery—without losing pace or tone.",
                items: {
                    "01": {
                        title: "Assertive communication with a technical heart",
                        description: "Direct, respectful, actionable messages: I add context, remove ambiguity, and leave explicit agreements so nobody has to guess the plan."
                    },
                    "02": {
                        title: "Group orchestration and team dynamics",
                        description: "I facilitate sessions where voices converge: clear roles, visible decisions, and energy focused on solving—not on replaying the same debate."
                    },
                    "03": {
                        title: "Task control and delivery ownership",
                        description: "I break goals into measurable milestones, anticipate risks, and keep boards honest: flow moves with truthful priorities, not improvised heroics."
                    },
                    "04": {
                        title: "Business ↔ engineering translation",
                        description: "I turn fuzzy requirements into a legible backlog—and explain technical trade-offs in impact language so stakeholders can decide with confidence."
                    },
                    "05": {
                        title: "Mentorship that multiplies talent",
                        description: "Pairing, timely feedback, and safe learning spaces: I help raise the collective bar without shaming or micromanaging."
                    },
                    "06": {
                        title: "Calm under pressure and conflict navigation",
                        description: "When tension rises, I lower the drama volume: listen first, name the problem, and co-design exits everyone can walk away with."
                    }
                }
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
                },
                cvPilot: {
                    title: "CVPilot AI",
                    description: "AI-powered resume optimizer that tailors your CV to any job description in seconds."
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
