import React, { Component } from 'react';
import Badge from '../components/Badge'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
class RouteCard extends Component {
  state = {  }
  componentDidMount(){
  }
  
  render() { 
    let rating = Math.round(this.props.route.rating)
    return <Link className="route-card" to={"/route/" + this.props.route.route_id}>
    <Container fluid>
    <Row className="aling-items-center">
      <Col xs={4}>
        <Badge rating={rating}></Badge> 
      </Col>
      <Col xs={8} className=" pl-3">
        <div className="route-type">Bus Route</div>
        <div className={"route-id color-rating r-" + rating}>{this.props.route.route_short_name}</div>
      </Col>
    </Row>
    </Container>
    </Link>;
  }
}
 
export default RouteCard;