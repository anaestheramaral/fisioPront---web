import Head from 'next/head';
import styles from '../styles/NewPatient.module.scss';
import Button from '../components/Button';
import Link from 'next/link';

import React from 'react';
import Input from '../components/Input';
import Textarea from '../components/TextArea';
import { FaChevronLeft as BackIcon } from 'react-icons/fa';

export default function Home() {
  return (
      <main className={styles.container}>
        <Link href="/" passHref >
          <BackIcon className={styles.back} />
        </Link>

        <h2>Adicionar paciente</h2>
        <Input placeholder="Nome" />
        <Input placeholder="Motivo da internação" />


        <h3 className={styles.observations}>Observações:</h3>

        <Textarea />

       <Button><strong>Salvar</strong></Button>
        
      </main>

        
  )
}
