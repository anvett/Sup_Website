"use client";

import React from "react";


const faqData = [
  {
    question: "¿Qué incluye el servicio de limpieza de camiones?",
    answer: "Nuestro servicio de limpieza de camiones incluye una limpieza profunda de la cabina y el exterior del vehículo, utilizando productos ecológicos y técnicas avanzadas para asegurar una limpieza completa y segura.",
  },
  {
    question: "¿Cómo funciona el servicio de lavado de autos?",
    answer: "El servicio de lavado de autos de EcuaCleaner utiliza equipos y productos de alta calidad para asegurar que tu vehículo quede impecable. Ofrecemos servicios a domicilio para tu comodidad.",
  },
  {
    question: "¿Qué implica el servicio de detallado completo?",
    answer: "El servicio de detallado completo incluye una limpieza exhaustiva del interior y exterior del vehículo, así como la eliminación de manchas y la restauración de superficies.",
  },
  {
    question: "¿En qué consiste el sellado de pintura de cuero?",
    answer: "El sellado de pintura de cuero protege la pintura del vehículo, asegurando un acabado duradero y brillante. Utilizamos productos de alta calidad para garantizar la mejor protección.",
  },
  {
    question: "¿Qué servicios ofrecen para la limpieza de edificios?",
    answer: "Ofrecemos servicios de limpieza profunda para edificios, utilizando productos ecológicos y técnicas avanzadas para garantizar un entorno limpio y saludable.",
  },
  {
    question: "¿Cómo se realiza la limpieza de pisos?",
    answer: "La limpieza de pisos de EcuaCleaner incluye la eliminación de manchas y suciedad, utilizando productos seguros y técnicas avanzadas para asegurar un acabado impecable.",
  },
  {
    question: "¿Qué beneficios tiene la limpieza de lotes de autos?",
    answer: "La limpieza de lotes de autos mejora la presentación de los vehículos, asegurando que estén limpios y relucientes para los clientes. Utilizamos productos y técnicas avanzadas para lograr los mejores resultados.",
  },
  {
    question: "¿Cómo funciona la remoción de olores?",
    answer: "Nuestro servicio de remoción de olores elimina olores desagradables del vehículo, utilizando productos seguros y técnicas avanzadas para garantizar un ambiente fresco y limpio.",
  },
  {
    question: "¿Qué incluye la corrección de pintura?",
    answer: "La corrección de pintura incluye la eliminación de rayones y defectos en la pintura del vehículo, utilizando técnicas avanzadas y productos de alta calidad para restaurar el acabado original.",
  },
  {
    question: "¿Cómo se realiza la remoción de tinta?",
    answer: "La remoción de tinta elimina manchas de tinta sin dañar la superficie del vehículo, utilizando productos seguros y técnicas avanzadas para garantizar una limpieza completa.",
  },
];

const FAQPage = () => {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <div className="bg-gradient-to-br from-[#000000] to-[#717175] pt-spacing-3 py-spacing-1 sm:py-spacing-5 ">
        <h1 className="section-title text-primary">Preguntas Frecuentes</h1>
        
      
      </div>
      
      <div className="py-spacing-5 bg-dark">
        <div className="container mx-auto px-4 lg:px-0">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl text-start font-semibold text-primary">{item.question}</h3>
              <p className="text-light text-start leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
