"use client";
import React from 'react';
import Image from 'next/image'


const Logo: React.FC  = ({}) => {
	return (
		<div className=''>
                  <Image src={'/images/logo.svg'} width={124} height={44} alt='Logo' />
 		</div>
	);
};

export default Logo;
