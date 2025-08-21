import { useMemo } from 'react'
import { GAMES_LIST, GameType } from '@tankswap/games'

export const useGamesConfig = (): GameType[] => useMemo(() => GAMES_LIST, [])
