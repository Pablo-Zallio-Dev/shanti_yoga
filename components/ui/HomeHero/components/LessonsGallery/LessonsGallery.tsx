"use client";
import Image from 'next/image';
import React from 'react';



const LessonsGallery: React.FC = ({ }) => {
      return (
            <section className=" grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 ">
                  <div className=" flex flex-col gap-3 ">
                        <div className=" relative w-full h-119.25 overflow-hidden rounded-2xl  ">
                              <Image className=' object-cover  hover:scale-110 transition-transform duration-200 ' src='/images/image_home/image_beginner.webp' alt='' fill />
                        </div>
                        <p className=" text-lg text-textTitlePrimary font-lora ">Yoga For Beginner</p>
                  </div>
                  <div className=" flex flex-col gap-3 ">
                        <div className=" relative w-full h-119.25 md:h-92 overflow-hidden rounded-2xl ">
                              <Image className=' object-cover hover:scale-110 transition-transform duration-200' src='/images/image_home/image_regular.webp' alt='' fill />
                        </div>
                        <p className=" text-lg text-textTitlePrimary font-lora ">Regular Practice</p>
                  </div>
                  <div className=" flex flex-col gap-3 ">
                        <div className=" relative w-full h-119.25 overflow-hidden rounded-2xl ">
                              <Image className=' object-cover hover:scale-110 transition-transform duration-200 ' src='/images/image_home/image_individual.webp' alt='' fill />
                        </div>
                        <p className=" text-lg text-textTitlePrimary font-lora ">Individual Practice</p>
                  </div>
            </section>
      );
};

export default LessonsGallery;
