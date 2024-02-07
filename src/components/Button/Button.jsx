import React from 'react';
import styles from './Button.module.scss';

const Button = ({text, type='button', ...restProps}) => {
  return (
    <button type={type} className={styles.block} {...restProps}>{text}</button>
  );
};

export { Button };