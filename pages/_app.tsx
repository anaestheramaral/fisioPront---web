import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {PatientsContextProvider} from '../contexts/patients.context'
import { Provider }  from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <PatientsContextProvider >
        <Component {...pageProps} />
      </PatientsContextProvider>
    </Provider>

  )
}

export default MyApp
