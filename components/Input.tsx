import React from 'react';
import styles from '../styles/Input.module.scss'
import {FiSearch as FiSearchIcon} from 'react-icons/fi';

// import { Container } from './styles';
interface InputProps {
  handleSearch?: () => any;
}
const Input: React.FC<InputProps> = ({handleSearch}) => {
  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <FiSearchIcon />
      <input placeholder="Procurar"/>
    </form>
  );
}

export default Input;
