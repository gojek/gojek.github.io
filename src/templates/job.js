import * as PropTypes from "prop-types"
import React from "react"

class PostTemplate extends React.Component {
  	static propTypes = {
    	data: PropTypes.shape({
      		jobsJson: PropTypes.object.isRequired,
    	}),
	}
	  
  	render() {
		const { jobsJson } = this.props.data;

		return (
			<div className="first-section">
				<section className="bg-green first-section font-neosans">
					<div className="container py-5">
						<h1 className="h2 font-xl  text-center text-white">{ jobsJson.position }</h1>
						<div className="text-center ">
							<a href={jobsJson.link} target="_blank" className=" text-center btn bg-white text-green neosans-bold text-uppercase my-1 font-md challenging-button custom-btn">APPLY NOW </a>
						</div>
					</div>
				</section>

				<section className="font-neosans">
					<div className="container">
						<div className="row justify-content-center">
							< div className = "row pt-4" > 
								{/* If Overview is not empty show overview */}
								{
									jobsJson.overview !== "" &&
									<div className="col-md-6 col-sm-12 px-0">
										<div className="d-flex flex-column">
											<div className="col-12 pb-0">
												<p className="font-xl-l pl-4 neosans-bold text-black text-lg-left text-center">
													OVERVIEW
												</p>
											</div>

											<div className="col-md-10 col-sm-12 font-neosans ">
												<p className="pl-3  text-lg-left text-center  font-sm">
													{jobsJson.overview}
												</p>
												
												{
													(jobsJson.roles.length > 0) &&
													<div>
														<p className="pl-3 font-sm  text-lg-left text-center ">In other words, it will need </p>

														<ul className = "text-green" >
															{
																jobsJson.roles.map((role, key) => ( 
																	<li className = "py-2 font-md"  key= { key }>
																		<span className = "font-sm text-dark" > { role } </span> 
																	</li> 
																))
															} 
														</ul> 
													</div>
												}
											</div>
										</div>
									</div>
								}

								{/* If responsibilities is not empty */}
								{
									(jobsJson.scope.length > 0) &&
									<div className="col-lg-6 mt-md-5 mt-sm-2 px-0">
										<div className="d-flex flex-column pt-3">
											<div className="col-md-10 col-sm-12 font-neosans">
												<p className="font-sm  text-lg-left text-center">
													Some of the scope is plain unpredictable, though is always in the context of scaling technology.
												</p>
												<ul className="text-green">
													{jobsJson.scope.map((scope, key) => (
														<li className="py-2 font-md" key = { key }>
															<span className="font-sm text-dark">
																{scope}
															</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								}
							</div>

							{/* Responsibilities */}
							<div className="row pt-4">
								<div className = "d-flex flex-column" >
									<div className = "col-12 pb-0" >
										<p className = "font-xl-l pl-4 neosans-bold text-black" >
											Responsibilities 
										</p> 
									</div> 
								</div> 
								<ul className = "text-green" >
									<div className = "row" > 
										{
											jobsJson.responsibilities.map((responsibility, key) => ( 
												<div className = "col-md-6 col-sm-12  pr-5" key= { key } >
													<li className = "py-2 font-md" >
														<span className = "font-sm text-dark" > { responsibility} </span>
													</li> 
												</div>
											))
										} 
									</div> 
								</ul>
							</div>

							{/* About Section */}
							<div className="row pt-4">
								<div className = "d-flex flex-column" >
									<div className = "col-12 pb-0" >
										<p className = "font-xl-l pl-4 neosans-bold text-black" >
											{ jobsJson.id === 'program-manager' ? "Experience & Skills" : "About You" }
										</p> 
									</div> 
								</div> 
								<ul className = "text-green" >
									<div className = "row" > 
										{
											jobsJson.about.map((about, key) => ( 
												<div className = "col-md-6 col-sm-12  pr-5" key= { key } >
													<li className = "py-2 font-md" >
														<span className = "font-sm text-dark" > { about} </span> 
													</li> 
												</div>
											))
										} 
									</div> 
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-green font-neosans">
					<div className="container py-5">
						<h1 className="h2 font-xl  text-center text-white">Think you fit the bill?</h1>
						<div className="text-center ">
							<a href={jobsJson.link} target="_blank" className=" text-center btn bg-white text-green neosans-bold text-uppercase my-1 font-md challenging-button custom-btn">APPLY NOW </a>
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
    jobsJson(positionSlug: { eq: $positionSlug }) {
	  id
	  positionSlug
      link
	  responsibilities
	  position
	  roles
	  scope
	  overview
	  about
    }
  }
`