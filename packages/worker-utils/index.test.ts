import { describe, it, expect } from 'vitest'
import { CORS_ALLOW, isOriginAllowed } from './index'

describe('worker-utils', () => {
  it.each([
    ['https://tankswap.finance', true],
    ['https://tankswap.com', true],
    ['https://aptostankswap.finance', false],
    ['https://aptos.tankswap.finance', true],
    ['https://tankswap.finance.com', false],
    ['http://tankswap.finance', false],
    ['https://tank.run', false],
    ['https://test.tank.run', true],
    ['http://localhost:3000', true],
    ['http://localhost:3001', true],
  ])(`isOriginAllowed(%s)`, (origin, expected) => {
    expect(isOriginAllowed(origin, CORS_ALLOW)).toBe(expected)
  })
})
