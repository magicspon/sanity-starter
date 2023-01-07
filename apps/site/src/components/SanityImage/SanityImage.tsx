import { Image, FitMode, urlForImage } from '@cms/lib/sanity.image'
import * as React from 'react'
import NextImage, { ImageProps } from 'next/image'

export type TSanityImageProps = {
  src: Image | string
  crop?: FitMode
} & Omit<ImageProps, 'src'>

export function SanityImage({
  src,
  width,
  height,
  crop = 'crop',
  alt = '',
}: TSanityImageProps) {
  const builder = typeof src === 'string' ? src : urlForImage(src)
  const url = React.useMemo(() => {
    if (typeof builder === 'string') return builder
    if (!builder) return null
    let source = builder
    if (typeof width === 'number') {
      source = source.width(width)
    }
    if (typeof height === 'number') {
      source = source.height(height)
    }

    return source.fit(crop).url()
  }, [width, height, crop, builder])

  if (!url) return null

  return <NextImage src={url} width={width} height={height} alt={alt} />
}
