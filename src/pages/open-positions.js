import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import Categories from '../components/Careers/Categories';
import CountBanner from '../components/Careers/CountBanner/CountBanner';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationName: ''
        }

    }

    componentDidMount() {
        this.props.history.replace((this.props.location.pathname === "/open-positions/" ? "/open-positions" : this.props.location.pathname) + this.props.location.search)
        const urlLocationName = window.location.search.split('&')[0].split('=')[1]
        this.setState({
            locationName: urlLocationName.toLowerCase(),
        })
    }

    getLocationName = () => {
        let locationName = ''
        if (typeof window !== `undefined`) {
            locationName = window.location.search.split('&')[0].split('=')[1].toLowerCase()
        }
        return locationName
    }

    render() {
        console.log('here', this.props);
        return (
            <div className="first-section">
                <Helmet>
                    <title>GOJEK Careers: Check out the current job openings at GOJEK Tech</title>
                    <meta property="og:title" content="GOJEK Careers: Check out the current job openings at GOJEK Tech" />
                    <meta name="twitter:title" content="GOJEK Careers: Check out the current job openings at GOJEK Tech" />
                    <meta name="description" content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                    <meta name="twitter:description" content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                    <meta property="og:description" content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps." />
                </Helmet>
                <div className="d-md-none">
                    <img src={`../../images/careers/${this.getLocationName()}-banner.png`} className="img-fluid" />
                </div>
                <CountBanner props={this.props}  bannerImage={`${this.getLocationName()}-banner`} height="75vh" />
                <Categories props={this.props} />
            </div>

        );
    }
}

export default Location;
