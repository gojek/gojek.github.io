import React, { Component } from 'react';
import Slider from "react-slick";

import data from '../data.json';
import Slide from './slide';

class Principles extends Component {
    render() {

        var settings = {
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 769,
				settings: {
                    arrows: true,
					centerMode: true,
					slidesToShow: 3
				}
			}, {
				breakpoint: 577,
				settings: {
                    arrows: true,
					dots: true,
					slidesToShow: 1
				}
			}]
		};

        const { principles } = data;
        const heading = principles.heading.split(" ");
        var headText = [];
        var text = [];

        heading.forEach((element, index) => {
            headText.push(<span key={index}>{element} <br />
            </span>);
        });

        const principlesText = principles.content.split("|");
        principlesText.forEach((element, index) => {
            text.push(<p key={index}>{element} </p>);
        });
        
        
        return(
            <section className="py-5">
                <div className="container pl-lg-0">
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <div className="bg-101">
                                <h1 className="h2 font-xl-l "> {headText} </h1>
                            </div>
                        </div>
                        <div className="col-md-8 font-xs-l text-gray text-justify">
                            { text }
                        </div>
                    </div>

                    {/* Slider */}
                    <Slider {...settings} className="slick-slider principle-slider text-center text-md-left custom-controls-dark">
                        {
                            principles.data.map((sliderItem, key) => 
                                <Slide data={sliderItem} key={key} />
                            )
                        }                        
                    </Slider>
                    {/* End Slider */}
                </div>
            </section>
        );
    }
}

export default Principles;