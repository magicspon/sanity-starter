import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'seoTitle',
      title: 'Site title',
      description: 'Displayed on social cards and search engine results.',
    }),
    defineField({
      type: 'string',
      name: 'seoDesc',
      title: 'Site description',
      description: 'Displayed on social cards and search engine results.',
      // validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'ogImage',
    //   title: 'Open Graph Image',
    //   type: 'image',
    //   description: 'Displayed on social cards and search engine results.',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
  ],
})
