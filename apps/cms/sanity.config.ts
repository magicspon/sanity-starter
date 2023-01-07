import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {
  apiVersion,
  previewSecretId,
  projectId,
  dataset,
} from './lib/sanity.api'
import { productionUrl } from './plugins/productionUrl'
import { previewDocumentNode } from './plugins/previewPane'
import { singletonPlugin, pageStructure } from './plugins/settings'

import * as singles from './schemas/singles'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  singles.home.schema().name,
  // singles.ourTeam.name,
  // singles.ourStory.name,
  // channels.post.name,
  // channels.page.name,
  // channels.service.name,
]

export const ORDERABLE_DOCUMENT_TYPES: string[] = [
  // channels.service.name,
  // channels.person.name,
]

export default defineConfig({
  name: 'default',
  basePath: '/studio',
  title: 'Sandbox',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: pageStructure(
        [singles.home.schema()],
        ORDERABLE_DOCUMENT_TYPES,
      ),
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    visionTool(),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    singletonPlugin([singles.home.schema().name]),
    unsplashImageAsset(),
    // markdownSchema(),
  ],

  schema: {
    types: [singles.home.schema()],
  },
})
