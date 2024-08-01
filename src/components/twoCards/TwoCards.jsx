import React from "react";
import Link from "next/link";

const TwoCards = () => {
  return (
    <section className="py-spacing-6 bg-dark text-dark">
      <h1 className="text-primary font-bold text-size-7 font-primary mb-spacing-3 text-center">Nuestros Productos</h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="card bg-primary p-6 rounded-lg shadow-lg text-center">
          <h2 className="h1-custom mb-spacing-2">Asesorías</h2>
          <Link
            href="/asesorias"
            className="bg-accent text-primary font-secondary font-semibold px-spacing-2 py-spacing-1 rounded-full btn-custom hover:bg-secondary hover:text-primary"
          >
            Ver Asesorías
          </Link>
        </div>
        <div className="card bg-primary p-6 rounded-lg shadow-lg text-center">
          <h2 className="h1-custom mb-spacing-2">Cursos</h2>
          <Link
            href="/cursos"
            className="bg-accent text-primary font-secondary font-semibold px-spacing-2 py-spacing-1 rounded-full btn-custom hover:bg-secondary hover:text-primary"
          >
            Ver Cursos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TwoCards;
