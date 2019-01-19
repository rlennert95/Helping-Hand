import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar'
import Home from './components/home'
import ContractorSignup from './components/sign-up-contractor'
import Footer from './components/Footer';
import ContractorHome from './components/home-contractor';
import HomeownerHome from './components/home-homeowner';
import Listings from './components/Listings/index';
import Jobs from './pages/Jobs';
import Detail from './pages/Detail';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      email: null,
      contractor: null
    }

  //   this.getUser = this.getUser.bind(this)
  //   this.componentDidMount = this.componentDidMount.bind(this)
  //   this.updateUser = this.updateUser.bind(this)
  // }

  // componentDidMount() {
  //   this.getUser()
  // }

  // updateUser (userObject) {
  //   this.setState(userObject)
  // }

  // getUser() {
  //   axios.get('/user/').then(response => {
  //     // console.log('Get user response: ')
  //     // console.log("resonse.data: " + response.data)
  //     // // console.log(response.data.CurrentUser.email) //still needs more
  //     // console.log("response.data.user.CurrentUser: " + response.data.user)
  //     if (response.data.CurrentUser) {
  //       console.log('Get User: There is a user saved in the server session: ')
  //       console.log(response.data)

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.CurrentUser.username,
  //         email: response.data.CurrentUser.email,
  //         contractor: response.data.CurrentUser.contractor
      
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null,
  //         email: null,
  //         contractor: null
  //       })
  //     }
  //   })
  }


  render() {
    return (
      <div className="App">
   
         {/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {/* {this.state.loggedIn &&
          <p>Join the party, {this.state.username} email: {this.state.email}, CONTRACTOR STATUS: {this.state.contractor}!</p>
        } */} 
        
        {/* Routes to different components */}

        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          path="/signup-contractor"
          render={() =>
            <ContractorSignup/>}
        />
           <Route
          path="/home-contractor"
          render={() =>
            <ContractorHome/>}
        />
           <Route
          path="/home-homeowner"
          render={() =>
            <HomeownerHome/>}
        />
        <Route
          path="/listings"
          render={() =>
            <Listings/>}
        />
        <Route
          path="/jobs"
          render={() =>
            <Jobs/>}
        />
        <Route exact path="/details/:id" component={Detail} />
        <Footer />
      </div>
    );
  }
}

export default App;
