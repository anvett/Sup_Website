import React from 'react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="section-title text-primary">Testimonios</h2>
        <div className="carousel w-full">
          {testimonials.map((testimonial, index) => (
            <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
              <div className="card card-side bg-dark shadow-md rounded-lg mx-auto max-w-4xl md:h-spacing-12 sm:h-spacing-18 flex flex-col md:flex-row">
                <figure className="w-full md:w-1/3 flex justify-center items-center p-4 md:pl-6">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-spacing-8 h-spacing-8 mt-spacing-4 rounded-custom-20 md:mt-1 sm:mt-spacing-3 sm:w-spacing-10 sm:h-spacing-10" />
                </figure>
                <div className="card-body md:text-left sm:text-center w-full md:w-2/3 flex flex-col justify-center p-spacing-1 md:p-spacing-3">
                  <h3 className="font-secondary font-semibold text-size-5 md:text-size-4  text-primary mb-2 md:mb-2">{testimonial.name}</h3>
                  <p className="font-secondary text-size-3 md:text-size-2  text-light">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 ">
          {testimonials.map((_, index) => (
            <a key={index} href={`#slide${index}`} className="btn btn-xs mx-1 bg-primary">{index + 1}</a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
