/** @format */

import React from "react";
import { useWallet } from "../context/WalletContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface DropdownOption {
	img: string;
	text: string;
}

interface WalletDropDownProps {
	options: DropdownOption[];
	text: string;
	img: string;
}

const WalletDropdown: React.FC<WalletDropDownProps> = ({
	options,
	text,
	img,
}) => {
	const { wallet } = useWallet();
	const router = useRouter();

	const handleOptionClick = (option: DropdownOption) => {
		router.push("/connectWallet");
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<div className="relative flex flex-row justify-start items-center w-[200px] pr-4">
					<Image
						className="ml-2"
						src={img}
						alt="Dropdown img"
						width={32}
						height={32}
						sizes="(max-width: 768px) 20px, 32px"
					/>
					<button className="bg-transparent w-[70px] md:w-[200px] h-[48px] rounded-full flex flex-row justify-center items-center text-white font-[600] text-[14px] gap-1">
						{text}
					</button>
				</div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content
				align="start"
				sideOffset={5}
				className="bg-[#1D1D22] rounded-xl shadow-md min-w-[200px]">
				{options.map((option) => (
					<DropdownMenu.Item
						key={option.text}
						onSelect={() => handleOptionClick(option)}
						className="w-full h-[48px] flex flex-row hover:bg-sky-700 justify-start items-center text-white font-[600] text-[15px] gap-2 cursor-pointer bg-transparent border-0 text-left px-5">
						<Image
							src={option.img}
							alt={option.text}
							width={32}
							height={32}
							sizes="(max-width: 768px) 20px, 32px"
						/>
						<span className="flex-grow text-center">{option.text}</span>
					</DropdownMenu.Item>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default WalletDropdown;
