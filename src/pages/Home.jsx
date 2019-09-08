import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import {Container, Row, Col, DropdownButton, Dropdown, Button} from 'react-bootstrap'
import RouteList from '../components/RouteList';
import {getBuses} from '../services/Buses';
import homeHeroImg from '../img/background.jpg'
import Badge from '../components/Badge'

class Home extends Component {
  state = { 
    routes: [],
    currentState: 'NSW',
    mode: 'bus'
  }
  changeMode(mode){
    this.setState({mode})
  }
  changeState(e){
    this.setState({currentState: e}, () => {
      // refetch data
      getBuses(e)
      .then(res => {
        // console.log(res)
        this.setState({routes: res})
        return res
      })

      window.localStorage.setItem('currentState', e)
    })
    
  }
  componentDidMount(){
    let currentState = window.localStorage.getItem('currentState')
    if(currentState){
      this.changeState(currentState)
    }else{
      this.changeState('NSW')
    }
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

      <Row className="tabs text-center">
        <Col>
          <Button onClick={()=>this.changeMode('bus')} className="btn-round" variant={this.state.mode === 'bus' ? 'primary':'outline-dark'}>Bus</Button>
        </Col>
        <Col>
          <Button onClick={()=>this.changeMode('light-rail')} className="btn-round" variant={this.state.mode === 'light-rail' ? 'primary':'outline-dark'}>Light rail</Button>
        </Col>
        {
          this.state.currentState ==='NSW' && 
          <Col>
            <Button onClick={()=>this.changeMode('ferry')} className="btn-round" variant={this.state.mode === 'ferry' ? 'primary':'outline-dark'}>Ferry</Button>
          </Col>
        }
        {
          this.state.currentState ==='NSW' && 
          <Col>
            <Button onClick={()=>this.changeMode('train')} className="btn-round" variant={this.state.mode === 'train' ? 'primary':'outline-dark'}>Train</Button>
          </Col>
        }
      </Row>
      <div className="routes-grid">
        {
          this.state.mode === 'bus' ? 
          (this.state.routes && this.state.routes.length > 0 && <RouteList routes={this.state.routes} />) : <div className="shadow-lg" style={{background: 'white', 'padding': '40px'}}>Coming soon...</div>
        }
      </div>
    </Container>
    </div>
    </div> );
  }
}
 
export default Home;