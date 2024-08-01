import React from "react";

const PaymentMethods = ({ methods }) => {
  return (
    <section className="py-spacing-2 bg-accent">
      <div className="max-w-7xl mx-auto px-spacing-3 sm:px-spacing-10">
        <h2 className="font-primary text-size-3 text-dark mb-spacing-1 text-start  sm:text-size-4">Formas de Pago</h2>
        <div className="flex justify-center space-x-4">
          {methods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src={method.logo}
                alt={method.name}
                className="h-spacing-3 w-spacing-3 rounded  lg:w-spacing-3 lg:h-spacing-3"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
