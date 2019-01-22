import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'
import './sign-up.css';

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
			contractor: this.state.contractor
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div id="signuplogin">
		<div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
            <div className="card card-5">
                <div className="card-heading">
                    <h2 className="title">Helping Hand Home Owner Sign-up</h2>
                </div>
                <div className="card-body">
                    <form method="POST">
                    <div className="form-row">
                        <div className="name">Username</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-5" type="text" name="username" type="text"
                                    id="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}/>
                                </div>
                        </div>
                    </div>

                    <div className="form-row">
                         <div className="name">Password:</div>
                            <div className="value">
                                 <div className="input-group">
                                <input className="input--style-5" name="password"
                                placeholder="password"
							type="password"

							value={this.state.password}
							onChange={this.handleChange}/>
                            </div>
                            </div>
                        </div>

                        <div className="form-row m-b-55">
                            <div className="name">Name</div>
                            <div className="value">
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group-desc">
                                            <input className="input--style-5" type="text" name="first_name"
                                            placeholder="First Name"
                                            type="first_name"
                                            value={this.state.first_name}
                                            onChange={this.handleChange}/>
                                            <label className="label--desc">first name</label>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="input-group-desc">
                                            <input className="input--style-5" type="text" name="last_name" 
                                            placeholder="Last Name"
                                            type="last_name"
                        
                                            value={this.state.last_name}
                                            onChange={this.handleChange}/>
                                            <label className="label--desc">last name</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="name">Email</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-5" type="email" name="email" 
                                    placeholder="Email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row ">
                            <div className="name">Phone</div>
                            <div className="value">
                                        <div className="input-group-desc">
                                            <input className="input--style-5" type="text" name="phone"
                                            placeholder="555-555-5555"
                                            type="phone"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.handleChange}/>
                                            <label className="label--desc">Phone Number</label>
                                        </div>
                                    </div>
                                </div>
                        
                        <div className="form-row">
                                <div className="name">Street</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input className="input--style-5" type="text" name="street"
                                        placeholder="Street"
							type="street"
							value={this.state.street}
							onChange={this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                    <div className="name">City</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5" type="text" name="city"
                                            placeholder="city"
                                type="city"
                                value={this.state.city}
                                onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                        <div className="name">Zip code:</div>
                                        <div className="value">
                                            <div className="input-group">
                                                <input className="input--style-5" type="text" name="zipcode"
                                                placeholder="zipcode"
                                    type="zipcode"
                                    value={this.state.zipcode}
                                    onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>

                        <div className="form-row">
                            <div className="name">Subject</div>
                            <div className="value">
                                <div className="input-group">
                                    <div className="rs-select2 js-select-simple select--no-search">
                                        <select name="subject">
                                            <option disabled="disabled" selected="selected">Choose option</option>
                                            <option>Subject 1</option>
                                            <option>Subject 2</option>
                                            <option>Subject 3</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <button className="btn btn--radius-2 btn--red" 	onClick={this.handleSubmit} type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
			</div>
            </div>

			</div>
        

	)
}
}

export default Signup
