/** @format */

import React from "react";
import { useNetwork } from "../context/NetworkContext";


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
			</div>
		</div>
	);
};

export default CurrencyCard;
