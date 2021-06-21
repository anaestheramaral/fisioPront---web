import React, { ChangeEvent, useContext, useState } from "react";
import { PatientsContext } from "../contexts/patients.context";
import styles from "../styles/NewPatient.module.scss";
import Button from "../components/Button";
import Link from "next/link";

import Moment from 'moment';

import Input from "../components/Input";
import Textarea from "../components/TextArea";
import { HeaderMenu, Userinfo } from "../components";
import { useSession } from "next-auth/client";
import { Login } from "../components/Login";
import { FormEventHandler } from "react";

interface PatientProps {
  name: string;
  internationMotive: string;
  observations: string;
  contact:  string;
  date: string;
  status: string;
  styles: string;
}

export default function Home() {
  const { handleAddNewPatient } = useContext(PatientsContext);
  const [session] = useSession();

  const [newPatient, setNewPatient] = useState<PatientProps>({ 
    name: '',
    internationMotive: '',
    observations: '',
    contact:  '',
    date: '',
    status: '',
    styles: ''
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const newDate = Moment().format('DD-MM-YYYY');
    setNewPatient({
      ...newPatient,
      date: `${newDate}`,
      styles: 'default',
      status: 'Regular',
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    handleAddNewPatient(newPatient);
    setNewPatient({ 
      name: '',
      internationMotive: '',
      observations: '',
      contact:  '',
      date: '',
      status: '',
      styles: ''
    })
  };

  if (session) {
    return (
      <main className={styles.main}>
        <HeaderMenu title="Adicionar novo paciente" />
  
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
              <Input
                onChange={handleChange}
                placeholder="Nome"
                name="name"
                label="Nome:"
              />
              <Input
                onChange={handleChange}
                placeholder="Motivo da internação"
                name="internationMotive"
                label="Motivo da internação:"
              />
            </div>
            <div style={{ width: "100%" }}>
              <Textarea
                onChange={handleChange}
                name="observations"
                rows={6}
                label="Motivo da internação"
              />
            </div>
  
            <Button type="submit">
              <strong>Salvar</strong>
            </Button>
          </form>
  
          <Userinfo />
        </div>
      </main>
    )
  };
  return <Login />
}
