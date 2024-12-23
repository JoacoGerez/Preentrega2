import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function Item({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button variant="primary" as={Link} to={'/item/' + item.id}>
          ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
