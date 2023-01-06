import { defineArrayMember, defineField, defineType } from 'sanity'
import * as React from 'react'

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'News',

  groups: [
    { name: 'Meta' },
    { name: 'Hero' },
    { name: 'Teaser' },
    { name: 'Page' },
    { name: 'SEO' },
  ],
  orderings: [
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],

  fields: [
    defineField({
      title: 'Publish date',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      group: 'Meta',
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
      group: 'Meta',
    }),
    defineField({
      type: 'string',
      name: 'subTitle',
      validation: (Rule) => Rule.required(),
      group: 'Teaser',
    }),
    defineField({
      type: 'text',
      name: 'title',
      rows: 2,
      group: 'Meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      group: 'Meta',
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
      group: 'Teaser',
      name: 'teaser',
      type: 'array',
      validation: (Rule) => Rule.max(1),

      of: [
        defineArrayMember({
          type: 'teaserBanner',
          name: 'banner',
          title: 'Banner',
        }),
        defineArrayMember({
          type: 'teaserStat',
          title: 'Stat',
          name: 'stat',
        }),
        defineArrayMember({
          type: 'teaserQuote',
          title: 'Quote',
          name: 'quote',
        }),
        defineArrayMember({
          title: 'Count',
          type: 'teaserCount',
          name: 'count',
        }),
      ],
    }),

    defineField({
      group: 'Page',
      type: 'text',
      name: 'intro',
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
      group: 'Page',
      type: 'array',
      title: 'Related posts',
      name: 'posts',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'post' }],
        }),
      ],
      validation: (Rule) => Rule.max(3),
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
      subTitle: 'subTitle',
      date: 'date',
      author: 'author.name',
    },
    prepare({ title, subTitle, author, date }) {
      return {
        subtitle: `${date} ${subTitle} - ${author}`,
        title,
      }
    },
  },
})
