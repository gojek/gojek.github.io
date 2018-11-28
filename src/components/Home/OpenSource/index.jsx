import React, { Component } from 'react';
import Slider from 'react-slick';

import data from '../../../../data/openSource.json'
import Card from '../../Common/openSourceCard';
import TechStack from './techStack';
import technologies from '../data.json';

class OpenSource extends Component {
    render() {
        const { projects } = data.data; 
        const { techStack } = technologies;
        var settings = {
            responsive: [{
                breakpoint: 767,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
            }]
        };
        
        return(
            <section className="py-5 bg-green">
                <div className="container">
                    <h1 className="h2 pl-0 font-xl-l text-center text-white"> { data.data.heading } </h1>

                    {/* Show cards on Desktop and hide on mobile devies */}
                    <div className="d-none d-lg-block">
                        <div id="opensourceCards" className="row justify-content-md-center pt-4 ">
                            {projects.map((project, key) => {
                                    if(key <= 3) {
                                        return(
                                            <Card data={project} key={key} />
                                        )
                                    }
                                }
                                
                            )}                       
                        </div>
                    </div>
                    {/* End */}

                    {/* Show slider on mobile device */}
                    <Slider {...settings} className="d-lg-none row justify-content-md-center pt-4 custom-controls-dark">
                        {
                            projects.map((project, key) => {
                                if(key <= 3) {
                                    return(
                                        <Card data={project} key={key} />
                                    )
                                }
                            }
                        )}
                    </Slider>
                    {/* End SLider */}

                    {/* Tech Stack */}
                    <h1 className="h2 pt-3 font-xl-l text-center text-white">{techStack.heading}</h1>
                    <div className="container">
                        <div className="row pl-2 justify-content-center align-items-center">
                            {techStack.data.map((technology, key) => <TechStack data={technology} key={key} />)}                        
                        </div>
                    </div>
                    {/* End Tech stack  */}
                </div>
            </section>
        );
    }
}

export default OpenSource;