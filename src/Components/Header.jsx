import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header className="d-flex p-5 flex-wrap justify-content-center py-3  bg-purple t-white">

         <div href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

            <span className="fs-4"><Link className="nav-link t-white hover:t-orange" to="/home">Cinemix</Link></span>
         </div>

         <ul className="nav nav-pills ">
            <li className="nav-item"><Link className="nav-link t-white hover:t-orange" to="/filmes">Filmes</Link></li>
            <li className="nav-item"><Link className="nav-link t-white hover:t-orange" to="/combos">Combos</Link></li>
            <li className="nav-item"><Link className="nav-link t-white hover:t-orange" to="/sessoes">Sessões</Link></li>
         </ul>
      </header>
   );
};

export default Header;
