import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-scroll';
import OpenPositions from '../components/Careers/OpenPositions/index'
import Card from '../components/GoMakeImpact/index';
import { Player } from 'video-react';

class GoMakeImpact extends Component {
    render() {
        return(
            <div className="first-section">

                <Helmet>
					<title> GO-JEK - Gomakeimpact </title>
                    <meta content="yes" name="apple-mobile-web-app-capable" />
					<meta name="description" content="GO-JEK is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire." />
				</Helmet>

                {/* impact on Scale section */}
                <section className="first-section">
                    <div className="d-flex align-items-center justify-content-center h-100">
                    <picture>
                        <source className="relative-position" media="(max-width: 425px)" srcSet = "../../images/gomakeimpact/impact-on-scale-banner-mobile.png" />
                        <img className="img-fluid" src="../../images/gomakeimpact/impact-on-scale-banner.jpg" alt="Impact on scale - GO-JEK" />
                    </picture>
                        
                        <div className="text-block text-white text-center pt-5 mt-5 position-absolute">
                            <h1 className="text-uppercase mt-lg-5 mt-md-0 mt-5 pb-3 raleway-extrabold open-position-heading custom-letter-spacing">
                                Impact at Scale
                            </h1>
                            <p className="roboto-regular px-3 px-md-0 font-md" style={{ letterSpacing: "0.8px" }}>
                                At GO-JEK, everything is big. Whether it's engineering, product or design, our platform is filled with
                                challenges that are at scale, new and complex. See how GO-JEK is changing the lives of millions of
                                people in Indonesia.
                            </p>
                        </div>
                    </div>
                </section>
                {/* end impact on Scale section */}

                <section className="position-relative" id="about">
                <Link 
                    to="about" 
                    spy={true} 
                    smooth={true}
                    className="scroll"
                    offset={-50}
                >
                    <i className="fa fa-chevron-down text-success bg-white shadow  position-absolute rounded-circle scroll-down d-none d-md-block"></i>
                </Link>
                    
                    <h1 className="text-uppercase text-center h1 py-lg-5 pb-md-4 pt-md-5 pt-4 pb-3 text-dark raleway-extrabold">
                        WHO ARE WE?
                    </h1>
                    <div className="gomake-impact-bg who-we-are text-white py-5">
                        <div className="row justify-content-center mx-0 py-md-5 py-0">
                            <p className="text-block text-center roboto-bold px-3 px-md-0 font-md" style = {{ lineHeight: "2rem" }}>
                                We’re GO-JEK, a consumer technology company with a mission to leapfrog
                                Indonesia and the world into the digital era. Through our consumer app, which features over 18 products from
                                transportation to mobile payments and food delivery, we endeavor to improve the livelihoods of our consumers, drivers
                                and merchant partners alike. To date, we have impacted 260M lives in over 50 cities in Indonesia through 1M+ partners.
                                But we’re just getting started!
                            </p>
                        </div>
                        <hr className="bg-white my-lg-5 my-0 custom-hr" />
                        <div className="container pt-5 pb-md-5  text-center">
                            <div className="row">
                                <div className="col-6 col-md-3 pb-3 pb-md-0">
                                    <h1 className="h3 roboto-black">16M+ KM</h1>
                                    <p className="roboto-bold" >covered per day</p>
                                </div>
                                <div className="col-6 col-md-3 pb-3 pb-md-0">
                                    <h1 className="h3 roboto-black">$25M+</h1>
                                    <p className="roboto-bold">in driver tips</p>
                                </div>
                                <div className="col-6 col-md-3 pb-3 pb-md-0">
                                    <h1 className="h3 roboto-black">1M+</h1>
                                    <p className="roboto-bold">partners</p>
                                </div>
                                <div className="col-6 col-md-3 pb-3 pb-md-0">
                                    <h1 className="h3 roboto-black">1B+</h1>
                                    <p className="roboto-bold">completed orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <Player
                            playsInline
                            poster="../../images/gomakeimpact/video-poster.png"
                            src="../../images/gomakeimpact/gomakeimpact.mp4"
                        />
                </section>
                {/* End Who we are section */}

                 {/* Go-Jek people */}                    
                <Card />
                {/* End Section */}

                <section>
                    <div className="d-flex align-items-center justify-content-center">
                        <picture>
                            <source className="relative-position" media="(max-width: 425px)" srcSet = "../../images/gomakeimpact/test-mobile.png" />
                            <img className="img-fluid" src="../../images/gomakeimpact/test.png" alt="Impact on scale - GO-JEK" />
                        </picture>
                        <div className="position-absolute text-white text-center">
                            <h1 className="text-uppercase mt-5 pt-5 pb-3 raleway-extrabold custom-letter-spacing text-max" >
                                can’t wait to make an impact?
                            </h1>
                            <Link 
                                to="jobs" 
                                spy={true} 
                                smooth={true}
                                className="btn btn-success btn-lg text-uppercase raleway-bold"
                                offset={-50}
                            >
                                see our job openings
                            </Link>
                        </div>
                    </div>
            </section>
        {/* <!-- End Go-Jek people --> */}
        {/* Careers section */}
        <section id="jobs">
                <h1 className="text-uppercase text-center h1 py-lg-5 py-md-3 pt-4 pb-3 text-dark raleway-extrabold custom-letter-spacing">Drive impact at scale</h1>
            <div className="job-openings pt-5" id="super-jobs">
                <div className="row mx-0 mb-4 justify-content-center">
                    
                    <p className="text-block text-dark text-center roboto-regular  px-3 px-md-0 font-md" style={{ letterSpacing:"0.8px" }}>We're looking for Engineers, Data Scientists, Product Managers, Designers and
                        Marketers who have a passion for changing the world. Send us your CV with a brief story of why positive change is important to
                        you.</p>

                </div>
                <OpenPositions
                    team = ""
                    location = ""
                    keyword = ""
                    department = ""
                    resetFilters = ""
                    referer = "gojek.io/gomakeimpact"
                    showHeadings = { false }
                />
                <img className="img-fluid" src="../images/gomakeimpact/careers-bg.png" alt="Impact on scale - GO-JEK" />
            </div>
        </section>        

        {/* End careers section */}
        </div>
        );
    }
}

export default GoMakeImpact; 