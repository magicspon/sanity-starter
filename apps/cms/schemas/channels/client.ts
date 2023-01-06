import { defineField, defineType } from 'sanity'

export const client = defineType({
  name: 'client',
  type: 'document',
  title: 'Clients',
  orderings: undefined,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
