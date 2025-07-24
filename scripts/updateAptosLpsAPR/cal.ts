import fs from 'fs'
import os from 'os'
import fetch from 'node-fetch'
import BigNumber from 'bignumber.js'
import chunk from 'lodash/chunk'
import { ChainId, Pair } from '@tankswap/aptos-swap-sdk'
import { getFarmConfig } from '../../apps/aptos/config/constants/farms'

interface AprMap {
  [key: string]: BigNumber
}

interface SingleFarmResponse {
  id: string
  reserveUSD: string
  volumeUSD: string
}

interface UsdListType {
  volumeUSD: string
  reserveUSD: string
}

interface FarmsOneWeekData {
  [key: string]: {
    updateDate: string
    usdList: UsdListType[]
  }
}

const CAKE_PID = 0
const LP_HOLDERS_FEE = 0.0017
const WEEKS_IN_A_YEAR = 52.1429
const FETCH_URL = 'https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages'
