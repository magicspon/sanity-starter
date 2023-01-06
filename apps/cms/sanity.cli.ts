import { defineCliConfig } from 'sanity/cli'
import { loadEnvConfig } from '@next/env'

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error })

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: 'production',
  },
})
