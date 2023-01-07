import { s } from 'sanity-typed-schema-builder'
import slugify from 'slugify'

export const page = s.document({
  name: 'page',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: s.string(),
    },
    {
      name: 'slug',
      type: s.slug({
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input) => slugify(input).slice(0, 200),
        },
      }),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title as string,
      }
    },
  },
})
