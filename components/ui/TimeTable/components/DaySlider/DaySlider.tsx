"use client";
import Image from 'next/image';
import React from 'react';

export type DaySliderProps = {
      day?: string,
      classes?: string,
      hour?: string,
}

const DaySlider: React.FC<DaySliderProps> = ({ day, classes, hour }) => {
      return (
            <section className=" flex flex-col justify-between gap-8 h-36 p-6 sm:px-24 bg-bgSlider rounded-2xl font-montserrat uppercase ">
                  <div className=" flex justify-between text-xs ">
                        <p className=""> {day} </p>
                        <p className="  "> {hour} </p>
                  </div>
                  <section className=" flex gap-1 w-full  ">
                        <p className="  "> {classes} </p>
                        <Image className=' object-contain ' src='/icons/icon_arrowUpRight.svg' width={15} height={15} alt='' />
                        
                  </section>
            </section>
      );
};

export default DaySlider;
