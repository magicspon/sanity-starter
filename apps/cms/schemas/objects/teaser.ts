import { defineType, defineField } from 'sanity'

const theme = defineField({
  name: 'theme',
  type: 'string',
  options: {
    list: ['yellow', 'navy', 'blue', 'white', 'pebble', 'stone'],
  },
  initialValue: 'mustard',
})

export const banner = defineType({
  name: 'teaserBanner',
  type: 'object',
  title: 'Banner',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
  preview: {
    prepare() {
      return {
        subtitle: 'layout: banner',
        title: 'Banner image',
      }
    },
  },
})

export const stat = defineType({
  name: 'teaserStat',
  type: 'object',
  title: 'Stat',
  fields: [
    theme,
    defineField({
      name: 'text',
      type: 'string',
    }),
    defineField({
      name: 'percent',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      name: 'name',
    },

    prepare({ title }) {
      return {
        subtitle: 'layout: stat',
        title,
      }
    },
  },
})

export const quote = defineType({
  name: 'teaserQuote',
  type: 'object',
  title: 'Quote',
  fields: [
    theme,
    defineField({
      name: 'text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'author',
      type: 'author',
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },

    prepare({ title }) {
      return {
        subtitle: 'layout: quote',
        title,
      }
    },
  },
})

export const count = defineType({
  name: 'teaserCount',
  type: 'object',
  title: 'Count',
  fields: [
    theme,
    defineField({
      name: 'text',
      type: 'string',
    }),
    defineField({
      name: 'stat',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },

    prepare({ title }) {
      return {
        subtitle: 'layout: count',
        title,
      }
    },
  },
})
