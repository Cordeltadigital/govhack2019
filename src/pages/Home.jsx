import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import {Container, Row, Col, DropdownButton, Dropdown} from 'react-bootstrap'
import RouteList from '../components/RouteList';
import {getBuses} from '../services/Buses';
import homeHeroImg from '../img/background.jpg'
import Badge from '../components/Badge'

class Home extends Component {
  state = { 
    routes: [],
    currentState: 'NSW'
  }

  changeState(e){
    console.log(e)
    this.setState({currentState: e}, () => {
      // refetch data
      getBuses(this.state.currentState)
      .then(res => {
        // console.log(res)
        this.setState({routes: res})
        return res
      })
    })
    
  }
  componentDidMount(){
    getBuses(this.state.currentState).then(res => {
      this.setState({routes: res})
      return res
    })
    // .then(res => localStorage.setItem("routes", JSON.stringify(res)));
  }
  render() { 
    return ( <div>
      
    <div className="hero">
      <img src={homeHeroImg} alt="hero" />
    </div>

    <div className="content">
      
    <Container>
      <Row>
        <Col>
    <h1 className="text-center">A little bird told us that these are
worst and best public transport routes in <DropdownButton className="state-dropdown" onSelect={e => this.changeState(e)} title={this.state.currentState}>
  <Dropdown.Item eventKey="NSW">NSW</Dropdown.Item>
  <Dropdown.Item eventKey="ACT">ACT</Dropdown.Item>
</DropdownButton></h1>
      </Col></Row>
      <Row><Col className="text-center">
       {
         [...Array(5).keys()].map(i => {
          return <Badge rating={i+1} key={i} />
         })
        }
      </Col></Row>
      <Row className="mt-5">
        <Col md={{ span: 8, offset: 2 }} >
          <SearchBar routes={this.state.routes} />
        </Col>
      </Row>

      <div className="routes-grid">
        {
          this.state.routes && this.state.routes.length > 0 && <RouteList routes={this.state.routes} />
        }
      </div>
    </Container>
    </div>
    </div> );
  }
}
 
export default Home;