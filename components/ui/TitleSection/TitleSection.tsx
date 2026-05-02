"use client";
import React from 'react';

export type TitleSectionProps = {
	text: string,
      className?: string
}

const TitleSection: React.FC<TitleSectionProps>  = ({ text, className }) => {
	return (
		<h2 className={` text-2xl md:text-3xl 2xl:text-5xl font-lora uppercase text-textTitlePrimary ${className}`}> {text} </h2>
	);
};

export default TitleSection;


/* 

text-2xl md:text-4xl font-lora uppercase text-textTitlePrimary*/