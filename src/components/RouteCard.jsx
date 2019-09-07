import React, { Component } from 'react';
import Badge from '../components/Badge'
import {Container, Row, Col} from 'react-bootstrap'

class RouteCard extends Component {
  state = {  }
  componentDidMount(){
    console.log(this.props)
  }
  
  render() { 
    let rating = Math.round(this.props.route.rating)
    return <Container fluid>
    <Row className="route-card aling-items-center">
      <Col xs={4}>
        <Badge rating={rating}></Badge> 
      </Col>
      <Col xs={8} className=" pl-3">
        <div className="route-type">Bus Route</div>
        <div className={"route-id color-rating r-" + rating}>{this.props.route.route_short_name}</div>
      </Col>
    </Row>
    </Container>;
  }
}
 
export default RouteCard;