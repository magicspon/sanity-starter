import * as React from 'react'
import { usePreview } from '@project/cms/lib/usePreview'
import { PreviewWrapper } from '@project/cms/components/PreviewWrapper'
import { PostQueryType, postQuery } from '@project/cms/queries/post'

export function Post({ page }: PostQueryType) {
  return (
    <>
      <h1>{page.title}</h1>
    </>
  )
}

export function PostPreview({ token }: { token: string }) {
  const { page }: PostQueryType = usePreview(token, postQuery)

  return (
    <PreviewWrapper>
      <Post page={page} />
    </PreviewWrapper>
  )
}
