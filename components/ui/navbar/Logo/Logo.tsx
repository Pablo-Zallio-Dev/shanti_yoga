"use client";
import React from 'react';
import Image from 'next/image'


const Logo: React.FC = ({ }) => {
      return (
            <div className=''>
                  <Image
                        src="/images/logo.svg"
                        width={124}
                        height={44}
                        alt="Logo"
                        priority
                        unoptimized
                        loading="eager"
                        style={{ width: '124px', height: 'auto' }}

                  />

            </div>
      );
};

export default Logo;

/* 


  <Image style={{ width: 124, height: 'auto' }} src={'/images/logo.svg'} width={124} height={44} alt='Logo' priority />*/
