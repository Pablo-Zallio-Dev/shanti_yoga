"use client";
import Image from "next/image";
import React from "react";
import { BtnRound } from "../../buttons/BtnRound";
import { TitleSection } from "../../TitleSection";
import { TextSection } from "../../TextSection";

/* export type HomeHeroOnProps = {
      // types...
} */

const HomeHeroOn: React.FC = ({}) => {
  return (
    <section  className=" relative grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-start gap-5 mt-15 sm:mt-30    ">
      <TitleSection
        text=" &ldquo;Uniting the Body, Mind, and Spirit Through the Practice of Yoga&rdquo; "
        className="absolute z-2000 2xl:w-171.75  sm:self-center sm:static top-8 "
      />
      <TextSection
        text=" Yoga is a multifaceted discipline that encompasses physical, mental, and spiritual aspects. It is based on the concept of the interconnectedness of body, mind, and spirit, and aims to promote balance and harmony within oneself and with the world around us. "
        className="hidden sm:block sm:self-center"
      />
      <section className="  relative sm:justify-self-center sm:col-start-2  sm:row-start-1 sm:row-span-3 md:justify-self-end mt-18 sm:mt-0  w-full max-w-121.5  h-161.75 ">
        <Image
          className=" object-cover  md:object-right rounded-2xl "
          fill
          src="/images/image_home/image.webp"
          alt="Image home hero"
          quality={100}
        />
      </section>
      <section className=" sm:self-center ">
        <BtnRound text="Read More" variant="right" />
      </section>
    </section>
  );
};
export default HomeHeroOn;
