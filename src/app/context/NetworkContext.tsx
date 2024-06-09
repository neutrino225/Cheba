/** @format */
"use client";
import React, { useState, useContext } from "react";
import { ContainerProps, NetworkContextType } from "../types/types";

const NetworkContextState = {
	network: "",
	setNetwork: () => {},
};

const NetworkContext =
	React.createContext<NetworkContextType>(NetworkContextState);

const NetworkProvider = (props: ContainerProps) => {
	const [network, setNetwork] = useState<string>("");

	return (
		<NetworkContext.Provider value={{ network, setNetwork }}>
			{props.children}
		</NetworkContext.Provider>
	);
};

const useNetwork = () => {
	const context = useContext(NetworkContext);
	if (context === undefined) {
		throw new Error("useNetwork must be used within a NetworkProvider");
	}
	return context;
};

export { NetworkProvider, useNetwork };
