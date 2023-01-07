import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Post } from '~templates/Post'
import dynamic from 'next/dynamic'
import { readPost, PostQueryType } from '@project/cms/queries/post'
import { TPageProps, TPreviewData } from '~types'

const PostPreview = dynamic(
  () => import('~templates/Post').then((m) => m.PostPreview),
  { ssr: false },
)

export default function PostPage({
  preview,
  previewData,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (preview) {
    return <PostPreview token={previewData.token} />
  }

  return <Post page={page} />
}

export const getServerSideProps: GetServerSideProps<
  TPageProps<PostQueryType>
> = async ({ res, preview = false, previewData = {}, params }) => {
  const slug = params?.page as string

  if (!slug) {
    return { notFound: true }
  }

  const { page } = (await readPost({ slug })) as PostQueryType

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=59',
  )

  return {
    props: {
      page,
      preview,
      previewData: previewData as TPreviewData,
    },
  }
}
