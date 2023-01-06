import { defineField, defineType } from 'sanity'

export const clients = defineType({
  name: 'clients',
  type: 'object',
  title: 'Clients',
  fields: [
    defineField({
      type: 'string',
      name: 'heading',
    }),
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [
        defineField({
          name: 'client',
          type: 'reference',
          to: [{ type: 'client' }],
        }),
      ],
    }),
  ],
})
