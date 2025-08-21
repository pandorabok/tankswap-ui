import isUndefinedOrNull from '@tankswap/utils/isUndefinedOrNull'

export function isNotUndefinedOrNull<TValue>(value: TValue | null | undefined): value is TValue {
  return !isUndefinedOrNull(value)
}
