import { s } from 'sanity-typed-schema-builder'

export const page = s.document({
  name: 'page',
  title: 'Page',
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
