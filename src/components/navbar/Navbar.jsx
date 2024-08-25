// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-light text-size-3 px-4 flex items-center justify-between relative z-50">
//       <div className="flex items-center space-x-4">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost btn-bg-primary text-primary lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="size-spacing-1"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </label>
//           <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-light rounded-box w-64 gap-2">
//             <li>
//               <Link classname="text-primary" href="/">
//                 Inicio
//               </Link>
//             </li>
//             <li>
//               <Link classname="text-primary" href="/acerca-de">
//                 Acerca de
//               </Link>
//             </li>
//             <li>
//               <details>
//                 <summary>
//                   <Link classname="text-primary" href="/servicios">
//                     Servicios
//                   </Link>
//                 </summary>
//                 <ul className="p-2">
//                   <li>
//                     <Link className="text-primary text-size-0" href="/servicios/consumo_ordinario">
//                       Crédito de consumo ordinario
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="text-primary text-size-0" href="/servicios/consumo_dinamico">
//                       Crédito de consumo dinámico
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="text-primary text-size-0"
//                       href="/servicios/credito_dinamico_garante"
//                     >
//                       Crédito de consumo dinámico con garante
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="text-primary text-size-0" href="/servicios/consumo_especial">
//                       Crédito de consumo especial
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="text-primary text-size-0"
//                       href="/servicios/prestamos_especiales"
//                     >
//                       Préstamos especiales
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="text-primary text-size-0" href="/servicios/prestamo_prendario">
//                       Préstamo especial prendario
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="text-primary text-size-0"
//                       href="/servicios/prestamo_hipotecario"
//                     >
//                       Préstamo especial hipotecario
//                     </Link>
//                   </li>
//                 </ul>
//               </details>
//             </li>
//             <li>
//               <Link classname="text-primary" href="/faqs">
//                 FAQs
//               </Link>
//             </li>
//             <li>
//               <Link classname="text-primary" href="/simulador-credito">
//                 Simulador de Crédito
//               </Link>
//             </li>
//             <li>
//               <Link classname="text-primary" href="/contacto">
//                 Contacto
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <Image
//           src="/assets/images/logo.png"
//           width={80}
//           height={80}
//           alt="Logo de Coop. Sup"
//           suppressHydrationWarning
//         />
//         <div className="text-primary text-size-2 font-bold sm:text-size-4 text-center">
//           Cooperativa de Ahorro y Crédito SUP Ltda.
//         </div>
//       </div>
//       <div className="hidden lg:flex">
//         <ul className="menu menu-horizontal text-size-2 font-semibold px-1 gap-2">
//           <li>
//             <Link className="text-primary nav-link" href="/">
//               Inicio
//             </Link>
//           </li>
//           <li>
//             <Link className="text-primary nav-link" href="/acerca-de">
//               Acerca de
//             </Link>
//           </li>
//           <li>
//             <details className="text-primary  nav-link">
//               <summary>
//                 <Link className="text-primary" href="/servicios">
//                   Servicios
//                 </Link>
//               </summary>
//               <ul className="p-2 bg-light z-50">
//                 <li>
//                   <Link className="text-primary text-size-1" href="/servicios/consumo_ordinario">
//                     Crédito de consumo ordinario
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-primary text-size-1" href="/servicios/consumo_dinamico">
//                     Crédito de consumo dinámico
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-primary text-size-1"
//                     href="/servicios/credito_dinamico_garante"
//                   >
//                     Crédito de consumo dinámico con garante
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-primary text-size-1" href="/servicios/consumo_especial">
//                     Crédito de consumo especial
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-primary text-size-1" href="/servicios/prestamos_especiales">
//                     Préstamos especiales
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-primary text-size-1" href="/servicios/prestamo_prendario">
//                     Préstamo especial prendario
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-primary text-size-1" href="/servicios/prestamo_hipotecario">
//                     Préstamo especial hipotecario
//                   </Link>
//                 </li>
//               </ul>
//             </details>
//           </li>
//           <li>
//             <Link className="text-primary nav-link" href="/faqs">
//               FAQs
//             </Link>
//           </li>
//           <li>
//             <Link className="text-primary nav-link" href="/simulador-credito">
//               Simulador de crédito
//             </Link>
//           </li>
//           <li>
//             <Link className="text-primary nav-link" href="/contacto">
//               Contacto
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Obtén la ruta actual

  return (
    <div className="navbar bg-light text-size-3 px-4 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-bg-primary text-primary lg:hidden">
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
              <Link className="text-primary" href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-primary" href="/acerca-de">
                Acerca de
              </Link>
            </li>
            <li>
              <details>
                <summary>
                  <Link className="text-primary" href="/servicios">
                    Servicios
                  </Link>
                </summary>
                <ul className="p-2">
                  <li>
                    <Link className="text-primary text-size-0" href="/servicios/consumo_ordinario">
                      Crédito de consumo ordinario
                    </Link>
                  </li>
                  <li>
                    <Link className="text-primary text-size-0" href="/servicios/consumo_dinamico">
                      Crédito de consumo dinámico
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-primary text-size-0"
                      href="/servicios/credito_dinamico_garante"
                    >
                      Crédito de consumo dinámico con garante
                    </Link>
                  </li>
                  <li>
                    <Link className="text-primary text-size-0" href="/servicios/consumo_especial">
                      Crédito de consumo especial
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-primary text-size-0"
                      href="/servicios/prestamos_especiales"
                    >
                      Préstamos especiales
                    </Link>
                  </li>
                  <li>
                    <Link className="text-primary text-size-0" href="/servicios/prestamo_prendario">
                      Préstamo especial prendario
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-primary text-size-0"
                      href="/servicios/prestamo_hipotecario"
                    >
                      Préstamo especial hipotecario
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link className="text-primary" href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link className="text-primary" href="/simulador-credito">
                Simulador de Crédito
              </Link>
            </li>
            <li>
              <Link className="text-primary" href="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <Image
          src="/assets/images/logo.png"
          width={80}
          height={80}
          alt="Logo de Coop. Sup"
          suppressHydrationWarning
        />
        <div className="text-primary text-size-2 font-bold sm:text-size-4 text-center">
          Cooperativa de Ahorro y Crédito SUP Ltda.
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-size-2 font-semibold px-1 gap-2">
          <li>
            <Link
              className={`nav-link ${pathname === "/" ? "text-terciary" : "text-primary"}`}
              href="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${pathname === "/acerca-de" ? "text-terciary" : "text-primary"}`}
              href="/acerca-de"
            >
              Acerca de
            </Link>
          </li>
          <li>
            <details className="text-primary nav-link">
              <summary>
                <Link
                  className={`nav-link ${
                    pathname.includes("/servicios") ? "text-terciary" : "text-primary"
                  }`}
                  href="/servicios"
                >
                  Servicios
                </Link>
              </summary>
              <ul className="p-2 bg-light z-50">
                <li>
                  <Link
                    className={`text-primary text-size-1 ${
                      pathname === "/servicios/consumo_ordinario"
                        ? "bg-primary text-light rounded"
                        : ""
                    }`}
                    href="/servicios/consumo_ordinario"
                  >
                    Crédito de consumo ordinario
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-primary text-size-1 ${
                      pathname === "/servicios/consumo_dinamico"
                        ? "bg-primary text-light rounded"
                        : ""
                    }`}
                    href="/servicios/consumo_dinamico"
                  >
                    Crédito de consumo dinámico
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-primary text-size-1 ${
                      pathname === "/servicios/credito_dinamico_garante"
                        ? "bg-primary text-light rounded"
                        : ""
                    }`}
                    href="/servicios/credito_dinamico_garante"
                  >
                    Crédito de consumo dinámico con garante
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-primary text-size-1 ${
                      pathname === "/servicios/consumo_especial"
                        ? "bg-primary text-light rounded"
                        : ""
                    }`}
                    href="/servicios/consumo_especial"
                  >
                    Crédito de consumo especial
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-primary text-size-1 ${
                      pathname === "/servicios/prestamos_especiales"
                        ? "bg-primary text-light rounded"
                        : ""
                    }`}
                    href="/servicios/prestamos_especiales"
                  >
                    Préstamos especiales
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-primary text-size-1 ${
                      pathname === "/servicios/prestamo_prendario"
                        ? "bg-primary text-light rounded"
                        : ""
                    }`}
                    href="/servicios/prestamo_prendario"
                  >
                    Préstamo especial prendario
                  </Link>
                </li>
                <li>
                  <Link
                    className={`text-primary text-size-1 ${
                      pathname === "/servicios/prestamo_hipotecario"
                        ? "bg-primary text-light rounded"
                        : ""
                    }`}
                    href="/servicios/prestamo_hipotecario"
                  >
                    Préstamo especial hipotecario
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              className={`nav-link ${pathname === "/faqs" ? "text-terciary" : "text-primary"}`}
              href="/faqs"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                pathname === "/simulador-credito" ? "text-terciary" : "text-primary"
              }`}
              href="/simulador-credito"
            >
              Simulador de crédito
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${pathname === "/contacto" ? "text-terciary" : "text-primary"}`}
              href="/contacto"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
