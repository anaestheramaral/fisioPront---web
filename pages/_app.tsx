import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {PatientsProvider} from '../contexts/patients.context'
import { Provider }  from 'next-auth/client'
import Sidebar from '../components/Sidebar';
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <PatientsProvider >
        <div className={styles.main}>
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </PatientsProvider>
    </Provider>

  )
}

export default MyApp
