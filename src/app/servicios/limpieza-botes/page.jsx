"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";
import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/limpieza-botes/hero.jpeg";
const mainText = "Limpieza de Botes";
const secondaryText = [
  "En EcuaCleaner, nos especializamos en proporcionar servicios de limpieza de botes de alta calidad.",
  "Garantizamos la satisfacción del cliente a través de un servicio eficiente y amigable con el medio ambiente.",
  "Nuestro equipo de trabajo está altamente capacitado para brindar un servicio de calidad y eficiente.",
  "Contamos con los mejores productos y equipos para garantizar la limpieza de tu bote.",
  "Ofrecemos servicios de limpieza de botes a domicilio, para tu comodidad y seguridad.",
];

const images = [
  {
    src: "/assets/images/servicios/limpieza-botes/botes1.jpeg",
    alt: "Limpieza de camiones 1",
    title: "Imagen 1",
  },
  {
    src: "/assets/images/servicios/limpieza-botes/botes2.jpeg",
    alt: "Limpieza de camiones 2",
    title: "Imagen 2",
  },
  {
    src: "/assets/images/servicios/limpieza-botes/botes3.jpeg",
    alt: "Limpieza de camiones 3",
    title: "Imagen 3",
  },
  {
    src: "/assets/images/servicios/limpieza-botes/botes4.jpeg",
    alt: "Limpieza de camiones 4",
    title: "Imagen 4",
  },
];

const videoUrl = "/assets/videos/camiones.mp4";

export default function CarWash() {
  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/limpieza-botes/hero_back.jpeg"
        mainText="Limpieza de Botes"
        secondaryText="Ofrecemos los mejores servicios de limpieza para tu bote o yate."
        buttonText="Contáctanos"
      />
      <div className="py-spacing-5 bg-dark">
        <HeroImgText imageSrc={imageSrc} mainText={mainText} secondaryText={secondaryText} />
      </div>

      <div>
        <ImageGallery title="Galería de Imágenes" images={images} />
      </div>

      {/* <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
        <VideoPlayer2 videoUrl={videoUrl} />
      </div> */}

      <div>
        <CallToAction
          ctaText="¿Listo para limpiar tu bote?"
          buttonText="Contáctanos"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}
