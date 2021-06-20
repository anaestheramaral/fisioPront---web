import React, { ChangeEvent } from 'react';
import styles from '../styles/Input.module.scss'

// import { Container } from './styles';
interface InputProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => any;
  name: string;
  label?: string;
  rows: number;
}
const Input: React.FC<InputProps> = ({onChange, name, label, rows}) => {

 
  return (
    <div style={{ width: '100%'}}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <textarea rows={rows} onChange={onChange} name={name} className={styles.form} style={{ width: '100%'}}/>
    </div>
  );
}

export default Input;
