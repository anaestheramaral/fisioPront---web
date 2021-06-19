import React, { ButtonHTMLAttributes} from 'react';
import styles from '../styles/LoadMore.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  // spaced?: boolean;
}
const LoadMoreButton: React.FC<ButtonProps> = ({ ...rest}) => {
  return (
    <button className={styles.button} {...rest}>
      +
    </button>
  );
}

export default LoadMoreButton;
