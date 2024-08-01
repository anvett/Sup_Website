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


"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Cloud, Environment } from "@react-three/drei";

const Benefits = ({ benefits, imageSrc }) => {
  return (
    <section className="relative py-spacing-6 bg-gradient-to-br from-[#000000] to-[#717175] text-center overflow-hidden  ">
      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          
          <Cloud opacity={0.5} speed={0.4} width={10} depth={1.5} segments={20} />
        </Canvas>
      </div> */}
      <div className="relative z-10 max-w-9xl mx-auto px-4 flex flex-col lg:flex-row items-center">
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
      </div>
    </section>
  );
};

export default Benefits;
