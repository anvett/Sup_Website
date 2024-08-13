import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-light"
        style={{
          backgroundImage: "url('/assets/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
