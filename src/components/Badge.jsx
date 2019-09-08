import React, { Component } from 'react';
import dodo from '../img/dodo.svg'
import duck from '../img/duck.svg'
import pigeon from '../img/pigeon.svg'
import parrot from '../img/parrot.svg'
import eagle from '../img/eagle.svg'
class Badge extends Component {
  
  birds = [dodo, duck, pigeon, parrot, eagle]
  componentDidMount(){
    console.log(dodo)
  }

  render() { 
    if(!this.props.rating){
      return null
    }
    
    let index = Math.round(this.props.rating) -1
    console.log(this.birds[index])
    return <div className="badge">
      <img src={this.birds[index]} alt={this.props.bird} />
    </div>;
  }
}
 
export default Badge;