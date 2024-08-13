<<<<<<< HEAD
// "use client";

// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Stars, Cloud, Environment } from "@react-three/drei";

// const Benefits = ({ benefits, imageSrc }) => {
//   return (
//     <section className="py-spacing-6 bg-dark text-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <Canvas>
//           <Stars radius={50} count={2500} factor={4} fade speed={2} />
//           {/* <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} /> */}
//         </Canvas>
//       </div>
//       <div className="max-w-9xl mx-auto px-4 flex flex-col lg:flex-row items-center">
//         <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pl-spacing-5">
//           <h2 className="section-title text-primary text-center lg:text-left">
//             Beneficios de Contratarnos
//           </h2>
//           <ul className="list-none list-inside space-y-4 sm:list-disc">
//             {benefits.map((benefit, index) => (
//               <li
//                 key={index}
//                 className="font-secondary font-bold text-size-2 lg:text-size-3 text-center lg:text-left"
//               >
//                 {benefit}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="w-full lg:w-1/2 flex justify-center lg:pl-spacing-5">
//           <img
//             src={imageSrc}
//             alt="Beneficios de EcuaCleaner"
//             className="rounded-lg shadow-lg max-w-full h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;


=======
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Cloud, Environment } from "@react-three/drei";
<<<<<<< HEAD

const Benefits = ({ benefits, imageSrc }) => {
  return (
    <section className="relative py-spacing-6 bg-gradient-to-br from-[#000000] to-[#717175] text-center overflow-hidden  ">
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          
=======
import { motion } from "framer-motion";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

const Benefits = ({ benefitsTitle, benefits, imageSrc }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-spacing-6 bg-light text-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
          <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} />
        </Canvas>
      </div> */}
      <div className="relative z-10 max-w-9xl mx-auto px-4 flex flex-col lg:flex-row items-center">
<<<<<<< HEAD
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pl-spacing-5">
          <h2 className="section-title text-primary text-center lg:text-left">
            Beneficios de Contratarnos
          </h2>
          <ul className="list-none list-inside space-y-4 sm:list-disc">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="font-secondary font-bold text-light text-size-2 lg:text-size-3 text-center lg:text-left"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:pl-spacing-5">
          <img
            src={imageSrc}
            alt="Beneficios de EcuaCleaner"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
=======
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
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
      </div>
    </section>
  );
};

export default Benefits;
<<<<<<< HEAD
=======

>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
