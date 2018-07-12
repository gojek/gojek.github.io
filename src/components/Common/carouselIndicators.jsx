import React, { Component } from 'react';
import _ from 'lodash';

class CarouselIndicators extends Component {
    render() {
        const { id } = this.props;
        const { slideCount } = this.props;
        const { type } = this.props;
        return (
            // <ol className="carousel-indicators careers-carousel-indicators  justify-content-end">
            
                
            // </ol>
             <ol 
                className={(type === 'circle') ? 'carousel-indicators homepage-carousel-indicators  mx-0 col-xl-2 col-lg-2 col-md-3 ml-lg-5 ml-xl-5 mb-xl-5 pt-lg-4 justify-content-end' : 'carousel-indicators careers-carousel-indicators  justify-content-end'}                
            >
                {
                    _.times(slideCount, function(key) {
                        return(
                            <li 
                                data-target={"#" + id} 
                                data-slide-to={ key } 
                                className={key === 0 ? "active" : ''}
                                key = { key }
                            >
                            </li>
                        )
                    })
                }
            </ol>
        )
    }
}

export default CarouselIndicators;