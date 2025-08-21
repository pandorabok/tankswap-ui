import { useTranslation } from '@tankswap/localization'
import { useTooltip } from '@tankswap/uikit'
import { FarmWidget } from '@tankswap/widgets-internal'

const { CompoundingPoolTag, ManualPoolTag, LockedPoolTag, LockedOrAutoPoolTag } = FarmWidget.Tags

const PoolTypeTag = ({ account, isLocked, children }) => {
  const { t } = useTranslation()

  const tooltipText = t('You must harvest and compound your earnings from this pool manually.')

  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipText, {
    placement: 'bottom',
  })

  return (
    <>
      <ManualPoolTag />
      {tooltipVisible && tooltip}
      {children(targetRef)}
    </>
  )
}

export default PoolTypeTag
