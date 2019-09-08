import React, { Component } from 'react';
import {getRouteDetails} from '../services/Buses'
import detailsHeroImg from '../img/background-details.jpg'

import {Row, Col, Container, Button, Spinner} from 'react-bootstrap'

import Badge from '../components/Badge'

import shareIcon from '../img/share-ico.svg'
import starIcon from '../img/fav-ico.svg'
class Single extends Component {
  state = { details: null }
  ratingNames = {
    1: 'Dodo',
    2: 'Duck',
    3: 'Pigeon',
    4: 'Parrot',
    5: 'Eagle'
  }
  ratingDescriptions = {
    1: 'So bad',
    2: 'Not good at all ',
    3: 'Just so so',
    4: 'Pretty good',
    5: 'Always on time and very precise along its route.'
  }

  componentDidMount(){
    // load route data by route id
    getRouteDetails(this.props.match.params.id)
    .then( details => {
      console.log(details)
      this.setState({details}, () => {
        console.log(this.state.details)
      })
      
    })
  }
  render() { 
    if(!this.state.details){
      return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    }
    // let id = this.props.match.params.id
    let details = this.state.details
    
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
              <Badge rating={details.rating}></Badge>
            </Col>
            <Col md={9}>
              <h1>Bus Route {details.route_short_name}</h1>
              <p>This bus route is a {this.ratingNames[details.rating]} through and through. {this.ratingDescriptions[details.rating]}</p>
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
          <Row className="score-card shadow-lg">
            <Col>
              <h3>Frequency</h3>
              <p>{details.frequency} busses per hour</p>

              <h3>Ridership</h3>
              <p>{details.ridership} per month</p>
            </Col>
            <Col className="score">
              <div className="circle bg-rating r-5">5/5</div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="score-card shadow-lg">
            <Col>
              <h3>Completion time</h3>
              <p>This bus route takes an approximate time of {details.completion_time} mins to complete from start to finish.</p>
            </Col>
            <Col className="score">
              <div className="circle bg-rating r-4">4/5</div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="score-card shadow-lg">
            <Col>
              <h3>On-time performance</h3>
              <p>This bus route is {details.ontime_rate}% of the time on schedule, with very little delays. </p>
            </Col>
            <Col className="score">
              <div className="circle bg-rating r-4">4/5</div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="score-card shadow-lg">
            <Col>
              <h3>Bunching</h3>
              <p>This bus route has very little bunching and busses are spaced sufficiently between stops.</p>
            </Col>
            <Col className="score">
              <div className={"circle bg-rating r-"+details.bunching}>{details.bunching}/5</div>
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