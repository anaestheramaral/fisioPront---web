import React, { ChangeEvent, useContext, useState } from 'react';
import { PatientsContext } from '../contexts/patients.context';
import styles from '../styles/NewPatient.module.scss';
import Button from '../components/Button';
import Link from 'next/link';

import Input from '../components/Input';
import Textarea from '../components/TextArea';
import { FaChevronLeft as BackIcon } from 'react-icons/fa';

interface PatientProps {
  name: string;
  internationMotive: string;
  observations: string;
};

export default function Home() {
  const {handleAddNewPatient} = useContext(PatientsContext);

  const [newPatient, setNewPatient] = useState<PatientProps>({} as PatientProps)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    handleAddNewPatient(newPatient)
  }

  return (
      <main className={styles.container}>
        <Link href="/" passHref >
          <BackIcon className={styles.back} />
        </Link>

        <h2>Adicionar paciente</h2>

        <form onSubmit={handleSubmit}>
          <Input onChange={handleChange} placeholder="Nome" value={newPatient.name}/>
          <Input onChange={handleChange} placeholder="Motivo da internação" value={newPatient.internationMotive}/>


          <h3 className={styles.observations}>Observações:</h3>

          <Textarea onChange={handleChange} value={newPatient.observations}/>

        <Button type="submit"><strong>Salvar</strong></Button>
       </form>
        
      </main>

        
  )
}
