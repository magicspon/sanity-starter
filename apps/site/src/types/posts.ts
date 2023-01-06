import { TTheme } from '@ui/primitives/Theme'
import type { Image } from 'sanity'

type TBanner = {
  _type: 'banner'
  image: Image
  theme: undefined // meh, adding this to prevent the theme type error
}

export type TStat = {
  _type: 'stat'
  text: string
  percent: string
  theme: TTheme
}

export type TQuote = {
  _type: 'quote'
  text: string
  author: TAuthor
  theme: TTheme
}

export type TCount = {
  _type: 'count'
  text: string
  stat: string
  theme: TTheme
}

export type TTeaser = TBanner | TStat | TQuote | TCount

export type TAuthor = {
  name: string
  title: string
}

export type TPosts = {
  _id: string
  teaser?: TTeaser
  subTitle: string
  title: string
  author: {
    name: string
    jobTitle: string
  }
  slug: string
}

export type TApiPosts = Omit<TPosts, 'slug'> & {
  slug: { current: string }
}
