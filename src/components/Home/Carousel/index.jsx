import React, { Component } from 'react';
import $ from 'jquery';
import Bootstrap from 'bootstrap';

import CarouselItem from './carouselItem';
import Button from './button';
import data from '../data.json';
import CarouselIndicators from '../../Common/carouselIndicators';

class Carousel extends Component {
    render() {
        const { carousel } = data;
        
        return (
            <section className="first-section">
                <div id="go-jek-slider" className="carousel" data-ride="carousel">
                    <div className="d-none d-md-block indicators-align">
                    
                        <CarouselIndicators
                            id="go-jek-slider"
                            slideCount="4"
                            type="circle"
                        />
                    </div>
                    <div className="carousel-inner ">
                        {
                            carousel.map((carouselItem, key) => 
                                <CarouselItem data={carouselItem} key={key} />
                            )
                        }

                        <div className="carousel-caption py-0 carousel-btn text-uppercase">
                            {/* <Button 
                                type = "dark"
                                text = "APPLY NOW"
                                link = "/careers/"
                                position="left"
                            /> */}
                            <Button 
                                type = "outline"
                                text = "VIEW OPEN POSITIONS"
                                link = "/careers/#viewPosition"
                                position="left"
                            />
                        </div>
                    </div>
                    {/* Carousel COntrols */}
                    <a className="carousel-control-prev d-sm-none" href="#go-jek-slider" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next d-sm-none" href="#go-jek-slider" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        );
    }
}

export default Carousel;
