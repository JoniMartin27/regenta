<div align="center">

# Regenta — Landing

**La capa de control _agentic_ para desarrollo de software.**
Gobierna, dirige y audita una flota de agentes de IA como tu equipo de ingeniería.

🌐 **[jonimartin27.github.io/regenta](https://jonimartin27.github.io/regenta/)**

</div>

---

Sitio estático (HTML + CSS + JS, sin build) de la landing page de **Regenta**. Se sirve con GitHub Pages desde la raíz de `main`.

## Estructura

```
regenta-landing/
├── index.html      Markup de la landing (una sola página)
├── styles.css      Design system — navy + neón violeta/cian/ámbar, glass, animaciones
├── main.js         Interacciones — nav scroll, menú móvil, reveal, tabs, copiar, contadores
├── favicon.svg     Monograma R en gradiente
└── assets/
    ├── og.png      Imagen Open Graph (1200×630)
    ├── fleet.png   Captura — organigrama de la flota
    ├── projects.png Captura — Kanban con pipeline de 7 fases
    └── metrics.png  Captura — dashboard de métricas
```

## Desarrollo local

No requiere build. Sirve la carpeta con cualquier servidor estático:

```bash
npx serve .
# o
python -m http.server 8000
```

> No abras `index.html` con `file://` (las rutas relativas y el favicon SVG fallan).

## Despliegue

GitHub Pages está configurado con origen **`main` / root**. Cada push a `main` republica el sitio automáticamente.

---

© 2026 Jonathan Martín · Marca y contenido de **Regenta**.
