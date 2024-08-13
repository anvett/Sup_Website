import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function CreditoConsumoEspecial() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Beneficios del Crédito de Consumo Especial";

  const benefitsList = [
    "Condiciones preferenciales para socios",
    "Acceso a montos elevados con tasas competitivas",
    "Proceso de aprobación personalizado",
    "Flexibilidad en la estructuración del crédito",
    "Asesoría especializada para maximizar beneficios",
    "Opciones de pago adaptadas a tus necesidades específicas",
  ];

  const imageSource = "/assets/images/servicios/consumo_especial/benefits.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Información Importante sobre el Crédito de Consumo Especial";
  const features = [
    "Tasa de interés preferencial para socios destacados",
    "Plazos flexibles y opciones de pago personalizadas",
    "Montos desde $5,000 hasta $100,000",
    "Evaluación y aprobación con atención personalizada",
    "Disponibilidad inmediata tras la aprobación",
    "Opciones exclusivas para la ampliación del crédito",
  ];

  const requirements = [
    "Ser socio de COAC SUP LTDA. con historial de fidelidad",
    "Presentar identificación, comprobante de ingresos, y avales si es necesario",
    "Historial crediticio sin morosidades",
    "Cumplir con los criterios de evaluación interna",
  ];

  const imageSrc = "/assets/images/servicios/consumo_especial/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Necesitas un crédito especial adaptado a tus necesidades específicas?";
  const buttonText = "Solicita tu Crédito Especial";
  const buttonLink = "/solicitar-credito-consumo-especial";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/consumo_especial/hero_back.jpg"
        mainText="Crédito de Consumo Especial"
        secondaryText="El Crédito de Consumo Especial de COAC SUP LTDA. está diseñado para ofrecerte condiciones preferenciales y flexibilidad, adaptándose a tus necesidades financieras específicas."
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
