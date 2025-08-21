import { isChainSupported, ChainId, getChainIdByChainName } from '@tankswap/chains'
import safeGetWindow from '@tankswap/utils/safeGetWindow'

export function getQueryChainId() {
  const window = safeGetWindow()
  if (!window) {
    return ChainId.BSC
  }
  const params = new URL(window.location.href).searchParams
  const chainId = getChainIdByChainName(params.get('chain') || '')
  if (!chainId) {
    return undefined
  }
  return chainId
}
