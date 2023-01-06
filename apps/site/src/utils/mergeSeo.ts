import { getUrl } from './getUrl'

type SeoInput = {
  seoTitle: string
  seoDesc: string
}

export type SeoArgs = {
  uri: string
  title: string
  page: SeoInput
  site: SeoInput
  siteName: string
}

type SeoOutput = {
  seoTitle: string
  seoDesc: string
  url: string
  ogImage: string
}

export function mergeSeo({
  title,
  page,
  site,
  uri,
  siteName,
}: SeoArgs): SeoOutput {
  const siteUrl = getUrl()

  const seoTitle = page?.seoTitle ?? title ?? site.seoTitle
  const seoDesc = page?.seoDesc ?? site.seoDesc

  const params = new URLSearchParams(
    `title=${seoTitle}&desc=${seoDesc}`,
  ).toString()

  return {
    seoTitle: `${seoTitle} | ${siteName}`,
    seoDesc,
    url: `${siteUrl}/${uri}`,
    ogImage: `${siteUrl}/api/og?${params}`,
  }
}
