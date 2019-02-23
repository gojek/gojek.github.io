import React, { Component } from 'react';
import data from '../data.json';

class CountBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: '1',
            openPositionId: 'null',
        };
    }

    render() {
        const pathname = this.props.props && this.props.props.location.pathname;

        const count = [{
            heading: '6600x',
            subHeading: 'total order volume growth in 3 years'
        }, {
            heading: '50+ orders',
            subHeading: 'processed on an average every second'
        }, {
            heading: '2 million+',
            subHeading: 'driver partners on the platform'
        }, {
            heading1: '18+',
            subHeading1: 'products',
            heading2: '250+',
            subHeading2: 'engineers'
        }]
        return (
            <React.Fragment >
                {/* second banner image for deasktop view */}

                <section id="career-banner-id">
                    <div className={this.props.bannerImage + ` container-fluid px-0 d-none d-md-block`} >
                        <div className="container">
                            <div className="d-flex flex-row flex-wrap justify-content-md-between justify-content-lg-around align-items-end " style={{ height: this.props.height }}>
                                {
                                    count.map(
                                        (data, i) => {
                                            return <div key={i} className="bg-white carrers-count-md careers-count-md-top text-center " >
                                                {
                                                    data.heading ?
                                                        <h6 className="font-lg-x text-success mb-0 pt-5 roboto-bold">
                                                            {data.heading}
                                                        </h6>
                                                        :
                                                        <React.Fragment>
                                                            <h6 className="font-lg-x text-success mb-0 pt-4 roboto-bold">
                                                                {data.heading1}
                                                            </h6>
                                                            <h6 className="text-muted mb-0">
                                                                {data.subHeading1}
                                                            </h6>
                                                        </React.Fragment>
                                                }
                                            </div>
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container  d-none d-md-block">
                        <div className="d-flex flex-row flex-wrap justify-content-md-between justify-content-lg-around align-items-end ">
                            {
                                count.map(
                                    (data, i) => {
                                        return <div key={i} className=" carrers-count-md careers-count-md-bottom text-center" >
                                            {
                                                data.subHeading ?
                                                    <h6 className="text-muted mb-0 px-3">
                                                        {data.subHeading}
                                                    </h6>
                                                    :
                                                    <React.Fragment>
                                                        <h6 className="text-success font-lg-x mb-0  roboto-bold">
                                                            {data.heading2}
                                                        </h6>
                                                        <h6 className="text-muted  mb-0 ">
                                                            {data.subHeading2}
                                                        </h6>
                                                    </React.Fragment>
                                            }
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </section>

                {/* count in mobile view */}
                {
                    pathname !== '/open-positions' &&
                    <section className="d-md-none">
                        <div className="d-flex flex-row flex-wrap justify-content-center  my-5">
                            {
                                count.map(
                                    (data, i) => {
                                        return <div key={i} className="col-6 text-center my-3">
                                            <div className="px-0 carrers-count-sm careers-border border-success text-center d-flex flex-column align-items-center justify-content-center mx-auto">
                                                {
                                                    data.heading ?
                                                        <React.Fragment >
                                                            <h6 className=" font-lg-x text-success mb-0  roboto-bold">
                                                                {data.heading}
                                                            </h6>
                                                            <h6 className=" text-muted font-sm mb-0 px-1">
                                                                {data.subHeading}
                                                            </h6>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <h6 className=" font-lg-x text-success mb-0  roboto-bold">
                                                                {data.heading1}
                                                            </h6>
                                                            <h6 className=" text-muted font-sm mb-0  px-1">
                                                                {data.subHeading1}
                                                            </h6>
                                                            <h6 className=" font-lg-x text-success mb-0 roboto-bold">
                                                                {data.heading2}
                                                            </h6>
                                                            <h6 className=" text-muted font-sm mb-0 px-1">
                                                                {data.subHeading2}
                                                            </h6>
                                                        </React.Fragment>
                                                }

                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </section>

                }

            </React.Fragment >
        );
    }
}

export default CountBanner;
