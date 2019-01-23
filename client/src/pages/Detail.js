import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import electric_icon from "./icons/electric.png"
import Navbar from '../components/navbar'
import Logo from '../Images/facebook_cover_photo_2.png'
import axios from 'axios'




class Detail extends Component {
  state = {
    job: {},
    loggedIn: false,
    username: null,
    email: null,
    contractor: null,
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.getUser()
    API.getJob(this.props.match.params.id)
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.log(err));

   
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      // console.log('Get user response: ')
      // console.log("resonse.data: " + response.data)
      // // console.log(response.data.CurrentUser.email) //still needs more
      // console.log("response.data.user.CurrentUser: " + response.data.user)
      if (response.data.CurrentUser) {
        console.log('Get User: There is a user saved in the server session: ')
        console.log(response.data)

        this.setState({
          loggedIn: true,
          username: response.data.CurrentUser.username,
          email: response.data.CurrentUser.email,
          contractor: response.data.CurrentUser.contractor

        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          email: null,
          contractor: null
        })

      } console.log("LOGGED IN STATE")
      console.log(this.state.loggedIn)
      console.log("CONTRACTOR STATE")
      console.log(this.state.contractor)

      if (this.state.loggedIn == true && this.state.contractor == true) {
        console.log("I AM A CONTRACTOR")
      } else if (this.state.loggedIn == true && this.state.contractor == false) {
        console.log("I AM A HOMEOWNER")
      } else {
        console.log("I AM NOTHING")
      }

    })
    // console.log("LOGGED IN STATE")
    // console.log(this.state.loggedIn)
    // console.log("CONTRACTOR STATE")
    //     console.log(this.state.contractor)

    //     if (this.state.loggedIn == true && this.state.contractor == true ) {
    //      console.log("I AM A CONTRACTOR")
    //     } else if (this.state.loggedIn == true && this.state.contractor == false) {
    //       console.log("I AM A HOMEOWNER")
    //     } else {
    //       console.log("I AM NOTHING")
    //     }
  }


  render() {
    if (this.state.job.jobType === "Electrical") {
      return (
        <Container fluid>
        
        
        <div id="top-filler"> <img src={Logo} className="logo" id="main_logo" style={{ width: 200 }} alt="logo" /> 
        
        </div>

          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}> </Navbar>
      	
        {/* <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Your Selected Job
              </h1>
            </Jumbotron>
          </Col>
        </Row> */}
        <Row>
          <Col size="md-10 md-offset-1">
          <div >
      <img src={electric_icon} id="job_icon"/>
      </div>

            <article>
              <h1>Job Details</h1>
                <ul>
                  <li>Job ID: {this.state.job._id}</li>
                  <li>Category: {this.state.job.jobType}</li>
                  <li>Description: {this.state.job.description}</li>
                  <li>Location: {this.state.job.location}</li>
                  <li>Timeframe: {this.state.job.timeframe}</li>
                  <li>Username: {this.state.job.username}</li>
                  <li>Email: {this.state.job.email}</li>
                  <li>First Name: {this.state.job.first_name}</li>
                  <li>Last Name: {this.state.job.last_name}</li>
                  <li>Street: {this.state.job.street}</li>
                  <li>City: {this.state.job.city}</li>
                  <li>Zipcode: {this.state.job.zipcode}</li>
                  <li>Phone: {this.state.job.phone}</li>
              </ul>
             
            </article>


<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
  Accept Job
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Job Accepted!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        The customer has been notified that you have accepted the job. Please contact them at {this.state.job.phone} or {this.state.job.email}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Profile</Link>
          </Col>
        </Row>
      </Container>
      )
    } 
    return (
      <Container fluid>
      	
        {/* <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Your Selected Job
              </h1>
            </Jumbotron>
          </Col>
        </Row> */}
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Job Details</h1>
                <ul>
                  <li>Job ID: {this.state.job._id}</li>
                  <li>Category: {this.state.job.jobType}</li>
                  <li>Description: {this.state.job.description}</li>
                  <li>Location: {this.state.job.location}</li>
                  <li>Timeframe: {this.state.job.timeframe}</li>
                  <li>Username: {this.state.job.username}</li>
                  <li>Email: {this.state.job.email}</li>
                  <li>First Name: {this.state.job.first_name}</li>
                  <li>Last Name: {this.state.job.last_name}</li>
                  <li>Street: {this.state.job.street}</li>
                  <li>City: {this.state.job.city}</li>
                  <li>Zipcode: {this.state.job.zipcode}</li>
                  <li>Phone: {this.state.job.phone}</li>
              </ul>
             
            </article>


<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">
  Accept Job
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Job Accepted!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        The customer has been notified that you have accepted the job. Please contact them at {this.state.job.phone} or {this.state.job.email}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Profile</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
