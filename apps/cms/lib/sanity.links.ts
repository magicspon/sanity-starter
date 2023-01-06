export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'ourStory':
      return '/our-story'
    case 'ourTeam':
      return '/our-team'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'post':
      return slug ? `/news/${slug}` : undefined
    case 'service':
      return slug ? `/services/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
