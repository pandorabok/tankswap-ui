import { Route } from '@tankswap/smart-router'
import { Currency } from '@tankswap/swap-sdk-core'

export type RouteDisplayEssentials = Pick<Route, 'path' | 'pools' | 'inputAmount' | 'outputAmount' | 'percent' | 'type'>

export type Pair = [Currency, Currency]
