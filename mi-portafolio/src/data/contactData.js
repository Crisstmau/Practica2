export const contactInfo = {
  title: "Contacto",
  subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
  description: "Estoy disponible para proyectos freelance, colaboraciones o simplemente para tomar un café virtual y hablar sobre tecnología.",
  
  // Información de contacto directo
  email: "mauricioblasquez003@gmail.com",
  phone: "+591 74281748", // Opcional
  location: "Potosi, Bolivia",
  
  // Mensaje de éxito
  successMessage: "¡Mensaje enviado con éxito! Te responderé pronto.",
  
  // Campos del formulario
  formFields: {
    name: {
      label: "Nombre Completo",
      placeholder: "ingresa tu nombre",
      required: true,
      type: "text"
    },
    email: {
      label: "Correo Electrónico",
      placeholder: "tu@email.com",
      required: true,
      type: "email"
    },
    subject: {
      label: "Asunto",
      placeholder: "Propuesta de proyecto",
      required: true,
      type: "text"
    },
    message: {
      label: "Mensaje",
      placeholder: "Cuéntame sobre tu proyecto o consulta...",
      required: true,
      type: "textarea",
      rows: 6
    }
  }
};