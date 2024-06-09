/** @format */
"use client";

import React, { useContext, useState } from "react";
import {ContainerProps, WalletContextType} from "../types/types";

const WalletContextState = {
	wallet: "",
	setWallet: () => {},
};

const WalletContext =
	React.createContext<WalletContextType>(WalletContextState);

const WalletProvider = (props: ContainerProps) => {
	const [wallet, setWallet] = useState<string>("");

	return (
		<WalletContext.Provider value={{ wallet, setWallet }}>
			{props.children}
		</WalletContext.Provider>
	);
};

const useWallet = () => {
	const context = useContext(WalletContext);
	if (context === undefined) {
		throw new Error("useWallet must be used within a WalletProvider");
	}
	return context;
};

export { WalletProvider, useWallet };
