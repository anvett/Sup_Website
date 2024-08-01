"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroImgText({ imageSrc, mainText, secondaryText }) {
  return (
    
    <motion.div
      className="hero bg-gradient-to-br from-[#000000] to-[#717175] min-h-[75vh]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-center px-4 lg:px-0">
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <motion.img
            src={imageSrc}
            className="max-w-xs sm:max-w-sm lg:max-w-sm rounded-lg shadow-2xl mb-3 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-left lg:text-left lg:ml-6 pt-spacing-2"
        >
          <h1 className="section-title text-primary pb-spacing-3">{mainText}</h1>
          <ul className="service-items list-inside pl-5">
            {secondaryText.map((item, index) => (
              <li key={index} className="text-light leading-relaxed pb-spacing-1">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
