import { useState } from 'react'
import {
  DefaultOptions,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const defaultOptions: DefaultOptions = {
    queries: { useErrorBoundary: true, refetchOnWindowFocus: false },
  }

  const [queryClient] = useState(() => new QueryClient({ defaultOptions }))

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
export default MyApp
