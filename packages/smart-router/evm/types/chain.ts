import { Token } from '@tankswap/sdk'
import { ChainId } from '@tankswap/chains'

// a list of tokens by chain
export type ChainMap<T> = {
  readonly [chainId in ChainId]: T
}

export type ChainTokenList = ChainMap<Token[]>
