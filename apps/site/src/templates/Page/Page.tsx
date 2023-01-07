import * as React from 'react'
import { usePreview } from '@project/cms/lib/usePreview'
import { PreviewWrapper } from '@project/cms/components/PreviewWrapper'
import { PageQueryType, pageQuery } from '@project/cms/queries/page'

export function Page({ page }: PageQueryType) {
  return (
    <>
      <h1>{page.title}</h1>
    </>
  )
}

export function PagePreview({ token }: { token: string }) {
  const { page }: PageQueryType = usePreview(token, pageQuery)

  return (
    <PreviewWrapper>
      <Page page={page} />
    </PreviewWrapper>
  )
}
