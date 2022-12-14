import Card from 'react-bootstrap/Card';

function Item2({ imagem, nome, descricao }) {
    return (
        <Card>
            <Card.Img variant="top" src={imagem} />
            <Card.Body >
                <Card.Title >{nome}</Card.Title>
                <Card.Text>
                    {descricao.slice(0, 100)}...
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default Item2;