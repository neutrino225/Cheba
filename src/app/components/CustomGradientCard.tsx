/** @format */
"use client";

import Image from "next/image";
import { useNetwork } from "../context/NetworkContext";

interface CustomGradientCardProps {
	image: string;
	title: string;
	subtitle: string;
}

const CustomGradientCard = ({
	image,
	title,
	subtitle,
}: CustomGradientCardProps) => {
	const { network, setNetwork } = useNetwork();

	const onClick = () => {
		setNetwork(title);
	};

	if (network === title) {
		return (
			<div
				onClick={onClick}
				className="cursor-pointer h-full w-full rounded-lg bg-gradient-to-r from-[#19FB9B] to-[#8C01FA] p-1 shadow-2xl shadow-[#5DD8B333]/20">
				<div className="flex h-full w-full items-center justify-center rounded-lg bg-black/90">
					<div className="flex h-full w-full flex-row md:flex-col items-start justify-start md:justify-between gap-8 md:gap-12 py-5 rounded-lg bg-gradient-to-r from-[#4A435926] to-[#24323526] p-4">
						<Image src={image} alt={title} width={42} height={42} />
						<div>
							<h1 className="text-2xl font-medium leading-7 text-white">
								{title}
							</h1>
							<p className="text-lg font-normal leading-7 text-white">
								{subtitle}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			onClick={onClick}
			className="cursor-pointer h-full w-full shadow-[0px_4px_300px_rgba(0,0,0,0.25),_inset_0px_8px_40px_rgba(0,0,0,0.25)] rounded-lg hover:bg-gradient-to-r from-[#19FB9B] to-[#8C01FA] p-1 hover:shadow-2xl hover:shadow-[#5DD8B333]/20">
			<div className="flex h-full w-full items-center justify-center rounded-lg bg-black/90">
				<div className="flex h-full w-full flex-row md:flex-col items-start justify-start md:justify-between gap-8 md:gap-12 py-5 rounded-lg bg-gradient-to-r from-[#4A435926] to-[#24323526] p-4">
					<Image src={image} alt={title} width={42} height={42} />
					<div>
						<h1 className="text-2xl font-medium leading-7 text-white">
							{title}
						</h1>
						<p className="text-lg font-normal leading-7 text-white">
							{subtitle}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomGradientCard;
