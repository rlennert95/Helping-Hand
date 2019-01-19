import React, { Component } from 'react'
import Navbar from './navbar'
import axios from 'axios'

import Jumbotron from './Jumbotron';

class Home extends Component {
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          username: null,
          email: null,
          contractor: null
        }
    
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
      }
    
      componentDidMount() {
        this.getUser()
      }
    
      updateUser (userObject) {
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
            
          }   console.log("LOGGED IN STATE")
              console.log(this.state.loggedIn)
              console.log("CONTRACTOR STATE")
              console.log(this.state.contractor)
  
              if (this.state.loggedIn == true && this.state.contractor == true ) {
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

        if (this.state.loggedIn == true && this.state.contractor == true ) {
          console.log("render: I AM A CONTRACTOR")
          //INSERT RETURN HERE
         } else if (this.state.loggedIn == true && this.state.contractor == false) {
           console.log("render: I AM A HOMEOWNER")
            //INSERT RETURN HERE
         } else {
           console.log("render: I AM NOTHING")
            //INSERT RETURN HERE
         }

        return (
          

        <div>
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username} email: {this.state.email}, CONTRACTOR STATUS: {this.state.contractor}!</p>
        }
           
          <Jumbotron title="Helping Hand" subtitle="There when you need it!"/>
          </div>
        )

    }
}

export default Home