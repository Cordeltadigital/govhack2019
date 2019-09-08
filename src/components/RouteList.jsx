import React, { Component } from 'react';
import RouteCard from './RouteCard';
import {Row, Col} from 'react-bootstrap'

class RouteList extends Component {
  render() { 

    return ( <div className="shadow-lg">
      <Row noGutters={true}>
      {
        this.props.routes.map( (route, i) => {
          return <Col xs={6} xl={3}  key={i}><RouteCard key={'card'+i} route={route}></RouteCard></Col>
         } )
      }
      </Row>
    </div> );
  }
}
 
export default RouteList;