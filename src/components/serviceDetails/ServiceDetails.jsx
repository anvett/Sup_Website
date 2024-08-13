"use client";

import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ServiceDetails = ({ title, features, requirements, ctaText, imageSrc }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="flex flex-col items-center py-spacing-6 bg-gradient-primary text-dark overflow-hidden">
      <div className="max-w-7xl w-4/5 mx-auto text-center">
        {/* Título del Servicio */}
        <motion.h1
          className="section-title text-light"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>

        {/* Características Clave */}
        <motion.div
          className="mt-spacing-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-secondary font-extrabold text-size-4 sm:text-size-6 mb-spacing-2 text-light">Características Clave</h2>
          <ul className="list-disc list-inside text-size-2 text-justify mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="mb-spacing-1 font-primary text-size-1 sm:text-size-2">{feature}</li>
            ))}
          </ul>
        </motion.div>

        {/* Condiciones y Requisitos */}
        <motion.div
          className="mt-spacing-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-secondary font-extrabold text-size-4 sm:text-size-6 mb-spacing-2 text-light">Condiciones y Requisitos</h2>
          <ul className="list-disc list-inside text-size-2 text-justify mx-auto">
            {requirements.map((requirement, index) => (
              <li key={index} className="mb-spacing-1 font-primary text-size-1 sm:text-size-2">{requirement}</li>
            ))}
          </ul>
        </motion.div>


        {/* Imagen en la parte inferior */}
        <motion.div
          className="mt-spacing-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={imageSrc} alt={`${title} imagen`} className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
