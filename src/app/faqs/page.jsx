"use client";

import React from "react";


const faqData = [
  {
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
  },
];

const FAQPage = () => {
  return (
    <section className="relative bg-gradient-primary text-center overflow-hidden">
      <div className="bg-gradient-primary pt-spacing-3 py-spacing-1 sm:py-spacing-5 ">
        <h1 className="section-title text-light">Preguntas Frecuentes</h1>
        
      
      </div>
      
      <div className="py-spacing-5 bg-light">
        <div className="container mx-auto px-4 lg:px-0">
          {faqData.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl text-start font-semibold text-primary">{item.question}</h3>
              <p className="text-dark text-start leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
