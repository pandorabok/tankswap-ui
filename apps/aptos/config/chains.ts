import { defaultChain } from '@tankswap/awgmi'
import { mainnet, testnet, Chain } from '@tankswap/awgmi/core'

export { defaultChain }

export const chains = [mainnet, testnet].filter(Boolean) as Chain[]

export const SOLANA_MENU = {
  id: 2,
  name: 'Solana',
  link: process.env.SOLANA_SWAP_PAGE ?? 'https://solana.tankswap.finance/swap',
  image: 'https://tokens.tankswap.finance/images/symbol/sol.png',
}
