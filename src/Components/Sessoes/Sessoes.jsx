import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './sessoes.module.css'

function Sessoes() {
   return (
      <div>
         <Header />
         <section className={styles.capaSessoes}>
            <h1>SESSOES</h1>
         </section>
         <Footer />
      </div>
   )

}

export default Sessoes;
