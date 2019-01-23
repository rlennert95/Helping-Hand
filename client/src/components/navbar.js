import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'
import './navbar.css'
import Logo from '../Images/facebook_cover_photo_2.png'

const imageStyle = {
  width: "100%"
}

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.state = {
            username: null,
          }
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

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
              loggedIn: true,
              username: response.data.CurrentUser.username,
          
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
              username: null,
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
   
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <nav className="navbar navbar-expand-lg">
            <div className="container">
            <div className="col-4" >

                        {loggedIn ? (
                            <section className="navbar-section">
                              {/* <img src={Logo} className="logo" id="main_logo" style={{ width: 400 }} alt="logo" />  */}

                                <Link to="#" className="btn btn-link text-dark" onClick={this.logout}>
                                <span className="text-dark">Logout</span></Link>
                                {/* <Link to="/listings" className="btn btn-link">
                                        <span className="text-dark">Listings</span>
				                        </Link>
                                    <Link to="/Jobs" className="btn btn-link">
                                        <span className="text-dark">Submit a job request</span>
				                        </Link> */}
                                    <div> Welcome, {this.state.username}! </div>

                            </section>
                        ) : (
                                <div className="collapse navbar-collapse">
                                    
                                    <Link to="/login" className="btn btn-link text-dark">
                                        <span className="text-dark">Login</span>
				                          </Link>
                                    {/* <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">Sign up</span>
				                    </Link>
                                    <Link to="/signup-contractor" className="btn btn-link">
                                        <span className="text-secondary">Contractor Sign up</span>
                                    </Link> */}



                                    <div className="dropdown">
                                      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sign-up
                                      </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <Link to="/signup" className="dropdown-item">
                                        <span className="text-dark">Client sign-up</span>
                                      </Link>
                                      <Link to="/signup-contractor" className="dropdown-item">
                                        <span className="text-dark">Contractor sign-up</span>
                                      </Link>
                                    </div>
                                  </div>



                                  </div>    
                                 
                                
                            )}
                    </div>
            
                    </div>
            
                    </nav>


                    );
                
                
                 }
                
                }

export default Navbar