"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";

import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/limpieza-pisos/hero.png";
const mainText = "Limpieza de Pisos";
const secondaryText = [
  "En EcuaCleaner, nos especializamos en ofrecer servicios de limpieza profunda de pisos, asegurando un ambiente limpio y saludable.",
  "Utilizamos productos y técnicas amigables con el medio ambiente para garantizar la seguridad de nuestros clientes y el entorno.",
  "Nuestro equipo profesional está altamente capacitado para realizar limpiezas detalladas y eficaces, adaptadas a las necesidades específicas de cada piso.",
  "Contamos con equipos avanzados y productos de alta calidad para asegurar una limpieza profunda y duradera en todas las áreas de tu piso.",
  "Ofrecemos servicios de limpieza programada y a domicilio para mayor conveniencia y flexibilidad, ajustándonos a tus horarios y requerimientos.",
];

const images = [
  {
    src: "/assets/images/servicios/limpieza-pisos/limpieza_pisos1.png",
    alt: "Limpieza Pisos",
    title: "Limpieza Pisos 1",
  },
  {
    src: "/assets/images/servicios/limpieza-pisos/limpieza_pisos2.png",
    alt: "Limpieza Pisos",
    title: "Limpieza Pisos 2",
  },
  {
    src: "/assets/images/servicios/limpieza-pisos/limpieza_pisos3.png",
    alt: "Limpieza Pisos",
    title: "Limpieza Pisos 3",
  },
  {
    src: "/assets/images/servicios/limpieza-pisos/limpieza_pisos4.png",
    alt: "Limpieza Pisos",
    title: "Limpieza Pisos 4",
  },
  {
    src: "/assets/images/servicios/limpieza-pisos/limpieza_pisos5.png",
    alt: "Limpieza Pisos",
    title: "Limpieza Pisos 5",
  },
];

const videoUrl = "/assets/videos/cleaning_floor.mp4";

export default function LimpiezaPisos() {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/limpieza-pisos/hero_back.png"
        mainText="Limpieza de Pisos"
        secondaryText="Confía en EcuaCleaner para una limpieza de pisos impecable. Nuestro equipo de profesionales utiliza las mejores técnicas y productos para dejar tus pisos relucientes y libres de suciedad."
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
        <CallToAction
          ctaText="¡Haz que tus pisos luzcan como nuevos!"
          buttonText="Contáctanos"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}
