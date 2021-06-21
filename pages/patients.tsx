import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Button from '../components/Button';
import { FiX as CloseIcon} from 'react-icons/fi'
import LoadMoreButton from '../components/LoadMoreButton';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>fisioPront | Patients</title>
      </Head>


      <main className={styles.main}>
        
        <h2 style={{marginBottom: 50}}>Pacientes</h2>

        <Button spaced >
          <strong>A.R.U</strong>
          <CloseIcon />
        </Button>
        
        <Button spaced>
          <strong>A.R.U</strong>
          <CloseIcon />
        </Button>

        <Button spaced>
          <strong>A.R.U</strong>
          <CloseIcon />
        </Button>

        <Button spaced>
          <strong>A.R.U</strong>
          <CloseIcon />
        </Button>

        <Link href="/newPatient" passHref >
          <LoadMoreButton style={{marginTop: 50}}/>
        </Link>
        
      </main>

        
    </div>
  )
}
