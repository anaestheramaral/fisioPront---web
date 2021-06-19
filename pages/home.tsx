import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header';
import Button from '../components/Button';
import { FiX as CloseIcon} from 'react-icons/fi'
import LoadMoreButton from '../components/LoadMoreButton';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>fisioPront | Home</title>
      </Head>

      <Header />

      <main className={styles.main}>
        
        <h2>Escalas e índices</h2>
        <Button>
          ESCALA VISUAL ANALÓGICA – EVA
        </Button>

        <Button>
          ESCALA DE FREQUÊNCIA DE ESPASMO
        </Button>

        <h2 style={{marginTop: 50}}>Pacientes</h2>

        <Button spaced>
          <strong>A.R.U</strong>
          <CloseIcon />
        </Button>

        <Link href="/newPatient" passHref>
          <LoadMoreButton />
        </Link>
        
      </main>

        
    </div>
  )
}
