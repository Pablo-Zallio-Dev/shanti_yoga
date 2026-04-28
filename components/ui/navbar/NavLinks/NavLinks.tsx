"use client";
import Link from 'next/link';
import React from 'react';

export type NavLinksProps = {
      toggleMenu?: () => void
}

const NavLinks: React.FC<NavLinksProps> = ({ toggleMenu }) => {
      return (
            <nav className=" flex flex-col md:flex-row items-center gap-5 lg:gap-12 font-lora text-textMenuMobile "  >
                  <Link href={'#home'} onClick={toggleMenu}> Home </Link>
                  <Link href={'#teachers'} onClick={toggleMenu}> Teachers </Link>
                  <Link href={'#timetable'} onClick={toggleMenu}> Timetable </Link>
                  <Link href={'#types'} onClick={toggleMenu}> Types of yoga </Link>
                  <Link href={'#contact'} onClick={toggleMenu}> Contacts</Link>
            </nav>
      );
};

export default NavLinks;
