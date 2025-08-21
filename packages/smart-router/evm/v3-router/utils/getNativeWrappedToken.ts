import { Token, WNATIVE } from '@tankswap/sdk'
import { ChainId } from '@tankswap/chains'

export function getNativeWrappedToken(chainId: ChainId): Token | null {
  return WNATIVE[chainId] ?? null
}
