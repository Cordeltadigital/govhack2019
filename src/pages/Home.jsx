import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import {Container, Row, Col} from 'react-bootstrap'
import RouteList from '../components/RouteList';
class Home extends Component {
  state = {  }
  render() { 
    return ( <div>
      <h1 className="text-center">A little bird told me <span className="worst">bus 123</span> is the worst performing at this time.</h1>

      <Container>
        <Row className="mt-5">
          <Col>
            <SearchBar />
          </Col>
        </Row>


        <Row className="mt-5">
          <Col>
            <h2>Worst Routes</h2>
            <RouteList routes={[12,2,202]} />
          </Col>
        </Row>
      </Container>
    </div> );
  }
}
 
export default Home;