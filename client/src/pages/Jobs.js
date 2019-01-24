import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, Timeframe, FormBtn, Dropdown } from "../components/Form";
import { Listings } from "../components/Listings"
import axios from 'axios'
import Navbar from "../components/navbar";
import './job-form.css'

const buttonStyle = {
  backgroundColor: "#f6c90e",
  borderColor: "#f6c90e",
  color: "black",
  boxShadow: "1.75px 1.75px lightgray"
}

class Jobs extends Component {

  state = {
    jobList: [],
    jobType: "",
    location: "",
    description: "",
    timeframe: "",
    username: null,
    email: null,
    first_name: null,
    last_name: null,
    street: null,
    city: null,
    zipcode: null,
    phone: null,
    business: null
  };

  componentDidMount() {
    this.getUser()
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
         
          username: response.data.CurrentUser.username,
          email:  response.data.CurrentUser.email,
          first_name:  response.data.CurrentUser.first_name,
          last_name:  response.data.CurrentUser.last_name,
          street:  response.data.CurrentUser.street,
          city:  response.data.CurrentUser.city,
          zipcode:  response.data.CurrentUser.zipcode,
          phone:  response.data.CurrentUser.phone,
          business:  response.data.CurrentUser.business

        })
      } else {
        console.log('Get user: no user');
      }  
    })
   
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.jobType) {
      API.saveJob({
        jobType: this.state.jobType,
        location: this.state.location,
        description: this.state.description,
        timeframe: this.state.timeframe,
        username: this.state.username,
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        street: this.state.street,
        city: this.state.city,
        zipcode: this.state.zipcode,
        phone: this.state.phone,
        business: this.state.business

      })
      
        .then(res => this.loadJobs())
        .catch(err => console.log(err));
    }
  };

  

  render() {
    return (
      
      <Container fluid>
      	{/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} /> */}
        {/* <Row>
          <Col size="md-6" style={colStyle} > */}
            {/* <Jumbotron>
              <h1>Post A Job</h1>
            </Jumbotron> */}
            <form>
              <Dropdown
                value={this.state.jobType}
                onChange={this.handleInputChange}
                name="jobType"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Valid address (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Job description (required)"
              />
              <Timeframe
                value={this.state.timeframe}
                onChange={this.handleInputChange}
                name="timeframe"
                placeholder="How soon do you need it done? (required)"
              />

<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal" style={buttonStyle}  onClick={this.handleFormSubmit}>
 Post job
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Job Posted!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        The job has been posted! A contractor will be in touch with you shortly.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

              {/* <FormBtn
                
                style={buttonStyle}
                onClick={this.handleFormSubmit}
              >
                Submit job request
              </FormBtn> */}
            </form>

      </Container>
     
    );
  }
}

export default Jobs;