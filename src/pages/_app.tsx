import type { AppProps } from 'next/app'
import Loading from '../components/OnPageLoading'

import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading >
        <Component {...pageProps} />
      </Loading>
    </>
  )
}

export default MyApp
