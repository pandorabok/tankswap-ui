import { CardProps } from '@tankswap/uikit'
import { NftLocation, NftToken } from 'hooks/useProfile/nft/types'

export interface CollectibleCardProps extends CardProps {
  nft: NftToken
  nftLocation?: NftLocation
  currentAskPrice?: number
  isUserNft?: boolean
}
