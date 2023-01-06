import { defineField, defineType } from 'sanity'

export const listField = defineType({
  name: 'linkField',
  type: 'object',
  title: 'Link field',
  fields: [
    defineField({
      type: 'string',
      name: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'external',
      type: 'string',
      title: 'Url',
      description:
        'External url, must start with `http`. internal links should start with a `/`',
      hidden: ({ parent, value }) => !value && !!parent?.internal,
    }),
    defineField({
      name: 'internal',
      type: 'reference',
      to: [
        { type: 'post' },
        { type: 'service' },
        { type: 'ourStory' },
        { type: 'ourTeam' },
        { type: 'home' },
      ],
      hidden: ({ parent, value }) => !value && !!parent?.external,
    }),
  ],
})
