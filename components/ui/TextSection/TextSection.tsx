"use client";
import React from 'react';

export type TextSectionProps = {
	text: string,
      className?: string
}

const TextSection: React.FC<TextSectionProps>  = ({ text, className }) => {
	return (
		<p className={` ${className}  text-sm md:text-lg font-montserrat `}> {text} </p>
	);
};

export default TextSection;
