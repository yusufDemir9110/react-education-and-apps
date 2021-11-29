
import React from 'react'
import { Container, Row , Col} from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs='4'><CategoryList /></Col>
          <Col xs='8'><ProductList /></Col>
        </Row>

      </Container>


    </div>
  );
}

export default App;
