import { s } from 'sanity-typed-schema-builder'

export const home = s.document({
  name: 'home',
  title: 'Home',
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
