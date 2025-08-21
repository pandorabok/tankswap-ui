// NOTE: duplicate of the function in apps/web/src/views/Swap/V3Swap/utils/exchange.ts

import { ChainId, chainNames } from "@tankswap/chains";
import { Currency } from "@tankswap/sdk";
import upperCase from "lodash/upperCase";
// due to the dependency limitation
export function displaySymbolWithChainName(currency?: Currency, showChainName?: boolean) {
  let string = currency?.symbol;

  if (currency?.chainId && showChainName) {
    string = `${string} (${upperCase(chainNames[currency.chainId as ChainId])})`;
  }
  return string;
}
