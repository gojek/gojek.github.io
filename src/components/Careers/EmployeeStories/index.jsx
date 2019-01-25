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
        // const { employeeStories } = data ;
        const { articles } = data ;
        const employeeStories= {
            "heading": "At GO-JEK, we fail a lot.",
            "text": "Failing is learning. If we’re not failing, we’re not doing it right. We have a cross-pollination of ideas from Singapore, Indonesia and India. Different cultures, different mindsets, unified in solving problems and learning along the way. And lastly, embrace chaos. You can’t build if you can’t expect the unexpected.",
            "captionHeading": "Employee Stories",
            "data": [
                {
                    "id": "1",
                    "employeeImage": "../../images/employee-stories/shobit.jpg",
                    "employeeName": "Shobhit Srivastava",
                    "testimonial": "GO-JEK is multiple startups in one. We have the equivalents of foodtech, fintech, ride-sharing, home services, logistics and more. Because of the sheer size and scale we operate in, it's unlike any other startup. You get to ideate with multiple teams, empowered to take critical product decisions and work with a team that has ingrained the philosophy of working with a 'lean engineering mindset’.",
                    "active": true
                },
                {
                    "id": "2",
                    "employeeImage": "../../images/employee-stories/divya.jpg",
                    "employeeName": "Divya Jaisawal",
                    "testimonial": "I’ve had the freedom to experiment with new ideas at GO-JEK. In the process I’ve learnt to convert raw thoughts into shaping the end product. To be given this platform to experiment and learn with some of the brightest minds is an enticing opportunity. So much so, I love to talk about these experiences outside of work to friends and family alike - and that shows how rich the culture is.",
                    "active": false
                },
                {
                    "id": "3",
                    "employeeImage": "../../images/employee-stories/crystal.jpg",
                    "employeeName": "Crystal Widjaja",
                    "testimonial": "I'm actually blessed to be part of an org that has an innovative and inclusive culture. Our attitude is framed around solving difficult problems and inclusivity. This diversity of thought cuts across gender, ethnicities, and backgrounds allowing us to move fast and think different. I love that fact we are a very distributed and culturally dispersed team. I've witnessed interesting insights that I never would have without this diversity.",
                    "active": false
                }
            ]
        }
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
					slidesToShow: 1
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

                <div className="container employee-stories">
                    {/* Employee stories desktop view */}
                    <p className="d-none d-md-block font-xl-x text-center text-green neosans-regular pt-5 pb-2
                    ">Employee Stories</p>
                    <div className="row d-none d-md-block pb-5">
                        <div className="col-md-12 px-0 main-carousel" style={{boxShadow:'-25px 25px #009944'}}>
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
                        <div className="row"> 
				            <a href="/all-open-positions/" className = "btn-success btn text-uppercase mt-5 col-md-3 col-6 text-center mx-auto"> View all positions</a>
                        </div>

                        {/* Background carousel */}
                        {/* <div className="col-md-11 px-0 background-carousel">
                            <div id="carouselExampleIndicatorstest" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src="../../images/employee-stories/employee.png" alt="Employee testimonials" />
							        </div>
                                </div>
                            </div>
                        </div> */}
                        {/* End Background carousel */}
                    </div>
                    {/* End Employee stories desktop view */}

                    {/* Employee stories Mobile view */}
                    <Slider {...settings} className="row stories-slider custom-controls-dark d-md-none d-block text-center text-md-left">
                        {employeeStories.data.map((employeeStory, key) => <Slide data={employeeStory} key={key} />)}
                    </Slider>
                    {/* End Employee stories Mobile view */}
                </div>

                {/* All poen positions */}
                
                {/* <OpenPositions
                    team = { team }
                    location = { location }
                    keyword = { keyword }
                    department = { department }
                    resetFilters = { this.props.resetFilters }
                    referer = { this.props.referer }
                    showHeadings = { showHeadings }
                /> */}

                {/* End all open positions */}

                {/* GOJEK articles */}
                <Articles />
            </section>
        );
    }
}

export default EmployeeStories;