import * as React from 'react'
import { useRouter } from 'next/router'
import { useLoading, selector } from '@ui/hooks/useLoading'

export function useRouteChange(...fns: (() => void)[]) {
  const router = useRouter()
  const push = useLoading(selector.push)
  const reset = useLoading(selector.reset)

  React.useEffect(() => {
    const handleStart = () => {
      if (fns?.length) {
        fns.forEach((f) => f())
      }
      push('route')
    }
    const handleStop = () => {
      reset()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router, push, reset, fns])

  return router
}
