/** @format */
"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useNetwork } from "../context/NetworkContext";
import Socials from "../components/socials";

const AboutPage: React.FC = () => {
	const { network } = useNetwork();
	return (
		<main className="w-screen h-screen relative lg:overflow-hidden overflow-x-hidden">
			<Navbar />
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

			<section className="w-screen min-h-screen flex flex-col justify-around items-center gap-20 py-10 px-8 md:px-20 max:md:px-4">
				<div className="w-full flex flex-row items-center justify-center relative">
					<div className="absolute left-0 max-md:hidden">
						<Socials />
					</div>
					<div className="max-w-min flex flex-col justify-center items-center">
						<div className="flex flex-col justify-center items-center gap-20">
							<h1 className="text-white text-[32px] font-medium">
								How it works
							</h1>
							<div className="flex flex-col md:flex-row justify-center items-center gap-10">
								<div className="w-[300px] h-[156px] bg-[#2D2D2D4D] rounded-2xl flex flex-col justify-center items-center p-10 gap-2">
									<p className="text-white text-sm leading-7">I</p>
									<p className="text-white leading-7 text-2xl">Buy</p>
								</div>
								<div className="w-[300px] h-[156px] bg-[#2D2D2D4D] rounded-2xl flex flex-col justify-center items-center p-10 gap-2">
									<p className="text-white text-sm leading-7">II</p>
									<p className="text-white leading-7 text-2xl">Shill / Hold</p>
								</div>
								<div className="w-[300px] h-[156px] bg-[#2D2D2D4D] rounded-2xl flex flex-col justify-center items-center p-10 gap-2">
									<p className="text-white text-sm leading-7">III</p>
									<p className="text-white leading-7 text-2xl">Take profit</p>
								</div>
							</div>
							<div className="flex flex-col gap-10">
								<p className="text-white text-[14px] font-normal text-justify md:text-center leading-7">
									Introducing Chebu, an automatic liquidity distribution system
									capped at a cool 1 trillion tokens, with a pre-programmed
									selling price at each of its 1 million levels. Token security?
									Locked in with a nonrugpull mechanism, meaning only token
									buyers can withdraw liquidity. Every token bought boosts the
									TVL. Developers skipped the pre-mint dance.
								</p>
								<p className="text-white text-[14px] font-normal text-justify md:text-center leading-7">
									The developer takes a 5% cut from each transaction and
									reinvests it into more token shilling. The game plan&apos;s
									simple: Buy, Shill, Take Profit. Good luck out there!
								</p>
							</div>
						</div>
					</div>
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
				<div className="flex md:hidden">
					<Socials />
				</div>
			</section>
		</main>
	);
};

export default AboutPage;
