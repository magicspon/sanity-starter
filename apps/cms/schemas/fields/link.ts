import { s } from 'sanity-typed-schema-builder'
import { post } from '../channels/post'
import { page } from '../structures/page'

export const link = s.objectNamed({
  name: 'link',
  description: 'Create an internal or external link.',
  validation: (input) => {
    console.log(input)
    return input
  },
  fields: [
    {
      name: 'text',
      description: 'Link label',
      type: s.string({
        initialValue: 'Read more',
      }),
    },
    {
      name: 'url',
      optional: true,
      type: s.url({
        validation: (Rule) => {
          return Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel'],
          })
        },
        hidden: ({ parent, value }) => !value && !!parent?.href,
      }),
      title: 'External url',
      description: `Url starting with 'http://' or 'https://'`,
    },
    {
      name: 'href',
      title: 'Internal url',
      optional: true,
      type: s.reference({
        to: [post, page],
        hidden: ({ parent, value }) => !value && !!parent?.url,
      }),
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title as string,
      }
    },
  },
})
