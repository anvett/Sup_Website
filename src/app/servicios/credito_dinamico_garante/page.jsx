import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function CreditoConsumoDinamicoGarante() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Beneficios del Crédito de Consumo Dinámico con Garante";

  const benefitsList = [
    "Acceso a montos mayores con el respaldo de un garante",
    "Tasas de interés ajustadas según la garantía",
    "Mayor seguridad y confianza en la aprobación del crédito",
    "Flexibilidad en los plazos y términos",
    "Posibilidad de negociar condiciones más favorables",
    "Asesoramiento personalizado durante todo el proceso",
  ];

  const imageSource = "/assets/images/servicios/credito_dinamico_garante/benefits.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Información Clave sobre el Crédito de Consumo Dinámico con Garante";
  const features = [
    "Tasa de interés competitiva con respaldo de garantía",
    "Plazos flexibles y adaptados a tus necesidades",
    "Montos desde $2,000 hasta $80,000",
    "Proceso de aprobación rápido con respaldo de un garante",
    "Mayor posibilidad de aprobación con un garante solvente",
    "Oportunidad de negociar mejores condiciones de crédito",
  ];

  const requirements = [
    "Ser socio de COAC SUP LTDA.",
    "Presentar identificación y comprobante de ingresos",
    "Contar con un garante solvente que cumpla con los requisitos de la cooperativa",
    "Historial crediticio del garante sin morosidades",
  ];

  const imageSrc = "/assets/images/servicios/credito_dinamico_garante/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Tienes un garante que te respalde? Obtén mejores condiciones con nuestro crédito dinámico.";
  const buttonText = "Solicita tu Crédito con Garante";
  const buttonLink = "/solicitar-credito-consumo-dinamico-garante";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/credito_dinamico_garante/hero_back.jpg"
        mainText="Crédito de Consumo Dinámico con Garante"
        secondaryText="El Crédito de Consumo Dinámico con Garante de COAC SUP LTDA. te permite acceder a montos mayores y obtener mejores condiciones, respaldado por un garante solvente."
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
