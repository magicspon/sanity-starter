import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './sanity.api'
import type { Image } from 'sanity'
export type { FitMode } from '@sanity/image-url/lib/types/types'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export type { Image }

export const urlForImage = (source: Image) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format')
}
