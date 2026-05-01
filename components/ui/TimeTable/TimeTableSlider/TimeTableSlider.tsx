"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type PropType = {
      slides: React.ReactNode[];
      options?: Parameters<typeof useEmblaCarousel>[0];
};

export default function TimeTableSlider({ slides, options }: PropType) {
      const [emblaRef, emblaApi] = useEmblaCarousel(options);
      const [prevDisabled, setPrevDisabled] = useState(true);
      const [nextDisabled, setNextDisabled] = useState(false);

      const onPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
      const onNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

      const onSelect = useCallback(() => {
            if (!emblaApi) return;
            setPrevDisabled(!emblaApi.canScrollPrev());
            setNextDisabled(!emblaApi.canScrollNext());
      }, [emblaApi]);

      useEffect(() => {
            if (!emblaApi) return;


            emblaApi.on("select", onSelect);
            emblaApi.on("reInit", onSelect);

            setTimeout(() => onSelect(), 0);
      }, [emblaApi, onSelect]);

      return (
            <>
            
            
            <div className=" flex flex-col gap-6 ">
                  {/* Viewport */}
                  <div className="overflow-hidden pt-8" ref={emblaRef}>
                        <div className="flex">
                              {slides.map((index, i) => (
                                    <div className="flex-[0_0_100%] px-5 " key={i} >
                                          <div> {index} </div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  {/* Botones */}
                  <section className=" flex justify-around w-full ">

                              <button className=" text-textTitlePrimary font-montserrat uppercase font-bold "  onClick={onPrev} disabled={prevDisabled}>Prev</button>
                  <button className=" text-textTitlePrimary font-montserrat uppercase font-bold " onClick={onNext} disabled={nextDisabled}>Next</button>
                  </section>


            </div>
            
            </>
      );
}