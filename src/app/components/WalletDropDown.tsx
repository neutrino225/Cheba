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
	const {connected } = useWallet();
	const router = useRouter();

	const handleLogout = () => {
		router.push("/confirmLogout");
	};

	const handleOptionClick = (option: DropdownOption) => {
		router.push("/connectWallet");
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<div className="relative flex flex-row justify-start items-center w-[100px] md:w-[200px] p-0 md:pr-4">
					<Image
						className="ml-2"
						src={connected ? "/metamask.png" : img}
						alt="Dropdown img"
						width={32}
						height={32}
					/>
					<button className="bg-transparent w-[70px] md:w-[200px] h-[48px] rounded-full flex flex-row justify-center items-center text-white font-[600] text-[14px] gap-1">
						<span className="truncate">{connected ? "Connected" : text}</span>
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
				{connected && (
					<DropdownMenu.Item
						onSelect={handleLogout}
						className="w-full h-[48px] flex flex-row hover:bg-sky-700 justify-start items-center text-white font-[600] text-[15px] gap-2 cursor-pointer bg-transparent border-0 text-left px-5">
						<div className="bg-[#111111] p-2 rounded-full flex justify-center items-center">
							<Image
								src="/logout.png"
								alt="Logout"
								width={18}
								height={18}
							/>
						</div>
						<span className="flex-grow text-center">Logout</span>
					</DropdownMenu.Item>
				)}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

export default WalletDropdown;
