import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryLinks = ({ title, subtitle, items }) => {
  return (
    <section className="py-spacing-6 bg-services text-dark">
      <div className="max-w-7xl mx-auto px-4">
<<<<<<< HEAD
        <h1 className="section-title text-primary ">{title}</h1>
=======
        <h1 className="section-title text-light ">{title}</h1>
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
        <h3 className=" font-secondary font-extrabold  mb-6 text-center sm:text-size-4 text-size-3 pb-spacing-2 text-light">{subtitle} </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
<<<<<<< HEAD
              className="border p-4 rounded-lg shadow-lg text-center bg-gradient-to-br from-[#000000] to-[#717175] flex flex-col justify-between h-full"
=======
              className="border p-4 rounded-lg shadow-lg text-center bg-gradient-primary flex flex-col justify-between h-full"
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
            >
              <div>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="mx-auto mb-spacing-2 object-cover rounded-lg"
                />
<<<<<<< HEAD
                <h3 className="font-secondary font-extrabold  mb-6 text-center sm:text-size-4 text-size-3 pb-spacing-2 text-primary">{item.title}</h3>
=======
                <h3 className="font-secondary font-extrabold  mb-6 text-center sm:text-size-4 text-size-3 pb-spacing-2 text-light">{item.title}</h3>
>>>>>>> a4e8b9a (web site created, pages, components updated, credit simulator created)
                <p className="text-light text-size-1 font-secondary font-normal pb-spacing-3  sm:text-size-2">{item.description}</p>
              </div>
              <div className="mt-auto pb-spacing-3">
                <Link
                  href={item.link}
                  className="inline-block main-button"
                >
                  {item.linkText}
                </Link>
              </div>
              {/* <div className="mt-auto pb-spacing-3">
                <h2 className="font-bold text-size-8 font-primary mb-spacing-2">{item.price}</h2>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLinks;
