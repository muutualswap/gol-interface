import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
   {
    sousId: 0,
    stakingToken: serializedTokens.bgsp,
    earningToken: serializedTokens.bgsp,
    contractAddress: {
      97: '',
      56: '0x65FE214382fD9e0d6cF054EeD65C150C88ed6834',  // masterchef bgsp
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
