import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import CallToAction from '../components/Common/callToAction';

class Contact extends Component {
    render() {
        return(
            <div className="first-section">
                <Helmet>
					<title> GO-JEK Tech Contact Us </title>
				</Helmet>

                <section className="first-section">
                    <div className="container-fluid">
                        <div className="row align-items-center bg-green">
                            <div className="col-md-5 p-md-0 p-5">
                                <h1 className="raleway-bold text-center text-white">Contact Us</h1>
                            </div>
                            <div className="col-md-7 p-0">
                                <div className="bg-dark contact-banner go-jek-work-gradient background-img relative-position"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <section className="my-md-5 py-md-0 py-5">
                        <div className="row">
                            <div className="col-md-4">
                                <p className="font-md text-green text-uppercase   raleway-bold place pb-1">
                                    GO-JEK Head Office (Jakarta):           
                                </p>
                                <p className="roboto-regular address text-black">
                                Pasaraya Blok M Gedung B Lt. 6,<br /> 
                                Jalan Iskandarsyah II <br />    No.7, RW. 2, Melawai, Kebayoran Baru,<br /> RT.3/RW.1, Melawai, Kby. Baru, <br />
                                Kota Jakarta Selatan,<br /> Daerah Khusus Ibukota <br />Jakarta 12160
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p className="font-md text-green text-uppercase  raleway-bold place pb-4">
                                    GO-JEK Singapore:
                                </p>
                                <p className="roboto-regular address text-black">
                                    8 Shenton Way,<br /> AXA Tower, <br />Singapore 068811
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p className="font-md text-green text-uppercase  raleway-bold place pb-4">
                                    GO-JEK India:
                                </p>
                                <p className="roboto-regular address text-black">
                                    4th & 6th Floor Tower B,<br /> Diamond District, HAL Old Airport Road,<br /> Bengaluru, <br />Karnataka 560008
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="container">
                        <section>
                            <div className="row">
                                <div className="col-md-5 bg-green">
                                    <h5 className="h5 text-uppercase raleway-extrabold text-white text-center pt-5 pb-4 contact">
                                        Careers
                                    </h5>
                                    < CallToAction
                                        theme = "green"
                                        text = "Think you fit the bill?"
                                        btnText = "APPLY NOW"
                                        link = "/careers/" /
                                    >
                                </div>

                                <div className="col-md-7 gray-bg text-black text-center">
                                    <h5 className="raleway-extrabold text-uppercase h5 pt-5 pb-4">
                                        go-jek tech contact
                                    </h5>
                                    <p className=" text-uppercase mb-0 roboto-black contact">Mail</p>
                                    <a href="mailto:contact@gojek.io" className="text-green roboto-regular font-md"><u>contact@gojek.io</u></a>

                                    <p className="pt-4 text-uppercase mb-0 roboto-black contact">Social</p>
                                    <ul className="list-inline font-xl-l">
                                        <li className="list-inline-item">
                                            <a href="https://www.facebook.com/gojektech
                                            " target="_blank">
                                                <i className="fa fa-facebook-official text-green" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item px-5">
                                            <a href="https://twitter.com/gojektech
                                            " target="_blank">
                                                <i className="fa fa-twitter text-green" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.linkedin.com/company/go-jek-india/
                                            " target="_blank">
                                                <i className="fa fa-linkedin-square text-green" aria-hidden="true"></i>
                                            </a>
                                        </li>
							</ul>
                                </div>

                                <div className="col-md-7 p-0">
                                    <div className="gojek-expansion go-jek-work-gradient background-img relative-position"></div>
                                </div>
                                <div className="contact-bg col-md-5 d-flex align-items-center pb-5">
                                    <h4 className="text-white pt-5 pt-md-0 raleway-bold  h2">
                                    GO-JEK expands to 4 new
                                    markets - Thailand, Vietnam, Singapore & Phillippines
                                    </h4>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;