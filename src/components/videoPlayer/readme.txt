Documentación del Componente VideoPlayer
Descripción
El componente VideoPlayer es un componente reutilizable de React que permite reproducir videos de manera responsiva, ajustándose a diferentes tamaños de pantalla. El componente soporta diferentes relaciones de aspecto para videos horizontales y verticales.

Props
videoUrl (string): La URL del video que se va a reproducir. Este prop es obligatorio.
aspectRatio (string): Define la relación de aspecto del video. Puede ser "16:9" o "9:16". Por defecto, es "16:9".
Uso
jsx
Copiar código
import React from "react";
import VideoPlayer from "@/components/VideoPlayer";

const VideoSection = () => {
  return (
    <div className="pt-spacing-3 pb-spacing-4 bg-dark">
      <h2 className="section-title text-primary">Servicios Profesionales y Garantizados</h2>
      <VideoPlayer videoUrl="assets/video/car_washing1.mp4" aspectRatio="16:9" />
    </div>
  );
};

export default VideoSection;
Ejemplo de Código del Componente VideoPlayer
jsx
Copiar código
import React from "react";

const VideoPlayer = ({ videoUrl, aspectRatio = "16:9" }) => {
  // Define la clase de relación de aspecto basada en el prop
  const aspectClass = aspectRatio === "16:9" ? "aspect-w-16 aspect-h-9" : "aspect-w-9 aspect-h-16";

  return (
    <div className="flex justify-center items-center my-8">
      <div className={`relative w-full sm:w-full md:w-full lg:w-3/4`}>
        <div className={`relative ${aspectClass}`}>
          <video
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full"
            controls
            preload="metadata"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
Clases de Tailwind CSS Utilizadas
flex: Establece el contenedor como un flexbox.
justify-center: Centra el contenido horizontalmente.
items-center: Centra el contenido verticalmente.
my-8: Aplica márgenes verticales.
relative: Establece una posición relativa para el contenedor del video.
w-full: Ancho completo del contenedor en dispositivos pequeños.
sm:w-full: Ancho completo del contenedor en dispositivos medianos.
md:w-full: Ancho completo del contenedor en dispositivos medianos.
lg:w-3/4: Tres cuartos del ancho del contenedor en dispositivos grandes.
aspect-w-16 aspect-h-9: Relación de aspecto 16:9.
aspect-w-9 aspect-h-16: Relación de aspecto 9:16.
absolute: Posición absoluta para el elemento del video.
top-0: Establece la posición superior del video en 0.
left-0: Establece la posición izquierda del video en 0.
h-full: Altura completa del contenedor del video.
Notas
Aspect Ratio Plugin: Este componente utiliza el plugin @tailwindcss/aspect-ratio. Asegúrate de que esté instalado y configurado en tu proyecto.
bash
Copiar código
npm install @tailwindcss/aspect-ratio
javascript
Copiar código
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // otros plugins
  ],
};
Responsividad: El video se ajusta automáticamente al ancho de la pantalla en dispositivos pequeños y medianos, y se limita a tres cuartos del ancho en dispositivos grandes.
