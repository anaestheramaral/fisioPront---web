import React from "react";
import { useSession, signOut } from "next-auth/client";
import { HeaderMenu, Userinfo } from "../components";
import { Login } from "../components/Login";
import styles from "../styles/contribute.module.scss";

const users = [
  {
    name: "Emerson Garrido",
    category: "FullStack",
    github: "https://github.com/EmersonGarrido",
    linkedin: "https://www.linkedin.com/in/emersongarrido/",
    email: "suportegarrido@gmail.com",
    discord: "emersongarrido#0522",
  },
  {
    name: "Emerson Garrido",
    category: "FullStack",
    github: "https://github.com/EmersonGarrido",
    linkedin: "https://www.linkedin.com/in/emersongarrido/",
    email: "suportegarrido@gmail.com",
    discord: "emersongarrido#0522",
  },
  {
    name: "Emerson Garrido",
    category: "FullStack",
    github: "https://github.com/EmersonGarrido",
    linkedin: "https://www.linkedin.com/in/emersongarrido/",
    email: "suportegarrido@gmail.com",
    discord: "emersongarrido#0522",
  },
  {
    name: "Emerson Garrido",
    category: "FullStack",
    github: "https://github.com/EmersonGarrido",
    linkedin: "https://www.linkedin.com/in/emersongarrido/",
    email: "suportegarrido@gmail.com",
    discord: "emersongarrido#0522",
  },
  {
    name: "Emerson Garrido",
    category: "FullStack",
    github: "https://github.com/EmersonGarrido",
    linkedin: "https://www.linkedin.com/in/emersongarrido/",
    email: "suportegarrido@gmail.com",
    discord: "emersongarrido#0522",
  },
  {
    name: "Emerson Garrido",
    category: "FullStack",
    github: "https://github.com/EmersonGarrido",
    linkedin: "https://www.linkedin.com/in/emersongarrido/",
    email: "suportegarrido@gmail.com",
    discord: "emersongarrido#0522",
  },
];

const pages: React.FC = () => {
  const [session] = useSession();

  if (session) {
    return (
      <div className={styles.main}>
        <div className={styles.content}>
          <HeaderMenu title="Contribua Conosco" />
          <div className={styles.box}>
            <div>
              <div className={styles.titlePage}>
                <p>Conheça nosso trabalho</p>
              </div>
              <ul className={styles.cards}>
                {users.map((user) => {
                  return (
                    <li className={styles.card}>
                      <div className={styles.title}>
                        <p>{user.name}</p>
                      </div>
                      <div className={styles.category}>
                        <p>{user.category}</p>
                      </div>
                      <div className={styles.info}>
                        <p>GitHub</p>
                        <a target="_blank" href={user.github}>
                          Acessar
                        </a>
                      </div>
                      <div className={styles.info}>
                        <p>Linkedin </p>
                        <a target="_blank" href={user.linkedin}>
                          Acessar
                        </a>
                      </div>
                      <div className={styles.info}>
                        <p>E-mail </p>
                        <a target="_blank" href={`mailto:${user.email}`}>
                          Enviar Email
                        </a>
                      </div>
                      <div className={styles.info}>
                        <p>Discord </p>
                        <a href="#">{user.discord}</a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Login />;
};

export default pages;
