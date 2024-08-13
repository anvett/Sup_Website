Documentación del Componente FeaturedServices
Descripción
El componente FeaturedServices es un componente React que muestra una sección de servicios destacados, con soporte para animaciones mediante framer-motion y un fondo interactivo utilizando @react-three/fiber y @react-three/drei. El componente activa las animaciones de entrada de las tarjetas de servicios y otros elementos cuando la sección entra en la vista del usuario, utilizando un hook personalizado basado en la API Intersection Observer.

Dependencias
React: Biblioteca de JavaScript para construir interfaces de usuario.
Framer Motion: Biblioteca para animaciones en React.
@react-three/fiber: Biblioteca para renderizar contenido 3D utilizando React.
@react-three/drei: Colección de herramientas y utilidades para react-three-fiber.
useIntersectionObserver: Hook personalizado para detectar cuándo un elemento entra en la vista del usuario.
Props
El componente FeaturedServices recibe los siguientes props:

services (array): Un array de objetos que representa cada servicio destacado. Cada objeto debe tener las siguientes propiedades:
icon (string): La URL del ícono que representa el servicio.
title (string): El título del servicio.
description (string): Una breve descripción del servicio.
link (string): El enlace a la página del servicio.
Ejemplo de Uso
javascript
Copiar código
import FeaturedServices from "./FeaturedServices";

const servicesData = [
  {
    icon: "/path/to/icon1.png",
    title: "Servicio 1",
    description: "Descripción del servicio 1.",
    link: "/servicios/servicio1",
  },
  {
    icon: "/path/to/icon2.png",
    title: "Servicio 2",
    description: "Descripción del servicio 2.",
    link: "/servicios/servicio2",
  },
  // Más servicios...
];

const ExamplePage = () => {
  return (
    <div>
      <FeaturedServices services={servicesData} />
    </div>
  );
};

export default ExamplePage;
Animaciones
El componente utiliza framer-motion para manejar las animaciones de los elementos de la sección:

Título: El título "Servicios Destacados" se anima desde una opacidad de 0 y un desplazamiento en el eje Y de -50px hasta una opacidad de 1 y y: 0px.
Tarjetas de Servicios: Cada tarjeta de servicio se anima con una entrada desde una opacidad de 0 y un desplazamiento en el eje Y de 50px hasta una opacidad de 1 y y: 0px. Las animaciones de las tarjetas están escalonadas con un pequeño retraso para crear un efecto de cascada.
Botón Final: El botón "Ver todos los productos y servicios" también se anima con una entrada desde una opacidad de 0 y un desplazamiento en el eje Y de 50px hasta una opacidad de 1 y y: 0px.
Interactividad con @react-three/fiber y @react-three/drei
El componente incluye un fondo interactivo renderizado con @react-three/fiber y @react-three/drei:

Contact Shadows: Se utiliza el componente ContactShadows de @react-three/drei para agregar sombras suaves y realistas en el fondo.
Configuración del Canvas: El fondo 3D se renderiza utilizando un Canvas de @react-three/fiber, que se sitúa como fondo de la sección y proporciona un efecto visual atractivo.
Hook Personalizado: useIntersectionObserver
Función: Este hook personalizado detecta cuándo la sección FeaturedServices entra en la vista del usuario y activa las animaciones en consecuencia.
Configuración: El hook se configura para observar la visibilidad de la sección con un umbral (threshold) de 0.1, lo que significa que las animaciones se activan cuando al menos el 10% de la sección es visible en la ventana del navegador.
Estilos y Diseño Responsivo
Grid Layout: Las tarjetas de servicios se organizan en una cuadrícula que se adapta al tamaño de la pantalla (grid-cols-1 en pantallas pequeñas, grid-cols-2 en pantallas medianas, grid-cols-4 en pantallas grandes).
Responsive Design: El componente es completamente responsivo, asegurando una visualización óptima en todos los tamaños de pantalla.
Notas Adicionales
Personalización: Puedes ajustar las propiedades de las animaciones (initial, animate, transition) para personalizar los efectos según las necesidades de tu proyecto.
Extensibilidad: Este componente puede ser fácilmente extendido o modificado para incluir más efectos visuales o interactivos utilizando framer-motion y @react-three/fiber.
Este componente está diseñado para ser reutilizable y flexible, proporcionando una manera atractiva de mostrar servicios destacados en tu aplicación web, con un enfoque en la interactividad y las animaciones suaves.