import fs from 'fs'
import os from 'os'
import fetch from 'node-fetch'
import BigNumber from 'bignumber.js'
import chunk from 'lodash/chunk'
import { ChainId, Pair } from '@tankswap/aptos-swap-sdk'
import { getFarmConfig } from '../../apps/aptos/config/constants/farms'

