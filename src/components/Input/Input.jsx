import React from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

const Input = ({label, hasError, htmlFor='', ...restProps}) => {
  return (
    <div className={styles.block}>
      <label htmlFor={htmlFor} className={styles.label}>
        <span className={styles.text}>{label}</span>
        <input className={cx(styles.input, hasError && styles.error)} {...restProps} />
        {hasError && <span className={styles.errorMessage}>incorrect data</span>}
      </label>
    </div>
  );
};

export { Input };