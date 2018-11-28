import React, { Component } from 'react'
import { Helmet } from "react-helmet";

import Banner from '../components/Careers/Banner/index';
import BehindTheScenes from '../components/Careers/BehindTheScenes/index';
import Advantages from '../components/Careers/Advantages/index';
import EmployeeStories from '../components/Careers/EmployeeStories/index';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

class Careers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword : "",
			team: "",
			location: "",
			department: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			keyword:  document.getElementById("keyword").value,
			location:  document.getElementById("location").value === 'all' ? "" : document.getElementById("location").value,
			team:  document.getElementById("team").value === 'all' ? "" : document.getElementById("team").value,
			department:  document.getElementById("department").value === 'all' ? "" : document.getElementById("department").value
		});
		scroller.scrollTo('myScrollToElement', {
			smooth: "easeInOutQuint",
		});
	}

	handleChange = evt => {
		if(evt.target.value === 'all') {
			this.setState({
				[evt.target.name]: ""
			});
		} else {
			this.setState({
				[evt.target.name]: evt.target.value
			});
		}		
	}

	resetFilters = () => {
		this.setState({
			keyword: "",
			location: "",
			team: "",
			department: ""
		});
	}

  	render() {
	    return(
      		<div className="first-section">
			  	<Helmet>
					<title> GO-JEK Tech Careers </title>
				</Helmet>
				<section className=" bg-gray">
					<div className="container">
						<div className="row pt-5 pb-3 justify-content-center">
							<form onSubmit = { this.handleSubmit} className="w-100">
							<div className="form-row mx-3 mx-md-0 careers-form">
								<div className="form-group col-lg-1 col-md-2 mb-2">
									<label className="raleway-bold font-lg" htmlFor="keyword"> Search </label>
								</div>
								<div className="form-group col-lg-4 col-md-3	mb-2">
									<label htmlFor="keyword" className="sr-only">Enter keyword</label>
									<input type="text" name="keyword" className="form-control is-valid bg-gray" onChange= { this.handleChange } id="keyword" placeholder="Enter keyword" />
								</div>
								<div className="form-group col-md-2 mb-2">
									<label htmlFor="location" className="sr-only">Location</label>
									<select name="location" id="location" className="custom-select form-border postion-relative" defaultValue="" onChange= { this.handleChange }>
										<option value="" disabled>Location</option>
										<option value="all">All Locations</option>
										<option value="Bangalore">Bangalore</option>
										<option value="Jakarta">Jakarta</option>
										<option value="Singapore">Singapore</option>
										<option value="Thailand">Thailand</option>
									</select>
									<i className="fa fa-chevron-down"></i>
								</div>
								<div className="form-group col-md-2 mb-2">
									<label htmlFor="team" className="sr-only">Team</label>
									<select name="team" id="team" defaultValue="" className="custom-select form-border postion-relative" onChange= { this.handleChange }>
										<option value="" disabled>Team</option>
										<option value="all">All Teams</option>
										<option value="Engineering">Engineering</option>
										<option value="Marketing and Operations">Marketing and Operations</option>
									</select>
									<i className="fa fa-chevron-down"></i>
								</div>
								<div className="form-group col-md-2 mb-2">
									<label htmlFor="team" className="sr-only">Department</label>
									<select name="department" id="department" defaultValue="" className="custom-select form-border postion-relative" onChange= { this.handleChange }>
										<option value="" disabled>Department</option>
										<option value="all">All Departments</option>
										<option value="Food">Food</option>
										<option value="Payments">Payments</option>
										<option value="Transport">Transport</option>
										<option value="Logistics">Logistics</option>
									</select>
									<i className="fa fa-chevron-down"></i>
								</div>

							<button type="submit" className="btn btn-link col-md-1 mb-2 pt-0 d-md-block d-none"><i className="fa fa-arrow-right fa-2x text-green" aria-hidden="true"></i></button> 
							<button type="submit" className="btn btn-success d-block d-md-none mx-auto">Search</button> 
							</div>
								</form>  
						</div>
					</div>
				</section>

        		<Banner />

				<BehindTheScenes />

				<Advantages />

				<EmployeeStories
					keyword = { this.state.keyword }
					team = { this.state.team }
					location = { this.state.location }
					department = { this.state.department }
					resetFilters = { this.resetFilters.bind(this) }
					referer = "https://www.gojek.io/"
					showHeadings = { true }
				/>
      		</div>
    	);
  	}
}

export default Careers;