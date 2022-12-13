import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './sessoes.module.css'
import axios from "axios";
import ItemsSessao from '../Items/ItemsSessao';
import ButtonsSessao from '../Buttons/ButtonsSessao';


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
            <h1>SESSOES</h1>
            <ItemsSessao lista={lista} />
            <ButtonsSessao />
         </section>
         <Footer />
      </div>
   )

}

export default Sessoes;
