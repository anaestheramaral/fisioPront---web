/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";

import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const [session] = useSession()

  if (session){
  return  (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/logo-dashboard.png" alt="logo" />
      </div>
      <div className={styles.menu}>
        <ul>
          <Link href="/" passHref>
            <li className={styles.active}>
                Home
            </li>
          </Link>
          <li>Pacientes</li>
          <li>Escalas e Indices</li>
          <li>Contribua Conosco</li>
        </ul>
      </div>
    </div>
  );}
  return <div></div>
};

export default Sidebar;
