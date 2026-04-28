"use client";
import React from 'react';
import { NavLinks } from '../NavLinks';



const DesktopMenu: React.FC  = ({}) => {
	return (
		<section className=" hidden md:block ">
                  <NavLinks />
            </section>
	);
};

export default DesktopMenu;
