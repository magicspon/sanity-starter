import { groq } from 'next-sanity'
import { s } from 'sanity-typed-schema-builder'
import { home } from '@cms/schemas/singles/home'
import { sanityClient } from '@cms/lib/client'

export const indexQuery = groq`{
  "page": *[_type == "home"][0] {
    title,
    "content": content[]{
      ...,
      _type == "image" => @->{
        asset,
        title
      },
      markDefs[] {
        ...,
        _type == "internalLink" => {
          "type": @.reference-> _type,
          "slug": @.reference-> slug
        }
      }
    }
  },
}`

export type IndexQueryType = {
  page: Pick<s.infer<typeof home>, 'title' | 'content'>
}

export async function read() {
  const client = sanityClient()

  const result: IndexQueryType = await client.fetch(indexQuery)

  return result
}
