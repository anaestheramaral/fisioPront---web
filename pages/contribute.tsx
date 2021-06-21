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
    name: "Ana Esther Silva Amaral",
    category: "Frontend",
    github: "https://github.com/anaestheramaral",
    linkedin: "https://www.linkedin.com/in/ana-esther-amaral/",
    email: "anaesthersamaral@gmail.com",
    discord: "anaestheramaral#6053",
  },
  {
    name: "Lucas Dias Correia",
    category: "UX Designer",
    github: "",
    linkedin: "https://www.linkedin.com/in/lucasd9/",
    email: "9lucasdias@gmail.com",
    discord: "lucasdesigner#4066",
  },
  {
    name: "João Vitor Martins Melo",
    category: "Frontend",
    github: "https://github.com/pmenta",
    linkedin:
      "https://www.linkedin.com/in/jo%C3%A3o-vitor-martins-melo-044562207/",
    email: "joaovitor23melo@hotmail.com",
    discord: "pmenta#3350",
  },
  {
    name: "Gabriel Thomaz Graciani",
    category: "Frontend",
    github: "https://github.com/gabrielgraciani",
    linkedin: "https://www.linkedin.com/in/gabriel-thomaz-graciani-98400b166/",
    email: "gabrieltgraciani@hotmail.com",
    discord: "matiola#0451",
  },
  {
    name: "Thiago Silva Galvão",
    category: "Frontend",
    github: "https://github.com/Galvaothiago",
    linkedin: "https://www.linkedin.com/in/thiago-galvao-155062208/",
    email: "thiagosilva128@gmail.com",
    discord: "thiagogalvao#6503",
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
