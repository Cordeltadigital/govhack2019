import React, { Component } from 'react';
class Badge extends Component {
  state = {bird: ''}
  componentDidMount(){
    let birds = ['dodo', 'duck', 'pigeon','parrot', 'eagle']
    let index = Math.round(this.props.rating) -1
    if(this.props.rating){
      this.setState({bird: birds[index] })
    }
  }

  render() { 
    if(!this.state.bird || this.state.bird.length === 0){
      return null
    }
    return <div className="badge">
      <img src={require('../img/'+this.state.bird+'.svg')} alt={this.props.bird} />
    </div>;
  }
}
 
export default Badge;