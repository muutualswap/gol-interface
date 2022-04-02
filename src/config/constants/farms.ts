import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 11,
    lpSymbol: 'BGSP', // CAKE = PID 11
    lpAddresses: {
      97: '',
      56: '0xe9f861b22cd5240494ecc14afea02659ec59864f',
    },
    token: serializedTokens.bgsp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BGSP-BNB LP', // CAKE-BNB = (251)
    lpAddresses: {
      97: '',
      56: '0x66bffcac0782200d6276142768f79600a458bb04',
    },
    token: serializedTokens.bgsp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP', // BUSD-BNB = (252)
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {   
    pid: 2,
    lpSymbol: 'BSFE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2fc1fc3dbf746f2c42718753f4ac9866d94466b5',
    },
    token: serializedTokens.bsfe,
    quoteToken: serializedTokens.wbnb,
   },
    { 
    pid: 3,
    lpSymbol: 'BSFE-BGSP LP',
    lpAddresses: {
      97: '',
      56: '0x398bdf7ffef30c557dcdfcae9b2de13f31b63434',
    },
    token: serializedTokens.bsfe,
    quoteToken: serializedTokens.bgsp,
   },   
   {
    pid: 623,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xec6557348085aa57c72514d67070dc863c0a5a8c',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.usdt,
   },
   {
    pid: 599,
    lpSymbol: 'ETH-USDC LP',
    lpAddresses: {
      97: '',
      56: '0xEa26B78255Df2bBC31C1eBf60010D78670185bD0',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 588,
    lpSymbol: 'BTCB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 586,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109c8025f272414fd9e2faa805a583708a017f',
    },
    token: serializedTokens.doge,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 585,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 583,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 572,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 564,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 562,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 561,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 558,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
 
]

export default farms
