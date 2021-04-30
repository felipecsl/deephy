import { Chain } from "../chain";
import { MetaMaskProvider } from "../providers/metamaskProvider";

export default class FakeMetaMaskProvider implements MetaMaskProvider {
  private readonly accounts: string[];
  private readonly chain: Chain;

  constructor(accounts: string[], chain: Chain) {
    this.accounts = accounts;
    this.chain = chain;
  }

  isMetaMaskInstalled(): boolean {
    return true;
  }

  chainId(): Promise<Chain> {
    return Promise.resolve(this.chain);
  }

  requestAccounts(): Promise<string[]> {
    return Promise.resolve(this.accounts);
  }
}
