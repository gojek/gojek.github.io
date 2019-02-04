import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import CountBanner from '../components/Careers/CountBanner/CountBanner';
import CareerLocation from '../components/Careers/CareerLocation/CareerLocation';
import SearchBar from '../components/Careers/searchBar/searchBar';
import jobs from '../../data/jobs.json';
import Description from '../components/Careers/Description/Description';
import Link from 'gatsby-link';
import PositionCard from '../components/Careers/PositionCard/positionCard';

class allpositions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // locationId: '1',
            locationName: 'All',
            intervalId: 0,
            scrollTop: 'd-none ',
            inputText: '',
            places: [],
            tempPositions: null,
            positionId: null,
            positionname: null,
            deletePositionId: null,
            positionData: null,
        }
    }

    componentDidMount() {
        console.log("all-open-positions page")
        window.addEventListener('scroll', this.handleScroll);
        let places = this.state.places;
        let tempPositions = [];

        for (let i = 0; i < jobs.length; i++) {
            let count = 0;
            if (places.includes(jobs[i].place)) {
                count = count + 1;
            }
            if (count === 0) {
                places.push(jobs[i].place)
                tempPositions.push(jobs[i].place)

            }
        }
        this.getPositions(places)
    }

    getPositions = (places) => {
        let screenWidth = null;

        if (typeof window !== `undefined`) {
            screenWidth = window.innerWidth
        }

        this.setState({
            positionId: null,
            places: places,
            tempPlaces: places,
            positions: places.map(
                (place, i) => {
                    return jobs.filter(
                        (job, j) => {
                            if (job.place === place) {
                                return job
                            }
                        }
                    )
                }),
            tempPositions: places.map(
                (place, i) => {
                    return jobs.filter(
                        (job, j) => {
                            if (job.place === place) {
                                return job
                            }
                        }
                    )
                }),
            screenWidth: screenWidth
        }, () => {
            if (window.location.search.split('&')[0]) {
                this.onClickPosition(window.location.search.split('&')[0].split('=')[1])
            }
        })
    }

    onChangeURL = (id) => {
        const queryParams = [];
        queryParams.push(encodeURIComponent('position') + '=' + encodeURIComponent(id))
        const queryString = queryParams.join('&');
        this.props.history.replace({
            search: '?' + queryString
        });
        this.onClickPosition(id)
    }

    onClickPosition = (id) => {
        const { deletePositionId } = this.state
        const screenWidth = this.state.screenWidth >= 1024 ? 4 : this.state.screenWidth >= 768 ? 3 : 2
        let positions = this.state.positions;
        let indexes = [];
        let positionData = []
        this.state.tempPositions.map(
            (position, i) => {
                position.map(
                    (data, j) => {
                        if (data.positionSlug === id) {
                            indexes.push({
                                'firstIndex': i,
                                'secondIndex': j
                            })
                            positionData.push(data)
                        }
                    }
                )
            }
        )
        if (indexes.length > 0) {
            let ceilValue = (Math.ceil((indexes[0].secondIndex + 1) / screenWidth) * screenWidth)
            const insertData = {
                'type': 'description'
            }
            this.removeData(deletePositionId, indexes, () => {
                positions.map(
                    (position, i) => {
                        position.map(
                            (data, j) => {
                                if (data.positionSlug === id) {
                                    position.splice(ceilValue, 0, insertData);
                                }
                            }
                        )
                    }
                )
            })
            this.setState({
                deletePositionId: ceilValue,
                positionId: positionData[0].positionSlug,
                positionName: name,
                positionData: positionData
            })
        }
        else {
            // window.location.replace('/404')
        }
    }

    removeData = (deletePositionId, indexes, callback) => {
        deletePositionId !== null &&
            this.state.positions.map(
                (position, i) => {
                    position.map(
                        (data, j) => {
                            if (data.type) {
                                position.splice(j, 1);
                            }
                        }
                    )
                }
            )
        callback()
    }

    onClickLocation = (name, index) => {
        let tempPlaces = [name]
        this.setState({
            locationName: name,
            positionId: null,
            positions: this.state.places.map(
                (place, i) => {
                    return jobs.filter(
                        (job, j) => {
                            if (job.place === place && (job.position.toLowerCase().includes(this.state.inputText.toLowerCase()) || this.state.inputText === '') && (job.place.toLowerCase() === name.toLowerCase() || name.toLowerCase() === 'all')) {
                                return job
                            }
                        }
                    )
                }),
            tempPlaces: index === -1 ? this.state.places : tempPlaces
        })
    }

    // this method is used to check the scroll event for scroll to top button
    handleScroll = () => {
        const top = window.pageYOffset;
        if (top > 50) {
            this.setState({
                scrollTop: " d-block "
            })
        }
        else {
            this.setState({
                scrollTop: " d-none "
            })
        }
    }

    onChangeInputText = (searchText) => {
        let positions = this.state.places.map(
            (place, i) => {
                return jobs.filter(
                    (job, j) => {
                        if (job.place === place && (job.position.toLowerCase().includes(searchText.toLowerCase()) || searchText === '') && (job.place.toLowerCase() === this.state.locationName.toLowerCase() || this.state.locationName.toLowerCase() === 'all')) {
                            return job
                        }
                    }
                )
            })
        this.setState({
            inputText: searchText,
            positions: positions,
            tempPositions: positions,
            positionId: null,
        });
    }

    onClickViewPositions = (index, placeName) => {
        const positions = this.state.places.map(
            (place, i) => {
                return jobs.filter(
                    (job, j) => {
                        if (job.place === place) {
                            return job
                        }
                    }
                )
            }).map(
                (position, i) => {
                    return position.filter(
                        (data, j) => {
                            if (data.place.toLowerCase() === placeName.toLowerCase()) {
                                return data
                            }
                        }
                    )
                }
            )
        this.state.positions.splice(index, 1);
        this.state.positions.splice(index, 0, positions[index])
        this.setState({
            positions: this.state.positions
        })
    }

    onClickCloseButton = () => {
        this.props.history.replace('/all-open-positions/')
        this.onChangeInputText(this.state.inputText)
        // this.getPositions(this.state.places)
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
        this.setState({ intervalId: intervalId });
    }

    render() {
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
                <CountBanner props={this.props} bannerImage="job-illustration-banner" height="70vh" />
                <div className="container">
                    {/* search bar */}
                    <SearchBar type="allPositions" places={this.state.places} onChangeInputText={(ev) => this.onChangeInputText(ev.target.value)}
                        onClickLocation={(name, index) => this.onClickLocation(name, index)} locationName={this.state.locationName} inputText={this.state.inputText} textColor="#000" />
                    <section>
                        <div>
                            {
                                this.state.inputText === '' ?
                                    <h6 className="font-xl-l text-center raleway-bold">All Open Positions</h6>
                                    :
                                    <h6 className="font-xl-l text-center raleway-bold">Showing Results for '{this.state.inputText}'</h6>
                            }
                            {
                                this.state.positions !== undefined &&
                                this.state.positions.map(
                                    (position, i) => {
                                        return <React.Fragment key={i}>
                                            {
                                                position.length > 0 ?
                                                    <React.Fragment>
                                                        <h6 className="col-12 font-lg mb-0 mt-5 roboto-bold text-center text-black text-uppercase">{this.state.places[i]}</h6>
                                                        <hr className="my-1" />
                                                        <div className="d-flex flex-row flex-wrap justify-content-start my-3">
                                                            {
                                                                position.map(
                                                                    (data, j) => {
                                                                        return data.team !== "" ? <React.Fragment key={j}>
                                                                            {
                                                                                !data.type &&
                                                                                <PositionCard id={data.positionSlug} positionId={this.state.positionId} onChangeURL={(positionSlug) => this.onChangeURL(positionSlug)} heading={data.position} subHeading={data.team} />
                                                                            }
                                                                            {
                                                                                data.type === 'description' &&
                                                                                <Description positionName={this.state.positionname} positionData={this.state.positionData} onClickCloseButton={() => this.onClickCloseButton()} />
                                                                            }
                                                                        </React.Fragment>
                                                                            :
                                                                            <React.Fragment key={i}>
                                                                                <img className=" col-md-4 col-12 mt-3 img-fluid mx-auto text-center" src="../../images/careers/no-jobs-found.png" />
                                                                                <p  className="col-12 text-center raleway-bold  font-lg mt-3">Whoops! There are no open positions in ‘{data.place}’ currently</p>
                                                                            </React.Fragment>

                                                                    }
                                                                )
                                                            }
                                                        </div></React.Fragment> :
                                                    !this.state.tempPlaces.includes(this.state.locationName) ?
                                                        <div className="d-flex flex-row flex-wrap justify-content-center">
                                                            <h6 className="col-12 font-lg mb-0 mt-5 roboto-bold text-center text-black text-uppercase">{this.state.places[i]}</h6>
                                                            <hr className="my-1" />
                                                            <img className=" col-md-4 col-12 mt-3 img-fluid text-center" src="../../images/careers/no-jobs-found.png" />
                                                            <h6 className="col-12 pt-3 text-center roboto-regular font-md">No matching jobs found for ‘{this.state.inputText}’ in {this.state.places[i]}</h6>
                                                            <button onClick={() => this.onClickViewPositions(i, this.state.places[i])} className="col-md-4 col-12 btn btn-success">View Other Positions in {this.state.places[i]}</button>
                                                        </div>
                                                        :
                                                        null
                                            }
                                        </React.Fragment>
                                    }
                                )
                            }
                        </div>
                    </section>
                    <div className={' scrolltop  d-none  d-md-block'}>
                        <div className='scroll-icon position-absolute scroll  text-secondary'>
                            <i onClick={() => { this.scrollToTop(); }} className={this.state.scrollTop + " fa fa-2x fa-arrow-circle-up"}></i>
                        </div>
                    </div>
                </div>
                <CareerLocation props={this.props} />
            </div >
        );
    }
}

export default allpositions;
