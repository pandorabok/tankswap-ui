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

const fetchFarmLpsInfo = async (addresses: string[]): Promise<SingleFarmResponse[]> => {
  const allPairs: any = []
  const maxLoop = 20 // 50 * 20 = max get 1000 pair
  for (let i = 0; i < maxLoop; i++) {
    const offset = i === 0 ? 1 : 50 * i + 1
    const params = `?platform-id=141&dexer-id=4788&sort-field=volumeUsd24h&category=spot&desc=true&page=${offset}`
    // eslint-disable-next-line no-await-in-loop
    const result = await (await fetch(`${FETCH_URL}${params}`)).json()

    if (result.data.pageList.length > 0) {
      allPairs.push(...(result?.data?.pageList || []))
    }

    if (!result.data.hasNextPage) {
      break
    }
  }

  return addresses.map((address): SingleFarmResponse => {
    // eslint-disable-next-line array-callback-return, consistent-return
