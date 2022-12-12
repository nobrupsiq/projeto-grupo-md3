import { Link } from 'react-router-dom';
import style from './Buttons.module.css'

function Buttons() {

   return (
      <div className={style.btnContainer}>
         <Link to={"adicionar"} >
            <button>Adicionar filme</button>
         </Link>
         <Link to={"atualizar"}>
            <button>Atualizar filme</button>
         </Link>
         <Link to={"remover"}>
            <button >Remover filme</button>
         </Link>
      </div>
   );
}

export default Buttons;
