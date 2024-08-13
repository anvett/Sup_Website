"use client";

import React from "react";
import Introduction from "@/components/Introduction/Introduction";
import Benefits from "@/components/beneficts/beneficts";
import BenefitsGrid from "@/components/benefitsGrid/BenefitsGrid";
import CallToAction from "@/components/cta/cta";
import FeaturedServices from "@/components/featureServices/FeatureServices";
import Hero from "@/components/hero/Hero";
import { LampContainer } from "@/components/lamp/Lamp";
import Testimonials from "@/components/testimonials/Testimonials";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";
import { motion } from "framer-motion";


export default function Home() {
  //----------------------------------------------
  // Texto de introducción
  //----------------------------------------------

  const introductionText = `
  En COAC SUP LTDA., nos dedicamos a fortalecer el bienestar económico de nuestros socios a través de servicios financieros innovadores y personalizados, fomentando la solidaridad, el progreso y la responsabilidad social. Somos una cooperativa de referencia en el sector financiero, promoviendo el crecimiento económico y personalizado que satisfaga las necesidades de nuestros socios y contribuya al buen manejo financiero.
`;

  //----------------------------------------------
  // Servicios destacados
  //----------------------------------------------

  const services = [
    {
      icon: "assets/images/servicios/credito_consumo_ordinario.png",
      title: "Crédito de Consumo Ordinario",
      description: "Ofrecemos créditos de consumo ordinario con plazos flexibles y tasas competitivas para satisfacer tus necesidades financieras.",
      link: "/servicios/consumo_ordinario",
    },
    {
      icon: "assets/images/servicios/credito_consumo_dinamico.png",
      title: "Crédito de Consumo Dinámico",
      description: "Nuestros créditos de consumo dinámico están diseñados para brindarte la flexibilidad y el apoyo que necesitas para tus proyectos personales.",
      link: "/servicios/consumo_dinamico",
    },
    {
      icon: "assets/images/servicios/credito_consumo_especial.png",
      title: "Crédito de Consumo Especial",
      description: "Obtén créditos de consumo especial con condiciones preferenciales y beneficios exclusivos para nuestros socios.",
      link: "/servicios/consumo_especial",
    },
    {
      icon: "assets/images/servicios/prestamo_hipotecario.png",
      title: "Préstamo Especial Hipotecario",
      description: "Accede a nuestros préstamos especiales hipotecarios con plazos largos y tasas atractivas para asegurar tu futuro.",
      link: "/servicios/prestamo_hipotecario",
    },
  ];
  

  //----------------------------------------------
  // Beneficios array y src img
  //----------------------------------------------

  const benefitsTitle = "Sé parte de la COAC SUP LTDA.";

  const benefits = [
    "Solidez y confianza en la administración de tus ahorros",
    "Créditos personalizados que se adaptan a tus necesidades",
    "Compromiso con la transparencia y la equidad en todos nuestros servicios",
    "Acceso a servicios financieros innovadores y seguros",
    "Atención cercana y personalizada para cada socio",
    "Tasas de interés competitivas y condiciones flexibles",
];


  const imageSrc = "assets/images/benefits/prestamo2.jpg";

  //----------------------------------------------
  // Testimonios array
  //----------------------------------------------

  const testimonials = [
    {
      name: "Ana Martínez",
      photo: "assets/images/testimonials/test1.jpg",
      text: "Ser parte de COAC SUP LTDA. ha sido una de las mejores decisiones financieras que he tomado. Sus servicios son excelentes y el trato es siempre personalizado.",
    },
    {
      name: "Luis Herrera",
      photo: "assets/images/testimonials/test2.jpg",
      text: "Gracias a los créditos de COAC SUP LTDA., pude emprender mi negocio y seguir adelante con mi proyecto. Estoy muy agradecido por su apoyo constante.",
    },
    {
      name: "Sofía Morales",
      photo: "assets/images/testimonials/test3.jpg",
      text: "La confianza y seguridad que me brinda COAC SUP LTDA. no tienen comparación. Siempre están disponibles para ayudarme a manejar mis finanzas de la mejor manera.",
    },
  ];
  

  const videoUrl = "/assets/videos/servicios_financieros.mp4";

  //----------------------------------------------
  // Beneficios y valores de la cooperativa
  //----------------------------------------------

  const benefitsData = {
    title: "Beneficios y Valores de COAC SUP LTDA.",
    items: [
      {
        src: "FaHandshake", // FontAwesome icon
        detail: "Confianza y seguridad en la gestión de tus ahorros.",
      },
      {
        src: "FaPiggyBank", // FontAwesome icon
        detail: "Diversos productos de ahorro adaptados a tus necesidades.",
      },
      {
        src: "FaHandsHelping", // FontAwesome icon
        detail: "Compromiso con la comunidad y responsabilidad social.",
      },
      {
        src: "FaDollarSign", // FontAwesome icon
        detail: "Tasas de interés competitivas en todos nuestros productos.",
      },
      {
        src: "FaLightbulb", // FontAwesome icon
        detail: "Innovación constante para mejorar nuestros servicios.",
      },
      {
        src: "FaUserShield", // FontAwesome icon
        detail: "Protección y transparencia en todas nuestras operaciones.",
      },
      {
        src: "FaCommentsDollar", // FontAwesome icon
        detail: "Atención personalizada para cada socio.",
      },
      {
        src: "FaChartLine", // FontAwesome icon
        detail: "Asesoría financiera para el crecimiento económico.",
      },
      {
        src: "FaPeopleCarry", // FontAwesome icon
        detail: "Apoyo mutuo y cooperación entre socios.",
      },
      {
        src: "FaBusinessTime", // FontAwesome icon
        detail: "Eficiencia y rapidez en la gestión de trámites.",
      },
      {
        src: "FaGavel", // FontAwesome icon
        detail: "Cumplimiento estricto de la normativa financiera.",
      },
      {
        src: "FaHeart", // FontAwesome icon
        detail: "Empatía y solidaridad en nuestras relaciones.",
      },
    ],
  };

  //----------------------------------------------
  

  return (
    <main className="">
      <Hero />
      <Introduction text={introductionText} />
      <BenefitsGrid title={benefitsData.title} items={benefitsData.items} />
      <FeaturedServices services={services} />
      <Benefits benefitsTitle={benefitsTitle} benefits={benefits} imageSrc={imageSrc} />
      <div className=" pt-spacing-1 pb-spacing-1 sm:pt-spacing-3 sm:pb-spacing-4 bg-gradient-primary">
        <h2 className="section-title text-light"></h2>
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>
      <Testimonials testimonials={testimonials} />
      
    </main>
  );
}
