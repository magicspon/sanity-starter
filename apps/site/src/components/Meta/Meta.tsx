import * as React from 'react'
import Head from 'next/head'

export interface TMetaProps {
  seoTitle: string
  seoDesc: string
  url: string
  ogImage: string
}

export function Meta({
  seoTitle,
  seoDesc,
  url,
  ogImage,
}: TMetaProps): JSX.Element {
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta property="og:title" content={seoDesc} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
    </Head>
  )
}
