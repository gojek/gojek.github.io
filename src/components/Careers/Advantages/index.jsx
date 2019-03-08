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

        return (
            <section className="pb-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="h2 mb-4 font-xl-l raleway-extrabold"> {advantages.heading}</h2>
                    </div>
                </div>
                <div className="container-fluid d-md-none">
                    <Slider {...settings} className="row go-jek-slider lg-controls-dark custom-controls-dark">
                        {advantages.data.map((sliderItem, key) => <Slide data={sliderItem} key={key} />)}
                    </Slider>
                </div>

                <div className="container d-none d-md-block">
                    <div className="d-flex flex-row flex-wrap">
                        {
                            advantages.data.map(
                                (data, i) => {
                                    return <div key={i} className="col-4 card border-0">
                                        <img className="card-img-top rounded-0" src={data.image} alt={data.alt} />
                                        <div className="font-xs-l card-body px-2">
                                            <p className="roboto-regular">
                                                {data.text}
                                            </p>
                                        </div>
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
                {/* <div className="d-flex flex-row justify-content-center ">
                    <button type="button btn-block" className="btn btn-outline-success px-5 col-md-4 col-8  d-none d-md-block raleway-bold">VIEW MORE</button>
                </div> */}

            </section>
        );
    }
}

export default Advantages;