import * as React from 'react'
import { usePreview } from '@project/cms/lib/usePreview'
import { PreviewWrapper } from '@project/cms/components/PreviewWrapper'
import { IndexQueryType, indexQuery } from '@project/cms/queries/home'

export function HomePage({ page }: IndexQueryType) {
  return (
    <>
      <h1>{page.title}</h1>
    </>
  )
}

export function HomePagePreview({ token }: { token: string }) {
  const { page }: IndexQueryType = usePreview(token, indexQuery)
  return (
    <PreviewWrapper>
      <HomePage page={page} />
    </PreviewWrapper>
  )
}
