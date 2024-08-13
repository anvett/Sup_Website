"use client";

import React from "react";


const faqData = [
  {
<<<<<<< HEAD
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
=======
    question: "¿Puedo realizar un crédito?",
    answer: "Sí, en COAC SUP LTDA. ofrecemos una amplia gama de productos crediticios para satisfacer tus necesidades financieras. Puedes solicitar un crédito cumpliendo con los requisitos establecidos.",
  },
  {
    question: "¿Hasta cuánto puedo pedir de crédito?",
    answer: "El monto máximo del crédito que puedes solicitar depende de tu capacidad de pago y la evaluación crediticia realizada por COAC SUP LTDA. Para obtener un cálculo exacto, te recomendamos visitar una de nuestras agencias.",
  },
  {
    question: "¿Cuáles son los requisitos para un crédito?",
    answer: "Los requisitos para un crédito incluyen ser socio de COAC SUP LTDA., presentar una identificación válida, comprobantes de ingresos, y cumplir con las políticas internas de evaluación crediticia.",
  },
  {
    question: "¿Cuánto de encaje necesito para un crédito?",
    answer: "El encaje requerido para un crédito puede variar dependiendo del tipo de crédito y la cantidad solicitada. Generalmente, se solicita un porcentaje del monto del crédito como encaje.",
  },
  {
    question: "¿Cuánto tiempo se demora dar un crédito?",
    answer: "El tiempo de aprobación y desembolso de un crédito puede variar, pero en COAC SUP LTDA. trabajamos para brindarte una respuesta en un plazo de 3 a 5 días hábiles una vez presentada toda la documentación requerida.",
  },
  {
    question: "¿Cuánto de puntaje mínimo en el buró debo tener para acceder al crédito?",
    answer: "El puntaje mínimo en el buró de crédito necesario para acceder a un crédito en COAC SUP LTDA. depende del tipo de crédito y la política interna de la cooperativa. Te recomendamos acercarte a una de nuestras oficinas para una evaluación personalizada.",
  },
  {
    question: "¿Sólo a socios es el crédito?",
    answer: "Sí, los créditos en COAC SUP LTDA. están disponibles exclusivamente para nuestros socios. Si aún no eres socio, te invitamos a unirte a nuestra cooperativa para acceder a nuestros productos financieros.",
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
  },
];

const FAQPage = () => {
  return (
<<<<<<< HEAD
    <section className="relative bg-dark text-center overflow-hidden">
      <div className="bg-gradient-to-br from-[#000000] to-[#717175] pt-spacing-3 py-spacing-1 sm:py-spacing-5 ">
        <h1 className="section-title text-primary">Preguntas Frecuentes</h1>
=======
    <section className="relative bg-gradient-primary text-center overflow-hidden">
      <div className="bg-gradient-primary pt-spacing-3 py-spacing-1 sm:py-spacing-5 ">
        <h1 className="section-title text-light">Preguntas Frecuentes</h1>
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
        
      
      </div>
      
<<<<<<< HEAD
      <div className="py-spacing-5 bg-dark">
=======
      <div className="py-spacing-5 bg-light">
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
        <div className="container mx-auto px-4 lg:px-0">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl text-start font-semibold text-primary">{item.question}</h3>
<<<<<<< HEAD
              <p className="text-light text-start leading-relaxed">{item.answer}</p>
=======
              <p className="text-dark text-start leading-relaxed">{item.answer}</p>
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
