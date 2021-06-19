import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import { Login } from '../components/Login'
import { useSession, signOut } from 'next-auth/client'
export default function Home() {
  const [session] = useSession()

  return !session ? <Login /> : (
    <div>
      <Head>
        <title>fisioPront | Home</title>
      </Head>
      
      <Header />
      <main>
        <button onClick={ () => signOut() }>sing Out</button>
      </main>
    </div>
  )
}
