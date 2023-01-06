import { defineField, defineType } from 'sanity'

export const splitPanel = defineType({
  name: 'splitPanel',
  type: 'object',
  title: 'Split panel',
  fields: [
    defineField({
      type: 'text',
      rows: 2,
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
      type: 'wysiwyg',
      name: 'content',
      title: 'Content',
    }),
    defineField({
      type: 'image',
      name: 'logo',
      title: 'Logo',
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
    }),
  ],
})
