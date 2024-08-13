import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

const CategoryLinksIcons = ({ title, subtitle, items }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
    return (
      <section ref={ref} className="py-spacing-6 bg-services text-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            className="section-title text-light"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.h3 
            className="font-secondary font-extrabold mb-6 text-center sm:text-size-4 text-size-3 pb-spacing-2 text-light"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="border p-4 rounded-lg shadow-lg text-center bg-light flex flex-col justify-between h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  {/* Ajustar el tamaño del ícono directamente */}
                  <div className="text-primary mb-spacing-2">{React.cloneElement(item.icon, { size: 80 })}</div>
                  <h3 className="font-secondary font-extrabold mb-6 text-center sm:text-size-4 text-size-3 pb-spacing-2 text-primary">{item.title}</h3>
                  <p className="text-dark text-size-1 font-secondary font-normal pb-spacing-3 sm:text-size-2">{item.description}</p>
                </div>
                <div className="mt-auto pb-spacing-3">
                  <Link
                    href={item.link}
                    className="inline-block main-button"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CategoryLinksIcons;
  
