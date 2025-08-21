import { ChainId } from '@tankswap/chains'
import { Token } from '@tankswap/sdk'
import { bscTokens, ethereumTokens, zksyncTokens } from '@tankswap/tokens'
import { baseWarningTokens } from 'config/constants/warningTokens/baseWarningTokens'
import { bscWarningTokens } from 'config/constants/warningTokens/bscWarningTokens'

const { alETH } = ethereumTokens
const { bondly, itam, ccar, bttold, abnbc, metis } = bscTokens
const { pokemoney, free, safemoon, gala, xcad, lusd, nfp, pundiai } = bscWarningTokens
const { usdPlus } = zksyncTokens
const { ath } = baseWarningTokens

interface WarningTokenList {
  [chainId: number]: {
    [key: string]: Token
  }
}

const SwapWarningTokens = <WarningTokenList>{
  [ChainId.ETHEREUM]: {
    alETH,
  },
  [ChainId.BSC]: {
    safemoon,
    bondly,
    itam,
    ccar,
    bttold,
    pokemoney,
    free,
    gala,
    abnbc,
    xcad,
    metis,
    lusd,
    nfp,
    pundiai,
  },
  [ChainId.ZKSYNC]: {
    usdPlus,
  },
  [ChainId.BASE]: {
    ath,
  },
}

export default SwapWarningTokens
