import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '@project/cms/lib/sanity.client'
import { postsPaginationQuery } from '@project/cms/lib/sanity.queries'
import { TApiPosts } from '~types/posts'

type Data = {
  data: TApiPosts[]
  previousId: number
  nextId: number | null
}

const PER_PAGE = 9

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const cursor = Number(req.query.cursor as string)
  const from = PER_PAGE * cursor
  const offset = from + PER_PAGE

  const client = sanityClient()
  const { posts, count } = await client.fetch(postsPaginationQuery, {
    from,
    to: offset,
  })

  const hasMore = count > from + PER_PAGE

  res.status(200).json({
    data: posts,
    previousId: Number(cursor) - 1,
    nextId: hasMore ? cursor + 1 : null,
  })
}
