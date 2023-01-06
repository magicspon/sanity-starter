import { resolveHref } from '@project/cms/lib/sanity.links'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function preview(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  let secret
  console.log(req.query)

  if (req.query.secret) {
    // eslint-disable-next-line no-process-env
    secret = process.env.SANITY_API_READ_TOKEN
    if (!secret) {
      throw new TypeError(`Missing SANITY_API_READ_TOKEN`)
    }
  }

  res.setPreviewData({ token: secret })

  const href = resolveHref(
    req.query.documentType as string,
    req.query?.slug as string,
  )
  res.writeHead(307, { Location: href })

  res.end()
}
