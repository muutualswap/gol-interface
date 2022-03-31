import { ChainId } from '@bigswap/sdk'
import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://bscscan.com',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
}

// BGSP_PER_BLOCK details
// 2 BGSP is minted per block
// 0.75 BGSP per block is sent to a pool (A farm just for BGSP )
// 0.75 BGSP per block goes to BGSP Big pool
// 0.50 BGSP per block goes to Yield farms
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeDataRow.tsx = 0.75 (0.75 - Amount sent to pool)
export const CAKE_PER_BLOCK = new BigNumber(2)
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365 // 10512000
export const CAKE_PER_YEAR = CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR)
export const BASE_URL = 'https://bigswap.exchange'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
// In reality its 10000 because of fast refresh, a bit less here to cover for possible long request times
export const PANCAKE_BUNNIES_UPDATE_FREQUENCY = 8000
