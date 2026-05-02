# Diseño de Página Web — 3er Cuatrimestre

Repositorio oficial de la materia **Diseño de Página Web** del 3er cuatrimestre. Esta plataforma funciona como sitio informativo complementario al Classroom: aquí encontrarás los lineamientos de la materia, material de clase, actividades y todos los recursos necesarios para tu desarrollo a lo largo del cuatrimestre.

> **Nota:** Este README y el proyecto en general se irán actualizando conforme se avance en la materia. Se agregarán nuevas secciones, actividades y recursos con cada tema visto en clase.

---

## ¿Qué encontrarás aquí?

| Sección | Descripción |
|---|---|
| **Inicio** | Presentación de la materia, criterios de evaluación y reglas generales |
| **Herramientas** | Código de Classroom, repositorio y recursos en línea utilizados en clase |
| **Actividad Diagnóstico** | Actividad inicial para medir el nivel previo de los alumnos |
| **Proyecto Final** | Lineamientos, requisitos técnicos y rúbrica de evaluación del proyecto final |

---

## Estructura del Proyecto

```
disenoPaginaWeb/
├── index.html                             # Página principal (inicio, criterios, reglas)
├── css/
│   └── styles.css                         # Estilos globales (modo claro/oscuro, layout)
├── js/
│   ├── components.js                      # Inyección modular de sidebar y footer
│   └── script.js                          # Scripts: sidebar toggle, tema, acordeón, etc.
└── introduccion/                          # Módulo: Introducción
    ├── herramientas/
    │   └── index.html                     # Herramientas de clase y acceso al Classroom
    ├── actividad-diagnostico/
    │   └── index.html                     # Actividad diagnóstica inicial
    └── proyecto-final/
        └── index.html                     # Lineamientos completos del proyecto final
# ...
# Se agregarán nuevas carpetas por módulo/tema conforme avance el cuatrimestre
```

> La navegación lateral del sitio también se actualizará con cada nuevo tema agregado.

---

## Stack Técnico

Sitio construido con tecnologías simples e intencionalmente sin frameworks complejos, para que los alumnos puedan leerlo y aprender de él:

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica |
| **CSS3** | Variables CSS, Flexbox, Grid, glassmorphism, modo claro/oscuro |
| **JavaScript (Vanilla)** | Sidebar colapsable, acordeón de navegación, toggle de tema |
| **Bootstrap 5** | Layout y componentes en páginas internas (Proyecto Final, Diagnóstico) |
| **Font Awesome 6** | Iconografía |
| **Google Fonts (Outfit)** | Tipografía principal |

---

## Proyecto Final del Cuatrimestre

Los alumnos desarrollarán un **Portafolio Web Personal** que deberá:

- Diseñarse previamente (wireframe o mockup)
- Desarrollarse con las tecnologías vistas en clase (HTML5, CSS3, Bootstrap, JS)
- Ser **responsive** (enfoque mobile-first)
- Publicarse en internet (GitHub Pages, Netlify o Vercel)
- Subirse a un repositorio personal de GitHub con múltiples commits organizados

> Consulta todos los detalles, contenido mínimo, rúbrica y condiciones en la sección **Proyecto Final** del sitio: [`introduccion/proyecto-final/index.html`](introduccion/proyecto-final/index.html)

---

## Reglas de la Clase

- **Asistencia**: Puntualidad requerida — tolerancia máxima de 5 minutos.
- **Entregas**: Exclusivamente vía GitHub y Google Classroom. No se aceptan entregas por otro medio.
- **Inteligencia Artificial**: Prohibido su uso íntegro para resolver tareas o exámenes. Puede usarse como apoyo, no como sustituto del aprendizaje.
- **Repositorio**: Cada alumno debe mantener su propio repositorio organizado con commits frecuentes y descriptivos, e **invitar al profesor como colaborador**.
- **Proyecto Final**: No se aceptan proyectos incompletos, sin publicar en línea, con código desordenado o sin diseño responsive.

---

© 2026 Materia Diseño de Página Web. Todos los derechos reservados.
