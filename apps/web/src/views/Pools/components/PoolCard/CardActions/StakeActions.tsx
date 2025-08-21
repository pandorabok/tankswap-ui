import { Token } from '@tankswap/sdk'
import { Pool } from '@tankswap/widgets-internal'
import StakeModal from '../../Modals/StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
