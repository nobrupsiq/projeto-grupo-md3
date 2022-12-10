import Button from 'react-bootstrap/Button';

function Buttons() {
   const styleb = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      gap: '280px',
      border: '1px solid #000',
      borderRight: 'none',
      padding: '16px'
   }
   return (
      <div style={styleb}>
         <Button variant="warning" size='lg'>Adicionar filme</Button>{' '}
         <Button variant="warning" size='lg'>Atualizar filme</Button>{' '}
         <Button variant="warning" size='lg'>Remover filme</Button>{' '}
      </div>
   );
}

export default Buttons;
