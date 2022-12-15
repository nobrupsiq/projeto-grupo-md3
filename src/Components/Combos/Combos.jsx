import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './combos.module.css'
import Items2 from '../Items/items2';
import axios from 'axios';
import Buttons2 from '../Buttons/Buttons2';


function Combos() {
   let [lista, setLista] = useState([])
   useEffect(() => {
      let url = "http://localhost:3000/combos"

      const getPosts = async () => {
         const { data: res } = await axios.get(url)
         setLista(res)
      }
      getPosts()
   }, []);

   return (
      <div>
         <Header />
         <section className={styles.capaCombo}>
            <h1>COMBOS</h1>
         </section>
         <Items2 lista={lista} />
         <Buttons2 />
         <Footer />
      </div >
   )
}

export default Combos;
