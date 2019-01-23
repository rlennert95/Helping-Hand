import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Navbar from './navbar'
import axios from 'axios'

import Jumbotron from './Jumbotron';
import { Col, Row, Container } from "./Grid";
import API from "../utils/API";
import Jobs from '../pages/Jobs';
import Detail from '../pages/Detail';
import Listings from './Listings/index'
import Profile from './profile'
import Logo from '../Images/facebook_cover_photo_2.png'

const contractorStyle = {
  display: "grid",
  gridTemplateColumns: "600px 400px",
  float: "right",
  paddingTop: "50px",
  marginRight: "220px"
  
}

const clientStyle = {
  display: "grid",
  gridTemplateColumns: "600px 400px",
  float: "right",
  paddingTop: "50px",
  marginRight: "220px"
  
}

class Home extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      email: null,
      contractor: null,
      job: {}
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

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
    const imageStyle = {
      width: 400
    }

    if (this.state.loggedIn == true && this.state.contractor == true) {
      console.log("render: I AM A CONTRACTOR")
      return (
        <div>
            
        <div id="top-filler"> <img src={Logo} className="logo" id="main_logo" style={{ width: 200 }} alt="logo" /> </div>
        
       
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}> </Navbar>
            <div className="contractor-wrapper" style={contractorStyle}>
              <Profile />
              <Listings />
            </div>
        </div>
      )
    } else if (this.state.loggedIn == true && this.state.contractor == false) {
      console.log("render: I AM A HOMEOWNER")
      return (
        <div>
            <div id="top-filler"> <img src={Logo} className="logo" id="main_logo" style={{ width: 200 }} alt="logo" /> </div>
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}> </Navbar>
          <div className="client-wrapper" style={clientStyle}>
            <Profile />
            <Jobs> </Jobs>
          </div>
        </div>
      )
      //INSERT RETURN HERE
    } else {
      console.log("render: I AM NOTHING")
      //INSERT RETURN HERE
    }

    return (





      <div>
        <div id="top-filler"> <img src={Logo} className="logo" id="main_logo" style={{ width: 400 }} alt="logo" /> 
        
        </div>


        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username} email: {this.state.email}, CONTRACTOR STATUS: {this.state.contractor}!</p>
        }
        

        <div id="demo" className="carousel slide" data-ride="carousel">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.concrete.org/portals/0/files/images/contractorportal_12column.jpg" alt="Los Angeles" width="100%" height="100%" />
            </div>
            <div className="carousel-item">
              <img src="http://lenoxhillconstruction.com/wp-content/uploads/2016/03/General-Contractor-1024x683.jpg" alt="Chicago" width="100%" height="100%" />
            </div>
            <div className="carousel-item">
              <img src="https://www.cm3.com.au/www/responsive/images/frontpage/for-clients.jpg" alt="New York" width="100%" height="100%" />
            </div>
          </div>

        </div>

      </div>
    )

  }
}

export default Home