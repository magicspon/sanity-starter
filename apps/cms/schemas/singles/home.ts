import { defineArrayMember, defineField, defineType } from 'sanity'

export const home = defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  groups: [
    { name: 'Hero' },
    { name: 'What we do' },
    { name: 'Services' },
    { name: 'Our difference' },
    { name: 'Case study' },
    { name: 'Clients' },
    { name: 'SEO' },
  ],
  fields: [
    //Hero
    defineField({
      type: 'text',
      name: 'title',
      rows: 2,
      validation: (Rule) => Rule.required(),
      group: 'Hero',
    }),
    defineField({
      type: 'text',
      name: 'intro',
      rows: 4,
      validation: (Rule) => Rule.required(),
      group: 'Hero',
    }),
    defineField({
      type: 'linkField',
      name: 'button',
      group: 'Hero',
    }),
    // what we do
    defineField({
      type: 'textPanel',
      name: 'whatWeDo',
      group: 'What we do',
    }),
    // Services
    defineField({
      type: 'services',
      group: 'Services',
      name: 'services',
    }),
    // Our difference
    defineField({
      group: 'Our difference',
      type: 'textPanel',
      name: 'ourDifference',
    }),
    // Split
    defineField({
      group: 'Case study',
      type: 'splitPanel',
      name: 'splitPanel',
    }),
    // Clients
    defineField({
      group: 'Clients',
      type: 'clients',
      name: 'clients',
    }),
    // Quotes
    defineField({
      group: 'Clients',
      type: 'array',
      name: 'quotes',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'quotes' }],
        }),
      ],
    }),
    // partners
    defineField({
      name: 'partners',
      type: 'textPanel',
      title: 'Text banner',
    }),
    // SEo
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
        subtitle: 'Home',
        title,
      }
    },
  },
})
