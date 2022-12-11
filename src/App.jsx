import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Combos from './Components/Combos/Combos';
import Filmes from './Components/Filmes/Filmes';
import Home from './Components/Home/Home';
import Sessoes from './Components/Sessoes/Sessoes';

function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="filmes" element={<Filmes />} />
            <Route path="combos" element={<Combos />} />
            <Route path="sessoes" element={<Sessoes />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
