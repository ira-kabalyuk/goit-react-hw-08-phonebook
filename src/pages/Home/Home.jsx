import React, { useState, useEffect } from "react";
import { requestTrending } from 'services/api';

import { STATUSES } from 'utils/constants';
import image  from 'images/book.png';

import { Section } from 'components/Section';


import styles from './Home.module.scss';


const Home = () => {
  
  return (
    <Section>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Welcome to the phone book!</h1>
          <p className={styles.subtitle}>Create, organize, manage your contacts</p>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.image} src={image} alt="img" />
        </div>        
      </div>
    </Section>
  );
};

export default Home;