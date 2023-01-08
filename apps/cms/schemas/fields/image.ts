import { s } from 'sanity-typed-schema-builder'

export const image = s.image({
  fields: [
    {
      name: 'title',
      title: 'Image description',
      type: s.string(),
    },
  ],
  hotspot: true,
})
