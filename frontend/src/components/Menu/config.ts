import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Editions',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Dexter',
        href: 'https://dexterlab.finance',
      },
      {
        label: 'DeeDee',
        href: 'https://deedee.dexterlab.finance',
      },
      {
        label: 'Mandark ',
        href: 'https://mandark.dexterlab.finance',
      }
    ],
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange (In Progress)',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xc5c6381a31be81415366fc81f4e38466cceb0f3b',
      },
      {
        label: 'Liquidity (In Progress)',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0xc5c6381a31be81415366fc81f4e38466cceb0f3b',
      },
      {
        label: 'Swap',
        href: 'https://swap.dexterlab.finance',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xc5c6381a31be81415366fc81f4e38466cceb0f3b',
      },
      {
        label: 'Mandark Chart',
        href: 'https://poocoin.app/tokens/0xc5c6381a31be81415366fc81f4e38466cceb0f3b',
      },
      {
        label: 'Dappradar (In Progress)',
        href: '/',
      },
      {
        label: 'vfat.tools (In Progress)',
        href: '/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://dexterlabfinance.gitbook.io'
      }
    ],
  },
  {
    label: 'Review by Rugdoc (In Progress)',
    icon: 'AuditIcon',
    href: '/',
  },
]

export default config
