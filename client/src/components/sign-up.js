import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './navbar'
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
			contractor: this.state.contractor
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
		<div className="SignupForm">
		<Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
			<h4>Sign up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Username</label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
			    <div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">Email: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Email"
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="first_name">First Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="First Name"
							type="first_name"
							name="first_name"
							value={this.state.first_name}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="last_name">Last Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Last Name"
							type="last_name"
							name="last_name"
							value={this.state.last_name}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="street">Street: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Street"
							type="street"
							name="street"
							value={this.state.street}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="city">City: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="City"
							type="city"
							name="city"
							value={this.state.city}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="zipcode">Zipcode: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Zipcode"
							type="zipcode"
							name="zipcode"
							value={this.state.zipcode}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="phone">Phone: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="555-555-5555"
							type="phone"
							name="phone"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
			</form>
		</div>

	)

	
}
}

export default Signup
