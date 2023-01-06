import { defineField, defineType } from 'sanity'

export const textPanelImage = defineType({
  name: 'textPanelImage',
  type: 'object',
  title: 'Text panel with image',
  fields: [
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
    }),
    defineField({
      type: 'string',
      name: 'subHeading',
      title: 'Sub Heading',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'wysiwyg',
    }),
  ],
})
