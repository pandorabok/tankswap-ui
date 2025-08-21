import { Pool } from '@tankswap/widgets-internal'
import { Coin } from '@tankswap/aptos-swap-sdk'
import StakeActions from './StakeActions'
import HarvestActions from './HarvestActions'

export default Pool.withCardActions<Coin>(HarvestActions, StakeActions)
