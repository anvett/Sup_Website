"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";

import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/limpieza-edificios/hero.png";
const mainText = "Limpieza de Edificios";
const secondaryText = [
  "En EcuaCleaner, nos especializamos en ofrecer servicios de limpieza exhaustiva de edificios, asegurando un ambiente limpio y saludable.",
  "Utilizamos productos y técnicas amigables con el medio ambiente para garantizar la seguridad de nuestros clientes y el entorno.",
  "Nuestro equipo profesional está altamente capacitado para realizar limpiezas detalladas y eficaces, adaptadas a las necesidades específicas de cada edificio.",
  "Contamos con equipos avanzados y productos de alta calidad para asegurar una limpieza profunda y duradera en todas las áreas de tu edificio.",
  "Ofrecemos servicios de limpieza programada y a domicilio para mayor conveniencia y flexibilidad, ajustándonos a tus horarios y requerimientos.",
];

const images = [
  {
    src: "/assets/images/servicios/limpieza-edificios/limpieza_edificios1.png",
    alt: "Limpieza Edificios",
    title: "Limpieza Edificios 1",
  },
  {
    src: "/assets/images/servicios/limpieza-edificios/limpieza_edificios2.png",
    alt: "Limpieza Edificios",
    title: "Limpieza Edificios 2",
  },
  {
    src: "/assets/images/servicios/limpieza-edificios/limpieza_edificios3.png",
    alt: "Limpieza Edificios",
    title: "Limpieza Edificios 3",
  },
  {
    src: "/assets/images/servicios/limpieza-edificios/limpieza_edificios4.png",
    alt: "Limpieza Edificios",
    title: "Limpieza Edificios 4",
  },
  {
    src: "/assets/images/servicios/limpieza-edificios/limpieza_edificios5.png",
    alt: "Limpieza Edificios",
    title: "Limpieza Edificios 5",
  },
  {
    src: "/assets/images/servicios/limpieza-edificios/limpieza_edificios6.png",
    alt: "Limpieza Edificios",
    title: "Limpieza Edificios 6",
  },
];

const videoUrl = "/assets/videos/limpieza_edificios.mp4";

export default function LimpiezaEdificios() {
  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/limpieza-edificios/hero_back.png"
        mainText="Limpieza de Edificios"
        secondaryText="EcuaCleaner ofrece limpieza profunda de edificios con productos ecológicos y tecnología avanzada. Garantizamos un entorno limpio y seguro."
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
          ctaText="¡Confía en los expertos en limpieza de edificios!"
          buttonText="Contáctanos"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}
