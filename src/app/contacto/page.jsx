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
        backgroundImage="/assets/images/benefits/hero_back.png"
        mainText="Contáctanos"
        secondaryText="Estamos aquí para ayudarte. Ponte en contacto con nosotros para más información."
        buttonText="Enviar Mensaje"
      />
      <div>
        <div className="py-spacing-4 bg-gradient-primary flex flex-col-reverse lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-2">
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
          href="https://www.google.com/maps/place/Inglaterra+%26+Cuero+y+Caicedo/@-0.1922818,-78.49263,20.25z/data=!4m7!3m6!1s0x91d59a66009e6347:0xa7bb0c069085a2bb!4b1!8m2!3d-0.192213!4d-78.4923356!16s%2Fg%2F11gdthf1t8?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center" >
            <Image
              src="/assets/images/map_coacsup.png"
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
