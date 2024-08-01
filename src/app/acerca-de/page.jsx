import React from "react";
import Image from "next/image";
import ClientLogos from "@/components/clientLogos/ClientLogos";

export default function AcercaDe() {
  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <div className="hero bg-dark min-h-[75vh] ">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/assets/images/logo.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="section-title text-primary">Acerca de Nosotros</h1>
            <p className="p-custom">
              En ECUACLEANER INC estamos enfocados en dar lo mejor a nuestros clientes, buscando su
              satisfacción al proveer un excelente servicio de alta calidad. También damos
              capacitación a nuestros empleados para que puedan dar lo mejor de sí mismos y crear
              una buena armonía laboral.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="section-subtitle">Historia</h2>
        <p className="p-custom px-spacing-3 sm:px-spacing-14 text-justify">
          Ecuacleaner comenzó en 2012, ofreciendo servicios de lavado de lotes de autos en el sur de
          Florida. Con el tiempo, expandimos nuestros servicios a concesionarios reconocidos como
          Land Rover, Mercedes Benz, Ford, BMW, entre otros. Ampliamos nuestros servicios para
          incluir limpieza de autos en general, limpieza de pisos , y limpieza de interiores y
          exteriores en casas y edificios. Actualmente, trabajamos con más de 15 concesionarios,
          siempre buscando la satisfacción del cliente y la expansión.
        </p>
      </div>

      <div className="hero  min-h-[75vh] pt-spacing-3 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/assets/images/benefits/benefits.png"
            className="max-w-sm rounded-lg  shadow-2xl"
          />
          <div className="px-spacing-3">
            <h1 className="section-subtitle">Valores</h1>
            <ul className="list-none list-inside space-y-4 sm:list-disc">
              <li className="font-secondary font-bold text-light text-size-2 lg:text-size-3 text-center lg:text-left">
                Humildad
              </li>
              <li className="font-secondary font-bold text-light text-size-2 lg:text-size-3 text-center lg:text-left">
                Voluntad y liderazgo
              </li>
              <li className="font-secondary font-bold text-light text-size-2 lg:text-size-3 text-center lg:text-left">
                Empatía y conciencia
              </li>
              <li className="font-secondary font-bold text-light text-size-2 lg:text-size-3 text-center lg:text-left">
                Entusiasmo
              </li>
              <li className="font-secondary font-bold text-light text-size-2 lg:text-size-3 text-center lg:text-left">
                Deseo permanente de renovación
              </li>
              <li className="font-secondary font-bold text-light text-size-2 lg:text-size-3 text-center lg:text-left">
                Aceptar y delegar responsabilidades
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175] flex flex-col items-center justify-center">
        <h2 className="section-subtitle text-center">Nuestro Equipo</h2>
        <div className="flex flex-col lg:flex-col items-center w-full lg:w-3/4 gap-5">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <p className="p-custom text-center lg:text-center ">
              Nuestro equipo está formado por profesionales dedicados y apasionados que se esfuerzan
              por ofrecer el mejor servicio posible. Cada miembro del equipo recibe capacitación
              continua para asegurarse de que estén actualizados con las últimas técnicas y
              tecnologías de limpieza.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/images/team/work_team.png"
              alt="Equipo de Ecuacleaner"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <ClientLogos />
    </section>
  );
}
