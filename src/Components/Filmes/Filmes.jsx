import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Items from "../Items/Items";
import axios from "axios";
import Buttons from "../Buttons/Buttons";

function Filmes() {
  let [lista, setLista] = useState([]);

  useEffect(() => {

    // let url = 'https://nobrupsiq.github.io/projeto-individual-resilia-MD3/db.json';
    let url = "http://localhost:3000/filmes";

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
      <section>
        <h1 className="capa-filmes">FILMES</h1>
        <Items lista={lista} />
      </section>
      <div data-aos="zoom-in" data-aos-duration='1000' data-aos-delay="50">
        <Buttons />
        <Footer />
      </div>
    </div>
  );
}
export default Filmes;
