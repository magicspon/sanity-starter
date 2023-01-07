import {
  SanityImageProps,
  FitMode,
  resolveImageUrl,
} from '@project/cms/utils/resolveImageUrl'
import * as React from 'react'
import Image, { ImageProps } from 'next/image'

export type TSanityImageProps = {
  src: SanityImageProps | string
  crop?: FitMode
} & Omit<ImageProps, 'src'>

export function SanityImage({
  src,
  width,
  height,
  crop = 'crop',
  alt = '',
  ...props
}: TSanityImageProps) {
  const builder = typeof src === 'string' ? src : resolveImageUrl(src)
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

  return <Image src={url} width={width} height={height} alt={alt} {...props} />
}
