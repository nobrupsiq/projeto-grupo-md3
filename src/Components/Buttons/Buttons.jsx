import { Link } from 'react-router-dom';
import style from './Buttons.module.css'
function Buttons() {

   return (
      <div className={style.btnContainer}>
         <Link to={"/"} >
            <button>Adicionar filme</button>
         </Link>
         <Link to={"/"}>
            <button>Atualizar filme</button>
         </Link>
         <Link to={"/"}>
            <button >Remover filme</button>
         </Link>
      </div>
   );
}

export default Buttons;
