import React from "react";
import HeroImgBackg from "../../../components/heroImgBackg/HeroImgBackg";
import Benefits from "@/components/beneficts/beneficts";
import ServiceDetails from "@/components/serviceDetails/ServiceDetails";
import CallToAction from "@/components/cta/cta";

export default function PrestamoPrendario() {

  //----------------------------------------------
  // Benefits Section
  //----------------------------------------------

  const benefitsTitle = "Beneficios del Préstamo Especial Prendario";

  const benefitsList = [
    "Acceso a créditos rápidos con garantía prendaria",
    "Tasas de interés competitivas y fijas",
    "Montos de préstamo acordes al valor de la prenda",
    "Proceso de evaluación y aprobación ágil",
    "Opción de recuperación de la prenda una vez cancelado el préstamo",
    "Facilidad de acceso con requisitos mínimos",
  ];

  const imageSource = "/assets/images/servicios/prestamo_prendario/benefits.png";

  //----------------------------------------------
  // Service Details
  //----------------------------------------------

  const title = "Detalles del Préstamo Especial Prendario";
  const features = [
    "Tasa de interés competitiva del 13% anual",
    "Montos hasta $30,000 según el valor de la prenda",
    "Plazos de hasta 60 meses con posibilidad de renovación",
    "Encaje del 5% sobre el monto solicitado",
    "Proceso de aprobación rápido basado en la evaluación de la prenda",
    "Opción de recuperar la prenda al finalizar el préstamo",
    "Asesoría personalizada durante el proceso de evaluación",
  ];

  const requirements = [
    "Ser socio de COAC SUP LTDA.",
    "Presentar la prenda como garantía y comprobante de ingresos",
    "Historial crediticio limpio y sin morosidades",
    "Cumplir con la evaluación crediticia de la cooperativa",
  ];

  const imageSrc = "/assets/images/servicios/prestamo_prendario/details.jpg";

  //----------------------------------------------
  // CTA Section
  //----------------------------------------------

  const ctaText = "¿Necesitas liquidez rápida? Obtén un préstamo con garantía prendaria de forma ágil y segura.";
  const buttonText = "Solicita tu Préstamo Prendario";
  const buttonLink = "/contacto";

  //----------------------------------------------

  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/prestamo_prendario/hero_back.png"
        mainText="Préstamo Especial Prendario"
        secondaryText="El Préstamo Especial Prendario de COAC SUP LTDA. te permite acceder a crédito de manera rápida y segura, utilizando bienes como garantía."
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
