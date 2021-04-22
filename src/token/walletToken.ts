import Token from "./token";

export class WalletToken implements Token {
  readonly symbol: string;
  readonly name: string;
  readonly address: string;
  readonly decimals: number;
  readonly logoURI: string;
  readonly balance: string;
  readonly price: string;

  constructor(
    { symbol, name, address, decimals, logoURI }: Token,
    { balance, price }: { balance: string; price: string }
  ) {
    this.symbol = symbol;
    this.name = name;
    this.address = address;
    this.decimals = decimals;
    this.logoURI = logoURI;
    this.balance = balance;
    this.price = price;
  }
}