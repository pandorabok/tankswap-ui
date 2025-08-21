import { ChainId } from '@tankswap/chains'
import Migration from 'views/Migration/bCake'

const MigrationPage = () => <Migration />

MigrationPage.chains = [ChainId.BSC, ChainId.ETHEREUM]

export default MigrationPage
