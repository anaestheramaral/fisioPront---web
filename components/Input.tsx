import React, { ChangeEvent, useEffect, useRef } from 'react';
import styles from '../styles/Input.module.scss'

// import { Container } from './styles';
interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  placeholder: string;
  startIcon?: React.ReactNode;
  name: string;
  label?: string;
}
const Input: React.FC<InputProps> = ({onChange, placeholder, startIcon, name, label}) => {

 
  return (
    <div style={{ width: '100%'}}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input 
        placeholder={placeholder} 
        onChange={onChange} 
        name={name} 
        className={styles.form}
      />
    </div>
  );
}

export default Input;
