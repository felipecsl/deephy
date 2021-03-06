import { Network } from "../../chain";

// Represents an ERC20 token
export default interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
  network: string;
}

export const ETH_TOKEN = {
  symbol: "ETH",
  name: "Ehereum",
  address: "",
  network: Network[Network.ETHEREUM],
  decimals: 18,
  logoURI:
    "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
} as Token;

export const BNB_TOKEN = {
  symbol: "BNB",
  name: "Binance Coin",
  network: Network[Network.BSC],
  address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  decimals: 18,
  logoURI: "https://bscscan.com/token/images/binance_32.png",
} as Token;
