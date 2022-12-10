import React from 'react';

function Filmes() {
   return <h1>filmes</h1>

}

function Bar() {
   const bar = {
      display: 'flex',
      justifyContent: 'center',
      background: '#6639DA',
      color: '#fff',
      padding: '10px',
   }
   return (
      <div>
         <h1 style={bar}>Filmes</h1>
      </div>
   )
}

export default Bar;
