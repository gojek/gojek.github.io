import React, { Component } from 'react';
import Slider from "react-slick";

import CarouselItem from './carouselItem';
import Slide from './slide';
import data from '../data.json';
import OpenPositions from '../OpenPositions/index';
import Articles from '../Articles/index';
import CarouselIndicators from '../../Common/carouselIndicators'

class EmployeeStories extends Component {
    render() {
        const { keyword, location, team, department, showHeadings } = this.props;
        const { employeeStories } = data ;
        const { articles } = data ;
        
        var settings = {
            arrows: true,
			centerMode: false,
			centerPadding: '40px',
			dots: false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 769,
				settings: {
					dots: false,
					centerMode: true,
					slidesToShow: 3
				}
			}, {
				breakpoint: 577,
				settings: {
					dots: true,
					slidesToShow: 1
				}
			}]
        };
        
        return(
            <section className="gray-bg py-5">
                <h1 className="font-xl-l text-black py-3 text-center raleway-extrabold">
                    {employeeStories.heading}
		        </h1>

                <div className="container gray-bg">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <p className="font-xs-l text-center pb-3 roboto-regular">
                                {employeeStories.text}
					        </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid employee-stories">
                    {/* Employee stories desktop view */}
                    <div className="row d-none d-md-block pb-5">
                        <div className="col-md-11 px-0  main-carousel">
                            <div id="impactSlider" className="carousel slide" data-ride="carousel">
                                
                                <CarouselIndicators
                                    id="impactSlider"
                                    slideCount="3"
                                    type="line"
                                />

                                <div className="carousel-inner">
                                    {employeeStories.data.map((carouselItem, key) => <CarouselItem data={carouselItem} key={key} />)}
                                </div>
                            </div>
                        </div>

                        {/* Background carousel */}
                        <div className="col-md-11 px-0 background-carousel">
                            <div id="carouselExampleIndicatorstest" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src="../../images/employee-stories/employee.png" alt="Employee testimonials" />
							        </div>
                                </div>
                            </div>
                        </div>
                        {/* End Background carousel */}
                    </div>
                    {/* End Employee stories desktop view */}

                    {/* Employee stories Mobile view */}
                    <Slider {...settings} className="row stories-slider custom-controls-dark d-md-none text-center text-md-left">
                        {employeeStories.data.map((carouselItem, key) => <Slide data={carouselItem} key={key} />)}
                    </Slider>
                    {/* End Employee stories Mobile view */}
                </div>

                {/* All poen positions */}
                
                <OpenPositions
                    team = { team }
                    location = { location }
                    keyword = { keyword }
                    department = { department }
                    resetFilters = { this.props.resetFilters }
                    referer = { this.props.referer }
                    showHeadings = { showHeadings }
                />

                {/* End all open positions */}

                {/* GOJEK articles */}
                <Articles />
            </section>
        );
    }
}

export default EmployeeStories;