import React, { useEffect, useState } from 'react';
import ItemSessao from '../Item/ItemSessao'
import "./Items.css"

function ItemsSessao({ lista }) {

   let [lista2, setLista2] = useState([])

   useEffect(() => {
      setLista2(lista);
   }, [lista])

   return (
      <div className='ItemsSessao'>
         {lista2.map((elemento, indice) => {
            return <ItemSessao key={indice} {...elemento} />
         })}
      </div>
   );
}

export default ItemsSessao;