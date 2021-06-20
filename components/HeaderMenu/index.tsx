import React from 'react';
import Button from '../Button';
import styles from './headerMenu.module.scss';
import {FiLogOut} from 'react-icons/fi';
import { signOut } from 'next-auth/client';
import Link from 'next/link';
interface HeaderMenuProps {
  title: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({title}) => {
  return (
    <div className={styles.container}>
      <div><strong>{title}</strong></div>
      <div className={styles.buttonsWrapper}>
        <Link href="/newPatient" passHref>
          <Button>+ Novo Paciente</Button>
        </Link>
        
        <button onClick={() => signOut()} className={styles.logout}> <FiLogOut />Sair</button>
      </div>
    </div>
  );
}

export default HeaderMenu;
