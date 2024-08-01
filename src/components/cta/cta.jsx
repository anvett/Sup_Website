

// "use client";

// import React from 'react';
// import { Canvas } from "@react-three/fiber";
// import { Cloud } from "@react-three/drei";


// const CallToAction = ({ ctaText, buttonText, buttonLink }) => {
//   return (
//     <section className="relative py-spacing-6 bg-dark text-light text-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <Canvas className="w-full h-full">
//           <Cloud opacity={0.8} speed={0.6} width={20} depth={1.9} segments={20} />
          
//         </Canvas>
//       </div>
//       <div className="relative max-w-7xl mx-auto px-4 z-10">
//         <h2 className="section-title text-primary">{ctaText}</h2>
//         <a href={buttonLink} className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom hover:bg-accent hover:text-primary">
//           {buttonText}
//         </a>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

"use client";

import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";
import { motion } from "framer-motion";

const CallToAction = ({ ctaText, buttonText, buttonLink }) => {
  return (
    <section className="relative py-spacing-8 bg-dark text-light text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas className="h-full w-full">
          <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20}  />
          
        </Canvas>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.h2
          className="section-title text-primary"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {ctaText}
        </motion.h2>
        <motion.a
          href={buttonLink}
          className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom hover:bg-accent hover:text-primary"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
