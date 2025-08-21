import { Box, Flex, Logo, ThemeSwitcher, Link, Button, LangSelector } from '@tankswap/uikit'
import { useTheme as useNextTheme } from 'next-themes'
import { useTranslation, languageList } from '@tankswap/localization'
import { useTheme } from '@tankswap/hooks'
import NoSSR from 'components/NoSSR'

const Menu = () => {
  const theme = useTheme()
  const { setTheme } = useNextTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <Flex height="56px" bg="backgroundAlt" px="16px" alignItems="center" justifyContent="space-between" zIndex={9}>
      <Flex>
        <Logo href="/" />
      </Flex>
      <Flex alignItems="center">
        <NoSSR>
          <Box mr="16px">
            <ThemeSwitcher isDark={theme.isDark} toggleTheme={() => setTheme(theme.isDark ? 'light' : 'dark')} />
          </Box>
        </NoSSR>
        <LangSelector
          buttonScale="xs"
          color="textSubtle"
          hideLanguage
          currentLang={currentLanguage.code}
          langs={languageList}
          setLang={setLanguage}
        />
        <Link external href="https://tankswap.finance/">
          <Button scale="sm">{t('Launch App')}</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Menu
