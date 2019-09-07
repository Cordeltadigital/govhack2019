import React, { Component } from 'react';
import RouteCard from './RouteCard';
import {Row, Col} from 'react-bootstrap'

class RouteList extends Component {
  state = { routes: [] }
  componentDidMount() {
    this.setState({
      routes: this.props.routes
    })
  }
  render() { 

    return ( <div className="shadow-lg">
      <Row noGutters={true}>
      {
        this.state.routes.map( (route, i) => {
          return <Col xs={6} xl={3}><RouteCard key={i} route={route}></RouteCard></Col>
         } )
      }
      </Row>
    </div> );
  }
}
 
export default RouteList;