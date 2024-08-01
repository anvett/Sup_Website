import React from "react";

export default function PoliticasDePrivacidad() {
  return (
    <main>
      <section className="relative pb-spacing-4 px-spacing-4 sm:px-spacing-28 bg-dark text-justify overflow-hidden">
        <h1 className="py-spacing-3 section-title-legal text-primary">Políticas de Privacidad</h1>
        <p className="p-custom-legal">
          En EcuaCleaner, nos comprometemos a proteger su privacidad. Esta política de privacidad describe
          cómo recopilamos, usamos y compartimos su información personal.
        </p>

        <h2 className="pt-spacing-1 section-subtitle-legal">Información que Recopilamos</h2>
        <p className="p-custom-legal">
          Recopilamos información que usted nos proporciona directamente, como su nombre, dirección de
          correo electrónico, número de teléfono y otros datos de contacto cuando se registra en
          nuestro sitio web, se suscribe a nuestros servicios o se comunica con nosotros.
        </p>

        <h2 className="pt-spacing-1 section-subtitle-legal">Uso de la Información</h2>
        <p className="p-custom-legal">Utilizamos la información recopilada para:</p>
        <ul className="list-disc list-inside mb-4 p-custom-legal">
          <li>Proveer, operar y mantener nuestros servicios</li>
          <li>Mejorar, personalizar y expandir nuestros servicios</li>
          <li>Comprender y analizar cómo utiliza nuestro sitio web</li>
          <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
          <li>Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios</li>
          <li>Para enviarle correos electrónicos</li>
          <li>Encontrar y prevenir el fraude</li>
        </ul>

        <h2 className="pt-spacing-1 section-subtitle-legal">Compartir Información</h2>
        <p className="p-custom-legal">
          No compartimos su información personal con terceros, excepto en las siguientes
          circunstancias:
        </p>
        <ul className="list-disc list-inside mb-4 p-custom-legal">
          <li>Con su consentimiento</li>
          <li>Para cumplir con leyes y regulaciones</li>
          <li>Para proteger nuestros derechos y propiedad</li>
          <li>Para investigar fraudes o problemas de seguridad</li>
        </ul>

        <h2 className="pt-spacing-1 section-subtitle-legal">Seguridad de la Información</h2>
        <p className="p-custom-legal">
          Tomamos medidas razonables para proteger su información personal contra pérdida, robo, uso
          indebido y acceso no autorizado, divulgación, alteración y destrucción.
        </p>

        <h2 className="pt-spacing-1 section-subtitle-legal">Cambios en esta Política de Privacidad</h2>
        <p className="p-custom-legal">
          Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en
          nuestras prácticas o por otras razones operativas, legales o reglamentarias.
        </p>

        <h2 className="pt-spacing-1 section-subtitle-legal">Contacto</h2>
        <p className="p-custom-legal pb-spacing-3">
          Si tiene preguntas o inquietudes sobre nuestra política de privacidad, contáctenos a través
          de:
        </p>
        <p className="p-custom-legal pb-spacing-3">
          Email:{" "}
          <a href="mailto:info@ecuacleaner.com" className="text-accent hover:underline">
            info@ecuacleaner.com
          </a>
          
        </p>
      </section>
    </main>
  );
}
