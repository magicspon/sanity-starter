import { groq } from 'next-sanity'
import { s } from 'sanity-typed-schema-builder'
import { page } from '@cms/schemas/structures/page'
import { sanityClient } from '@cms/lib/client'

export const pageQuery = groq`{
  "page": *[_type == "page" && slug.current == $slug][0] {
    title
  },
}`

export type PageQueryType = {
  page: Pick<s.infer<typeof page>, 'title'>
}

export async function read({ slug }: { slug: string }) {
  const client = sanityClient()

  const result: PageQueryType = await client.fetch(pageQuery, { slug })

  return result
}
