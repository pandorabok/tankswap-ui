import { useTranslation } from '@tankswap/localization'
import { Text } from '@tankswap/uikit'
import { BodyText } from '../BodyText'
import { AdButton } from '../Button'
import { AdCard } from '../Card'

import { AdPlayerProps } from '../types'
import { getImageUrl } from '../utils'

const learnMoreLink =
  'https://blog.tankswap.finance/articles/introducing-tank-swap-x-zero-fee-and-gasless-swaps-on-ethereum-and-arbitrum?utm_source=Website&utm_medium=homepage&utm_campaign=PCSX&utm_id=PCSX'
const actionLink = '/swap?utm_source=Website&utm_medium=homepage&utm_campaign=PCSX&utm_id=PCSX'

export const AdPCSX = (props: AdPlayerProps) => {
  const { t } = useTranslation()

  return (
    <AdCard imageUrl={getImageUrl('pcsx')} {...props}>
      <BodyText mb="0">
        <Text as="span" color="secondary" bold>
          {t('ZERO')}
        </Text>{' '}
        {t('Fee Swaps on Ethereum & Arbitrum')}
      </BodyText>

      <AdButton variant="text" href={learnMoreLink} isExternalLink>
        {t('Learn More')}
      </AdButton>

      <AdButton mt="4px" href={actionLink} chevronRightIcon>
        {t('Swap Now!')}
      </AdButton>
    </AdCard>
  )
}
