/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import { PatientsContext } from "../../contexts/patients.context";
import styles from './Userinfo.module.scss';

const Userinfo: React.FC = () => {
  const { patients } = useContext(PatientsContext);
  return (
    <div className={styles.container}>
     <div className={styles.avatar_user}><img src="/images/user.png" alt="avatar" /></div>
     <div className={styles.title}><p>Dr. Lucas Dias</p></div>

     <div className={styles.cards}>
       <div className={styles.card}>
         <div className={styles.icon}><img src="/images/pacients.png" alt="avatar" /></div>
         <div className={styles.infos}>
           <div className={styles.info}><p>Total de pacientes</p></div>
           <div className={styles.number}><p>{patients.length}</p></div>
         </div>
       </div>
       <div className={styles.card}>
         <div className={styles.icon}><img src="/images/pacient-success.png" alt="avatar" /></div>
         <div className={styles.infos}>
           <div className={styles.info}><p>Pacientes em estado ótimo</p></div>
           <div className={styles.number}><p>50%</p></div>
         </div>
       </div>
       <div className={styles.card}>
         <div className={styles.icon}><img src="/images/pacient-regular.png" alt="avatar" /></div>
         <div className={styles.infos}>
           <div className={styles.info}><p>Pacientes em estado regular</p></div>
           <div className={styles.number}><p>25%</p></div>
         </div>
       </div>
       <div className={styles.card}>
         <div className={styles.icon}><img src="/images/pacient-warning.png" alt="avatar" /></div>
         <div className={styles.infos}>
           <div className={styles.info}><p>Pacientes em estado crítico</p></div>
           <div className={styles.number}><p>25%</p></div>
         </div>
       </div>
     </div>
    </div>
  );
}

export default Userinfo;
