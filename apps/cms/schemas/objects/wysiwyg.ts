import { defineField, defineType } from 'sanity'

export const wysiwyg = defineType({
  name: 'wysiwyg',
  type: 'object',
  title: 'Content',
  fields: [
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineField({
          title: 'Block',
          name: 'block',
          type: 'block',
        }),
        defineField({
          title: 'Link',
          name: 'link',
          type: 'linkField',
        }),
      ],
    }),
  ],
})
