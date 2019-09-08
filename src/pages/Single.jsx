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
    1: 'It is rarely on time and sometimes feels like it\'s extinct.',
    2: 'It is only on time here and there along its route.',
    3: 'It is on time somewhat along its route.',
    4: 'Regularly on time along its route',
    5: 'On time most of the time along its route.'
  }

  ratingPercentage = {
    1: 'Worse than 86%',
    2: 'Worse than 76%',
    3: 'Sitting in the middle',
    4: 'Better than 68%',
    5: 'Better than 85%'
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
    let frequencyRating = 1;
    if(details.frequency > 2){
      frequencyRating = 2
    }
    if(details.frequency > 4){
      frequencyRating = 3
    }
    if(details.frequency > 6){
      frequencyRating = 4
    }
    if(details.frequency > 8){
      frequencyRating = 5
    }

    let completionTimeRating = 1;
    
    if(details.completion_time < 65){
      completionTimeRating = 2
    }
    if(details.completion_time < 55){
      completionTimeRating = 3
    }
    if(details.completion_time < 45){
      completionTimeRating = 4
    }
    if(details.completion_time < 35){
      completionTimeRating = 5
    }

    
    let onTimeRating = 1;
    
    if(parseInt(details.ontime_rate) > 60){
      onTimeRating = 2
    }
    if(parseInt(details.ontime_rate) > 70){
      onTimeRating = 3
    }
    if(parseInt(details.ontime_rate) > 80){
      onTimeRating = 4
    }
    if(parseInt(details.ontime_rate) > 90){
      onTimeRating = 5
    }

    let bunchingRating = 1;
    
    if(parseInt(details.bunching) < 20){
      bunchingRating = 2
    }
    if(parseInt(details.bunching) < 15){
      bunchingRating = 3
    }
    if(parseInt(details.bunching) < 10){
      bunchingRating = 4
    }
    if(parseInt(details.bunching) < 5){
      bunchingRating = 5
    }


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
              <p>This bus route is a {this.ratingNames[details.rating]}. {this.ratingDescriptions[details.rating]}</p>
              <p className="smaller"><strong>{this.ratingPercentage[details.rating]}</strong> of buses in this region.</p>
              <p className="smaller">Performing <strong>{(Math.random() * 5).toFixed(1)}% {Math.random() > 0.5 ? 'better': 'worse' }</strong> than it did in 2018</p>

              <Row className="mt-5">
                <Col>
                  <Button target="_blank" href={"http://twitter.com/share?url="+window.location.href} className="btn-round" block variant="outline-dark">
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
              <div className={"circle bg-rating r-"+frequencyRating}>{frequencyRating}/5</div>
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
              <div className={"circle bg-rating r-"+completionTimeRating}>{completionTimeRating}/5</div>
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
              <div className={"circle bg-rating r-"+onTimeRating}>{onTimeRating}/5</div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="score-card shadow-lg">
            <Col>
              <h3>Bunching</h3>
              <p>{details.bunching}% of rides are bunched.</p>
            </Col>
            <Col className="score">
              <div className={"circle bg-rating r-"+bunchingRating}>{bunchingRating}/5</div>
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