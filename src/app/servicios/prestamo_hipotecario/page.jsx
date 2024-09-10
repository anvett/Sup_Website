import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function PrestamoHipotecario() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Beneficios del Préstamo de Consumo Especial con Garantía Hipotecaria";

  const benefitsList = [
    "Tasas de interés competitivas y a largo plazo",
    "Plazos extendidos de hasta 144 meses",
    "Asesoría especializada durante todo el proceso",
    "Opción de pagos anticipados sin penalización",
    "Facilidad en la aprobación con requisitos accesibles",
  ];

  const imageSource = "/assets/images/servicios/prestamo_hipotecario/benefits.jpg";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Información Esencial sobre el Préstamo de Consumo Especial con Garantía Hipotecaria";
  const features = [
    "Tasa de interés competitiva del 11% anual",
    "Financiamiento hasta $50,000",
    "Encaje del 5% sobre el monto solicitado",
    "Evaluación rápida y transparente del valor de la propiedad",
    "Opción de pago anticipado sin penalización",
    "Asesoría personalizada para elegir la mejor opción de crédito",
  ];

  const requirements = [
    "Ser socio de COAC SUP LTDA.",
    "Presentar documentación de propiedad y comprobante de ingresos",
    "Historial crediticio limpio y sin morosidades",
    "Cumplir con la evaluación crediticia de la cooperativa",
  ];

  const imageSrc = "/assets/images/servicios/prestamo_hipotecario/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Listo para adquirir tu hogar? Obtén el financiamiento que necesitas con nuestro Préstamo de Consumo Especial con Garantía Hipotecaria.";
  const buttonText = "¡Solicita tu Préstamo Ahora!";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/prestamo_hipotecario/hero_back.png"
        mainText="Préstamo de Consumo Especial con Garantía Hipotecaria"
        secondaryText="Con el de Consumo Especial con Garantía Hipotecaria de COAC SUP LTDA., puedes financiar la compra de tu hogar con condiciones favorables y el respaldo de una cooperativa confiable."
        buttonText="Solicita tu Préstamo"
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
