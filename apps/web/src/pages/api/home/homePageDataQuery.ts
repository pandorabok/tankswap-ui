import { ChainId } from '@tankswap/chains'
import { ASSET_CDN } from 'config/constants/endpoints'
import { HomepageChain, HomePageCurrency, HomePagePartner } from './types'

export const partners: HomePagePartner[] = [
  {
    logo: `${ASSET_CDN}/web/landing/partner/x.png`,
    link: 'https://twitter.com/tankswap',
    name: 'X',
  },
  {
    logo: `${ASSET_CDN}/web/landing/partner/telegram.png`,
    link: 'https://t.me/tankswap',
    name: 'Telegram',
  },
  {
    logo: `${ASSET_CDN}/web/landing/partner/discord.png`,
    link: 'https://discord.gg/tankswap',
    name: 'Discord',
  },
  {
    logo: `${ASSET_CDN}/web/landing/partner/instagram.png`,
    link: 'https://instagram.com/tankswap_official',
    name: 'Instagram',
  },
  {
    logo: `${ASSET_CDN}/web/landing/partner/youtube.png`,
    link: 'https://www.youtube.com/@tankswap_official',
    name: 'Youtube',
  },
  {
    logo: `${ASSET_CDN}/web/landing/partner/blog.png`,
    link: 'https://blog.tankswap.finance/',
    name: 'Blog',
  },
]

export const homePageCurrencies: HomePageCurrency[] = [
  'usd',
  'eur',
  'gbp',
  'hkd',
  'cad',
  'aud',
  'brl',
  'jpy',
  'krw',
  'vnd',
  'idr',
].map((symbol) => {
  return {
    symbol,
    logo: `${ASSET_CDN}/web/onramp/currencies/${symbol}.png`,
  }
})

export function homePageChainsInfo() {
  const evms = [
    ChainId.BSC,
    ChainId.ETHEREUM,
    ChainId.BASE,
    ChainId.ARBITRUM_ONE,
    ChainId.ZKSYNC,
    ChainId.LINEA,
    ChainId.POLYGON_ZKEVM,
  ]

  const evmChains: HomepageChain[] = evms.map((chainId) => {
    return {
      logo: `${ASSET_CDN}/web/chains/svg/${chainId}.svg`,
      logoM: `${ASSET_CDN}/web/chains/svg/${chainId}-m.svg`,
      logoL: `${ASSET_CDN}/web/chains/svg/${chainId}-l.svg`,
    }
  })

  evmChains.push(
    {
      logo: `${ASSET_CDN}/web/chains/svg/aptos.svg`,
      logoM: `${ASSET_CDN}/web/chains/svg/aptos-m.svg`,
      logoL: `${ASSET_CDN}/web/chains/svg/aptos-l.svg`,
    },
    {
      logo: `${ASSET_CDN}/web/chains/svg/${ChainId.OPBNB}.svg`,
      logoM: `${ASSET_CDN}/web/chains/svg/${ChainId.OPBNB}-m.svg`,
      logoL: `${ASSET_CDN}/web/chains/svg/${ChainId.OPBNB}-l.svg`,
    },
  )
  return evmChains
}
