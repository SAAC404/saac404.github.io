// ============================================================
//  DATA.JS — AQUÍ AGREGAS TUS PROYECTOS Y CERTIFICACIONES
//  Solo edita este archivo cada semana para actualizar tu portafolio
// ============================================================

const PORTFOLIO_DATA = {

  // ── PERFIL ──────────────────────────────────────────────
  profile: {
    name: "Tu Nombre Completo",
    title: "Desarrollador Web Full Stack",
    tagline: "Construyo experiencias digitales modernas y funcionales",
    email: "tuemail@ejemplo.com",
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
    avatar: "assets/avatar.jpg",  // Pon tu foto aquí, o deja "" para usar iniciales
    about: `Soy desarrollador web apasionado por crear aplicaciones rápidas, accesibles y elegantes. 
Me especializo en tecnologías modernas del ecosistema JavaScript y disfruto aprender 
algo nuevo cada semana.`,
  },

  // ── HABILIDADES ──────────────────────────────────────────
  skills: [
    { name: "HTML / CSS",      level: 90 },
    { name: "JavaScript",      level: 85 },
    { name: "React",           level: 80 },
    { name: "Node.js",         level: 75 },
    { name: "Git / GitHub",    level: 85 },
    { name: "SQL",             level: 70 },
    { name: "TypeScript",      level: 65 },
    { name: "Docker",          level: 50 },
  ],

  // ── PROYECTOS ────────────────────────────────────────────
  // Para agregar un proyecto nuevo, copia un bloque { } y pégalo arriba
  projects: [
    {
      title: "E-Commerce App",
      description: "Tienda en línea con carrito de compras, autenticación JWT y pagos con Stripe. Backend en Node.js/Express y frontend en React.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "assets/projects/ecommerce.jpg",  // Imagen 800×500 px recomendada
      demo: "https://tu-demo.vercel.app",
      repo: "https://github.com/tu-usuario/ecommerce",
      featured: true,   // true = aparece primero y más grande
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de analíticas en tiempo real con gráficas interactivas, filtros por fecha y exportación a CSV.",
      tags: ["Vue.js", "Chart.js", "Firebase"],
      image: "assets/projects/dashboard.jpg",
      demo: "https://dashboard-demo.netlify.app",
      repo: "https://github.com/tu-usuario/dashboard",
      featured: true,
    },
    {
      title: "API REST de Blog",
      description: "API con autenticación, CRUD completo, paginación, búsqueda y documentación con Swagger.",
      tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
      image: "assets/projects/api.jpg",
      demo: "",
      repo: "https://github.com/tu-usuario/blog-api",
      featured: false,
    },
    {
      title: "Portfolio Personal v1",
      description: "Mi primer portafolio estático con HTML, CSS y JS vanilla. Animaciones con GSAP.",
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      image: "assets/projects/portfolio.jpg",
      demo: "https://tu-usuario.github.io/portfolio-v1",
      repo: "https://github.com/tu-usuario/portfolio-v1",
      featured: false,
    },
  ],

  // ── CERTIFICACIONES / RECONOCIMIENTOS / CONSTANCIAS ─────
  // Para agregar uno nuevo cada semana, copia un bloque { } y pégalo arriba
  // image: ruta a tu archivo .jpg (sube la imagen a la carpeta assets/certs/)
  certifications: [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Enero 2024",
      category: "certificacion",   // "certificacion" | "reconocimiento" | "constancia" | "curso"
      image: "assets/certs/freecodecamp-rwd.jpg",
      credential: "https://freecodecamp.org/certification/tu-usuario/responsive-web-design",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Febrero 2024",
      category: "certificacion",
      image: "assets/certs/freecodecamp-js.jpg",
      credential: "https://freecodecamp.org/certification/tu-usuario/javascript-algorithms-and-data-structures",
    },
    {
      title: "React - De Cero a Experto",
      issuer: "Udemy",
      date: "Marzo 2024",
      category: "curso",
      image: "assets/certs/udemy-react.jpg",
      credential: "https://udemy.com/certificate/ABC123/",
    },
    {
      title: "Hackathon Nacional 2024",
      issuer: "Secretaría de Innovación",
      date: "Abril 2024",
      category: "reconocimiento",
      image: "assets/certs/hackathon-2024.jpg",
      credential: "",
    },
    {
      title: "Curso de Base de Datos SQL",
      issuer: "Platzi",
      date: "Mayo 2024",
      category: "constancia",
      image: "assets/certs/platzi-sql.jpg",
      credential: "https://platzi.com/p/tu-usuario/",
    },
    {
      title: "Node.js & Express Masterclass",
      issuer: "Coursera",
      date: "Junio 2024",
      category: "certificacion",
      image: "assets/certs/coursera-node.jpg",
      credential: "https://coursera.org/verify/ABC123",
    },
  ],

};
