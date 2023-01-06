import * as React from 'react'
import { mergeSeo, SeoArgs } from '~utils/mergeSeo'

export function useSeo(input: SeoArgs) {
  return React.useMemo(
    () =>
      mergeSeo({
        page: input.page,
        uri: input.uri,
        site: input.site,
        title: input.title,
        siteName: input.siteName,
      }),
    [input],
  )
}
