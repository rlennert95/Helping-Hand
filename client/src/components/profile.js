import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: null,
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


        return (


          
	<div class="row">
		{/* <div class="col-lg-3 col-sm-6">

            <div class="card hovercard">
                <div class="cardheader">

                </div>
                <div class="avatar">
                    <img alt="" src="http://lorempixel.com/100/100/people/9/"/>
                </div>
                <div class="info">
                    <div class="title">
                        <a target="_blank" href="https://scripteden.com/">Script Eden</a>
                    </div>
                    <div class="desc">Passionate designer</div>
                    <div class="desc">Curious developer</div>
                    <div class="desc">Tech geek</div>
                </div>
                <div class="bottom">
                    <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a class="btn btn-danger btn-sm" rel="publisher"
                       href="https://plus.google.com/+ahmshahnuralam">
                        <i class="fa fa-google-plus"></i>
                    </a>
                    <a class="btn btn-primary btn-sm" rel="publisher"
                       href="https://plus.google.com/shahnuralam">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                        <i class="fa fa-behance"></i>
                    </a>
                </div>
            </div>

        </div> */}

	</div>


                );
        
            }
        }
        
export default Profile