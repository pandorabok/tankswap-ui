import { NextLinkFromReactRouter } from '@tankswap/widgets-internal'
import { safeGetAddress } from 'utils'
import { nftsBaseUrl, tankBunniesAddress } from '../../constants'
import CardBody from './CardBody'
import { StyledCollectibleCard } from './styles'
import { CollectibleCardProps } from './types'

const CollectibleLinkCard: React.FC<React.PropsWithChildren<CollectibleCardProps>> = ({
  nft,
  nftLocation,
  currentAskPrice,
  ...props
}) => {
  const urlId =
    safeGetAddress(nft.collectionAddress) === safeGetAddress(tankBunniesAddress)
      ? nft.attributes?.[0].value
      : nft.tokenId
  return (
    <StyledCollectibleCard {...props}>
      <NextLinkFromReactRouter to={`${nftsBaseUrl}/collections/${nft.collectionAddress}/${urlId}`}>
        <CardBody nft={nft} nftLocation={nftLocation} currentAskPrice={currentAskPrice} />
      </NextLinkFromReactRouter>
    </StyledCollectibleCard>
  )
}

export default CollectibleLinkCard
