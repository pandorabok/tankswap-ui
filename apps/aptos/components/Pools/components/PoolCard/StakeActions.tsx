import { Token } from '@tankswap/swap-sdk-core'
import { Pool } from '@tankswap/widgets-internal'
import StakeModal from './StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
