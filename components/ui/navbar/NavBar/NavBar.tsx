"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Logo } from "../Logo";
import { DesktopMenu } from "../DesktopMenu";
import { MobileMenu } from "../MobileMenu";
import { BtnSignUp } from "../../BtnSignUp";



const NavBar: React.FC = ({ }) => {
      const [openMenu, setOpenMenu] = useState<boolean>(false);

      const toggleMenu = () => {
            setOpenMenu(!openMenu);
      };
      return (
            <section className=" fixed top-0 left-0 z-5000 flex justify-between items-center py-3 px-5 md:px-12 xl:px-25 2xl:px-50 lg:py-5 w-full bg-white/70 md:bg-white/20 backdrop-blur-xl ">
                  <Logo />
                  <DesktopMenu />
                  <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
                  <button type="button" onClick={toggleMenu} className=" md:hidden ">
                  <Image
                        src={"/icons/icon_menuOpenMobile.svg"}
                        width={20}
                        height={20}
                        alt="Boton para abrir menu movil"
                        
                  />
                  </button>
                  <section className="hidden md:block">
                        <BtnSignUp />
                  </section>
            </section>
      );
};

export default NavBar;


/* 


 <Logo />
                  <DesktopMenu />
                  <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
                  <button type="button" onClick={toggleMenu} className=" md:hidden ">
                  <Image
                        src={"/icons/icon_menuOpenMobile.svg"}
                        width={20}
                        height={20}
                        alt="Boton para abrir menu movil"
                        
                  />
                  </button>
                  <section className="hidden md:block">
                        <BtnSignUp />
                  </section>
                  
                  
                  */