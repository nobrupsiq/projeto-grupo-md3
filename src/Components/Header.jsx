import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         Header
         <nav>
            <Link to="/filmes">filmes</Link>
            <Link to="/combos">combos</Link>
            <Link to="/sessoes">sessões</Link>
         </nav>
      </div>
   );
};

export default Header;
