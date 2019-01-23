import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";




class Detail extends Component {
  state = {
    job: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getJob(this.props.match.params.id)
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.log(err));


  }

  render() {
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
