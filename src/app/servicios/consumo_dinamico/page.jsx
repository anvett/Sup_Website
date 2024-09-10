import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function CreditoConsumoDinamico() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Ventajas del Crédito de Consumo Dinámico";

  const benefitsList = [
    "Flexibilidad en los plazos y pagos",
    "Acceso a montos mayores con tasas ajustadas",
    "Evaluación rápida y personalizada",
    "Posibilidad de ajustes en los términos según tus circunstancias",
    "Asesoría continua para mejorar tu perfil crediticio",
    "Opción de ampliación de crédito sin complicaciones",
  ];

  const imageSource = "/assets/images/servicios/consumo_dinamico/dinero1.jpg";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves del Crédito de Consumo Dinámico";
  const features = [
    "Tasa de interés competitiva del 13% anual",
    "Plazos flexibles de hasta 4 años",
    "Montos hasta $5,000",
    "Producto especial para socios que ahorran: Doble del ahorro vista y certificados de aportación",
    "Ajustes y ampliaciones según el comportamiento de pago",
    "Sin necesidad de justificar el destino de los fondos",
    "Acceso a fondos adicionales con revisiones periódicas",
  ];

  const requirements = [
    "Ser socio de COAC SUP LTDA.",
    "Presentar identificación y comprobante de ingresos",
    "Historial crediticio sólido con posibilidad de ajustes",
    "Estar al día con los pagos de cualquier crédito anterior",
  ];

  const imageSrc = "/assets/images/servicios/consumo_dinamico/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Preparado para aprovechar la flexibilidad financiera que necesitas?";
  const buttonText = "Solicita tu Crédito Dinámico";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/consumo_dinamico/hero_back.jpg"
        mainText="Crédito de Consumo Dinámico"
        secondaryText="El Crédito de Consumo Dinámico de COAC SUP LTDA. te ofrece la flexibilidad que necesitas para tus proyectos. Ajusta plazos y montos según tu capacidad."
        buttonText="Solicita tu Crédito"
      />
      <Benefits benefitsTitle={benefitsTitle} benefits={benefitsList} imageSrc={imageSource} />
      <ServiceDetails
        title={title}
        features={features}
        requirements={requirements}
        imageSrc={imageSrc}
      />
      <CallToAction ctaText={ctaText} buttonText={buttonText} buttonLink={buttonLink} />
    </>
  );
}
