import { GetStaticProps } from 'next'
import { ChainId } from '@tankswap/chains'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { tankProfileABI } from 'config/abi/tankProfile'
import { getCollections } from 'state/nftMarket/helpers'
import { getPancakeProfileAddress } from 'utils/addressHelpers'
import { getProfileContract } from 'utils/contractHelpers'
import { viemServerClients } from 'utils/viem.server'
import PancakeCollectiblesPageRouter from 'views/Profile/components/PancakeCollectiblesPageRouter'

const PancakeCollectiblesPage = () => {
  return <PancakeCollectiblesPageRouter />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  const fetchedCollections = await getCollections()
  if (!fetchedCollections || !Object.keys(fetchedCollections).length) {
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 60,
    }
  }

  try {
    const profileContract = getProfileContract()
    const nftRole = await profileContract.read.NFT_ROLE()

    const collectionRoles = await viemServerClients[ChainId.BSC].multicall({
      contracts: Object.keys(fetchedCollections).map((collectionAddress) => {
        return {
          abi: tankProfileABI,
          address: getPancakeProfileAddress(),
          functionName: 'hasRole',
          args: [nftRole, collectionAddress],
        }
      }),
      allowFailure: false,
    })

    const tankCollectibles = Object.values(fetchedCollections).filter((_, index) => {
      return collectionRoles[index]
    })

    queryClient.setQueryData(['tankCollectibles'], tankCollectibles)

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 60 * 60 * 12, // 12 hours
    }
  } catch (error) {
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 60,
    }
  }
}

export default PancakeCollectiblesPage
