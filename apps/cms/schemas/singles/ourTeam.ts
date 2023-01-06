import { defineArrayMember, defineField, defineType } from 'sanity'

export const ourTeam = defineType({
  name: 'ourTeam',
  type: 'document',
  title: 'Our team',
  groups: [{ name: 'Hero' }, { name: 'Page' }, { name: 'SEO' }],
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
      type: 'textPanel',
      name: 'textPanel',
      group: 'Page',
    }),

    defineField({
      name: 'joinUs',
      type: 'textPanel',
      title: 'Text banner',
      group: 'Page',
    }),

    defineField({
      name: 'gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          name: 'image',
          title: 'Image',
        }),
      ],
      group: 'Page',
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
