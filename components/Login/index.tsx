/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";
// import Image from 'next/image'
import { signIn } from "next-auth/client";
// import Logo from '../../public/images'
async function handleLogin() {
  await signIn("google");
}

export function Login() {
  return (
    <>
      <Head>
        <title>FisioPront | Login</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.sideHeader}>
          {/* <Image src="/images/logoColored.png" alt="logo" /> */}
          <img src="/images/logo-home.png" alt="logo" />
          <h1>fisioPront</h1>
          <h2>
            Seu prontuário de bolso,
            <br />
            feito para te ajudar!
          </h2>
        </div>

        <div className={styles.register}>
          <img src="/images/logo-long.png" alt="logo" />
          <h2>
            Já imaginou poder
            <br />
            consultar seus pacientes
            <br />
            na palma da sua mão?
          </h2>
          <span>Acesse agora e descubra!</span>
          <button onClick={handleLogin}>
            <FcGoogle />
            Entrar com o Google
          </button>
        </div>
      </div>
    </>
  );
}
