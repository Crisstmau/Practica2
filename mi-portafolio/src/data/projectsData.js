export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos integrada, panel de administración y gestión de inventario en tiempo real.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    category: "Full Stack",
    github: "https://github.com/tu-usuario/ecommerce-platform",
    demo: "https://demo-ecommerce.ejemplo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidad drag & drop, etiquetas personalizables, sincronización en tiempo real y colaboración en equipo.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    category: "Frontend",
    github: "https://github.com/tu-usuario/task-manager",
    demo: "https://tasks-app.ejemplo.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico interactivo con pronósticos de 7 días, mapas en tiempo real, alertas personalizadas y visualización de datos históricos.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop&q=80",
    technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
    category: "Frontend",
    github: "https://github.com/tu-usuario/weather-dashboard",
    demo: "https://weather.ejemplo.com",
    featured: true
  },
  {
    id: 4,
    title: "Blog Personal",
    description: "Blog minimalista con sistema de comentarios, búsqueda avanzada, categorías, tags y panel de administración para gestionar contenido.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&q=80",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    category: "Full Stack",
    github: "https://github.com/tu-usuario/personal-blog",
    demo: "https://mi-blog.ejemplo.com",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Generator",
    description: "Herramienta para generar portfolios personalizados con múltiples plantillas, editor en tiempo real y exportación a diferentes formatos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    technologies: ["React", "Express", "PostgreSQL", "AWS S3"],
    category: "Full Stack",
    github: "https://github.com/tu-usuario/portfolio-generator",
    demo: "https://portfolio-gen.ejemplo.com",
    featured: false
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Aplicación para seguimiento de ejercicios y nutrición con gráficos de progreso, planes de entrenamiento y recordatorios personalizados.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop&q=80",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    category: "Mobile",
    github: "https://github.com/tu-usuario/fitness-tracker",
    demo: "https://fitness.ejemplo.com",
    featured: false
  }
];

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Frontend", label: "Frontend" },
  { id: "Mobile", label: "Mobile" }
];