# 🚀 Arquitectura de Portafolio Dinámico (Vanilla JS)

Un portafolio web de alto rendimiento diseñado para desarrolladores de software. Construido sin dependencias de frameworks externos, prioriza la velocidad de carga, la accesibilidad y la mantenibilidad modular.

Destaca por su integración dinámica con la API de Credly mediante un sistema de proxy rotativo para eludir restricciones de CORS, renderizando insignias digitales en tiempo real.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 📐 Características Arquitectónicas

* **Zero Dependencies:** Construido 100% con HTML5, CSS3 moderno (Variables, Grid, Flexbox, Clamp) y Vanilla JavaScript (ES6+).
* **Gestión de Estado Centralizada:** Toda la información del usuario se inyecta dinámicamente desde un único archivo de configuración (`data.js`), separando la lógica de presentación (UI) de los datos.
* **Integración API Resiliente:** Consumo asíncrono de la API de Credly implementando un patrón de **Fallback con Múltiples Proxies CORS**. Si un proxy falla, el algoritmo salta automáticamente al siguiente para asegurar la carga de insignias.
* **Paginación Infinita Lógica:** Algoritmo de extracción de datos que itera sobre la paginación de la API de Credly mediante ciclos `while` y validación de IDs únicos para prevenir bucles infinitos.
* **Taxonomía y Filtrado Dinámico:** Sistema de filtrado por áreas de conocimiento (RRHH, IT, Management, etc.) generado en tiempo de ejecución basado en los metadatos de los certificados.
* **Micro-Interacciones UX/UI:** Implementación de *Intersection Observers* para animaciones de entrada (`fade-up`), efectos de *Spotlight* en el Hero basados en las coordenadas del cursor, y *Skeletons* de carga para manejo de latencia.

---

## 📁 Estructura del Proyecto

\`\`\`text
portfolio/
├── index.html          # Interfaz de usuario, estilos embebidos (CSS) y lógica de renderizado (JS)
├── data.js             # Base de datos local (JSON-like object) para inyección de contenido
├── README.md           # Documentación técnica
└── assets/             # Assets estáticos optimizados
    ├── avatar.jpg
    ├── projects/       # Screenshots de proyectos (Aspect ratio 16:9)
    └── certs/          # Evidencias de certificaciones
\`\`\`

---

## ⚙️ Configuración y Mantenimiento (Data Management)

El proyecto está diseñado para que no sea necesario tocar el DOM (HTML) ni la lógica de renderizado (JS) para realizar actualizaciones rutinarias. Toda mutación de datos ocurre en `data.js`.

### 1. Actualización del Perfil y Habilidades
Modifica el objeto `profile` y el array `skills` en `data.js`. Las habilidades detectadas dinámicamente desde Credly se fusionarán con las hardcodeadas en caso de fallo de red.

### 2. Inserción de Nuevos Proyectos
Añade un objeto al array `projects`:
\`\`\`javascript
{
  title: "Nombre del Proyecto",
  description: "Descripción técnica concisa.",
  tags: ["React", "Node.js", "MongoDB"],
  image: "assets/projects/img.webp", // Recomendado uso de .webp para optimización LCP
  demo: "https://demo.url",
  repo: "https://github.com/user/repo",
  featured: true // Renderiza la tarjeta en formato hero/ampliado
}
\`\`\`

### 3. Gestión de Taxonomía de Certificados
El sistema genera los botones de filtrado de forma algorítmica leyendo el atributo `area` de cada certificado en el array `certifications`. 
* **Nota:** Si deseas agregar un área nueva (ej. `marketing`), simplemente inclúyela en el atributo `area`. Para un mapeo de nombre legible, actualiza el diccionario `areaLabel` en el bloque JS de `index.html`.

---

## 🚀 Despliegue (CI/CD Básico)

Al ser una aplicación puramente estática (SSG/Client-side rendering), el proyecto está optimizado para despliegues instantáneos en CDNs globales.

**Vía GitHub Pages:**
1. Inicializa el repositorio local y vincula con GitHub.
2. Sube la rama `main`.
3. Navega a **Settings > Pages** y selecciona la rama `main` en la raíz `/`.
4. El pipeline nativo compilará y servirá el sitio con HTTPS automáticamente.

Alternativas viables de alto rendimiento: Vercel, Netlify o Cloudflare Pages.

---
*Desarrollado con enfoque en Clean Code, Performance y Experiencia de Usuario.*