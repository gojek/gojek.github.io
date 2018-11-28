import React, { Component } from 'react';

import data from '../../../../data/jobs.json'
import Card from './card';
import Link, { navigateTo } from 'gatsby-link';

var Scroll = require('react-scroll');
var Element = Scroll.Element;

class OpensPositions extends Component {
    constructor(props ){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleViewAll = this.handleViewAll.bind(this);

        this.state = {
            openPositions : []
        }
    }

    handleClick(evt) {
        navigateTo({
            pathname: '/apply',
            state: {
                id: "other-job",
                path: "others",
                name: "Others",
                place: "Bengaluru, Karnataka, India",
                jobId: "fk0f5im"
            },
        })
    }

    // Handle view all positions function
    handleViewAll() {
        this.state.openPositions = data;
    }
    
    render() {
        const { keyword, location, team, department } = this.props;

        if(location !== "" || team !== "" || keyword !== "" || department !== "") {
                var result = data.filter(function(el){
                    return ((((el["position"].toLowerCase()).includes(keyword.toLowerCase()))|| (el.place.toLowerCase()).includes(keyword.toLowerCase()) || (el.team.toLowerCase()).includes(keyword.toLowerCase()) || (el.department.toLowerCase()).includes(keyword.toLowerCase())) && (el.place.toLowerCase()).includes(location.toLowerCase()) && (el.team.toLowerCase()).includes(team.toLowerCase()) && (el.department.toLowerCase()).includes(department.toLowerCase())); 
                 });
                 this.state.openPositions = result;
        } else {
            this.state.openPositions = data;
        }

        return(
            <Element id="openPositions" name="myScrollToElement" className="container roboto-regular">
                {
                    this.props.showHeadings &&
                    <div>
                    <div className="row justify-content-lg-start justify-content-center">
                        <h1 className="h1 font-xl-l pt-5 raleway-extrabold">Open Positions</h1>
                    </div>
                    <div className="card-body pb-3 row">
                        <div className="col-md-4 font-xs-l text-uppercase roboto-bold open-position-heading d-md-block d-none">Designation</div>
                        <div className=" col-md-2 font-xs-l roboto-bold open-position-heading d-md-block d-none text-uppercase">City</div>
                        <div className=" col-md-2 font-xs-l roboto-bold open-position-heading d-md-block d-none text-uppercase">Team</div>
                        <div className=" col-md-2 font-xs-l roboto-bold open-position-heading d-md-block d-none text-uppercase">Department</div>
                    </div>
                </div>
                }
                {
                    this.state.openPositions.length === 0 &&
                    <div className="card border-0 mb-1 rounded-0">
                        <div className="card-body pb-0 row">
                            <p className="col-md-8 text-black">
                                No open roles based on your search
                            </p>

                            <button  onClick={ this.props.resetFilters } className="btn btn-link text-green col-md-4 text-success text-right pt-0">
                                View all open positions 
                            </button>
                        </div>
                    </div>
                }
                {
                    this.state.openPositions.length > 0 &&
                    this.state.openPositions.map((data, key) => <Card data={data} key={key} referer ={ this.props.referer } />)
                }
                {
                    this.props.showHeadings &&
                    <h5 className="py-5 text-black font-xs-l">Your profile doesn't fit a box? Don't worry, {" "}
                        {/* <a href="https://gojek.recruiterbox.com/jobs/fk0f5im?utm_source=gojek.io.website&utm_medium=Website&utm_campaign=gojekjobs_website"
                        target="_blank"> */}
                        <a onClick={ this.handleClick}>
                            <span className="text-green font-xs-l" style = {{ cursor: "pointer" }}>upload your resume here.</span>
                        </a>
                    </h5>
                }

            </Element>
        );
    }
}

export default OpensPositions;
