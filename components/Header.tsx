import React from 'react';
import styles from '../styles/header.module.scss'
import { FiMenu as FiMenuIcon} from 'react-icons/fi'
import Input from './Input';
const Header: React.FC = () => {
  return (
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1>
              Olá,
              <br />
              Fulano!
          </h1>
          <FiMenuIcon />
        </div>
        <Input />
      </header>
  );
}

export default Header;
