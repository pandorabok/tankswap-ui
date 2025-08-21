import { getSourceChain } from '@tankswap/ifos'
import { useMemo } from 'react'
import { ChainId } from '@tankswap/chains'

// By deafult source chain is the first chain that supports native ifo
export function useIfoSourceChain(chainId?: ChainId) {
  return useMemo(() => getSourceChain(chainId) || ChainId.BSC, [chainId])
}
