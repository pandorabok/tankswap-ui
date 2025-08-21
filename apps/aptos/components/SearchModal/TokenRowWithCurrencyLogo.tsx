import { Currency } from '@tankswap/aptos-swap-sdk'
import { withCurrencyLogo } from '@tankswap/widgets-internal'

import { CurrencyLogo } from '../Logo'

export default withCurrencyLogo<Currency>(CurrencyLogo)
