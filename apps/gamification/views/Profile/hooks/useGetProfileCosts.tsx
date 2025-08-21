import { useTranslation } from '@tankswap/localization'
import { ChainId } from '@tankswap/chains'
import { useToast } from '@tankswap/uikit'
import { tankProfileABI } from 'config/abi/tankProfile'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useEffect, useState } from 'react'
import { getPancakeProfileAddress } from 'utils/addressHelpers'
import { publicClient } from 'utils/wagmi'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [costs, setCosts] = useState({
    numberCakeToReactivate: 0n,
    numberCakeToRegister: 0n,
    numberCakeToUpdate: 0n,
  })
  const { toastError } = useToast()
  const { chainId } = useActiveChainId()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const tankProfileAddress = getPancakeProfileAddress()

        const [numberCakeToReactivate, numberCakeToRegister, numberCakeToUpdate] = await publicClient({
          chainId: ChainId.BSC,
        }).multicall({
          allowFailure: false,
          contracts: [
            {
              address: tankProfileAddress,
              abi: tankProfileABI,
              functionName: 'numberCakeToReactivate',
            },
            {
              address: tankProfileAddress,
              abi: tankProfileABI,
              functionName: 'numberCakeToRegister',
            },
            {
              address: tankProfileAddress,
              abi: tankProfileABI,
              functionName: 'numberCakeToUpdate',
            },
          ],
        })

        setCosts({
          numberCakeToReactivate,
          numberCakeToRegister,
          numberCakeToUpdate,
        })
        setIsLoading(false)
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve CAKE costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t, chainId])

  return { costs, isLoading }
}

export default useGetProfileCosts
