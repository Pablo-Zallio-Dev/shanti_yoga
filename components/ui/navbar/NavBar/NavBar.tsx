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
            <section className=" flex justify-between items-center pt-6  ">
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
