import { defineField, defineType } from 'sanity'

export const textPanel = defineType({
  name: 'textPanel',
  type: 'object',
  title: 'Text panel',
  fields: [
    defineField({
      type: 'string',
      name: 'subHeading',
      title: 'Sub Heading',
    }),
    defineField({
      type: 'text',
      rows: 2,
      name: 'heading',
      title: 'Heading',
    }),
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'content',
      title: 'Content',
      type: 'wysiwyg',
    }),
  ],
})
