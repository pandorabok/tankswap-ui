import { useExpertMode } from '@tankswap/utils/user'
import useAccountActiveChain from 'hooks/useAccountActiveChain'
import { isEvm } from '@tankswap/chains'

import { useIsWrapping } from './useIsWrapping'

export function useAllowRecipient() {
  const [isExpertMode] = useExpertMode()
  const { chainId } = useAccountActiveChain()
  const isWrapping = useIsWrapping()
  return isExpertMode && !isWrapping && isEvm(chainId)
}
