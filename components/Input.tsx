import React, { useEffect, useRef } from 'react';
import styles from '../styles/Input.module.scss'

// import { Container } from './styles';
interface InputProps {
  handleSearch?: () => any;
  placeholder: string;
  startIcon?: React.ReactNode;
}
const Input: React.FC<InputProps> = ({handleSearch, placeholder, startIcon}) => {

 
  return (
    <form onSubmit={handleSearch} className={styles.form} tabIndex={-1}>
      {startIcon}
      <input placeholder={placeholder}/>
    </form>
  );
}

export default Input;
