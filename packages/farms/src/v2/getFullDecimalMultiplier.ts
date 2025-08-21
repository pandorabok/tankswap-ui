import { BIG_TEN } from '@tankswap/utils/bigNumber'
import memoize from '@tankswap/utils/memoize'
import BN from 'bignumber.js'

export const getFullDecimalMultiplier = memoize((decimals: number): BN => {
  return BIG_TEN.pow(decimals)
})
