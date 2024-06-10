/** @format */

import React from "react";
import { useNetwork } from "../context/NetworkContext";
import Image from "next/image";
import { useState } from "react";
import { get } from "http";

const loss = [
	{
		price: 0.00001,
		chebu: 1000000.23,
		usd: 2.421,
	},
	{
		price: 0.00002,
		chebu: 1000000.23,
		usd: 3.431,
	},
	{
		price: 0.00003,
		chebu: 1000000.23,
		usd: 3.435,
	},
];

const now = [
	{
		price: 0.00004,
		chebu: 1000000.23,
		usd: 3.423,
	},
];

const profit = [
	{
		price: 0.0002,
		chebu: 1000000.23,
		usd: 3.423,
	},
	{
		price: 0.00025,
		chebu: 1000000.23,
		usd: 3.423,
	},
	{
		price: 0.000321,
		chebu: 1000000.23,
		usd: 3.423,
	},
];

const balance = {
	chebu: 2323322.42,
	usd: 55476.874,
};

const CurrencyCard: React.FC = () => {
	const { network } = useNetwork();
	const [getAmount, setGetAmount] = useState(true);

	if (network === "Solana") {
		return (
			<div className="border-0.5 border-gray-950 bg-gradient-to-b from-[#733AE526]/15 to-[#40A7BB26]/15 w-100 md:w-1/4 h-100 rounded-3xl p-2 md:p-5">
				<CurrencyCardContent />
			</div>
		);
	}
	if (network === "Binance") {
		return (
			<div className="border-0.5 border-gray-950 bg-gradient-to-b from-[#000]/50 to-[#05050426]/20 w-100 md:w-1/4 h-100 rounded-3xl p-2 md:p-5">
				<CurrencyCardContent />
			</div>
		);
	}
	if (network === "Ethereum") {
		return (
			<div className="border-0.5 border-gray-950 bg-gradient-to-b from-[#40415626]/15 to-[#10111E26]/15 w-100 md:w-1/4 h-100 rounded-3xl p-2 md:p-5">
				<CurrencyCardContent />
			</div>
		);
	}
};

const CurrencyCardContent: React.FC = () => {
	const { network } = useNetwork();
	const [getAmount, setGetAmount] = useState(false);
	const [amount, setAmount] = useState(0);

	const increaseAmount = () => {
		setAmount(amount + 1);
	};

	const decreaseAmount = () => {
		setAmount(amount - 1);
	};

	const onButtonClick = () => {
		setGetAmount(!getAmount);
	};

	return (
		<div className="w-100 h-100 flex flex-col gap-5">
			<div className="w-100 h-100 flex flex-row justify-around items-center">
				<p className="text-sm text-[#C5C5C5] font-normal leading-4">
					Price (SQL)
				</p>
				<p className="text-sm text-[#C5C5C5] font-normal leading-4">
					Amount (Chebu)
				</p>
				<p className="text-sm text-[#C5C5C5] font-normal leading-4">
					Amount (USD)
				</p>
			</div>
			{loss.map((item, index) => (
				<div
					key={index}
					className="w-100 h-100 flex flex-row justify-around items-center">
					<p className="text-sm text-red-600 font-normal leading-4">
						{item.price}
					</p>
					<p className="text-sm text-red-600 font-normal leading-4">
						{item.chebu}
					</p>
					<p className="text-sm text-white font-normal leading-4">{item.usd}</p>
				</div>
			))}
			{now.map((item, index) => (
				<div
					key={index}
					className="w-100 h-100 flex flex-row justify-around items-center border-y-2 border-dashed border-[#5C5571] p-3">
					<p className="text-base text-red-600 font-normal leading-4">
						{item.price}
					</p>
					<p className="text-base text-red-600 font-normal leading-4">
						{item.chebu}
					</p>
					<p className="text-base text-white font-normal leading-4">
						{item.usd}
					</p>
				</div>
			))}
			{profit.map((item, index) => (
				<div
					key={index}
					className="w-100 h-100 flex flex-row justify-around items-center">
					<p className="text-sm text-green-600 font-normal leading-4 text-start">
						{item.price}
					</p>
					<p className="text-sm text-green-600 font-normal leading-4 text-start">
						{item.chebu}
					</p>
					<p className="text-sm text-white font-normal leading-4 text-start">
						{item.usd}
					</p>
				</div>
			))}

			{getAmount && (
				<div className="w-100 h-100 p-2 flex flex-col gap-4 justify-start items-start">
					<p className="text-sm text-[#CCCCCC] font-normal leading-4 px-2">
						Amount
					</p>
					<div className="relative w-full">
						<button
							className="absolute left-0 top-0 h-full px-4 text-white rounded-l-full"
							type="button"
							onClick={decreaseAmount}>
							-
						</button>
						<input
							className="rounded-full bg-black/50 text-center text-white py-2 pl-12 pr-12 w-full"
							type="number"
							name="amount"
							id="amount"
							value={amount} // Set the value of the input to the state value
							onChange={(e) => setAmount(parseInt(e.target.value))} // Update the state when the input changes
							style={{
								WebkitAppearance: "none",
								MozAppearance: "textfield",
								margin: 0,
							}}
						/>
						<button
							className="absolute right-0 top-0 h-full px-4 text-white rounded-r-full"
							type="button"
							onClick={increaseAmount}>
							+
						</button>
					</div>
				</div>
			)}

			<div className="w-100 h-100 p-2 flex flex-col gap-2">
				<p className="text-sm text-[#CCCCCC] font-normal leading-4 px-2">
					Your balance
				</p>
				<div className="w-100 h-auto bg-black rounded-full flex flex-row justify-between items-center p-3 gap-6">
					<p className="text-base text-white font-normal leading-4">
						{balance.chebu} <span className="text-[#797489] ml-1">Chebu</span>
					</p>
					<p className="text-base text-white font-normal leading-4">
						{balance.usd} <span className="text-[#797489] ml-1">USD</span>
					</p>
				</div>
				<div className="relative w-full rounded-full bg-black p-1">
					<div className="relative flex flex-row">
						<button
							onClick={onButtonClick}
							className="w-1/2 rounded-full bg-green-400 p-4 text-white text-base font-bold leading-5">
							Buy
						</button>
						<button
							onClick={onButtonClick}
							className="w-1/2 rounded-full bg-red-500 p-4 text-white text-base font-bold leading-5">
							Sell
						</button>
					</div>
					<div className="absolute top-0 left-[35%] p-3 bg-black rounded-full">
						{network === "Solana" && (
							<Image
								src="/solana/currency.png"
								alt="Currency"
								width={80}
								height={24}
							/>
						)}
						{network === "Binance" && (
							<Image
								src="/binance/currency.png"
								alt="Currency"
								width={80}
								height={24}
							/>
						)}
						{network === "Ethereum" && (
							<Image
								src="/ethereum/currency.png"
								alt="Currency"
								width={80}
								height={24}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrencyCard;
