import * as React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { sanityClient } from '@project/cms/lib/sanity.client'
import { pageQuery } from '@project/cms/lib/sanity.queries'
import { Page } from '~templates/Page'
import dynamic from 'next/dynamic'

const PagePreview = dynamic(
  () => import('~templates/Page').then((m) => m.PagePreview),
  { ssr: false },
)

export default function PagePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  if (props.preview) {
    return <PagePreview slug={props.slug} token={props.previewData.token} />
  }

  return <Page {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
  preview = false,
  previewData = {},
}) => {
  const slug = params?.page

  if (!slug) {
    return { notFound: true }
  }

  const client = sanityClient()
  const { page, site } = await client.fetch(pageQuery, { slug })

  if (!page) {
    return { notFound: true }
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=120, stale-while-revalidate=59',
  )

  return {
    props: {
      slug,
      data: page,
      preview,
      previewData,
      theme: 'white',
      site,
    },
  }
}
