/** @format */
"use client";

import Image from "next/image";
import Dropdown from "./Dropdown";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useNetwork } from "../context/NetworkContext";
import { useWallet } from "../context/WalletContext";

const options1 = [
	{
		img: "/solana.png",
		text: "Solana",
	},
	{
		img: "/binance.png",
		text: "Binance",
	},
	{
		img: "/ethereum.png",
		text: "Ethereum",
	},
];

const options2 = [
	{
		img: "/metamask.png",
		text: "Metamask",
	},
	{
		img: "/anotherWallet.png",
		text: "Another Wallet",
	},
];

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

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const { network, setNetwork } = useNetwork();
	const { wallet, setWallet } = useWallet();

	const toggleMenu = () => {
		console.log("clicked");
		setIsOpen(!isOpen);
	};

	return (
		<nav className="flex flex-col justify-center items-center">
			<div className="w-full flex flex-row-reverse md:flex-row justify-between items-center px-4 py-4 md:px-20 md:py-4">
				<div>
					<div className="relative bg-[#3C3C3C] w-[108px] h-[48px] rounded-full md:hidden z-30">
						<Dropdown
							options={options2}
							text="Wallet"
							img="/dropdown2.png"
							showSvg={false}
							setValue={setWallet}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-start items-center gap-2">
					{network == "" && (
						<Image
							className="hidden md:block"
							src="/logo.png"
							alt="Cheba"
							width={54.22}
							height={44.62}
						/>
					)}
					{network == "Solana" && (
						<Image
							className="hidden md:block"
							src="/solana/logo.png"
							alt="Cheba"
							width={54.22}
							height={44.62}
						/>
					)}
					{network == "Binance" && (
						<Image
							className="hidden md:block"
							src="/binance/logo.png"
							alt="Cheba"
							width={54.22}
							height={44.62}
						/>
					)}{network == "Ethereum" && (
						<Image
							className="hidden md:block"
							src="/ethereum/logo.png"
							alt="Cheba"
							width={54.22}
							height={44.62}
						/>
					)}
					<p className="text-white md:text-[#bbb] leading-5 font-bold text-[19px] z-10">
						Chebu
					</p>
				</div>
				<div className="hidden md:flex flex-1 flex-row justify-end items-center gap-3">
					<div className="w-[474px] h-[48px] rounded-full bg-[#212121] flex flex-row justify-end items-center gap-2 p-2 pl-5">
						<div>
							<button
								className="text-white leading-[20.64px] font-medium text-[15px] z-10"
								onClick={() => router.push("/about")}>
								How it works
							</button>
						</div>
						<div className="flex flex-row gap-1 justify-end flex-1">
							<div className="bg-[#111111] w-[150px] h-[40px] rounded-full flex flex-row justify-center items-center text-white gap-2">
								<p className="text-[#bbb] leading-[20.64px] font-medium text-[15px]">
									Holders:{" "}
								</p>
								<p className="text-[#fff] leading-[20.64px] font-medium text-[15px]">
									223K
								</p>
							</div>
							<div className="bg-[#111111] w-[150px] h-[40px] rounded-full flex flex-row justify-center items-center text-white gap-2">
								<p className="text-[#bbb] leading-[20.64px] font-medium text-[15px]">
									TVL:
								</p>
								<p className="text-[#fff] leading-[20.64px] font-medium text-[15px]">
									1,23M ${" "}
								</p>
							</div>
						</div>
					</div>
					<div className="relative bg-[#212121] w-[200px] h-[48px] rounded-full flex flex-row justify-center items-center">
						<Dropdown
							options={options1}
							text="Select net"
							img="/dropdown.png"
							showSvg={true}
							setValue={setNetwork}
						/>
					</div>
					<div className="relative bg-[#3C3C3C] w-[200px] h-[48px] rounded-full">
						<Dropdown
							options={options2}
							text="Choose wallet"
							img="/dropdown2.png"
							showSvg={false}
							setValue={setWallet}
						/>
					</div>
				</div>
				<div className="md:hidden flex items-center">
					<button onClick={toggleMenu} className="focus:outline-none z-20">
						{isOpen ? (
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div className="w-100 h-100 bg-black rounded-full block p-1 md:hidden z-20">
				<div className="flex flex-row gap-3 justify-end flex-1">
					<div className="bg-[#111111] w-[150px] h-[40px] rounded-full flex flex-row justify-center items-center text-white gap-2">
						<p className="text-[#bbb] leading-[20.64px] font-medium text-[15px]">
							Holders:{" "}
						</p>
						<p className="text-[#fff] leading-[20.64px] font-medium text-[15px]">
							223K
						</p>
					</div>
					<div className="bg-[#111111] w-[150px] h-[40px] rounded-full flex flex-row justify-center items-center text-white gap-2">
						<p className="text-[#bbb] leading-[20.64px] font-medium text-[15px]">
							TVL:
						</p>
						<p className="text-[#fff] leading-[20.64px] font-medium text-[15px]">
							1,23M ${" "}
						</p>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden absolute top-16 left-0 w-full bg-[#212121] p-4 rounded-b-lg shadow-lg z-20">
					<button
						className="block w-full text-white leading-[20.64px] font-medium text-[15px] mb-4"
						onClick={() => {
							router.push("/about");
							toggleMenu();
						}}>
						How it works
					</button>
					<div className="w-full flex flex-col self-start justify-start items-start gap-3 mt-10">
						<div className="w-full grid grid-cols-1 gap-x-10 gap-y-5" onClick={toggleMenu}>
							{data.map((item, index) => (
								<Card
									key={index}
									image={item.image}
									title={item.title}
									subtitle={item.subtitle}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
