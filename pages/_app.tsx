import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {PatientsProvider} from '../contexts/patients.context'
import { Provider }  from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <PatientsProvider >
        <Component {...pageProps} />
      </PatientsProvider>
    </Provider>

  )
}

export default MyApp
