"use client";
import React from 'react';

export type BtnPrimaryProps = {
	text: string
}

const BtnPrimary: React.FC<BtnPrimaryProps>  = ({ text }) => {
	return (
		<button className=" py-2 px-8 md:px-10 rounded-lg bg-bgBtnPrimary font-montserrat text-xs text-white ">
                  {text}
            </button>
	);
};

export default BtnPrimary;
