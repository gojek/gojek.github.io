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
        this.props.props.history.push(`/location?name=${locationName}`)
    }

    render() {

        const locationData = [{
            locationName: 'bangalore',
            locationLink: '/location',
            imageLink: '../../images/careers/bangalore.png'
        },
        {
            locationName: 'jakarta',
            locationLink: '#',
            imageLink: '../../images/careers/bangalore.png'

        },
        {
            locationName: 'singapore',
            locationLink: '#',
            imageLink: '../../images/careers/bangalore.png'

        },
        {
            locationName: 'philippines',
            locationLink: '#',
            imageLink: '../../images/careers/bangalore.png'

        },
        {
            locationName: 'vietnam',
            locationLink: '#',
            imageLink: '../../images/careers/bangalore.png'

        },
        {
            locationName: 'thailand',
            locationLink: '#',
            imageLink: '../../images/careers/bangalore.png'

        }]
        return (
            <section>
                <h3 className="text-center text-success raleway-extrabold font-lg my-5 ">Choose a Location</h3>
                <div className="container px-0">
                    <div className="d-flex flex-row flex-wrap justify-content-center my-3">
                        {
                            locationData.map(
                                (data, i) => {
                                    return <div key={i} className="col-md-3 col-6 text-center my-2 mx-md-1 px-2 ">
                                        <div className="career-location px-4 scroll">
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
