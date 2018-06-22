import React, { Component } from 'react';
import Slider from "react-slick";

import data from '../data.json';
import Slide from './slide';

class Advantages extends Component {
    render() {
        const { advantages } = data;

        var settings = {
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    dots: true,
                    slidesToShow: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: true,
                    centerMode: false,

                    slidesToShow: 1
                }
            }]
        };
        
        return(
            <section className="py-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="h2 mb-4 font-xl-l raleway-extrabold"> { advantages.heading }</h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <Slider {...settings} className="row go-jek-slider lg-controls-dark custom-controls-dark">
                        {advantages.data.map((sliderItem, key) => <Slide data={sliderItem} key={key} />)}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Advantages;