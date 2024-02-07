import React from 'react';
import styles from './Input.module.scss';

const Input = ({text, label, ...restProps}) => {
  return (
    <div className={styles.block}>
      <label className={styles.label}>
        <span className={styles.text}>{label}</span>
        <input className={styles.input} {...restProps}/>
      </label>
    </div>
  );
};

export { Input };