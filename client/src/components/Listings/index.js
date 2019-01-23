import React from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, Timeframe, FormBtn, Dropdown } from "../Form/index";
import Navbar from '../navbar';
import './listings.css'




class Listings extends React.Component {

  state = {
    jobList: [],
    jobType: "",
    location: "",
    description: "",
    timeframe: ""
  };

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      .then(res =>
        this.setState({ jobList: res.data, jobType: "", location: "", description: "", timeframe: "" })
      )
      .catch(err => console.log(err));
  };

  deleteJob = id => {
    API.deleteJob(id)
      .then(res => this.loadJobs())
      .catch(err => console.log(err));
  };

    render() {

      
     

        return (

    <div className="listings">
       
            {/* <Jumbotron>
              <h1>Available Jobs</h1>
              </Jumbotron> */}
            {this.state.jobList.length ? (
              <List>
                {this.state.jobList.map(job => (
                  <ListItem key={job._id}>
                    <Link to={"/details/" + job._id}>
                      <strong>


                        JOBTYPE:  {job.jobType} TIMEFRAME: {job.timeframe}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteJob(job._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
        )
    }
}

// onClick={() => this.deleteJob(job._id)}

export default Listings