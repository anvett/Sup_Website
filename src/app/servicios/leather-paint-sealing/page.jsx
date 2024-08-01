"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/leather-paint-sealing/hero.png";
const mainText = "Leather Paint Sealing";
const secondaryText = [
  "En EcuaCleaner, ofrecemos un servicio de sellado de pintura de cuero que protege y realza el acabado de tu vehículo.",
  "Nuestro sellado de pintura de cuero proporciona una capa protectora duradera contra los elementos y el desgaste diario.",
  "Utilizamos productos de alta calidad para asegurar que la pintura de cuero de tu vehículo mantenga su brillo y belleza.",
  "Nuestro equipo profesional está capacitado para aplicar el sellado de manera uniforme y eficiente, asegurando resultados excepcionales.",
  "Disfruta de la conveniencia de nuestros servicios a domicilio, donde llevamos el sellado de pintura de cuero directamente a ti.",
];

const images = [
  {
    src: "/assets/images/servicios/leather-paint-sealing/leather_paint1.png",
    alt: "Leather paint",
    title: "Leather paint 1",
  },
  {
    src: "/assets/images/servicios/leather-paint-sealing/leather_paint2.png",
    alt: "Leather paint",
    title: "Leather paint 2",
  },
  {
    src: "/assets/images/servicios/leather-paint-sealing/leather_paint3.png",
    alt: "Leather paint",
    title: "Leather paint 3",
  },
  {
    src: "/assets/images/servicios/leather-paint-sealing/leather_paint4.png",
    alt: "Leather paint",
    title: "Leather paint 4",
  },
  {
    src: "/assets/images/servicios/leather-paint-sealing/leather_paint5.png",
    alt: "Leather paint",
    title: "Leather paint 5",
  },
  {
    src: "/assets/images/servicios/leather-paint-sealing/leather_paint6.jpeg",
    alt: "Leather paint",
    title: "Leather paint 6",
  },
];

const videoUrl = "/assets/videos/leather_paint.mp4";

export default function LeatherPaintSealing() {
  return (
    <section className="relative  bg-dark text-center overflow-hidden  ">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/leather-paint-sealing/leather_paint_hero.png"
        mainText="Leather Paint Sealing"
        secondaryText="Protege y realza la pintura de cuero de tu vehículo."
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
          ctaText="¡Protege y embellece tu vehículo hoy mismo!"
          buttonText="Contáctanos"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}
