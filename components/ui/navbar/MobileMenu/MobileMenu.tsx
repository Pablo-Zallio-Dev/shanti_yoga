      "use client";
      import Image from 'next/image';
      import Link from 'next/link';
      import React from 'react';
      import { BtnSignUp } from '../../BtnSignUp';
import { NavLinks } from '../NavLinks';

      export type MobileMenuProps = {
            openMenu: boolean
            toggleMenu: () => void
      }

      const MobileMenu: React.FC<MobileMenuProps> = ({ openMenu, toggleMenu }) => {
            return (
                  <section className={` fixed md:hidden top-0 left-0 z-[9999] flex flex-col justify-between pt-6 pb-18 px-6 w-full h-screen bg-bgMenuMobile ${openMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-100  `}>
                        <section className=" flex justify-between items-center ">
                              <Image src={'/images/logo.svg'} width={80} height={80} alt='logo' />
                              <button type="button" onClick={toggleMenu}>

                              <Image src={'/icons/icon_menuCloseMobile.svg'} width={12} height={12} alt='Boton cerrar menu movil'  />
                              </button>
                        </section>
                        <section className=" flex flex-col items-center gap-20 ">
                              <h2 className=" font-lora text-3xl text-textMenuMobile ">Mindful Practice</h2>
                              <NavLinks toggleMenu={toggleMenu} />
                              <Image className=' w-40 h-40 object-cover object-top-left grayscale-100 rounded-full ' src={'/images/image_menuMobile.webp'} width={200} height={200} alt={''} />
                        </section>
                        <section className=" self-center ">
                              <BtnSignUp />
                        </section>
                  </section>
            );
      };

      export default MobileMenu;
