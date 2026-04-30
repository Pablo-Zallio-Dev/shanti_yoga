"use client";
import Image from 'next/image';
import React from 'react';

export type BtnRoundProps = {
      text: string,
      variant: 'right' | 'left'
}

const BtnRound: React.FC<BtnRoundProps> = ({ text, variant }) => {

      const isLeft = variant === 'left'

      return (
            <button className=" relative w-max  ">
                  <Image className={` ${isLeft ? ' rotate-180 ' : ''} `} src="/icons/icon_roundedBtnRead.svg" width={70} height={70} alt='Button read more' />
                  <section className={` absolute top-6  ${isLeft ? '-left-16' : '-right-16'}  flex items-center gap-1.5 ${isLeft ? ' flex-row-reverse ' : 'flex'} `}>
                        <p className=" font-montserrat text-xs  "> {text} </p>
                        <Image className={` ${isLeft ? ' rotate-180 ' : ''} `} src='/icons/icon_arrowRightBtn.svg' height={20} width={20} alt='Arrow button' />
                  </section>
            </button>
      );
};

export default BtnRound;
