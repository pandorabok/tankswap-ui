import { useTranslation } from '@tankswap/localization'
import { Box, Text } from '@tankswap/uikit'

export const AthWarning = () => {
  const { t } = useTranslation()

  return (
    <Box maxWidth="380px">
      <Text>{t('Warning: The $ATH token pool is not a valid token trading pair - please stop buying')}</Text>
    </Box>
  )
}
