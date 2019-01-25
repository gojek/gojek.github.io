import React, { Component } from 'react';
import data from '../data.json';
import TestApply from '../../../pages/apply.js';

class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: '1',
            openPositionId: 'null',
        };
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
			case 'requirements':
				return "Requirements"
			default:
				return "About";
			
		}
	}

    render() {
		const { positionName, positionData } = this.props;
        const applyData = {
            'id': positionData[0].id,
            'path': positionData[0].positionSlug,
            'name': positionData[0].position,
            'place':  positionData[0].place,
            'jobId': positionData[0].jobId,
            'referer': 'https://www.gojek.io/'
        }
       
        return (
            <div className="px-1 col-12 text-left mb-3">
					<div className="container  border-success custom-box-shadow">
					<span onClick = {this.props.onClickCloseButton} className="float-right scroll"><i className="fa fa-times"></i></span>
						<div className="row mt-4">
							<div className="col-12">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
								{positionData[0].headings.map((heading, key) => {
									return(
										<li className="nav-item" key={key} >
											<a className={"nav-link jd-tab roboto-bold text-uppercase " + (key === 0 ? 'active' : '')} id={`#${heading}-tab`} data-toggle="tab" href={`#${heading}`} role="tab" aria-controls={`${heading}`}
											aria-selected="true">{this.getTabHeading(heading)}</a>
										</li>
									)
								}
								)}
								{
									positionData[0].jobId==='fk0juf6'&&
									<li>
											<a className={"nav-link jd-tab roboto-bold text-uppercase "} 
											id={`#platformSpecificRequirements-tab`} data-toggle="tab" href={`#platformSpecificRequirements`} role="tab" aria-controls={`platformSpecificRequirements`}
											aria-selected="true"> Requirements</a>
									</li>
								}
								</ul>
							</div>
						</div>

						<div className="tab-content" id="myTabContent">
							{positionData[0].headings.map((heading, key) => {
								return(
									<div key={key} className={"tab-pane fade show " + (key === 0 ? 'active' : '')} id={`${heading}`} role="tabpanel" aria-labelledby={`${heading}-tab`}>
										<section className="roboto-regular">
											<div className="container">
												<div className="row justify-content-center">
													<div className="col-12">
														<div className="row pt-4"> 
														{
															(positionData[0].jobId === 'fk019mp' && heading === 'responsibilities') &&
															<p>{ positionData[0].responsibilitiesOverview }</p>
														}
														{
															(heading !== "overview") &&
															<ul className="text-green" >
																<div className="row" >
																	{
																		positionData[0][heading].map((value, key) => {
																		return(
																			<div className="col-md-6 col-sm-12  pr-5" key={key} >
																			{
																				(key===0&&heading === 'requirements'&& (positionData[0].jobId==='fk0j3ij'||positionData[0].jobId==='fk0j3ix'))&&
																				<li className="py-2 font-md">
																				<span className="font-sm text-dark" > Your toolkit:</span>
																				<ul>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Microservices (HTTP &amp; GRPC)</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Experience in Golang, Ruby, Clojure, Java (and a willingness to learn others).
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Postgresql
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Devops: Chef, Ansible, Docker, Kubernetes
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Rails, Javascript
																						</span>
																					</li>
																					<li className="py-2 font-md">
																						<span className="font-sm text-dark" > Kafka, Spark, Flink
																						</span>
																					</li>
																				</ul>
																			
																			</li>
																			}
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
																		{positionData[0].overview}
																	</p>
																	<div className="row">
																	<div className="col-md-6">
																	<p className="pl-3 font-sm  text-lg-left text-center ">{positionData[0].rolesOverview} </p>
																	{/* {
																		positionData[0].roles.length > 0 && 
																	
																		<ul className=" text-green">
																			{
																				positionData[0].roles.map((role, key) => (
																					<li className="py-2 font-md" key={key}>
																						<span className="font-sm text-dark" > {role} </span>
																					</li>
																				))
																			}
																		</ul>
																	} */}
																		</div>
																		<div className="col-md-6">
																	<p className="pl-3 font-sm  text-lg-left text-center ">{positionData[0].scopeOverview} </p>
																	{/* {
																		positionData[0].scope.lenght > 0 &&
																		<ul className=" text-green">
																			{
																				positionData[0].scope.map((role, key) => (
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
															(positionData[0].jobId !== 'fk019mp' && heading+'Overview' !== "")  &&
															<p className="font-md text-dark">
																{ positionData[0][heading+'Overview'] }
															</p>
														}
													</div>
												</div>
											</div>
										</section>
									</div>

									
								)}
							)}	
							{
								positionData[0].jobId === 'fk0juf6'&&
								<div  className={"tab-pane fade show " } id={`platformSpecificRequirements`} role="tabpanel" aria-labelledby={`platformSpecificRequirements-tab`}>
							<section className="roboto-regular">
								<div className="container">
									<div className="row justify-content-center">
									<div className="col-lg-10">
										<div className="row pt-4"> 
										<p className="pl-4 text-green font-lg mb-0 font-weight-bold">Android</p>
										<ul className="text-green" >
												<div className="row" >
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Passionate about the Android ecosystem and the history and design principles behind it
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Experience with Kotlin and Android SDK
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Good understanding of architecture principles, code organisation and system design
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Deep knowledge of Android UI fundamentals and experience with graphics APIs (Canvas, Paint, PorterDuffModes etc)
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Experience in creating custom views 
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Ability to create UIs programatically or via XML
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Ability to write readable, testable, modular code
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Experience with commonly used popular Android libraries is a plus
															</span>
														</li>
													</div>
												</div>
											</ul>

											<p className="pl-4 text-green font-lg mb-0 font-weight-bold">iOS</p>
											<ul className="text-green" >
												<div className="row" >
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Passionate about the iOS/macOS ecosystem and appreciation for the design and programming principles behind them
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Good understanding of architecture principles, code organisation and system design
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Experience in Swift programming, Cocoa, Xcode and the iOS SDK
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Deep knowledge of UIKit fundamentals. Bonus if you’ve worked with UIDynamics, SceneKit and QuartzCore
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Ability to develop UIs programatically or via XIB
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Ability to write readable, testable, modular code
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Experience with commonly used popular iOS libraries is a plus
															</span>
														</li>
														
													</div>
													
												</div>
											</ul>

											<p className="pl-4 text-green font-lg mb-0 font-weight-bold">Web</p>
											<ul className="text-green" >
												<div className="row" >
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Passionate about web frontend
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Autodidact capable of learning slow and/or fast
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Strong understanding of foundational web technologies like HTML, CSS and JavaScript
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Knowledge of how browsers work is essential
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Extremely well versed with the JavaScript language in general along with transpiling tools like Babel, module bundlers like webpack, parcel
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Some experience with React and its ecosystem
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Some experience with nodejs &amp; npm
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Strong web design skills
															</span>
														</li>
														
													</div>
													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" > Strong documentation skills
															</span>
														</li>
													</div>

													<div className="col-md-6 col-sm-12  pr-5" >
														<li className="py-2 font-md" >
															<span className="font-sm text-dark" >Attention to detail
															</span>
														</li>
													</div>
													
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
                    <TestApply applyData={applyData}/>
					</div>
            </div>
        )
    }
}

export default Description