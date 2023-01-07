import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { apiVersion, previewSecretId, projectId, dataset } from './lib/env'
import { productionUrl } from './plugins/productionUrl'
import { previewDocumentNode } from './plugins/previewPane'
import { pageStructure } from './plugins/pageStructure'
import { singletonPlugin } from './plugins/singletonPlugin'
import { orderRankField } from '@sanity/orderable-document-list'
// channels
import { post } from './schemas/channels/post'
// structures
import { page } from './schemas/structures/page'
// singles
import { home } from './schemas/singles/home'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [home, post, page].map(
  (s) => s.schema().name,
)

const structures = [page].map((s) => {
  const schema = s.schema()
  schema.fields.push(orderRankField({ type: schema.name }))
  return schema
})

const singles = [home].map((s) => {
  return s.schema()
})

export const ORDERABLE_DOCUMENT_TYPES: string[] = [page].map(
  (s) => s.schema().name,
)

export default defineConfig({
  name: 'default',
  basePath: '/studio',
  title: 'Sandbox',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: pageStructure(singles, ORDERABLE_DOCUMENT_TYPES),
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    visionTool(),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    singletonPlugin(singles.map((s) => s.name)),
    unsplashImageAsset(),
  ],

  schema: {
    types: [...singles, post.schema(), ...structures],
  },
})
