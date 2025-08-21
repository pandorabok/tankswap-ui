import { atom } from 'jotai'

export const ifoLoadingAnimationAtom = atom(async () => {
  try {
    const response = await fetch('https://assets.tankswap.finance/web/ifos/loading.json')
    return await response.json()
  } catch (error) {
    return null
  }
})
