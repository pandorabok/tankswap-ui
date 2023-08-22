import { ChainId, getChainName } from '@pancakeswap/chains'
import { SerializedFarmConfig } from '@pancakeswap/farms'
import fs from 'fs'
import os from 'os'

import { fetchV2FarmsAvgInfo, fetchStableFarmsAvgInfo, type AvgInfo } from '../apps/web/src/queries/farms'

interface AprMap {
  [key: string]: number
}

const FETCH_CHAIN_ID = [ChainId.BSC, ChainId.ETHEREUM]
const fetchAndUpdateLPsAPR = async () => {
  Promise.all(
    FETCH_CHAIN_ID.map(async (chainId) => {
      const [v2Aprs, stableAprs] = await Promise.allSettled([
        fetchV2FarmsAvgInfo(chainId),
        fetchStableFarmsAvgInfo(chainId),
      ])
      const getAprs = (aprRes: { [key: string]: Pick<AvgInfo, 'apr7d'> }): AprMap => {
        const map: AprMap = {}
        const addresses = Object.keys(aprRes)
        for (const addr of addresses) {
          const apr = aprRes[addr]
          if (!apr) {
            continue
          }
          const { apr7d } = apr
          map[addr] = apr7d.times(100).decimalPlaces(5).toNumber()
        }
        return map
      }
      const aprs = {
        ...(v2Aprs.status === 'fulfilled' ? getAprs(v2Aprs.value) : {}),
        ...(stableAprs.status === 'fulfilled' ? getAprs(stableAprs.value) : {}),
      }

      fs.writeFile(
        `apps/web/src/config/constants/lpAprs/${chainId}.json`,
        JSON.stringify(aprs, null, 2) + os.EOL,
        (err) => {
          if (err) throw err
          console.info(` ✅ - lpAprs.json has been updated!`)
        },
      )
    }),
  )
}

let logged = false
export const getFarmConfig = async (chainId: ChainId) => {
  const chainName = getChainName(chainId)
  try {
    return (await import(`../packages/farms/constants/${chainName}`)).default.filter(
      (f: SerializedFarmConfig) => f.pid !== null,
    ) as SerializedFarmConfig[]
  } catch (error) {
    if (!logged) {
      console.error('Cannot get farm config', error, chainId, chainName)
      logged = true
    }
    return []
  }
}

fetchAndUpdateLPsAPR()
import fs from 'fs'
import path from 'path'

// Define types
type TranslationKey = string
type TranslationKeys = Record<TranslationKey, TranslationKey>
type Tag = 'unused' | 'missing'
type TaggedKeys = [string[], Tag]

const TRANSLATIONS_FILE = path.resolve(__dirname, '../packages/localization/src/config/translations.json')

/**
 * Manages the translations.json file by adding missing keys or removing unused ones
 * @param keysToProcess Object containing keys in format { "key1": "key1", "key2": "key2" }
 * @param taggedKeys Array of tagged keys with format [["key1", "key2"], "unused"] or [["key3"], "missing"]
 */
async function updateTranslationsFile(keysToProcess: TranslationKeys, taggedKeys: TaggedKeys) {
  const [keys, tag] = taggedKeys
  processFile(TRANSLATIONS_FILE, keysToProcess, keys, tag)
}

/**
 * Process a translation file by adding missing keys or removing unused ones
 */
function processFile(filePath: string, keysToProcess: TranslationKeys, targetKeys: string[], tag: Tag) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const translations = JSON.parse(fileContent)
    let modified = false

    if (tag === 'unused') {
      // Remove keys tagged as unused
      for (const key of targetKeys) {
        if (key in translations) {
          delete translations[key]
