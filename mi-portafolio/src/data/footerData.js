export const footerData = {
  brand: {
    name: "Crisst",
    tagline: "Vive la vida y no dejes que la vida te viva"
  },
  
  quickLinks: {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre Mí", href: "#about" },
      { label: "Proyectos", href: "#projects" },
      { label: "Habilidades", href: "#skills" },
      { label: "Contacto", href: "#contact" }
    ]
  },
  
  resources: {
    title: "Recursos",
    links: [
      { label: "Blog", href: "#", external: true },
      { label: "Portafolio", href: "#projects" },
      { label: "CV/Resume", href: "#", external: true },
      { label: "Testimonios", href: "#", external: true }
    ]
  },
  
  legal: {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos de Uso", href: "#" },
      { label: "Licencia", href: "#" }
    ]
  },
  
  copyright: {
    year: new Date().getFullYear(),
    author: "Crisst",
    text: "Todos los derechos reservados para mi"
  },
  
  madeWith: {
    show: true,
    text: "Hecho con",
    icon: "❤️",
    tech: "React"
  }
};