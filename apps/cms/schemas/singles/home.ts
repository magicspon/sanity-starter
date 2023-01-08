import { s } from 'sanity-typed-schema-builder'
import { block } from '../fields/block'

export const home = s.document({
  name: 'home',
  title: 'Home',
  fields: [
    {
      name: 'title',
      type: s.string(),
    },
    {
      name: 'content',
      type: block,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title as string,
        // title: title ?? null
      }
    },
  },
})
