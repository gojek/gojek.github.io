import React from "react"
import { Helmet } from "react-helmet";
import Link, { navigateTo } from 'gatsby-link';

import * as PropTypes from "prop-types"

class PostTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	static propTypes = {
    	data: PropTypes.shape({
      		jobsJson: PropTypes.object.isRequired,
    	}),
	}

	handleClick (evt) {
		navigateTo({
			pathname: '/apply',
			state: {
			  id: this.props.data.jobsJson.id,
			  path: this.props.data.jobsJson.positionSlug,
			  name: this.props.data.jobsJson.position,
			  place:  this.props.data.jobsJson.place,
			  jobId: this.props.data.jobsJson.jobId,
			  referer: this.props.location.state === undefined ? 'https://www.gojek.io/' : this.props.location.state.referer
			},
		  })
	}

	getTabHeading(key) {
		switch(key) {
			case 'responsibilities': 
				return "Responsibilities";
			case 'experience':
				return "EXPERIENCE & SKILLS"
			case 'about':
				return "About you"
			case 'overview':
				return "Overview"
			case 'expectations':
				return "Expectations"
			case 'whatWillYouDo':
				return "What will you do"
			case 'whatWillYouNeed':
				return "What will you need"
			case 'whatWouldbeaBonus':
				return "What would be a bonus"
			case 'projects':
				return "Projects you could work on"
			default:
				return "About";
			
		}
	}

	render() {
		const { jobsJson } = this.props.data;
		return (
			<div>
				<Helmet>
					<title> { jobsJson.title } </title>
					<meta name="description" content={ jobsJson.metaDescription } />
					<meta name="twitter:description" content={ jobsJson.metaDescription } />
					<meta property="og:description" content={ jobsJson.metaDescription } />
				</Helmet>

				<section className="first-section">
					<img className="img-fluid" src="../../images/careers/job-illustration.png" />
				</section>
				<section className="">
					<div className="container py-5">
						<div className="row">
							<div className="col-lg-10 offset-lg-1">
								<h1 className="h2 font-xl text-left text-black raleway-extrabold font-xl text-black mb-1">{jobsJson.position}</h1>
								<div className="text-left">
											<button
										onClick={ this.handleClick}
										target = "_blank"
										className = "text-center btn bg-green text-white raleway-bold text-uppercase my-1 font-md custom-btn"
									>
										APPLY NOW
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="">
					<div className="container">
						<div className="row">
							<div className="col-lg-10 offset-lg-1">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
								{jobsJson.headings.map((heading, key) => {
									return(
										<li className="nav-item" key={key} >
											<a className={"nav-link jd-tab roboto-bold text-uppercase " + (key === 0 ? 'active' : '')} id={`#${heading}-tab`} data-toggle="tab" href={`#${heading}`} role="tab" aria-controls={`${heading}`}
											aria-selected="true">{this.getTabHeading(heading)}</a>
										</li>
									)
								}
								)}
								</ul>
							</div>
						</div>

						<div className="tab-content" id="myTabContent">
							{jobsJson.headings.map((heading, key) => {
								return(
									<div key={key} className={"tab-pane fade show " + (key === 0 ? 'active' : '')} id={`${heading}`} role="tabpanel" aria-labelledby={`${heading}-tab`}>
										<section className="roboto-regular">
											<div className="container">
												<div className="row justify-content-center">
													<div className="col-lg-10">
														<div className="row pt-4"> 
														{
															(jobsJson.jobId === 'fk019mp' && heading === 'responsibilities') &&
															<p>{ jobsJson.responsibilitiesOverview }</p>
														}
														{
															(heading !== "overview") &&
															<ul className="text-green" >
																<div className="row" >
																	{
																		jobsJson[heading].map((value, key) => {
																		return(
																			<div className="col-md-6 col-sm-12  pr-5" key={key} >
																				<li key = {key} className="py-2 font-md" >
																					<span className="font-sm text-dark" > {value}</span>
																				</li>
																				
																				
																			</div>
																		)}
																	)}
																	
																</div>
															</ul>
															}
															{
																heading === "overview" &&
																<div className="col-12">
																	<p className="pl-3  	text-lg-left 
																	font-sm">
																		{jobsJson.overview}
																	</p>
																	<div className="row">
																	<div className="col-md-6">
																	<p className="pl-3 font-sm  text-lg-left text-center ">{jobsJson.rolesOverview} </p>
																	{/* {
																		jobsJson.roles.length > 0 && 
																	
																		<ul className=" text-green">
																			{
																				jobsJson.roles.map((role, key) => (
																					<li className="py-2 font-md" key={key}>
																						<span className="font-sm text-dark" > {role} </span>
																					</li>
																				))
																			}
																		</ul>
																	} */}
																		</div>
																		<div className="col-md-6">
																	<p className="pl-3 font-sm  text-lg-left text-center ">{jobsJson.scopeOverview} </p>
																	{/* {
																		jobsJson.scope.lenght > 0 &&
																		<ul className=" text-green">
																			{
																				jobsJson.scope.map((role, key) => (
																					<li className="py-2 font-md" key={key}>
																						<span className="font-sm text-dark" > {role} </span>
																					</li>
																				))
																			}
																		</ul>
																		} */}
																		</div>
																	</div>
																	</div>
																	
															}

														</div>
														{
															(jobsJson.jobId !== 'fk019mp' && heading+'Overview' !== "")  &&
															<p className="font-md text-dark">
																{ jobsJson[heading+'Overview'] }
															</p>
														}
													</div>
												</div>
											</div>
										</section>
									</div>

									
								)}
							)}													
						</div>
					</div>
				</section>

				<section className="bg-green roboto-regular mt-5">
					<div className="container py-5">
						<h1 className="h2 font-xl  text-center text-white">Think you fit the bill?</h1>
						<div className="text-center ">
											<button
										onClick={ this.handleClick}
										target = "_blank"
										className = " text-center btn bg-white text-green raleway-bold text-uppercase my-1 font-md challenging-button custom-btn"
									>
										APPLY NOW
									</button>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default PostTemplate

export const pageQuery = graphql`
  query PostPage($positionSlug: String!) {
	# Select the post which equals this slug.
    jobsJson(positionSlug: {eq: $positionSlug }) {
		id
	  	positionSlug
		link
		place
		responsibilities
		position
		jobId
		experience
		headings
		about
		responsibilitiesOverview
		rolesOverview
		scopeOverview
		overview
		expectations
		whatWillYouDo
		whatWillYouNeed
		whatWouldbeaBonus
		projects,
		metaDescription,
		title
		}
	}
`