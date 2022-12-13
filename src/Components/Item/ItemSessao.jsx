import Card from 'react-bootstrap/Card';

function ItemSessao({ filme_id, data, horario, auditorio, imagem_tipo }) {
   return (
      <Card>
         <Card.Img variant="top" src="" />
         <Card.Body >
            <Card.Title >{filme_id}</Card.Title>
            <Card.Text>
               <p>{data}</p>

            </Card.Text>

            <Card.Link style={{ paddingTop: 20, display: 'inline-block' }} target='_blank' href="">Comprar</Card.Link>

         </Card.Body>
      </Card>
   );
}

export default ItemSessao;