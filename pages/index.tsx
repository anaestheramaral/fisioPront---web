/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Login } from "../components/Login";
import { HeaderMenu, Userinfo } from "../components";
import { useSession, signOut } from "next-auth/client";
import styles from "../styles/Index.module.scss";

const pacients = [
  {
    name: "Emerson Garrido",
    contact: '67 99350-8091',
    date: "10/05/2020",
    status: "Bom",
    styles: 'default',
  },
  {
    name: "Emerson Garrido",
    contact: '67 99350-8091',
    date: "10/05/2020",
    status: "Regular",
    styles: 'regular',
  },
  {
    name: "Emerson Garrido",
    contact: '67 99350-8091',
    date: "10/05/2020",
    status: "Crítico",
    styles: 'warning',
  },
  {
    name: "Emerson Garrido",
    contact: '67 99350-8091',
    date: "10/05/2020",
    status: "Ótimo",
    styles: 'success',
  },
];

export default function Home() {
  const [session] = useSession();

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
                <p>Ver Todos</p>
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
                {pacients.map((pacient) => {
                  return (
                    <li key={pacient.name}>
                      <div className={styles.avatar_user}>
                        <img src="/images/pacients.png" alt="" />
                        <div className={styles.avatar_title}>
                          <div><p>{pacient.name}</p></div>
                          <div className={styles.user_contact}><p>{pacient.contact}</p></div>
                        </div>
                      </div>
                      <div>
                        <p>{pacient.date}</p>
                      </div>
                      <div className={`${styles.user_status} ${styles[pacient.styles]}`}>
                        <p>{pacient.status}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <Userinfo />
        </div>
      </div>
    </div>
  );
}
