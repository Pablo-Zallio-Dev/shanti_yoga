"use client";
import React from "react";
import { TitleSection } from "../../TitleSection";
import { TextSection } from "../../TextSection";
import { LessonsGallery } from "../components/LessonsGallery";

/* export type HomeLessonsProps = {
      // types...
} */

const HomeLessons: React.FC = ({ }) => {
      return (
            <section className=" pt-20 md:py-34 ">
                  <section className="flex flex-col gap-8">
                        <TitleSection text="Our lessons" />
                        <TextSection text="Yoga lessons typically involve physical postures, breathing exercises, and meditation to promote physical strength, flexibility, reduce stress, and enhance well-being. Classes can vary in style and intensity, and it's essential to consult with a qualified yoga teacher before starting any practice." className=" max-w-215 " />
                  </section>
                  <LessonsGallery />
            </section>
      );
};

export default HomeLessons;
