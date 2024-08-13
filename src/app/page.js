"use client";

import Introduction from "@/components/Introduction/Introduction";
import Benefits from "@/components/beneficts/beneficts";
<<<<<<< HEAD
import CallToAction from "@/components/cta/cta";
import FeaturedServices from "@/components/featureServices/FeatureServices";
import Hero from "@/components/hero/Hero";
import { AuroraHero } from "@/components/heroAurora/AuroraHero";
import { LampContainer } from "@/components/lamp/Lamp";
import Testimonials from "@/components/testimonials/Testimonials";
import TwoCards from "@/components/twoCards/TwoCards";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";
import { motion } from "framer-motion";

=======
import BenefitsGrid from "@/components/benefitsGrid/BenefitsGrid";
import CallToAction from "@/components/cta/cta";
import FeaturedServices from "@/components/featureServices/FeatureServices";
import Hero from "@/components/hero/Hero";
import { LampContainer } from "@/components/lamp/Lamp";
import Testimonials from "@/components/testimonials/Testimonials";
import VideoPlayer2 from "@/components/videoPlayer2/VideoPlayer2";
import { motion } from "framer-motion";


>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
export default function Home() {
  //----------------------------------------------
  // Texto de introducción
  //----------------------------------------------

  const introductionText = `
<<<<<<< HEAD
  En EcuaCleaner, nos especializamos en proporcionar servicios de limpieza de vehículos de alta calidad, garantizando la satisfacción del cliente a través de un servicio eficiente y amigable con el medio ambiente.
  `;
=======
  En COAC SUP LTDA., nos dedicamos a fortalecer el bienestar económico de nuestros socios a través de servicios financieros innovadores y personalizados, fomentando la solidaridad, el progreso y la responsabilidad social. Somos una cooperativa de referencia en el sector financiero, promoviendo el crecimiento económico y personalizado que satisfaga las necesidades de nuestros socios y contribuya al buen manejo financiero.
`;
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)

  //----------------------------------------------
  // Servicios destacados
  //----------------------------------------------

  const services = [
    {
<<<<<<< HEAD
      icon: "assets/images/servicios/limpieza-lotes-autos/auto_lote1.png",
      title: "Lotes de Autos",
      description: "Limpieza meticulosa y rápida de lotes de autos en concesionarios o parqueos.",
      link: "/servicios/lotes-autos",
    },

    {
      icon: "assets/images/servicios/limpieza-pisos/washing_patio.jpg",
      title: "Limpieza de Pisos",
      description: "Limpieza de pisos de concreto, cerámica, madera y otros materiales.",
      link: "/servicios/limpieza-pisos",
    },
    {
      icon: "assets/images/servicios/limpieza-edificios/limpieza_edificios1.png",
      title: "Limpieza de Edificios",
      description: "Limpieza de edificios y oficinas, garantizando un ambiente limpio y seguro.",
      link: "/servicios/limpieza-edificios",
    },
  ];
=======
      icon: "assets/images/servicios/credito_consumo_ordinario.png",
      title: "Crédito de Consumo Ordinario",
      description: "Ofrecemos créditos de consumo ordinario con plazos flexibles y tasas competitivas para satisfacer tus necesidades financieras.",
      link: "/servicios/consumo_ordinario",
    },
    {
      icon: "assets/images/servicios/credito_consumo_dinamico.png",
      title: "Crédito de Consumo Dinámico",
      description: "Nuestros créditos de consumo dinámico están diseñados para brindarte la flexibilidad y el apoyo que necesitas para tus proyectos personales.",
      link: "/servicios/consumo_dinamico",
    },
    {
      icon: "assets/images/servicios/credito_consumo_especial.png",
      title: "Crédito de Consumo Especial",
      description: "Obtén créditos de consumo especial con condiciones preferenciales y beneficios exclusivos para nuestros socios.",
      link: "/servicios/consumo_especial",
    },
    {
      icon: "assets/images/servicios/prestamo_hipotecario.png",
      title: "Préstamo Especial Hipotecario",
      description: "Accede a nuestros préstamos especiales hipotecarios con plazos largos y tasas atractivas para asegurar tu futuro.",
      link: "/servicios/prestamo_hipotecario",
    },
  ];
  
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)

  //----------------------------------------------
  // Beneficios array y src img
  //----------------------------------------------

<<<<<<< HEAD
  const benefits = [
    "Equipo profesional y capacitado en limpieza de vehículos",
    "Estrategias personalizadas para cada cliente",
    "Uso de productos y métodos amigables con el medio ambiente",
    "Resultados de alta calidad y satisfacción garantizada",
    "Atención al cliente excepcional y soporte constante",
    "Precios competitivos con alto retorno de inversión",
  ];

  const imageSrc = "assets/images/benefits/car_washing6.png";
=======
  const benefitsTitle = "Sé parte de la COAC SUP LTDA.";

  const benefits = [
    "Solidez y confianza en la administración de tus ahorros",
    "Créditos personalizados que se adaptan a tus necesidades",
    "Compromiso con la transparencia y la equidad en todos nuestros servicios",
    "Acceso a servicios financieros innovadores y seguros",
    "Atención cercana y personalizada para cada socio",
    "Tasas de interés competitivas y condiciones flexibles",
];


  const imageSrc = "assets/images/benefits/prestamo2.jpg";
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)

  //----------------------------------------------
  // Testimonios array
  //----------------------------------------------

  const testimonials = [
    {
<<<<<<< HEAD
      name: "Juan Pérez",
      photo: "assets/images/testimonials/test1.webp",
      text: "El servicio de EcuaCleaner es increíble. Mi auto siempre queda como nuevo.",
    },
    {
      name: "María Gómez",
      photo: "assets/images/testimonials/test2.webp",
      text: "Gracias a EcuaCleaner, la limpieza de mi flota de camiones nunca ha sido tan fácil y efectiva.",
    },
    {
      name: "Carlos Ramírez",
      photo: "assets/images/testimonials/test3.webp",
      text: "La atención al cliente y la calidad del trabajo de EcuaCleaner son inigualables. Muy recomendados.",
    },
  ];

  const videoUrl = "/assets/videos/main_video.mp4";

  //----------------------------------------------
=======
      name: "Ana Martínez",
      photo: "assets/images/testimonials/test1.jpg",
      text: "Ser parte de COAC SUP LTDA. ha sido una de las mejores decisiones financieras que he tomado. Sus servicios son excelentes y el trato es siempre personalizado.",
    },
    {
      name: "Luis Herrera",
      photo: "assets/images/testimonials/test2.jpg",
      text: "Gracias a los créditos de COAC SUP LTDA., pude emprender mi negocio y seguir adelante con mi proyecto. Estoy muy agradecido por su apoyo constante.",
    },
    {
      name: "Sofía Morales",
      photo: "assets/images/testimonials/test3.jpg",
      text: "La confianza y seguridad que me brinda COAC SUP LTDA. no tienen comparación. Siempre están disponibles para ayudarme a manejar mis finanzas de la mejor manera.",
    },
  ];
  

  const videoUrl = "/assets/videos/servicios_financieros.mp4";

  //----------------------------------------------
  // Beneficios y valores de la cooperativa
  //----------------------------------------------

  const benefitsData = {
    title: "Beneficios y Valores de COAC SUP LTDA.",
    items: [
      {
        src: "FaHandshake", // FontAwesome icon
        detail: "Confianza y seguridad en la gestión de tus ahorros.",
      },
      {
        src: "FaPiggyBank", // FontAwesome icon
        detail: "Diversos productos de ahorro adaptados a tus necesidades.",
      },
      {
        src: "FaHandsHelping", // FontAwesome icon
        detail: "Compromiso con la comunidad y responsabilidad social.",
      },
      {
        src: "FaDollarSign", // FontAwesome icon
        detail: "Tasas de interés competitivas en todos nuestros productos.",
      },
      {
        src: "FaLightbulb", // FontAwesome icon
        detail: "Innovación constante para mejorar nuestros servicios.",
      },
      {
        src: "FaUserShield", // FontAwesome icon
        detail: "Protección y transparencia en todas nuestras operaciones.",
      },
      {
        src: "FaCommentsDollar", // FontAwesome icon
        detail: "Atención personalizada para cada socio.",
      },
      {
        src: "FaChartLine", // FontAwesome icon
        detail: "Asesoría financiera para el crecimiento económico.",
      },
      {
        src: "FaPeopleCarry", // FontAwesome icon
        detail: "Apoyo mutuo y cooperación entre socios.",
      },
      {
        src: "FaBusinessTime", // FontAwesome icon
        detail: "Eficiencia y rapidez en la gestión de trámites.",
      },
      {
        src: "FaGavel", // FontAwesome icon
        detail: "Cumplimiento estricto de la normativa financiera.",
      },
      {
        src: "FaHeart", // FontAwesome icon
        detail: "Empatía y solidaridad en nuestras relaciones.",
      },
    ],
  };

  //----------------------------------------------
  
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)

  return (
    <main className="">
      <Hero />
      <Introduction text={introductionText} />
<<<<<<< HEAD

      <FeaturedServices services={services} />
      <Benefits benefits={benefits} imageSrc={imageSrc} />

      <div className=" pt-spacing-1 pb-spacing-1 sm:pt-spacing-3 sm:pb-spacing-4 bg-dark">
        <h2 className="section-title text-primary">Servicios Profesionales y Garantizados</h2>
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>

      <Testimonials testimonials={testimonials} />
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-6 bg-gradient-to-br from-white to-accent py-4 bg-clip-text text-center  font-bold font-primary text-size-6  leading-tight text-transparent sm:text-size-8 sm:leading-tight md:text-size-10 md:leading-tight"
        >
          <p className="pb-spacing-2">¿Listo para que tus vehículos luzcan como nuevos? </p>
          <a href="/contacto">
            <button className="bg-primary text-light font-bold px-3 py-2 rounded-full btn-custom text-size-2  hover:bg-accent hover:text-primary">
              Contáctanos
            </button>
          </a>
        </motion.h1>
      </LampContainer>
=======
      <BenefitsGrid title={benefitsData.title} items={benefitsData.items} />
      <FeaturedServices services={services} />
      <Benefits benefitsTitle={benefitsTitle} benefits={benefits} imageSrc={imageSrc} />
      <div className=" pt-spacing-1 pb-spacing-1 sm:pt-spacing-3 sm:pb-spacing-4 bg-gradient-primary">
        <h2 className="section-title text-light"></h2>
        <VideoPlayer2 videoUrl={videoUrl} />
      </div>
      <Testimonials testimonials={testimonials} />
      
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
    </main>
  );
}
