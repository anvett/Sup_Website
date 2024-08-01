import React from "react";
import Image from "next/image";
import Link from "next/link";

const TemplatePage = ({
  title,
  description,
  properties,
  mediaSrc,
  mediaType,
  price,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-spacing-6 bg-primary text-dark">
      <div className="max-w-7xl mx-auto px-spacing-1">
        <h1 className="h1-template mb-spacing-2 text-center">{title}</h1>
        <h2 className="h2-template mb-spacing-4 text-center">{description}</h2>
        

        <div className="card lg:card-side  shadow-xl ">
          <figure className="bg-accent">
            {mediaType === "image" ? (
              <img
                src={mediaSrc}
                alt={title}
                className="rounded shadow-lg ml-spacing-4 mr-spacing-4 mb-spacing-1 lg:mb-0 lg:mr-spacing-1 sm:mb-spacing-2 w-spacing-27 h-auto"
               
              />
            ) : (
              <video
                src={mediaSrc}
                controls
                className="rounded-lg shadow-lg mb-spacing-4 lg:mb-0 lg:mr-4"
                width="500"
                height="300"
              ></video>
            )}
          </figure>
          <div className="card-body bg-accent rounded ">
            <h3 className="h4-template mt-spacing-2 mb-spacing-1 text-center">Características:</h3>
            <ul className="list-none list-inside    w-full lg:w-auto lg:ml-1">
              {properties.map((property, index) => (
                <li key={index} className="li-template mb-2 leading-relaxed text-center">
                  {property}
                </li>
              ))}
            </ul>
            <p className="h3-template bg-primary rounded-full justify-center mb-spacing-2 text-center">Precio: {price}</p>
            <div className="card-actions justify-end">
              <Link href={buttonLink} className="bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom  hover:bg-secondary hover:text-primary ">{buttonText}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatePage;
