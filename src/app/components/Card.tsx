/** @format */

import React from "react";
import Image from "next/image";
import "../globals.css";
import { useNetwork } from "../context/NetworkContext";

interface CardProps {
	image: string;
	title: string;
	subtitle: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle }) => {
	const { setNetwork } = useNetwork();

	const onClick = () => {
		setNetwork(title);
	};

	return (
		<div
			onClick={onClick}
			className="w-full md:w-[200px] md:h-[200px] h-auto bg-gradient-to-b from-[#4A435926] to-[#24323526] shadow-[0px_4px_300px_rgba(0,0,0,0.25),_inset_0px_8px_40px_rgba(0,0,0,0.25)] rounded-2xl flex flex-row gap-5 md:gap-0 md:flex-col justify-start md:justify-around px-5 md:py-0 py-5 cursor-pointer ">
			<Image src={image} alt={title} width={42} height={42} />
			<div>
				<h1 className="text-white text-[24px] font-medium text-left leading-[24.59px]">
					{title}
				</h1>
				<p className="text-[#CBCBCB] text-[18px] font-normal leading-[24.59px]">
					{subtitle}
				</p>
			</div>
		</div>
	);
};

export default Card;
