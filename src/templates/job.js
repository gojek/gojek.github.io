import React from "react"
import { Helmet } from "react-helmet";
import Link, { navigateTo } from 'gatsby-link';

import * as PropTypes from "prop-types"
import Bootstrap from 'bootstrap';

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
			  place:  this.props.data.jobsJson.place
			},
		  })
	  }

	render() {
		const { jobsJson } = this.props.data;
		return (
			<div>
				<Helmet>
					<title> GO-JEK Job Description </title>
				</Helmet>

				<section className="">
					<img className="img-fluid" src="../../images/careers/job-illustration.png" />
				</section>
				<section className="">
					<div className="container py-5">
						<div className="row">
							<div className="col-lg-10 offset-lg-1">
								<h1 className="h2 font-xl text-left text-black">{jobsJson.position}</h1>
								<div className="text-left">
									<a href={jobsJson.link} target="_blank" className=" text-center btn bg-green text-white raleway-bold text-uppercase my-1 font-md challenging-button custom-btn">APPLY NOW </a>
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
									{
										(jobsJson.overview.length > 0) &&
										<li className="nav-item">
											<a className="nav-link active jd-tab roboto-bold" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview"
												aria-selected="true">OVERVIEW</a>
										</li>
									}
									{
										jobsJson.responsibilities !== "" &&
										<li className="nav-item">
											<a
												className={"nav-link jd-tab roboto-bold " + (jobsJson.overview.length == 0 ? 'active' : '')}
												id="responsibilities-tab" data-toggle="tab" href="#responsibilities" role="tab"
												aria-controls="responsibilities" aria-selected="true">RESPONSIBILITIES</a>
										</li>
									}
									{
										jobsJson.about !== "" &&
										<li className="nav-item">
											<a className="nav-link jd-tab roboto-bold" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills"
												aria-selected="false">EXPERIENCE & SKILLS</a>
										</li>
									}

								</ul>
							</div>
						</div>

						<div className="tab-content" id="myTabContent">
							{
								(jobsJson.overview.length > 0) &&
								<div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
									<section className="roboto-regular">
										<div className="container">
											<div className="row justify-content-center">
												<div className="col-lg-10">
													<div className="row pt-4 ">
														<div className="col-lg-6 px-0">
															<div className="d-flex flex-column">

																<div className="col-sm-12">
																	<p className="pl-3  text-lg-left text-center  font-sm">
																		{jobsJson.overview}
																	</p>
																	<p className="pl-3 font-sm  text-lg-left text-center ">In other words, it will need </p>
																	<ul className="text-green">
																		{
																			jobsJson.roles.map((role, key) => (
																				<li className="py-2 font-md" key={key}>
																					<span className="font-sm text-dark" > {role} </span>
																				</li>
																			))
																		}
																	</ul>
																</div>
															</div>
														</div>
														<div className="col-lg-6  px-0">
															<div className="d-flex flex-column">
																<div className="col-sm-12">
																	<p className="font-sm  text-lg-left text-center">
																		Some of the scope is plain unpredictable, though is always in the context of scaling technology.
																	</p>
																	<ul className="text-green">
																		{jobsJson.scope.map((scope, key) => (
																			<li className="py-2 font-md" key={key}>
																				<span className="font-sm text-dark">
																					{scope}
																				</span>
																			</li>
																		))}

																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							}
							{
								jobsJson.responsibilities !== "" &&
								<div className="tab-pane fade show active" id="responsibilities" role="tabpanel" aria-labelledby="responsibilities-tab">
									<section className="roboto-regular">
										<div className="container">
											<div className="row justify-content-center">
												<div className="col-lg-10">
													<div className="row pt-4">

														<ul className="text-green" >
															<div className="row" >
																{
																	jobsJson.responsibilities.map((responsibility, key) => (
																		<div className="col-md-6 col-sm-12  pr-5" key={key} >
																			<li className="py-2 font-md" >
																				<span className="font-sm text-dark" > {responsibility} </span>
																			</li>
																		</div>
																	))
																}
															</div>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							}
							{
								jobsJson.about !== "" &&
								<div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
									<section className="roboto-regular">
										<div className="container">
											<div className="row justify-content-center">
												<div className="col-lg-10">
													<div className="row pt-4">
														
														<ul className="text-green" >
															<div className="row" >
																{
																	jobsJson.about.map((about, key) => (
																		<div className="col-md-6 col-sm-12  pr-5" key={key} >
																			<li className="py-2 font-md" >
																				<span className="font-sm text-dark" > {about} </span>
																			</li>
																		</div>
																	))
																}
															</div>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							}
						</div>
					</div>


				</section>

				<section className="bg-green roboto-regular">
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
				roles
				scope
				overview
				about
			  }
			}
`