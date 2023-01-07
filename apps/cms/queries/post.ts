import { groq } from 'next-sanity'
import { s } from 'sanity-typed-schema-builder'
import { post } from '@cms/schemas/channels/post'
import { sanityClient } from '@cms/lib/client'

export const postQuery = groq`{
  "page": *[_type == "post" && slug.current == $slug][0] {
    title
  },
}`

export type PostQueryType = {
  page: Pick<s.infer<typeof post>, 'title'>
}

export async function readPost({ slug }: { slug: string }) {
  const client = sanityClient()

  const result: PostQueryType = await client.fetch(postQuery, { slug })

  return result
}

export const postsPaginationQuery = groq`{
  "pages": *[_type == "post"] | order(date desc) [$from...$to] {
     title,
     "id": _id
  },
  "count": count(*[_type == "post"])
}`

export type PostPaginationQueryType = {
  pages: (Pick<s.infer<typeof post>, 'title'> & { id: string })[]
  count: number
}

export async function readPagination({
  from,
  to,
}: {
  from: number
  to: number
}) {
  const client = sanityClient()

  const result: PostPaginationQueryType = await client.fetch(
    postsPaginationQuery,
    {
      from,
      to,
    },
  )

  return result
}
