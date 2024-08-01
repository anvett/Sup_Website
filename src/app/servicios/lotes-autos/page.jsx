"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";

import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/limpieza-lotes-autos/hero.jpg";
const mainText = "Limpieza de Lotes de Autos";
const secondaryTextOption1 = [
  "En EcuaCleaner, ofrecemos servicios de limpieza de lotes de autos que aseguran una presentación impecable para tus vehículos.",
  "Utilizamos productos ecológicos y técnicas avanzadas para mantener tus lotes de autos relucientes y protegidos.",
  "Nuestro equipo está altamente capacitado para realizar limpiezas detalladas y eficaces, adaptadas a las necesidades de cada lote.",
  "Contamos con equipos avanzados y productos de alta calidad para ofrecer una limpieza profunda y duradera.",
  "Adaptamos nuestros servicios de limpieza de lotes de autos a tus horarios, ofreciendo flexibilidad y conveniencia para nuestros clientes.",
];

const secondaryTextOption2 = [
  "En EcuaCleaner, nos enorgullece brindar servicios de limpieza de lotes de autos que mejoran la presentación y el valor de tus vehículos.",
  "Empleamos técnicas de limpieza avanzadas y productos ecológicos para proteger tus autos y el medio ambiente.",
  "Nuestros profesionales están equipados con las herramientas y conocimientos necesarios para limpiar todo tipo de autos con precisión.",
  "Garantizamos una limpieza profunda y detallada, utilizando solo los mejores productos del mercado.",
  "Ofrecemos servicios de limpieza a domicilio, adaptándonos a tus necesidades y horarios para tu máxima comodidad.",
];

const images = [
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos1.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 1",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos2.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 2",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos3.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 3",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos4.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 4",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos5.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 5",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos6.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 6",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos7.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 7",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos8.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 8",
  },
  {
    src: "/assets/images/servicios/limpieza-lotes-autos/limpieza_lotes_autos9.png",
    alt: "Limpieza Lotes de Autos",
    title: "Limpieza Lotes de Autos 9",
  },
];

const videoUrl = "/assets/videos/limpieza_lotes_autos.mp4";

const cta1 = "¡Mantén tus lotes de autos impecables! ";
const cta2 = "¡Haz que tus lotes de autos destaquen! ";

const heroSecondaryText1 = "En EcuaCleaner, transformamos tus lotes de autos con nuestra limpieza profunda y detallada. Utilizamos productos ecológicos y tecnología avanzada para garantizar un entorno limpio y seguro para todos.";
const heroSecondaryText2 = "Confía en EcuaCleaner para una limpieza de lotes de autos impecable. Nuestro equipo de profesionales utiliza las mejores técnicas y productos para dejar tus autos relucientes y protegidos.";

export default function LimpiezaLotesAutos() {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/limpieza-lotes-autos/hero_back.jpg"
        mainText="Limpieza de Lotes de Autos"
        secondaryText={heroSecondaryText1}  
        buttonText="Contáctanos"
      />
      <div className="py-spacing-5 bg-dark">
        <HeroImgText imageSrc={imageSrc} mainText={mainText} secondaryText={secondaryTextOption1} />
      </div>

      <div>
        <ImageGallery title="Galería de Imágenes" images={images} />
      </div>

      <div className="py-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175]">
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>

      <div>
        <CallToAction
          ctaText={cta1}  
          buttonText="Contáctanos"
          buttonLink="/contacto"
        />
      </div>
    </section>
  );
}
