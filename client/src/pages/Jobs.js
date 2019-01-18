import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, Timeframe, FormBtn, Dropdown } from "../components/Form";
import { Listings } from "../components/Listings"

const colStyle = {
  marginLeft: "200px"
}

class Jobs extends Component {

  state = {
    jobList: [],
    jobType: "",
    location: "",
    description: "",
    timeframe: ""
  };

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
        timeframe: this.state.timeframe
      })
      
        .then(res => this.loadJobs())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6" style={colStyle} >
            <Jumbotron>
              <h1>Post A Job</h1>
            </Jumbotron>
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
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Job
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Link to="/listings" className="btn btn-link">
          <span className="text-secondary">Listings</span>
				</Link>
      </Container>
    );
  }
}

export default Jobs;