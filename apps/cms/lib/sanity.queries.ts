import { groq } from 'next-sanity'

const siteFields = groq`
  address,
  email,
  tel,
  statement,
  siteName,
  seo{seoTitle, seoDesc, ogImage}
`

const globalQuery = groq`
  *[_type == "settings"][0] { ${siteFields} }
`
const teaserFields = groq`
  _id,
  "teaser": teaser[0]{..., _type},
  "author": author->{name, jobTitle},
  title,
  subTitle,
  slug
`

export const postsQuery = groq`{
  "posts": *[_type == "post"]| order(date desc) [0...9]{
    ${teaserFields}
  },
  "site": ${globalQuery},
  "count": count(*[_type == "post"])
}`

export const pageQuery = groq`{
  "page": *[_type == "page" && slug.current == $slug][0]{
    title,
    intro,
    'content': content[]{
      _type == 'quote' => @->{quote, cite, _type, _key},
      _type != 'quote' => @,
    },
    seo, 
  },
  "site": ${globalQuery},
}`

export const postsPaginationQuery = groq`{
  "posts": *[_type == "post"] | order(date desc) [$from...$to] {
     ${teaserFields}
  },
  "count": count(*[_type == "post"])
}`

export const postQuery = groq`{
  "post": *[_type == "post" && slug.current == $slug][0]{
    title,
    "author": author->{name, jobTitle},
    intro,
    'content': content[]{
      _type == 'quote' => @->{quote, cite, _type, _key},
      _type != 'quote' => @,
    },
    "posts": posts[]->{
      ${teaserFields}
    },
    seo, 
  },
  "site": ${globalQuery}
}`

const indexFields = groq`
  button,
  clients,
  intro,
  "services": services[]{ _key, text, service->{title, slug} },
  ourDifference,
  "quotes": quotes[]->{ title, quote, cite, _id },
  partners,
  seo,
  splitPanel,
  textBanner,
  title, 
  whatWeDo,
  clients{heading, clients[]->}
`

export const indexQuery = groq`{
  "page": *[_type == "home"][0] {
    ${indexFields}
  },
  "site": ${globalQuery},
  "posts": *[_type == "post"] | order(date desc) [0...3] {
     ${teaserFields}
  },}`

export const ourTeamQuery = groq`{
  "page": *[_type == "ourTeam"][0],
  "team": *[_type == "person" && public == true]|order(orderRank) {
    _id,
    name,
    jobTitle,
    image,
    bio,
    twitter,
    linkedIn,
    email
  },
  "site": ${globalQuery}
}`

const ourStoryFields = groq`
  image,
  title,
  intro,
  "services": services[]{ _key, text, service->{title, slug} },
  approach,
  partners,
  clients{heading, clients[]->},
  seo,
`

export const ourStoryQuery = groq`{
  "page": *[_type == "ourStory"][0]{
    ${ourStoryFields}
  },
  "site": ${globalQuery}
}`

const serviceFields = groq`
  _id,
  image,
  title,
  intro,
  services,
  caseStudy,
  partners,
  clients{heading, clients[]->},
  "quotes": quotes[]->{ title, quote, cite, _id },
  seo,
`

export const serviceQuery = groq`{
  "page": *[_type == "service" && slug.current == $slug][0]{
    ${serviceFields}
  },
  "site": ${globalQuery}
}`
