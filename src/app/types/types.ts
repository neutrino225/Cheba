/** @format */

export type ContainerProps = {
	children: React.ReactNode;
};

export type Network = "Select net" | "Solana" | "Binance" | "Ethereum";

export type NetworkContextType = {
	network: string;
	setNetwork: React.Dispatch<React.SetStateAction<string>>;
};

export type Wallet =
	| "Connect Wallet"
	| "Wallet"
	| "Metamask"
	| "Another Wallet";

export type WalletContextType = {
	wallet: string;
	setWallet: React.Dispatch<React.SetStateAction<string>>;
	connected: boolean;
	setConnected: React.Dispatch<React.SetStateAction<boolean>>;
};
