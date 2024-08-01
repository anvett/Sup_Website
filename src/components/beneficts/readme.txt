Documentación del Componente Benefits
Descripción
El componente Benefits es un componente reutilizable de React que muestra una lista de beneficios junto con una imagen. El diseño es responsivo, adaptándose a diferentes tamaños de pantalla para garantizar una visualización adecuada en dispositivos pequeños y grandes.

Props
benefits (array): Un array de strings que contiene la lista de beneficios a mostrar. Este prop es obligatorio.
imageSrc (string): La URL de la imagen que se mostrará junto a la lista de beneficios. Este prop es obligatorio.
Uso
jsx
Copiar código
import React from "react";
import Benefits from "@/components/Benefits";

const benefitsList = [
  "Equipo profesional y capacitado",
  "Estrategias personalizadas para cada cliente",
  "Uso de herramientas y tecnologías de última generación",
  "Resultados medibles y optimización continua",
  "Atención al cliente excepcional y soporte constante",
  "Precios competitivos con alto retorno de inversión",
];

const imageSource = "/assets/images/benefits-image.jpg";

const BenefitsSection = () => {
  return (
    <Benefits benefits={benefitsList} imageSrc={imageSource} />
  );
};

export default BenefitsSection;
Ejemplo de Código del Componente Benefits
jsx
Copiar código
import React from "react";

const Benefits = ({ benefits, imageSrc }) => {
  return (
    <section className="py-spacing-6 bg-accent">
      <div className="max-w-9xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pl-spacing-5">
          <h2 className="section-title text-primary text-center lg:text-left">
            Beneficios de Contratarnos
          </h2>
          <ul className="list-none list-inside space-y-4 sm:list-disc">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="font-secondary font-bold text-size-2 lg:text-size-3 text-center lg:text-left"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:pl-spacing-5">
          <img
            src={imageSrc}
            alt="Beneficios de EcuaCleaner"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
Clases de Tailwind CSS Utilizadas
py-spacing-6: Aplica padding vertical.
bg-accent: Aplica el color de fondo de acento definido en la configuración de Tailwind.
max-w-9xl: Establece el ancho máximo del contenedor principal.
mx-auto: Centra el contenedor horizontalmente.
px-4: Aplica padding horizontal.
flex flex-col lg:flex-row: Establece un diseño de flexbox con columnas en pantallas pequeñas y filas en pantallas grandes.
items-center: Centra los elementos dentro del contenedor.
w-full lg:w-1/2: Establece el ancho completo en pantallas pequeñas y la mitad del ancho en pantallas grandes.
mb-6 lg:mb-0: Aplica margen inferior en pantallas pequeñas y lo quita en pantallas grandes.
lg:pl-spacing-5: Aplica padding a la izquierda en pantallas grandes.
section-title: Clase personalizada para el título de la sección.
text-primary: Aplica el color de texto primario definido en la configuración de Tailwind.
text-center lg:text-left: Centra el texto en pantallas pequeñas y lo alinea a la izquierda en pantallas grandes.
list-none list-inside space-y-4 sm:list-disc: Establece el estilo de la lista.
font-secondary font-bold text-size-2 lg:text-size-3: Aplica estilos de fuente y tamaño de texto.
rounded-lg shadow-lg max-w-full h-auto: Aplica estilos a la imagen para que sea responsiva y mantenga su relación de aspecto.
Notas
Responsividad: El diseño se adapta automáticamente a diferentes tamaños de pantalla utilizando las clases de Tailwind CSS para garantizar una visualización adecuada en dispositivos pequeños y grandes.

Customización: Puedes ajustar las clases Tailwind CSS según tus necesidades específicas para personalizar aún más el componente.