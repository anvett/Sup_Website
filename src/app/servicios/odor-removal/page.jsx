"use client";

import HeroImgBackg from "@/components/heroImgBackg/HeroImgBackg";
import HeroImgText from "@/components/heroImgText/HeroImgText";
import React from "react";
import { motion } from "framer-motion";
import ImageGallery from "@/components/imageGallery/ImageGallery";

import CallToAction from "@/components/cta/cta";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";

const imageSrc = "/assets/images/servicios/remocion-olores/hero.png";
const mainText = "Remoción de Olores";
const secondaryTextOption1 = [
  "En EcuaCleaner, ofrecemos servicios de remoción de olores para garantizar un ambiente fresco y limpio en tu vehículo.",
  "Utilizamos productos y técnicas avanzadas para eliminar olores desagradables y mejorar la calidad del aire en tu auto.",
  "Nuestro equipo está altamente capacitado para realizar tratamientos eficaces, adaptados a las necesidades específicas de cada vehículo.",
  "Contamos con equipos avanzados y productos de alta calidad para asegurar la eliminación completa de olores.",
  "Adaptamos nuestros servicios de remoción de olores a tus horarios, ofreciendo flexibilidad y conveniencia para nuestros clientes.",
];

const secondaryTextOption2 = [
  "En EcuaCleaner, nos enorgullece brindar servicios de remoción de olores que transforman tu vehículo en un espacio agradable y saludable.",
  "Empleamos técnicas avanzadas y productos de alta calidad para eliminar olores persistentes y mejorar la experiencia de conducción.",
  "Nuestros profesionales están equipados con las herramientas y conocimientos necesarios para eliminar cualquier tipo de olor en tu auto.",
  "Garantizamos una eliminación de olores profunda y detallada, utilizando solo los mejores productos del mercado.",
  "Ofrecemos servicios de remoción de olores a domicilio, adaptándonos a tus necesidades y horarios para tu máxima comodidad.",
];

const images = [
  {
    src: "/assets/images/servicios/remocion-olores/remocion_olores1.png",
    alt: "Remoción de Olores",
    title: "Remoción de Olores 1",
  },
  {
    src: "/assets/images/servicios/remocion-olores/remocion_olores2.png",
    alt: "Remoción de Olores",
    title: "Remoción de Olores 2",
  },
  {
    src: "/assets/images/servicios/remocion-olores/remocion_olores3.png",
    alt: "Remoción de Olores",
    title: "Remoción de Olores 3",
  },
  {
    src: "/assets/images/servicios/remocion-olores/remocion_olores4.png",
    alt: "Remoción de Olores",
    title: "Remoción de Olores 4",
  },
  {
    src: "/assets/images/servicios/remocion-olores/remocion_olores5.png",
    alt: "Remoción de Olores",
    title: "Remoción de Olores 5",
  },
];

const videoUrl = "/assets/videos/remocion_olores.mp4";

const cta1 = "¡Disfruta de un ambiente fresco en tu vehículo! Contáctanos hoy y descubre cómo nuestros servicios de remoción de olores pueden mejorar la calidad del aire en tu auto.";
const cta2 = "¡Elimina los olores desagradables de tu vehículo! Llámanos ahora para agendar un servicio de remoción de olores profesional y confiable.";

const heroSecondaryText1 = "En EcuaCleaner, transformamos tu vehículo con nuestra remoción de olores detallada y profesional. Utilizamos productos de alta calidad y técnicas avanzadas para eliminar olores persistentes y mejorar la experiencia de conducción.";
const heroSecondaryText2 = "Confía en EcuaCleaner para una remoción de olores impecable. Nuestro equipo de profesionales utiliza las mejores técnicas y productos para dejar tu auto con un ambiente fresco y limpio.";

export default function RemocionOlores() {
  return (
    <section className="relative bg-dark text-center overflow-hidden">
      <HeroImgBackg
        backgroundImage="/assets/images/servicios/remocion-olores/hero_back.png"
        mainText="Remoción de Olores"
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
