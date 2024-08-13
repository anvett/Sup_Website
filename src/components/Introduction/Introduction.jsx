

"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

export default function Introduction({ text }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-spacing-3 bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          {/* <Cloud opacity={0.8} speed={0.6} width={20} depth={1.9} segments={20} /> */}
          <Environment preset="forest" />
        </Canvas>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-spacing-4 py-spacing-4">
        <motion.h2 
          className="section-title text-light"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Sobre Nosotros
        </motion.h2>
        <motion.p 
          className="font-secondary font-bold text-light text-center sm:px-spacing-2 sm:text-center sm:text-size-4 text-size-3 lg:text-center lg:px-spacing-3"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}
