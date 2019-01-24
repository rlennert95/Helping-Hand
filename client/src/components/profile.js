import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'
import './contractor-home.css'
import profileicon from '../Images/homeowner.png'
import hardhat from '../Images/hardhat.png'
import NoMatch from '../pages/NoMatch';

const style = {
    marginTop: "0px",
    boxShadow: "1.75px 1.75px lightgray",
    backgroundColor: "white",
}



class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: null,
            email: '',
			first_name: '',
			last_name:'',
			street: '',
			city: '',
			zipcode: '',
			phone:'',
			contractor: null,
			confirmPassword: '',
			redirect: false,
			business: ''
        }
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
                    email: response.data.CurrentUser.email,
                    first_name: response.data.CurrentUser.first_name,
                    last_name: response.data.CurrentUser.last_name,
                    street: response.data.CurrentUser.street,
                    city: response.data.CurrentUser.city,
                    zipcode: response.data.CurrentUser.zipcode,
                    phone: response.data.CurrentUser.phone,
                    contractor: response.data.CurrentUser.contractor,
                    business: response.data.CurrentUser.business

                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null,
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

    }

    render() {

        if (this.state.loggedIn == true && this.state.contractor == false) {
        return (
        
            <div className="card bg-light mb-3" style={style}>
                <div className="cardheader">

                </div>
                <div className="avatar">
                    <img src={profileicon} style={{ width: 200 }} />
                </div>
                <div className="info">
                    <div className="title">
                       
                    </div>
                    <div className="desc">Homeowner</div>
                    <div className="desc">{this.state.first_name} {this.state.last_name}</div>
                    <div className="desc">{this.state.street} </div>
                    <div className="desc">{this.state.city} {this.state.zipcode}</div>
                </div>
                <div className="bottom">
                  
                </div>

	</div>
    

                );
        
            }

            else if (this.state.loggedIn == true && this.state.contractor == true) {
                return (
                
                    <div className="card bg-light mb-3" style={style}>
                        <div className="cardheader">
        
                        </div>
                        <div className="avatar">
                            <img src={hardhat} style={{ width: 200 }} />
                        </div>
                        <div className="info">
                            <div className="title">
                               
                            </div>
                            <div className="desc">Contractor</div>
                            <div className="desc">{this.state.business}</div>
                            <div className="desc">{this.state.city}</div>
                        </div>
                        <div className="bottom">
                          
                        </div>
        
            </div>
            
        
                        );
                
                    }
                    else {
                        return (
                        <div>
                        {NoMatch}
                        
                        </div>
                
                    
                
                                );
                        
                            }

        }
        }
        
export default Profile