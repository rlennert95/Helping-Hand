import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'

import './sign-up.css';

import { Redirect } from 'react-router';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			email: '',
			first_name: '',
			last_name:'',
			street: '',
			city: '',
			zipcode: '',
			phone:'',
			contractor: false,
			confirmPassword: '',
			redirect: false

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			street: this.state.street,
			city: this.state.city,
			zipcode: this.state.zipcode,
			phone: this.state.phone,
			contractor: false
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ redirect: true });
		
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {

	const {redirect} = this.state;
	if (redirect) {
		return <Redirect to="/login"/>
	}
	
	return (


        <div id= "signupform_home">   
        <div className="container">
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>Homeowner Sign-Up</h3>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div className="card-body" id="signup_card">
                    <form>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username"
                        
                                id="username"
                                        name="username"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                            
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="password" className="form-control"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
    
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="email" className="form-control"
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
    
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="first_name" className="form-control"
                            placeholder="First Name"
                            type="first_name"
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                        />
    
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="last_name" className="form-control"
                            placeholder="Last Name"
                            type="last_name"
                            name="last_name"
                            value={this.state.last_name}
                            onChange={this.handleChange}
                        />
    
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="street" className="form-control"
                            placeholder="Street Address"
                            type="street"
                            name="street"
                            value={this.state.street}
                            onChange={this.handleChange}
                        />
    
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="city" className="form-control"
                            placeholder="City"
                            type="city"
                            name="city"
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
    
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="zipcode" className="form-control"
                            placeholder="Zipcode"
                            type="zipcode"
                            name="zipcode"
                            value={this.state.zipcode}
                            onChange={this.handleChange}
                        />
    
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                            </div>
                            <input type="phone" className="form-control"
                            placeholder="Phone Number"
                            type="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
    
                        </div>
                      
                        <div className="form-group">
                            <input type="submit" value="Sign-Up" className="btn float-right login_btn" onClick={this.handleSubmit}/>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Already have an account?<a href="/login">Login</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        

	)

	
}
}

export default Signup
