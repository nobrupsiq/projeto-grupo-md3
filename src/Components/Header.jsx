import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'


const Header = () => {
   return (
      <header className={styles.header}>
         <nav className={`${styles.nav} container`}>
            <div>
               <Link className={styles.logo} to="/" aria-label='Home'>Cinemix</Link>
            </div>
            <div>
               <Link className={styles.navegator} to={"/filmes"}>Filmes</Link>
               <Link className={styles.navegator} to={"/combos"}>Combos</Link>
               <Link className={styles.navegator} to={"/sessoes"}>Sessoes</Link>
            </div>
         </nav>
      </header>
   );
};

export default Header;
