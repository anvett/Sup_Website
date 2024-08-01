

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-br from-[#000000] to-[#717175] text-size-3 px-4 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-bg-primary text-light lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-spacing-1"
            >
              <path
                fillRule="evenodd"
                d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-light rounded-box w-64 gap-2">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/acerca-de">Acerca de</Link>
            </li>
            <li>
              <details>
                <summary>
                  <Link href="/servicios">Servicios</Link>
                </summary>
                <ul className="p-2">
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/lotes-autos">
                      Lotes de Autos
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/camiones">
                      Limpieza de Camiones
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/car-wash">
                      Limpieza de autos
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/full-detail">
                      Full Detail
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/paint-correction">
                      Correción de pintura
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/tint-removal">
                      Remoción de tinta
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/limpieza-botes">
                      Limpieza de botes
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/odor-removal">
                      Remoción de olores
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/leather-paint-sealing">
                      Leather and Paint Sealing
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/limpieza-pisos">
                      Limpieza de Pisos
                    </Link>
                  </li>
                  <li>
                    <Link className="text-dark text-size-0" href="/servicios/limpieza-edificios">
                      Limpieza de Edificios
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <Image
          src="/assets/images/logo.png"
          width={80}
          height={80}
          alt="Logo de EcuaCleaner"
          suppressHydrationWarning
        />
        <a className="btn btn-ghost text-light text-size-2 sm:text-size-3 ">EcuaCleaner</a>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-size-2 font-semibold px-1 gap-2">
          <li>
            <Link className="text-light" href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="text-light" href="/acerca-de">
              Acerca de
            </Link>
          </li>
          <li>
            <details className="text-light ">
              <summary >
                <Link className="text-light" href="/servicios">
                  Servicios
                </Link>
              </summary>
              <ul className="p-2 bg-dark z-50">
                <li>
                  <Link className="text-light text-size-1" href="/servicios/lotes-autos">
                    Lotes de Autos
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/camiones">
                    Limpieza de Camiones
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/car-wash">
                    Limpieza de autos
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/full-detail">
                    Full Detail
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/paint-correction">
                    Correción de Pintura
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/tint-removal">
                    Remoción de tinta
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/limpieza-botes">
                    Limpieza de botes
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/odor-removal">
                    Remoción de olores
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/leather-paint-sealing">
                    Leather Sealing
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/limpieza-pisos">
                    Limpieza de Pisos
                  </Link>
                </li>
                <li>
                  <Link className="text-light text-size-1" href="/servicios/limpieza-edificios">
                    Limpieza de Edificios
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link className="text-light" href="/faqs">
              Faqs
            </Link>
          </li>
          <li>
            <Link className="text-light" href="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
