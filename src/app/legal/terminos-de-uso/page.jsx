import React from "react";

export default function TerminosDeUso() {
  return (
    <main>
      <section className="relative pb-spacing-4 px-spacing-4 sm:px-spacing-28 bg-dark text-justify overflow-hidden">
        <h1 className="py-spacing-3 section-title-legal text-primary">Términos de Uso</h1>
        <p className="p-custom-legal">
          Bienvenido a EcuaCleaner. Al utilizar nuestro sitio web, usted acepta cumplir con los siguientes
          términos y condiciones de uso.
        </p>

        <h2 className="pt-spacing-2 section-subtitle-legal">Uso del Sitio Web</h2>
        <p className="p-custom-legal">
          Usted se compromete a utilizar nuestro sitio web solo con fines legales y de una manera que
          no infrinja los derechos de, ni restrinja o inhiba el uso y disfrute de este sitio web por
          parte de cualquier tercero.
        </p>

        <h2 className="pt-spacing-2 section-subtitle-legal">Propiedad Intelectual</h2>
        <p className="p-custom-legal">
          Todo el contenido presente en este sitio web, incluidos textos, gráficos, logotipos, iconos,
          imágenes, clips de audio y software, es propiedad de EcuaCleaner o de sus proveedores de
          contenido y está protegido por las leyes de derechos de autor internacionales.
        </p>

        <h2 className="pt-spacing-2 section-subtitle-legal">Política de Privacidad</h2>
        <p className="p-custom-legal">
          Su privacidad es muy importante para nosotros. Nuestra política de privacidad explica cómo
          recopilamos, utilizamos y protegemos su información personal.
        </p>

        <h2 className="pt-spacing-2 section-subtitle-legal">Limitación de Responsabilidad</h2>
        <p className="p-custom-legal">
          En la medida permitida por la ley, EcuaCleaner no será responsable de ninguna pérdida o daño
          directo, indirecto, incidental, consecuente o punitivo que surja de su acceso o uso de este
          sitio web.
        </p>

        <h2 className="pt-spacing-2 section-subtitle-legal">Enlaces a Otros Sitios Web</h2>
        <p className="p-custom-legal">
          Nuestro sitio web puede contener enlaces a sitios web de terceros que no son operados por
          nosotros. No tenemos control sobre el contenido y las prácticas de estos sitios y no
          asumimos ninguna responsabilidad por sus políticas de privacidad.
        </p>

        <h2 className="pt-spacing-2 section-subtitle-legal">Cambios en los Términos de Uso</h2>
        <p className="p-custom-legal">
          Nos reservamos el derecho de modificar estos términos de uso en cualquier momento. Le
          notificaremos de cualquier cambio publicando los nuevos términos en nuestro sitio web.
        </p>

        <h2 className="pt-spacing-2 section-subtitle-legal">Contacto</h2>
        <p className="p-custom-legal pb-spacing-3">
          Si tiene alguna pregunta sobre estos términos de uso, contáctenos a través de:
        </p>
        <p className="p-custom-legal ">
          Email:{" "}
          <a href="mailto:info@ecuacleaner.com" className="text-accent hover:underline">
            info@ecuacleaner.com
          </a>
        </p>
      </section>
    </main>
  );
}
