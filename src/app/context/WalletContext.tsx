/** @format */
"use client";

import React, { useContext, useState } from "react";
import { ContainerProps, WalletContextType } from "../types/types";

const WalletContextState = {
	wallet: "",
	setWallet: () => {},
	connected: false,
	setConnected: () => {},
};

const WalletContext = React.createContext<WalletContextType>(WalletContextState);

const WalletProvider: React.FC<ContainerProps> = (props) => {
	const [wallet, setWallet] = useState<string>("");
	const [connected, setConnected] = useState<boolean>(false);

	return (
		<WalletContext.Provider value={{ wallet, setWallet, connected, setConnected }}>
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
