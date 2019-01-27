import React, { Component } from 'react'
import { Helmet } from "react-helmet";

import Banner from '../components/Careers/Banner/index';
import BehindTheScenes from '../components/Careers/BehindTheScenes/index';
import Advantages from '../components/Careers/Advantages/index';
import EmployeeStories from '../components/Careers/EmployeeStories/index';
import CountBanner from '../components/Careers/CountBanner/CountBanner';
import CareerLocation from '../components/Careers/CareerLocation/CareerLocation';
import SearchBar from '../components/Careers/searchBar/searchBar';
import jobs from '../../data/jobs.json';
import { Link } from 'react-scroll';


var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

class Careers extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: "",
			team: "",
			location: "",
			department: "",
			// locationId: '1',
			locationName: 'All',
			inputText: '',
			places: [],
			searchResult: null
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		let places = [];
		for (let i = 0; i < jobs.length; i++) {
			let count = 0;
			if (places.includes(jobs[i].place)) {
				count = count + 1;
			}
			if (count === 0) {
				places.push(jobs[i].place)
			}
		}

		this.setState({
			places: places
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({
			keyword: document.getElementById("keyword").value,
			location: document.getElementById("location").value === 'all' ? "" : document.getElementById("location").value,
			team: document.getElementById("team").value === 'all' ? "" : document.getElementById("team").value,
			department: document.getElementById("department").value === 'all' ? "" : document.getElementById("department").value
		});
		scroller.scrollTo('myScrollToElement', {
			smooth: "easeInOutQuint",
		});
	}

	handleChange = evt => {
		if (evt.target.value === 'all') {
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

	onChangeInputText = (ev) => {
		const targetvalue = ev.target.value
		this.setState({
			inputText: targetvalue,
			searchResult: jobs.filter(
				(data, i) => {
					if (data.position.toLowerCase().includes(targetvalue.toLowerCase()) && targetvalue !== ''&& (data.place.toLowerCase() === this.state.locationName.toLowerCase() || this.state.locationName.toLowerCase() === 'all')) {
						return data
					}
				}
			)
		})
	}

	onClickLocation = (name) => {

		this.setState({
			locationName: name,
			searchResult: jobs.filter(
				(data, i) => {
					if (data.position.toLowerCase().includes(this.state.inputText.toLowerCase()) && this.state.inputText !== '' && (data.place.toLowerCase() === name.toLowerCase() || name.toLowerCase() === 'all')) {
						return data
					}
				}
			)
		})

	}

	render() {

		return (
			<div className="first-section">
				<Helmet>
					<title>GO-JEK Careers: Check out the current job openings at GO-JEK Tech</title>
					<meta property="og:title" content="GO-JEK Careers: Check out the current job openings at GO-JEK Tech" />
					<meta name="twitter:title" content="GO-JEK Careers: Check out the current job openings at GO-JEK Tech" />
					<meta name="description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
					<meta name="twitter:description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
					<meta property="og:description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
				</Helmet>

				{/* Main banner image */}
				<section>
					<div className="container-fluid px-0 careers-main-banner h-100 ">
						<div className="d-flex flex-row flex-wrap justify-content-center align-items-center position-relative" style={{ height: '100vh' }}>
							<SearchBar props={this.props} type="careers" places={this.state.places} searchResult={this.state.searchResult} onChangeInputText={(ev) => this.onChangeInputText(ev)}
								onClickLocation={(name) => this.onClickLocation(name)} locationName={this.state.locationName} inputText={this.state.inputText} textColor={`${this.state.searchResult !== null && this.state.searchResult.length !== 0 ? ' text-dark ' : ' text-white '}`} />

							<div className="position-absolute" style={{ bottom: '100px', left: '55%' }}>
								<Link
									to="career-banner-id"
									spy={true}
									smooth={true}
									className="scroll"
									offset={-50}
								>
									<i className="fa fa-2x fa-chevron-down text-white scroll"></i>
								</Link>
							</div>
						</div>
					</div>
				</section>


				<CountBanner props={this.props} bannerImage="careers-second-banner" height="300px" />

				<BehindTheScenes />

				<CareerLocation props={this.props} />

				<Advantages />

				<EmployeeStories
					keyword={this.state.keyword}
					team={this.state.team}
					location={this.state.location}
					department={this.state.department}
					resetFilters={this.resetFilters.bind(this)}
					referer="https://www.gojek.io/"
					showHeadings={true}
				/>
			</div>
		);
	}
}

export default Careers;