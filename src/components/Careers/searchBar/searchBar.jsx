import React, { Component } from 'react';
import data from '../data.json';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationName: 'Location'
        };
    }

    onClickPositionFromSearch = (data) => {
        this.props.props.history.push(`/open-positions?location=${data.place}&team=${data.team.replace(/ +/g, "")}&position=${data.positionSlug}`)
    }

    getCurrentWidth = () => {
        let screenWidth = null;
        if (typeof window !== `undefined`) {
            screenWidth = window.innerWidth
        }
        // console.log("screenWidth",screenWidth)
        return screenWidth
    }

    render() {
        const { places, searchResult } = this.props;
        const locations = [{
            id: '1',
            locationName: 'All'
        }, {
            id: '2',
            locationName: 'Bangalore'
        },
        {
            id: '3',
            locationName: 'Jakarta'
        },
        {
            id: '4',
            locationName: 'Thailand'
        },
        {
            id: '5',
            locationName: 'Singapore'
        },
        // {
        //     id: '6',
        //     locationName: 'Philippines'
        // },
        {
            id: '7',
            locationName: 'Vietnam'
        }]
        return (
            <div className={"py-5 col-11 mx-auto" + `${this.props.type === 'careers' ? ` col-md-8 ` : ` col-md-12 `} `}>
                <div className=" d-flex flex-row flex-wrap justify-content-between align-items-center col-md-12 mx-auto">
                    <div className={`text-left px-0` + `${this.props.type === 'careers' ? ` col-lg-12 col-md-8 ` : ` col-12 col-lg-2 col-md-3 text-md-right`} `}>
                        <h6 className="text-success raleway-extrabold font-xl-l mb-0">Search&nbsp;</h6>
                    </div>
                    <div className={`text-left px-0 position-relative ` + `${this.props.type === 'careers' ? ` col-12   ` : ` col-12 col-lg-9 col-md-8`}`}>
                        <input onChange={(ev) => this.props.onChangeInputText(ev)} type="text" name="keyword" value={this.props.inputText} className="form-control   custom-search bg-gray border-0 py-3 mt-2 " id="keyword" placeholder="Search Position"></input>
                        <i className="fa fa-search position-absolute " style={{ right: '10px', top: this.getCurrentWidth() < 558 ? '20px' : '25px'}}></i>
                    </div>
                    {
                        (this.props.type === 'careers' && searchResult !== null) &&
                        <div className="col-12 px-0 d-flex flex-row flex-wrap justify-content-center" style={{ maxHeight: '150px', overflowY: 'scroll' }}>
                            {
                                searchResult.map(
                                    (data, i) => {
                                        return <div key={i} onClick={() => this.onClickPositionFromSearch(data)} className="text-left bg-white-hover-gray border-0 py-2 col-12 scroll">
                                            <span className="roboto-regular font-sm text-dark ">
                                                {data.position}
                                            </span>&nbsp;
                                            <span className="roboto-bold text-success font-sm">
                                                {data.place}
                                            </span>
                                        </div>
                                    }
                                )
                            }
                        </div>

                    }
                    {
                        this.props.type !== 'careers' &&
                        <div className="col-12 col-md-3 col-lg-3 text-left d-none d-md-block">
                        </div>
                    }

                    <div className={`d-flex flex-row flex-wrap justify-content-md-start justify-content-center px-0 py-0 py-md-3 ` + `${this.props.type === 'careers' ? ` col-12 ${(searchResult !== null && searchResult.length !== 0) ? ' bg-white p-2 ' : 'bg-transparent'}` : ` col-12 col-lg-9 col-md-8`}`}>
                        <h6 onClick={() => this.props.onClickLocation('All', -1)}
                            className={`scroll col- mr-3 roboto-bold d-none d-md-block` +
                                `${this.props.locationName === 'All' ? ` custom-tabs-highlight ` : ` custom-tabs-unhighlight ${this.props.textColor}`} `}>All</h6>
                        {
                            places.map(
                                (data, i) => {
                                    return <h6 key={i} onClick={() => this.props.onClickLocation(data, i)}
                                        className={`scroll col- mr-3 roboto-bold d-none d-md-block` + `${data === this.props.locationName ? ` custom-tabs-highlight ` : ` custom-tabs-unhighlight ${this.props.textColor}`} `}>{data}</h6>
                                }
                            )
                        }
                        {

                            (searchResult && searchResult !== null && searchResult.length !== 0) ?
                                <React.Fragment>
                                    <span style={{fontSize:'14px'}} className="roboto-regular">* Candidates can only apply from their country of origin. </span>
                                    <button onClick={() => this.onClickPositionFromSearch(searchResult[0])} type="button" className="btn bg-success btn-sm ml-auto text-white raleway-extrabold ">Search<i className="fa fa-search pl-3"></i></button>
                                </React.Fragment>
                                : ''
                        }
                    </div>

                    <div className="d-md-none col-12 px-0 my-3">
                        <div className="dropdown position-relative">
                            <button className="btn btn-block btn-success dropdown-toggle custom-dropdown text-left neosans-regular py-2 font-md " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Location: {this.props.locationName}
                            </button>
                            <i className="fa fa-chevron-down position-absolute text-white" style={{ right: '10px' }}></i>
                            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                <button onClick={() => this.props.onClickLocation('All', -1)} className="dropdown-item" type="button">All</button>
                                {
                                    places.map(
                                        (data, i) => {
                                            return <button key={i} onClick={() => this.props.onClickLocation(data, i)} className="dropdown-item" type="button">{data}</button>
                                        })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default SearchBar;
