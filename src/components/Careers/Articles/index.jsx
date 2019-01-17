import React, { Component } from 'react';
import Slider from 'react-slick';

import data from '../data.json';
import Card from './card';
import Slide from './slide';

class Articles extends Component {
    render() {
        const { articles } = data;

        var settings = {
            responsive: [{
                breakpoint: 767,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
            }]
        };

        return (
            <div>
                <div className="container py-5 ">
                    <div className="d-flex flex-row flex-wrap raleway-bold text-white px-0">
                        <div className="col-12 col-md-6 d-flex flex-row flex-wrap px-0">
                            <div className="col-12 px-0 position-relative">
                                <img className="img-fluid" src="../../images/careers/ask-for-code.png"></img>
                                <p className="font-xl-l position-absolute" style={{ top: '25px', left: '30px' }}>Why We <br />Ask for<br />Code</p>
                            </div>
                            <div className="col-12 px-0 position-relative">
                                <img className="img-fluid" src="../../images/careers/full-stack-engineer.png"></img>
                                <p className="font-xl-l position-absolute" style={{ top: '25px', left: '30px' }}>Who is a<br />Full Stack <br />Engineer?</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-0 position-relative">
                            <img className="img-fluid" src="../../images/careers/recruiting-devs.png"></img>
                            <p className="font-xl-l position-absolute" style={{ top: '25px', left: '30px' }}>How We Go<br />about Recruiting<br />a Developer</p>
                        </div>
                    </div>
                </div>

                {/* <Slider {...settings} className="d-md-none employee-stories justify-content-md-center pt-5 custom-controls-dark">
                    {articles.data.map((article, key) => <Slide data={article} key={key} />)}
                </Slider> */}
            </div>
        );
    }
}

export default Articles;