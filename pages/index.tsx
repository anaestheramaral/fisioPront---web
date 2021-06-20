import { Login } from "../components/Login";
import { Sidebar, HeaderMenu, Userinfo } from "../components";
import { useSession, signOut } from "next-auth/client";
import styles from "../styles/Index.module.scss";

import React from "react";

export default function Home() {
  const [session] = useSession();

  return !session ? (
    <Login />
  ) : (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.content}>
        <HeaderMenu />
        <div>
          <div><p>conteudo</p></div>
          <Userinfo />
        </div>
      </div>
    </div>
  );
}
