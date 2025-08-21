import { useTranslation } from '@tankswap/localization'
import { Button } from '@tankswap/uikit'
import { ErrorMessage } from './ErrorMessage'

export const ErrorContent = ({ onRetry, message }: { onRetry: () => void; message: string }) => {
  const { t } = useTranslation()
  return (
    <>
      <ErrorMessage message={message} />
      <Button variant="subtle" onClick={onRetry}>
        {t('Retry')}
      </Button>
    </>
  )
}
