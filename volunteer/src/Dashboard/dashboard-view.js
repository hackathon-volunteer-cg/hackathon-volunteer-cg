
import React, { Fragment } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios';



export class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      leader1: {},
      leader2: {},
      leader3: {},
    };    
    this.points1 = Math.ceil(1000 + Math.random() * 200);
    this.points2 = Math.ceil(500 + Math.random() * 500);
    this.points3 = Math.ceil(200 + Math.random() * 100);
    this.parseName = this.parseName.bind(this);
    this.getRandom = this.getRandom.bind(this);
    this.pointGen = this.pointGen.bind(this);
  }

  componentDidMount() {
    let currentComponent = this;
    axios.get('https://randomuser.me/api/', {})
    .then(function (response) {
      currentComponent.setState( response.data.results[0] );
      console.log(response.data.results[0]);
      currentComponent.setState({
        nameProfile: currentComponent.parseName(response.data.results[0].email),
        profile: response.data.results[0].picture["large"]
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    currentComponent.getRandom();
  }

  getRandom() {
    let currentComponent = this;
    axios.get('https://randomuser.me/api/', {})
    .then(function (response) {
      currentComponent.setState( {
        leader1: response.data.results[0],
        leader1name: currentComponent.parseName(response.data.results[0].email),
        location1: response.data.results[0].location["street"].toUpperCase()
       });
      console.log(response.data.results[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.get('https://randomuser.me/api/', {})
    .then(function (response) {
      currentComponent.setState( {
        leader2: response.data.results[0],
        leader2name: currentComponent.parseName(response.data.results[0].email),
        location2: response.data.results[0].location["street"].toUpperCase()
       });
        console.log(response.data.results[0]);
    })
    .catch(function (error) {
      console.log(error);
    });    
    
    axios.get('https://randomuser.me/api/', {})
    .then(function (response) {
      currentComponent.setState( {
        leader3: response.data.results[0],
        leader3name: currentComponent.parseName(response.data.results[0].email),
        location3: response.data.results[0].location["street"].toUpperCase()
       });
      console.log(response.data.results[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  parseName(email) {
    const names = email.split("@")[0].split(".");
    const first = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    const last = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    console.log(first + " " + last);
    return first + " " + last;
    //return "";
  }

  pointGen(min, max) {
    const rand = min + Math.random() * (max - min);
    return rand;
  }

  render() {
    return (
      <Fragment>
        <div className="dashboard-container page-wrapper">
          <div className="row">
            <div className="col-6">
            <Card>
        {/* <CardImg top width="100%" src="https://ak8.picdn.net/shutterstock/videos/29973988/thumb/8.jpg" alt="Card image cap" /> */}
        <CardImg top width="25%" src={this.state.profile} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.state.nameProfile}</CardTitle>
          <CardSubtitle>DevOps Specialist</CardSubtitle>
          <br/>
          <CardText>Enjoys running marathons and yoga</CardText>
          <Button></Button>
        </CardBody>
      </Card>
            </div>
            <br />
            <br />
            <div className="col-6">
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading> 
                    <div className="flex-center">
                    <i className="material-icons md-36 text-dark"> add_box</i> Create an opp
                    </div>
                    </ListGroupItemHeading>

                </ListGroupItem>

                <ListGroupItem>
                  <ListGroupItemHeading>Walk for Breast Cancer</ListGroupItemHeading>
                  <ListGroupItemText>
                    Location: {this.state.location1}
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>Shelter Care Day</ListGroupItemHeading>
                  <ListGroupItemText>
                  Location: {this.state.location2}
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>Food Drive</ListGroupItemHeading>
                  <ListGroupItemText>
                  Location: {this.state.location3}
          </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading>{this.state.leader1name}</ListGroupItemHeading>
                  <ListGroupItemText>
                  Total Points: {this.points1}
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>{this.state.leader2name}</ListGroupItemHeading>
                  <ListGroupItemText>
                  Total Points: {this.points2}
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>{this.state.leader3name}</ListGroupItemHeading>
                  <ListGroupItemText>
                  Total Points: {this.points3}
          </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>

        
      </Fragment>
    );
  }
}
