import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Combos from './Components/Combos/Combos';
import Filmes from './Components/Filmes/Filmes';
import Home from './Components/Home/Home';
import Sessoes from './Components/Sessoes/Sessoes';
import Adicionar from './Telas/Adicionar'
import Atualizar from './Telas/Atualizar'
import Remover from './Telas/Remover'


function App() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="filmes/*" element={<Filmes />} />
            <Route path="combos/*" element={<Combos />} />
            <Route path="sessoes/*" element={<Sessoes />} />
            <Route path="/filmes/adicionar" element={<Adicionar />} />
            <Route path="/filmes/atualizar" element={<Atualizar />} />
            <Route path="/filmes/remover" element={<Remover />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
