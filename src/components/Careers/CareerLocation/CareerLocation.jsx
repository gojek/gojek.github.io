import React, { Component } from 'react';
import data from '../data.json';

class CareerLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: '1',
            openPositionId: 'null',
        };
    }

    onClickLocation = (locationName) => {
        this.props.props.history.push(`/open-positions?location=${locationName}`)
    }

    render() {

        const locationData = [{
            locationName: 'bangalore',
            imageLink: '../../images/careers/bangalore.png'
        },
        {
            locationName: 'jakarta',
            imageLink: '../../images/careers/jakartha.png'

        },
        {
            locationName: 'singapore',
            imageLink: '../../images/careers/singapore.png'

        },
        // {
        //     locationName: 'philippines',
        //     locationLink: '#',
        //     imageLink: '../../images/careers/philipines.png'

        // },
        {
            locationName: 'vietnam',
            imageLink: '../../images/careers/vietnam.png'

        },
        {
            locationName: 'thailand',
            imageLink: '../../images/careers/thailand.png'

        }]
        return (
            <section className="pb-5">
                <h3 className="text-center text-success neosans-regular font-xl-x my-5 ">Choose a Location</h3>
                <div className="container px-0 pb-3">
                    <div className="d-flex flex-row flex-wrap justify-content-center my-3">
                        {
                            locationData.map(
                                (data, i) => {
                                    return <div key={i} className="col-md-3 col-6 text-center my-2 mx-md-1 px-2 ">
                                        <div className="career-location px-4 scroll d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '135px' }}>
                                            <div onClick={() => this.onClickLocation(data.locationName)}>
                                                <img className="img-fluid" src={data.imageLink}></img>
                                                <p className="neosans-bold font-md text-success text-uppercase my-1">{data.locationName}</p>
                                            </div>

                                        </div>
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default CareerLocation;
