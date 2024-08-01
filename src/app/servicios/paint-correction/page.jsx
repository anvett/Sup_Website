"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";

import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/correccion-pintura/hero.png";
const mainText = "Corrección de Pintura";
const secondaryTextOption1 = [
  "En EcuaCleaner, ofrecemos servicios de corrección de pintura que restauran y embellecen la apariencia de tu vehículo.",
  "Utilizamos productos y técnicas de alta calidad para eliminar rayones, remolinos y otros defectos de la pintura.",
  "Nuestro equipo está altamente capacitado para realizar correcciones detalladas y eficaces, adaptadas a las necesidades de cada vehículo.",
  "Contamos con equipos avanzados y productos de alta calidad para ofrecer una corrección de pintura profunda y duradera.",
  "Adaptamos nuestros servicios de corrección de pintura a tus horarios, ofreciendo flexibilidad y conveniencia para nuestros clientes.",
];

const secondaryTextOption2 = [
  "En EcuaCleaner, nos enorgullece brindar servicios de corrección de pintura que mejoran la apariencia y el valor de tu vehículo.",
  "Empleamos técnicas de corrección avanzadas y productos de alta calidad para eliminar imperfecciones y restaurar el brillo original de la pintura.",
  "Nuestros profesionales están equipados con las herramientas y conocimientos necesarios para corregir todo tipo de defectos en la pintura.",
  "Garantizamos una corrección de pintura profunda y detallada, utilizando solo los mejores productos del mercado.",
  "Ofrecemos servicios de corrección de pintura a domicilio, adaptándonos a tus necesidades y horarios para tu máxima comodidad.",
];

const images = [
  {
    src: "/assets/images/servicios/correccion-pintura/correccion_pintura1.png",
    alt: "Corrección de Pintura",
    title: "Corrección de Pintura 1",
  },
  {
    src: "/assets/images/servicios/correccion-pintura/correccion_pintura2.png",
    alt: "Corrección de Pintura",
    title: "Corrección de Pintura 2",
  },
  {
    src: "/assets/images/servicios/correccion-pintura/correccion_pintura3.png",
    alt: "Corrección de Pintura",
    title: "Corrección de Pintura 3",
  },
  {
    src: "/assets/images/servicios/correccion-pintura/correccion_pintura4.png",
    alt: "Corrección de Pintura",
    title: "Corrección de Pintura 4",
  },
  {
    src: "/assets/images/servicios/correccion-pintura/correccion_pintura5.png",
    alt: "Corrección de Pintura",
    title: "Corrección de Pintura 5",
  },
  {
    src: "/assets/images/servicios/correccion-pintura/correccion_pintura6.jpg",
    alt: "Corrección de Pintura",
    title: "Corrección de Pintura 6",
  },
];

const videoUrl = "/assets/videos/correccion_pintura.mp4";

const cta1 = "¡Restaura el brillo de tu vehículo! Contáctanos hoy y descubre cómo nuestros servicios de corrección de pintura pueden mejorar la apariencia de tu auto.";
const cta2 = "¡Haz que tu auto luzca como nuevo! Llámanos ahora para agendar un servicio de corrección de pintura profesional y confiable.";

const heroSecondaryText1 = "En EcuaCleaner, transformamos tu vehículo con nuestra corrección de pintura detallada y profesional. Utilizamos productos de alta calidad y técnicas avanzadas para eliminar imperfecciones y restaurar el brillo original.";
const heroSecondaryText2 = "Confía en EcuaCleaner para una corrección de pintura impecable. Nuestro equipo de profesionales utiliza las mejores técnicas y productos para dejar tu auto reluciente y protegido.";

export default function CorreccionPintura() {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/correccion-pintura/hero_back.png"
        mainText="Corrección de Pintura"
        secondaryText={heroSecondaryText1}  // Puedes cambiar a heroSecondaryText2 según lo necesites
        buttonText="Contáctanos"
      />
      <div className="py-spacing-5 bg-dark">
        <HeroImgText imageSrc={imageSrc} mainText={mainText} secondaryText={secondaryTextOption1} />
      </div>

      <div>
        <ImageGallery title="Galería de Imágenes" images={images} />
      </div>

      {/* <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
        <VideoPlayer2 videoUrl={videoUrl} />
      </div> */}

      <div>
        <CallToAction
          ctaText={cta1}  // Puedes cambiar a cta2 según lo necesites
          buttonText="Contáctanos"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}
