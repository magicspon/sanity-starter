import { defineField } from 'sanity'

export const author = defineField({
  name: 'author',
  type: 'object',
  title: 'Author',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})
