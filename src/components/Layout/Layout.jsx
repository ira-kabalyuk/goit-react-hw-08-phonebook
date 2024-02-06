import React from 'react';
import { Header } from '../Header';

import styles from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export { Layout };