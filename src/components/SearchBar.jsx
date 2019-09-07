import React, { Component } from 'react';
import {FormControl, InputGroup, Button} from 'react-bootstrap'
class SearchBar extends Component {
  state = {  }
  render() { 
    return ( <div>
       <InputGroup className="mb-3">
    <FormControl size="lg"
    type="saerch" placeholder="Search your route and see how it performs"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
    </div> );
  }
}
 
export default SearchBar;