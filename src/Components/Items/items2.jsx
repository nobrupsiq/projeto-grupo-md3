import React, { useEffect, useState } from 'react';
import Item2 from '../Item/item2';
import "./items2.css"

function Items2({ lista }) {

    let [lista2, setLista2] = useState([])

    useEffect(() => {
        setLista2(lista);
    }, [lista])

    return (
        <div className='Items2'>
            {lista2.map((elemento, indice) => {
                return <Item2 key={indice} {...elemento} />
            })}
        </div>
    );
}

export default Items2;