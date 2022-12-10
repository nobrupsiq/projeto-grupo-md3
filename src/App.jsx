import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Filmes from './Components/Filmes/Filmes';
import Combos from './Components/Combos/Combos';
import Sessoes from './Components/Sessoes/Sessoes';
import Home from './Components/Home/Home';
import Slider from './Components/Slider/Slider';
import Items from './Components/Items/Items';
import Buttons from './Components/Buttons/Buttons';
import axios from 'axios';
import Bar from './Components/Filmes/Filmes';

function App() {
   let [lista, setLista] = useState([]);

   useEffect(() => {
      let url = 'https://nobrupsiq.github.io/projeto-individual-resilia-MD3/db.json';

      const getPosts = async () => {
         const { data: res } = await axios.get(url);
         setLista(res.filmes);
      };
      getPosts();
   }, []);

   return (
      <div>
         <BrowserRouter>
            <Header />
            <Slider />
            <Bar />
            <Items lista={lista} />
            <Buttons />
            <Routes>
               <Route path="/Home" element={<Home />} />
               <Route path="/filmes" element={<Filmes />} />
               <Route path="/combos" element={<Combos />} />
               <Route path="/sessoes" element={<Sessoes />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;
