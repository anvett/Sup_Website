

"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, Environment } from "@react-three/drei";

export default function Introduction({ text }) {
  return (
    <section className="relative py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full">
          <Cloud opacity={0.8} speed={0.6} width={20} depth={1.9} segments={20} />
          {/* <Environment preset="forest" /> */}
        </Canvas>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-spacing-4 py-spacing-4">
        <h2 className="section-title text-primary">
          Sobre Nosotros
        </h2>
        <p className="font-secondary font-bold text-light text-center sm:px-spacing-2 sm:text-center sm:text-size-4 text-size-3 lg:text-center lg:px-spacing-3">
          {text}
        </p>
      </div>
    </section>
  );
}
