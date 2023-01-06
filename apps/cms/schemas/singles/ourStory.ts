import { defineArrayMember, defineField, defineType } from 'sanity'

export const ourStory = defineType({
  name: 'ourStory',
  type: 'document',
  title: 'Our story',
  groups: [
    { name: 'Hero' },
    { name: 'Page' },
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
      type: 'image',
      name: 'image',
      group: 'Hero',
    }),
    defineField({
      type: 'wysiwyg',
      name: 'intro',
      group: 'Page',
    }),

    defineField({
      type: 'services',
      group: 'Page',
      name: 'services',
    }),

    defineField({
      type: 'textPanel',
      name: 'approach',
      group: 'Page',
    }),

    defineField({
      type: 'textPanelImage',
      name: 'partners',
      group: 'Page',
    }),

    // Clients
    defineField({
      group: 'Clients',
      type: 'clients',
      name: 'clients',
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
        subtitle: 'Home',
        title,
      }
    },
  },
})
