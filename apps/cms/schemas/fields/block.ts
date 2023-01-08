import { s } from 'sanity-typed-schema-builder'
import { link } from './link'
import { image } from './image'
import { post } from '../channels/post'

export const block = s.array({
  of: [
    s.block({
      marks: {
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'post' }, { type: 'page' }],
              },
            ],
          },
        ],
      },
    }),
    link,
    image,
  ],
})
