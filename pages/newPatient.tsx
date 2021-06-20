import React, { ChangeEvent, useContext, useState } from 'react';
import { PatientsContext } from '../contexts/patients.context';
import styles from '../styles/NewPatient.module.scss';
import Button from '../components/Button';
import Link from 'next/link';

import Input from '../components/Input';
import Textarea from '../components/TextArea';
import { FaChevronLeft as BackIcon } from 'react-icons/fa';
import { HeaderMenu } from '../components';

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
      <main className={styles.main}>
        

        <HeaderMenu title="Adicionar novo paciente" />

        <form onSubmit={handleSubmit}>
          <Input onChange={handleChange} placeholder="Nome" name="name" label="Nome:"/>
          <Input onChange={handleChange} placeholder="Motivo da internação" name="name" label="Motivo da internação:"/>


          <h3 className={styles.observations}>Observações:</h3>

          <Textarea onChange={handleChange} name="observations" rows={6}/>

        <Button type="submit"><strong>Salvar</strong></Button>
       </form>
        
      </main>

        
  )
}
