import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  type: 'document',
  title: 'Settings',
  groups: [
    {
      name: 'SEO',
    },
    {
      name: 'Footer',
    },
    {
      name: 'Social',
    },
    {
      name: 'Newsletter',
    },
  ],
  fields: [
    defineField({
      type: 'string',
      name: 'siteName',
      group: 'SEO',
      title: 'Site name',
    }),
    defineField({
      type: 'seo',
      name: 'seo',
      title: 'Seo',
      group: 'SEO',
    }),

    defineField({
      type: 'text',
      name: 'statement',
      title: 'Statement',
      group: 'Footer',
    }),
    defineField({
      type: 'string',
      name: 'tel',
      title: 'Telephone',
      group: 'Footer',
    }),
    defineField({
      type: 'email',
      name: 'email',
      title: 'Email',
      group: 'Footer',
    }),

    defineField({
      type: 'string',
      name: 'address',
      title: 'Address',
      group: 'Footer',
    }),

    defineField({
      type: 'url',
      name: 'twitter',
      title: 'Twitter',
      group: 'Social',
    }),
    defineField({
      type: 'url',
      name: 'linkedin',
      title: 'LinkedIn',
      group: 'Social',
    }),

    defineField({
      type: 'string',
      name: 'terms',
      title: 'Signup terms',
      group: 'Newsletter',
    }),
    defineField({
      type: 'string',
      name: 'signUpHeading',
      title: 'Sign up heading',
      group: 'Newsletter',
    }),
  ],
})
