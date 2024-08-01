import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer pl-spacing-3 p-spacing-8 bg-gradient-to-br from-[#000000] to-[#717175] text-base-content flex flex-col md:flex-row md:justify-center">
        <div className="flex flex-col md:w-1/3">
          <h6 className="footer-title text-size-3 font-bold font-primary text-primary">Servicios</h6>
          <Link href="/servicios/camiones" className="text-light font-semibold link link-hover">
            Limpieza de Camiones
          </Link>
          <Link href="/servicios/car-wash" className="text-light font-semibold link link-hover">
            Limpieza de autos
          </Link>
          <Link href="/servicios/full-detail" className="text-light font-semibold link link-hover">
            Full Detail
          </Link>
          <Link href="/servicios/leather-paint-sealing" className="text-light font-semibold link link-hover">
            Leather & Paint Sealing
          </Link>
          <Link href="/servicios/limpieza-edificios" className="text-light font-semibold link link-hover">
            Limpieza de Edificios
          </Link>
          <Link href="/servicios/limpieza-pisos" className="text-light font-semibold link link-hover">
            Limpieza de Pisos
          </Link>
          <Link href="/servicios/lotes-autos" className="text-light font-semibold link link-hover">
            Lotes de Autos
          </Link>
          <Link href="/servicios/odor-removal" className="text-light font-semibold link link-hover">
            Remoción de olores
          </Link>
          <Link href="/servicios/paint-correction" className="text-light font-semibold link link-hover">
            Corrección de Pintura
          </Link>
          <Link href="/servicios/tint-removal" className="text-light font-semibold link link-hover">
            Remoción de Tinta
          </Link>
          <Link href="/servicios/limpieza-botes" className="text-light font-semibold link link-hover">
            Limpieza de botes
          </Link>
        </div>
        <div className="flex flex-col md:w-1/3">
          <h6 className="footer-title text-size-3 font-primary font-bold text-primary">EcuaCleaner Inc.</h6>
          <Link href="/" className="text-light font-semibold link link-hover">
            Inicio
          </Link>
          <Link href="/acerca-de" className="text-light font-semibold link link-hover">
            Acerca de nosotros
          </Link>
          <Link href="/contacto" className="text-light font-semibold link link-hover">
            Contacto
          </Link>
          <Link href="/faqs" className="text-light font-semibold link link-hover">
            FAQs
          </Link>
          <Link href="/legal/politicas-de-cookies" className="text-light font-semibold link link-hover">
            Política de Cookies
          </Link>
          <Link href="/legal/politicas-de-privacidad" className="text-light font-semibold link link-hover">
            Política de Privacidad
          </Link>
          <Link href="/legal/terminos-de-uso" className="text-light font-semibold link link-hover">
            Términos de Uso
          </Link>
        </div>
        
      </footer>
      <footer className="footer p-spacing-5 bg-dark text-neutral-content">
        <aside>
          <Image
            src="/assets/images/logo.png"
            alt="Digital Card"
            width={100}
            height={100}
            className="fill-current"
          />
          <p className="text-primary text-size-4 font-primary">
            EcuaCleaner Inc.
          </p>
          <p className="text-primary text-size-3 font-primary pt-spacing-2">
            Proveyendo servicios de limpieza de alta calidad desde 2015.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-size-3 text-primary font-primary">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://twitter.com">
              <Image
                src="/assets/icons/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="fill-current"
              />
            </Link>
            <Link href="https://youtube.com">
              <Image
                src="/assets/icons/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
                className="fill-current"
              />
            </Link>
            <Link href="https://facebook.com">
              <Image
                src="/assets/images/logo.png"
                alt="Digital Card"
                width={40}
                height={40}
                className="fill-current"
              />
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="text-center p-spacing-3 bg-gradient-to-br from-[#000000] to-[#717175] text-sm text-base-content">
        <p className="text-size-2 text-light font-semibold">
          &copy; 2024 Anvetcorp SAS. All rights reserved.
        </p>
      </footer>
    </>
  );
}
