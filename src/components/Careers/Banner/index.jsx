import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Banner extends Component {
    render() {
        return (
            <section>
                <div className="d-flex flex-wrap">
                    <div className="careers-banner background-img card col-md border-0 rounded-0 d-none d-md-block">
                        <div className="card-body mt-5 justify-content-around ">
                            <div className="row justify-content-end pt-5">
                                <h1 className="col-md-10  pt-5 card-title text-white raleway-extrabold font-xl-x">Come Work{" "}
                                    <span className="text-white font-xl-x">
                                        <s>For</s>
                                    </span>
                                    <br /> With Us
										<br />
                                    <span className="roboto-regular">Subtle. But Important.</span>
                                </h1>
                            </div>
                            <div className="row justify-content-end">
                                <div className="col-md-10 pb-2">
                                    <br />
                                    {/* <a data-scroll href="#viewPosition" className="custom-btn btn btn-outline-light my-1 font-md raleway-bold">VIEW ALL POSITIONS </a> */}

                                    <Link
                                        to="openPositions"
                                        className="custom-btn btn btn-outline-light my-1 font-md raleway-bold text-white"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                    >
                                        VIEW ALL POSITIONS
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card col-md bg-dark border-0 rounded-0 go-jek-work go-jek-work-gradient background-img relative-position">

                        {/*  Mobile view careers banne */}
                        <div className="card-body text-center d-md-none mt-5 go-jek-work-text">
                            <div className="row">
                                <p className="col-lg-10 card-title text-white raleway-extrabold font-lg-x">
                                    Come Work {" "}
                                    <span className="text-white font-lg-x">
                                        <s>For</s>
                                    </span>
                                    <br /> With Us
										<br />
                                    <span className="roboto-regular">Subtle. But Important.</span>
                                </p>
                            </div>
                            <div className="row d-md-none">
                                <div className="col-md-10  px-0">
                                    <br />
                                    {/* <a data-scroll href="#viewPosition" className="banner-apply-btn btn btn-outline-light all-positions-btn py-2 my-1 raleway-bold font-md">VIEW ALL POSITIONS </a> */}

                                    <Link
                                        to="openPositions"
                                        className="custom-btn btn btn-outline-light my-1 font-md raleway-bold text-white"
                                        spy={true}
                                        smooth={true}
                                    >
                                        VIEW ALL POSITIONS
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;