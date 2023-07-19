import {Row, Col, Container} from 'react-bootstrap'


export default function FooterComponent () {
    return (
        <footer>
          <Container fluid>
            <Row>
              <Col className="text-white bg-dark py-4 text-center">Copyright &copy; {(new Date().getFullYear())} Best Online Shop</Col>
            </Row>
          </Container>
        </footer>
    )
}