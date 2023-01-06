import * as React from 'react'
import NProgress from 'nprogress'
import { useLoading } from '@ui/hooks/useLoading'

export function useNProgress() {
  const isLoading = useLoading((state) => state.isLoading)

  React.useEffect(() => {
    if (isLoading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [isLoading])
}
