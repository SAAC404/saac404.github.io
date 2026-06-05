# 🚀 Portafolio GitHub Pages

Portafolio personal para desarrolladores web. Solo necesitas editar **`data.js`** para mantenerlo actualizado.

---

## 📁 Estructura del proyecto

```
portfolio-github-pages/
├── index.html          ← La página (no necesitas tocarla)
├── data.js             ← TU ARCHIVO: edita aquí cada semana ✏️
├── README.md           ← Esta guía
└── assets/
    ├── avatar.jpg      ← Tu foto de perfil
    ├── projects/       ← Imágenes de proyectos (800×500 px)
    │   ├── ecommerce.jpg
    │   └── ...
    └── certs/          ← Tus certificados en .jpg (recomendado 1200×900 px)
        ├── freecodecamp-rwd.jpg
        └── ...
```

---

## ⚡ Despliegue inicial en GitHub Pages

1. **Crea un repositorio** en GitHub llamado `tu-usuario.github.io`
   (o cualquier nombre, p. ej. `portfolio`)

2. **Sube todos los archivos** del proyecto:
   ```bash
   git init
   git add .
   git commit -m "🚀 Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/tu-usuario.github.io.git
   git push -u origin main
   ```

3. **Activa GitHub Pages:**
   - Ve a Settings → Pages
   - Branch: `main` / Folder: `/ (root)`
   - Guarda — en 2 minutos tu sitio estará en `https://tu-usuario.github.io`

---

## ✏️ Actualizar cada semana

### Agregar una certificación nueva

1. Convierte tu PDF a JPG (usa [smallpdf.com](https://smallpdf.com) o Adobe)
2. Guarda la imagen en `assets/certs/nombre-certificado.jpg`
3. Abre `data.js` y agrega un bloque al inicio del array `certifications`:

```js
{
  title: "Nombre del Certificado",
  issuer: "Plataforma o Institución",
  date: "Julio 2024",
  category: "certificacion",  // certificacion | reconocimiento | constancia | curso
  image: "assets/certs/nombre-certificado.jpg",
  credential: "https://link-a-credencial.com",  // deja "" si no hay link
},
```

4. Sube los cambios:
```bash
git add .
git commit -m "✅ Agrego certificado: Nombre del Certificado"
git push
```

¡Listo! En ~30 segundos aparece en tu portafolio.

### Agregar un proyecto nuevo

Agrega un bloque al array `projects` en `data.js`:

```js
{
  title: "Nombre del Proyecto",
  description: "Descripción breve de qué hace y qué tecnologías usaste.",
  tags: ["React", "Node.js", "MongoDB"],
  image: "assets/projects/nombre-proyecto.jpg",  // 800×500 px
  demo: "https://tu-demo.vercel.app",
  repo: "https://github.com/tu-usuario/proyecto",
  featured: false,  // true = aparece más grande (úsalo solo para 1-2 proyectos)
},
```

---

## 🖼️ Tips para las imágenes

| Tipo | Tamaño recomendado | Formato |
|------|--------------------|---------|
| Avatar/foto | 400×400 px | JPG/PNG |
| Proyecto | 800×500 px | JPG |
| Certificado | 1200×900 px | JPG |

- Para convertir PDFs a JPG: [smallpdf.com](https://smallpdf.com/pdf-to-jpg) o [ilovepdf.com](https://ilovepdf.com)
- Comprime las imágenes en [squoosh.app](https://squoosh.app) para carga rápida
- Mantén los JPG de certificados bajo 300 KB cada uno

---

## 🎨 Personalización rápida

Edita en `data.js`:
- **Nombre, título, email, GitHub, LinkedIn** → sección `profile`
- **Descripción personal** → campo `about`
- **Barras de habilidades** → array `skills` (nivel de 0 a 100)

---

## 📱 Funcionalidades incluidas

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Modo oscuro nativo
- ✅ Filtros por categoría en certificaciones
- ✅ Lightbox con navegación por teclado (← →, Esc)
- ✅ Animaciones al hacer scroll
- ✅ Carga rápida (sin frameworks externos)
- ✅ Barras de habilidades animadas
- ✅ Sin dependencias npm — solo HTML + JS vanilla

---

*Construido para GitHub Pages — sin build, sin npm, sin complicaciones.*
