import { Modal } from '@tankswap/uikit'
import { useTranslation } from '@tankswap/localization'

const ConfirmSwapModalContainer = ({ children, handleDismiss }) => {
  const { t } = useTranslation()

  return (
    <Modal title={t('Confirm Swap')} headerBackground="gradientCardHeader" onDismiss={handleDismiss}>
      {children}
    </Modal>
  )
}

export default ConfirmSwapModalContainer
