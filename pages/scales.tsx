import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Button from '../components/Button';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>fisioPront | Patients</title>
      </Head>


      <main className={styles.main}>
        
        <h2 style={{marginBottom: 50}}>Escalas e índices</h2>

        <Button  >
          ESCALA VISUAL ANALÓGICA – EVA
        </Button>
        
        <Button>
        ESCALA DE FREQUÊNCIA DE ESPASMO
        </Button>

      
        
      </main>

        
    </div>
  )
}
