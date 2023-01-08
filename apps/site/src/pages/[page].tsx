import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Page } from '~templates/Page'
import dynamic from 'next/dynamic'
import { read, PageQueryType } from '@project/cms/queries/page'
import { TPageProps, TPreviewData } from '~types'

const PagePreview = dynamic(
  () => import('~templates/Page').then((m) => m.PagePreview),
  { ssr: false },
)

export default function PagePage({
  preview,
  previewData,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (preview) {
    return <PagePreview token={previewData.token} />
  }

  return <Page page={page} />
}

export const getServerSideProps: GetServerSideProps<
  TPageProps<PageQueryType>
> = async ({ res, preview = false, previewData = {}, params }) => {
  const slug = params?.page as string

  if (!slug) {
    return { notFound: true }
  }

  const { page } = (await read({ slug })) as PageQueryType

  if (!page) {
    return { notFound: true }
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=59',
  )

  return {
    props: {
      page,
      preview,
      previewData: previewData as TPreviewData,
    },
  }
}
