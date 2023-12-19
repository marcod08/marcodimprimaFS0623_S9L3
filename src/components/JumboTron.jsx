import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './JumboTron.css'

function JumboTron() {
  return (
    <Container className='mt-4' id='jumboTron'>
      <Row>
        <Col style={{ fontSize: '1.5em' }}>Libreria Epica</Col>
      </Row>
      <Row>
        <Col style={{ fontSize: '1.2em' }}>tanti libri epici</Col>
      </Row>
    </Container>
  );
}

export default JumboTron;