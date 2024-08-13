ServiceDetails Component
The ServiceDetails component is designed to present the key details, features, and requirements of a specific service offered by the COAC SUP LTDA. It is centered, responsive, and includes a call to action (CTA) with an optional image at the bottom.

Props
title: string (required)

The main title of the service, typically the name of the service.
Example: "Crédito de Consumo Ordinario"
features: array of strings (required)

An array containing the key features of the service. Each feature is displayed as a bullet point.
Example:
javascript
Copiar código
[
  "Tasa de interés competitiva del 12% anual",
  "Plazos flexibles de hasta 5 años",
  "Montos desde $500 hasta $50,000",
  "Proceso de aprobación rápido y sencillo",
  "Sin necesidad de justificar el destino de los fondos",
  "Disponibilidad inmediata de los fondos tras la aprobación"
]
requirements: array of strings (required)

An array listing the conditions and requirements necessary to access the service. Each requirement is displayed as a bullet point.
Example:
javascript
Copiar código
[
  "Ser socio de COAC SUP LTDA.",
  "Presentar identificación y comprobante de ingresos",
  "Tener un buen historial crediticio con un puntaje mínimo de 700",
  "No tener deudas pendientes con la cooperativa"
]
ctaText: string (required)

The text for the Call to Action (CTA) button. This typically encourages the user to take the next step, such as applying for the service.
Example: "Solicita tu Crédito"
imageSrc: string (required)

The source path of the image that will be displayed at the bottom of the component. The image should be relevant to the service.
Example: "/assets/images/servicios/credito_consumo_ordinario/cta_image.png"
Usage
javascript
Copiar código
import React from "react";
import ServiceDetails from "../components/ServiceDetails";

export default function CreditoConsumoOrdinario() {
  const title = "Crédito de Consumo Ordinario";
  const features = [
    "Tasa de interés competitiva del 12% anual",
    "Plazos flexibles de hasta 5 años",
    "Montos desde $500 hasta $50,000",
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

  const ctaText = "Solicita tu Crédito";
  const imageSrc = "/assets/images/servicios/credito_consumo_ordinario/cta_image.png";

  return (
    <ServiceDetails
      title={title}
      features={features}
      requirements={requirements}
      ctaText={ctaText}
      imageSrc={imageSrc}
    />
  );
}
Component Structure
Title Section:

Displays the service title using a large, prominent font. The title fades in with an animation as the section enters the viewport.
Features Section:

Displays a list of key features for the service. Each feature is animated to appear in sequence as the section becomes visible.
Requirements Section:

Lists the conditions and requirements necessary to access the service. Like the features, these are animated to fade in sequentially.
Call to Action (CTA):

A prominent button that prompts the user to take action, such as applying for the service. This button is animated to appear after the features and requirements.
Image Section:

An image is displayed at the bottom of the component, related to the service. The image is centered and adjusts to the width of the component.
Styling and Responsiveness
The component is centered on the page and takes up 80% of the width (w-4/5).
The design is fully responsive, ensuring it looks good on all devices.
The component uses Tailwind CSS for styling, adhering to the style conventions used across the site.
Animation
The component uses framer-motion for animations, making the elements appear smoothly as they enter the viewport.
The useIntersectionObserver hook is used to trigger the animations only when the component is visible on the screen.
Best Practices
Ensure the features and requirements arrays contain concise and relevant information for the service.
The image used in imageSrc should be high quality and relevant to the service to enhance visual appeal.
Customize the ctaText to fit the action you want users to take, ensuring it is clear and compelling.
