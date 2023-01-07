import * as React from 'react'
import { PostPaginationQueryType } from '@project/cms/queries/post'

export function PostList({ pages, count }: PostPaginationQueryType) {
  console.log(count)
  return (
    <>
      {pages.map((page) => (
        <h1 key={page.id}>{page.title}</h1>
      ))}
    </>
  )
}
