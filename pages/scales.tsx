import React, { useContext } from "react";
import { Login } from "../components/Login";
import { HeaderMenu } from "../components";
import { PatientsContext } from "../contexts/patients.context";
import { useSession, signOut } from "next-auth/client";
import styles from "../styles/scales.module.scss";

export default function Scales() {
  const [session] = useSession();
  const { patients } = useContext(PatientsContext);

  return !session ? (
    <Login />
  ) : (
    <div className={styles.main}>
      <div className={styles.content}>
        <HeaderMenu title="Escalas e Indices" />
        <div className={styles.box}>
          <div className={styles.user_list}>
            <div className={styles.header_actions}>
              <div className={styles.title}>
                <p>Todas as Escalas</p>
              </div>
            </div>

            <div className={styles.list_users}>
              <ul>
                <div className={styles.notPatients}>
                  <p>Não existe escalas cadastrados no momento</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
