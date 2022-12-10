import React, { useEffect, useState } from 'react';
import Item from '../Item/Item'

import "./Items.css"

function Items({lista}) {

   let [lista2, setLista2] = useState([])

   useEffect(()=>{
      setLista2(lista);
   },[lista])

   return (
      <div className='Items'>
         {lista2.map((e,i)=>{
            return <Item key={i} {...e} />
         })}
      </div>
   );
}

export default Items;
