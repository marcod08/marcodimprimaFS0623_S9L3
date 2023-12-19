import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FooterComponent.css';


function Footer() {
  return (
    <Container className='mt-4' id="footer">
      <Row>
        <Col style={{ fontSize: '1.5em' }}>Libreria Epica &copy; 2023</Col>
      </Row>
    </Container>
  );
}

export default Footer;