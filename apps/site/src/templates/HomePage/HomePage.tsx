import * as React from 'react'
import { Meta } from '~components/Meta'
import { HeroScreen } from '@ui/components/cms/HeroScreen'
import { TextPanel } from '@ui/components/cms/TextPanel'
import { TextBanner } from '@ui/components/cms/TextBanner'
import { Fact } from '@ui/components/cms/Fact'
import { Split } from '@ui/components/cms/Split'
import { ClientLogoGrid } from '@ui/components/cms/ClientLogoGrid'
import { QuoteGrid } from '@ui/components/cms/QuoteGrid'
import { urlForImage } from '@project/cms/lib/sanity.image'
import { usePreview } from '@project/cms/lib/sanity.preview'
import { indexQuery } from '@project/cms/lib/sanity.queries'
import { PreviewWrapper } from '~components/PreviewWrapper'
import { PostList } from '~components/PostList'
import { useSeo } from '~hooks/useSeo'

type THomePageProps = Record<string, any>

export function HomePage({ data, site, posts }: THomePageProps) {
  const splitImgeUrl = urlForImage(data.splitPanel.image)
    ?.height(800)
    .width(1200)
    .fit('crop')
    .url()

  const clientImages = data.clients?.clients.map((s: any) => {
    return {
      id: s._id,
      image: {
        src: urlForImage(s.logo)?.width(110).fit('max').url(),
        width: 110,
        height: 60,
        alt: s.title,
      },
    }
  })

  const facts = React.useMemo(() => {
    return data.services?.map((n: any) => ({
      _key: n._key,
      heading: n.service.title,
      text: n.text,
      href: `/services/${n.service.slug.current}`,
    }))
  }, [data.services])

  const meta = useSeo({
    site: site.seo,
    page: data.seo,
    uri: '',
    title: data.title,
    siteName: site.siteName,
  })

  return (
    <>
      <Meta
        seoTitle={meta.seoTitle}
        seoDesc={meta.seoDesc}
        ogImage={meta.ogImage}
        url={meta.url}
      />
      <HeroScreen
        title={data.title}
        intro={data.intro}
        button={{
          text: data.button.text,
          href: data.button.internal ?? data.button.external,
        }}
      />
      {!!data.whatWeDo && (
        <TextPanel
          withSeparator
          subHeading={data.whatWeDo.subHeading}
          heading={data.whatWeDo.heading}
          content={data.whatWeDo.content.content}
        />
      )}

      {!!facts && <Fact items={facts} />}

      {!!data.ourDifference && (
        <TextPanel
          subHeading={data.ourDifference.subHeading}
          heading={data.ourDifference.heading}
          content={data.ourDifference.content.content}
        />
      )}
      {!!data.splitPanel && (
        <Split
          heading={data.splitPanel.heading}
          content={data.splitPanel.content.content}
          image={
            splitImgeUrl
              ? {
                  src: splitImgeUrl,
                  height: 800,
                  width: 1200,
                  alt: '',
                }
              : undefined
          }
        />
      )}
      {!!data.clients?.heading && !!clientImages?.length && (
        <ClientLogoGrid heading={data.clients.heading} clients={clientImages} />
      )}

      {!!data.quotes?.length && <QuoteGrid quotes={data.quotes} />}
      {!!data.partners && (
        <TextBanner
          subHeading={data.partners.subHeading}
          content={data.partners.content.content}
        />
      )}

      <PostList data={posts} />
    </>
  )
}

export function HomePagePreview({ token }: { token: string }) {
  const { page, site, posts } = usePreview(token, indexQuery)

  return (
    <PreviewWrapper>
      <HomePage data={page} site={site} posts={posts} />
    </PreviewWrapper>
  )
}
