import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Item({ imagem, titulo, descricao, trailer }) {

   return (
      <Card data-aos="fade-up" data-aos-duration='1000' data-aos-delay="120">
         <Card.Img variant="top" src={imagem} />
         <Card.Body >
            <Card.Title >{titulo}</Card.Title>
            <Card.Text>
               {descricao.slice(0, 100)}...
            </Card.Text>
            <Card.Link style={{ paddingTop: 20, display: 'inline-block' }} target='_blank' href={trailer}>Trailer</Card.Link>
         </Card.Body>
      </Card>

   );
}
AOS.init();

export default Item;
