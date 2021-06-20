import React, { ChangeEvent, useEffect, useRef } from 'react';
import styles from '../styles/Input.module.scss'

// import { Container } from './styles';
interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  placeholder: string;
  startIcon?: React.ReactNode;
  value: any;
}
const Input: React.FC<InputProps> = ({onChange, placeholder, startIcon, value}) => {

 
  return (
    <div className={styles.form} tabIndex={-1}>
      {startIcon}
      <input placeholder={placeholder} onChange={onChange} value={value}/>
    </div>
  );
}

export default Input;
