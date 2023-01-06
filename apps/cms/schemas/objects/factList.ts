import { defineArrayMember, defineField, defineType } from 'sanity'

export const factList = defineField({
  type: 'array',
  name: 'services',
  title: 'Services',
  group: 'Intro',
  of: [
    defineArrayMember({
      type: 'object',
      name: 'item',
      fields: [
        defineField({
          type: 'reference',
          name: 'service',
          to: [{ type: 'service' }],
        }),
        defineField({
          type: 'text',
          name: 'text',
        }),
      ],
    }),
  ],
})
