"use client";

import { Stars, Cloud, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";


const COLORS_TOP = ["#BE2A72", "#C2C3C8", "#000000"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl pb-spacing-3 bg-gradient-to-br from-primary to-primary bg-clip-text font-extrabold font-primary text-center  text-size-6  leading-tight text-transparent sm:text-size-8 sm:leading-tight md:text-size-10 md:leading-tight">
          Sobre Nosotros
        </h1>
        <p className="my-6 pb-spacing-3 max-w-3xl text-center text-base text-light font-secondary font-bold leading-relaxed sm:text-size-4 text-size-3 md:leading-relaxed">
          En EcuaCleaner, nos especializamos en proporcionar servicios de limpieza de vehículos de
          alta calidad, garantizando la satisfacción del cliente a través de un servicio eficiente y
          amigable con el medio ambiente.
        </p>
        {/* <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-primary transition-colors hover:bg-gray-950/50"
        >
          Más información
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button> */}
        
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          {/* <Stars radius={50} count={2500} factor={4} fade speed={2} /> */}
          <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} />
          
        </Canvas>
      </div>
    </motion.section>
  );
};
