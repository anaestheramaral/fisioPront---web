import React, { ChangeEvent, useContext, useState } from "react";
import { PatientsContext } from "../contexts/patients.context";
import styles from "../styles/NewPatient.module.scss";
import Button from "../components/Button";
import Link from "next/link";

import Input from "../components/Input";
import Textarea from "../components/TextArea";
import { HeaderMenu, Userinfo } from "../components";
import { useSession } from "next-auth/client";
import { Login } from "../components/Login";

interface PatientProps {
  name: string;
  internationMotive: string;
  observations: string;
}

export default function Home() {
  const { handleAddNewPatient } = useContext(PatientsContext);
  const [session] = useSession();

  const [newPatient, setNewPatient] = useState<PatientProps>(
    {} as PatientProps
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    handleAddNewPatient(newPatient);
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
                name="name"
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
