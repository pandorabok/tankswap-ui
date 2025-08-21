import { ContextApi } from '@tankswap/localization'
import { FooterLinkType } from '@tankswap/uikit'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Ecosystem'),
    items: [
      {
        label: t('Trade'),
        href: '/swap',
      },
      {
        label: t('Earn'),
        href: '/farms',
      },
      {
        label: t('Game'),
        href: 'https://tankswap.games/',
      },
      {
        label: t('Play'),
        href: 'https://tankswap.finance/prediction',
      },
      {
        label: t('Merchandise'),
        href: 'https://merch.tankswap.finance/',
      },
    ],
  },
  {
    label: 'Business',
    items: [
      {
        label: t('CAKE Incentives'),
        href: 'https://docs.tankswap.finance/ecosystem-and-partnerships/business-partnerships/syrup-pools-and-farms',
      },
      {
        label: t('Staking Pools'),
        href: 'https://tankswap.finance/pools',
      },
      {
        label: t('Token Launches'),
        href: 'https://docs.tankswap.finance/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifos',
      },
      {
        label: t('Brand Assets'),
        href: 'https://docs.tankswap.finance/ecosystem-and-partnerships/brand',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: t('Contributing'),
        href: 'https://docs.tankswap.finance/developers/contributing',
      },
      {
        label: t('Github'),
        href: 'https://github.com/tankswap',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.tankswap.finance/developers/bug-bounty',
      },
    ],
  },
  {
    label: t('Support'),
    items: [
      {
        label: t('Get Help'),
        href: 'https://docs.tankswap.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.tankswap.finance/readme/help/troubleshooting',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.tankswap.finance/',
      },
      {
        label: t('Audits'),
        href: 'https://docs.tankswap.finance/readme/audits',
      },
      {
        label: t('Legacy products'),
        href: 'https://docs.tankswap.finance/products/legacy-products',
      },
    ],
  },
  {
    label: t('About'),
    items: [
      {
        label: t('Tokenomics'),
        href: 'https://docs.tankswap.finance/governance-and-tokenomics/cake-tokenomics',
      },
      {
        label: t('CAKE Emission Projection'),
        href: 'https://analytics.tankswap.finance/',
      },
      {
        label: t('Blog'),
        href: 'https://blog.tankswap.finance/',
      },
      {
        label: t('Careers'),
        href: 'https://docs.tankswap.finance/team/become-a-chef',
      },
      {
        label: t('Terms Of Service'),
        href: 'https://tankswap.finance/terms-of-service',
      },
    ],
  },
]
