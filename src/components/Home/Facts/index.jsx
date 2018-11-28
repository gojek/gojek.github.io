import React, { Component } from 'react';
import Slider from "react-slick";

import data from '../data.json';
import Slide from './slide';
import Card from './card';

class GoJekFacts extends Component {
    render() {
        const { work } = data;
        const { responsiveData } = data.work;
        
        var settings = {
			arrows: true,
			slidesToShow: 1,
			responsive: [{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 577,
				settings: {
					slidesToShow: 1
				}
			}]
		};
        
        return (
            <div>
                <section className="py-5 mb-5 d-lg-none color-azure">
                    <div className="container-fluid">
                        <h2 className="font-xl-l  text-center raleway-extrabold mb-4 text-dark ">{ work.heading }</h2>

                        <Slider {...settings} className="row raleway-extrabold text-white text-center custom-controls-dark">
                            {responsiveData.map((sliderItem, key) => 
                                <Slide data={sliderItem} key={key} />
                            )}
                        </Slider>
                    </div>
                </section>

                <section className = "py-5 mb-5 color-azure d-none d-lg-block text-white">
                    <div className = "container text-center">
                        <h2 className = "font-xl-l raleway-extrabold mb-4 text-dark">{ work.heading }</h2>

                        <div className="row">
                            {
                                work.data.map((cardData, key) => 
                                    <Card data={cardData} key={key} />
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default GoJekFacts;