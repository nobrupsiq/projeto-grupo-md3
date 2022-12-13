import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Combos from './Components/Combos/Combos';
import Filmes from './Components/Filmes/Filmes';
import Home from './Components/Home/Home';
import Sessoes from './Components/Sessoes/Sessoes';
import Adicionar from './Telas/Adicionar'
import AdicionarSessao from './Telas/AdicionarSessao';
import Atualizar from './Telas/Atualizar'
import AtualizarSessao from './Telas/AtualizarSessao';
import Remover from './Telas/Remover'
import RemoverSessao from './Telas/RemoverSessao';


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
            <Route path="/sessoes/adicionar" element={<AdicionarSessao />} />
            <Route path="/sessoes/atualizar" element={<AtualizarSessao />} />
            <Route path="/sessoes/remover" element={<RemoverSessao />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
