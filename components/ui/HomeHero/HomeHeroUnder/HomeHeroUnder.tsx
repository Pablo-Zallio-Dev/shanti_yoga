"use client";
import React from "react";
import Image from "next/image";
import { BtnPrimary } from "../../buttons/BtnPrimary";
import { TitleSection } from "../../TitleSection";
import { TextSection } from "../../TextSection";

/* export type HomeHeroUnderProps = {
      // types...
} */

const HomeHeroUnder: React.FC = ({}) => {
  return (
    <section className=" pt-15 md:pt-34 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center  ">
      <TitleSection
        text=" Practice Anytime, Anywhere with our Online Classes "
        className=""
      />
      <TextSection text="  Online yoga classes can range from pre-recorded sessions to
        live-streamed classes with a teacher, and can offer a variety of styles
        and levels to suit individual preferences and needs. With online yoga,
        practitioners can have the flexibility to create their own personalized
        practice and fit it into their lifestyle. " />
     
      <section className=" flex flex-col gap-6  text-sm md:text-lg font-montserrat ">
        <p className=" texts ">
          {" "}
          Are you worried about whether this form will suit you? <br />
          <span className=" text-textTitlePrimary font-semibold ">
            First lesson - free!
          </span>{" "}
        </p>
        <section className="">
          <BtnPrimary text="Trial Lession" />
        </section>
      </section>
      <section className=" relative sm:col-star-2  sm:row-start-1 sm:row-span-3 lg:max-w-150 h-100 sm:h-120 lg:h-150     ">
        <Image
          className=" object-cover rounded-2xl "
          src={"/images/image_home/image_2.webp"}
          alt="Segunda imagen de seccion home"
          fill
        />
      </section>
    </section>
  );
};

export default HomeHeroUnder;

/* 

                  <p className=" text-2xl md:text-4xl font-lora uppercase text-textTitlePrimary  ">Practice Anytime, Anywhere with our Online Classes</p>


                  */
