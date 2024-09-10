import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function CreditoConsumo() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Beneficios de nuestro Crédito de Consumo Ordinario";

  const benefitsList = [
    "Tasas de interés competitivas y accesibles",
    "Plazos flexibles adaptados a tus necesidades",
    "Proceso de solicitud rápido y sencillo",
    "Disponibilidad de montos según tu capacidad de pago",
    "Asesoramiento financiero personalizado",
    "Sin necesidad de justificar el destino de los fondos",
  ];

  
  const imageSource = "/assets/images/servicios/consumo_ordinario/benefits.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Información Importante sobre el Crédito de Consumo Ordinario";
  const features = [
    "Tasa de interés competitiva del 13% anual",
    "Plazos flexibles de hasta 2 años",
    "Montos desde $2,000",
    "Encaje del 10% sobre el monto solicitado",
    "Proceso de aprobación rápido y sencillo",
    "Sin necesidad de justificar el destino de los fondos",
    "Disponibilidad inmediata de los fondos tras la aprobación",
  ];

  const requirements = [
    "Ser socio de COAC SUP LTDA.",
    "Presentar identificación y comprobante de ingresos",
    "Tener un buen historial crediticio con un puntaje mínimo de 700",
    "No tener deudas pendientes con la cooperativa",
  ];

  const imageSrc = "/assets/images/servicios/consumo_ordinario/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Listo para dar el siguiente paso hacia tus metas financieras?";
  const buttonText = "Solicita tu Crédito Ahora";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/consumo_ordinario/hero_back.jpg"
        mainText="Crédito de Consumo Ordinario"
        secondaryText="Accede a soluciones financieras flexibles y competitivas para satisfacer tus necesidades. Con el Crédito de Consumo Ordinario de COAC SUP LTDA., tu bienestar financiero está al alcance."
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
