import { orderRankField } from '@sanity/orderable-document-list'
import { defineField, defineType } from 'sanity'

export const quotes = defineType({
  name: 'quotes',
  type: 'document',
  title: 'Quotes',
  fields: [
    orderRankField({ type: 'quotes' }),

    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Quote',
      rows: 5,
    }),
    defineField({
      name: 'cite',
      type: 'text',
      title: 'Cite',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
