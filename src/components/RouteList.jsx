import React, { Component } from 'react';
import RouteCard from './RouteCard';

class RouteList extends Component {
  state = { routes: [] }
  componentDidMount() {
    this.setState({
      routes: this.props.routes
    },function (){
    console.log(this.state.routes)

    })
  }
  render() { 
    return ( <div>
      {
        this.state.routes.map( route => <RouteCard key={route.route_id} route={route}></RouteCard>)
      }
    </div> );
  }
}
 
export default RouteList;