import React, { Component } from 'react';
import Slider from "react-slick";

import data from '../data.json';
import Slide from './slide';

class TechFacts extends Component {
    render() {
        const { techFacts } = data;
        var settings = {
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            }, {
                breakpoint: 577,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    infinite: true,
                }

            }]
        };
        
        return(
            <section className="py-5">
                <div className="container">
                    <h1 className="raleway-extrabold h2 mb-4 font-xl-l text-center text-lg-left">Tech Facts</h1>
                </div>

                <div className="container-fluid pt-3 pb-3">
                    {/* Slider */}
                    <Slider {...settings} 
                        className="row tech-facts-slider text-lg-start text-center custom-controls-dark"
                    >
                        {
                            techFacts.data.map((sliderItem, key) => 
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

export default TechFacts;