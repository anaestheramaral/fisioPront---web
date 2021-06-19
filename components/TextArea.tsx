import React, { useEffect, useRef } from 'react';
import styles from '../styles/Input.module.scss'

// import { Container } from './styles';
interface TextAreaProps {
  handleSearch?: () => any;
  placeholder?: string;
  startIcon?: React.ReactNode;
}

const Textarea: React.FC<TextAreaProps> = ({handleSearch, placeholder, startIcon}) => {
 
  return (
    <form onSubmit={handleSearch} className={styles.form} tabIndex={-1}>
      {startIcon}
      <textarea placeholder={placeholder} rows={10}/>
    </form>
  );
}

export default Textarea;
