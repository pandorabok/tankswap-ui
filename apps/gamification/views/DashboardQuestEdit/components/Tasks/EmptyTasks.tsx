import { useTranslation } from '@tankswap/localization'
import { Flex } from '@tankswap/uikit'
import { styled } from 'styled-components'

const EmptyTasksContainer = styled(Flex)`
  height: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: ${({ theme }) => (theme.isDark ? `${theme.colors.input}` : `${theme.colors.inputSecondary}`)};
  border: 2px dashed ${({ theme }) => (theme.isDark ? `${theme.colors.input}` : `${theme.colors.inputSecondary}`)};
`

export const EmptyTasks = () => {
  const { t } = useTranslation()

  return <EmptyTasksContainer>{t('No Task')}</EmptyTasksContainer>
}
