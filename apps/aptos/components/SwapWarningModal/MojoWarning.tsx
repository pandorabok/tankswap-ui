import { LinkExternal, Text } from '@tankswap/uikit'
import { useTranslation } from '@tankswap/localization'

const MojitoWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('Please note that the Mojito Markets team have paused project development for the time being')}</Text>
      <LinkExternal href="https://twitter.com/MojitoMarkets/status/1604940075636527104">
        {t('For more info, please see %brand%’s twitter.', { brand: 'Mojito Markets' })}
      </LinkExternal>
    </>
  )
}

export default MojitoWarning
