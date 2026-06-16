/* ============================================================
   Bilingual engine (ES / EN) — no build, no fetch.
   Usage in HTML:
     <span data-i18n="key">default text</span>      -> textContent
     <h1 data-i18n-html="key">default markup</h1>    -> innerHTML
     <button data-i18n-aria="key">                    -> aria-label
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    es: {
      "doc.title": "Carlos Machicado — Backend & IA Aplicada",
      "nav.skip": "Ir al contenido",
      "nav.about": "Sobre mí",
      "nav.skills": "Stack",
      "nav.projects": "Proyectos",
      "nav.demos": "Demos",
      "nav.experience": "Experiencia",
      "nav.contact": "Contacto",
      "nav.menu": "Abrir menú",
      "nav.theme": "Cambiar tema claro/oscuro",

      "hero.eyebrow": "whoami",
      "hero.name": "Carlos Machicado",
      "hero.role": "Backend & IA aplicada · <span class=\"hl\">privacy-by-design</span>",
      "hero.lead": "Desarrollador backend con más de 5 años de experiencia y un foco fuerte en Inteligencia Artificial aplicada. Diseño y construyo agentes de IA y soluciones RAG con modelos de lenguaje ejecutados 100% en local, sobre una base sólida en Java 17/21 y Spring.",
      "hero.cta1": "Ver proyectos",
      "hero.cta2": "Descargar CV",
      "hero.social.github": "GitHub",
      "hero.social.linkedin": "LinkedIn",
      "hero.social.email": "Email",

      "stat.years.l": "años de experiencia",
      "stat.onprem.l": "on-premise, sin APIs externas",
      "stat.latency.l": "latencia p50 (RAG end-to-end)",
      "stat.sessions.l": "sesiones concurrentes sostenidas",

      "about.eyebrow": "sobre mí",
      "about.title": "De la mecatrónica a la IA privada",
      "about.p1": "Soy <strong>Carlos Machicado</strong>, desarrollador backend con más de 5 años de experiencia y un foco fuerte en <strong>Inteligencia Artificial aplicada</strong>. Diseño y construyo agentes de IA y soluciones RAG con modelos de lenguaje ejecutados 100% en local, sobre una base sólida en Java 17/21 y Spring.",
      "about.p2": "Mi especialidad es construir sistemas de IA <strong>privados y soberanos</strong>: los datos nunca salen a terceros. Eso implica recuperación híbrida, reranking, guardrails anti-alucinación, auditoría a prueba de manipulación y cumplimiento (Ley 29733 / GDPR) — end-to-end, mantenible y seguro.",
      "about.p3": "Tengo una Maestría en Ciencia de Datos y formación en Ingeniería Mecatrónica (URP), e inglés C1. Disfruto los problemas donde la arquitectura importa tanto como el resultado.",
      "about.card.role.k": "rol",
      "about.card.role.v": "Backend & Applied AI",
      "about.card.loc.k": "ubicación",
      "about.card.loc.v": "Lima, Perú",
      "about.card.focus.k": "foco",
      "about.card.focus.v": "IA on-premise · RAG",
      "about.card.langs.k": "idiomas",
      "about.card.langs.v": "ES nativo · EN C1",
      "about.card.status.k": "estado",
      "about.card.status.v": "Abierto a oportunidades",

      "skills.eyebrow": "stack",
      "skills.title": "Stack & habilidades",
      "skills.sub": "Lo que uso para llevar ideas de IA a producción.",
      "skills.g1": "IA & LLMs",
      "skills.g2": "Backend & APIs",
      "skills.g3": "Datos & análisis",
      "skills.g4": "DevOps & herramientas",
      "skills.g5": "Frontend",
      "skills.g6": "Idiomas",
      "skills.tag.agents": "Agentes de IA / RAG",
      "skills.tag.onprem": "LLMs on-premise",
      "skills.tag.ml": "Machine Learning",
      "skills.tag.es": "Español (nativo)",
      "skills.tag.en": "Inglés (C1)",

      "projects.eyebrow": "ls ~/work",
      "projects.title": "Proyectos destacados",
      "projects.sub": "Una selección de lo más sustancial — del agente RAG on-premise a plataformas en producción.",
      "projects.flagship": "Flagship",
      "projects.production": "Producción",
      "projects.opensource": "Open source",
      "projects.fullstack": "Full-stack",
      "projects.aiagent": "Agente de IA",
      "projects.datascience": "Data Science",
      "projects.caseStudy": "Case study",
      "projects.more": "Ver todos los repositorios en GitHub",
      "projects.privateRepo": "Código privado (institucional)",

      "nexus.desc": "Agente conversacional RAG 100% on-premise para una universidad: recuperación híbrida (vector + BM25 con RRF), reranking, citación obligatoria, guardrails anti-alucinación/anti-jailbreak y auditoría inviolable con cadena SHA-256. Construido end-to-end de forma individual.",
      "nexus.m1": "sesiones concurrentes",
      "nexus.m2": "latencia p50",
      "nexus.m3": "clases Java",
      "nexus.m4": "on-premise",

      "yachay.desc": "Plataforma de gestión académica de la URP (equipo de ~6 devs en la OFICIC) que reemplazó al legacy Apolo. Diseñé la arquitectura de reportes Excel con Apache POI —adoptada en 13 módulos— y fui autor principal de Recursos Internos, Dashboards, Cierre de Carga y Trazabilidad.",
      "yachay.m1l": "alumnos por ciclo",
      "yachay.m2l": "módulos en producción",
      "yachay.m3l": "usan mi arquitectura de reportes",
      "yachay.press": "En producción en la URP · cubierto por El Comercio",
      "devloop.desc": "Herramienta open-source de gestión de proyectos para equipos de software, con las Interrupciones como entidad de primera clase y sin time-tracking. Arquitectura documentada con ADRs, CI y licencia AGPL v3.",
      "comanda.desc": "Sistema local de gestión de pedidos para restaurante: backend Spring Boot, frontend React, PostgreSQL y despliegue con Docker Compose en mini-PC. Documentado con ADRs, roadmap y manual por rol.",
      "claudocs.desc": "Agente basado en Claude para automatizar la generación y el mantenimiento de documentación técnica.",
      "ml.title": "Machine Learning & Data Science",
      "ml.desc": "Proyectos de mi Maestría en Ciencia de Datos: predicción de fuga de clientes con redes neuronales, clasificación de tumores para detección de cáncer de mama y modelos sobre insuficiencia cardíaca crónica.",

      "demos.eyebrow": "demos en vivo",
      "demos.title": "Demos en vivo",
      "demos.sub": "Proyectos desplegados y navegables. Se irán sumando más.",
      "demo.menu.desc": "Generador de menús y cartas para restaurantes. App desplegada en Vercel.",
      "demos.open": "Abrir demo",
      "demos.soon": "Más demos próximamente",

      "exp.eyebrow": "git log",
      "exp.title": "Experiencia profesional",
      "exp.urp.role": "Desarrollador Backend · Área de Gestión de Proyectos",
      "exp.urp.date": "Feb 2023 — Actualidad",
      "exp.urp.b1": "Diseñé y construí end-to-end un agente conversacional RAG 100% on-premise (Java 21, Spring Boot reactivo, Spring AI): recuperación híbrida (vector + BM25 en español con fusión RRF) y reranking sobre PostgreSQL + pgvector, citación inline obligatoria y guardrails anti-alucinación y anti-jailbreak en capas; ~239 clases con suite de pruebas (Testcontainers, k6).",
      "exp.urp.b2": "Serví los LLMs localmente en una sola GPU (vLLM/Ollama, sin APIs comerciales) sosteniendo 30 sesiones concurrentes a p50 7 s, con autorización por rol previa al retrieval, auditoría inviolable (hash-chain SHA-256) y cumplimiento de protección de datos (Ley 29733 / GDPR). Validado en pruebas de carga e iniciando pruebas con usuarios (pre-piloto).",
      "exp.urp.b3": "Contribuí, en el equipo de desarrollo, a varios módulos del nuevo sistema académico “Yachayhuasi” (matrícula, carga lectiva y no lectiva, cuadro de necesidades, dashboards, reportes), en backend (Java 17/21, Spring) y luego frontend; migré código legacy (Visual Basic, Java, PHP) a Java moderno.",
      "exp.urp.b4": "Participé en la renovación del portal web institucional, reconstruí el módulo de Libro de Reclamaciones (aplicación consolidada y mantenible) y desarrollé reportes automatizados en PDF y Excel con Java (Apache POI).",
      "exp.ganemo.role": "Desarrollador Junior",
      "exp.ganemo.org": "Ganemo · Lima (remoto)",
      "exp.ganemo.date": "Feb 2022 — Nov 2022",
      "exp.ganemo.b1": "Desarrollé y mantuve plugins para los productos de software de la cartera de clientes, y automaticé procesos administrativos conectando vistas y widgets con la base de datos.",
      "exp.ganemo.b2": "Automaticé procesos administrativos conectando vistas y widgets con la base de datos.",
      "exp.pacto.role": "Trainee de Desarrollo",
      "exp.pacto.org": "Pactomática · Chile (remoto)",
      "exp.pacto.date": "Mar 2021 — Nov 2021",
      "exp.pacto.b1": "Automaticé procesos de contratación, RR.HH. y gestión de contratos (“despapelización”), detectando y corrigiendo errores en los flujos de automatización.",

      "edu.eyebrow": "cat edu.md",
      "edu.title": "Educación",
      "edu.m.title": "Maestría en Ciencia de Datos",
      "edu.m.org": "Universidad Ricardo Palma · Egresado",
      "edu.b.title": "Bachiller en Ingeniería Mecatrónica",
      "edu.b.org": "Universidad Ricardo Palma",

      "contact.eyebrow": "mail",
      "contact.title": "¿Construimos algo privado y bien hecho?",
      "contact.sub": "Estoy abierto a oportunidades en backend e IA aplicada. Escríbeme y conversamos.",
      "contact.cv": "Descargar CV (PDF)",

      "footer.built": "Diseñado en Lima, Perú · abierto a nuevas oportunidades.",

      "cs.back": "Volver al inicio",
      "cs.toc": "En esta página",
      "cs.nexus.role": "Universidad Ricardo Palma · 2025–2026 · Construido individualmente end-to-end",
      "cs.viewSite": "Ver portafolio",
    },

    en: {
      "doc.title": "Carlos Machicado — Backend & Applied AI",
      "nav.skip": "Skip to content",
      "nav.about": "About",
      "nav.skills": "Stack",
      "nav.projects": "Projects",
      "nav.demos": "Demos",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "nav.menu": "Open menu",
      "nav.theme": "Toggle light/dark theme",

      "hero.eyebrow": "whoami",
      "hero.name": "Carlos Machicado",
      "hero.role": "Backend & Applied AI · <span class=\"hl\">privacy-by-design</span>",
      "hero.lead": "Backend Developer with 5+ years of experience and a strong focus on applied Artificial Intelligence. I design and build AI agents and RAG solutions with language models running 100% on-premise, on a solid foundation in Java 17/21 and Spring.",
      "hero.cta1": "View projects",
      "hero.cta2": "Download CV",
      "hero.social.github": "GitHub",
      "hero.social.linkedin": "LinkedIn",
      "hero.social.email": "Email",

      "stat.years.l": "years of experience",
      "stat.onprem.l": "on-premise, no external APIs",
      "stat.latency.l": "p50 latency (end-to-end RAG)",
      "stat.sessions.l": "concurrent sessions sustained",

      "about.eyebrow": "about me",
      "about.title": "From mechatronics to private AI",
      "about.p1": "I'm <strong>Carlos Machicado</strong>, a backend developer with 5+ years of experience and a strong focus on <strong>applied Artificial Intelligence</strong>. I design and build AI agents and RAG solutions with language models running fully on-premise, on a solid Java 17/21 + Spring foundation.",
      "about.p2": "My specialty is building <strong>private, sovereign</strong> AI systems where data never leaves the organization: hybrid retrieval, reranking, anti-hallucination guardrails, tamper-evident audit and compliance (Peru's Law 29733 / GDPR) — end-to-end, maintainable and secure.",
      "about.p3": "I hold a Master's in Data Science and a background in Mechatronic Engineering (URP), plus C1 English. I enjoy problems where architecture matters as much as the outcome.",
      "about.card.role.k": "role",
      "about.card.role.v": "Backend & Applied AI",
      "about.card.loc.k": "location",
      "about.card.loc.v": "Lima, Peru",
      "about.card.focus.k": "focus",
      "about.card.focus.v": "On-premise AI · RAG",
      "about.card.langs.k": "languages",
      "about.card.langs.v": "ES native · EN C1",
      "about.card.status.k": "status",
      "about.card.status.v": "Open to opportunities",

      "skills.eyebrow": "stack",
      "skills.title": "Stack & skills",
      "skills.sub": "What I use to take AI ideas to production.",
      "skills.g1": "AI & LLMs",
      "skills.g2": "Backend & APIs",
      "skills.g3": "Data & analysis",
      "skills.g4": "DevOps & tools",
      "skills.g5": "Frontend",
      "skills.g6": "Languages",
      "skills.tag.agents": "AI agents / RAG",
      "skills.tag.onprem": "On-premise LLMs",
      "skills.tag.ml": "Machine Learning",
      "skills.tag.es": "Spanish (native)",
      "skills.tag.en": "English (C1)",

      "projects.eyebrow": "ls ~/work",
      "projects.title": "Featured projects",
      "projects.sub": "A selection of the most substantial work — from an on-premise RAG agent to production platforms.",
      "projects.flagship": "Flagship",
      "projects.production": "Production",
      "projects.opensource": "Open source",
      "projects.fullstack": "Full-stack",
      "projects.aiagent": "AI agent",
      "projects.datascience": "Data Science",
      "projects.caseStudy": "Case study",
      "projects.more": "See all repositories on GitHub",
      "projects.privateRepo": "Private repo (institutional)",

      "nexus.desc": "100% on-premise conversational RAG agent for a university: hybrid retrieval (vector + BM25 with RRF), reranking, mandatory citations, anti-hallucination/anti-jailbreak guardrails and a tamper-evident SHA-256 audit chain. Built end-to-end single-handedly.",
      "nexus.m1": "concurrent sessions",
      "nexus.m2": "p50 latency",
      "nexus.m3": "Java classes",
      "nexus.m4": "on-premise",

      "yachay.desc": "URP's academic-management platform (a ~6-dev OFICIC team) that replaced the legacy Apolo. I designed the Apache POI Excel-reporting architecture —adopted across 13 modules— and was lead author of Internal Resources, Dashboards, Course Closing and Audit Trail.",
      "yachay.m1l": "students per cycle",
      "yachay.m2l": "modules in production",
      "yachay.m3l": "use my reporting architecture",
      "yachay.press": "In production at URP · featured in El Comercio",
      "devloop.desc": "Open-source project management for software teams, with Interruptions as first-class entities and no time tracking. Documented architecture (ADRs), CI and AGPL v3.",
      "comanda.desc": "Local restaurant order-management system: Spring Boot backend, React frontend, PostgreSQL, deployed via Docker Compose on a mini-PC. Documented with ADRs, roadmap and a per-role manual.",
      "claudocs.desc": "Claude-based agent that automates generating and maintaining technical documentation.",
      "ml.title": "Machine Learning & Data Science",
      "ml.desc": "Projects from my Master's in Data Science: customer churn prediction with neural networks, tumor classification for breast-cancer detection, and chronic heart-failure models.",

      "demos.eyebrow": "live demos",
      "demos.title": "Live demos",
      "demos.sub": "Deployed, browsable projects. More to come.",
      "demo.menu.desc": "Menu/carte generator for restaurants. App deployed on Vercel.",
      "demos.open": "Open demo",
      "demos.soon": "More demos coming soon",

      "exp.eyebrow": "git log",
      "exp.title": "Professional experience",
      "exp.urp.role": "Backend Developer · Project Management Office",
      "exp.urp.date": "Feb 2023 — Present",
      "exp.urp.b1": "Designed and built end-to-end an on-premise conversational RAG agent (Java 21, reactive Spring Boot, Spring AI): hybrid retrieval (vector + Spanish BM25 fused with RRF) and reranking over PostgreSQL + pgvector, mandatory inline citations and layered anti-hallucination/anti-jailbreak guardrails; ~239 classes with a test suite (Testcontainers, k6).",
      "exp.urp.b2": "Served the LLMs locally on a single GPU (vLLM/Ollama, no commercial APIs), sustaining 30 concurrent sessions at p50 7 s, with role-based authorization before retrieval, tamper-evident audit (SHA-256 hash chain) and data-protection compliance (GDPR/LGPD/CCPA). Validated under load testing and entering user testing (pre-pilot).",
      "exp.urp.b3": "As part of the development team, contributed to several modules of the university's academic-management platform (enrollment, teaching and non-teaching load, procurement/requirements planning, dashboards, reporting), on the backend (Java 17/21, Spring) and later the frontend; migrated legacy code (Visual Basic, Java, PHP) to modern Java.",
      "exp.urp.b4": "Contributed to the institutional web-portal revamp, rebuilt the regulatory consumer-complaints module (consolidated, maintainable app) and built automated PDF/Excel reports with Java (Apache POI).",
      "exp.ganemo.role": "Junior Developer",
      "exp.ganemo.org": "Ganemo · Lima (remote)",
      "exp.ganemo.date": "Feb 2022 — Nov 2022",
      "exp.ganemo.b1": "Developed and maintained plugins for the software products across the client portfolio, and automated administrative processes by connecting views and widgets to the database.",
      "exp.ganemo.b2": "Automated administrative processes by connecting views and widgets to the database.",
      "exp.pacto.role": "Development Trainee",
      "exp.pacto.org": "Pactomática · Chile (remote)",
      "exp.pacto.date": "Mar 2021 — Nov 2021",
      "exp.pacto.b1": "Automated contracting, HR and contract-management processes (\"paperless\" initiative), detecting and fixing errors across the automation flows.",

      "edu.eyebrow": "cat edu.md",
      "edu.title": "Education",
      "edu.m.title": "Master's in Data Science",
      "edu.m.org": "Universidad Ricardo Palma · Graduated",
      "edu.b.title": "Bachelor in Mechatronic Engineering",
      "edu.b.org": "Universidad Ricardo Palma",

      "contact.eyebrow": "mail",
      "contact.title": "Let's build something private and well-engineered.",
      "contact.sub": "I'm open to backend and applied-AI opportunities. Reach out and let's talk.",
      "contact.cv": "Download CV (PDF)",

      "footer.built": "Designed in Lima, Peru · open to new opportunities.",

      "cs.back": "Back to home",
      "cs.toc": "On this page",
      "cs.nexus.role": "Universidad Ricardo Palma · 2025–2026 · Built end-to-end single-handedly",
      "cs.viewSite": "View portfolio",
    },
  };

  const STORAGE_KEY = "cm_lang";
  const SUPPORTED = ["es", "en"];

  function detectLang() {
    let saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : "es";
  }

  function apply(lang) {
    const dict = I18N[lang] || I18N.es;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });

    // Inline bilingual blocks (used in long-form case studies):
    // <div data-lang="es">…</div><div data-lang="en" hidden>…</div>
    document.querySelectorAll("[data-lang]").forEach((el) => {
      el.hidden = el.getAttribute("data-lang") !== lang;
    });

    // Language-aware CV download: ES -> Spanish PDF, EN -> English PDF.
    const base = location.pathname.indexOf("/proyectos/") !== -1 ? "../" : "";
    document.querySelectorAll("[data-cv]").forEach((a) => {
      a.setAttribute("href", base + "assets/cv/Carlos_Machicado_CV_" + (lang === "en" ? "EN" : "ES") + ".pdf");
    });

    if (dict["doc.title"]) document.title = dict["doc.title"];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-btn") === lang));
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = "es";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply(lang);
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  // expose + wire
  window.CMI18n = { setLang, getLang: detectLang, dict: I18N };

  function init() {
    apply(detectLang());
    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
