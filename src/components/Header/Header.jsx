import React from "react";
import { useSelector } from "react-redux";
import { selectAuthisLoggedIn } from "../../redux/auth/authSlice.selectors";

import { Section } from "components/Section";
import { UserMenu } from "components/UserMenu";
import { Navigation } from "components/Navigation";

import styles from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(selectAuthisLoggedIn);

  return (   
    <div className={styles.header}>
      <Section>
        <div className={styles.wrapper}>
          <Navigation />
          {isLoggedIn && <UserMenu />}
        </div>        
      </Section>
    </div>
  );
};

export { Header };
