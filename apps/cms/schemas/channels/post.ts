import { s } from 'sanity-typed-schema-builder'

export const post = s.document({
  name: 'post',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: s.string(),
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
