import { groq } from 'next-sanity'
import { s } from 'sanity-typed-schema-builder'
import { home } from '@cms/schemas/singles'
import { sanityClient } from '@cms/lib/sanity.client'

export const indexQuery = groq`{
  "page": *[_type == "home"][0] {
    title
  },
}`

export type IndexQueryType = {
  page: Pick<s.infer<typeof home>, 'title'>
}

export async function read() {
  const client = sanityClient()

  const result: IndexQueryType = await client.fetch(indexQuery)

  return result
}
