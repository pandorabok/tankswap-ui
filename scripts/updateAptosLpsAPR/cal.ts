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

