"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/full-detail/hero.png";
const mainText = "Full Detail";
const secondaryText = [
  "En EcuaCleaner, nos especializamos en proporcionar servicios de limpieza profunda de interiores de alta calidad.",
  "Garantizamos la satisfacción del cliente a través de un servicio exhaustivo y amigable con el medio ambiente.",
  "Nuestro equipo de trabajo está altamente capacitado para brindar una limpieza profunda y eficiente de los interiores de tu vehículo.",
  "Contamos con los mejores productos y equipos para garantizar la limpieza profunda de tu vehículo.",
  "Ofrecemos servicios de limpieza profunda de interiores a domicilio, para tu comodidad y seguridad.",
];


const images = [
  
  { src: "/assets/images/servicios/full-detail/detailing_interior1.jpg", alt: "Detailing Interior", title: "Detailing Interior 1" },
  { src: "/assets/images/servicios/full-detail/detailing_interior2.jpg", alt: "Detailing Interior", title: "Detailing Interior 2" },
  { src: "/assets/images/servicios/full-detail/detailing_interior3.jpg", alt: "Detailing Interior", title: "Detailing Interior 3" },
  { src: "/assets/images/servicios/full-detail/detailing_interior4.jpg", alt: "Detailing Interior", title: "Detailing Interior 4" },
  { src: "/assets/images/servicios/full-detail/detailing_interior5.jpg", alt: "Detailing Interior", title: "Detailing Interior 5" },
  
];

const videoUrl = '/assets/videos/full_detail.mp4';

export default function FullDetail() {
  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/full-detail/car_washing1.jpg"
        mainText="Full Detail"
        secondaryText="Limpiamos los interiores de tu vehículo a fondo."
        buttonText="Contáctanos"
      />
      <div className="py-spacing-5 bg-dark">
        <HeroImgText imageSrc={imageSrc} mainText={mainText} secondaryText={secondaryText} />
      </div>

      <div>
        <ImageGallery title="Galería de Imágenes" images={images} />
      </div>

      <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
        
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>

      <div>
        <CallToAction ctaText="¿Listo para darle a tu vehículo el trato que merece?" buttonText="Contáctanos" buttonLink="/contacto" />
      </div>
    </section>
  )
}
