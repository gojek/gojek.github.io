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
                <div className="container py-5 px-0">
                    <div className="d-flex flex-row flex-wrap raleway-bold text-white">
                        <div className="col-12 col-md-6 d-flex flex-row flex-wrap px-0">
                            <div className="col-12 pr-md-0 pl-4 my-1 my-md-0 position-relative" >
                                <a href="https://blog.gojekengineering.com/why-we-ask-for-code-b276b45ea790" target="_blank">
                                    <img className="img-fluid" src="../../images/careers/ask-for-code.png"></img>
                                    <h6 className="font-lg position-absolute text-white article-position">Why We <br />Ask for<br />Code</h6>
                                </a>
                            </div>
                            <div className="col-12 pr-md-0 pl-4 my-1 my-md-0 position-relative">
                                <a href="https://blog.gojekengineering.com/the-art-of-being-full-stack-5b88577188fd" target="_blank">
                                    <img className="img-fluid" src="../../images/careers/full-stack-engineer.png"></img>
                                    <h6 className="font-lg position-absolute text-white article-position">Who is a<br />Full Stack <br />Engineer?</h6>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-md-0 my-1 my-md-0 position-relative">
                            <a href="https://blog.gojekengineering.com/go-jek-recruitment-process-58dbed5d8992" target="_blank">
                                <img className="img-fluid" src="../../images/careers/recruiting-devs.png"></img>
                                <h6 className="font-lg position-absolute text-white article-position">How We Go<br />about Recruiting<br />a Developer</h6>
                            </a>

                        </div>
                        
                        {/* <div className="row">  */}
				            <a href="/blog/" className = "btn-success btn text-uppercase mt-5 col-md-3 col-6 text-center mx-auto"> View all Blogs</a>
                        {/* </div> */}
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