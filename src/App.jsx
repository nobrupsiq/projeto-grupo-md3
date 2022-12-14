import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Combos from './Components/Combos/Combos';
import Filmes from './Components/Filmes/Filmes';
import Home from './Components/Home/Home';
import Sessoes from './Components/Sessoes/Sessoes';
import Adicionar from './Telas/Adicionar'
import Adicionar3 from './Telas/Adicionar3';
import Atualizar from './Telas/Atualizar'
import Atualizar3 from './Telas/Atualizar3';
import Remover from './Telas/Remover'
import Remover3 from './Telas/Remover3';


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
            <Route path="/sessoes/adicionar" element={<Adicionar3 />} />
            <Route path="/sessoes/atualizar" element={<Atualizar3 />} />
            <Route path="/sessoes/remover" element={<Remover3 />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
