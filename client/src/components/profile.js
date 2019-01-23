import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'
import './contractor-home.css'

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


          
	// <div className="row">
	// 	<div className="col-lg-3 col-sm-6">
        
            <div className="card bg-light mb-3" style={style}>
                <div className="cardheader">

                </div>
                <div className="avatar">
                    <img alt="" src="http://lorempixel.com/100/100/people/9/"/>
                </div>
                <div className="info">
                    <div className="title">
                        <a target="_blank" href="https://scripteden.com/">Script Eden</a>
                    </div>
                    <div className="desc">Passionate designer</div>
                    <div className="desc">Curious developer</div>
                    <div className="desc">Tech geek</div>
                </div>
                <div className="bottom">
                    <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="btn btn-danger btn-sm" rel="publisher"
                       href="https://plus.google.com/+ahmshahnuralam">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="btn btn-primary btn-sm" rel="publisher"
                       href="https://plus.google.com/shahnuralam">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                        <i className="fa fa-behance"></i>
                    </a>
                </div>
           
            {/* </div>

        
        </div> */}

	</div>


                );
        
            }
        }
        
export default Profile