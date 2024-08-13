import React from "react";

const Hero = () => {
  return (
    <div>
      <div
<<<<<<< HEAD
        className="hero min-h-screen bg-dark"
        style={{
          backgroundImage: "url('/assets/images/hero.png')",
          backgroundSize: "contain",
=======
        className="hero min-h-screen bg-light"
        style={{
          backgroundImage: "url('/assets/images/hero.jpg')",
          backgroundSize: "cover",
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
<<<<<<< HEAD
        <div className="hero-overlay bg-dark bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2x1 mx-auto px-spacing-3 py-8 sm:px-spacing-5 lg:px-spacing-3">
            <h1 className="mb-4 font-extrabold text-light text-size-6 sm:text-size-8 lg:text-size-12 font-primary pt-spacing-2 sm:pt-spacing-1">
              ¡Bienvenidos a EcuaCleaner Inc.!
            </h1>
            <h2 className="mb-4 font-extrabold text-light text-size-4 sm:text-size-5 lg:text-size-6 font-primary pt-spacing-2 sm:pt-spacing-1">
              Especialistas en Limpieza de lotes de Vehículos de Alta Calidad
            </h2>
            <h3 className="mb-4 font-extrabold text-light text-size-3 sm:text-size-4 lg:text-size-5 font-primary pt-spacing-2 pb-spacing-3 sm:pt-spacing-4">
              Comprometidos con la Excelencia
=======
        <div className="hero-overlay bg-light bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2x1 mx-auto px-spacing-3 py-8 sm:px-spacing-5 lg:px-spacing-3">
            <h1 className="mb-4 font-extrabold text-primary text-size-6 sm:text-size-8 lg:text-size-12 font-primary pt-spacing-2 sm:pt-spacing-1">
              ¡Bienvenidos a COAC SUP LTDA.!
            </h1>
            <h2 className="mb-4 font-extrabold text-primary text-size-4 sm:text-size-5 lg:text-size-6 font-primary pt-spacing-2 sm:pt-spacing-1">
              Solidaridad, Unión y Progreso
            </h2>
            <h3 className="mb-4 font-extrabold text-primary text-size-3 sm:text-size-4 lg:text-size-5 font-primary pt-spacing-2 pb-spacing-3 sm:pt-spacing-4">
              Comprometidos con el Bienestar Económico de Nuestros Socios
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
            </h3>
            <button className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom  hover:bg-accent hover:text-primary">
              <a href="/contacto">Más Información</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
