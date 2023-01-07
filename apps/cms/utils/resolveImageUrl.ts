import type { Image } from 'sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../lib/env'
export type { FitMode } from '@sanity/image-url/lib/types/types'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export type SanityImageProps = Image

export const resolveImageUrl = (source: Image) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format')
}
