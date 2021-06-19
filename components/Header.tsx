import React, { useState } from 'react';
import styles from '../styles/header.module.scss'
import Link from 'next/link'
import { FiMenu as MenuIcon, FiX as CloseIcon, FiSearch as FiSearchIcon} from 'react-icons/fi'

import Input from './Input';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1>
              Olá,
              <br />
              Fulano!
          </h1>
          <MenuIcon onClick={handleOpenMenu} />
        </div>
        <Input placeholder="procurar" startIcon={<FiSearchIcon />}/>
          <div className={isMenuOpen? styles.sideMenuOpen : styles.sideMenuClosed}>
          {isMenuOpen && (
            <>
              <CloseIcon onClick={handleCloseMenu}/>

              <nav className={styles.nav}>
                <Link href="/home">Home</Link>
                <Link href="patients">Pacientes</Link>
                <Link href="">Escalas e índices</Link>
                <Link href="">Contribua conosco</Link>
              </nav>

              <strong>fisioPront</strong>
            </>
          )}

        </div>
        
      </header>
  );
}

export default Header;
