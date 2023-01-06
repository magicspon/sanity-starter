import { defineArrayMember, defineField, defineType } from 'sanity'
import * as React from 'react'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Pages',
  groups: [{ name: 'Meta' }, { name: 'Page' }, { name: 'SEO' }],

  fields: [
    defineField({
      type: 'text',
      name: 'title',
      rows: 2,
      validation: (Rule) => Rule.required(),
      group: 'Meta',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'Meta',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),

    defineField({
      type: 'text',
      name: 'intro',
      group: 'Page',
      rows: 5,
    }),

    defineField({
      group: 'Page',
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
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
        }),
        defineField({
          title: 'Quote',
          name: 'quote',
          type: 'reference',
          to: [{ type: 'quotes' }],
        }),
      ],
    }),

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
        title,
      }
    },
  },
})
