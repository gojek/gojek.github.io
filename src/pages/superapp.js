import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-scroll';
import banner from '../components/videos/banner.mp4';
import superApp from '../components/videos/superApp.mp4';
import superApp6600 from '../components/videos/superApp-6600.mp4';
import superAppMarketShare from '../components/videos/superapp-market-share.mp4';
import superApp16Million from '../components/videos/superapp-16.5-million.mp4';
import superApp5Billion from '../components/videos/superApp-5 Billion.mp4';
import superAppMerchants from '../components/videos/superApp-merchants.mp4';
import superApp350Million from '../components/videos/superApp-350-million.mp4';
import superAppOneIn from '../components/videos/superapp-1-in.mp4';
import superApp1million from '../components/videos/superapp-1-million.mp4';
import superAppFirst from '../components/videos/superapp-first.mp4';
import bg5 from '../../static/images/superApp/bg-5.svg';
import bg1 from '../../static/images/superApp/bg-1.svg';
import bg3 from '../../static/images/superApp/bg-3.svg';
import bg4 from '../../static/images/superApp/bg-4.svg';
import '../layouts/superApp.css';
import OpensPositions from '../components/Careers/OpenPositions';

class SuperApp extends Component {
    render() {
        return (
            <section className="first-section">
                <section id="home">
                    <div className="embed-responsive embed-responsive-16by9 embed-video">
                        <video width="100%" height="100%" autoPlay loop muted>
                            <source src={banner} type="video/mp4" />
                        </video>
                    </div>

                </section>
                <section className="pt-0 pt-md-5 background" id="super-app">
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center pt-md-0 pt-5">
                        <div className="col-md-5 order-1 order-sm-1 pt-5 pt-md-0">
                            <h2 className="section-sub-head text-center text-md-left">What is a SUPER APP?</h2>
                            <h1 className="section-head text-center text-md-left">GOJEK. A Super App.
                                <br />One App. Many use cases.</h1>
                            <p className="section-desc text-center text-md-left">A Super App is many apps within an umbrella app. It’s an
                              Operating System that unbundles the tyranny of apps. It’s a portal to the internet for a mobile-first
                              generation
                            </p>
                            <a className="btn btn-outline-success btn-cta d-none d-md-block" target="_blank" href="https://blog.gojekengineering.com/what-is-a-super-app-9f4309c46eeb">Read
                            More</a>
                        </div>
                        <div className="col-md-5 order-2 order-sm-1 px-0">
                            <div className="embed-responsive embed-responsive-1by1 embed-video">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superApp} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row mx-0 justify-content-center mb-md-5">
                    <div className="col-md-10 text-align-center px-0">
                        <div className="embed-responsive embed-responsive-21by9 mt-5">
                            <iframe className="embed-responsive-item" title="superapp video" src="https://www.youtube.com/embed/2YdWTpw51sc"
                                allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <section id="super" className="mb-5">
                    <div className="row">
                        <img src={bg1} className="test d-none d-md-block" alt="background image" />
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 mt-0 pt-md-5 mx-0 pb-2 pb-5"
                        id="super-facts" style={{ backgroundColor: "#559d49" }}>
                        <div className="col-md-5 ml-0 ml-md-5 px-0 px-md-3">
                            <div className="embed-responsive embed-responsive-1by1 embed-video">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superApp6600} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col-md-5 ml-0 ml-md-5 text-center text-md-left py-0 py-md-5">
                            <h1 className="section-head pt-5 pt-md-0 text-white"> <span className="section-numb">6600x</span></h1>

                            <p className="section-desc text-white">We have 18 products from foodtech to fintech to hyper local delivery and
                              massage
                            services</p>
                            <p className="section-desc text-white">
                                Our Total order volume growth has risen by 6,600x since we started
                            services.</p>
                            <a className="btn btn-outline-light text-white btn-cta" href="#super-jobs">I want to work here!</a>
                        </div>
                    </div>


                    <div>
                        <img src={bg5} className="testLeft d-none d-md-block" alt="background image" />
                    </div>

                    <div className="d-none d-md-block">
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-5">
                            <div className="col-md-5 mt-5 pl-5 pl-md-3">
                                <h1 className="section-head"><span className="section-numb">$5</span> Billion</h1>
                                <p className="section-desc">More than $5 billion worth of online transactions have been made on the
                                  GOJEK platform.
                                </p>
                                <p className="section-desc">GO-PAY contributes to an overall 30% of ALL e-money transactions in
                                  Indonesia.
                                </p>
                                <p className="section-desc"><strong>Work with the startup empowering the digital economy</strong></p>
                                <a className="btn btn-outline-success  btn-cta" href="#super-jobs">Count me in!</a>
                            </div>
                            <div className="col-md-5">
                                <div className="embed-responsive embed-responsive-1by1 embed-video">
                                    <video width="100%" height="100%" autoPlay loop muted>
                                        <source src={superApp5Billion} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="text-white">
                        <div className="col-12 background d-block d-md-none px-0">
                            <div className="embed-responsive embed-responsive-16by9 embed-video mt-3">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superApp5Billion} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col-12 pb-0 pb-md-5 d-block d-md-none text-center">
                            <h1 className="section-head text-body pt-5">$5 Billion</h1>
                            <p className="section-desc">GO-PAY contributes to an overall 30% of ALL e-money transactions in Indonesia. Work
                              with the startup empowering the digital economy
                            </p>
                        </div>
                    </div>
                </section>

                <section className="background">
                    <div className="background row mx-0">
                        <div className="pb-5 col-md-12  px-0 px-md-0">
                            <div className="order-1 pt-0 ">
                                <div className="embed-responsive embed-responsive-16by9 embed-video">
                                    <video width="100%" height="100%" autoPlay loop muted>
                                        <source src={superApp16Million} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="order-2 order-sm-1 my-5  text-center text-md-left px-md-3">
                                <h1 className="section-head"><span className="section-numb">16.5</span> Million Kilometer</h1>
                                <p className="section-desc">We do 1.5x more daily rides than India’s largest taxi-sharing service.<br /> We cover
                                16.5 million km everyday. That’s 21 round trips to the moon and back.</p>
                                <p className="section-desc">
                                    <strong>Architect for the largest ride-sharing app.</strong>
                                </p>
                                <a className="btn btn-outline-success btn-cta d-none d-md-block" href="#super-jobs">How do I join?</a>
                            </div>
                        </div>
                    </div>



                    <div>
                        <img src={bg3} className="testr1 d-none d-md-block" alt="background image" />
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 pb-4" style={{ backgroundColor: "#559d49" }}>
                        <div className="col-md-5 ml-md-5 ml-0 px-0 pl-md-3">
                            <div className="embed-responsive embed-responsive-1by1 embed-video">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superAppMarketShare} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col-md-5 pt-4 ml-md-5 ml-0 text-center text-md-left">

                            <h1 className="section-head text-white pt-5 pt-md-0"><span className="section-numb">95%</span> Market Share</h1>
                            <p className="section-desc text-white">GO-FOOD has a 95% market share of all online food delivery providers in
                              Indonesia.
                            <br /> We’re one of the largest food delivery apps in the world doing significantly more orders than India’s largest food sharing service.
                            </p>
                            <p className="section-desc text-white">
                                <strong>Work with the fastest growing food-tech business in the world.</strong>
                            </p>
                            <a className="btn btn-outline-light btn-cta d-none d-md-block text-white" href="#super-jobs">Super interested!</a>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-5">
                        <div className="col-md-5 order-2 order-sm-1 pt-0 pt-5 pb-5 pb-md-0 text-center text-md-left">
                            <h1 className="section-head"><span className="section-numb">120,000+</span> merchants</h1>
                            <p className="section-desc">We have more than 120,000+ merchants on our platform.
                                 <br />85% of these merchants are small business, mom and pop stores who now have a wider audience to cater to.</p>
                            <p className="section-desc">
                                <strong>Code that creates jobs, opportunities, livelihoods</strong>
                            </p>
                            <a className="btn btn-outline-success btn-cta d-none d-md-block" href="#super-jobs">Work with us</a>
                        </div>
                        <div className="col-md-5 order-1 px-0 pl-md-5">
                            <div className="embed-responsive embed-responsive-1by1 embed-video">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superAppMerchants} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={bg4} className="testr2 d-none d-md-block" alt="backgrounfd image" />
                    </div>



                    <div className="background fact-6" style={{ backgroundColor: "#559d49", position: "relative" }}>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 pb-5">
                            <div className="col-md-5 ml-0 pl-md-5 px-0">
                                <div className="embed-responsive embed-responsive-1by1 embed-video px-0">
                                    <video width="100%" height="100%" autoPlay loop muted>
                                        <source src={superApp350Million} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                            <div className="col-md-5 ml-0 ml-md-5 text-center text-md-left">

                                <h1 className="section-head pt-5 pt-md-0 text-white"><span className="section-numb">350</span> Million</h1>
                                <p className="section-desc text-white">We process more than 350 million internal API calls every second.</p>
                                <p className="section-desc text-white">Our 12 engineers manage a million drivers.</p>
                                <p className="section-desc mb-0 text-white"><strong>We automate anything that requires manual work.</strong></p>
                                <a className="btn btn-outline-light btn-cta text-white" href="#super-jobs">Help us automate better</a>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mt-5 row mx-0 background new-fact">
                        <div className="pb-5 col-md-10 offset-md-1 px-0">
                            <div className="embed-responsive embed-responsive-16by9 embed-video d-md-block d-none">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superAppOneIn} type="video/mp4" />
                                </video>
                            </div>

                            <div className="embed-responsive embed-responsive-1by1 embed-video d-block d-md-none">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superAppOneIn} type="video/mp4" />
                                </video>
                            </div>
                            <div className="order-2 order-sm-1 my-5 col-md-10 offset-md-2 text-center text-md-left">
                                <h1 className="section-head"><span className="section-numb">1 </span>in <span className="section-numb">4</span> Have The
                                    <br />GOJEK Super App.</h1>
                                <p className="section-desc">One in ten Indonesians use our app every month. One in four have it installed. <br />To
                                    make this all work, we run one of the largest jruby, Java and go clusters in Asia.</p>
                                <p className="section-desc"><strong>Want to make big data look small, now is the chance.</strong></p>
                                <a className="btn btn-outline-success btn-cta d-none d-md-block" href="#">Make Data-driven decisions</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="background row mx-0">
                        <div className="pb-5 col-md-12 px-0">
                            <div className="order-1">
                                <div className="order-1">
                                    <div className="embed-responsive embed-responsive-16by9 embed-video">
                                        <video width="100%" height="100%" autoPlay loop muted>
                                            <source src={superApp1million} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className="order-2 order-sm-1 my-5 text-center text-md-left pl-md-3">
                                <h1 className="section-head"><span className="section-numb">1</span> Million+ drivers</h1>
                                <p className="section-desc">We have a million registered drivers on our platform.<br /> GOJEK had single-handedly
                                    moved unemployement numbers and improved wages.</p>
                                <p className="section-desc">
                                    <strong>We do more than 35 concurrent orders each second across all our 18 products.</strong>
                                </p>
                                <a className="btn btn-outline-success btn-cta d-none d-md-block text-uppercase" href="#super-jobs">Scale with us!</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={bg3} className="testr1 d-none d-md-block" alt="background image" />
                    </div>
                </section>

                <section id="super-jobs" style={{ backgroundColor: '#009a44' }}>
                    <div className="container py-5 text-center text-white">
                        <div className="spacer d-none d-md-block"></div>
                        <h1 className="sr-only ">Come help us build startups within a startup</h1>
                        <h2 className="">Come help us build startups within a startup</h2>
                        <p className="pt-2 pt-md-0">Not only is this extremely rewarding, it’s also immensely challenging.</p>
                        <a className="btn btn-outline-light text-white btn-cta d-none d-md-inline-block mt-1" href="#">Work with us!</a>
                        <a className="btn btn-outline-light text-white btn-cta d-inline-block d-md-none" href="#">I want to work here!</a>

                    </div>
                    <h2 className="section-sub-head text-center mb-4 text-white mt-3">We have no dearth of Hard Technical Problems™,
                    jobs below:</h2>
                    <div className="pb-5" >
                        <OpensPositions
                            type="superApp"
                            team=""
                            location=""
                            keyword=""
                            department=""
                            resetFilters=""
                            referer="gojek.io/superapp"
                            showHeadings={false}
                        />

                    </div>
                </section>

                <section>
                    <div className="row mx-0 justify-content-center mt-5">
                        <div className="col-md-8 text-align-center px-0">
                            <div className="embed-responsive embed-responsive-1by1 embed-video">
                                <video width="100%" height="100%" autoPlay loop muted>
                                    <source src={superAppFirst} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="row mx-0 my-5 my-md-0" id="super-blog">
                    <div className="col-12 text-center py-5 py-md-2">
                        <h1 className="font-raleway text-center text-Black">But how do we do what we do?<br /></h1>
                        <a className="btn btn-outline-success btn-cta mb-5" href="https://blog.gojekengineering.com/" target="_blank">EVERYTHING
                        GOJEK DOES</a>
                    </div>
                </section>


            </section>
        )
    }
}

export default SuperApp; 
