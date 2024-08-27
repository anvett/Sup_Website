import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function PrestamosEspeciales() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Beneficios de los Préstamos Especiales";

  const benefitsList = [
    "Soluciones personalizadas para necesidades específicas",
    "Tasas de interés preferenciales y flexibles",
    "Montos ajustados según el requerimiento particular",
    "Proceso de aprobación rápido y confidencial",
    "Asesoría financiera especializada para cada situación",
    "Posibilidad de refinanciamiento y condiciones especiales",
  ];

  const imageSource = "/assets/images/servicios/prestamos_especiales/benefits.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles Claves sobre los Préstamos Especiales";
  const features = [
    "Tasa de interés adaptable a la situación del socio",
    "Montos desde $5,000 hasta $150,000 según la necesidad",
    "Plazos flexibles de hasta 10 años",
    "Evaluación rápida y adaptada a casos especiales",
    "Condiciones personalizadas para cada tipo de préstamo",
    "Asesoría continua y confidencial durante todo el proceso",
  ];

  const requirements = [
    "Ser socio de COAC SUP LTDA.",
    "Presentar identificación, comprobante de ingresos, y justificar la necesidad del préstamo",
    "Historial crediticio en buen estado",
    "Cumplir con la evaluación crediticia especial de la cooperativa",
  ];

  const imageSrc = "/assets/images/servicios/prestamos_especiales/details.png";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Tienes una necesidad específica? Nuestros Préstamos Especiales están diseñados para ayudarte.";
  const buttonText = "Solicita tu Préstamo Especial";
  const buttonLink = "/solicitar-prestamos-especiales";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/prestamos_especiales/hero_back.png"
        mainText="Préstamos Especiales"
        secondaryText="Con los Préstamos Especiales de COAC SUP LTDA., puedes acceder a soluciones financieras diseñadas a medida para cubrir necesidades específicas con condiciones favorables."
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
