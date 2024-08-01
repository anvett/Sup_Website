"use client";

import ContactForm from "@/components/contactForm/ContactForm";
import ContactInfo from "@/components/contactInfo/ContactInfo";
import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";

import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <HeroImgBackg
        backgroundImage="/assets/images/benefits/benefits.png"
        mainText="Contáctanos"
        secondaryText="Estamos aquí para ayudarte. Ponte en contacto con nosotros para más información."
        buttonText="Enviar Mensaje"
      />
      <div>
        <div className="py-spacing-4 bg-dark flex flex-col-reverse lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="w-full lg:w-1/2 p-spacing-1 lg:p-0">
            <ContactForm />
          </div>
          <div className="w-full lg:w-1/2   p-spacing-1 lg:p-0 ">
            <ContactInfo />
          </div>
        </div>
      </div>
      <div
        className="bg-light  lg:w-full w-full"
        
      >
      
        <a
          href="https://www.google.com/maps?q=25.5033,-80.4385"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center" >
            <Image
              src="/assets/images/map_ecuacleaner.png"
              alt="Mapa"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
        </a>
      </div>
    </>
  );
}
