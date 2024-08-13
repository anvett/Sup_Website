"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Cloud, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

const Benefits = ({ benefitsTitle, benefits, imageSrc }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-spacing-6 bg-light text-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} />
        </Canvas>
      </div> */}
      <div className="relative z-10 max-w-9xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pl-spacing-5"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-primary text-center lg:text-center">
            {benefitsTitle}
          </h2>
          <ul className="list-none list-inside space-y-4 sm:list-disc">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="font-secondary font-bold text-primary text-size-2 lg:text-size-3 text-center lg:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:pl-spacing-5"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src={imageSrc}
            alt="Beneficios de COAC SUP LTDA."
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
