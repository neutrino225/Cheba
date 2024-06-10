/** @format */
"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Socials from "./components/socials";
import { useNetwork } from "./context/NetworkContext";
import CurrencyCard from "./components/CurrencyCard";
import { useRef } from "react";
import CustomGradientCard from "./components/CustomGradientCard";

const data = [
	{
		image: "/ethereum42x42.png",
		title: "Ethereum",
		subtitle: "12,232.23 $",
	},
	{
		image: "/solana42x42.png",
		title: "Solana",
		subtitle: "12,232.23 $",
	},
	{
		image: "/binance42x42.png",
		title: "Binance",
		subtitle: "12,232.23 $",
	},
];

const Home = () => {
	const { network } = useNetwork();
	const priceRef = useRef<HTMLDivElement>(null);

	const handleViewPriceClick = () => {
		if (priceRef.current) {
			priceRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main className="w-screen h-full overflow-x-hidden flex flex-col md:overflow-hidden">
				<div className="absolute w-3/4 md:w-1/4 h-1/6 top-6 left-[-15px] z-10">
					<Image
						src="/particles.svg"
						alt="particles"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* SPOTLIGHT */}
				{network == "" && (
					<Image
						src="/spotlight.svg"
						alt="left-spotlight"
						layout="fill"
						objectFit="cover"
						className="absolute top-0 left-0 -z-10"
					/>
				)}
				{network == "Solana" && (
					<Image
						src="/solana/spotlight.svg"
						alt="left-spotlight"
						layout="fill"
						objectFit="cover"
						className="absolute top-0 left-0 -z-10"
					/>
				)}
				{network == "Binance" && (
					<Image
						src="/binance/spotlight.svg"
						alt="left-spotlight"
						layout="fill"
						objectFit="cover"
						className="absolute top-0 left-0 -z-10"
					/>
				)}
				{network == "Ethereum" && (
					<Image
						src="/ethereum/spotlight.svg"
						alt="left-spotlight"
						layout="fill"
						objectFit="cover"
						className="absolute top-0 left-0 -z-10"
					/>
				)}

				{/* TOP LEFT ILLUMINATION */}
				{network == "" && (
					<Image
						src="/eclipse00.svg"
						alt="top-left-illumination"
						width={394}
						height={394}
						className="absolute top-0 left-0 -z-10"
					/>
				)}
				{network == "Solana" && (
					<Image
						src="/solana/eclipse00.svg"
						alt="top-left-illumination"
						width={394}
						height={394}
						className="absolute top-0 left-0 -z-10"
					/>
				)}
				{network == "Binance" && (
					<Image
						src="/binance/eclipse00.svg"
						alt="top-left-illumination"
						width={394}
						height={394}
						className="absolute top-0 left-0 -z-10"
					/>
				)}
				{network == "Ethereum" && (
					<Image
						src="/ethereum/eclipse00.svg"
						alt="top-left-illumination"
						width={394}
						height={394}
						className="absolute top-0 left-0 -z-10"
					/>
				)}

				{/* BOTTOM RIGHT ILLUMINATION */}
				{network == "" && (
					<Image
						src="/eclipse11.svg"
						alt="Bottom-right-illumination"
						width={394}
						height={394}
						className="fixed bottom-0 right-0 -z-10"
					/>
				)}
				{network == "Solana" && (
					<Image
						src="/solana/eclipse11.svg"
						alt="Bottom-right-illumination"
						width={394}
						height={394}
						className="fixed bottom-0 right-0 -z-10"
					/>
				)}
				{network == "Binance" && (
					<Image
						src="/binance/eclipse11.svg"
						alt="Bottom-right-illumination"
						width={394}
						height={394}
						className="fixed bottom-0 right-0 -z-10"
					/>
				)}
				{network == "Ethereum" && (
					<Image
						src="/ethereum/eclipse11.svg"
						alt="Bottom-right-illumination"
						width={394}
						height={394}
						className="fixed bottom-0 right-0 -z-10"
					/>
				)}

				<section className="w-full flex flex-col justify-center gap-28 p-4 md:p-0 md:px-20 mt-10 md:mt-0">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 w-full">
						<div className="hidden md:flex">
							<Socials />
						</div>
						<div className="w-full md:w-auto flex flex-col justify-start items-start">
							{network === "" && (
								<>
									<Image
										src="/helloimchebu.png"
										width={328}
										height={158}
										alt="Hello I am chebu"
										sizes="(max-width: 768px) 200px, 328px"
									/>
									<Image
										src="/chebu-main.png"
										width={600}
										height={500}
										alt="Chebu"
									/>
								</>
							)}
							{network === "Solana" && (
								<>
									<Image
										src="/solana/helloimchebu.png"
										width={328}
										height={158}
										alt="Hello I am chebu"
										sizes="(max-width: 768px) 200px, 328px"
									/>
									<Image
										src="/solana/chebu-main.png"
										width={600}
										height={500}
										alt="Chebu"
									/>
								</>
							)}
							{network === "Binance" && (
								<>
									<Image
										src="/binance/helloimchebu.png"
										width={328}
										height={158}
										alt="Hello I am chebu"
										sizes="(max-width: 768px) 200px, 328px"
									/>
									<Image
										src="/binance/chebu-main.png"
										width={600}
										height={500}
										alt="Chebu"
									/>
								</>
							)}
							{network === "Ethereum" && (
								<>
									<Image
										src="/ethereum/helloimchebu.png"
										width={328}
										height={158}
										alt="Hello I am chebu"
										sizes="(max-width: 768px) 200px, 328px"
									/>
									<Image
										src="/ethereum/chebu-main.png"
										width={600}
										height={500}
										alt="Chebu"
									/>
								</>
							)}
							{network != "" && (
								<div className="md:hidden w-100 flex flex-row gap-4 justify-center items-center w-full z-20 cursor-pointer">
									<button
										onClick={handleViewPriceClick}
										className="flex flex-row gap-4 justify-center items-center w-full z-20 cursor-pointer">
										<p className="w-100 text-white text-base">View price</p>
										<Image
											src="/downarrow.svg"
											alt="down-arrow"
											width={24}
											height={24}
										/>
									</button>
								</div>
							)}
						</div>

						{network == "" && (
							<div className="w-full md:w-96 hidden md:flex flex-col self-start justify-start items-start gap-3 mt-10 md:mt-20 mr-9">
								<h1 className="text-[32px] font-medium text-white leading-[43.71px]">
									Choose your Chebu
								</h1>
								<div className="w-full grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
									{data.map((item, index) => (
										<CustomGradientCard
											key={index}
											image={item.image}
											title={item.title}
											subtitle={item.subtitle}
										/>
									))}
								</div>
							</div>
						)}
						{network != "" && <CurrencyCard />}
					</div>

					<div className="w-full relative">
						<div className="w-full md:w-[1296px] h-auto md:h-[102px] bg-transparent md:bg-[url(/Rectangle.png)] flex flex-col md:flex-row justify-around items-center mx-auto gap-4 md:gap-0">
							<div className="flex flex-col justify-center items-center bg-[#0000004D] md:bg-transparent rounded-2xl md:rounded-none w-full md:w-auto p-4 md:p-0">
								<p className="text-white text-[24px] font-medium">2d:4h:2s</p>
								<p className="text-[#989898] text-[13px] font-normal">
									Live time
								</p>
							</div>
							<div className="bg-[#0000004D] md:bg-transparent rounded-2xl md:rounded-none w-full md:w-1/6 flex flex-col justify-center items-center border-none md:border-x-4 md:border-[#6B6B72] p-4 md:p-0">
								<p className="text-white text-[24px] font-medium">
									7 / 1.000.000
								</p>
								<p className="text-[#989898] text-[13px] font-normal">Level</p>
							</div>
							<div className="flex flex-col justify-center items-center bg-[#0000004D] md:bg-transparent rounded-2xl md:rounded-none w-full md:w-auto p-4 md:p-0">
								<p className="text-white text-[24px] font-medium">37</p>
								<p className="text-[#989898] text-[13px] font-normal">
									Max Level
								</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center md:hidden">
						<Socials />
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
