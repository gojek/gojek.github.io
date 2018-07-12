import React, { Component } from 'react';
import Slider from "react-slick";

import data from '../data.json';
import Slide from './slide';

class ImpactStories extends Component {
    render() {
        var settings = {
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '0px',
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: true,
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: true,
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 1
                }
            }]
        };

        const { impactStories } = data;
        return (
            <section className="pt-5">
                <div className="container">
                    <div className="row justify-content-center text-center ">
                        <h1 className="col-12 raleway-extrabold text-black mb-3 font-xl-l">{impactStories.heading}</h1>
                        <p className="font-xs-l mt-2 roboto-regular px-1">
                            {impactStories.content}
                        </p>
                    </div>
                </div>

                {/* slider */}
                <div className="container-fluid mt-3">
                    <Slider {...settings}
                        className="row impact-slider lg-controls-dark custom-controls-dark slick-dotted">
                        {
                            impactStories.data.map((sliderItem, key) =>
                                <Slide data={sliderItem} key={key} />
                            )
                        }
                    </Slider>
                </div>

                <div className="modal fade" id="impactModal" tabIndex="-1" role="dialog" aria-labelledby="impactModalLabel">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body embed-responsive embed-responsive-21by9">
                                <iframe id="iframeYoutube" className="embed-responsive-item" src="https://www.youtube.com/embed/bdHfntRaAoo?rel=0&amp;showinfo=0"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ImpactStories;