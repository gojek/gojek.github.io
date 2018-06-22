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

        return(
            <div>
                <div className="container pb-5 d-none d-md-block">
                    <div className="row raleway-bold">
                        {articles.data.map((article, key) => <Card data={article} key={key} />)}
                    </div>
                </div>

                <Slider {...settings} className="d-lg-none employee-stories justify-content-md-center pt-4 custom-controls-dark">
                    {articles.data.map((article, key) => <Slide data={article} key={key} />)}
                </Slider>
            </div>
        );
    }
}

export default Articles;