import { orderRankField } from '@sanity/orderable-document-list'
import { defineField, defineType } from 'sanity'

export const person = defineType({
  name: 'person',
  type: 'document',
  title: 'Person',
  orderings: undefined,

  fields: [
    orderRankField({ type: 'person' }),

    defineField({
      title: 'Display on team page?',
      name: 'public',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Photo',
    }),
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'jobTitle',
      type: 'string',
      title: 'Job title',
    }),
    defineField({
      validation: (Rule) => Rule.required(),
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      validation: (Rule) => Rule.email(),
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'linkedIn',
      type: 'url',
      title: 'Linkedin',
    }),
    defineField({
      name: 'twitter',
      type: 'url',
      title: 'Twitter',
    }),
  ],

  preview: {
    select: {
      title: 'name',
    },
  },
})
