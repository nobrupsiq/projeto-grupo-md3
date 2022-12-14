import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './sessoes.module.css'
import axios from "axios";
import Items3 from '../Items/Items3';
import Buttons3 from '../Buttons/Buttons3';


function Sessoes() {
   let [lista, setLista] = useState([]);

  useEffect(() => {
    // let url = 'https://nobrupsiq.github.io/projeto-individual-resilia-MD3/db.json';
    let url = "http://localhost:3000/sessoes";

    const getPosts = async () => {
      const { data: res } = await axios.get(url);
      // setLista(res.filmes);
      setLista(res);
    };
    getPosts();
  }, []);

   return (
      <div>
         <Header />
         <section className={styles.capaSessoes}>
            <h1>SESSÕES</h1>
         </section>
         <div>
            <Items3 lista={lista} />
         </div>
            <Buttons3 />
         <Footer />
      </div>
   )

}

export default Sessoes;
