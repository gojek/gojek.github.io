import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import Categories from '../components/Careers/Categories';
import CountBanner from '../components/Careers/CountBanner/CountBanner';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

   

    render() {

        return (
            <div className="first-section">
                <Helmet>
                    <title>GO-JEK Careers: Check out the current job openings at GO-JEK Tech</title>
                    <meta property="og:title" content="GO-JEK Careers: Check out the current job openings at GO-JEK Tech" />
                    <meta name="twitter:title" content="GO-JEK Careers: Check out the current job openings at GO-JEK Tech" />
                    <meta name="description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                    <meta name="twitter:description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                    <meta property="og:description" content="GO-JEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                </Helmet>
                <div className="d-md-none">
                    <img src='../../images/careers/singapore-banner.png' className="img-fluid" />
                </div>
                <CountBanner bannerImage="singapore-banner" height="75vh" />


                <Categories props={this.props}/>
            </div>

        );
    }
}

export default Location;
