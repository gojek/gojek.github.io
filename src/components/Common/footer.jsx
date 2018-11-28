import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer className="bg-black text-white py-5">
				<div className="container">
					<div className="row text-uppercase">
						<div className="col-md-4">
							<a href="/">
								<img src="../../images/gojek-logo-footer.png" alt="GO-JEK LOGO" title="GO-JEK" />
							</a>
						</div>
						<div className="col-md-8">
							<div className="row font-xs">
								<div className="col-md-3 d-none d-md-block">
									<ul className="list-unstyled">
										<li className="pb-4">
											<a href="/">Home</a>
										</li>
										<li className="pb-4">
											<a href="/open-source/">Open Source</a>
										</li>
										
									</ul>
								</div>
								<div className="col-md-3 d-none d-md-block">
									<ul className="list-unstyled">
										<li className="pb-4">
											<a href="/careers/">Careers</a>
										</li>
										<li className="pb-4">
											<a href="/news/">News</a>
										</li>

									</ul>
								</div>
								<div className="col-md-2 d-none d-md-block font-xs">
									<ul className="list-unstyled">
										<li className="pb-4 ">
											<a href="/blog/">Blog</a>
										</li>
										
										<li className="pb-4 ">
											<a href="/contact/">Contact</a>
										</li>
									</ul>
								</div>
								<div className="col-md-4  d-none d-md-block px-0">
									<ul className="list-unstyled">
										<li className="pb-4 text-left mx-0 ">
											<a className="green-apply-btn btn btn-success raleway-bold rounded-1 text-white px-lg-5 px-md-3" href="/careers#openPositions">Open Positions</a>
											
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<span className="copyright-text">Connect with us on</span>
							<ul className="list-inline">
								<li className="list-inline-item">
									<a href="https://www.facebook.com/gojektech
		                            " target="_blank">
										<i className="fa fa-facebook-official" aria-hidden="true"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://twitter.com/gojektech
		                            " target="_blank">
										<i className="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://www.linkedin.com/company/go-jek-india/
		                            " target="_blank">
										<i className="fa fa-linkedin-square" aria-hidden="true"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://www.instagram.com/gojek.tech/
		                            " target="_blank">
										<i className="fa fa-instagram" aria-hidden="true"></i>
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://www.youtube.com/channel/UCRQzgsSnYyxzhYGxLddKgEw/featured
		                            " target="_blank">
										<i className="fa fa-youtube-play" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-8 text-md-right text-left font-xs">
							<span className="invisible">Copyright text</span>
							<p className="text-uppercase align-middle copyright-text">
								<strong>&copy; 2018 All rights reserved</strong>
							</p>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;