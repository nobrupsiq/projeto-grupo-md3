import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './combos.module.css'

function Combos() {
   return (
      <div>
         <Header />
         <section className={styles.capaCombo}>
            <h1>COMBOS</h1>
         </section>

         <Footer />
      </div>
   )
}

export default Combos;
