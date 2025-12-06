# 🚀 Portafolio Web Personal - React

<div align="center">
  
  ![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

  **Portafolio profesional desarrollado con React siguiendo metodología Scrum**

  [Ver Demo](#) • [Reportar Bug](https://github.com/tu-usuario/mi-portafolio-web/issues) • [Solicitar Feature](https://github.com/tu-usuario/mi-portafolio-web/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Metodología de Desarrollo](#-metodología-de-desarrollo)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)
- [Agradecimientos](#-agradecimientos)

---

## 🎯 Acerca del Proyecto

Este portafolio web fue desarrollado como parte de una práctica académica aplicando metodología ágil **Scrum**. El proyecto incluye secciones de presentación personal, proyectos destacados, habilidades técnicas y un formulario de contacto funcional.

### ¿Por qué este proyecto?

- 📚 Aplicar conocimientos de React en un proyecto real
- 🎨 Crear una presencia profesional en línea
- 🔄 Practicar metodología Scrum con sprints de 14 días
- 🌐 Desarrollar habilidades en diseño responsive
- 📝 Implementar buenas prácticas de Git y GitHub

---

## ✨ Características

### Funcionalidades Principales

- ✅ **Navegación Fluida** - Smooth scroll entre secciones
- ✅ **Diseño Responsive** - Adaptable a móvil, tablet y desktop
- ✅ **Animaciones Suaves** - Transiciones y efectos modernos
- ✅ **Filtrado de Proyectos** - Por categorías (Frontend, Backend, Full Stack)
- ✅ **Formulario de Contacto** - Con validación en tiempo real
- ✅ **Barra de Progreso de Habilidades** - Animadas al hacer scroll
- ✅ **Tema Personalizado** - Colores rojo y oscuro
- ✅ **SEO Optimizado** - Meta tags y estructura semántica

### Secciones

1. **Hero** - Presentación con call-to-action
2. **Sobre Mí** - Biografía y estadísticas
3. **Proyectos** - Galería filtrable de proyectos
4. **Habilidades** - Skills técnicas con niveles
5. **Contacto** - Formulario funcional
6. **Footer** - Links y redes sociales

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **[React 18](https://react.dev/)** - Biblioteca de JavaScript para UI
- **[Vite 5](https://vitejs.dev/)** - Build tool ultra rápido
- **[CSS3](https://developer.mozilla.org/es/docs/Web/CSS)** - Estilos personalizados
- **[Lucide React](https://lucide.dev/)** - Iconos SVG

### Herramientas de Desarrollo

- **[Git](https://git-scm.com/)** - Control de versiones
- **[GitHub](https://github.com/)** - Hosting de repositorio
- **[VS Code](https://code.visualstudio.com/)** - Editor de código
- **[Chrome DevTools](https://developer.chrome.com/docs/devtools/)** - Debugging y testing

### Metodología

- **[Scrum](https://www.scrum.org/)** - Framework ágil
- **[Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)** - Estrategia de branching

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior) - [Descargar](https://nodejs.org/)
- **npm** (v8 o superior) - Viene con Node.js
- **Git** (v2.30 o superior) - [Descargar](https://git-scm.com/)

Verifica las instalaciones:
```bash
node --version  # Debe mostrar v16.0.0 o superior
npm --version   # Debe mostrar v8.0.0 o superior
git --version   # Debe mostrar v2.30.0 o superior
```

---

## 🚀 Instalación

Sigue estos pasos para configurar el proyecto localmente:

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/mi-portafolio-web.git
cd mi-portafolio-web
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configurar Variables de Entorno (Opcional)

Crea un archivo `.env.local` en la raíz:
```env
# EmailJS (si vas a usar el formulario de contacto)
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### 4. Iniciar Servidor de Desarrollo
```bash
npm run dev
```

El proyecto estará disponible en: **http://localhost:5173/**

---

## 💻 Uso

### Scripts Disponibles
```bash
# Desarrollo - Inicia servidor con hot-reload
npm run dev

# Build - Genera versión optimizada para producción
npm run build

# Preview - Previsualiza el build de producción
npm run preview

# Lint - Verifica el código (si tienes ESLint configurado)
npm run lint
```

### Personalizar Contenido

Para personalizar el portafolio con tu información:

1. **Datos Personales** - Edita `src/data/personalData.js`
2. **Proyectos** - Modifica `src/data/projectsData.js`
3. **Habilidades** - Actualiza `src/data/skillsData.js`
4. **Redes Sociales** - Cambia `src/data/navigationData.js`
5. **Información de Contacto** - Edita `src/data/contactData.js`

### Cambiar Tema de Colores

Edita las variables CSS en `src/index.css`:
```css
:root {
  --color-primary: #dc2626;      /* Color principal */
  --color-primary-dark: #991b1b; /* Tono oscuro */
  --color-primary-light: #f87171;/* Tono claro */
  /* ... más variables */
}
```

---

## 📁 Estructura del Proyecto
```
mi-portafolio/
├── src/
│   ├── components/      # Componentes React
│   ├── data/           # Datos y configuraciones
│   ├── styles/         # Archivos CSS
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── public/             # Archivos estáticos
├── .gitignore          # Archivos ignorados por Git
├── package.json        # Dependencias del proyecto
└── README.md           # Este archivo
```

Ver estructura completa en [ESTRUCTURA-PROYECTO.md](./ESTRUCTURA-PROYECTO.md)

---

## 🔄 Metodología de Desarrollo

Este proyecto fue desarrollado siguiendo **Scrum** con las siguientes prácticas:

### Sprint de 14 días

- **Sprint Planning** - Definición de historias de usuario
- **Daily Standups** - Seguimiento diario documentado
- **Sprint Review** - Demostración del incremento
- **Sprint Retrospective** - Mejora continua

### Estrategia de Git
```
master (producción)
  │
  ├── develop (desarrollo)
  │     │
  │     ├── feature/header-navigation
  │     ├── feature/hero-section
  │     ├── feature/about-section
  │     ├── feature/projects-section
  │     ├── feature/skills-section
  │     ├── feature/contact-section
  │     ├── feature/footer
  │     └── feature/responsive-design
```

### Convenciones de Commits
```
feat: nueva funcionalidad
fix: corrección de bug
style: cambios de formato
refactor: refactorización de código
docs: cambios en documentación
test: agregar o modificar tests
chore: tareas de mantenimiento
```

---

## 🗺️ Roadmap

- [x] Setup inicial del proyecto
- [x] Implementar Header con navegación
- [x] Crear sección Hero
- [x] Desarrollar sección About
- [x] Implementar sección Projects con filtros
- [x] Crear sección Skills con barras animadas
- [x] Desarrollar formulario de contacto
- [x] Implementar Footer
- [x] Diseño responsive completo
- [ ] Integrar EmailJS para formulario
- [ ] Agregar modo oscuro/claro
- [ ] Implementar blog
- [ ] Agregar animaciones con Framer Motion
- [ ] Implementar i18n (español/inglés)
- [ ] Agregar tests unitarios
- [ ] Optimizar SEO
- [ ] Convertir a PWA

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---

## 📞 Contacto

**Tu Nombre** - [Tu Email](mailto:tu@email.com)

- 🌐 Portafolio: [tu-portfolio.com](#)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)

**Link del Proyecto:** [https://github.com/tu-usuario/mi-portafolio-web](https://github.com/tu-usuario/mi-portafolio-web)

---

## 🙏 Agradecimientos

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) - Imágenes de placeholder
- [Shields.io](https://shields.io/) - Badges del README
- Comunidad de desarrolladores en GitHub

---

<div align="center">
  
  **⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**
  
  Hecho con ❤️ y React
  
</div>