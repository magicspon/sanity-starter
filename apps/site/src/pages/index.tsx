import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { HomePage } from '~templates/HomePage'
import dynamic from 'next/dynamic'
import { read, IndexQueryType } from '@project/cms/queries/home'
import { TPageProps, TPreviewData } from '~types'

const HomePagePreview = dynamic(
  () => import('~templates/HomePage').then((m) => m.HomePagePreview),
  { ssr: false },
)

export default function Index({
  preview,
  previewData,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (preview) {
    return <HomePagePreview token={previewData.token} />
  }

  return <HomePage page={page} />
}

export const getServerSideProps: GetServerSideProps<
  TPageProps<IndexQueryType>
> = async ({ res, preview = false, previewData = {} }) => {
  const { page } = (await read()) as IndexQueryType

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
