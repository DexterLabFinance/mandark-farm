import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MANDARK-BNB LP',
    lpAddresses: {
      97: '0x9b8A297DA92577Babb12863C71245f25c0b28763',
      56: '0xF9537dE975832bC49a785b5Fdd27537C0250A6b3',
    },
    tokenSymbol: 'MANDARK',
    tokenAddresses: {
      97: '0xA4dec2baDd3fbC77e643D504871a7C2cB58ab3C7',
      56: '0xc5c6381A31bE81415366fc81f4e38466cceB0f3B',
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
      56: '0xC78a1a8379e40411436aA9877d35f574b107eA56',
    },
    tokenSymbol: 'MANDARK',
    tokenAddresses: {
      97: '0xA4dec2baDd3fbC77e643D504871a7C2cB58ab3C7',
      56: '0xc5c6381A31bE81415366fc81f4e38466cceB0f3B',
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
      56: '0xC78a1a8379e40411436aA9877d35f574b107eA56', // MANDARK-BUSD LP
    },
    tokenSymbol: 'MANDARK',
    tokenAddresses: {
      97: '0xA4dec2baDd3fbC77e643D504871a7C2cB58ab3C7',
      56: '0xc5c6381A31bE81415366fc81f4e38466cceB0f3B',
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
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61eb789d75a95caa3ff50ed7e47b96c132fec082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74e4716e431f45807dcf19f284c7aa99f18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66fdb2eccfb58cf098eaa419e5efde841368e489',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DXL',
    lpAddresses: {
      97: '0x4D4080CB5ff3F8D2c5bE84B4E2aE3ebD41b557A7',
      56: '0xCad824718eD4D711ad18c01b98E63267Fac4E3f5', // DXL-BUSD LP
    },
    tokenSymbol: 'DXL',
    tokenAddresses: {
      97: '0x63eF638Be1009c78B36582AacBB2b13d0E362B94',
      56: '0x8F16A16EaCAA15D2e17Fd97657cbfAa8066626aE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DEEDEE',
    lpAddresses: {
      97: '0xEBdAd3500A332Fff8e3834b96ed9EEdEf86448eb',
      56: '0x97157107ce821c6eFC8f352456ADa659eCE4C47F', // DEEDEE-BUSD LP
    },
    tokenSymbol: 'DEEDEE',
    tokenAddresses: {
      97: '0x6a2d5841Af581BB302082DE2Aa0117051e75F4ca',
      56: '0x71eee06829cf9B168ca2E4a5294f49Ecc949f16C',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'GOD',
    lpAddresses: {
      97: '',
      56: '0xa4dDd01b9682689E4D17642eD3D3e2dec68D036d', // GOD-BUSD LP
    },
    tokenSymbol: 'GOD',
    tokenAddresses: {
      97: '',
      56: '0x95a30f66c6585d8fc75a5645dbc9ef0b47257c84',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xCad824718eD4D711ad18c01b98E63267Fac4E3f5', // DXL-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
