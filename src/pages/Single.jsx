import React, { Component } from 'react';
// import {getRouteDetails} from '../services/Buses'
import detailsHeroImg from '../img/background-details.jpg'

import {Row, Col, Container, Button} from 'react-bootstrap'

import Badge from '../components/Badge'

import shareIcon from '../img/share-ico.svg'
import starIcon from '../img/fav-ico.svg'
class Single extends Component {
  state = {  }
  componentDidMount(){
    // load route data by route id
    // getRouteDetails(this.props.match.params.id)
    // .then( details => {
    //   this.setState({details})
    // })
  }
  render() { 
    // let id = this.props.match.params.id
    
    return ( <div>
     
    <div className="hero">
      <img src={detailsHeroImg} alt="hero" />
    </div>

    <div className="content">
      
    <Container>
      <Row>
        <Col className="route-title" xs={12} md={10}>
          <Row>
            <Col md={3}>
              <Badge rating="4"></Badge>
            </Col>
            <Col md={9}>
              <h1>Bus Route {'087'}</h1>
              <p>This bus route is an Eagle through and through. Always on time and very precise along its route.</p>
              <Row>
                <Col>
                  <Button className="btn-round" block variant="outline-dark">
                    <img src={shareIcon} alt="share" className="mr-1" width="18" /> Share this route</Button>
                </Col>
                <Col>
                  <Button className="btn-round" block variant="primary">
                  <img src={starIcon} alt="star" className="mr-1" width="18" /> Favourite this route</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="score-details">
        <Col md={6}>
          <Row className="score-card shadow-sm">
            <Col>
              <h3>Frequency</h3>
              <p>7.5 busses per hour</p>

              <h3>Ridership</h3>
              <p>38098 per month</p>
            </Col>
            <Col className="score">
              <div className="circle bg-rating r-5">5/5</div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="score-card shadow-sm">
            <Col>
              <h3>Completion time</h3>
              <p>This bus route takes an approximate time of 33 mins to complete from point A to point B.</p>
            </Col>
            <Col className="score">
              <div className="circle bg-rating r-4">4/5</div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="score-card shadow-sm">
            <Col>
              <h3>On-time performance</h3>
              <p>This bus route is 95% of the time on schedule, with very little delays. </p>
            </Col>
            <Col className="score">
              <div className="circle bg-rating r-4">4/5</div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="score-card shadow-sm">
            <Col>
              <h3>Bunching</h3>
              <p>This bus route has very little bunching and busses are spaced sufficiently between stops.</p>
            </Col>
            <Col className="score">
              <div className="circle bg-rating r-5">5/5</div>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </div>
    </div> );
  }
}
 
export default Single;