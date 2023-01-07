import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import dynamic from 'next/dynamic'
import {
  PostPaginationQueryType,
  readPagination,
} from '@project/cms/queries/post'
import { TPageProps, TPreviewData } from '~types'
import { PostList } from '~templates/PostList'

const PostPreview = dynamic(
  () => import('~templates/Post').then((m) => m.PostPreview),
  { ssr: false },
)

export default function PostPage({
  preview,
  previewData,
  pages,
  count,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (preview) {
    return <PostPreview token={previewData.token} />
  }

  return <PostList count={count} pages={pages} />
}

export const getServerSideProps: GetServerSideProps<
  TPageProps<PostPaginationQueryType>
> = async ({ res, preview = false, previewData = {}, params }) => {
  const slug = params?.page as string

  if (!slug) {
    return { notFound: true }
  }

  const { pages, count } = (await readPagination({
    from: 0,
    to: 10,
  })) as PostPaginationQueryType

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=59',
  )

  return {
    props: {
      pages,
      count,
      preview,
      previewData: previewData as TPreviewData,
    },
  }
}
