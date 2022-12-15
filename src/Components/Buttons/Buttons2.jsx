import { Link } from 'react-router-dom';
import style from './Buttons2.module.css'

function Buttons2() {

   return (
      <div className={style.btnContainer}>
         <Link to={"adicionar"} >
            <button>Adicionar Combos</button>
         </Link>
         <Link to={"atualizar"}>
            <button>Atualizar Combos</button>
         </Link>
         <Link to={"remover"}>
            <button >Remover Combos</button>
         </Link>
      </div>
   );
}

export default Buttons2;
