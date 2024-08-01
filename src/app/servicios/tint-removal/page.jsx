"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";

import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/remocion-tinta/hero.png";
const mainText = "Remoción de Tinta";
const secondaryTextOption1 = [
  "En EcuaCleaner, ofrecemos servicios de remoción de tinta para devolverle a tu vehículo su apariencia original.",
  "Utilizamos productos y técnicas avanzadas para eliminar restos de tinta sin dañar la pintura de tu auto.",
  "Nuestro equipo está altamente capacitado para realizar tratamientos eficaces, adaptados a las necesidades específicas de cada vehículo.",
  "Contamos con equipos avanzados y productos de alta calidad para asegurar la eliminación completa de tinta.",
  "Adaptamos nuestros servicios de remoción de tinta a tus horarios, ofreciendo flexibilidad y conveniencia para nuestros clientes.",
];

const secondaryTextOption2 = [
  "En EcuaCleaner, nos enorgullece brindar servicios de remoción de tinta que restauran la apariencia de tu vehículo.",
  "Empleamos técnicas avanzadas y productos de alta calidad para eliminar manchas de tinta sin dañar la superficie del auto.",
  "Nuestros profesionales están equipados con las herramientas y conocimientos necesarios para eliminar cualquier tipo de tinta en tu auto.",
  "Garantizamos una remoción de tinta profunda y detallada, utilizando solo los mejores productos del mercado.",
  "Ofrecemos servicios de remoción de tinta a domicilio, adaptándonos a tus necesidades y horarios para tu máxima comodidad.",
];

const images = [
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta1.png",
    alt: "Remoción de Tinta",
    title: "Remoción de Tinta 1",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta2.png",
    alt: "Remoción de Tinta",
    title: "Remoción de Tinta 2",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta3.png",
    alt: "Remoción de Tinta",
    title: "Remoción de Tinta 3",
  },
  {
    src: "/assets/images/servicios/remocion-tinta/remocion_tinta4.png",
    alt: "Remoción de Tinta",
    title: "Remoción de Tinta 4",
  },
  
];

const videoUrl = "/assets/videos/remocion_tinta.mp4";

const cta1 = "¡Elimina las manchas de tinta de tu vehículo! Contáctanos hoy y descubre cómo nuestros servicios de remoción de tinta pueden restaurar la apariencia de tu auto.";
const cta2 = "¡Haz que tu auto luzca impecable! Llámanos ahora para agendar un servicio de remoción de tinta profesional y confiable.";

const heroSecondaryText1 = "En EcuaCleaner, transformamos tu vehículo con nuestra remoción de tinta detallada y profesional. Utilizamos productos de alta calidad y técnicas avanzadas para eliminar manchas de tinta y restaurar la apariencia original.";
const heroSecondaryText2 = "Confía en EcuaCleaner para una remoción de tinta impecable. Nuestro equipo de profesionales utiliza las mejores técnicas y productos para dejar tu auto libre de manchas y reluciente.";

export default function RemocionTinta() {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/remocion-tinta/hero_back.png"
        mainText="Remoción de Tinta"
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
