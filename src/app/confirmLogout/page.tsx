/** @format */
"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useNetwork } from "../context/NetworkContext";
import Socials from "../components/socials";
import { useRouter } from "next/navigation";

const ConnectWallet: React.FC = () => {
	const { network } = useNetwork();
	const router = useRouter();
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

			<section className="w-screen min-h-screen flex flex-col justify-around items-center gap-[180px] py-2 md:py-10 px-8 md:px-20 max-md:mt-10">
				<div className="w-full flex flex-row items-center justify-center relative">
					<div className="absolute left-0 max-md:hidden">
						<Socials />
					</div>
					<div className="w-1/3 flex flex-col justify-center items-center bg-black/30 p-4 gap-28 rounded-3xl">
						<div>
							<Image
								src="/metamask/icon_metamask.png"
								alt="MetaMask"
								width={200}
								height={200}
							/>
							<p className="text-white text-2xl font-normal leading-7">
								Connect via Metamask
							</p>
						</div>
						<div className="flex flex-row justify-center items-center gap-4">
							<button
								onClick={() => router.back()}
								className="text-white text-lg border border-[#303742] p-4 rounded-full w-[150px]">
								Go back
							</button>
							<button className="text-white text-lg border border-[#303742] p-4 rounded-full w-[150px] bg-[#191E25]">
								Connect
							</button>
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

export default ConnectWallet;
