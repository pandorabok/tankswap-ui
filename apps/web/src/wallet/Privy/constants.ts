import { NonEVMChainId, UnifiedChainId } from '@tankswap/chains'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
  authDomain: 'tankswap-prod-firebase.firebaseapp.com',
  projectId: 'tankswap-prod-firebase',
  storageBucket: 'tankswap-prod-firebase.firebasestorage.app',
  messagingSenderId: '901250967709',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const UNSUPPORTED_SOCIAL_LOGIC_CHAINS: UnifiedChainId[] = [NonEVMChainId.SOLANA, NonEVMChainId.APTOS]
