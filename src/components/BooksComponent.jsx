import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../data/fantasy.json';

function CardBooks() {
  return (
    <Container className='mt-4'>
        <Row>
            {books.map((libro) => (
                <Col md={3} className='mt-4'>
                    <Card style={{ width: '100%', height: '45rem' }}>
                    <Card.Img variant="top" src={libro.img} />
                    <Card.Body>
                      <Card.Title>{libro.title}</Card.Title>
                      <Card.Text>
                        Category: {libro.category}
                      </Card.Text>
                      <Card.Text>
                        Price: {libro.price}
                      </Card.Text>
                      <Button variant="secondary">Compra</Button>
                    </Card.Body>
                  </Card>
                </Col>
            ))}
        </Row>
    </Container>
  );
}

export default CardBooks;