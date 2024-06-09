/** @format */

import React, { useEffect, useState } from "react";
import { useNetwork } from "../context/NetworkContext";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

interface DropdownOption {
	img: string;
	text: string;
}

interface NetWorkDropDown {
	options: DropdownOption[];
	text: string;
	img: string;
}

const NetworkDropdown: React.FC<NetWorkDropDown> = ({ options, text, img }) => {
	const [selectedOptionImage, setSelectedOptionImage] = useState<string>(img);
	const [selectedOptionText, setSelectedOptionText] = useState<string>(text);
	const { network, setNetwork } = useNetwork();

	useEffect(() => {
		if (network !== "") {
			const selectedOption = options.find((option) => option.text === network);
			if (selectedOption) {
				setSelectedOptionText(selectedOption.text);
				setSelectedOptionImage(selectedOption.img);
			}
		} else {
			setSelectedOptionText(text);
			setSelectedOptionImage(img);
		}
	}, [network, options, text, img]);

	const handleOptionClick = (option: DropdownOption) => {
		setNetwork(option.text);
		setSelectedOptionText(option.text);
		setSelectedOptionImage(option.img);
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<div className="relative flex flex-row justify-start items-center w-[200px] pr-4">
					<Image
						className="ml-2"
						src={selectedOptionImage}
						alt="Dropdown img"
						width={32}
						height={32}
						sizes="(max-width: 768px) 20px, 32px"
					/>
					<button className="bg-transparent w-[70px] md:w-[200px] h-[48px] rounded-full flex flex-row justify-center items-center text-white font-[600] text-[14px] gap-1">
						{selectedOptionText}
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

export default NetworkDropdown;
