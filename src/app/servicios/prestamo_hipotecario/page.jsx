import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function PrestamoHipotecario() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Beneficios del Préstamo Hipotecario";

  const benefitsList = [
    "Tasas de interés competitivas y a largo plazo",
    "Plazos extendidos de hasta 20 años",
    "Financiamiento de hasta el 80% del valor de la propiedad",
    "Asesoría especializada durante todo el proceso",
    "Opción de pagos anticipados sin penalización",
    "Facilidad en la aprobación con requisitos accesibles",
  ];

  const imageSource = "/assets/images/servicios/prestamo_hipotecario/benefits.jpg";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Información Esencial sobre el Préstamo Hipotecario";
  const features = [
    "Tasa de interés fija o variable según tu preferencia",
    "Plazos de hasta 20 años para mayor comodidad",
    "Financiamiento desde $20,000 hasta $300,000",
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

  const ctaText = "¿Listo para adquirir tu hogar? Obtén el financiamiento que necesitas con nuestro Préstamo Hipotecario.";
  const buttonText = "Solicita tu Préstamo Hipotecario";
  const buttonLink = "/solicitar-prestamo-hipotecario";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/prestamo_hipotecario/hero_back.png"
        mainText="Préstamo Hipotecario"
        secondaryText="Con el Préstamo Hipotecario de COAC SUP LTDA., puedes financiar la compra de tu hogar con condiciones favorables y el respaldo de una cooperativa confiable."
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
