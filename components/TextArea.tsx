import React, { ChangeEvent, useEffect, useRef } from 'react';
import styles from '../styles/Input.module.scss'

// import { Container } from './styles';
interface TextAreaProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => any;

  placeholder?: string;
  startIcon?: React.ReactNode;
  value?: any;
}

const Textarea: React.FC<TextAreaProps> = ({onChange, placeholder, startIcon, value}) => {
 
  return (
    <div  className={styles.form} tabIndex={-1}>
      {startIcon}
      <textarea placeholder={placeholder} rows={10} onChange={onChange} value={value}/>
    </div>
  );
}

export default Textarea;
