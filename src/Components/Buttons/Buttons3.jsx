import { Link } from 'react-router-dom';
import style from './Buttons3.module.css'

function Buttons3() {

   return (
      <div className={style.btnContainer}>
         <Link to={"adicionar"} >
            <button>Adicionar sessão</button>
         </Link>
         <Link to={"atualizar"}>
            <button>Atualizar sessão</button>
         </Link>
         <Link to={"remover"}>
            <button >Remover sessão</button>
         </Link>
      </div>
   );
}

export default Buttons3;
