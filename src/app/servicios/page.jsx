
"use client";

import React from "react";
import CategoryLinksIcons from "../../components/categoryLinks/CategoryLinksIcons";
import { motion } from "framer-motion";
import { FaMoneyCheckAlt, FaHandshake, FaCreditCard, FaHome, FaKey, FaShieldAlt, FaUserShield } from "react-icons/fa"; // Importa los íconos que necesitas

export default function ServicesPage() {
  //----------------------------------------------
  // This is the data that will be used to render the services page
  //----------------------------------------------

  const serviciosItems = [
    {
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
      <motion.div
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <CategoryLinksIcons
          title="Nuestros Servicios"
          subtitle="Somos especialistas con varios años de experiencia"
          items={serviciosItems}
        />
        ;
      </motion.div>
    </section>
  );
}
