import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import config from '@cms/sanity.config'

export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead />
      </Head>
      <NextStudio config={config} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      studio: true,
    },
  }
}
