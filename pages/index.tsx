/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { Login } from "../components/Login";
import { HeaderMenu, Userinfo } from "../components";
import { useSession, signOut } from "next-auth/client";
import styles from "../styles/Index.module.scss";
import { PatientsContext } from "../contexts/patients.context";

export default function Home() {
  const [session] = useSession();
  const { patients } = useContext(PatientsContext);
  const [newsPatients, setNewsPatients] = useState([]);

  useEffect(() => {
    const newPatients: any = patients.slice(0,5);
    setNewsPatients(newPatients);
  }, []);

  return !session ? (
    <Login />
  ) : (
    <div className={styles.main}>
      <div className={styles.content}>
        <HeaderMenu title="Dashboard" />
        <div className={styles.box}>
          <div className={styles.user_list}>
            <div className={styles.header_actions}>
              <div className={styles.title}>
                <p>Pacientes Recentes</p>
              </div>
              <div className={styles.action}>
                <p>
                  <a href="/patients">Ver Todos</a>
                </p>
              </div>
            </div>

            <div className={styles.header_list}>
              <ul>
                <li>Paciente</li>
                <li>Data de Entrada</li>
                <li>Status</li>
              </ul>
            </div>

            <div className={styles.list_users}>
              <ul>
                {newsPatients.length > 0 ? (
                  <div>
                    {newsPatients.map((pacient: any) => {
                      return (
                        <li key={pacient.name}>
                          <div className={styles.avatar_user}>
                            <img src="/images/pacients.png" alt="" />
                            <div className={styles.avatar_title}>
                              <div>
                                <p>{pacient.name}</p>
                              </div>
                              <div className={styles.user_contact}>
                                <p>{pacient.contact}</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.user_date}>
                            <p>{pacient.date}</p>
                          </div>
                          <div
                            className={`${styles.user_status} ${
                              styles[pacient.styles]
                            }`}
                          >
                            <p>{pacient.status}</p>
                          </div>
                        </li>
                      );
                    })}
                  </div>
                ) : (
                  <div className={styles.notPatients}>
                    <p>Não existe pacientes cadastrados no momento</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <Userinfo />
        </div>
      </div>
    </div>
  );
}
