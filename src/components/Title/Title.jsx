import React from 'react';
import styles from './Title.module.scss';

const Title = ({text}) => {
  return (
    <h2 className={styles.title}>{text}</h2>
  );
};

export { Title };