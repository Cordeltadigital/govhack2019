import React, { Component } from 'react';
import {FormControl, InputGroup, Button} from 'react-bootstrap'
class SearchBar extends Component {

  state = { routeInput: '', suggestions:[] }

  handleInput(e) {
    let input = e.target.value;
    console.log({input})
    let suggestions = this.props.routes.filter( item => item.route_short_name.includes(input))
    suggestions = suggestions.slice(0, 3)
    this.setState({routeInput: input, suggestions})
  }
  handleClick(){
    this.goToRoute(this.state.routeInput)
  }
  goToRoute(id) {
    window.location.href = '/route/'+id
  }
  render() { 
    return ( <div className="search-bar">
       <InputGroup className="mb-3">
    <FormControl size="lg"
    type="saerch" placeholder="Search your route and see how it performs"
    onInput={e=>this.handleInput(e)}
    />
    <InputGroup.Append>
      <Button onClick={ e=> this.handleClick()} style={{minWidth: '150px'}} variant="primary" className="shadow-sm"><strong>Fly</strong></Button>
    </InputGroup.Append>
  </InputGroup>

      {this.state.routeInput !== '' &&  <div className="fuzzy-search shadow-sm">
        { this.state.suggestions.map((item,i) => {
          return  <div key={i} className="suggestion-item" onClick={() => this.goToRoute(item.route_id)}> 
            {item.route_short_name}
          </div>
          })
        }
      </div>
      }
     

    </div> );
  }
}
 
export default SearchBar;