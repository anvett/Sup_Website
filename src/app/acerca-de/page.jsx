import React from "react";
import Image from "next/image";
import ClientLogos from "@/components/clientLogos/ClientLogos";

export default function AcercaDe() {
  return (
    <section className="relative  bg-light text-center overflow-hidden  ">
      {/* Sección de presentación */}
      {/* <div className="hero bg-gradient-primary min-h-[75vh] ">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/assets/images/logo.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="section-title text-light">Acerca de Nosotros</h1>
            <p className="p-custom">
              En la Cooperativa de Ahorro y Crédito SUP, estamos comprometidos en proporcionar
              servicios financieros de calidad que fortalezcan el bienestar económico de nuestros
              socios y la comunidad en general. Nos esforzamos por ofrecer soluciones financieras
              innovadoras y personalizadas que se adapten a las necesidades de cada uno de nuestros
              miembros.
            </p>
          </div>
        </div>
      </div> */}
      <div className="hero bg-gradient-primary min-h-[75vh] flex items-center justify-center">
        <div className="hero-content flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <Image
              src="/assets/images/logo.png"
              alt="Logo COAC SUP"
              width={300}
              height={300}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 lg:ml-6">
            <h1 className="section-title text-light mb-4">Acerca de Nosotros</h1>
            <p className="p-custom">
              En la Cooperativa de Ahorro y Crédito SUP, estamos comprometidos en proporcionar
              servicios financieros de calidad que fortalezcan el bienestar económico de nuestros
              socios y la comunidad en general. Nos esforzamos por ofrecer soluciones financieras
              innovadoras y personalizadas que se adapten a las necesidades de cada uno de nuestros
              miembros.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Historia */}
      <div className="pt-spacing-2 sm:pt-spacing-3">
        <h2 className="section-subtitle pb-spacing-2 sm:pb-spacing-3 text-primary">Historia</h2>
        <p className="p-custom px-spacing-3 sm:px-spacing-14 text-justify">
          La Cooperativa de Ahorro y Crédito SUP fue fundada en 1985 con la visión de crear una
          institución financiera que apoye el desarrollo económico de sus socios. Con más de 35 años
          de trayectoria, hemos crecido hasta convertirnos en una de las principales cooperativas de
          ahorro y crédito en la región, ofreciendo una amplia gama de productos financieros que
          incluyen créditos, ahorros e inversiones. Nuestra historia es un testimonio de nuestro
          compromiso con la comunidad y nuestro enfoque en brindar un servicio confiable y
          accesible.
        </p>
      </div>

      {/* Sección de Valores */}
      <div className="hero  min-h-[75vh] pt-spacing-1 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/assets/images/benefits/valores.jpg"
            className="rounded-lg shadow-lg"
            width={500}
            height={300}
          />
          <div className=" px-spacing-3 pb-spacing-2 sm:pb-spacing-3 text-primary">
            <h1 className="section-subtitle pb-spacing-2 sm:pb-spacing-3">Valores</h1>
            <ul className="list-none list-inside space-y-4 sm:list-disc">
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Integridad y Transparencia
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Compromiso con la Comunidad
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Innovación Financiera
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Solidaridad y Cooperación
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Responsabilidad Social
              </li>
              <li className="font-secondary font-bold text-dark text-size-2 lg:text-size-3 text-center lg:text-left">
                Orientación al Cliente
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección del Equipo */}
      <div className="py-spacing-3 bg-gradient-primary flex flex-col items-center justify-center">
        <h2 className="section-subtitle text-light text-center">Nuestro Equipo</h2>
        <div className="flex flex-col lg:flex-col items-center w-full lg:w-3/4 gap-5">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <p className="p-custom text-center lg:text-center ">
              Nuestro equipo está compuesto por profesionales apasionados y dedicados a proporcionar
              el mejor servicio financiero. Nos esforzamos por mantener un entorno laboral positivo
              y en constante aprendizaje, para que cada miembro de nuestro equipo esté preparado
              para ofrecer soluciones que beneficien a nuestros socios.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/images/team/work_team.jpg"
              alt="Equipo de COAC SUP"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
