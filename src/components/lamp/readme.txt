LampDemo Componente
El componente LampDemo es el componente principal que renderiza un encabezado animado utilizando framer-motion y está contenido dentro del componente LampContainer.

Importaciones
jsx
Copiar código
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
Función del Componente
jsx
Copiar código
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}
Descripción
motion.h1: Utiliza framer-motion para animar el encabezado h1.
Props:
initial: Define el estado inicial de la animación.
whileInView: Define el estado final de la animación cuando el elemento está en vista.
transition: Define las propiedades de la transición de la animación.
Clases:
bg-gradient-to-br: Aplica un gradiente al texto.
text-4xl, sm:text-5xl, md:text-6xl, lg:text-7xl: Ajusta el tamaño del texto de manera responsiva.
LampContainer Componente
El componente LampContainer actúa como un contenedor para LampDemo y maneja la estructura y el fondo del componente.

Props
children: Contenido hijo a ser renderizado dentro del contenedor.
className: Clases adicionales para personalizar el estilo del contenedor.
Función del Componente
jsx
Copiar código
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[15rem] sm:w-[30rem] md:w-[45rem] lg:w-[60rem] bg-gradient-conic from-pink-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[15rem] sm:w-[30rem] md:w-[45rem] lg:w-[60rem] bg-gradient-conic from-transparent via-transparent to-pink-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[14rem] sm:w-[28rem] -translate-y-1/2 rounded-full bg-pink-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8em" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-32 sm:w-64 -translate-y-[6rem] rounded-full bg-pink-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[20rem] sm:w-[40rem] -translate-y-[7rem] bg-light "
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
Descripción
Props:

children: Contenido que se renderizará dentro del contenedor.
className: Clases adicionales para el contenedor.
Clases:

relative, flex, min-h-screen, flex-col, items-center, justify-center, overflow-hidden, bg-black, w-full, rounded-md, z-0: Estas clases aseguran que el contenedor ocupe toda la pantalla, esté centrado y tenga un fondo negro.
sm:, md:, lg:: Clases responsivas de Tailwind CSS para ajustar el tamaño en diferentes pantallas.
Animaciones con framer-motion:

Varias divs y elementos utilizan motion.div para aplicar animaciones cuando el elemento está en vista.
Las animaciones están configuradas para cambiar la opacidad y el ancho con un retraso y una duración específicos.
Conclusión
Este componente está diseñado para ser responsivo, asegurando que la animación y el contenido se adapten a diferentes tamaños de pantalla mientras mantienen un fondo negro. Utiliza framer-motion para animaciones suaves y Tailwind CSS para la estilización y la responsividad.