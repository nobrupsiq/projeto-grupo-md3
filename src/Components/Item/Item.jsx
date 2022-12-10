import Card from 'react-bootstrap/Card';

function Item({imagem, titulo, descricao, trailer}) {
   return (
      <Card>
         <Card.Img variant="top" src={imagem} />
         <Card.Body>
         <Card.Title>{titulo}</Card.Title>
         <Card.Text>
            {descricao.slice(0,100)}...
         </Card.Text>
         
         <Card.Link href={trailer}>Trailer</Card.Link>
         
         </Card.Body>
      </Card>
   );
}

export default Item;
