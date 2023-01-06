import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { sanityClient } from '@project/cms/lib/sanity.client'
import { indexQuery } from '@project/cms/lib/sanity.queries'
import { HomePage } from '~templates/HomePage'
import dynamic from 'next/dynamic'

const HomePagePreview = dynamic(
  () => import('~templates/HomePage').then((m) => m.HomePagePreview),
  { ssr: false },
)

export default function Index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  if (props.preview) {
    return <HomePagePreview token={props.previewData.token} />
  }

  return <HomePage {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  preview = false,
  previewData = {},
}) => {
  const client = sanityClient()
  const { page, site, posts } = await client.fetch(indexQuery)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=59',
  )

  return {
    props: {
      data: page,
      posts,
      preview,
      previewData,
      site,
      theme: 'navy',
    },
  }
}
