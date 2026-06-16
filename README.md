# cma208.github.io

Portafolio personal de **Carlos Machicado** — Desarrollador Backend & IA Aplicada.
Personal portfolio of **Carlos Machicado** — Backend & Applied AI Developer.

> 🌐 https://cma208.github.io

Sitio estático bilingüe (ES/EN), sin frameworks ni paso de build: **HTML + CSS + JavaScript** vanilla.
Bilingual static site, no frameworks, no build step: vanilla **HTML + CSS + JavaScript**.

## Estructura / Structure

```
.
├── index.html                  # One-page principal
├── proyectos/
│   ├── nexus-core.html         # Case study — agente RAG on-premise
│   └── yachayhuasi.html        # Case study — plataforma académica URP
└── assets/
    ├── css/styles.css          # Sistema de diseño (tokens, light/dark)
    ├── js/i18n.js              # Motor bilingüe ES/EN (sin fetch)
    ├── js/main.js              # Tema, nav, animaciones GSAP
    ├── cv/                     # CV en PDF
    └── img/                    # Favicon + imagen social
```

## Características / Features

- **Bilingüe ES/EN** con persistencia en `localStorage`.
- **Modo claro/oscuro** que respeta `prefers-color-scheme`.
- **Animaciones** con [GSAP](https://gsap.com/) + ScrollTrigger (vía CDN), con degradación elegante y respeto a `prefers-reduced-motion`.
- **Accesible**: navegación por teclado, `skip-link`, foco visible, `aria-*`.
- **Cero dependencias de build** — se sirve tal cual.

## Desarrollo local / Local development

Al usar `<script defer>` con CDN, basta abrir `index.html`. Para evitar restricciones de `file://`, sirve la carpeta:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Despliegue / Deployment

GitHub Pages sirve el sitio automáticamente desde la rama `main`.

## Tecnologías / Tech

`HTML5` · `CSS3` (custom properties, grid, flexbox) · `JavaScript (ES2017+)` · `GSAP` · `Google Fonts (Inter, JetBrains Mono)`
