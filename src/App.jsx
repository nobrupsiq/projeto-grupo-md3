import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Filmes from './Components/Filmes/Filmes';
import Combos from './Components/Combos/Combos';
import Sessoes from './Components/Sessoes/Sessoes';

function App() {
   return (
      <div>
         <BrowserRouter>
            <Header />
            <Routes>
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
