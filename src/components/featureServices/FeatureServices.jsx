

"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Cloud, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

const FeaturedServices = ({ services }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-spacing-6 bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ContactShadows position={[0, 0, 0]} opacity={0.25} width={10} height={10} blur={1} far={10} />
        </Canvas>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.h2 
          className="section-title text-light"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}  // Trigger animation when visible
          transition={{ duration: 0.5 }}
        >
          Servicios Destacados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-spacing-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary shadow-md rounded-lg p-spacing-1 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}  // Trigger animation when visible
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-spacing-14 h-spacing-14 rounded mb-4"
                />
                <h3 className="font-secondary font-bold text-size-3 text-light mb-spacing-1 text-center">
                  {service.title}
                </h3>
                <p className="font-secondary text-size-1 text-light mb-4 pb-spacing-2 text-center">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href={service.link}
                  className="inline-block bg-light text-primary font-bold px-6 py-3 rounded-full btn-custom hover:bg-dark hover:text-primary"
                >
                  Más Información
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center p-spacing-4">
          <motion.button
            className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom hover:bg-accent hover:text-primary"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}  // Trigger animation when visible
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="/servicios">Ver todos los productos y servicios</a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
