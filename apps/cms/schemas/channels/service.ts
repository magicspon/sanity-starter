import { orderRankField } from '@sanity/orderable-document-list'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  type: 'document',
  title: 'Services',
  groups: [{ name: 'Hero' }, { name: 'Intro' }, { name: 'SEO' }],
  fields: [
    orderRankField({ type: 'service' }),

    defineField({
      type: 'text',
      name: 'title',
      rows: 2,
      validation: (Rule) => Rule.required(),
      group: 'Hero',
    }),

    defineField({
      type: 'image',
      name: 'image',
      validation: (Rule) => Rule.required(),
      group: 'Hero',
    }),

    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),

    defineField({
      type: 'textPanel',
      name: 'intro',
      validation: (Rule) => Rule.required(),
      group: 'Intro',
    }),

    defineField({
      type: 'array',
      name: 'services',
      group: 'Intro',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'item',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
            }),
            defineField({
              type: 'wysiwyg',
              name: 'content',
            }),
          ],
        }),
      ],
    }),

    defineField({
      type: 'splitPanel',
      name: 'caseStudy',
      validation: (Rule) => Rule.required(),
      group: 'Intro',
    }),

    defineField({
      type: 'textPanelImage',
      name: 'partners',
      validation: (Rule) => Rule.required(),
      group: 'Intro',
    }),

    // Clients
    defineField({
      group: 'Intro',
      type: 'clients',
      name: 'clients',
    }),

    // Quotes
    defineField({
      group: 'Intro',
      type: 'array',
      name: 'quotes',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'quotes' }],
        }),
      ],
    }),

    // Seo
    defineField({
      group: 'SEO',
      type: 'seo',
      name: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Services',
        title,
      }
    },
  },
})
