"use client";
import Link from 'next/link';
import React from 'react';

export type NavLinksProps = {
      toggleMenu?: () => void
}

const NavLinks: React.FC<NavLinksProps> = ({ toggleMenu }) => {


      const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
            if (targetId === "home") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.history.pushState(null, "", "/");
                  return;
            }
            e.preventDefault();

            // 1. Buscamos el elemento por su ID (ej: "servicios")
            const element = document.getElementById(targetId);

            if (element) {
                  // 2. Forzamos el scroll manual (esto siempre funciona)
                  const offset = 80; // Ajusta esto según la altura de tu header fixed
                  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                  });

                  // 3. Actualizamos la URL manualmente para que el navegador no se bloquee
                  window.history.pushState(null, "", `#${targetId}`);
            }
      };

      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
            // Solo ejecutamos toggleMenu si existe
            if (toggleMenu) {
                  toggleMenu();
            }
            handleScroll(e, id);
      };

      return (
            <nav className=" flex flex-col md:flex-row items-center gap-5 lg:gap-12 font-lora text-textMenuMobile "  >
                  <Link className=' md:hover:shadow-md/20 md:px-3 md:rounded-lg md:hover:scale-102 md:hover:-translate-y-0.5  transition-all duration-100 ' href={'/'} onClick={(e) => handleClick(e, "home")} replace> Home </Link>
                  <Link className=' md:hover:shadow-md/20 md:px-3 md:rounded-lg md:hover:scale-102 md:hover:-translate-y-0.5  transition-all duration-100 ' href={'#teachers'} onClick={(e) => handleClick(e, "teachers")}> Teachers </Link>
                  <Link className=' md:hover:shadow-md/20 md:px-3 md:rounded-lg md:hover:scale-102 md:hover:-translate-y-0.5  transition-all duration-100 ' href={'#timetable'} onClick={(e) => handleClick(e, "timetable")}> Timetable </Link>
                  <Link className=' md:hover:shadow-md/20 md:px-3 md:rounded-lg md:hover:scale-102 md:hover:-translate-y-0.5  transition-all duration-100 ' href={'#types'} onClick={(e) => handleClick(e, "types")}> Types of yoga </Link>
                  <Link className=' md:hover:shadow-md/20 md:px-3 md:rounded-lg md:hover:scale-102 md:hover:-translate-y-0.5  transition-all duration-100 ' href={'#contact'} onClick={(e) => handleClick(e, "contact")}> Contacts</Link>
            </nav>
      );
};

export default NavLinks;
