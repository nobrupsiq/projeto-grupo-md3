import React, { useEffect, useState } from 'react';
import Item3 from '../Item/Item3'
import "./Items3.css"

function Items3({ lista }) {

   let [lista2, setLista2] = useState([])

   useEffect(() => {
      setLista2(lista);
   }, [lista])

   return (
      <div className='Items3'>
         {lista2.map((elemento, indice) => {
            return <Item3 key={indice} {...elemento} />
         })}
      </div>
   );
}

export default Items3;