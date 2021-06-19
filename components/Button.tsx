import React, { ButtonHTMLAttributes} from 'react';
import styles from '../styles/Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  spaced?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, spaced, ...rest}) => {
  return (
    <button className={styles.button} style={{ justifyContent: spaced ? 'space-between' :  'center'}} {...rest}>
      {children}
    </button>
  );
}

export default Button;
