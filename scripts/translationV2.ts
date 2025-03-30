import fs from 'fs'
import path from 'path'

// Define types
type TranslationKey = string
type TranslationKeys = Record<TranslationKey, TranslationKey>
type Tag = 'unused' | 'missing'
type TaggedKeys = [string[], Tag]
