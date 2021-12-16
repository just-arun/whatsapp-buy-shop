import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStateStore } from '../stores'
import { DefaultLayout } from '../components/layouts'
import { SearchLayout } from '../components/layouts/search'

function MyApp({ Component, pageProps }: any) {
 
  const render = () => {
    switch (Component.layout) {
      case "search":
        return <SearchLayout>
          <Component {...pageProps} />
        </SearchLayout>
      default:
        return <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
    }
  }

  return <GlobalStateStore.Provider>
    {render()}
  </GlobalStateStore.Provider>
}

export default MyApp
