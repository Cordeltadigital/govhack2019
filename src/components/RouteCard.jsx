import React, { Component } from 'react';

class RouteCard extends Component {
  state = {  }
  render() { 
    return <div>
      {this.props.route}
    </div>;
  }
}
 
export default RouteCard;