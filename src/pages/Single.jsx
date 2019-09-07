import React, { Component } from 'react';
class Single extends Component {
  state = {  }
  render() { 
    let id = this.props.match.params.id
    return ( <div>
      <h1>Single route page {id} </h1>
    </div> );
  }
}
 
export default Single;