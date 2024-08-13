<<<<<<< HEAD
"use client";

import React from "react";
import CategoryLinks from "../../components/categoryLinks/CategoryLinks";
import { motion } from "framer-motion";
import Link from "next/link";
=======

//----------------------------------------------
// This is the main page for the services section with images and links to the different services
//----------------------------------------------

// "use client";

// import React from "react";
// import CategoryLinks from "../../components/categoryLinks/CategoryLinks";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function ServicesPage() {
//   //----------------------------------------------
//   // This is the data that will be used to render the services page
//   //----------------------------------------------

//   const serviciosItems = [
//     {
//       imageSrc: "/assets/images/servicios/consumo_ordinario/category.png",
//       title: "Crédito de Consumo Ordinario",
//       description: "Ofrecemos créditos de consumo ordinario con plazos flexibles y tasas competitivas para satisfacer tus necesidades financieras.",
//       link: "/servicios/consumo_ordinario",
//       linkText: "Ver más",
//     },
//     {
//       imageSrc: "/assets/images/servicios/consumo_dinamico/category.png",
//       title: "Crédito de Consumo Dinámico",
//       description: "Nuestros créditos de consumo dinámico están diseñados para brindarte la flexibilidad y el apoyo que necesitas para tus proyectos personales.",
//       link: "/servicios/consumo_dinamico",
//       linkText: "Ver más",
//     },
//     {
//       imageSrc: "/assets/images/servicios/consumo_especial/category.png",
//       title: "Crédito de Consumo Especial",
//       description: "Obtén créditos de consumo especial con condiciones preferenciales y beneficios exclusivos para nuestros socios.",
//       link: "/servicios/consumo_especial",
//       linkText: "Ver más",
//     },
//     {
//       imageSrc: "/assets/images/servicios/credito_dinamico_garante/category.png",
//       title: "Crédito Dinámico con Garante",
//       description: "Accede a créditos con el respaldo de un garante, brindándote más seguridad y mejores condiciones.",
//       link: "/servicios/credito_dinamico_garante",
//       linkText: "Ver más",
//     },
//     {
//       imageSrc: "/assets/images/servicios/prestamo_hipotecario/category.png",
//       title: "Préstamo Hipotecario",
//       description: "Ofrecemos préstamos hipotecarios con condiciones favorables para que puedas adquirir tu vivienda o inmueble.",
//       link: "/servicios/prestamo_hipotecario",
//       linkText: "Ver más",
//     },
//     {
//       imageSrc: "/assets/images/servicios/prestamo_prendario/category.png",
//       title: "Préstamo Prendario",
//       description: "Accede a préstamos prendarios con tasas competitivas y condiciones adaptadas a tus necesidades.",
//       link: "/servicios/prestamo_prendario",
//       linkText: "Ver más",
//     },
//     {
//       imageSrc: "/assets/images/servicios/prestamos_especiales/category.png",
//       title: "Préstamos Especiales",
//       description: "Descubre nuestros préstamos especiales diseñados para situaciones particulares, con condiciones exclusivas.",
//       link: "/servicios/prestamos_especiales",
//       linkText: "Ver más",
//     },
//   ];
  

//   return (
//     <section className="relative  bg-primary text-center overflow-hidden  ">
//       <motion.div
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//       >
//         <CategoryLinks
//           title="Nuestros Servicios"
//           subtitle="Somos especialistas con varios años de experiencia"
//           items={serviciosItems}
//         />
//         ;
//       </motion.div>
//     </section>
//   );
// }


//----------------------------------------------
// This is the main page for the services section with icons and links to the different services
//----------------------------------------------

"use client";

import React from "react";
import CategoryLinksIcons from "../../components/categoryLinks/CategoryLinksIcons";
import { motion } from "framer-motion";
import { FaMoneyCheckAlt, FaHandshake, FaCreditCard, FaHome, FaKey, FaShieldAlt, FaUserShield } from "react-icons/fa"; // Importa los íconos que necesitas
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)

export default function ServicesPage() {
  //----------------------------------------------
  // This is the data that will be used to render the services page
  //----------------------------------------------

  const serviciosItems = [
    {
<<<<<<< HEAD
      imageSrc: "/assets/images/servicios/limpieza-lotes-autos/auto_lote1.png",
      title: "Lotes de Autos",
      description: "Lavamos lotes de autos en concesionarios o parqueos con precisión y cuidado.",
      link: "/servicios/lotes-autos",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/camiones/limpieza_camiones1.jpg",
      title: "Limpieza de Camiones",
      description:
        "Ofrecemos servicios de limpieza para camiones, asegurando que estén impecables.",
      link: "/servicios/camiones",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/car-wash/car_washing2.jpg",
      title: "Car Wash",
      description: "Servicio de lavado de autos completo, cuidando cada detalle.",
      link: "/servicios/car-wash",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/full-detail/detailing_interior3.jpg",
      title: "Full Detail",
      description: "Detalle completo del vehículo para mantenerlo en las mejores condiciones.",
      link: "/servicios/full-detail",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/correccion-pintura/correccion_pintura1.png",
      title: "Corrección de Pintura",
      description:
        "Servicios de corrección de pintura para eliminar imperfecciones y restaurar el brillo.",
      link: "/servicios/paint-correction",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/remocion-tinta/tint_removal.png",
      title: "Remosión de Tinta",
      description: "Eliminamos tintes del vehículo de manera profesional.",
      link: "/servicios/tint-removal",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/limpieza-botes/limpieza_botes.png",
      title: "Limpieza de Botes",
      description: "Limpieza de botes y yates para mantenerlos en perfecto estado.",
      link: "/servicios/limpieza-botes",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/remocion-olores/odor_removal.png",
      title: "Remosión de Olores",
      description: "Eliminamos olores desagradables del interior del vehículo.",
      link: "/servicios/odor-removal",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/leather-paint-sealing/leather_paint_sealing.jpeg",
      title: "Leather & Paint Sealing",
      description: "Sellado de cuero y pintura para proteger y prolongar su durabilidad.",
      link: "/servicios/leather-paint-sealing",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/limpieza-pisos/washing_patio.jpg",
      title: "Limpieza de Pisos",
      description: "Limpieza a presión en pisos (driveway) para mantenerlos en perfecto estado.",
      link: "/servicios/limpieza-pisos",
      linkText: "Ver más",
    },
    {
      imageSrc: "/assets/images/servicios/limpieza-edificios/limpieza_edificios1.png",
      title: "Limpieza de Edificios",
      description: "Limpieza a presión en edificios y almacenes para una apariencia impecable.",
      link: "/servicios/limpieza-edificios",
      linkText: "Ver más",
      
    },
  ];

  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
=======
      icon: <FaMoneyCheckAlt size={50} />, // Crédito de Consumo Ordinario
      title: "Crédito de Consumo Ordinario",
      description: "Ofrecemos créditos de consumo ordinario con plazos flexibles y tasas competitivas para satisfacer tus necesidades financieras.",
      link: "/servicios/consumo_ordinario",
      linkText: "Ver más",
    },
    {
      icon: <FaHandshake size={50} />, // Crédito de Consumo Dinámico
      title: "Crédito de Consumo Dinámico",
      description: "Nuestros créditos de consumo dinámico están diseñados para brindarte la flexibilidad y el apoyo que necesitas para tus proyectos personales.",
      link: "/servicios/consumo_dinamico",
      linkText: "Ver más",
    },
    {
      icon: <FaCreditCard size={50} />, // Crédito de Consumo Especial
      title: "Crédito de Consumo Especial",
      description: "Obtén créditos de consumo especial con condiciones preferenciales y beneficios exclusivos para nuestros socios.",
      link: "/servicios/consumo_especial",
      linkText: "Ver más",
    },
    {
      icon: <FaUserShield size={50} />, // Crédito Dinámico con Garante
      title: "Crédito Dinámico con Garante",
      description: "Accede a créditos con el respaldo de un garante, brindándote más seguridad y mejores condiciones.",
      link: "/servicios/credito_dinamico_garante",
      linkText: "Ver más",
    },
    {
      icon: <FaHome size={50} />, // Préstamo Hipotecario
      title: "Préstamo Hipotecario",
      description: "Ofrecemos préstamos hipotecarios con condiciones favorables para que puedas adquirir tu vivienda o inmueble.",
      link: "/servicios/prestamo_hipotecario",
      linkText: "Ver más",
    },
    {
      icon: <FaKey size={50} />, // Préstamo Prendario
      title: "Préstamo Prendario",
      description: "Accede a préstamos prendarios con tasas competitivas y condiciones adaptadas a tus necesidades.",
      link: "/servicios/prestamo_prendario",
      linkText: "Ver más",
    },
    {
      icon: <FaShieldAlt size={50} />, // Préstamos Especiales
      title: "Préstamos Especiales",
      description: "Descubre nuestros préstamos especiales diseñados para situaciones particulares, con condiciones exclusivas.",
      link: "/servicios/prestamos_especiales",
      linkText: "Ver más",
    },
  ];
  

  return (
    <section className="relative bg-primary text-center overflow-hidden">
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
      <motion.div
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
<<<<<<< HEAD
        <CategoryLinks
=======
        <CategoryLinksIcons
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
          title="Nuestros Servicios"
          subtitle="Somos especialistas con varios años de experiencia"
          items={serviciosItems}
        />
        ;
      </motion.div>
    </section>
  );
}
