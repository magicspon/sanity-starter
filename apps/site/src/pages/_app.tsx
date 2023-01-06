import '@ui/styles/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import type { AppType } from 'next/app'
import Head from 'next/head'
import clsx from 'clsx'
import { Inter } from '@next/font/google'
import { useNProgress } from '@ui/hooks/useNProgress'
import { Theme } from '@ui/primitives'
import type { TTheme } from '@ui/primitives/Theme'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
})

const App: AppType<{ studio?: boolean; theme: TTheme }> = ({
  Component,
  pageProps: { studio, theme, ...pageProps },
}) => {
  const [queryClient] = React.useState(() => new QueryClient())

  useNProgress()

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Sanity Starter</title>
      </Head>
      {!studio && (
        <a
          className="sr-only focus:not-sr-only focus:absolute z-50 top-0 left-0 bg-mustard focus:px-3 focus:py-2 text-navy"
          href="#main-content"
        >
          Skip Navigation
        </a>
      )}
      <Theme
        theme={theme}
        className={clsx(
          inter.variable,
          'font-sans min-h-screen',
          !studio && 'flex flex-col',
        )}
      >
        {studio ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </Theme>
    </QueryClientProvider>
  )
}

export default App
