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
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=',
      },
      {
        label: 'Liquidity (In Progress)',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/',
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
        label: 'PancakeSwap (In Progress)',
        href: 'https://pancakeswap.info/token/',
      },
      {
        label: 'Mandark Chart (In Progress)',
        href: 'https://poocoin.app/tokens/',
      },
      {
        label: 'Dappradar (In Progress)',
        href: '/',
      },
      {
        label: 'vfat.tools (In Progress)',
        href: 'https://vfat.tools/bsc/',
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
    label: 'Audit by Techrate (In Progress)',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Review by Rugdoc (In Progress)',
    icon: 'AuditIcon',
    href: '/',
  },
]

export default config
