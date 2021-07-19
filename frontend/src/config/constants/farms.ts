import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MANDARK-BNB LP',
    lpAddresses: {
      97: '0x9b8A297DA92577Babb12863C71245f25c0b28763',
      56: '',
    },
    tokenSymbol: 'MANDARK',
    tokenAddresses: {
      97: '0xA4dec2baDd3fbC77e643D504871a7C2cB58ab3C7',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MANDARK-BUSD LP',
    lpAddresses: {
      97: '0x952f9FaeE875d8574a0e6a882Dcc72a8f9Bd8107',
      56: '',
    },
    tokenSymbol: 'MANDARK',
    tokenAddresses: {
      97: '0xA4dec2baDd3fbC77e643D504871a7C2cB58ab3C7',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MANDARK',
    lpAddresses: {
      97: '0x952f9FaeE875d8574a0e6a882Dcc72a8f9Bd8107',
      56: '', // MANDARK-BUSD LP
    },
    tokenSymbol: 'MANDARK',
    tokenAddresses: {
      97: '0xA4dec2baDd3fbC77e643D504871a7C2cB58ab3C7',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
      56: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
