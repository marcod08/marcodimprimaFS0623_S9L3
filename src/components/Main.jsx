import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../data/fantasy.json';
import './Main.css'

class CardBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;

    const filteredBooks = books.filter((libro) =>
      libro.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <Container className='mt-4'>
        <Row>
          <Col className='mb-4'>
            <input
              type="text"
              placeholder="Cerca..."
              value={searchTerm}
              onChange={this.handleSearchChange}
            />
          </Col>
        </Row>

        <Row>
          {filteredBooks.map((libro) => (
            <Col md={3} className='mt-4' key={libro.id}>
              <Card class='card'>
                <Card.Img variant="top" src={libro.img} class='cardImg' />
                <Card.Body>
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text>
                    Category: {libro.category}
                  </Card.Text>
                  <Card.Text>
                    Price: {libro.price}
                  </Card.Text>
                  <Button id='btnBuy' variant="secondary">Compra</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CardBooks;